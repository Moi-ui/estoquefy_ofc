// app/_layout.tsx
import { Stack, useRouter, usePathname } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

function LayoutContent() {
  const router = useRouter();
  const pathname = usePathname();
  const { darkMode } = useTheme();

  // Rotas sem navbar
  const hideNavbarRoutes = ["/login", "/register", "/"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  // Simulação de login
  const userLoggedin = false;

  // Redireciona só uma vez se o usuário não estiver logado
  // useEffect(() => {
  //   if (!userLoggedin && pathname !== "/login" && pathname !== "/") {
  //     router.replace("/"); // replace evita empilhar navegações
  //   }
  // }, [userLoggedin, pathname]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} />
      {showNavbar && <Navbar />}
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}