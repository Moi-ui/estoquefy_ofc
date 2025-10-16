import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { goBack } from 'expo-router/build/global-state/routing';
import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SolicitacaoDetalhesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#3C4AA8" />
             {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={goBack}>
                            <Ionicons name="arrow-back" size={28} color="#fff"/>
                        </TouchableOpacity>
                      <Text style={styles.headerTitle}>Minhas Solicitações</Text>
                    </View>
            {/* Content */}
            <ScrollView style={styles.scrollView}>
                {/* Informações do Produto */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Informações do Produto</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Código:</Text>
                        <Text style={styles.value}>PAP001</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Descrição:</Text>
                        <Text style={styles.value}>Papel A4 75g</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Categoria:</Text>
                        <Text style={styles.value}>Material de Consumo (MC)</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Quantidade Solicitada:</Text>
                        <Text style={styles.value}>10</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Quantidade Entregue:</Text>
                        <Text style={styles.value}>5</Text>
                    </View>
                </View>
                {/* Status e Datas */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Status e Datas</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={styles.statusText}>Aprovação Pendente</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Solicitação em:</Text>
                        <Text style={styles.value}>15/09/2025 - 14h30</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Solicitante:</Text>
                        <Text style={styles.value}>João Silva</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FC',
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
    marginLeft: 10,
  },
    badge: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignSelf: 'flex-start',
    },
    badgeText: {
        color: '#3C4AA8',
        fontWeight: 'bold',
        fontSize: 12,
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
                card: {
                    backgroundColor: '#FFF',
                    borderRadius: 0,
                    padding: 16,
                    marginBottom: 16,
                    elevation: 2,
                    borderWidth: 1,
                    borderColor: '#E0E0E0',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3F51B5',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 14,
    },
    value: {
        color: '#555',
        fontSize: 14,
    },
    statusText: {
        color: '#FF9800',
        fontWeight: 'bold',
        fontSize: 14,
    },
    itemCounter: {
        alignSelf: 'center',
        marginTop: 8,
        color: '#AAA',
        fontSize: 12,
    }
});

export default SolicitacaoDetalhesScreen;