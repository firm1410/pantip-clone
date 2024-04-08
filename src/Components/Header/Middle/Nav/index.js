import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-center">
      <Link to={""}>
        {" "}
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          My feed
        </NavigationMenuLink>
      </Link>
      <Link to={""}>Pantip Pick</Link>
      <Link to={""}>Pantip Hitz</Link>
      <Link to={""}>Explore</Link>
    </div>
  );
}

export default Nav;
