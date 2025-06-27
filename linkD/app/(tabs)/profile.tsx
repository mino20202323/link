import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.title}>Software Developer</Text>
      <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#666",
  },
});
