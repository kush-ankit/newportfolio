import React, { useState, useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Load from './components/Load';
// import Navbar from './components/Navbar';
// import Layout from './Layout';
import Main from './main';

const App = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);

  return spinner ? <div> <Load size={5}/> </div>:<div className="overflow-hidden"><Main/></div>;
};

export default App;