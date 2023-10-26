import MitraLogo from "../MitraLogo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "universal-cookie";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/hooks/isLogin";
import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const cookies = new Cookies();

const LoginForm = () => {
  const { toast } = useToast();
  const { loginUser } = useLogin();

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (values.username === "hardik" && values.password === "123456") {
        loginUser();
        cookies.set("isLogin", true);
        form.reset();
        navigate("/home");
      } else {
        toast({
          title: "Username or Password is incorrect!",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <main className="bg-slate-50 flex flex-col justify-center items-center max-w-[500px] m-auto h-screen">
      <MitraLogo />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 px-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 m-2 w-96"
                      placeholder="User Name"
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
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 m-2 w-96"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button
                disabled={isLoading}
                variant="default"
                className="text-xl py-2 px-8 bg-[#f8a22b] hover:bg-[#f8a22b]"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default LoginForm;
