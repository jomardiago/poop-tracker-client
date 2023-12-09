import { XIcon } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useDeletePoopMutation } from "@/apis/poop-api";

type Props = {
  poopId: string;
  userId: string | undefined;
};

export const DeletePoopEntry = ({ poopId, userId }: Props) => {
  const deletePoop = useDeletePoopMutation(userId);
  const { toast } = useToast();

  const deleteHandler = (id: string) => {
    deletePoop.mutate(id, {
      onSuccess: (data) => {
        toast({
          title: "Delete poop entry",
          description: data.message,
        });
      },
      onError: (error) => {
        toast({
          title: "Delete poop entry",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <Button variant="outline" size="icon" onClick={() => deleteHandler(poopId)}>
      <XIcon className="w-4 h-4 text-red-500" />
    </Button>
  );
};
