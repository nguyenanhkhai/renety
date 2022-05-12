import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button/Button";
import { Form } from "components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
type SignInContainerProps = {
  className?: string;
};

type LoginType = {
  email: string;
  password: string;
};

const LoginValueSchema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ.")
      .required("Bạn cần nhập email."),
    password: yup.string().required("Bạn cần nhập mật khẩu."),
  })
  .required();

const SignInContainer: React.FC<SignInContainerProps> = (props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(LoginValueSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    reset();
    console.log(data);
  };

  const gotoRegisterPage = () => {
    router.push("/flow/signup");
  };

  return (
    <div className="form p-6 shadow-lg w-[350px] bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-4 flex justify-center">
          <div className="avatar h-[70px] w-[70px] ">AK</div>
        </div>
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
        <Form.Field>
          <Button
            type="submit"
            className="w-full rounded-md bg-primary py-3 text-white">
            LOGIN
          </Button>
        </Form.Field>
        <Form.Field className="text-center">
          <Link href="/forgot">
            <a className="text-sm text-primary"> Quên mật khẩu?</a>
          </Link>
        </Form.Field>
      </form>
      <Button
        className="w-full rounded-md bg-[#42b72a] py-3 text-white"
        onClick={() => {
          gotoRegisterPage();
        }}>
        Tạo tài khoản mới
      </Button>
    </div>
  );
};

export default SignInContainer;
