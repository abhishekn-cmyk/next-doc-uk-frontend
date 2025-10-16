import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { useResetPassword } from "@/hooks/useUser";

export const formSchema = z
  .object({
    otp: z.string().min(4, { message: "OTP must be at least 4 digits" }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();

  const { mutate, isPending } = useResetPassword();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate({ password: values.confirmPassword, otp: values.otp });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <img
              src="/logo.jpg"
              className="h-12 sm:h-14 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-primary">
              NextDoc Global
            </span>
          </Link>

          <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
          <p className="text-muted-foreground">
            Enter your email and password to login
          </p>
        </div>

        <Card>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="otp">Otp</Label>
                      <FormControl>
                        <Input id="otp" placeholder="Enter a otp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="newPassword">New Password</Label>
                      <FormControl>
                        <Input
                          id="newPassword"
                          placeholder="Enter a new password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          placeholder="Enter a confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <>
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Resetting..." : "Reset Password"}
                  </Button>
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate("/login")}
                    className="w-full text-sm"
                  >
                    Back to Login
                  </Button>
                </>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
