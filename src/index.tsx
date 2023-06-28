import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FavoriteProvider from "./context";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <FavoriteProvider>
            <App />
        </FavoriteProvider>
    </BrowserRouter>
);
