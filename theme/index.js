import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

const overrides = {
  colors: {
    dukeBlue: "#050b9d",
  },
  fonts: {
    heading: "Franklin Gothic Medium",
    body: "Franklin Gothic Medium",
  },
};

export default extendTheme(overrides);
