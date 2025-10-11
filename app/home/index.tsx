import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {

  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={["top", "right", "left"]}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          {/* Barra de pesquisa no topo */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder="Buscar produtos, solicitações..."
              placeholderTextColor="#888"
            />
            <Ionicons name="person-circle-outline" size={28} color="#888" />
          </View>

          {/* Header modernizado */}
          <View style={styles.headerModern}>
            <Ionicons name="person-circle" size={54} color="#3F51B5" />
            <Text style={styles.headerNameModern}>João Silva</Text>
            <Text style={styles.headerEmailModern}>joaosilva@gmail.com</Text>
          </View>

          {/* Saudação */}
          <Text style={styles.welcomeModern}>Bem-vindo de volta 👋</Text>

          {/* Menu Cards modernizados */}
          <View style={styles.menuModern}>
            <TouchableOpacity style={styles.cardModern} onPress={() => router.push('/nova_solicitacao')}>
              <Ionicons name="notifications-outline" size={32} color="#3F51B5" />
              <Text style={styles.cardTextModern}>Nova Solicitação</Text>
            </TouchableOpacity>

            <View style={styles.rowModern}>
              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/minhas_solicitacoes')}>
                <MaterialIcons name="calendar-today" size={28} color="#3F51B5" />
                <Text style={styles.cardTextModern}>Minhas solicitações</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardSmallModern} onPress={() => router.push('/solicitacao')}>
                <FontAwesome5 name="folder" size={28} color="#3F51B5" />
                <Text style={styles.cardTextModern}>Relatórios</Text> 
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cardModern} onPress={() => router.push('/solicitacoes_para_separar')}>
              <FontAwesome5 name="box" size={32} color="#3F51B5" />
              <Text style={styles.cardTextModern}>Estoque</Text>
            </TouchableOpacity>
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
  welcomeModern: {
    fontSize: 18,
    color: "#3F51B5",
    fontWeight: "600",
    marginBottom: 18,
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
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTextModern: {
    color: "#3F51B5",
    marginTop: 8,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  rowModern: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
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