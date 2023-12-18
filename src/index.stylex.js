import * as stylex from "@stylexjs/stylex";


const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
// const desktop_s = "@media screen and (min-width: 1024px) and (max-width: 1439px)"
// const mobile_md = "@media screen and (max-width: 375px)"

export const globalStyle = stylex.create({
    container: {
        position: "relative",
        margin: "0 auto",
        [DESKTOP_XL] : {
            maxWidth: "1780px",
        },
        [DESKTOP_MD] : {
            maxWidth: "1340px",
        }
    }
})