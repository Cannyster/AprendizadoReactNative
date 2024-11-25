import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups/index";
import theme from "./src/theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  //flag para informar se o carregamento das fontes foi concluído ou não
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoader ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
