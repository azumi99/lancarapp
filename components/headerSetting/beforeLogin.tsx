import React from "react";
import { Image } from "react-native";

const BeforeLogin = () => {
  return (
    <Image
      style={{ marginTop: -100 }}
      size="2xl"
      source={require("@/assets/images/beforeLogin.png")}
      alt="Book illustration"
      resizeMode="contain"
    />
  );
};

export default BeforeLogin;
