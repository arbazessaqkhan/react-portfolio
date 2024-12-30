import NavbarComponent from "../components/Navbar";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <section id="header">
        <Header />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
