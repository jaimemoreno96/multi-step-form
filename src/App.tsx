import { Provider } from "react-redux";
import { MainContainer } from "./layout";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
