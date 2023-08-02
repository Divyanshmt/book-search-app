import { StyleSheet } from "react-native";
import styleVariables from "../../config/styleVariables";

const { primaryColor } = styleVariables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1,
  },
  searchContainerWithRadius: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: primaryColor,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: primaryColor, // Add border color to the search input
  },
  searchButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: primaryColor, // Add border color to the search button
  },
  searchButtonText: {
    color: primaryColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    paddingTop: 15,
    marginTop: 60,
  },
  loaderWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  loaderImage: {
    alignSelf: "center",
    width: 200, // Set the desired width of the image
    height: 200, // Set the desired height of the image
    resizeMode: "contain", // Scale down the image to fit within the specified width and height
  },
  loaderText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 80,
    color: primaryColor,
  },
  noResultImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  bookStackImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    marginTop: 300,
    width: "95%",
    resizeMode: "contain", // Scale down the image to fit within the specified width and height
  },
  bookStackText: {
    marginTop: 600,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});

export default styles;
