import * as stylex from "@stylexjs/stylex";
import LogoSVG from "../../svg/logo.inline.svg?url"
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";

const styles = stylex.create({
    header: {
        width: "100%",
        backgroundColor: colors.background,
        padding: "30px 0",
        position: "relative"
    },
    content: {
        display: "flex",
        alignContent: "center"
    },
    logo : {
        height: "38px"
    },
    title : {
        width: "120px",
        height: "38px",

        fontFamily: "VK Sans Display",
        leadingTrim: "both",
        textEdge: "cap",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "20px",
        letterSpacing: "0.829px",
        textTransform: "uppercase",

        marginTop: "-1px", // Фикс проблемы верхнего отступа у текста
    },
    title__section : {
        marginLeft: "40px",
        color: colors.title,
    },
    title__logo : {
        color: "#FFF",
        marginLeft: "20px",
    },
    line: {
        width: "100%",
        backgroundColor: colors.line,
        height: "1px",
        opacity: "0.7",
        position: "absolute",
        bottom: "0"
    }
})


export default function Header () {

    return(
        <div {...stylex.props(styles.header)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(styles.content)}>
                    <img {...stylex.props(styles.logo)} src={LogoSVG}/>
                    <p {...stylex.props(styles.title, styles.title__logo)}>Итоги 2023 года </p>
                    <p {...stylex.props(styles.title, styles.title__section)}>Тренды 2024</p>
                </div>
            </div>
            <div {...stylex.props(styles.line)}/>
        </div>
    )
}