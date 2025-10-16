import { Ionicons } from "@expo/vector-icons";
import { goBack } from "expo-router/build/global-state/routing";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const insets = useSafeAreaInsets()
  const notifications = [
    {
      id: "1",
      title: "Solicitação Aprovada",
      description: "Sua solicitação #SA-2025-002 foi aprovada pelo setor de planejamento.",
      time: "Há 2 horas",
    },
    {
      id: "2",
      title: "Material Entregue",
      description: "O material da solicitação #SA-2025-003 foi entregue com sucesso.",
      time: "Ontem",
    },
    {
      id: "3",
      title: "Nova Solicitação Criada",
      description: "Solicitação #SA-2025--001 criada e enviada para aprovação.",
      time: "2 dias atrás"
    },
  ];


  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardLeft} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#3C4AA8" />
      <View>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notificações</Text>
        </View>

        {/* Lista */}
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        />

    {/* ...existing code... */}
      </View>
    </SafeAreaView>);''

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
   header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C4AA8",
    paddingHorizontal: 16,
    paddingVertical: 14
   },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardLeft: {
    width: 6,
    backgroundColor: "#3C4AA8",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3C4AA8",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: "#555",
    marginBottom: 8,
  },
  timeContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  cardTime: {
    fontSize: 12,
    color: "#555",
  },
  bottomNav: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#3C4AA8',
                paddingHorizontal: 16,
                paddingVertical: 8,
                elevation: 8,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                minHeight: 56,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                zIndex: 10,
                paddingBottom: 8,
            },
    navButton: {
      padding: 8,
      borderRadius: 24,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
        navButtonCenterCircle: {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: '#5686F5',
            borderWidth: 3,
            borderColor: '#3C4AA8',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 8,
            marginTop: -38,
            marginBottom: -10,
            elevation: 8,
            zIndex: 20,
            shadowColor: '#3C4AA8',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
        },
});