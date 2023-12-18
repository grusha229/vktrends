import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";

const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)"
// const mobile_md = "@media screen and (max-width: 375px)"

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
        }
    },
})


export default function Footer () {

    return(
        <div {...stylex.props(FooterStyles.footer)}>
            <a 
                {...stylex.props(FooterStyles.button)}
                href={"https://vk.com/share.php?url=https://vk.com/2023/persons&title=%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D1%8B%20%D0%B8%20%D1%82%D0%B5%D0%BC%D1%8B:%20%D0%98%D1%82%D0%BE%D0%B3%D0%B8%20%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5%202023&description=%D0%98%D1%82%D0%BE%D0%B3%D0%B8%20%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5%202023&image=https://result2023.production.vklanding.ru/static/images/preview-vk.jpg&noparse=true"}
            >
                Поделиться
            </a>
        </div>
    )
}