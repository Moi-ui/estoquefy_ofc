import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { goBack } from "expo-router/build/global-state/routing";

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
export default function SolicitacoesSeparar({ navigation }: any) {
  const handleAprovar = (item: any) => {
    Alert.alert("Solicitação aprovada", `Produto ${item.codigo} aprovado! ✅`);
  };

  const handleRecusar = (item: any) => {
    Alert.alert("Solicitação recusada", `Produto ${item.codigo} recusado ❌`);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="cube-outline" size={22} color="#3C4AA8" />
        <Text style={styles.codigo}>{item.codigo}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Quantidade</Text>
        <Text style={styles.value}>{item.quantidade}</Text>

        {item.justificativa && (
          <>
            <Text style={styles.label}>Justificativa</Text>
            <Text style={styles.value}>{item.justificativa}</Text>
          </>
        )}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.aprovar]}
          onPress={() => handleAprovar(item)}
        >
          <Ionicons name="checkmark-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Aprovar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.recusar]}
          onPress={() => handleRecusar(item)}
        >
          <Ionicons name="close-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Recusar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3C4AA8" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Solicitações Pendentes</Text>
      </View>

      {/* Lista de solicitações */}
      <FlatList
        data={solicitacoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F6" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingHorizontal: 16,
    paddingVertical: 14,
    elevation: 3,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  listContainer: {
    padding: 16,
    paddingBottom: 100, // evita sobreposição com a navbar
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  codigo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C4AA8",
    marginLeft: 6,
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
    color: "#555",
    fontSize: 13,
    marginTop: 6,
  },
  value: {
    fontSize: 14,
    color: "#333",
    backgroundColor: "#EEE",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  aprovar: { backgroundColor: "#3C4AA8" },
  recusar: { backgroundColor: "#C0392B" },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
});