import React from "react";
import Link from "next/link";
import useSticky from "../../hooks/use-sticky";
import Sidebar from "../../components/common/off-canvas";
import NavMenus from "./nav-menus";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165 pt-40 
        ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="tp-logo">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/logo-blue.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-flex justify-content-center">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-yellow-button tp-yellow-space">
                    <Link href="/contact">
                      <a className="tp-btn-contact-outline">Orçamento? 👋</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo.png"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default Header;
