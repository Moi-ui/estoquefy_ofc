import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; // vem no Expo, pode usar tranquilo

const SCREEN_WIDTH = Dimensions.get("window").width;

// 🔹 Simulação de dados reais do aprovador (mock local)
const MOCK_DADOS = [
  { status: "Aprovado", quantidade: 22 },
  { status: "Recusado", quantidade: 5 },
  { status: "Aguardando", quantidade: 9 },
];

export default function RelatorioAprovador() {
  const totalSolicitacoes = MOCK_DADOS.reduce((acc, item) => acc + item.quantidade, 0);
  const aprovados = MOCK_DADOS.find((i) => i.status === "Aprovado")?.quantidade || 0;
  const taxaAprovacao = ((aprovados / totalSolicitacoes) * 100).toFixed(1);

  const chartData = useMemo(() => MOCK_DADOS, []);

  // 🔹 Insight baseado nos índices
  const insight =
    aprovados / totalSolicitacoes > 0.7
      ? "🔹 Alto índice de aprovação! O fluxo está eficiente e bem gerido."
      : aprovados / totalSolicitacoes > 0.4
      ? "🟡 Aprovação mediana. Avalie gargalos e revise critérios de aprovação."
      : "🔴 Nível baixo de aprovação! Pode haver inconsistência nas requisições.";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔹 Cabeçalho */}
        <View style={styles.header}>
          <MaterialCommunityIcons name="chart-box" size={52} color="#3C4AA8" />
          <Text style={styles.title}>Relatório de Aprovação</Text>
          <Text style={styles.subtitle}>Desempenho e análise das solicitações</Text>
        </View>

        {/* 🔹 KPIs principais */}
        <View style={styles.kpiRow}>
          <KpiCard icon="check-circle" color="#4CAF50" label="Aprovadas" value={`${taxaAprovacao}%`} />
          <KpiCard
            icon="clock"
            color="#FFC107"
            label="Pendentes"
            value={MOCK_DADOS.find((i) => i.status === "Aguardando")?.quantidade}
          />
          <KpiCard
            icon="x-circle"
            color="#F44336"
            label="Recusadas"
            value={MOCK_DADOS.find((i) => i.status === "Recusado")?.quantidade}
          />
        </View>

        {/* 🔹 Gráfico de barras simples */}
        <Text style={styles.sectionTitle}>Distribuição por Status</Text>
        <View style={styles.chartContainer}>
          {chartData.map((item, index) => {
            const barHeight = (item.quantidade / totalSolicitacoes) * 150;
            const barColor =
              item.status === "Aprovado"
                ? "#4CAF50"
                : item.status === "Recusado"
                ? "#F44336"
                : "#FFC107";
            return (
              <View key={index} style={styles.barGroup}>
                <LinearGradient
                  colors={[barColor, "#dfe6ff"]}
                  style={[styles.bar, { height: barHeight }]}
                />
                <Text style={styles.barLabel}>{item.status}</Text>
              </View>
            );
          })}
        </View>

        {/* 🔹 Gráfico de pizza (simplificado visualmente) */}
        <Text style={styles.sectionTitle}>Proporção Geral</Text>
        <View style={styles.pieContainer}>
          {chartData.map((item, i) => {
            const percent = ((item.quantidade / totalSolicitacoes) * 100).toFixed(1);
            return (
              <View key={i} style={styles.pieItem}>
                <View
                  style={[
                    styles.colorDot,
                    {
                      backgroundColor:
                        item.status === "Aprovado"
                          ? "#4CAF50"
                          : item.status === "Recusado"
                          ? "#F44336"
                          : "#FFC107",
                    },
                  ]}
                />
                <Text style={styles.pieText}>
                  {item.status}: {percent}%
                </Text>
              </View>
            );
          })}
        </View>

        {/* 🔹 Insight inteligente */}
        <View style={styles.insightBox}>
          <Ionicons name="analytics" size={24} color="#3C4AA8" />
          <Text style={styles.insightText}>{insight}</Text>
        </View>

        {/* 🔹 Botão de exportação */}
        <TouchableOpacity
          style={styles.exportButton}
          onPress={() =>
            alert(
              "📊 Exportação simulada: aqui seria gerado um relatório PDF/Planilha via backend."
            )
          }
        >
          <MaterialCommunityIcons name="file-export-outline" size={22} color="#fff" />
          <Text style={styles.exportText}>Exportar Relatório</Text>
        </TouchableOpacity>

        {/* 💡 FUTURO BACKEND:
          - Aqui é onde nós vamos conectar o Google Sheets ou banco via API.
          - Da pro sistema puxar os dados em tempo real.
          - Seria bom gerar PDF com gráficos e enviar por e-mail.
        */}
      </ScrollView>
    </SafeAreaView>
  );
}

// 🔸 Componente KPI Card
function KpiCard({ icon, color, label, value }: any) {
  return (
    <View style={styles.kpiCard}>
      <Feather name={icon} size={26} color={color} />
      <Text style={styles.kpiTitle}>{label}</Text>
      <Text style={styles.kpiValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FB" },
  header: { alignItems: "center", marginVertical: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#3C4AA8", marginTop: 8 },
  subtitle: { fontSize: 15, color: "#777", textAlign: "center", marginTop: 4 },

  kpiRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
  kpiCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    elevation: 3,
    width: 110,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  kpiTitle: { color: "#555", fontSize: 12, marginTop: 4 },
  kpiValue: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 4 },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3C4AA8",
    marginLeft: 22,
    marginTop: 10,
    marginBottom: 10,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 200,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    elevation: 2,
  },
  barGroup: { alignItems: "center" },
  bar: {
    width: 45,
    borderRadius: 10,
  },
  barLabel: { fontSize: 13, color: "#555", marginTop: 6 },

  pieContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  pieItem: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  pieText: { fontSize: 14, color: "#333" },

  insightBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8ECFF",
    borderRadius: 12,
    padding: 14,
    margin: 20,
  },
  insightText: {
    marginLeft: 10,
    color: "#3C4AA8",
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },

  exportButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    marginHorizontal: 60,
    borderRadius: 14,
    paddingVertical: 12,
    marginBottom: 40,
    elevation: 4,
  },
  exportText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8,
  },
});