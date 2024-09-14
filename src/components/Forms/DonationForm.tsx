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
} from "~/components/ui/form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const OPTIONS = [
  "niuvaka",
  "poly paddles",
  "pasifika home gardening initiatives",
] as const;

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(8, {
    message: "Phone number must be at least 8 digits.",
  }),
  donationFor: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

const DonationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      donationFor: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-8 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="firstName"
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
          name="lastName"
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
        <FormField
          control={form.control}
          name="donationFor"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-xl">
                  I would like to donate to:
                </FormLabel>
              </div>
              {OPTIONS.map((item) => (
                <FormField
                  key={item}
                  control={form.control}
                  name="donationFor"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item,
                                    ),
                                  );
                            }}
                            className="mt-2 rounded-full border-0 bg-[#D9D9D9]"
                          />
                        </FormControl>
                        <FormLabel className="text-xl font-normal">
                          {item}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
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

export default DonationForm;
