import {
  Button,
  ButtonIcon,
  InputSearch,
  Navbar,
  UserOption,
} from "@/components";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex justify-center">
      <UserOption imgUrl={"assets/image/user.svg"} text={"Become a host"} />
      <UserOption imgUrl={"assets/image/user.svg"} text={"Become a member"} />
    </div>
  );
};

export default Homepage;
