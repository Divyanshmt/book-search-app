import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import BookList from "./src/screens/BookList/BookList";
import BookDetailPage from "./src/screens/BookDetails/BookDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookLibrary from "./src/screens/BookLibrary";

const primaryColor = "#6259d6";

const App: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomeIcon = ({ color, size }) => (
    <Ionicons name="home" size={size} color={color} />
  );

  const LibraryIcon = ({ color, size }) => (
    <Ionicons name="book" size={size} color={color} />
  );

  const BookListStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetail" component={BookDetailPage} />
      <Stack.Screen name="BookLibrary" component={BookLibrary} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: primaryColor,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#fff", // Set bottom navigation background to transparent
          },
          headerTitleAlign: "center", // Align the header title at center horizontally
        }}
      >
        <Tab.Screen
          name="Home"
          component={BookListStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={BookLibrary}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LibraryIcon color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
