import React from "react";
import { View } from "react-native";

import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles } from "./styles";

export function Options() {
  return (
    <View style={styles.container}>


      <View style={styles.options}>
        {}
        </View>
      <Copyright />
    </View>
  );
}