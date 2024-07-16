import "./App.css";
import AboutUs from "./components/AboutUs";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Service from "./components/Service";
import "./style.css";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <Service />
        <AboutUs />
        <Numbers />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}

export default App;
