import Routers from "Routes/Routers";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "store/rtkStore";
function App() {
  return (
    <>
      <Provider store={store}>
        <Routers />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
