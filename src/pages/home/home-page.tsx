import MainLayout from "@/layouts/main/main-layout";
import { AddPoopEntry } from "./components/add-poop-entry";

const HomePage = () => {
  return (
    <MainLayout>
      <AddPoopEntry />
    </MainLayout>
  );
};

export default HomePage;
