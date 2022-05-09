import AppHeader from "components/AppHeader/AppHeader";
import { NextPage } from "next";
import Link from "next/link";

type SignInPageProps = {
  classNameName?: string;
};

const SignInPage: NextPage = (props) => {
  return (
    <>
      <AppHeader />
      <main>
        <div className="container relative mt-40 flex justify-center ">
          <div className="login__form p-6 shadow-lg w-[350px] bg-white">
            <div className="m-4 flex justify-center">
              <div className="avatar w-[70px] h-[70px] flex justify-center items-center bg-[#7fffd4] rounded-full text-white text-[25px]">
                AK
              </div>
            </div>
            <div className="form__control mb-3 flex flex-col">
              <label htmlFor="email" className="label mb-1 text-sm">
                <span className="required text-[#ff0000]">*</span> Email
              </label>
              <input
                id="email"
                type="text"
                className="rounded-sm border border-[#ddd] py-3 pl-3"
                placeholder="Email"
              />
              {/* <p className="message text-red text-sm mt-1">Error</p> */}
            </div>
            <div className="form__control mb-6 flex flex-col">
              <label htmlFor="password" className="label mb-1 text-sm">
                <span className="required text-[#ff0000]">*</span> Password
              </label>
              <input
                id="password"
                type="text"
                className="rounded-sm border border-[#ddd] py-3 pl-3"
                placeholder="Password"
              />
              {/* <p className="message text-red text-sm mt-1">Error</p> */}
            </div>
            <div className="form__control mb-3 flex flex-col">
              <button className="w-full rounded-md bg-primary py-3 text-white">
                LOGIN
              </button>
            </div>
            <div className="form__control mb-3 flex flex-col text-center">
              <Link href="/signup">
                <a className="text-sm text-primary"> Quên mật khẩu?</a>
              </Link>
            </div>
            <div className="line center mb-3 w-full rounded-md border bg-white"></div>
            <div className="form__control mb-3 flex flex-col">
              <button className="w-full rounded-md bg-[#42b72a] py-3 text-white">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
