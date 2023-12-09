import { useState } from "react";
import { XIcon } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeletePoopMutation } from "@/apis/poop-api";

type Props = {
  poopId: string;
  userId: string | undefined;
};

export const DeletePoopEntry = ({ poopId, userId }: Props) => {
  const deletePoop = useDeletePoopMutation(userId);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = () => {
    deletePoop.mutate(poopId, {
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
    <>
      <AlertDialog onOpenChange={() => setIsOpen(false)} open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete poop entry?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={deleteHandler}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
        <XIcon className="w-4 h-4 text-red-500" />
      </Button>
    </>
  );
};
