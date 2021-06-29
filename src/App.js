import { ToastProvider } from "react-toast-notifications";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import CurrentEventContextProvider from './contexts/CurrentEventContext';

function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-center"
    >
      <CurrentEventContextProvider>
        <Header />
        <Main />
      </CurrentEventContextProvider>
    </ToastProvider>
  );
}

export default App;
