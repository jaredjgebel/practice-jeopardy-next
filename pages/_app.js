import { ChakraProvider } from "@chakra-ui/react";
import Background from "../components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Background>
        <Component {...pageProps} />
      </Background>
    </ChakraProvider>
  );
}

export default MyApp;
