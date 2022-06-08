import './App.css';
import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import {ADMIN_ROUTE, BASKET_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/constants";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import BookPage from "./pages/BookPage";
import RequireAuth from "./components/RequireAuth";
import ErrorPage from "./pages/ErrorPage";


function App() {

  return (

    <Routes>
        <Route index path={SHOP_ROUTE} element={<Shop />} />
        <Route path={ADMIN_ROUTE} element={
            <RequireAuth>
                <Admin />
            </RequireAuth>} />

        <Route path={LOGIN_ROUTE} element={<Auth />} />
        <Route path={REGISTRATION_ROUTE} element={<Auth />} />
        <Route path={BASKET_ROUTE} element={<Basket />} />
        <Route path={BOOK_ROUTE + '/:id'} element={<BookPage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>


  );
}

export default App;
