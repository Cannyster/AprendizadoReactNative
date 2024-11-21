import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups/index";
import themeDefault from "./src/theme/index";

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Groups />
    </ThemeProvider>
  );
}
