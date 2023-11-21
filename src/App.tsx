import { ThemeProvider } from "@emotion/react";
import MainPage from "./pages/main-page/MainPage";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer
        draggable
        rtl={false}
        newestOnTop
        closeButton
        pauseOnHover
        closeOnClick
        theme="light"
        pauseOnFocusLoss
        autoClose={5000}
        position="top-right"
      />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
