import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups/index";
import theme from "./src/theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
