import request from 'supertest';
import { app } from '../../app';
import { describe, it, expect, vi } from 'vitest';

console.error = vi.fn();

describe('GET /', () => {
  it('should return 200 in health check', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /send/:sender', () => {
  it('should return a success when sending the email', async () => {
    const res = await request(app).post('/send/ls4803326@gmail.com').send({
      name: 'Lucas',
      email: 'lucas@lucasouza.tech',
      message: 'Hello!',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Email enviado com sucesso');
  });

  it('should return 403 if the sender parameter email is not authorized', async () => {
    const res = await request(app).post('/send/unauthorized@lucasouza.tech').send({
      name: 'Lucas',
      email: 'lucas@lucasouza.tech',
      message: 'Hello!',
    });

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toBe('Email não autorizado');
  });

  it('should return 400 if the body email is invalid', async () => {
    const res = await request(app).post('/send/ls4803326@gmail.com').send({
      name: 'Lucas',
      email: 'wrong@',
      message: 'Hello',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Email invalido!');
  });

  it('should return 400 if the body message is empty', async () => {
    const res = await request(app).post('/send/ls4803326@gmail.com').send({
      name: 'Lucas',
      email: 'lucas@lucasouza.tech',
      message: '',
    });

    expect(res.statusCode).toBe(400);
  });

  it('should return 400 if the body name is empty', async () => {
    const res = await request(app).post('/send/ls4803326@gmail.com').send({
      email: 'lucas@lucasouza.tech',
      message: 'hello!',
    });

    expect(res.statusCode).toBe(400);
  });
});
