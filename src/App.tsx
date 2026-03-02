import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import CarDetailPage from "./pages/CarDetailPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const MainLayout = () => {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/register';

    return (
        <>
            {!hideNavAndFooter && <Navbar />}
            <main className={hideNavAndFooter ? "" : "min-h-screen"}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route path="/car/:id" element={<CarDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {!hideNavAndFooter && <Footer />}
        </>
    );
};

const App = () => (
    <div className="font-primarylw bg-background text-foreground">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <MainLayout />
                <ToastContainer 
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
