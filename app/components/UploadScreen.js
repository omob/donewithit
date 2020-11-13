import React from "react";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import { Modal, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function UploadScreen({
  visible = false,
  progress = 0,
  onAnimationFinish,
}) {
  if (!visible) return null;

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            width={200}
            progress={progress * 100}
            color={colors.primary}
          />
        ) : (
          <LottieView
            autoPlay={true}
            loop={false}
            onAnimationFinish={onAnimationFinish}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
