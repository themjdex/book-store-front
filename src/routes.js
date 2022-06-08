import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/constants";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import BookPage from "./pages/BookPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUTE,
        component: Basket
    },
];


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: Shop
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        component: BookPage
    },
];

