import React from "react";
import style from "./sidebar.module.css";
import { headerList } from "@/components/Header/constant";
import { MyContext } from "../Context/context";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  AUTHOR_TITLE_SIDEBAR,
  AUTHOR_TITLE_TAG_SIDEBAR,
  Logo,
} from "@/statics/constant";

function Sidebar() {
  const { updateDrawerState } = React.useContext(MyContext);
  const router = useRouter();
  const handleSideBar = (link: string) => {
    updateDrawerState(false);
    router.push(link);
  };
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Image src={Logo} alt="" className={style.logoSize} />
      </div>
      <div className={style.navigation}>
        {headerList.map((item) => (
          <span
            onClick={() => handleSideBar(item.link)}
            className={`${item.className} ${style.button} ${
              router.pathname === item.link ? style.active : ""
            }`}
            key={item.link}
          >
            {item.label}
          </span>
        ))}
      </div>
      <hr className=" w-full border-1 border-gray-300" />
      <div className="text-center pt-4 font-bold px-5">
        <div>Created and Maintained by</div>
        <div>{AUTHOR_TITLE_SIDEBAR}</div>{" "}
        <div className="text-orange-500  cursor-pointer duration-300;">
          {AUTHOR_TITLE_TAG_SIDEBAR}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
