import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <SocialLinks/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
