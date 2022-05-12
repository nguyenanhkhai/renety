import SignInContainer from "containers/FlowContainer/SignInContainer";
import FlowLayout from "layouts/FlowLayout/FlowLayout";
import SignInLayout from "layouts/FlowLayout/FlowLayout";
import { NextPage } from "next";

type SignInPageProps = {
  classNameName?: string;
};

const SignInPage: NextPage = (props) => {
  return (
    <FlowLayout>
      <SignInContainer />
    </FlowLayout>
  );
};

export default SignInPage;
