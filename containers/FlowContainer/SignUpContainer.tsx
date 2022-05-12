import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button/Button";
import { Form } from "components/Form";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
type SignUpContainerProps = {
  className?: string;
};

type SignUpType = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

const SignUpValueSchema = yup
  .object({
    fullName: yup.string().trim().required("Bạn cần nhập tên đầy đủ"),
    email: yup
      .string()
      .trim()
      .email("Email không hợp lệ.")
      .required("Bạn cần nhập email."),
    phone: yup
      .string()
      .trim()
      .matches(/^0([0-9]{9}$)/gi, "Số điện thoại không hợp lệ.")
      .required("Bạn cần nhập số điện thoại."),
    password: yup.string().trim().required("Bạn cần nhập mật khẩu."),
  })
  .required();

const SignUpContainer: React.FC<SignUpContainerProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: yupResolver(SignUpValueSchema),
    mode: "onChange",
  });

  const handleRegisters: SubmitHandler<SignUpType> = (data) => {
    console.log(data);
  };

  return (
    <div className="form p-6 shadow-lg w-[350px] bg-white">
      <form onSubmit={handleSubmit(handleRegisters)}>
        <div className="m-4 flex justify-center">
          <div className="avatar h-[70px] w-[70px] ">AK</div>
        </div>
        <Form.Field>
          <label htmlFor="fullName" className="label">
            <span className="required">*</span> Tên đầy đủ
          </label>
          <input
            id="fullName"
            placeholder="Tên đầy đủ"
            className="rounded-sm border border-[#ddd] py-3 pl-3 "
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="error_text">{errors.fullName?.message}</p>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="email" className="label">
            <span className="required">*</span> Email
          </label>
          <input
            id="email"
            placeholder="Email"
            className="rounded-sm border border-[#ddd] py-3 pl-3 "
            {...register("email")}
          />
          {errors.email && (
            <p className="error_text">{errors.email?.message}</p>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="phone" className="label">
            <span className="required">*</span> Điện thoại
          </label>
          <input
            id="phone"
            placeholder="Điện thoại"
            className="rounded-sm border border-[#ddd] py-3 pl-3 "
            {...register("phone")}
          />
          {errors.phone && (
            <p className="error_text">{errors.phone?.message}</p>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="password" className="label">
            <span className="required">*</span> Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu"
            className="rounded-sm border border-[#ddd] py-3 pl-3 "
            {...register("password")}
          />
          {errors.password && (
            <p className="error_text">{errors.password?.message}</p>
          )}
        </Form.Field>
        <Form.Field className="mt-5">
          <Button
            type="submit"
            className="w-full rounded-md bg-info py-3 text-white">
            Tạo tài khoản mới
          </Button>
        </Form.Field>
      </form>
    </div>
  );
};

export default SignUpContainer;
