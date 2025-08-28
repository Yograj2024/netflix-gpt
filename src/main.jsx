import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { Suspense } from "react";
import ShimmerUI from "./components/ShimmerUI";

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={appStore}>
        <Suspense fallback = {<ShimmerUI/>} >
            <App/>
        </Suspense>
    </Provider>
)



// 8009281625
