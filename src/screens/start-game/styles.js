import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingVertical: 10,
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,

    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 20,
        paddingHorizontal: 25,

    
    },

    button: {
        width: 100,
    },


})