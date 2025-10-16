import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";
import { router } from "expo-router";

export default function Configuracoes() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [notificacoes, setNotificacoes] = useState(true);
  const [idioma, setIdioma] = useState("pt-BR");
  const [modalVisible, setModalVisible] = useState(false);

  const limparCache = () => {
    Alert.alert("🧹 Cache limpo", "Os dados temporários foram removidos com sucesso!");
  };

  const mudarIdioma = (novoIdioma: string) => {
    setIdioma(novoIdioma);
    setModalVisible(false);
    Alert.alert("🌎 Idioma alterado", `Idioma definido para: ${novoIdioma}`);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#121212" : "#F8F9FB" },
      ]}
    >
      {/* 🔹 Cabeçalho */}
      <View style={styles.header}>
        <Ionicons
          name="settings"
          size={40}
          color={darkMode ? "#8AB4F8" : "#3C4AA8"}
        />
        <Text style={[styles.title, { color: darkMode ? "#fff" : "#333" }]}>
          Configurações
        </Text>
      </View>

      {/* 🔹 Tema */}
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Ionicons
            name={darkMode ? "moon" : "sunny"}
            size={24}
            color={darkMode ? "#FFD700" : "#3C4AA8"}
          />
          <Text style={[styles.itemText, { color: darkMode ? "#fff" : "#333" }]}>
            Modo Escuro
          </Text>
        </View>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* 🔹 Notificações */}
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Ionicons
            name="notifications"
            size={24}
            color={darkMode ? "#8AB4F8" : "#3C4AA8"}
          />
          <Text style={[styles.itemText, { color: darkMode ? "#fff" : "#333" }]}>
            Notificações
          </Text>
        </View>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
          thumbColor={notificacoes ? "#3C4AA8" : "#ccc"}
        />
      </View>

      {/* 🔹 Idioma */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
      >
        <View style={styles.itemLeft}>
          <Ionicons
            name="language"
            size={24}
            color={darkMode ? "#8AB4F8" : "#3C4AA8"}
          />
          <Text style={[styles.itemText, { color: darkMode ? "#fff" : "#333" }]}>
            Idioma: <Text style={{ fontWeight: "bold" }}>{idioma}</Text>
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={26}
          color={darkMode ? "#aaa" : "#555"}
        />
      </TouchableOpacity>

      {/* 🔹 Limpar Cache */}
      <TouchableOpacity
        style={styles.item}
        onPress={limparCache}
        activeOpacity={0.8}
      >
        <View style={styles.itemLeft}>
          <Ionicons
            name="trash"
            size={24}
            color={darkMode ? "#F28B82" : "#E53935"}
          />
          <Text style={[styles.itemText, { color: darkMode ? "#fff" : "#333" }]}>
            Limpar Cache
          </Text>
        </View>
      </TouchableOpacity>

      {/* 🔹 Suporte/Ajuda */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/suporte")}
        activeOpacity={0.8}
      >
        <View style={styles.itemLeft}>
          <Ionicons
            name="help-circle"
            size={24}
            color={darkMode ? "#8AB4F8" : "#3C4AA8"}
          />
          <Text style={[styles.itemText, { color: darkMode ? "#fff" : "#333" }]}>
            Suporte e Ajuda
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={26}
          color={darkMode ? "#aaa" : "#555"}
        />
      </TouchableOpacity>

      {/* 🔹 Modal de idiomas */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: darkMode ? "#1E1E1E" : "#fff" },
            ]}
          >
            <Text
              style={[styles.modalTitle, { color: darkMode ? "#fff" : "#333" }]}
            >
              Escolher Idioma
            </Text>
            {["pt-BR", "en-US", "es-ES"].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={styles.langButton}
                onPress={() => mudarIdioma(lang)}
              >
                <Text
                  style={[
                    styles.langText,
                    { color: darkMode ? "#fff" : "#333" },
                  ]}
                >
                  {lang === "pt-BR"
                    ? "Português (Brasil)"
                    : lang === "en-US"
                    ? "English (US)"
                    : "Español (ES)"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { alignItems: "center", marginBottom: 25 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 6,
    elevation: 2,
  },
  itemLeft: { flexDirection: "row", alignItems: "center" },
  itemText: { fontSize: 16, marginLeft: 12 },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    width: "80%",
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  langButton: { paddingVertical: 10 },
  langText: { fontSize: 16 },
});
