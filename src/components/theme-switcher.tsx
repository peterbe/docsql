import { useMantineColorScheme, Button } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

export function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Button
      variant="subtle"
      leftIcon={dark ? <SunIcon /> : <MoonIcon />}
      onClick={() => toggleColorScheme()}
      style={{
        position: "absolute",
        top: 3,
        right: 3,
      }}
    >
      {dark ? "Make it bright" : "Go dark"}
    </Button>
  );
}
