# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

|    `Nome`: Rodrigo   | `Profissão`: Dono de PUB       |     `Idade`: 29 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="450" alt="image" src="https://www.theselfemployed.com/wp-content/uploads/2019/03/small-business-owner.jpg">| `Motivações`: <br>Melhorar quantidade de vendas, <br> Aumentar carteira de clientes | `Frustrações`: Pouca coleta de informações, <br> Baixo alcance aos clientes <br>                    
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Culinária, <br> Academia <br>     | Rodrigo é um pequeno empresário que possui um pub promissor em Belo Horizonte, consegue atrair clientes com bons pratos e boas bebidas, além de um ótimo atendimento e está tentando ampliar seu negócio, buscando por dados que o informe sobre como melhorar as opções fornecidas  <br> | Focado <br> Ambicioso  |

<br>

|    `Nome`: Bruno  | `Profissão`: Dono de restaurante       |     `Idade`: 35 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="450" alt="image" src="https://thumbs.dreamstime.com/b/cozinheiro-chefe-afro-americano-consider%C3%A1vel-que-est%C3%A1-o-contador-de-cozinha-pr%C3%B3ximo-118802567.jpg">| `Motivações`: <br>Praticidade, <br> Melhorar a exibição de informação para clientes | `Frustrações`: <br>Mudança constante em pratos disponíveis, <br> Alterações constantes em preços <br>                    
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Correr, <br> Tecnologia | Bruno é um dono de restaurante em Florianópolis que possui clientes consolidados e fiéis, mas enfrenta problemas com seus cardápios físicos, uma vez que há uma alta rotatividade de pratos e preços no restaurante  <br> | Animado <br> Inovador  |

<br>

|    `Nome`: Cláudia  | `Profissão`: Dona de restaurante       |     `Idade`: 27 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="450" alt="image" src="https://image.freepik.com/fotos-gratis/mulher-restaurante-veneza_1303-10401.jpg">| `Motivações`: <br>Organização nos menus, <br> Disponibilidade de cardápios | `Frustrações`: <br>Desgaste dos cardápios físicos, <br>Estilização arcaica dos cardápios físicos, <br> Falta de menus disponíveis                 
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Pintura | Cláudia é uma dona de restaurante em São Paulo que recebe muitos clientes diferentes de diversos lugares todos os dias, ela consegue boas vendas, mas recentemente tem buscado uma solução para lidar com seus cardápios físicos que, muitas vezes não são suficientes pra todos os clientes, além de alto indíce de perca e desgaste dos mesmos, tornando a exibição dos itens desagradável  <br> | Pacífica <br> Extrovertida  |

<br>

|    `Nome`: Leonardo  | `Profissão`: Dono de lanchonete       |     `Idade`: 24 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="450" alt="image" src="https://th.bing.com/th/id/OIP.4tfwnCjjatr2wIQq3bA_6QHaFS?pid=ImgDet&rs=1">| `Motivações`: <br>Praticidade, <br> Facilidade aos clientes <br> Utilizar cardápios em publicações | `Frustrações`: <br>Baixa integração entre itens do menu e publicidade, <br>Cardápios físicos arcaicos, <br> Concorrência do mercado digital                
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Influencer | Leonardo possui uma lanchonete no Rio de Janeiro onde agrega grande parte dos clientes através de POSTs e publicidade no instagram, mas por possuir apenas cardápios físicos, não consegue integrar e enviar para os clientes o cardápio de casa, inviabilizando entregas e popularização dos itens via mídia  <br> | Empolgado <br> Ambicioso  |

<br>

|    `Nome`: Joana  | `Profissão`: Cliente do restaurante       |     `Idade`: 20 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="450" alt="image" src="https://www.agoramt.com.br/wp-content/uploads/2019/10/pessoa-no-celular.jpg">| `Motivações`: <br>Praticidade | `Frustrações`: <br>Cardápios indisponíveis, <br>Cardápios sujos, <br> Impressões mal feitas / Má visualização das informações                
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Estudante | Joana faz faculdade e mora fora de casa, tendo que diariamente utilizar restaurantes para comprar comida, frequentemente ela se encontra esperando alguém liberar o cardápio em horários de pico, que estão em péssimas condições higiênicas e até mesmo de desgaste, o que faz com que ela busque por uma solução contornar essas situações <br> |Esforçada |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rodrigo  | Obter estatísticas sobre os pratos mais e menos acessados | Alterar o menu conforme popularidade dos pratos |
|Rodrigo  | Que seja possível pesquisar pelo seu restaurante | Aumentar o alcance a clientes em potencial |
|Bruno  | Alterar o preço dos pratos | Manter o cardápio atualizado com o valor real dos itens |
|Bruno  | Remover pratos | Não exibir para o cliente pratos indisponíveis |
|Cláudia  | Fornecer cardápios digitais | Não ficar sem cardápios disponíveis |
|Cláudia  | Configurar e ordernar os itens no cardápio | Ter um cardápio atrativo que envolva os clientes |
|Leonardo  | Fornecer o cardápio através de um QRCODE | Integrar posts na mídia com o cardápio |
|Leonardo  | Exibir contato do WhatsApp Business no cardápio | Facilitar o delivery dos itens |
|Joana | Acessar cardápios digitais | Não esperar a disponibilidade do cardápio físico |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação possuirá uma mensagem de auxílio sobre o funcionamento do sistema | BAIXA | 
|RF-002| A aplicação permitirá que o restaurante realize seu cadastro | ALTA |
|RF-003| A aplicação permitirá que o cliente do restaurante realize seu cadastro de forma opcional | MÉDIA |
|RF-004| A aplicação permitirá que o restaurante realize o cadastro do cardápio | ALTA |
|RF-005| A aplicação permitirá que sejam cadastrados, alterados ou removidos itens no cardápio | ALTA |
|RF-006| A aplicação permitirá que o restaurante organize os itens cadatrados em categorias no cardápio | MÉDIA |
|RF-007| A aplicação deve gerar um QR Code para o acesso ao cardápio | MÉDIA |
|RF-008| A aplicação permitirá que o cliente pesquise o restaurante pelo nome para acessar o cardápio | BAIXO |
|RF-009| A aplicação exibirá ao cliente cadastrado um histórico dos últimos cardápios acessados | BAIXA |
|RF-010| A aplicação permitirá que o restaurante visualize dados sobre os pratos mais e menos escolhidos | ALTA |
|RF-011| A aplicação agrupará os pratos selecionados pelo cliente do restaurante | MÉDIA |
|RF-012| A aplicação possuirá uma aba com os cardápios favoritados pelo cliente cadastrado | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve operar em navegadores Web |  ALTA | 
|RNF-002| A aplicação deve operar em dispositivos móveis no ANDROID, IOS | ALTA | 
|RNF-003| A aplicação possuirá responsividade para atender todos os dispositivos homologados | MÉDIA | 
|RNF-004| A aplicação deve ter bom nível de contraste entre os elementos da tela | BAIXA |
|RNF-005| A aplicação deverá seguir as normas da LGPD | MÉDIA |
|RNF-006| A aplicação deve realizar a integração com a câmera do cliente | MÉDIA |
|RNF-007| A aplicação não deverá exigir autenticação do cliente do restaurante para acesso dos cardápios | ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-cardapio-digital/assets/68014636/549a9be5-1a41-4a9a-bf18-c928be51c4ae)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt]<img width="756" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-cardapio-digital/assets/55036173/ab6d02c9-9361-49f8-a496-3791b0fafeb5">


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-cardapio-digital/assets/68014636/db1528fc-1aa5-44d4-bb46-562277051732)

