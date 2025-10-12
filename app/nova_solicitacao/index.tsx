import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function NovaSolicitacao() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [categoria, setCategoria] = useState("Material de Consumo (MC)");
  const [quantidade, setQuantidade] = useState("0");
  const [justificativa, setJustificativa] = useState("");

  const handleSubmit = () => {
    console.log({
      codigo,
      categoria,
      quantidade,
      justificativa,
    });
    alert("Solicitação enviada!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
          <Text style={styles.headerTitle}>Nova Solicitação</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Código do Produto</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o código"
            value={codigo}
            onChangeText={setCodigo}
          />

          <Text style={styles.label}>Categoria</Text>
          <View style={styles.selectBox}>
            <TextInput
              style={[styles.input, { flex: 1, borderWidth: 0, marginBottom: 0 }]}
              value={categoria}
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#555" style={{ marginRight: 10 }} />
          </View>

          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />

          <Text style={styles.label}>Justificativa</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: "top" }]}
            placeholder="Descreva o motivo da solicitação"
            multiline
            value={justificativa}
            onChangeText={setJustificativa}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
  
    paddingBottom: 80,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  form: { padding: 20,
    justifyContent: "flex-start"
   },
  label: { fontWeight: "600", marginBottom: 5, fontSize: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  // ...existing code...
});