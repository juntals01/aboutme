import { z } from "zod";

export const ContactFormRules = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .email("This is not a valid email."),
  message: z.string().min(1, { message: "Required" }),
});
