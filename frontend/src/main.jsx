import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//show error
import { Toaster } from "sonner";

import { Provider } from "react-redux";
import store from "../redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  //    <Toaster/>
  // </StrictMode>,
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
