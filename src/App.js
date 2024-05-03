import "./App.css";
import Joblist from "./pages/Joblist";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Joblist />
    </Provider>
  );
}

export default App;
