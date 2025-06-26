import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../firebase/firebaseConfig'; // Use the exported auth

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = async () => {
    console.log('Handling authentication');
    //setError('');
    //const auth = getAuth();
    try {
      if (isRegister) {
        console.log('Create user with email and password');
        await createUserWithEmailAndPassword(auth, email, password);
        router.replace('/home');
      } else {
        console.log('Sign in with email and password');
        await signInWithEmailAndPassword(auth, email, password);
        router.replace('/home');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError(isRegister ? 'Registration failed' : 'Invalid email or password');
    }
    console.log('Handling authentication - done');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegister ? 'Register' : 'Login'}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title={isRegister ? 'Register' : 'Login'} onPress={handleAuth} />
      <View style={{ height: 12 }} />
      <Button
        title={isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        onPress={() => {
          setIsRegister(!isRegister);
          setError('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 32, marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 8, borderRadius: 4 },
  error: { color: 'red', marginBottom: 12, textAlign: 'center' },
});

