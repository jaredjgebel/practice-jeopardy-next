import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <ColorModeProvider options={{ initialColorMode: "dark" }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
