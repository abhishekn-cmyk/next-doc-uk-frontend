import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { useForgotPassword } from "@/hooks/useUser";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();

  const { mutate, isPending } = useForgotPassword();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values.email);
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
          <h1 className="text-2xl font-bold mb-2">Forgot password</h1>
          <p className="text-muted-foreground">
            Enter your email address below and we'll send you otp to reset your
            password
          </p>
        </div>

        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <CardContent>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email">Email</Label>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex flex-col space-y-3">
                <Button className="w-full" type="submit" disabled={isPending}>
                  {isPending ? "Sending..." : "Reset password"}
                </Button>
                <Button variant="link" onClick={() => navigate("/login")}>
                  Remember your password? Login
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
