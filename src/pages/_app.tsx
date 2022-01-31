import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import "../styles/globals.css";
import type { AppProps } from "next/app";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    // colors: {...},
    colors: {
      code: "#333",
      codeLight: "#efefef",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    // colors: {...},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);
  // const darkMode = { value: false };

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
