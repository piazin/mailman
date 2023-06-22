# Mailman

Mailman é um serviço que permite enviar e-mails através de um formulário HTML simples. Com ele, você preenche os campos do formulário, como remetente, destinatário, assunto e conteúdo, e o Mailman se encarrega de enviar o e-mail. É fácil de usar, não requer conhecimentos técnicos e funciona com diferentes provedores de e-mail.

## Documentação da API

#### Envio de email

```http
   POST /send/{your_email}
```

| Parâmetro | Tipo     | Descrição                                               |
| :-------- | :------- | :------------------------------------------------------ |
| `email`   | `string` | **Obrigatório**. O email que o formulario será enviado. |

## Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Form</title>
  </head>
  <body>
    <form action="https://mailman.lucasouza.tech/send/{your_email}" method="post">
      <input type="text" name="name" placeholder="seu nome" />

      <input type="email" name="email" placeholder="seu email" />

      <input
        type="hidden"
        name="_redirect"
        value="{url para ser redirecionado apos o envio de email}"
      />

      <textarea name="message" cols="30" rows="10" placeholder="sua mensagem"></textarea>
    </form>
  </body>
</html>
```

## Stack utilizada

**Node, Express, Resend, Zod**
