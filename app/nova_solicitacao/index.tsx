import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NovaSolicitacao({ navigation }) {
  const [area, setArea] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [justificativa, setJustificativa] = useState("");
  const [dropdownVisivel, setDropdownVisivel] = useState(false);

  const areas = [
    "Materiais de Escritório",
    "Limpeza e Higiene",
    "Ferramentas",
    "Equipamentos de Produção",
    "Segurança",
  ];

  const handleEnviar = () => {
    if (!area || !produto || !quantidade) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
      return;
    }

    Alert.alert("Solicitação enviada!", "A solicitação foi registrada com sucesso.");
    setArea("");
    setProduto("");
    setQuantidade("");
    setJustificativa("");
  };

  return (
  <SafeAreaView  style={styles.container}>
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#3C4AA8" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Solicitação</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Campo Área */}
        <Text style={styles.label}>Área do Almoxarifado *</Text>
        <TouchableOpacity
          style={styles.select}
          onPress={() => setDropdownVisivel(!dropdownVisivel)}
          activeOpacity={0.7}
        >
          <Text style={{ color: area ? "#000" : "#999" }}>
            {area || "Selecione uma área..."}
          </Text>
          <Ionicons
            name={dropdownVisivel ? "chevron-up" : "chevron-down"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>

        {dropdownVisivel && (
          <View style={styles.dropdown}>
            {areas.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dropdownItem,
                  area === item && styles.dropdownItemSelected,
                ]}
                onPress={() => {
                  setArea(item);
                  setDropdownVisivel(false);
                }}
              >
                <Text
                  style={{
                    color: area === item ? "#3C4AA8" : "#333",
                    fontWeight: area === item ? "bold" : "normal",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Campo Produto */}
        <Text style={styles.label}>Produto *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Papel A4"
          value={produto}
          onChangeText={setProduto}
        />

        {/* Campo Quantidade */}
        <Text style={styles.label}>Quantidade *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 10 unidades"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />

        {/* Campo Justificativa */}
        <Text style={styles.label}>Justificativa (opcional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ex: Reposição de materiais do setor administrativo"
          value={justificativa}
          onChangeText={setJustificativa}
          multiline
        />

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Ionicons name="send-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>Enviar Solicitação</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FB" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  scroll: { padding: 16 },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  select: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 6,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownItemSelected: {
    backgroundColor: "#E9ECFF",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3C4AA8",
    borderRadius: 10,
    marginTop: 30,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
