import React from "react";
import style from "./header.module.css";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { headerList } from "./constant";
import { MyContext } from "../Context/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { Logo } from "@/statics/constant";

function Header() {
  const { updateDrawerState } = React.useContext(MyContext);
  const handleSideBar = () => {
    updateDrawerState(true);
  };
  const router = useRouter();
  return (
    <div className={style.header}>
      <IoMenu className={`w-10 h-10 ${style.menu}`} onClick={handleSideBar} />
      <Link href={"/"} className={style.logoWrapper}>
        <Image src={Logo} alt="logo" className={style.logo} />
      </Link>
      <div className={style.navLinks}>
        {headerList.map((item) => (
          <Link
            href={item.link}
            className={`${item.className} ${
              router.pathname === item.link ? style.active : ""
            }`}
            key={item.link}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button className={`${style.loginButton} ml-1`}>Login</button>
    </div>
  );
}

export default Header;
