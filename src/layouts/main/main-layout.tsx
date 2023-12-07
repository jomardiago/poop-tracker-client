import { Header } from "@/components/header/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
