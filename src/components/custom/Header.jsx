/* eslint-disable no-unused-vars */
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between p-3 px-5 shadow-md">
      <img src="\src\assets\logo.svg" width={100} height={100} />

      {isSignedIn ? (
        <div className="flex items-center gap-2">
            <Link to={'/dashboard'}>
          <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
