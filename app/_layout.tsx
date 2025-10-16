// app/_layout.tsx
import { Stack, Redirect, usePathname } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";

function LayoutContent() {
  const pathname = usePathname();
  const { darkMode } = useTheme();

  // Lista de telas que NÃO devem ter a Navbar
  const hideNavbarRoutes = ["/login", "/register", "/"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  // Aqui você pode adicionar lógica de login
  const userLoggedin = false; // Exemplo
  if (!userLoggedin && pathname !== "/login") {
    return <Redirect href="/" />;
  }
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent/>
    </ThemeProvider> )
};
