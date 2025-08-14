# Gatucas

Esse é o meu primeiro projeto desenvolvido em Angular, que consome uma API de gatos e exibe as 50 primeiras fotos para o usuário caso ele use a chave da API criada, senão usar, exibe apenas as 10 primeiras fotos.

# Como usar o projeto:

1. Baixe o projeto clicando em Code e indo em Download ZIP;

2. Após baixar o arquivo ZIP, extraia a pasta do projeto na área de trabalho ou em documentos;

3. Abra o VSCode e faça o seguinte atalho: CTRL + K, CTRL O, e escolha a pasta do projeto;

4. Agora, acesse o link: <a href="https://thecatapi.com">API de gatos</a> e escolha o plano grátis;

5. Depois, insira seu email, explique como você vai usar a API e escolha o tipo do projeto que você vai utilizar sua chave. (escolha Personal Project);

6. Após isso, verifique seu email que você cadastrou e lá, você encontrará a sua chave para acessar a API;

7. Copie sua chave e cole no campo lá no arquivo Gatos.component.ts:

```typescript
api_key: string = ""; //Adicione a chave da sua API aqui, entre as aspas.
```

8. Após colar a chave da API, abra o terminal e instale a pasta node_modules:

```bash
npm install
``` 

9. Após colar a chave da API, abra o terminal e rode o servidor:

```bash
ng serve
```

E pronto! Agora aprecie as imagens de gatinhos superfofos!!! :D

# Linguagens/Frameworks:

## FrontEnd

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" title="Angular" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" width="70px" height="70px"/>        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailWind" title="TailWind" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" title="CSS" width="70px" height="70px"/>        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" title="HTML" width="70px" height="70px"/>
</div>
