"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { loginSchema } from "@/schema/auth-schema";
import { login } from "@/action/auth/login";
import { toast } from "sonner";
// import { signIn } from "@/auth";
// import { useSession } from "next-auth/react"

const Login = () => {
  // const { data: session } = useSession()

  // console.dir(session)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const res = await login(values)
    console.dir(res);
    if(res.success === true) {
      toast(res.message)
    } else {
      toast(res.message)
    }
  }

  return (
    <div className="h-full flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
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
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-black font-semibold">
                Login
              </Button>
            </form>
          </Form>
          <Button
            variant="ghost"
            className="w-full text-muted-foreground pointer-events-none"
          >
            <Separator className="w-1/3 mx-1" />
            or continue with
            <Separator className="w-1/3 mx-1" />
          </Button>
          <Button
            variant="outline"
            className="w-full hover:bg-primary hover:text-white font-semibold"
          >
            <Image
              src="/icons/google.svg"
              alt="google icon"
              width={0}
              height={0}
              className="w-6 h-6"
            />
            <span>Google</span>
          </Button>
          {/* <Button
            variant="outline"
            className="w-full hover:bg-primary hover:text-white font-semibold"
          >
            Apple
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register">
            <Button variant="link" className="px-0 text-black underline">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;