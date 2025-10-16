import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { goBack } from "expo-router/build/global-state/routing";

export default function HistoricoSolicitacoes() {
  const solicitacoes = [
  {
    id: "#SA-2025-001",
    produto: "Papel A4",
    quantidade: "10 resmas",
    status: "Pendente",
    data: "15/09/2025",
    cor: "#FBC02D",
    icone: "clock-outline", // nome válido no MaterialCommunityIcons
  },
  {
    id: "#SA-2025-002",
    produto: "Canetas",
    quantidade: "50 unidades",
    status: "Aprovado",
    data: "17/09/2025",
    cor: "#0288D1",
    icone: "check-decagram-outline",
  },
  {
    id: "#SA-2025-003",
    produto: "Grampeador",
    quantidade: "2 unidades",
    status: "Entregue",
    data: "20/09/2025",
    cor: "#388E3C",
    icone: "package-variant-closed-check",
  },
];


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3C4AA8" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histórico de Solicitações</Text>
      </View>

      {/* Lista de Solicitações */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {solicitacoes.map((item) => (
          <View
            key={item.id}
            style={[styles.card, { borderLeftColor: item.cor }]}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardId}>{item.id}</Text>
              <View style={[styles.statusContainer, { backgroundColor: item.cor }]}>
                <MaterialCommunityIcons
                  name={item.icone}
                  size={16}
                  color="#fff"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.cardLabel}>
                <Text style={styles.bold}>Produto: </Text> {item.produto}
              </Text>
              <Text style={styles.cardLabel}>
                <Text style={styles.bold}>Quantidade: </Text> {item.quantidade}
              </Text>
              <View style={styles.dateRow}>
                <MaterialIcons name="event" size={14} color="#666" />
                <Text style={styles.dateText}>
                  {item.status === "Pendente"
                    ? `Solicitado em ${item.data}`
                    : item.status === "Aprovado"
                    ? `Aprovado em ${item.data}`
                    : `Entregue em ${item.data}`}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },

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

  scrollContent: {
    padding: 16,
    paddingBottom: 110, // espaço para não sobrepor a Navbar global
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardId: { fontSize: 14, fontWeight: "600", color: "#333" },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  statusText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  cardBody: { marginTop: 4 },
  cardLabel: { fontSize: 14, color: "#333", marginBottom: 3 },
  bold: { fontWeight: "bold" },

  dateRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  dateText: { fontSize: 12, color: "#666", marginLeft: 4 },
});