import { z } from "zod";
import { ContactFormRules } from "./ValidationTypes";

export type ContactInputs = z.infer<typeof ContactFormRules>;
