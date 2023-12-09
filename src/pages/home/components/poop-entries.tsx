import { format } from "date-fns";

import { usePoopEntriesQuery } from "@/apis/poop-api";
import useSessionStore from "@/stores/session-store";

export const PoopEntries = () => {
  const { session } = useSessionStore();
  const poops = usePoopEntriesQuery(session?.id);

  return (
    <div className="mt-4">
      {poops.isLoading && <p className="text-center">Loading...</p>}

      {poops.data && poops.data.length > 0 && (
        <ul>
          {poops.data.map((poop) => (
            <li key={poop.id} className="bg-white p-4 rounded-md shadow-md">
              <span>{format(poop.entryDate, "PP (iiii)")}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
