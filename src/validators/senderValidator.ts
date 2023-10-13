import { z } from 'zod';
import { SenderValidationResult } from '../types';

const senderSchema = z.object({
  sender: z.string().email('Email inválido!').trim().nonempty(),
});

export function senderValidator(sender: string): SenderValidationResult {
  try {
    const validatedData = senderSchema.parse(sender);
    return {
      senderError: null,
      value: validatedData.sender,
    };
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      console.error(err);
      return {
        senderError: err.errors[0]?.message ?? 'Erro na validação',
        value: null,
      };
    }

    return {
      senderError: 'Ops! Requisição inválida',
      value: null,
    };
  }
}
