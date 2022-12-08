# Projeto-10-TrybeTunes

Neste projeto você irá criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

Fazer login;
Pesquisar por uma banda ou artista;
Listar os álbuns disponíveis dessa banda ou artista;
Visualizar as músicas de um álbum selecionado;
Reproduzir uma prévia das músicas deste álbum;
Favoritar e desfavoritar músicas;
Ver a lista de músicas favoritas;
Ver o perfil da pessoa logada;
Editar o perfil da pessoa logada;

1. Crie as rotas necessárias para a aplicação
Você deve utilizar o BrowserRouter pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta src/pages, conforme o indicado abaixo:

Rota /
Rota /search
Rota /album/:id
Rota /favorites
Rota /profile
Rota /profile/edit
Para qualquer outra rota não mapeada

O que será verificado
2. Crie um formulário para identificação
Dentro do componente Login, que é renderizado na rota /, crie um formulário para que a pessoa usuária se identifique com um nome:

O que será verificado
3. Crie um componente de cabeçalho
Crie um componente chamado Header, dentro da pasta src/components:

O que será verificado
4. Crie os links de navegação no cabeçalho
Crie o link que redireciona para a página de pesquisa:
Crie o link que redireciona para a página de músicas favoritas:
Crie o link que redireciona para a página de exibição de perfil:

O que será verificado
5. Crie o formulário para pesquisar artistas
Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista.

Crie o formulário dentro do componente Search, que é renderizado na rota /search:

O que será verificado
6. Faça a requisição para pesquisar artistas
Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.

Ao clicar no botão de Pesquisar, limpe o valor do input e faça uma requisição utilizando a função do arquivo searchAlbumsAPIs.js:
Liste os álbuns retornados. A API irá retorna um array de objetos. Cada objeto terá a seguinte estrutura:
Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um array vazio. Nesse caso, a mensagem `Nenhum álbum foi encontrado` deverá ser exibida:
Ao listar os álbuns, crie um link em cada card para redirecionar para a página do álbum. Este link deve ter o atributo data-testid={`link-to-album-${collectionId}`}. Onde `collectionId` é o valor da propriedade de cada Álbum:

O que será verificado
7. Crie a lista de músicas do álbum selecionado
Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado.

Crie a lista dentro do componente Album, que é renderizado na rota /album/:id:

O que será verificado
8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas
Você já consegue listar as músicas dos álbuns. Nessa etapa você poderá marcar quais são as músicas que você mais gosta.

No componente MusicCard, crie um input do tipo checkbox para marcar as músicas favoritas:
Para adicionar uma música a lista de favoritas, utilize a função addSong da favoriteSongsAPI. Você deve passar para essa função um objeto no mesmo formato que você recebe da API getMusics:
Ilustração:

O que será verificado
9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum
Ao entrar na página com a lista de músicas de um álbum, na rota /album/:id, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado

O que será verificado
10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música
Após adicionar uma música na lista de favoritas usando a função addSong (Requisito 8), faça uma requisição usando a função getFavoriteSongs para atualizar a lista de músicas favoritas:

O que será verificado
11. Crie o mecanismo para remover músicas na lista de músicas favoritas
Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.

Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. Para isso você deve usar a função removeSong da favoriteSongsAPI. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função addSong:

O que será verificado


