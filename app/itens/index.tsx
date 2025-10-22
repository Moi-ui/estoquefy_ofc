import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

// 🔹 Estrutura inicial de um item de almoxarifado    
interface Item {
  id: string;
  nome: string;
  quantidade: number;
  categoria: string;
}

export default function ItensScreen() {
  const [itens, setItens] = useState<Item[]>([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Alteração do futuro para a gente buscar da planilha ou API:
    // Exemplo:
    // const response = await fetch('https://minha-api.com/produtos');
    // const data = await response.json();
    // setItens(data);

    const mockItens: Item[] = [
      { id: '1', nome: 'Parafuso 10mm', quantidade: 150, categoria: 'Ferramentas' },
      { id: '2', nome: 'Tinta branca', quantidade: 20, categoria: 'Materiais de pintura' },
      { id: '3', nome: 'Cabo USB-C', quantidade: 45, categoria: 'Eletrônicos' },
      { id: '4', nome: 'Chave Philips', quantidade: 30, categoria: 'Ferramentas' },
      { id: '5', nome: 'Sensor ultrassônico', quantidade: 12, categoria: 'Robótica' },
    ];

    setTimeout(() => {
      setItens(mockItens);
      setCarregando(false);
    }, 1000);
  }, []);

  // 🔹 Filtro de busca
  const itensFiltrados = itens.filter(item =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // 🔹 Simulação de recarregamento (refresh)
  const recarregar = () => {
    setCarregando(true);
    setTimeout(() => setCarregando(false), 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Itens do Almoxarifado</Text>

      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#3C4AA8" />
        <TextInput
          placeholder="Buscar item..."
          style={styles.searchInput}
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#3C4AA8" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={itensFiltrados}
          keyExtractor={(item) => item.id}
          refreshing={carregando}
          onRefresh={recarregar}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemCategoria}>{item.categoria}</Text>
              <Text style={styles.itemQtd}>Qtd: {item.quantidade}</Text>

              <TouchableOpacity style={styles.buttonDetalhes}>
                <Text style={styles.buttonText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum item encontrado.</Text>
          }
        />
      )}

      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3C4AA8',
    marginBottom: 16,
    textAlign: 'center',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },

  card: {
    backgroundColor: '#f5f6ff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  itemNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  itemCategoria: {
    color: '#666',
    fontSize: 15,
    marginVertical: 4,
  },

  itemQtd: {
    fontSize: 15,
    color: '#3C4AA8',
    marginBottom: 8,
  },
  buttonDetalhes: {
    alignSelf: 'flex-end',
    backgroundColor: '#3C4AA8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginTop: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#3C4AA8',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});