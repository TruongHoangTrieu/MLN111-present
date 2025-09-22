import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNavBar/MyNav";
import HeroSection from "./components/Hero-Section/Hero-Section";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ServicePage from "./pages/ServicePage/ServiceDetailPage";
import ServiceDetailPage from "./pages/ServicePage/ServiceDetailPage";



function App() {
  return (
    <>
      <BrowserRouter>
    <ScrollToTop />
        <MyNav />
         <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/detaild/:id" element={<DetailPage />} />
           <Route path="/services/:id" element={<ServiceDetailPage />} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
