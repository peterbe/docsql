// import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

export function Footer() {
  //   const { setTheme } = useNextTheme();
  //   const { isDark, type } = useTheme();
  //   const { type } = useTheme();

  const darkMode = useDarkMode(false);

  return (
    <div>
      {/* The current theme is: {type} */}
      <Switch
        initialChecked={Boolean(darkMode.value)}
        onChange={() => {
          // setTheme(e.target.checked ? "dark" : "light")
          darkMode.toggle();
        }}
        // size="xl"
        // iconOn={<Sun filled />}
        // iconOff={<Moon filled />}
      />
    </div>
  );
}
