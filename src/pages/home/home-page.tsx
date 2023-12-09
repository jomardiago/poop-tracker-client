import MainLayout from "@/layouts/main/main-layout";
import { AddPoopEntry } from "./components/add-poop-entry";
import { PoopEntries } from "./components/poop-entries";

const HomePage = () => {
  return (
    <MainLayout>
      <AddPoopEntry />
      <PoopEntries />
    </MainLayout>
  );
};

export default HomePage;
