import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups/index";
import theme from "./src/theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

export default function App() {
  //flag para informar se o carregamento das fontes foi concluído ou não
  const [fonstsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fonstsLoader ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
