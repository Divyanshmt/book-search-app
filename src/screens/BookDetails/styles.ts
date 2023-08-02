import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f0f0f0",
    marginTop: 30,
  },
  bookImageContainer: {
    alignItems: "center",
    opacity: 0,
  },
  bookImage: {
    width: "60%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "#6259d6",
    alignSelf: "center",
  },
  bookInfoContainer: {
    marginTop: 10,
    opacity: 0,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bookAuthor: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  bookInfo: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
    textAlign: "center",
  },
  detailsWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  publisherDetails: {
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: "#42b72a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buyButton: {
    backgroundColor: "#6259d6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
