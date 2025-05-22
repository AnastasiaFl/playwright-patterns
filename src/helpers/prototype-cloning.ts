import { FormData } from "../types";

export function cloneForm(form: FormData): FormData {
  return { ...form };
}
