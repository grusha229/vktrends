import * as stylex from "@stylexjs/stylex";
import LogoSVG from "../../svg/logo.inline.svg?url"
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";

const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)";
const MOBILE_MD = "@media screen and (max-width: 1023px)"

const styles = stylex.create({
    header: {
        width: "100%",
        backgroundColor: colors.background,
        
        position: "relative",
        [DESKTOP_XL] : {
            padding: "30px 0",
        },
        [DESKTOP_MD] : {
            padding: "20px 0",
        },
        [DESKTOP_S] : {
            padding: "16px 0",
        }

    },
    content: {
        display: "flex",
        alignContent: "center"
    },
    logo : {
        height: "38px",
        [DESKTOP_XL] : {
            height: "38px",
        },
        [DESKTOP_MD] : {
            height: "28px",
        },
        [DESKTOP_S] : {
            height: "20px",
        },
        [MOBILE_MD] : {
            height: "22px",
        },
    },
    title : {
        fontFamily: "VK Sans Display",
        leadingTrim: "both",
        textEdge: "cap",
        fontStyle: "normal",
  
        textTransform: "uppercase",

        [DESKTOP_XL] : {
            height: "38px",
            width: "120px",
            
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "0.829px",
        },
        [DESKTOP_MD] : {
            height: "28px",
            width: "95px",

            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "15px",
            letterSpacing: "0.64px",
        },
        [DESKTOP_S] : {
            height: "20px",
            width: "65px",

            fontSize: "11px",
            lineHeight: "11px",
            letterSpacing: "0.44px",
        },
        [MOBILE_MD] : {
            height: "22px",
        },
    },
    title__section : {
        color: colors.title,

        [DESKTOP_XL] : {
            margin: "-1px 0 0 40px",
        },
        [DESKTOP_MD] : {
            margin: "-1px 0 0 30px",
        },
        [DESKTOP_S] : {
            margin: "-1px 0 0 20px",
        },
        [MOBILE_MD] : {
            display: "none",
        },
    },
    title__logo : {
        color: "#FFF",

        [DESKTOP_XL] : {
            margin: "-1px 0 0 20px",
        },
        [DESKTOP_MD] : {
            margin: "-1px 0 0 15px",
        },
        [DESKTOP_S] : {
            margin: "-1px 0 0 10px",
        },
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