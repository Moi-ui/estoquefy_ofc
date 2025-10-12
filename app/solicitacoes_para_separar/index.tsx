import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

const solicitacoes = [
  {
    id: "1",
    codigo: "PAP001",
    quantidade: "10",
    justificativa: "Aumento de demanda",
  },
  {
    id: "2",
    codigo: "POP002",
    quantidade: "5",
    justificativa: "Reposição de estoque",
  },
  {
    id: "3",
    codigo: "PEP003",
    quantidade: "8",
    justificativa: "Ordens de produção",
  },
];

export default function SolicitacoesSeparar() {
  const renderItem = ({ item, index }: any) => (
    <View style={styles.itemRow}>
      {/* Linha do tempo */}
      <View style={styles.timeline}>
        <View style={styles.circle} />
        {index < solicitacoes.length - 0 && <View style={styles.line} />}
      </View>

      {/* Conteúdo */}
      <View style={styles.itemContent}>
        <Text style={styles.label}>Código do produto</Text>
        <View style={styles.box}>
          <Text style={styles.value}>{item.codigo}</Text>
        </View>

        <Text style={styles.label}>Quantidade</Text>
        <View style={styles.box}>
          <Text style={styles.value}>{item.quantidade}</Text>
        </View>

        {item.justificativa && (
          <>
            <Text style={styles.label}>Justificativa</Text>
            <View style={styles.box}>
              <Text style={styles.value}>{item.justificativa}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Solicitações para Separar</Text>
      </View>

      {/* Lista */}
      <FlatList
        data={solicitacoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 80 }}
      />

      {/* Bottom Menu */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  itemRow: { flexDirection: "row", marginBottom: 25 },
  timeline: { alignItems: "center", width: 20 },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#bbb",
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#bbb",
    marginTop: 2,
  },
  itemContent: { flex: 1, marginLeft: 10 },
  label: { fontWeight: "700", marginBottom: 4, fontSize: 14 },
  box: {
    backgroundColor: "#e6e6e6",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  value: { fontSize: 14, color: "#333" },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingVertical: 10,
  },
  submitButton: {
    backgroundColor: "#3C4AA8",
    borderRadius: 50,
    padding: 5,
    marginHorizontal: 15,
  },
});