import { theme as chakraTheme, extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({
  styles: {
    global: {
      "html, body": {
        background: "#F9F8F8",
      },
    },
  },
  components: chakraTheme.components,
});

export default theme;
