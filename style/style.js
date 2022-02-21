import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#CDC5BF",

  
  },
  weight:{
    margin: 7,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF5EE",
  },
  bottle: {
    margin: 7,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF5EE",
  },
  time: {
    margin: 7,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF5EE",
  }, 
  gender: {
    margin: 7,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF5EE", 
  },

  input: {
    marginLeft: 12,
    marginBottom: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14,
    


  },
  picker: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
    color: "#FFF5EE",
    fontWeight: "bold",
    fontStyle: "italic"
    

  },
  heading: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
    fontSize: 50,
    color: "#FFF5EE",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#FFF5EE"
    

  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
    
  },
  label: {
    fontSize: 20,
    fontStyle: "italic"
    
  },
  // The circle of the radiobutton
  radioButtonOutsideline: {
    height: 28,
    width: 28,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#8B8378",
    alignItems: "center",
    justifyContent: "center",
  },
  // When you check the radiobutton and choose a gender
  radioButtonFilled: {
    height: 17,
    width: 17,
    borderRadius: 100,
    backgroundColor: "#FFF5EE",
    alignItems: "center",
    justifyContent: "center",
  },

  // colors for several outcomes

  greenResult: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
    color: "#00FA9A",
    fontWeight: "bold",
  },
  
  yellowResult: {
    fontSize: 40,
    marginTop: 15,
    textAlign: "center",
    marginBottom: 25,
    color: "#EEE8AA",
    fontWeight: "bold",
  },
  redResult: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
    color: "#FF4040",
    fontWeight: "bold",
    
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 31,
    borderRadius: 5,
    elevation: 7,
    backgroundColor: "#FFF5EE",
    margin: 15
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 1,
    color: "black",
    textAlign: "center",
  },
  footer: {
    fontSize: 10,
    color: "#FFF5EE",
    textAlign: "center",
    marginTop: 50,
    fontStyle: "italic"
  
  },
});
