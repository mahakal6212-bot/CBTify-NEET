import { router } from "expo-router";
import React from "react";
import { StatusBar, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dot = ({ selected }: { selected: boolean }) => (
  <Text
    style={{
      fontSize: 18,
      color: selected ? "#2563EB" : "#D1D5DB",
      marginHorizontal: 4,
    }}
  >
    ●
  </Text>
);

export default function OnboardingScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Onboarding
        DotComponent={Dot}
        showSkip
        showNext
        showDone
        skipLabel="Skip"
        nextLabel="Next"
        doneLabel="Get Started"
        onSkip={() => router.replace("/(auth)/login")}
        onDone={() => router.replace("/(auth)/login")}
        pages={[
          {
            backgroundColor: "#FFFFFF",
            image: <Text style={{ fontSize: 120 }}>📄</Text>,
            title: "Upload. Convert. Practice.",
            subtitle:
              "Upload any NEET PDF or Images and instantly convert them into a real CBT exam.",
          },
          {
            backgroundColor: "#FFFFFF",
            image: <Text style={{ fontSize: 120 }}>💻</Text>,
            title: "Practice Like NTA",
            subtitle:
              "Experience the real NEET CBT interface with timer, palette and exam environment.",
          },
          {
            backgroundColor: "#FFFFFF",
            image: <Text style={{ fontSize: 120 }}>🏆</Text>,
            title: "Crack NEET Smarter",
            subtitle:
              "Track your score, accuracy and rank prediction after every test.",
          },
        ]}
      />
    </>
  );
}
