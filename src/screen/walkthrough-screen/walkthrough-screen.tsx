import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const walkthroughData = [
  {
    image: require("../../../assets/walkthrough-img.png"),
    title: "Dori-darmonlarni onlayn ko'ring va sotib oling",
    description: "Xaridingizga omad tilaymiz",
  },
  {
    image: require("../../../assets/walkthrough-img.png"),
    title: "Buyurtmangizni kuzatib boring",
    description:
      "Xaridingizga omad tilaymiz. Sizning buyurtmangizni kuzatib boring",
  },
  {
    image: require("../../../assets/walkthrough-img.png"),
    title: "Dori-darmoningizni olib keling",
    description: "Xaridingizga omad tilaymiz",
  },
  {
    image: require("../../../assets/walkthrough-img.png"),
    title: "Sizning sog'lig'ingiz, bizning ustuvorligimiz",
    description: "Xaridingizga omad tilaymiz",
  },
];

export const WalkthroughScreen = () => {
  const navigation = useNavigation();
  const [activeDot, setActiveDot] = useState(0);

  const handleNext = () => {
    if (activeDot === 3) {
      (navigation as any).navigate("login");
    } else {
      setActiveDot((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={walkthroughData[activeDot].image} />
        <Text style={styles.text}>{walkthroughData[activeDot].title}</Text>
        <Text style={styles.description}>
          {walkthroughData[activeDot].description}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.skip}
          onPress={() => (navigation as any).navigate("login")}
        >
          Skip
        </Text>

        <View style={styles.dotsContainer}>
          {[0, 1, 2, 3].map((dot) => (
            <View
              key={dot}
              style={[
                styles.dot,
                { backgroundColor: dot === activeDot ? "blue" : "gray" },
              ]}
            />
          ))}
        </View>

        <Text style={styles.next} onPress={handleNext}>
          {activeDot === 3 ? "Next" : "Next"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 256,
    height: 284,
    marginBottom: 20,
  },
  text: {
    width: 230,
    fontFamily: "Overpass",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    width: 255,
    fontFamily: "Overpass",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 40,
  },
  skip: {
    fontFamily: "Overpass",
    fontWeight: "400",
    fontSize: 16,
    color: "#090F4773",
  },
  dotsContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 16,
    marginTop: 5,
  },
  next: {
    fontFamily: "Overpass",
    fontWeight: "700",
    fontSize: 16,
    color: "#4157FF",
  },
});
