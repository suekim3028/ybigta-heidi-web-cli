import { userHooks } from "@hooks";
import SignUp from "./components/SignUp/SignUp";

const Index = () => {
  userHooks.useGuestOnly();

  return (
    <>
      <SignUp />
    </>
  );
};

export default Index;
