import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Isso remove o header padrão de todas as telas
      }}
    />
  );
}