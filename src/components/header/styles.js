import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90,
        paddingTop: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',


    },

    title: {
        color: colors.textColorPrimary,
        fontSize: 22,
        fontFamily: "openSansBold",
    },
});