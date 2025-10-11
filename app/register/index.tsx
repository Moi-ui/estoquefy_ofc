import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRIE SUA CONTA!</Text>

      <View style={styles.subcont}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />

          <TextInput
          placeholder="Confirmar Senha"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  subcont:{
    flex: 1,
    marginTop:45
  },
  title: {
    fontSize: 43,
    fontWeight: "bold",
    color: "#3D4DA6",
    marginTop: 100
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3E4DD0",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    marginTop: 25,
    margin: 18
  },
  button: {
    backgroundColor: "#3D4DA6",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 60,
    margin: 35
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotText: {
    color: "#3E4DD0",
    textAlign: "center",
    marginBottom: 20,
  },
  registerText: {
    textAlign: "center",
    color: "#000",
  },
    wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    color: "#3E4DD0",
    fontSize: 18,
  },
  underline: {
    height: 2,                
    backgroundColor: "#3E4DD0",
    marginTop: 2,            
  }
});