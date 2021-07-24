import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import Reducers from "./redux/reducers";
import AppContainer from "./navigation";

export default function App() {
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppContainer />
      </ApplicationProvider>
    </Provider>
  );
}
