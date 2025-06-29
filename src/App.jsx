import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <FAQ />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
