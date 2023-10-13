import { z } from 'zod';
import { RequestBody } from '../types';

const requestSchema = z.object({
  name: z.string({ required_error: 'O campo name é obrigatório' }),
  email: z
    .string({ required_error: 'O campo email é obrigatório' })
    .email('Email invalido!')
    .min(5),
  message: z.string({ required_error: 'O campo message é obrigatório' }).min(1).max(2000),
  _redirect: z.string().trim().url('Url de redirecionamento invalida!').optional(),
});

export function validateRequestBody(email: RequestBody) {
  try {
    requestSchema.parse(email);
    return {
      bodyError: null,
      value: email,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err);
      return {
        bodyError: err.errors[0]?.message ?? 'Erro na validação',
        value: null,
      };
    }

    return {
      bodyError: 'Ops! Requisição inválida',
      value: null,
    };
  }
}
