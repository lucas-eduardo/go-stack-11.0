# Recuperação de senha

**RF (requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (requisitos não funcionais)**

- Utilizar Mailtrap para testar envios em ambiente desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job);

**RN (regras de negocio)**

- O link enviado por e-mail para resetar a senha, deve expirir em 2h;
- O usuário precisa confirma a nova senha ao resetar sua senha;

---

# Atualização do perfil

**RF (requisitos funcionais)**

- O usuário deve poder atualizar o seu nome, e-mail e senha;

**RN (regras de negocio)**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o uuário precisa confirmar a nova senha;

---

# Painel do prestador

**RF (requisitos funcionais)**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber um notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar notificações não lidas;

**RNF (requisitos não funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN (regras de negocio)**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

---

# Agendamento de serviços

**RF (requisitos funcionais)**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve porder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis de um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF (requisitos não funcionais)**

- A listagem de de prestadores deve ser armazenada em cache;

**RN (regras de negocio)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
