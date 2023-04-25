import AppRouter from "./router/AppRouter";
import { Reset } from "styled-reset";
function App() {
  console.log(
    "%c DEV Log 포르젝트.",
    "color:white; font-size:20px; background: black"
  );
  console.log(
    "%c 1.1.2 버전입니다.",
    "color:white; font-size:20px; background: black"
  );

  return (
    <>
      <Reset />
      <AppRouter />
    </>
  );
}

export default App;
