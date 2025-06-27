import { View, Text, StyleSheet, FlatList } from "react-native";

const posts = [
  { id: "1", author: "Jane Doe", content: "Excited to join this new platform!" },
  { id: "2", author: "John Smith", content: "Just published a new blog post." },
];

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.author}>{item.author}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  post: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    elevation: 1,
  },
  author: { fontWeight: "bold", marginBottom: 4 },
});
