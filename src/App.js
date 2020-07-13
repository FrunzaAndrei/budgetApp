import React from "react";
import "./App.css";
import ActionContainer from "./components/ActionContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActionContainer />
      </div>
    </Provider>
  );
}

export default App;
