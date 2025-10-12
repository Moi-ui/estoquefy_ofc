import { Stack } from "expo-router";
import Navbar from "./components/Navbar";
import { usePathname } from "expo-router";

export default function Layout() {
  const pathname = usePathname();

  // Lista de telas que NÃO devem ter a Navbar
  const hideNavbarRoutes = ["/login", "/register"];

  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Stack />
    </>
  );
}
