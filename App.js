import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [PontuacaoJogador, setPontuacaoJogador] = useState(0);
  let [PontuacaoMaquina, setPontuacaoMaquina] = useState(0);

  let SelecaoMaquina = 0;
  let SelecaoJogador = 0;

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

  let NovaPartida = () => {
    SelecaoMaquina = Math.floor(Math.random() * 3) + 1;

    console.log(SelecaoMaquina);
  };

  let Pedra = () => {
    SelecaoJogador = 1;

    if (SelecaoMaquina == 1) {
      console.log("empate");
      console.log("Pedra");
    }

    if (SelecaoMaquina == 2) {
      console.log("perdeu");
      console.log("Papel");

      setPontuacaoMaquina(PontuacaoMaquina + 1);
    }

    if (SelecaoMaquina == 3) {
      console.log("Ganhou");
      console.log("Tesoura");

      setPontuacaoJogador(PontuacaoJogador + 1);
    }
  };

  let Papel = () => {
    SelecaoJogador = 2;

    if (SelecaoMaquina == 2) {
      console.log("empate");
      console.log("Papel");
    }

    if (SelecaoMaquina == 1) {
      console.log("ganhou");
      console.log("Pedra");

      setPontuacaoJogador(PontuacaoJogador + 1);
    }

    if (SelecaoMaquina == 3) {
      console.log("perdeu");
      console.log("Tesoura");

      setPontuacaoMaquina(PontuacaoMaquina + 1);
    }
  };

  let Tesoura = () => {
    SelecaoJogador = 3;

    if (SelecaoMaquina == 3) {
      console.log("empate");
      console.log("Tesoura");
    }

    if (SelecaoMaquina == 2) {
      console.log("ganhou");
      console.log("Papel");

      setPontuacaoJogador(PontuacaoJogador + 1);
    }

    if (SelecaoMaquina == 1) {
      console.log("perdeu");
      console.log("Pedra");

      setPontuacaoMaquina(PontuacaoMaquina + 1);
    }
  };

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
        <Image
          source={require("./assets/caixa.png")}
          style={{ width: "30%", height: "45%" }}
        />

        <Image
          source={require("./assets/vs.png")}
          style={{ width: "20%", height: "20%" }}
        />

        <Image
          source={require("./assets/caixa.png")}
          style={{ width: "30%", height: "45%" }}
        />
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
          onPress={NovaPartida}
        >
          <Text style={{ textAlign: "center" }}>Nova Partida</Text>
        </TouchableOpacity>

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
          onPress={Pedra}
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
          onPress={Papel}
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
          onPress={Tesoura}
        >
          <Image
            source={require("./assets/tesoura.png")}
            style={{ width: "100%", height: "75%" }}
          />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F18F01",
  },
});
