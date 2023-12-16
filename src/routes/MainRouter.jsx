import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from '../components/NavBarComponents';
import { Home } from "../pages/Home";
import Category from "../pages/Category";
import { ItemDetailContainer } from "../pages";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
        <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:productId" element={<ItemDetailContainer/>} />
                <Route path="/category/:categoryId" element={<Category/>} />
            </Routes>
        </BrowserRouter>
    );
};