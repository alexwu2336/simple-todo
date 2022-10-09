import * as React from "react";

import TodoApp from "./screens/TodoApp";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Auth>
          <TodoApp />
        </Auth>
      </PersistGate>
    </Provider>
  );
};

export default App;
