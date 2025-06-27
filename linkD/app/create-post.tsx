import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';

export default function CreatePostScreen() {
  const [content, setContent] = useState('');
  const router = useRouter();
  const theme = useTheme();

  async function handleCreate() {
    if (!content) return;
    const user = (await supabase.auth.getUser()).data.user;
    const { error } = await supabase.from('posts').insert({
      content,
      author: user?.email ?? 'Anonymous',
    });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setContent('');
      router.back();
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        label="What's on your mind?"
        value={content}
        onChangeText={setContent}
        multiline
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCreate}>
        Post
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    marginBottom: 12,
    minHeight: 100,
  },
});
