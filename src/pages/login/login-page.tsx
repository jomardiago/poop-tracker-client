import AuthLayout from "@/layouts/auth/auth-layout";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <AuthLayout type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
