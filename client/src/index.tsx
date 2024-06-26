import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store  ,persister} from "./Redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persister}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
       </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
