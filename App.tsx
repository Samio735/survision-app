import { ClerkProvider } from "@clerk/clerk-expo";
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <View className="justify-center h-full items-center text-2xl">
            <SignedIn>
              <Text className="bg">Welcome to your app!</Text>
            </SignedIn>
            <SignedOut>
              <SignInScreen />
            </SignedOut>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
