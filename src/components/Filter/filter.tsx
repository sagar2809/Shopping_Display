import React, { CSSProperties, ChangeEvent } from "react";
import style from "./filter.module.css";

type InputBaseProps = {
  className?: string;
  id?: string;
  name?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  style?: CSSProperties;
  value?: string;
};

function Filter({
  value,
  onChange,
  placeholder,
  name,
  className,
  ...rest
}: InputBaseProps) {
  const handelOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className={`${style.inputWrapper} ${className}`} {...rest}>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={handelOnChange}
        value={value}
        className={style.input}
      />
    </div>
  );
}

export default Filter;
