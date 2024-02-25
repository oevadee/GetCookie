import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  children: string;
  size?: "XS" | "S" | "M" | "L";
  style?: {};
};

export const Heading: React.FC<Props> = ({ children, size = "M", style }) => {
  let fontSize = 24;
  if (size === "XS") {
    fontSize = 16;
  } else if (size === "S") {
    fontSize = 20;
  } else if (size === "L") {
    fontSize = 28;
  }

  return (
    <Text style={[styles.heading, { fontSize, ...style }]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
  },
});
