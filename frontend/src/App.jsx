import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Seo from './components/Seo';
import useTemplateInit from './hooks/useTemplateInit';
import useGsapAnimation from './hooks/useGsapAnimation';

// Layout imports
import Preloader from './components/layout/Preloader';
import BackToTop from './components/layout/BackToTop';
import SearchPopup from './components/layout/SearchPopup';
import OffcanvasMenu from './components/layout/OffcanvasMenu';

// Page imports
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Index from './pages/Index';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import ServiceDetails from './pages/ServiceDetails';
import Service from './pages/Service';
import TeamDetails from './pages/TeamDetails';
import Team from './pages/Team';
import Brand from './pages/Brand';
import Download from './pages/Download';
import Solution from './pages/Solution';

const routeSeo = {
  '/': {
    title: 'Home',
    description: 'Panzer IT delivers trusted IT security, backup, DLP, compliance, and enterprise protection solutions for businesses across India.',
    keywords: 'Panzer IT, IT security, cybersecurity, endpoint security, DLP, backup solutions, India',
  },
  '/home': {
    title: 'Home',
    description: 'Panzer IT delivers trusted IT security, backup, DLP, compliance, and enterprise protection solutions for businesses across India.',
    keywords: 'Panzer IT, IT security, cybersecurity, endpoint security, DLP, backup solutions, India',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn about Panzer IT, our mission, vision, experience, and commitment to secure data accessibility and availability for every business.',
    keywords: 'about Panzer IT, IT security company, data security, cyber protection, India',
  },
  '/service': {
    title: 'Services',
    description: 'Explore Panzer IT services including endpoint security, DLP, anti-malware, vulnerability assessment, remote support, and insider threat protection.',
    keywords: 'IT services, cybersecurity services, DLP, anti malware, vulnerability assessment, Panzer IT',
  },
  '/servicedetails': {
    title: 'Service Details',
    description: 'Detailed information about Panzer IT service offerings, enterprise protection solutions, and security-focused technology support.',
    keywords: 'service details, enterprise security, IT solutions, Panzer IT',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Contact Panzer IT for cybersecurity solutions, product inquiries, reseller support, and enterprise technology consultation.',
    keywords: 'contact Panzer IT, cybersecurity support, IT consultation, reseller network',
  },
  '/faq': {
    title: 'FAQ',
    description: 'Read answers to common questions about Panzer IT services, support, security solutions, and implementation process.',
    keywords: 'FAQ, Panzer IT questions, IT support, cybersecurity help',
  },
  '/blog': {
    title: 'Blog',
    description: 'Read the Panzer IT blog for insights on cybersecurity, backup, data protection, compliance, and modern IT security trends.',
    keywords: 'cybersecurity blog, IT blog, data protection blog, Panzer IT blog',
  },
  '/blogdetails': {
    title: 'Blog Details',
    description: 'Explore detailed articles and insights from Panzer IT on cybersecurity, IT operations, and business data protection.',
    keywords: 'blog article, cybersecurity insights, IT security article, Panzer IT',
  },
  '/pricing': {
    title: 'Pricing',
    description: 'Review Panzer IT pricing information for modern security and business technology solutions.',
    keywords: 'pricing, IT security pricing, solution pricing, Panzer IT',
  },
  '/team': {
    title: 'Team',
    description: 'Meet the Panzer IT team behind our cybersecurity, enterprise support, and trusted business technology services.',
    keywords: 'Panzer IT team, cybersecurity experts, IT professionals',
  },
  '/teamdetails': {
    title: 'Team Details',
    description: 'Learn more about Panzer IT team members, leadership, and technical expertise.',
    keywords: 'team details, IT experts, cybersecurity leadership, Panzer IT',
  },
  '/download': {
    title: 'Downloads',
    description: 'Access Panzer IT downloads, resources, and supporting material for security and business technology solutions.',
    keywords: 'downloads, Panzer IT resources, software downloads, security resources',
  },
  '/solution': {
    title: 'Solution',
    description: 'Explore Panzer IT solution offerings including enterprise protection, backup, monitoring, and cybersecurity services.',
    keywords: 'solution, IT solutions, cybersecurity solutions, Panzer IT',
  },
  '/brand': {
    title: 'Brands',
    description: 'Discover the trusted security and technology brands represented by Panzer IT.',
    keywords: 'brands, security brands, technology partners, Panzer IT',
  },
  '/login': {
    title: 'Login',
    description: 'Sign in to access your Panzer IT account and services.',
    keywords: 'login, account access, Panzer IT',
    robots: 'noindex,nofollow',
  },
  '/error': {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    keywords: '404, page not found, Panzer IT',
    robots: 'noindex,nofollow',
  },
};

function withSeo(path, element) {
  const seo = routeSeo[path] || routeSeo['/error'];

  return (
    <>
      <Seo path={path} {...seo} />
      {element}
    </>
  );
}

function AppContent() {
  // Initialize all template JS functionality
  useTemplateInit();
  // Initialize all GSAP animations
  useGsapAnimation();

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
              <Route path="/" element={withSeo('/', <Index />)} />
              <Route path="/home" element={withSeo('/home', <Index />)} />
              <Route path="/about" element={withSeo('/about', <About />)} />
              <Route path="/blogdetails" element={withSeo('/blogdetails', <BlogDetails />)} />
              <Route path="/blog" element={withSeo('/blog', <Blog />)} />
              <Route path="/contact" element={withSeo('/contact', <Contact />)} />
              <Route path="/error" element={withSeo('/error', <Error />)} />
              <Route path="/faq" element={withSeo('/faq', <Faq />)} />
              <Route path="/login" element={withSeo('/login', <Login />)} />
              <Route path="/pricing" element={withSeo('/pricing', <Pricing />)} />
              <Route path="/download" element={withSeo('/download', <Download />)} />
              <Route path="/solution" element={withSeo('/solution', <Solution />)} />
              <Route path="/servicedetails" element={withSeo('/servicedetails', <ServiceDetails />)} />
              <Route path="/service" element={withSeo('/service', <Service />)} />
              <Route path="/brand" element={withSeo('/brand', <Brand />)} />
              <Route path="/teamdetails" element={withSeo('/teamdetails', <TeamDetails />)} />
              <Route path="/team" element={withSeo('/team', <Team />)} />
              <Route path="*" element={withSeo('/error', <Error />)} />
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
