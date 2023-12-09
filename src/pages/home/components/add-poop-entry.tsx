import { useCreateNewEntryMutation } from "@/apis/poop-api";
import poopLogo from "@/assets/poop-black.svg";
import { useToast } from "@/components/ui/use-toast";
import useSessionStore from "@/stores/session-store";

export const AddPoopEntry = () => {
  const { session } = useSessionStore();
  const create = useCreateNewEntryMutation(session?.id);
  const { toast } = useToast();

  const createHandler = () => {
    create.mutate(
      {
        entryDate: new Date().toString(),
      },
      {
        onSuccess: (data) => {
          toast({
            title: "Create poop entry",
            description: data.message,
          });
        },
        onError: (error) => {
          toast({
            title: "Create poop entry",
            description: error.message,
            variant: "destructive",
          });
        },
      },
    );
  };

  return (
    <div className="bg-white rounded-md shadow-md flex flex-col space-y-4 justify-center items-center p-8">
      <p className="text-sm text-stone-500">
        Press the poop icon to add today&apos;s poop entry.
      </p>
      <button
        className="border-8 border-stone-500 p-4 rounded-full animate-pulse"
        onClick={createHandler}
      >
        <img src={poopLogo} alt="Poop logo" className="w-24 h-24" />
      </button>
    </div>
  );
};
