import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <MaterialCommunityIcons name="warehouse" size={80} color="#fff" />
          <Text style={styles.title}>Estoquefy</Text>
          <Text style={styles.subtitle}>Sistema de Gestão de Almoxarifado SENAI</Text>
        </View>

        {/* Cards de Seleção */}
        <View style={styles.cardsContainer}>
          <Text style={styles.question}>Escolha seu perfil de acesso:</Text>

          {/* Botão Solicitante */}
          <TouchableOpacity 
            style={[styles.card, styles.cardSolicitante]}
            onPress={() => router.push('/home')}
            activeOpacity={0.8}
          >
            <View style={styles.cardContent}>
              <Ionicons name="person-circle" size={48} color="#3F51B5" />
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, styles.textSolicitante]}>Solicitante</Text>
                <Text style={styles.cardDescription}>Fazer e acompanhar solicitações</Text>
              </View>
              <Ionicons name="chevron-forward" size={28} color="#3F51B5" />
            </View>
          </TouchableOpacity>

          {/* Botão Aprovador */}
          <TouchableOpacity 
            style={[styles.card, styles.cardAprovador]}
            onPress={() => router.push('/home_aprovador')}
            activeOpacity={0.8}
          >
            <View style={styles.cardContent}>
              <MaterialCommunityIcons name="account-check" size={48} color="#FF9800" />
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, styles.textAprovador]}>Aprovador</Text>
                <Text style={styles.cardDescription}>Analisar e aprovar solicitações</Text>
              </View>
              <Ionicons name="chevron-forward" size={28} color="#FF9800" />
            </View>
          </TouchableOpacity>

          {/* Botão Gerente Almoxarife */}
          <TouchableOpacity 
            style={[styles.card, styles.cardGerente]}
            onPress={() => router.push('/home_almoxarife')}
            activeOpacity={0.8}
          >
            <View style={styles.cardContent}>
              <FontAwesome5 name="boxes" size={40} color="#4CAF50" />
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, styles.textGerente]}>Gerente Almoxarife</Text>
                <Text style={styles.cardDescription}>Gestão completa do estoque</Text>
              </View>
              <Ionicons name="chevron-forward" size={28} color="#4CAF50" />
            </View>
          </TouchableOpacity>

           {/* Botão de Autenticação */}
          <TouchableOpacity 
            style={[styles.card, styles.cardGerente]}
            onPress={() => router.push('/register')}
            activeOpacity={0.8}
          >
            <View style={styles.cardContent}>
              <FontAwesome5 name="users-cog" size={40} color="#af4c4cff" />
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, styles.textAuth]}>Autenticação</Text>
                <Text style={styles.cardDescription}>Simulação de Login e Cadastro</Text>
              </View>
              <Ionicons name="chevron-forward" size={28} color="#af4c4cff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>SENAI © 2025</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#E3F2FD',
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.9,
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '600',
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardSolicitante: {
    backgroundColor: '#fff',
  },
  cardAprovador: {
    backgroundColor: '#fff',
  },
  cardGerente: {
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  cardText: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textSolicitante: {
    color: '#3F51B5',
  },
  textAprovador: {
    color: '#FF9800',
  },
  textAuth: {
    color: '#af4c4cff',
  },
  textGerente:{
    color: '#4CAF50'
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#E3F2FD',
    fontSize: 12,
    opacity: 0.7,
  },
});