import "./App.css";
import Admin from "./Pages/Admin";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ContactPage from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import FAQ from "./Pages/FAQ";
import User from "./Pages/Admin/User";
import Product from "./Pages/Admin/Product";
import Category from "./Pages/Admin/Category";
import Order from "./Pages/Admin/Order";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="body-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="user" element={<User />} />
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
