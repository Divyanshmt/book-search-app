import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import BookCard from "../../components/BookCard/BookCard";

const BookLibrary = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "http://openlibrary.org/search.json?q=javascript" // Replace 'javascript' with your desired search query
      );
      const data = await response.json();
      setBooks(data.docs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    // Check if the item exists and has cover_i property before rendering BookCard
    return item && item.cover_i ? (
      <TouchableOpacity
        onPress={() => navigation.navigate("BookDetail", { book: item })}
      >
        <BookCard
          item={item}
          onPress={() => navigation.navigate("BookDetail", { book: item })}
        />
      </TouchableOpacity>
    ) : null;
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6259d6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bookCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#555",
  },
  bookCover: {
    width: 100,
    height: 150,
    marginTop: 10,
  },
});

export default BookLibrary;
