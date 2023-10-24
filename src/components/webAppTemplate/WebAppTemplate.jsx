// import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import Footer from "../footer/Footer";
// import Nav from "../navigation/Nav";
import Nav from "components/navigation/Nav";
import Footer from "components/footer/Footer";


const WebAppTemplate = () => {
  return (
    <>
      <header className="header">
        <div className="header-options">
          <ul>
            <li>pl</li>
            <li>en</li>
            <li>link</li>
          </ul>
        </div>

        <div className="header-img">
          <img src={require('../../images/logo2.jpg')} alt="logo" width="150" height="75"/> 
        </div>

        <div>
          <Nav />
        </div>
      </header>

      <main>
        {/* <Suspense fallback={<div>...is loading</div>}>
          <Outlet />
        </Suspense> */}
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WebAppTemplate;
