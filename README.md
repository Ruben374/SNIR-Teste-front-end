
# SNIR-Teste-front-end

### Esta é uma todo list, desenvolvida para um teste no [GRUPO SNIR](https://snir.co.ao/) 

>Status:completado✔️

### Sobre o desafio

No teste era necessario desenvolver o app com o React ou Flutter, usando telas fornecidas como referência pelo [GRUPO SNIR](https://snir.co.ao/),Consumir uma API, filtrar os dados e imprimi-los na visualização.


### Ferramentas usadas:
- React 
- Typescript
- Styled-components
- Material-ui

### Processo de desenvolvimento

Durante o processo de desenvolvimento do app comecei por criar todas as viws do aplicativo, utilizando o React com template Typescript,e para a estilização das pages o Styled-components.Posteriomente destribui todads as rotas usando o react-router-dom deixando assim o front-end ja pronto, em relação ao back-end a principio a ideia era consumir a api fornecida pelo [GRUPO SNIR](https://snir.co.ao/),porem a maneira em que na qual eu havia idealizado e estruturado o projecto, criou em mim (simplesmente para satisfazer a minha pessima vontade de complicar as coisas) a necessidade de construir uma api moldada a minha forma de trabalho utilizando o node js. 

Decide-me por isso simplesmente porque queria adicionar algumas funcionalidades que o back-end que nos fora fornecido não permitia, como por exemplo trazer tarefas especificas de um determinado usuario.Para isso utilizei um banco dados SQL para armazendar os dados dos usuarios e tbm as suas respectivas tarefas, o app esta totalmente em sincronismo com o banco de dados cada alteração no app é tbm replicada no banco, porem devido ao pessimo plano de hospedagem (gratuita) do meu banco SQL pode notar-se por vezes um pequeno delay ao marcar ou desmarcar uma tarefa ou ao apagar uma tarefa ou ainda ao fazer o signin etc...

Porem nada que impeça a utilização do aplicativo.

### Para rodar o projecto localmente:
- Instale todas as dependencias: rode `npm install` na raiz do projecto
- Rode o projecto com: `npm start`

### Funcionalidades:

- O usuario pode acessar o aplicativo usando a sua conta do facebook ou do google
- Somente os usuarios do google poderão entrar utilizando o email e senha(se estiverem ja cadastrados) 
- O usuario pode criar tarefas, marcar e desmarcar as suas tarefas (indicando se a tarefa foi ou não concluida)
- O usuario podera ver as suas informações listadas no seu perfil


Por favor sinta-se livre para criar um pull request e submeter alguma issue!












