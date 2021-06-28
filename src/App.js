import { ToastProvider } from "react-toast-notifications";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-center"
    >
      <Header />
      <Main />
    </ToastProvider>
  );
}

export default App;
