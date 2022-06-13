import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        marginBottom: 20,
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'center',
    },

    number: {
        color: colors.textColorPrimary,
        fontSize: 23,
    }
})
