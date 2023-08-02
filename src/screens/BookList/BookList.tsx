// BookList.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Animated,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./styles";
import styleVariables from "../../config/styleVariables";
import { URLBuilder } from "../../services/URLBuilder";
import { debounce } from "../../services/functions";

// Import the book stack image
const bookStackImage = require("../../assets/images/book-stack.gif");

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const [searchInputTop, setSearchInputTop] = useState(new Animated.Value(50)); // Initialize to 50 for the center position

  const { primaryColor } = styleVariables;
  const navigation = useNavigation();

  useEffect(() => {
    // Customize the header when the component is mounted
    navigation.setOptions({
      headerStyle: {
        backgroundColor: primaryColor,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
      },
    });
  }, []);

  const fetchBooks = async () => {
    setIsSearchStarted(true);
    Animated.timing(searchInputTop, {
      toValue: 0, // Adjust the final value to position the search bar correctly
      duration: 500,
      useNativeDriver: false,
    }).start();
    setIsLoading(true);
    try {
      const response = await fetch(URLBuilder.searchUrl(searchTerm, 20));
      const data = await response.json();
      setBooks(data.docs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setIsLoading(false);
    }
  };

  const handleSearch = async (value: any) => {
    debounce(fetchBooks, 2000);
    setSearchTerm(value);
  };

  const renderItem = ({ item }: any) => (
    <BookCard
      item={item}
      onPress={() => navigation.navigate("BookDetail", { book: item })}
    />
  );

  const renderBookListOnSearch = () => {
    if (isLoading) {
      return (
        <View style={styles.loaderWrapper}>
          <Image
            source={require("../../assets/images/loader2.gif")}
            style={[styles.loaderImage, { top: 50 }]} // Keep the loader position at top: 50
          />
          <Text style={styles.loaderText}>Loading Your Books</Text>
        </View>
      );
    } else {
      return books.length > 0 ? (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.key}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
      ) : (
        <Image
          source={require("../../assets/images/no-data.png")}
          style={styles.noResultImage}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.searchContainer,
          isSearchStarted && styles.searchContainerWithRadius,
          { top: searchInputTop },
        ]}
      >
        <TextInput
          placeholder="Search books..."
          value={searchTerm}
          onChangeText={handleSearch}
          style={styles.searchInput}
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </Animated.View>
      {/* Animated image below the search container */}
      {!isSearchStarted && (
        <Animated.Image
          source={bookStackImage}
          style={[
            styles.bookStackImage,
            {
              opacity: isLoading ? 0 : 1, // Set the opacity based on the isLoading state
              top: isSearchStarted ? 50 : -200, // Initial position above the screen
            },
          ]}
        />
      )}
      {!isSearchStarted && (
        <Text style={styles.bookStackText}>Start Searching your Books</Text>
      )}
      {isSearchStarted ? renderBookListOnSearch() : null}
    </View>
  );
};

export default BookList;
