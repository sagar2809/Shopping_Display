import React from "react";
import style from "./breadcrumb.module.css";

interface BreadcrumbProps {
  items: string[];
  selected?: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  selected = items.length - 1,
}) => {
  return (
    <nav aria-label="breadcrumb" className="bg-white mx-4 mt-4 rounded-md">
      <ol className={style.breadcrumb}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${style["breadcrumb-item"]} ${
              index === selected ? style.selected : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
