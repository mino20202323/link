import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import { TextInput, Button, Card, useTheme } from 'react-native-paper';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.replace('/(tabs)/feed');
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ResponsiveContainer>
        <Card style={styles.card}>
          <Card.Title title="Sign In" />
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
            <Button mode="contained" onPress={handleSignIn}>
              Sign In
            </Button>
          </Card.Content>
        </Card>
      </ResponsiveContainer>
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
});
