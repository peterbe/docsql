import { useMantineColorScheme, Button } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Button
      variant="subtle"
      leftSection={dark ? <IconSun /> : <IconMoonStars />}
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
