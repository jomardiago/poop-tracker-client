import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import poopLogo from "@/assets/poop-black.svg";
import { Separator } from "@/components/ui/separator";
import PATHS from "@/lib/paths";
import useSessionStore from "@/stores/session-store";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSessionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate(PATHS.root);
    }
  }, [session, navigate]);

  return (
    <div className="relative">
      <div className="absolute top-0 p-4">
        <img src={poopLogo} alt="Poop Logo" className="w-12 h-12" />
      </div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white p-4 shadow-md w-full space-y-4">
          <h2 className="text-center text-2xl font-semibold">
            Create a new account.
          </h2>
          <Separator className="bg-gray-100" />
          {children}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to={PATHS.login} className="link">
              Login
            </Link>{" "}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
