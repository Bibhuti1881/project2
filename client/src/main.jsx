import "./index.css";
import App from "./App.jsx";
import router from "./route/index.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.js";

createRoot(document.getElementById('root')).render(
   // <StrictMode>
   <Provider store={store}>
   <RouterProvider router={router}/>
 </Provider>
 // </StrictMode>,
)
