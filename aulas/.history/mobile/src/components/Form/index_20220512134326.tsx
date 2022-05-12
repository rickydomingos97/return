
import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

import { FeedbackType } from '../../components/Widget'

import { styles } from "./styles";
import { theme } from "../../theme";
import {} from '../../utils/feedbackTypes'

interface Props {
  feedbackType: FeedbackType;
}


export function Form({feedbackType}: Props) {
  const feedbackTypeInfo = 
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
