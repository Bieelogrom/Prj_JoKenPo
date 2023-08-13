import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { Modal, TouchableOpacity } from "react-native-web";


//comando para instalr fonte - npx expo install expo-font @expo-google-fonts/montserrat
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [PontuacaoJogador, setPontuacaoJogador] = useState(0);
  let [PontuacaoMaquina, setPontuacaoMaquina] = useState(0);

  const [imgJogador, setImgJogador] = useState(0);
  const [imgOponente, setImgOponente] = useState(0);
  const [modal, setModal] = useState(false);

  function exibirImagem(valor) {
    if (valor == 0) {
      

    } else if (valor == 1) {
      return (
        <Image
          source={require("./assets/pedra.png")}
          style={{ width: "25%", height: "37%" }}
        />
      );
    } else if (valor == 2) {
      return (
        <Image
        source={require("./assets/tesoura.png")}
        style={{ width: "25%", height: "37%" }}
      />
      );
    } else if (valor == 3) {
      return (
        <Image
        source={require("./assets/tesoura.png")}
        style={{ width: "25%", height: "37%" }}
      />
      );
    }
  }

  function jogar(escolha) {
    console.log(escolha);
    setImgJogador(escolha);
    let escolhaJogador = escolha;
    let escolhaMaquina = Math.floor(Math.random() * 3) + 1;
    console.log("Maquina:", escolhaMaquina);
    setImgOponente(escolhaMaquina);

    if (escolhaMaquina == escolhaJogador) {
      setModal(true)
      console.log("Empate") 
  

    } else if (
      (escolhaMaquina == 1 && escolhaJogador == 2) ||
      (escolhaMaquina == 2 && escolhaJogador == 3) ||
      (escolhaMaquina == 3 && escolhaJogador == 1)
    ) {
      setPontuacaoJogador(PontuacaoJogador + 1);
      console.log(escolhaJogador);
      console.log(escolhaMaquina);
      console.log("Ganhou");
    } else if (escolhaMaquina == 1) {
    } else if (escolhaJogador == 1 && escolhaMaquina == 2) {
      setPontuacaoMaquina(PontuacaoMaquina + 1);
      console.log("Perdeu");
    } else if (escolhaJogador == 2 && escolhaMaquina == 3) {
      setPontuacaoMaquina(PontuacaoMaquina + 1);
      console.log("Perdeu");
    } else if (escolhaJogador == 3 && escolhaMaquina == 1) {
      setPontuacaoMaquina(PontuacaoMaquina + 1);
      console.log("Perdeu");
    }
  }

  let resetaPartida = () => {
    console.log("Jogo resetado");
    setPontuacaoMaquina((PontuacaoMaquina = 0));
    setPontuacaoJogador((PontuacaoJogador = 0));
  };

  const [fonteCarregada] = useFonts({
    MonteserratRegular: Montserrat_400Regular,
    MonteserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,

          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 70,
            fontFamily: "MonteserratBold",
            color: "#F6EFEE",
          }}
        >
          Jo Ken Pô
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "MonteserratRegular",
            color: "#F6EFEE",
          }}
        >
          Placar
        </Text>
      </View>

      <View
        style={{
          flex: 1,

          flexDirection: "row",

          alignItems: "center",

          justifyContent: "space-around",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MonteserratRegular",
              color: "#F6EFEE",
            }}
          >
            Jogador
          </Text>

          <Text style={{ fontSize: 40, color: "#F6EFEE" }}>
            {PontuacaoJogador}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MonteserratRegular",
              color: "#F6EFEE",
            }}
          >
            Máquina
          </Text>

          <Text style={{ fontSize: 40, color: "#F6EFEE" }}>
            {PontuacaoMaquina}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,

          flexDirection: "row",

          justifyContent: "space-evenly",

          alignItems: "center",
        }}
      >
        {exibirImagem(imgJogador)}

        <Image
          source={require("./assets/vs.png")}
          style={{ width: "25%", height: "25%" }}
        />

        {exibirImagem(imgOponente)}
      </View>

      <View
        style={{
          flex: 1,

          alignItems: "center",

          justifyContent: "center",
        }}
      >

        <TouchableOpacity
          style={{
            backgroundColor: "#cccccc",

            borderRadius: 10,

            width: "50%",

            padding: 10,

            BorderColor: "#000000",
          }}
          onPress={resetaPartida}
        >
          <Text style={{ textAlign: "center" }}>Resetar jogo</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,

          flexDirection: "row",

          justifyContent: "space-evenly",

          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "30%",

            height: "100%",

            justifyContent: "center",

            alignItems: "center",
          }}
          onPress={() => jogar(1)}
        >
          <Image
            source={require("./assets/pedra.png")}
            style={{ width: "100%", height: "75%" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "30%",

            height: "100%",

            justifyContent: "center",

            alignItems: "center",
          }}
          onPress={() => jogar(2)}
        >
          <Image
            source={require("./assets/papel.png")}
            style={{ width: "100%", height: "75%" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "30%",

            height: "100%",

            justifyContent: "center",

            alignItems: "center",
          }}
          onPress={() => jogar(3)}
        >
          <Image
            source={require("./assets/tesoura.png")}
            style={{ width: "100%", height: "75%" }}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={modal} transparent>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  }}>
          <View style={styles.modal}>
            <Text style={styles.textModal}>Empate</Text>
            <TouchableOpacity style={styles.btnModal} onPress={ () => setModal(false)}>
              <Text style={styles.btnTextModal}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F18F01",
  },

  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    width: 200, 
    height: 150,
    borderRadius: 50,

  },

  textModal: {
    fontFamily: "MonteserratBold",
    fontSize: 24,
  },

  btnModal: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
    border: 10,
    borderRadius: 25,
    backgroundColor: 'red'
  
  },

  btnTextModal:{
    fontFamily: "MonteserratBold",
    fontSize: 20,
    color: 'white',
  }
});
