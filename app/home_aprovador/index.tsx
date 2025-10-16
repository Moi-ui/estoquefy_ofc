import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeAprovador() {
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
              placeholder="Buscar solicitações pendentes..."
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={28} color="#888" />
            </TouchableOpacity>
          </View> */}

          {/* Header com dados do usuário */}
          <View style={styles.headerModern}>
            <MaterialCommunityIcons name="account-check" size={54} color="#FF9800" />
            <Text style={styles.headerNameModern}>{user?.nome || 'Aprovador'}</Text>
            <Text style={styles.headerEmailModern}>{user?.email || ''}</Text>
            <View style={[styles.badge, styles.badgeAprovador]}>
              <Text style={styles.badgeText}>📋 Coordenação / Aprovador</Text>
            </View>
          </View>

          {/* Resumo de pendências */}
          <View style={styles.summaryContainer}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryNumber}>12</Text>
              <Text style={styles.summaryLabel}>Pendentes</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={[styles.summaryNumber, { color: '#4CAF50' }]}>8</Text>
              <Text style={styles.summaryLabel}>Aprovadas Hoje</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={[styles.summaryNumber, { color: '#F44336' }]}>3</Text>
              <Text style={styles.summaryLabel}>Rejeitadas</Text>
            </View>
          </View>

          {/* Saudação */}
          <Text style={styles.welcomeModern}>Painel de Aprovações 📋</Text>

          {/* Menu Cards - APROVADOR */}
          <View style={styles.menuModern}>
            {/* Solicitações Pendentes - DESTAQUE */}
            <TouchableOpacity style={[styles.cardModern, styles.cardDestaque]} onPress={() => router.push('/solicitacoes_pendentes')}>
              <MaterialIcons name="pending-actions" size={36} color="#fff" />
              <Text style={[styles.cardTextModern, styles.cardTextDestaque]}>Solicitações Pendentes</Text>
              <Text style={styles.cardSubtext}>12 aguardando aprovação</Text>
            </TouchableOpacity>

            {/* Cards duplos
            <View style={styles.rowModern}>
              <TouchableOpacity style={styles.cardSmallModern}>
                <MaterialIcons name="check-circle-outline" size={28} color="#FF9800" />
                <Text style={styles.cardTextModern}>Aprovadas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardSmallModern}>
                <MaterialIcons name="cancel" size={28} color="#FF9800" />
                <Text style={styles.cardTextModern}>Rejeitadas</Text>
              </TouchableOpacity>
            </View> */}

            {/* Histórico de Aprovações */}
            <TouchableOpacity style={styles.cardModern} onPress={() => router.push('/historico_aprovador')}>
              <MaterialIcons name="history" size={32} color="#FF9800" />
              <Text style={styles.cardTextModern}>Histórico de Aprovações</Text>
            </TouchableOpacity>

            {/* Cards duplos - Relatórios e Configurações */}
            <View style={styles.rowModern}>
              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/relatorios_apv')}>
                <FontAwesome5 name="chart-bar" size={28} color="#FF9800"/>
                <Text style={styles.cardTextModern}>Relatórios</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/notificacoes')}>
                <Ionicons name="notifications-outline" size={28} color="#FF9800" />
                <Text style={styles.cardTextModern}>Notificações</Text>
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
    backgroundColor: "#f7f8fa",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 32,
    backgroundColor: "#f7f8fa",
    paddingBottom: 30,
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
  badgeAprovador: {
    backgroundColor: '#FFF3E0',
  },
  badgeText: {
    color: '#FF9800',
    fontSize: 13,
    fontWeight: '600',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  welcomeModern: {
    fontSize: 18,
    color: "#FF9800",
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
    backgroundColor: "#FF9800",
    paddingVertical: 28,
  },
  cardTextModern: {
    color: "#FF9800",
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
    color: "#FFF3E0",
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