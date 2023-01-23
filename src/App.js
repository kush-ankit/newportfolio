import React, { useState, useEffect } from 'react';
import Load from './components/Load';
import Navbar from './components/Navbar'

const App = () => {
  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);

  // [] means like componentDidMount

  return spinner ? <div> <Load/> </div>:<div className="overflow-hidden"><Navbar /></div>;
};

export default App;

























