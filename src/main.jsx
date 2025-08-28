import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={appStore}>
        <App/>
    </Provider>
)



// 8009281625
