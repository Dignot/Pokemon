import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./shared/store/index.ts";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./shared/router/index.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRoute />
        </Provider>
    </BrowserRouter>
);
