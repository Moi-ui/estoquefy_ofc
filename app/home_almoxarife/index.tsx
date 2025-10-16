import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeGerenteAlmoxarife() {
  const { user, signOut } = useAuth();

  async function handleLogout() {
    Alert.alert(
      'Sair',
      'Deseja realmente sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/login');
          }
        }
      ]
    );
  }

  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={["top", "right", "left"]}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          {/* Barra de pesquisa no topo
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder="Buscar produtos, estoque, solicitações..."
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={28} color="#888" />
            </TouchableOpacity>
          </View> */}

          {/* Header com dados do usuário */}
          <View style={styles.headerModern}>
            <MaterialCommunityIcons name="shield-account" size={54} color="#4CAF50" />
            <Text style={styles.headerNameModern}>{user?.nome || 'Gerente'}</Text>
            <Text style={styles.headerEmailModern}>{user?.email || ''}</Text>
            <View style={[styles.badge, styles.badgeGerente]}>
              <Text style={styles.badgeText}>⚙️ Gerente do Almoxarifado</Text>
            </View>
          </View>

          {/* Dashboard de Status do Estoque */}
          <View style={styles.dashboardContainer}>
            <View style={styles.dashCard}>
              <MaterialIcons name="inventory" size={32} color="#4CAF50" />
              <Text style={styles.dashNumber}>347</Text>
              <Text style={styles.dashLabel}>Itens em Estoque</Text>
            </View>
            <View style={styles.dashCard}>
              <Ionicons name="alert-circle" size={32} color="#FF9800" />
              <Text style={[styles.dashNumber, { color: '#FF9800' }]}>23</Text>
              <Text style={styles.dashLabel}>Estoque Baixo</Text>
            </View>
          </View>

          {/* Saudação */}
          <Text style={styles.welcomeModern}>Gestão do Almoxarifado ⚙️</Text>

          {/* Menu Cards - GERENTE */}
          <View style={styles.menuModern}>
            {/* Gestão de Estoque - DESTAQUE */}
            <TouchableOpacity style={[styles.cardModern, styles.cardDestaque]}>
              <FontAwesome5 name="boxes" size={36} color="#fff" />
              <Text style={[styles.cardTextModern, styles.cardTextDestaque]}>Gestão de Estoque</Text>
              <Text style={styles.cardSubtext}>Visualizar e gerenciar inventário</Text>
            </TouchableOpacity>

            {/* Cards duplos - Solicitações */}
            <View style={styles.rowModern}>
              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/solicitacoes_aprovadas')}>
                <MaterialIcons name="assignment" size={28} color="#4CAF50" />
                <Text style={styles.cardTextModern}>Solicitações Aprovadas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/itens')}>
                <MaterialCommunityIcons name="package-variant-closed" size={28} color="#4CAF50" />
                <Text style={styles.cardTextModern}>Itens para Separar</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.rowModern}>
              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/relatorios_gerenciais')}>
                <FontAwesome5 name="chart-line" size={28} color="#4CAF50" />
                <Text style={styles.cardTextModern}>Relatórios Gerenciais</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f8fa"
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 32,
    backgroundColor: "#f7f8fa",
    paddingBottom: 30
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    color: "#222",
    fontSize: 16,
    backgroundColor: "transparent",
  },
  headerModern: {
    alignItems: "center",
    marginBottom: 10,
  },
  headerNameModern: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 6,
  },
  headerEmailModern: {
    color: "#888",
    fontSize: 14,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 8,
  },
  badgeGerente: {
    backgroundColor: '#E8F5E9',
  },
  badgeText: {
    color: '#4CAF50',
    fontSize: 13,
    fontWeight: '600',
  },
  dashboardContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  dashCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  dashNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 8,
  },
  dashLabel: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  welcomeModern: {
    fontSize: 18,
    color: "#4CAF50",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  menuModern: {
    flex: 1,
    gap: 16,
    marginTop: 8,
  },
  cardModern: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  cardDestaque: {
    backgroundColor: "#4CAF50",
    paddingVertical: 28,
  },
  cardTextModern: {
    color: "#4CAF50",
    marginTop: 8,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  cardTextDestaque: {
    color: "#fff",
    fontSize: 18,
  },
  cardSubtext: {
    color: "#E8F5E9",
    fontSize: 13,
    marginTop: 4,
  },
  rowModern: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  cardSmallModern: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 22,
    flex: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
});