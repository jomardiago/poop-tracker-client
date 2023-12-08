import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "@/components/header/header";
import useSessionStore from "@/stores/session-store";
import PATHS from "@/lib/paths";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSessionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate(PATHS.login);
    }
  }, [session, navigate]);

  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
