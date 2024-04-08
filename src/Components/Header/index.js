import React from "react";
import Middle from "./Middle";
import AccountHeader from "./AccountHeader";
import Menu from "./Menu";
function Header() {
  return (
    <header className="flex px-7 py-5 flex-col justify-between align-middle">
      <div className="flex px-7 py-5 justify-between align-middle">
        <div className="w-[100px] md:w-[64px] lg:w-[80px] xl:w-[100px]">
          <img
            src={window.location.origin + "/image/logo-mobile-pantip-pink.png"}
            className="w-full h-auto"
            alt="logo"
          />
        </div>

        <Middle />
        <AccountHeader />
      </div>
      <div>
        <Middle />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
