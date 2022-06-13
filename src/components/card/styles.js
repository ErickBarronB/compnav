import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({

    container: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 10,

    },


})