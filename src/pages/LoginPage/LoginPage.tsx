import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/Loginform";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <Waves />
      <DocumentTitle>Login</DocumentTitle>
      <div className={s.wrap}>
        <LoginForm />
      </div>
    </>
  );
}
