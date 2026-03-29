import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import useTemplateInit from './hooks/useTemplateInit';

// Layout imports
import Preloader from './components/layout/Preloader';
import BackToTop from './components/layout/BackToTop';
import SearchPopup from './components/layout/SearchPopup';
import OffcanvasMenu from './components/layout/OffcanvasMenu';

// Generated page imports
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Index10 from './pages/Index10';
import Index2 from './pages/Index2';
import Index3 from './pages/Index3';
import Index4 from './pages/Index4';
import Index5 from './pages/Index5';
import Index6 from './pages/Index6';
import Index7 from './pages/Index7';
import Index8 from './pages/Index8';
import Index9 from './pages/Index9';
import IndexRtl from './pages/IndexRtl';
import Index from './pages/Index';
import Login from './pages/Login';
import New from './pages/New';
import Password from './pages/Password';
import Pricing from './pages/Pricing';
import ProjectDetails from './pages/ProjectDetails';
import Project from './pages/Project';
import ServiceDetails from './pages/ServiceDetails';
import Service from './pages/Service';
import ShopDetails from './pages/ShopDetails';
import Shop from './pages/Shop';
import TeamDetails from './pages/TeamDetails';
import Team from './pages/Team';
import Wishlist from './pages/Wishlist';

function AppContent() {
  // Initialize all template JS functionality
  useTemplateInit();

  return (
    <>
      {/* Layout Components */}
      <Preloader />
      <BackToTop />
      <SearchPopup />
      <OffcanvasMenu />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogdetails" element={<BlogDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/error" element={<Error />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/index10" element={<Index10 />} />
              <Route path="/index2" element={<Index2 />} />
              <Route path="/index3" element={<Index3 />} />
              <Route path="/index4" element={<Index4 />} />
              <Route path="/index5" element={<Index5 />} />
              <Route path="/index6" element={<Index6 />} />
              <Route path="/index7" element={<Index7 />} />
              <Route path="/index8" element={<Index8 />} />
              <Route path="/index9" element={<Index9 />} />
              <Route path="/indexrtl" element={<IndexRtl />} />
              <Route path="/login" element={<Login />} />
              <Route path="/new" element={<New />} />
              <Route path="/password" element={<Password />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/projectdetails" element={<ProjectDetails />} />
              <Route path="/project" element={<Project />} />
              <Route path="/servicedetails" element={<ServiceDetails />} />
              <Route path="/service" element={<Service />} />
              <Route path="/shopdetails" element={<ShopDetails />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/teamdetails" element={<TeamDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/home" element={<Index />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
