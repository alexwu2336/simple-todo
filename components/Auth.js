import React from "react";
import { View } from "react-native";
import biometricsAuth from "../utils/biometricsAuth";
import { Text, Button } from "@rneui/themed";

const Auth = ({ children }) => {
  const [verified, setVerified] = React.useState(false);

  const check = async () => {
    try {
      let result = await biometricsAuth();
      setVerified(result);
    } catch (e) {
      setVerified(false);
    }
  };

  React.useEffect(() => {
    setVerified(false);
    check();
  }, []);

  if (!verified)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Content is secured, please authenticate first</Text>
        <Button style={{ marginTop: 10 }} size="sm" onPress={check}>
          Try Again
        </Button>
      </View>
    );
  return <>{children}</>;
};

export default Auth;
