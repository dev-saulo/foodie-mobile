import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    form70: {
        width: "70%",
        marginBottom: 15,
        paddingRight: 10
    },
    form30: {
        width: "30%"
    },
    formHorizontal: {
        flexDirection: "row",
    },
    scrollView: {
        width: "100%"
    },
    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40,
        marginTop: 25
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 25
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }
}