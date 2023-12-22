import * as stylex from "@stylexjs/stylex";
import { colors, paddings } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/pattern_kv.inline.svg?url"
import { useEffect } from "react";

const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)";
const MOBILE_MD = "@media screen and (max-width: 1023px)";

const styles = stylex.create({
    kvblock: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        overflow: "hidden",
        [DESKTOP_XL] : {
            paddingTop: "210px",
            paddingBottom: paddings.padding_xl,
        },
        [DESKTOP_MD] : {
            paddingTop: "160px",
            paddingBottom: paddings.padding_md,
        },
        [DESKTOP_S] : {
            paddingTop: "110px",
            paddingBottom: paddings.padding_sm,
        },
        [MOBILE_MD] : {
            paddingTop: "65px",
            paddingBottom: paddings.padding_sm,
        }
    },
    content: {
        position: 'relative',
        display: "flex",
        flexDirection: "column",
    },
    heading : {
        width: "100%",
        color: colors.text,
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "VK Sans Display Expanded",
        textTransform: "uppercase",
        zIndex: "3",
        margin: "0",
        [DESKTOP_XL] : {
            fontSize: "170px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "187px",
            letterSpacing: "2.8px",
        },
        [DESKTOP_MD] : {
            fontSize: "126px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "138px",
            letterSpacing: "2.1px",
        },
        [DESKTOP_S] : {
            fontSize: "88px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "97px",
            letterSpacing: "1.5px",
        },
        [MOBILE_MD] : {
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0.4px",
        }
    },
    colored : {
        color: colors.title,
        [DESKTOP_XL] : {

            paddingLeft: "430px",
        },
        [DESKTOP_MD] : {

            paddingLeft: "320px",
        },
        [DESKTOP_S] : {

            paddingLeft: "220px",
        },
        [MOBILE_MD] : {

            paddingLeft: "0",
        },
    },
    description: {

        zIndex: "2",
        [DESKTOP_XL] : {
            marginTop: "100px",
            paddingLeft: "430px",
        },
        [DESKTOP_MD] : {
            marginTop: "100px",
            paddingLeft: "320px",
        },
        [DESKTOP_S] : {
            marginTop: "70px",
            paddingLeft: "220px",
        },
        [MOBILE_MD] : {
            marginTop: "24px",
            paddingLeft: "0",
        },
    },
    subtitle: {
        color: colors.text,
        fontStyle: "normal",
        fontWeight: "500",

        [DESKTOP_XL] : {
            fontSize: "24px",
            lineHeight: "150%",
        },
        [DESKTOP_MD] : {
            fontSize: "18px",
            lineHeight: "150%",
        },
        [DESKTOP_S] : {
            fontSize: "14px",
            lineHeight: "150%",
        },
        [MOBILE_MD] : {
            fontSize: "16px",
            lineHeight: "24px",
            // marginBottom: paddings.padding_s
        }
    },
    subtitle_text: {
        margin: "0",
    },
    info: {

        display: "grid",
        gridTemplateColumns: "1fr 1fr",

        [DESKTOP_XL] : {
            marginTop: "260px",
            columnGap: "178px",
            rowGap: "138px",
        },
        [DESKTOP_MD] : {
            marginTop: "180px",
            columnGap: "150px",
            rowGap: "120px",
        },
        [DESKTOP_S] : {
            marginTop: "120px",
            columnGap: "102px",
            rowGap: "80px",
        },
        [MOBILE_MD] : {
            gridTemplateColumns: "1fr",
            marginTop: "100px",
            rowGap: "40px",
        }
    },
    info__title: {
        color: colors.title,
        fontStyle: "normal",
        fontWeight: "600",

        textTransform: "uppercase",
        zIndex: "1",
        position: "relative",

        margin: "0",

        [DESKTOP_XL] : {
            fontSize: "90px",

            lineHeight: "110%", /* 99px */
            letterSpacing: "0.9px",
        },
        [DESKTOP_MD] : {
            fontSize: "68px",
            lineHeight: "110%", /* 99px */
            letterSpacing: "0.68px",
        },
        [DESKTOP_S] : {
            fontSize: "48px",
            lineHeight: "110%", /* 99px */
            letterSpacing: "0.48px",
        },
        [MOBILE_MD] : {
            fontSize: "40px",
            lineHeight: "110%", /* 99px */
            letterSpacing: "0.40px",
        },
    },
    info__description: {
        color: colors.text,

        fontStyle: "normal",
        fontWeight: "500",
  
        background: colors.background,
        zIndex: "999",
        position: "relative",
        margin: "0",
        textTransform: "lowercase",

        
        [DESKTOP_XL] : {
            paddingTop: "34px",
            fontSize: "24px",
            lineHeight: "150%",
        },
        [DESKTOP_MD] : {
            paddingTop: "16px",

            fontSize: "18px",
            lineHeight: "150%",
        },
        [DESKTOP_S] : {
            paddingTop: "10px",

            fontSize: "14px",
            lineHeight: "150%",
        },
        [MOBILE_MD]: {
            paddingTop: "10px",

            fontSize: "16px",
            lineHeight: "150%",

            display: "inline-block"

        }
    },
    bg: {
        position: "absolute",
        zIndex: "1",

        [DESKTOP_XL] : {
            top: "240px",
            right: "-80px",

        },
        [DESKTOP_MD] : {
            top: "140px",
            right: "-80px",
            // width: "1350px"
        },
        [DESKTOP_S] : {
            top: "120px",
            right: "-80px",
            width: "450px"
        },
        [MOBILE_MD] : {
            top: "5px",
            left: "45%",
            width: "75%"
        },
    }
})


export default function KeyVisualBlock (props) {
    useEffect(()=>{
        console.log(props.refers)
    },[])
    return(
        <div {...stylex.props(styles.kvblock)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(styles.content)}>
                    <h1 {...stylex.props(styles.heading)}>
                    Тренды в&nbsp;контенте&nbsp;—
                    </h1>
                    <span {...stylex.props(styles.heading, styles.colored)}>2024</span>
                    <div {...stylex.props(styles.description)}>
                        <div {...stylex.props(styles.subtitle)}>
                            <p {...stylex.props(styles.subtitle_text)}>
                            Советы для создателей контента от&nbsp;профи
                            </p>
                        </div>
                        <div {...stylex.props(styles.info)}>
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    +25%
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Просмотров видео за год
                                </p>
                            </div>
       
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    +27%
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Историй за год
                                </p>
                            </div>
                  
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    +60%
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Реакций у клипов в ленте
                                </p>
                            </div>
               
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    +56%
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Пользователей, которые благодарят авторов с VK Donut
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <img {...stylex.props(styles.bg)} src={SVG_PATTERN}/>
                </div>
            </div>
        </div>
    )
}