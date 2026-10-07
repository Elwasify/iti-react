import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Parent from "./components/Parent/Parent";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Profile />

        <Parent />

        <div className="row g-4 py-4">
          <div className="col-lg-5">
            <About />
          </div>
          <div className="col-lg-7">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
