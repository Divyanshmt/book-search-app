import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const primaryColor = "#6259d6";
const secondaryColor = "#7f79e5";

const placeholderImage = require("../../assets/images/loader1.gif"); // Add your placeholder image path

const BookCard = ({ item }: any) => {
  const navigation: any = useNavigation();
  const cardAnimation = useSharedValue(-300); // Start off-screen to the top

  const openBookDetails = () => {
    navigation.navigate("BookDetail", { book: item });
  };

  const coverImageURL = item.cover_i
    ? `http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
    : null;

  // Define the animated style for the card
  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(cardAnimation.value, { duration: 2000 }) },
      ], // Increase duration to 1000ms (1 second)
    };
  });

  // Trigger the animation when the component mounts
  React.useEffect(() => {
    cardAnimation.value = 0; // Slide the card in from the top
  }, []);

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <TouchableOpacity onPress={openBookDetails}>
        <LinearGradient
          colors={[primaryColor, secondaryColor]}
          style={styles.gradient}
        >
          {coverImageURL ? (
            <Image
              source={{ uri: coverImageURL }}
              style={styles.bookImage}
              resizeMode="cover"
            />
          ) : (
            <Image source={placeholderImage} style={styles.bookImage} />
          )}
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.bookTitle}>
              {item.title}
            </Text>
            <View style={styles.description}>
              {item.author_name && (
                <Text style={styles.bookInfo}>
                  By {item.author_name.join(", ")}
                </Text>
              )}
              {item.language && (
                <Text style={styles.bookInfo}>
                  Language: {item.language[0]}
                </Text>
              )}
              {item.publish_date && (
                <Text style={styles.bookInfo}>
                  Published: {item.publish_date[0]}
                </Text>
              )}

              {item.publisher && (
                <Text style={styles.bookInfo}>
                  Publisher: {item.publisher[0]}
                </Text>
              )}
              {item.number_of_pages && (
                <Text style={styles.bookInfo}>
                  Pages: {item.number_of_pages[0]}
                </Text>
              )}
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    margin: 7,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
  },
  bookImage: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EBEFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  bookInfo: {
    fontSize: 12,
    color: "#EBEFFF",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    alignItems: "center",
  },
});

export default BookCard;
