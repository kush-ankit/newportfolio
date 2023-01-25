import React, { useState, useEffect } from 'react';
import Load from './components/Load';
import Navbar from './components/Navbar';

const App = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);

  return spinner ? <div> <Load size={5}/> </div>:<div className="overflow-hidden"><Navbar/></div>;
};

export default App;