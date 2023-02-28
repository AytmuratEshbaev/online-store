import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage, ContactPage, AboutUsPage, FAQ, Admin, User, Products, Category, Order, NotFound } from "../Pages";

const RouteContainer = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about-us" element={<AboutUsPage />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="/admin" element={<Admin />}>
                    <Route path="user" element={<User />} />
                    <Route path="product" element={<Products />} />
                    <Route path="category" element={<Category />} />
                    <Route path="order" element={<Order />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteContainer;