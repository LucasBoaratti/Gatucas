# 😻 Gatucas 😻

#### Gatucas é um projeto desenvolvido em Angular, que consome uma API de gatos e exibe as 50 primeiras fotos para o usuário caso ele use a chave da API criada. Senão, exibe apenas as 10 primeiras fotos.

# 😸 Como usar o projeto 😸

1. Clique no botão Code e copie a URL do projeto:

```bash
https://github.com/LucasBoaratti/Gatucas.git
```

2. Abra o Prompt de comando (ou PowerShell ou GitBash) em sua área de trabalho ou em documentos e realize o seguinte comando:

OBS: Certifique que o Git está instalado no seu computador. Caso não esteja, instale aqui: [Git](https://git-scm.com/downloads)

```bash 
git clone https://github.com/LucasBoaratti/Gatucas.git
```

3. Acesse a pasta do projeto:

```bash
cd .\Gatucas
```

4. Agora, entre no VSCode:

```bash
code .
```

5. Antes de continuar no VSCode, acesse o link: [API de gatos](https://thecatapi.com);

6. Após escolher o plano, insira seu email e o site vai te explicar como você vai usar a API e escolha o tipo do projeto que você vai utilizar sua chave. (escolha Personal Project);

7. Após isso, verifique seu email que você cadastrou e lá, você encontrará a sua chave para acessar a API;

8. Copie sua chave e cole no campo lá no arquivo Gatos.component.ts:

```typescript
api_key: string = ""; //Adicione a chave da sua API aqui, entre as aspas.
```

9. Após colar a chave da API, abra o terminal com CTRL + J ou CTRL + ' e instale as dependências do Angular:

```bash
npm install -g @angular/cli
``` 

9. Agora, rode o servidor:

```bash
ng serve
```

10. Se não der certo, rode:

```bash
npm start
```

E pronto! Agora você pode apreciar as imagens dos gatinhos superfofos :D

# 🐱 Linguagens/tecnologias utilizadas 🐱

## FrontEnd

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" title="Angular" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" width="70px" height="70px"/>        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailWind" title="TailWind" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" title="CSS" width="70px" height="70px"/>        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" title="HTML" width="70px" height="70px"/>
</div>