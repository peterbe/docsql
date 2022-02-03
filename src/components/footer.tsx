import { Switch, useMantineColorScheme } from "@mantine/core";
// import { SunIcon, MoonIcon } from "@modulz/radix-icons";

export function Footer() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return null;
  return (
    <Switch
      // color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark
        ? "Light"
        : // <SunIcon style={{ width: 18, height: 18 }} />
          // <MoonIcon style={{ width: 18, height: 18 }} />
          "Dark"}
    </Switch>
  );
}
