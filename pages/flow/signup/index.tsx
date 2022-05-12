import SignUpContainer from "containers/FlowContainer/SignUpContainer";
import FlowLayout from "layouts/FlowLayout/FlowLayout";
import { NextPage } from "next";

type SignUpPageProps = {
  classNameName?: string;
};

const SignUpPage: NextPage = (props) => {
  return (
    <FlowLayout>
      <SignUpContainer />
    </FlowLayout>
  );
};

export default SignUpPage;
