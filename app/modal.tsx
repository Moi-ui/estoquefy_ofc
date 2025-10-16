import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Modal() {
  const router = useRouter();
  const { id, item, quantidade, solicitante } = useLocalSearchParams();

  // Simulação de status ou contexto (poderia vir do backend futuramente)
  const status = "Pendente";

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <LinearGradient
          colors={["#3C4AA8", "#6C7BFF"]}
          style={styles.header}
        >
          <MaterialIcons name="inventory" size={36} color="#fff" />
          <Text style={styles.title}>Detalhes da Solicitação</Text>
        </LinearGradient>

        <View style={styles.body}>
          <Text style={styles.label}>Solicitante:</Text>
          <Text style={styles.value}>{solicitante || "João Silva"}</Text>

          <Text style={styles.label}>Item:</Text>
          <Text style={styles.value}>{item || "Cabo HDMI"}</Text>

          <Text style={styles.label}>Quantidade:</Text>
          <Text style={styles.value}>{quantidade || "5 unidades"}</Text>

          <Text style={styles.label}>Status:</Text>
          <Text
            style={[
              styles.status,
              status === "Pendente"
                ? { color: "#FFC107" }
                : status === "Aprovado"
                ? { color: "#4CAF50" }
                : { color: "#F44336" },
            ]}
          >
            {status}
          </Text>
        </View>

        {/* Botões de ação */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#4CAF50" }]}
            onPress={() => {
              alert("✅ Solicitação aprovada!");
              router.back();
            }}
          >
            <MaterialIcons name="check" size={22} color="#fff" />
            <Text style={styles.btnText}>Aprovar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#F44336" }]}
            onPress={() => {
              alert("❌ Solicitação recusada.");
              router.back();
            }}
          >
            <MaterialIcons name="close" size={22} color="#fff" />
            <Text style={styles.btnText}>Recusar</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para fechar */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => router.back()}
        >
          <MaterialIcons name="keyboard-arrow-down" size={28} color="#3C4AA8" />
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: width * 0.9,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 10,
  },
  header: {
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    gap: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  closeBtn: {
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 20 : 12,
  },
  closeText: {
    color: "#3C4AA8",
    fontWeight: "500",
  },
});
