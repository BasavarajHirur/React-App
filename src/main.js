import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/error';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import { RestraurantMenu } from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/restaurant/:id',
                element: <RestraurantMenu />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={routerConfig} />
);