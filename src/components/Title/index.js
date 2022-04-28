import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={styles.titulo}>Conversão de Escalas Termométricas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 15,
    marginLeft: 35,
  },
});
