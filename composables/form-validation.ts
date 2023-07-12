import { ZodError, z } from "zod";

export function useFormValidation() {
  const useField = (type: string, value: string) => {
    let validation = {} as z.ZodString;

    if (type === 'email') {
      validation =  z.string().email('Digite um E-mail válido');
    }

    try {
      return validation.parse(value);
    } catch (error) {
      const err = error as ZodError;
      return err.errors[0].message;
    }
  }

  return {
    useField
  }
}