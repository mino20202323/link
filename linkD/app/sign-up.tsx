import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, useTheme } from 'react-native-paper';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.replace('/(tabs)/feed');
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}> 
      <Card style={styles.card}>
        <Card.Title title="Create Account" />
        <Card.Content>
          <TextInput
            label="Email"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button mode="contained" onPress={handleSignUp} style={styles.signUpButton}>
            Sign Up
          </Button>
          <Button mode="text" onPress={() => router.back()}>Back</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  signUpButton: {
    marginBottom: 8,
  },
});
