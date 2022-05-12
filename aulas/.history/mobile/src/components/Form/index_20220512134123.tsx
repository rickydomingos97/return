
import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

import { FeedbackType } from '../../components/Widget'

import { styles } from "./styles";
import { theme } from "../../theme";

interface Props {
  feedbackType: Feedback
}


export function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
      <View style={styles.titleContainer}>
          <Text style={styles.titleText}>

          </Text>
      </View>
      
      </View>
    </View>
  );
}
