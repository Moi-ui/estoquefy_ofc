import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3F51B5" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Solicitações</Text>
      </View>

      {/* Lista de Solicitações */}
  <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 80 }}>
        {/* Card 1 */}
        <View style={[styles.card, { borderLeftColor: "#FBC02D" }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardId}>#SA-2025-001</Text>
            <View style={[styles.status, { backgroundColor: "#FBC02D" }]}>
              <Text style={styles.statusText}>Pendente</Text>
            </View>
          </View>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Produto:</Text> Papel A4
          </Text>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Qtd:</Text> 10 resmas
          </Text>
          <Text style={styles.date}>Solicitado em: 15/09/2025</Text>
        </View>

        {/* Card 2 */}
        <View style={[styles.card, { borderLeftColor: "#0288D1" }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardId}>#SA-2025-002</Text>
            <View style={[styles.status, { backgroundColor: "#0288D1" }]}>
              <Text style={styles.statusText}>Aprovado</Text>
            </View>
          </View>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Produto:</Text> Canetas
          </Text>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Qtd:</Text> 50 unidades
          </Text>
          <Text style={styles.date}>Aprovado em: 17/09/2025</Text>
        </View>

        {/* Card 3 */}
        <View style={[styles.card, { borderLeftColor: "#388E3C" }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardId}>#SA-2025-003</Text>
            <View style={[styles.status, { backgroundColor: "#388E3C" }]}>
              <Text style={styles.statusText}>Entregue</Text>
            </View>
          </View>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Produto:</Text> Grampeador
          </Text>
          <Text style={styles.cardLabel}>
            <Text style={styles.bold}>Qtd:</Text> 2 unidades
          </Text>
          <Text style={styles.date}>Entregue em: 20/09/2025</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="document-text-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="tray-arrow-up" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="box" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3F51B5",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 6,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  cardId: { fontSize: 14, fontWeight: "600", color: "#333" },
  status: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  statusText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  cardLabel: { fontSize: 14, color: "#333", marginBottom: 2 },
  bold: { fontWeight: "bold" },
  date: { fontSize: 12, color: "#666", marginTop: 4 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3F51B5",
    height: 60,
  },

  fab: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#3F51B5",
    borderRadius: 40,
    padding: 14,
    elevation: 4,
  },
});