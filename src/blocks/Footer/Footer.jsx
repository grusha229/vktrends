import * as stylex from "@stylexjs/stylex";
import LogoSVG from "../../svg/logo.inline.svg?url"
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";

const FooterStyles = stylex.create({
    footer: {
        width: "100%",
        marginTop: "225px", 
        backgroundColor: colors.title,
        position: "relative",
        display: "flex",
        padding: "100px 0",
        justifyContent: "center"
    },
    button: {
        display: "flex",
        alignContent: "center",

        color: colors.white,

        leadingTrim: "both",
        textDecoration: "none",
        
        textEdge: "cap",
        fontSize: "90px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "75px",
        letterSpacing: "0.9px",
        textTransform: "uppercase",

        width: "796px",
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