import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import poopLogo from "@/assets/poop-black.svg";
import useSessionStore from "@/stores/session-store";
import { LogOut } from "lucide-react";

export const Header = () => {
  const { session, setSession } = useSessionStore();

  const logout = () => setSession(undefined);

  return (
    <nav className="h-14 border-b shadow-sm flex justify-between items-center px-4">
      <img src={poopLogo} alt="Poop logo" className="w-12 h-12" />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar asChild>
            <AvatarFallback className="bg-stone-500 text-white uppercase">
              {session?.username.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
