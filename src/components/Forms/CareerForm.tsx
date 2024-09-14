import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { email } from "~/lib/constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import FormFooter from "./FormFooter";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(8, {
    message: "Phone number must be at least 8 digits.",
  }),
});

const CareerForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    formRef.current?.submit();
  };

  return (
    <Form {...form}>
      <form
        action={`https://airform.io/${email}`}
        method="post"
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-screen-md grid-cols-1 gap-8 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} className="h-14 bg-[#D9D9D9] text-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} className="h-14 bg-[#D9D9D9] text-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className="h-14 bg-[#D9D9D9] text-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="h-14 bg-[#D9D9D9] text-xl"
                  maxLength={15}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input type="text" name="subject" value={"vacancies"} hidden />
        <FormFooter className="col-span-full text-sm" />
        <Button
          type="submit"
          className="col-span-full mx-auto w-max rounded-full bg-mint-500 px-8 py-6 text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CareerForm;
