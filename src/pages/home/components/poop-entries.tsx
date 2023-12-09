import { format } from "date-fns";

import { usePoopEntriesQuery } from "@/apis/poop-api";
import useSessionStore from "@/stores/session-store";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export const PoopEntries = () => {
  const { session } = useSessionStore();
  const poops = usePoopEntriesQuery(session?.id);

  return (
    <div className="mt-4">
      {poops.isLoading && <p className="text-center">Loading...</p>}

      <h2 className="text-center text-xl font-semibold mb-2">
        Entries History
      </h2>

      {poops.data && poops.data.length > 0 ? (
        <ul>
          {poops.data.map((poop) => (
            <li
              key={poop.id}
              className="bg-white p-4 rounded-md shadow-md font-semibold"
            >
              <div className="flex justify-between items-center">
                <p>{format(new Date(poop.entryDate), "PP (iiii)")}</p>
                <Button variant="outline" size="icon">
                  <XIcon className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-stone-500">There are no entries yet.</p>
      )}
    </div>
  );
};
