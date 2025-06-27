import { View, Text, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function LandingScreen() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={styles.title}>Welcome to LinkD</Text>
      <Button mode="contained" onPress={() => router.push('/sign-in')} style={styles.button}>
        Sign In
      </Button>
      <Button mode="contained" onPress={() => router.push('/sign-up')} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    marginBottom: 8,
  },
});
