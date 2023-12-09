import AuthLayout from "@/layouts/auth/auth-layout";
import RegisterForm from "./components/register-form";

const RegisterPage = () => {
  return (
    <AuthLayout type="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
