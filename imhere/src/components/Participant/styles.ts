import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
  },
});
