import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components imports
// const Home = lazy(() => import("pages/home/Home"));
// const Aboute = lazy(() => import("pages/aboute/Aboute"));
// const Contact = lazy(() => import("pages/contact/Contact"));
// const WebAppTemplate = lazy(() => import("components/webAppTemplate/WebAppTemplate"));

import Home from 'pages/home/Home';
import Aboute from 'pages/aboute/Aboute';
// import Contact from 'pages/contact/Contact';
// import WebAppTemplate from 'components/webAppTemplate/WebAppTemplate';

const App = () => {
  return (
    <div>
      <h2>APP</h2>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/o-nas" element={<Aboute />} />
      </Routes>
      

      {/* <Routes> */}
        {/* <Route path="/" element={<WebAppTemplate />}> */}
          {/* HOME */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="o-nas" element={<Aboute />} /> */}
          {/* <Route path="kontakt" element={<Contact />} /> */}
        {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
