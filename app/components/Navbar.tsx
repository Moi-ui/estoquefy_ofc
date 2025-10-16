import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
export default function Navbar() {
  const router = useRouter();
  const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3D4DA6',
    paddingHorizontal: 16,
    paddingVertical: 13, // aumente o padding vertical para afastar da borda
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
    paddingBottom: 30, // aumente o paddingBottom para garantir espaçamento extra
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
            borderColor: '#3D4DA6',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 8,
            marginTop: -38,
            marginBottom: -10,
            elevation: 8,
            zIndex: 20,
            shadowColor: '#3D4DA6',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
        },
});

  return (
    <View style={styles.bottomNav}>

      {/* Botão de Configurações*/}
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/configuracoes')}>
        <Ionicons name="settings-outline" size={28} color="#FFF" />
      </TouchableOpacity>
      {/* Botão de Notificações*/}
      <TouchableOpacity style={styles.cardModern} onPress={() => router.push('/notificacoes')}>
        <Ionicons name="notifications-outline" size={32} color="#FFF" />
      </TouchableOpacity>
      {/* Botão de Suporte/Ajuda*/}
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/suporte')}>
        <Ionicons name="help-circle-outline" size={35} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
