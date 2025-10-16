import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function RelatoriosAlmoxarife() {
  const { theme } = useTheme();
  const [periodo, setPeriodo] = useState("Mensal");

  // Mock de dados
  const usoEstoque = [
    { name: "Parafusos", quantidade: 150 },
    { name: "Cabos", quantidade: 120 },
    { name: "Motores", quantidade: 30 },
    { name: "Sensores", quantidade: 18 },
  ];

  const dadosGrafico = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: theme === "dark" ? "#1a1a1a" : "#ffffff",
    backgroundGradientTo: theme === "dark" ? "#121212" : "#ffffff",
    color: (opacity = 1) => (theme === "dark" ? `rgba(255,255,255,${opacity})` : `rgba(0,0,0,${opacity})`),
    barPercentage: 0.5,
  };

  return (
    <SafeAreaView style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.titulo, theme === "dark" && styles.darkText]}>📊 Relatórios Gerenciais</Text>

        {/* Filtros */}
        <View style={styles.filtros}>
          {["Diário", "Mensal", "Anual"].map((op) => (
            <TouchableOpacity
              key={op}
              style={[styles.botaoFiltro, periodo === op && styles.botaoAtivo]}
              onPress={() => setPeriodo(op)}
            >
              <Text style={[styles.textoFiltro, periodo === op && styles.textoAtivo]}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Indicadores principais */}
        <View style={styles.kpiContainer}>
          <View style={[styles.kpiCard, theme === "dark" && styles.darkCard]}>
            <Ionicons name="cube" size={26} color="#4e91f9" />
            <Text style={[styles.kpiValor, theme === "dark" && styles.darkText]}>318</Text>
            <Text style={[styles.kpiLabel, theme === "dark" && styles.darkText]}>Itens em Estoque</Text>
          </View>

          <View style={[styles.kpiCard, theme === "dark" && styles.darkCard]}>
            <MaterialIcons name="trending-up" size={26} color="#22c55e" />
            <Text style={[styles.kpiValor, theme === "dark" && styles.darkText]}>+12%</Text>
            <Text style={[styles.kpiLabel, theme === "dark" && styles.darkText]}>Crescimento do Uso</Text>
          </View>

          <View style={[styles.kpiCard, theme === "dark" && styles.darkCard]}>
            <Ionicons name="alert-circle" size={26} color="#facc15" />
            <Text style={[styles.kpiValor, theme === "dark" && styles.darkText]}>3</Text>
            <Text style={[styles.kpiLabel, theme === "dark" && styles.darkText]}>Itens Críticos</Text>
          </View>
        </View>

        {/* Gráfico de uso */}
        <Text style={[styles.subtitulo, theme === "dark" && styles.darkText]}>Tendência de Uso</Text>
        <LineChart
          data={dadosGrafico}
          width={screenWidth - 30}
          height={220}
          chartConfig={chartConfig}
          style={styles.grafico}
        />

        {/* Gráfico de proporção */}
        <Text style={[styles.subtitulo, theme === "dark" && styles.darkText]}>Proporção de Itens em Estoque</Text>
        <BarChart
          data={{
            labels: usoEstoque.map((i) => i.name),
            datasets: [{ data: usoEstoque.map((i) => i.quantidade) }],
          }}
          width={screenWidth - 30}
          height={220}
          chartConfig={chartConfig}
          style={styles.grafico}
        />

        {/* Alerta de IA (simulado) */}
        <View style={[styles.alertaIA, theme === "dark" && styles.darkCard]}>
          <Ionicons name="bulb" size={24} color="#f59e0b" />
          <Text style={[styles.textoIA, theme === "dark" && styles.darkText]}>
            🔮 Previsão inteligente: o consumo de cabos pode dobrar no próximo mês. Considere solicitar reposição antecipada.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 15 },
  darkContainer: { backgroundColor: "#121212" },
  titulo: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  subtitulo: { fontSize: 18, fontWeight: "600", marginTop: 25 },
  darkText: { color: "#ffffff" },
  filtros: { flexDirection: "row", justifyContent: "center", marginVertical: 15 },
  botaoFiltro: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "#e5e5e5",
  },
  botaoAtivo: { backgroundColor: "#4e91f9" },
  textoFiltro: { color: "#000", fontWeight: "500" },
  textoAtivo: { color: "#fff" },
  kpiContainer: { flexDirection: "row", justifyContent: "space-between" },
  kpiCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  darkCard: { backgroundColor: "#1e1e1e" },
  kpiValor: { fontSize: 22, fontWeight: "bold", marginTop: 5 },
  kpiLabel: { fontSize: 13, color: "#666" },
  grafico: { borderRadius: 10, marginTop: 10 },
  alertaIA: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff8e1",
    padding: 12,
    borderRadius: 15,
    marginTop: 25,
  },
  textoIA: { flex: 1, marginLeft: 10, color: "#333" },
});
