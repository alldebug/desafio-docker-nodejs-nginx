# Desafio Full Cycle Docker com Nginx e Node.js

Desafio proposto, criar um aplicação Node.js que realiza conexão com o banco mySQL e utiliza o nginx como proxy reverso.

A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```js
   </p>

    <p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>

    <p> 

    </p>

    <p>- Lista de nomes cadastrada no banco de dados.</p>

    <p>
```
 

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080



# 

- Na aplicação node.js foi adicionado a biblioteca **unique-names-generator** onde geramos nomes aleatórios para inserir no banco.


