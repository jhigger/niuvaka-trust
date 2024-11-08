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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import FormFooter from "./FormFooter";

const SUBJECTS = [
  "to book an appointment",
  "feedback",
  "vacancies",
  "other",
] as const;

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
  subject: z.enum(SUBJECTS),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    formRef.current?.submit();
  };

  return (
    <Form {...form}>
      <form
        action={`https://airform.io/${email}`}
        method="post"
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} className="h-10 bg-[#D9D9D9] text-xl" />
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
                <Input {...field} className="h-10 bg-[#D9D9D9] text-xl" />
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
                <Input {...field} className="h-10 bg-[#D9D9D9] text-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="h-10 bg-[#D9D9D9] text-xl"
                  maxLength={15}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="capitalize">
                  <SelectTrigger className="h-10 bg-[#D9D9D9] text-base">
                    <SelectValue placeholder="Reason for contact" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SUBJECTS.map((subject) => (
                    <SelectItem
                      key={subject}
                      value={subject}
                      className="capitalize"
                    >
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <input
          type="text"
          name="subject"
          value={form.watch("subject")}
          hidden
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-40 resize-none bg-[#D9D9D9] text-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default ContactForm;
