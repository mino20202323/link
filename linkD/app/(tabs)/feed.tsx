import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Button, Card, IconButton, useTheme } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';

interface Post {
  id: string;
  author: string;
  content: string;
}

export default function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const theme = useTheme();

  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    setPosts(data as Post[]);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}> 
      <Button mode="contained" onPress={() => router.push('/create-post')} style={styles.createButton}>
        Create Post
      </Button>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <Card style={[styles.post, { backgroundColor: theme.colors.elevation.level1 }]}>
            <Card.Title title={item.author} titleStyle={styles.author} />
            <Card.Content>
              <Text>{item.content}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon="heart-outline" onPress={() => {}} />
              <IconButton icon="chat-outline" onPress={() => {}} />
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  createButton: { marginBottom: 12 },
  post: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  author: { fontWeight: 'bold', marginBottom: 4 },
});
