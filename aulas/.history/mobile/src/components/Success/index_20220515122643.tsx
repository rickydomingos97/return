import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import successImg from "../../success.png";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity style={}>
          <Text style={styles.buttonTitle}>
              Quero enviar outro
          </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
