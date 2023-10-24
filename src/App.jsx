import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-10 bg-gradient-to-b from-black via-gray-700 to-stone-900'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <img src="Andromeda.jpg" alt="galaxy" className="absolute relative-10 h-screen w-full" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
