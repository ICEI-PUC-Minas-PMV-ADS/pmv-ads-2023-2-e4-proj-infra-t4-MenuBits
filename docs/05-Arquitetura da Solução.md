# Arquitetura da Solução

A arquitetura de solução  do nosso projeto será fluido e o mais organizado possível.

Selecionamos as seguintes tecnologias:

HTML: É uma tecnologia cujo código utilizado serve para estruturar uma página web e seu conteúdo.

CSS: É uma tecnologia cujo código utilizado serve para estilizar uma página web e seu conteúdo.

Javascript: É uma linguagem de programação interpretada com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e o CSS, é uma das três principais tecnologias da World Wide Web.

ReactNative: É uma estrutura de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para iOS e Android usando JavaScript e React, que é uma biblioteca de interface de usuário

JSON API: É uma tecnologia utilizada em desenvolvimento de software para trocar informações estruturadas e configurar dados em aplicativos, sistemas e serviços da web.

Segue abaixo a lógica da arquitetura:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-MenuBits/assets/105240089/613fb228-f661-4590-8539-f6e7c9be35e4)


## Diagrama de Classes

Nosso diagrama de classe representa as classes principais do sistema, como o Usuário, Restaurante, Menu, e item do Menu. Essas classes estariam conectadas por relacionamentos, como associações, para mostrar como os usuários fazem pedidos de itens de menu em restaurantes.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-MenuBits/assets/105240089/e0735a3e-cc09-4c6f-a1b6-3b146b3fa4f0)


## Modelo ER

No contexto do nosso aplicativo de cardápio online, esse modelo descreve as principais entidades do sistema, como o Usuário, Restaurante, Menu, e item do Menu, juntamente com os relacionamentos entre elas.

Por exemplo, um restaurante pode oferecer vários itens de menu, o que estabelece uma relação um-para-muitos entre as entidades Restaurante e item de Menu. Usuários podem fazer pedidos, criando um relacionamento um-para-muitos entre Usuário e Menu.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-MenuBits/blob/main/docs/img/ER%20MenuBits.png?raw=true)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Modelo do banco de dados relacional criado:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-MenuBits/assets/68014636/24148581-e034-445c-bbd0-4da801c455de)

[Clique aqui para acessar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-MenuBits/blob/main/src/backend/src/bd.sql)

O arquivo serve apenas para visualização dos dados, o banco de dados real já está na nuvem, portanto, não é preciso executar nada.

## Tecnologias Utilizadas

As tecnologias utilizadas no desenvolvimento do BACKEND foram:

**Visual Studio CODE**<br />
   Utilizado para programar o backend, e escrever os códigos.
   
**Javascript + Node.js**<br />
   Utilizado para programar a lógica dos endpoints a linguagem Javascript, que através do Node.js pode ser usada para o backend.

**Express**<br />
   Utilizado juntamente ao node para a construção do servidor Web, realizando as conexões necessárias.

**Prisma**<br />
   Utilizado para realizar a conexão do banco de dados, no caso da aplicação, tanto a conexão ao banco relacional quanto ao banco não relacional.
   O prisma oferece uma sintaxe simples para trabalhar com a estrutura do banco e um fácil gerenciamento das middlewares.

**Render**<br />
   O render (https://render.com/) foi utilizado para subir a API para a web, no caso, em produção.

**MongoDB** <br />
  O MongoDB foi o banco de dados não relacional selecionado para utilizarmos, a conexão e geração da estrutura é feita pelo PRISMA.

**PostgreSQL**<br />
  O Postgree foi o banco de dados relacional utilizado para utilizarmos, a conexão e geração da estrutura é feita pelo PRISMA.

**POSTMAN**<br />
  O Postman foi utilizado para os testes de API e verificação de funcionamento.

**Swagger**<br />
  A documentação foi gerada dinamicamente pelo Swagger, que mantém uma atualização e organização dos endpoints.

**bcrypt.js**<br />
  Biblioteca usada para criptografar as senhas geradas na aplicação.

**jsonwebtoken**<br />
  Biblioteca usada para geração dos Tokens de autenticação da API
  
## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
