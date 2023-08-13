# Prj_JoKenPo
Projeto do jogo JoKenPo usando a linguagem React Native.

Ponto principasi:

# Importação de Componentes e Bibliotecas:
Importa vários componentes e bibliotecas necessários do React Native e do Expo, como StatusBar, StyleSheet, Text, View, Image, useState e Modal.

# Estado do Jogo:
Usa os hooks useState para gerenciar o estado do jogo, incluindo a pontuação do jogador e da máquina, imagens escolhidas pelo jogador e pela máquina, e a visibilidade do modal de empate.

# Funções de Jogo:
exibirImagem(valor): Função que exibe uma imagem com base no valor passado (escolha do jogador ou da máquina).
jogar(escolha): Função que simula a jogada do jogador e da máquina, determina o vencedor e atualiza a pontuação.
resetaPartida(): Função para reiniciar a partida, zerando a pontuação.

# Estilização do Layout:
Define estilos de layout usando a propriedade styles definida através do StyleSheet.create.
Organiza o layout em várias seções, incluindo o título do jogo, o placar, as escolhas do jogador e da máquina, botões de reset e escolha, e um modal para empate.

# Uso de Fontes Personalizadas:
Carrega e usa fontes personalizadas (Montserrat_700Bold e Montserrat_400Regular) para estilização de texto.

# Manipulação de Elementos Interativos:
Utiliza TouchableOpacity para criar botões interativos de escolha do jogador.
Implementa um modal para exibir empates, permitindo que o jogador retorne ao jogo.

# Lógica do Jogo:
Implementa a lógica do jogo "Pedra, Papel e Tesoura", determinando os vencedores com base nas escolhas do jogador e da máquina.

# Responsividade:
Organiza os elementos na interface de forma responsiva, adequando-se a diferentes tamanhos de tela.

# Estilização do Modal:
Define estilos para o modal exibido quando ocorre um empate no jogo


- Gabriel Ferreira Amorim


