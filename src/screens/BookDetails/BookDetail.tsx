import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { URLBuilder } from "../../services/URLBuilder";
import styles from "./styles";

const BookDetailPage = ({ route }: any) => {
  const { book } = route.params;

  const coverImageURL = book.cover_i ? URLBuilder.imageUrl(book.cover_i) : null;

  // Define the animated value for the opacity animation
  const imageOpacity = useSharedValue(0);
  const infoOpacity = useSharedValue(0);

  // Define the animated style for the image container
  const imageContainerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(imageOpacity.value, { duration: 2000 }), // 3 seconds duration
  }));

  // Define the animated style for the info container
  const infoContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(infoOpacity.value, { duration: 2000 }), // 3 seconds duration
    };
  });

  // Define the animated value for the "Add to Cart" button translation animation
  const addToCartButtonTranslateX = useSharedValue(-100); // Start from the left (hidden)

  // Define the animated style for the "Add to Cart" button
  const addToCartButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(addToCartButtonTranslateX.value, {
            duration: 3000, // 3 seconds duration
          }),
        },
      ],
    };
  });

  // Define the animated value for the "Buy" button translation animation
  const buyButtonTranslateX = useSharedValue(100); // Start from the right (hidden)

  // Define the animated style for the "Buy" button
  const buyButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(buyButtonTranslateX.value, { duration: 2000 }), // 3 seconds duration
        },
      ],
    };
  });

  // Trigger the animation when the component mounts
  useEffect(() => {
    imageOpacity.value = 1; // Animate the image container opacity to 1
    infoOpacity.value = 1; // Animate the info container opacity to 1
    addToCartButtonTranslateX.value = 0; // Animate the "Add to Cart" button to the original position (0)
    buyButtonTranslateX.value = 0; // Animate the "Buy" button to the original position (0)
  }, []);

  return (
    <Animated.ScrollView style={styles.container}>
      <Animated.View style={[styles.bookImageContainer, imageContainerStyle]}>
        {coverImageURL && (
          <Image source={{ uri: coverImageURL }} style={styles.bookImage} />
        )}
      </Animated.View>
      <Animated.View style={[styles.bookInfoContainer, infoContainerStyle]}>
        <Text style={styles.bookTitle}>{book.title}</Text>

        <View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.bookAuthor}>
              By {book.author_name.join(", ")}
            </Text>
            <View style={styles.publisherDetails}>
              {book.language && (
                <Text style={styles.bookInfo}>
                  Language: {book.language[0]}
                </Text>
              )}
              {book.publish_date && (
                <Text style={styles.bookInfo}>
                  Published: {book.publish_date[0]}
                </Text>
              )}
              {book.publisher && (
                <Text style={styles.bookInfo}>
                  Publisher: {book.publisher[0]}
                </Text>
              )}
              {book.number_of_pages && (
                <Text style={styles.bookInfo}>
                  Pages: {book.number_of_pages[0]}
                </Text>
              )}
              {book.first_publish_year && (
                <Text style={styles.bookInfo}>
                  First Published: {book.first_publish_year}
                </Text>
              )}

              <View style={styles.buttonsContainer}>
                <Animated.View
                  style={[styles.addToCartButton, addToCartButtonStyle]}
                >
                  <TouchableOpacity>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.buyButton, buyButtonStyle]}>
                  <TouchableOpacity>
                    <Text style={styles.buttonText}>Buy</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default BookDetailPage;
