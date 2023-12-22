import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";

const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)";
const MOBILE_MD = "@media screen and (max-width: 1023px)"

const FooterStyles = stylex.create({
    footer: {
        width: "100%",
        backgroundColor: colors.title,
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    button: {
        display: "flex",
        alignContent: "center",

        color: colors.white,

        leadingTrim: "both",
        textDecoration: "none",
        
        textEdge: "cap",
        
        fontStyle: "normal",
        fontWeight: "600",
        justifyContent: "center",
        letterSpacing: "0.9px",
        textTransform: "uppercase",
        width: "100%",

        
        [DESKTOP_XL] : {
            fontSize: "90px",
            lineHeight: "75px",
            padding: "100px"
        },
        [DESKTOP_MD] : {
            fontSize: "68px",
            padding: "70px"
        },
        [DESKTOP_S] : {
            fontSize: "48px",
            padding: "48px"
        },
        [MOBILE_MD] : {
            fontSize: "28px",
            lineHeight: "30px",
            padding: "30px",
            letterSpacing: "3%",
        }
    },
})


export default function Footer () {

    return(
        <div {...stylex.props(FooterStyles.footer)}>
            <a 
                {...stylex.props(FooterStyles.button)}
                href={"https://vk.com/share.php?url=https://vk.com/2023/trends"}
            >
                Поделиться
            </a>
        </div>
    )
}