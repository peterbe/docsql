import { useEffect, useState, useRef } from "react";
import { CloseButton, Paper, Textarea } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import getCaretCoordinates from "textarea-caret";

import styles from "../styles/textarea-with-completion.module.css";

type ExtraProps = {
  completionCallback: (x: string) => string[];
  onNewValue: (x: string) => void;
  onSubmit: () => void;
};
type Props = React.ComponentProps<typeof Textarea> & ExtraProps;

type CaretPosition = {
  top: number;
  left: number;
};

export function TextareaWithCompletion(props: Props) {
  const { onSubmit, completionCallback, onNewValue, value, ...wrappedProps } =
    props;

  const [debounced] = useDebouncedValue(value, 200);
  const [options, setOptions] = useState<string[]>([]);
  const [sliced, setSliced] = useState<Slice | null>(null);
  const [caretPosition, setCaretPosition] = useState<CaretPosition | null>(
    null
  );
  const [highlightPosition, setHighlightPosition] = useState(-1);
  useEffect(() => {
    if (!options.length) {
      setHighlightPosition(-1);
    }
  }, [options]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaElement = textareaRef.current;
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.metaKey) {
        onSubmit();
        return;
      }

      if (event.key === "Escape") {
        // console.log("ESCAPE!", options.length);

        if (options.length) {
          event.preventDefault();
          setOptions([]);
        }
      } else if (event.key === "Enter") {
        if (options.length && highlightPosition > -1) {
          console.log("SUBMIT option");

          event.preventDefault();
          completeIt(options[highlightPosition]);
        } else {
          console.log("Noting preferred");
        }
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if (options.length) {
          event.preventDefault();
          console.log("SET HIGHLIGHT OPTION", event.key);
          setHighlightPosition((prevState) => {
            if (event.key === "ArrowDown") {
              return Math.min(options.length - 1, prevState + 1);
            } else {
              return Math.max(0, prevState - 1);
            }
          });

          // setHighlightOption(...)
        } else {
          setOptions([]);
        }
      }
    };

    const listenerUp = (event: KeyboardEvent) => {
      if (textareaElement) {
        const { top, left } = getCaretCoordinates(
          textareaElement,
          textareaElement.selectionStart
        );
        setCaretPosition({ top, left });
      }
    };

    if (textareaElement) {
      textareaElement.addEventListener("keydown", listener);
      textareaElement.addEventListener("keyup", listenerUp);
    }

    return () => {
      if (textareaElement) {
        textareaElement.removeEventListener("keydown", listener);
        textareaElement.removeEventListener("keyup", listenerUp);
      }
    };
  }, [textareaElement, options, highlightPosition, onSubmit]);

  useEffect(() => {
    if (sliced) {
      setOptions(completionCallback(sliced.slice));
    } else {
      setOptions([]);
    }
  }, [sliced, completionCallback]);

  useEffect(() => {
    if (textareaElement) {
      const newSlice = getCurrentSlice(textareaElement);
      console.log({ debounced, newSlice });

      setSliced(newSlice);
      // if (sliced) {
      //   const options = completionCallback(sliced.slice);
      //   setOptions(options);
      // }
    }
  }, [debounced, textareaElement]);

  function completeIt(option: string) {
    if (!sliced || !value || typeof value !== "string") return;
    console.log(sliced);

    let newValue = value.slice(0, sliced.start);
    console.log({ left: newValue });

    newValue += option;
    newValue += value.slice(sliced.end);
    // console.log({ newValue });
    // onChange(newValue);
    onNewValue(newValue);
  }

  return (
    <div className={styles.wrapper}>
      <Textarea
        {...wrappedProps}
        ref={textareaRef}
        value={value}
        onChange={(event) => {
          // if (onChange) onChange(event);
          onNewValue(event.target.value);
        }}
      />
      {caretPosition && options.length > 0 && (
        <Paper
          padding="xs"
          shadow="sm"
          className={styles.completion}
          style={
            caretPosition
              ? { top: caretPosition.top + 5, left: caretPosition.left + 5 }
              : undefined
          }
        >
          <CloseButton
            aria-label="Close modal"
            style={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => {
              setOptions([]);
            }}
          />

          <ul className={styles.options}>
            {options.map((option, i) => {
              return (
                <li
                  key={option}
                  onClick={() => {
                    completeIt(option);
                  }}
                  className={
                    highlightPosition === i
                      ? styles.highlighted_option
                      : undefined
                  }
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <small>{JSON.stringify(highlightPosition)}</small>
        </Paper>
      )}
    </div>
  );
}

type Slice = { start: number; end: number; slice: string };

function getCurrentSlice(target: HTMLTextAreaElement): Slice | null {
  const { selectionEnd, value } = target;

  let start = selectionEnd - 1;
  let end = selectionEnd;

  console.log("start:", start, "end:", end);

  while (value.charAt(start) && start > 0 && !/\s/.test(value.charAt(start))) {
    start--;
  }
  const slice = value.slice(start, end).trim();
  // console.log("slice:", slice);

  if (end > 0 && slice) {
    // console.log({ start, end }, { SLICE: slice });
    return { start, end, slice };
  } else {
    return null;
  }
}
