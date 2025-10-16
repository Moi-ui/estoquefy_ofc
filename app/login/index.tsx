import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Login para cada tipo de usuário.
    if (email === 'solicitante' && senha === 'solicitante') {
      router.push('/home');
    } else if (email === 'aprovador' && senha === 'aprovador'){
      router.push('/home_aprovador')
    } else if (email === 'almoxarife' && senha === 'almoxarife'){
      router.push('/home_almoxarife')
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>BEM-VINDO(A) DE VOLTA</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome de usuário ou Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            <View style={styles.underline} />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3C4AA8",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3C4AA8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  wrapper: {
    alignItems: "center",
  },
  forgotText: {
    color: "#3C4AA8",
    fontSize: 16,
    marginBottom: 4,
  },
  underline: {
    height: 2,
    width: 120,
    backgroundColor: "#3C4AA8",
    marginTop: 2,
    borderRadius: 2,
  },
});
