import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  //const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Navigation Example
            </Text>
            <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />

            
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
