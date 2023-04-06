import AppRouter from "./router/AppRouter";
import { Reset } from "styled-reset";
function App() {
  console.log("fuck", process.env.REACT_APP_SERVER);
  return (
    <>
      <Reset />
      <AppRouter />
    </>
  );
}

export default App;
