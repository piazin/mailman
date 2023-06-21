import { z } from 'zod';

const requestSchema = z.object({
  name: z.string(),
  email: z.string().email('Email invalido!').min(5),
  message: z.string().min(1).max(500),
  _redirect: z.string().trim().url('Url de redirecionamento invalida!').optional(),
});

interface RequestBody {
  name: string;
  email: string;
  message: string;
  _redirect: string;
}

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
