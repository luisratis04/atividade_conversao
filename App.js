import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Title from "./src/components/Title/";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [celsius, setCelsius] = useState(0);

  function calcularCelsius() {
    Number.isNaN(celsius)
      ? setResult("Valor Invalido!")
      : setResult(celsius + 273);
  }

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.resultado}>
        <Text>{result}</Text>
      </View>
      <Text style={styles.celsius}>Celsius:</Text>
      <TextInput
        placeholder="Insira um valor para a conversão em KELVIN"
        style={styles.entrada}
        placeholderTextColor="black"
        keyboardType="number-pad"
        onChangeText={(temperature) =>
          setCelsius(Number.parseFloat(temperature))
        }
      />
      <TouchableOpacity style={styles.fundo} onPress={calcularCelsius}>
        <Text style={styles.button}>Converter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 25,
    paddingTop: 45,
    paddingRight: 25,
  },
  entrada: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "left",
    width: 315,
    padding: 4,
    marginTop: 2,
    borderRadius: 5,
  },
  celsius: {
    marginTop: 10,
  },
  button: {
    color: "#fff",
    fontSize: 17,
  },
  fundo: {
    backgroundColor: "black",
    marginTop: 10,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  resultado: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    paddingRight: 5.5,
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: 5,
  },
});
