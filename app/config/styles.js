import { Platform } from "react-native";
import colors from "./colors";

export default {
    colors,
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.dark,
        fontSize: 18,
        width: "100%"
    },
    heading: {
        color: colors.dark,
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
}