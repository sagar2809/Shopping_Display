import React from "react";
import { useForm } from "react-hook-form";
import style from "./form.module.css";

interface IFormInput {
  phone: string;
  password: string;
}
export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form className={style.form} action="" onSubmit={handleSubmit(onSubmit)}>
      <label className={style.label} htmlFor="">
        Mobile Number
      </label>
      <input className={style.input} {...register("phone")} />
      <label className={style.label} htmlFor="">
        Password
      </label>
      <input className={style.input} {...register("password")} />
      <input className={style.button} type="submit" />
    </form>
  );
};
