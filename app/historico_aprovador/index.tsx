import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useMemo } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";

// Mock de solicitações para demonstração
const MOCK_SOLICITACOES = [
  { id: '1', nome: 'Parafusos M6', status: 'Aguardando' },
  { id: '2', nome: 'Martelo', status: 'Aprovado' },
  { id: '3', nome: 'Chave de Fenda', status: 'Recusado' },
  { id: '4', nome: 'Lâmpadas', status: 'Aguardando' },
  { id: '5', nome: 'Fitas Isolantes', status: 'Aprovado' },
];

export default function HomeAprovador() {
  const { user, signOut } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [filtro, setFiltro] = useState<'Todos' | 'Aguardando' | 'Aprovado' | 'Recusado'>('Todos');

  // Filtra solicitações de acordo com searchText e filtro
  const solicitacoesFiltradas = useMemo(() => {
    return MOCK_SOLICITACOES.filter(solicitacao => {
      const matchNome = solicitacao.nome.toLowerCase().includes(searchText.toLowerCase());
      const matchStatus = filtro === 'Todos' || solicitacao.status === filtro;
      return matchNome && matchStatus;
    });
  }, [searchText, filtro]);

  async function handleLogout() {
    await signOut();
    router.replace('/login');
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar translucent barStyle="dark-content" />
      
      <FlatList
        data={solicitacoesFiltradas}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header do usuário */}
            <View style={styles.headerModern}>
              <MaterialCommunityIcons name="account-check" size={54} color="#FF9800" />
              <Text style={styles.headerNameModern}>{user?.nome || 'Aprovador'}</Text>
              <Text style={styles.headerEmailModern}>{user?.email || ''}</Text>
              <View style={[styles.badge, styles.badgeAprovador]}>
                <Text style={styles.badgeText}>📋 Coordenação / Aprovador</Text>
              </View>
            </View>

            {/* Busca */}
            <TextInput
              style={styles.inputBusca}
              placeholder="Buscar solicitações..."
              value={searchText}
              onChangeText={setSearchText}
            />

            {/* Filtro */}
            <View style={styles.filtroContainer}>
              {['Todos', 'Aguardando', 'Aprovado', 'Recusado'].map(f => (
                <TouchableOpacity
                  key={f}
                  style={[styles.filtroButton, filtro === f && styles.filtroSelecionado]}
                  onPress={() => setFiltro(f as any)}
                >
                  <Text style={[styles.filtroText, filtro === f && styles.filtroTextSelecionado]}>{f}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Saudação */}
            <Text style={styles.welcomeModern}>Solicitações 📋</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.cardSolicitacao}>
            <Text style={styles.cardNome}>{item.nome}</Text>
            <Text style={[styles.cardStatus, item.status === 'Aprovado' ? styles.aprovado : item.status === 'Recusado' ? styles.recusado : styles.aguardando]}>
              {item.status}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f8fa' },
  headerModern: { alignItems: 'center', marginBottom: 20, marginTop: 20 },
  headerNameModern: { color: '#222', fontWeight: 'bold', fontSize: 20, marginTop: 6 },
  headerEmailModern: { color: '#888', fontSize: 14, marginTop: 2 },
  badge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 12, marginTop: 8 },
  badgeAprovador: { backgroundColor: '#3F51B5' },
  badgeText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  inputBusca: {
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 18,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  filtroContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginHorizontal: 18 },
  filtroButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, backgroundColor: '#eee' },
  filtroSelecionado: { backgroundColor: '#3F51B5' },
  filtroText: { color: '#555', fontWeight: '600' },
  filtroTextSelecionado: { color: '#fff' },
  welcomeModern: { fontSize: 18, color: '#3F51B5', fontWeight: '600', marginVertical: 10, textAlign: 'center' },
  cardSolicitacao: { backgroundColor: '#fff', marginHorizontal: 18, marginVertical: 6, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  cardNome: { fontSize: 16, fontWeight: '600', color: '#222' },
  cardStatus: { fontSize: 14, fontWeight: '600', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 8, overflow: 'hidden' },
  aprovado: { backgroundColor: '#E8F5E9', color: '#4CAF50' },
  recusado: { backgroundColor: '#FFEBEE', color: '#F44336' },
  aguardando: { backgroundColor: '#FFF3E0', color: '#FF9800' }
});
