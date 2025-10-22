import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

export default function Suporte() {
  const { darkMode } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#F8F9FB" }]}
    >
      <Text style={[styles.title, { color: darkMode ? "#fff" : "#333" }]}>
        Suporte e Ajuda
      </Text>

      <TextInput
        placeholder="Descreva seu problema..."
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        style={[
          styles.textArea,
          { backgroundColor: darkMode ? "#1E1E1E" : "#fff", color: darkMode ? "#fff" : "#000" },
        ]}
        multiline
      />

      <TouchableOpacity style={styles.button}>
        <Ionicons name="send" size={20} color="#fff" />
        <Text style={styles.buttonText}>Enviar Solicitação</Text>
      </TouchableOpacity>

      <View style={styles.tipBox}>
        <Text style={[styles.tipText, { color: darkMode ? "#bbb" : "#555" }]}>
          💡 Dica: Verifique sua conexão e tente novamente caso o problema persista.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  textArea: {
    borderRadius: 12,
    padding: 14,
    height: 140,
    fontSize: 16,
    textAlignVertical: "top",
    elevation: 2,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C4AA8",
    borderRadius: 12,
    padding: 14,
    marginTop: 20,
  },
  buttonText: { color: "#fff", marginLeft: 8, fontWeight: "bold" },
  tipBox: { marginTop: 30, alignItems: "center" },
  tipText: { fontSize: 15, textAlign: "center" },
});