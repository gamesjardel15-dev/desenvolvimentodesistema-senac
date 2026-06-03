# CONTÉUDO DA SEGUNDA AULA

Nos aprendemos sobre como utilizar git bash
aprendemos como utilizar cada comando do git bash
aprendemos sobre o node
aprendemos a utilizar o VScode 
e estamos escrevendo um relatario nas pastas da aula
## UTILIDADE DO GIT

## 1. CONECTAR USUÁRIO

COMANDOS
git config --global user.name "nomedeusuariodosistema"
git config --global user.email "emaildeusuariodogit"

<!--  Este comando usa-se somente uma vez ou quando necessitar de nova identificação -->

<!-- É importante na primeira vez que o github esteja logado, pois o sistema vai precisar dar permissão -->

## PARA ENVIAR PARA REPOSITÓRIO

DIGITE:
git add .
<!-- <!-- prepara os arquivos para envio -->
git commit -m "nome para rotulação"
<!-- criar a chave de identificação -->
git push
<!-- Envia os arquivos para repositório  -->

## PARA BAIXAR ATUALIZAÇÕES DO REPOSITÓRIO 

git pull
<!--  baixar as atualizações do repositório -->
Exemplo de caso:
Pedro desenvolver seus projetos no trabalho. Ele executa os comandos git add ., git commit -m "nome" e git push.
No final de semana, em casa, Pedro clona seu projeto no seu computador pessoal. Realiza algumas  alterações no projeto e atualiza no  repositório  repitindo novamente os comando: git add ., git commit -m "nome" e git push.
Na segunda-feira ao chegar no trabalho, Pedro abre o terminal  e aplica o comando: git pull,para atualizar no trabalho os arquivos que ele alterou no final de semana.