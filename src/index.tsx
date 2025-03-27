import {createRoot} from "react-dom/client"
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "#/pages/about/About.lazy";
import {LazyShop} from "#/pages/shop/Shop.lazy";


const root = document.getElementById('root')
if (!root) {
    throw new Error('root not found')
}

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/about',
                Component: LazyAbout
            },
            {
                path: '/shop',
                Component: LazyShop
            }
        ]
    }
])

const container = createRoot(root)

container.render(
    <RouterProvider router={router} />
);