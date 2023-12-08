import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRegisterMutation } from "@/apis/auth-api";
import { Loader } from "lucide-react";
import useSessionStore from "@/stores/session-store";
import PATHS from "@/lib/paths";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const register = useRegisterMutation();
  const { toast } = useToast();
  const { setSession } = useSessionStore();
  const navigate = useNavigate();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    register.mutate(values, {
      onSuccess: (data) => {
        setSession(data);
        navigate(PATHS.root);
      },
      onError: (error) => {
        toast({
          title: "Register user.",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="MasterPooper01"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="masterpooper@email.com"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="poopword" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={register.isPending}>
          {register.isPending && (
            <Loader className="w-4 h-4 mr-2 animate-spin" />
          )}
          Login
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
