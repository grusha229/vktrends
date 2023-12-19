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
            fontSize: "280px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "100%",
            letterSpacing: "2.8px",
        },
        [DESKTOP_MD] : {
            fontSize: "210px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "100%",
            letterSpacing: "2.1px",
        },
        [DESKTOP_S] : {
            fontSize: "150px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "110%",
            letterSpacing: "1.5px",
        },
        [MOBILE_MD] : {
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "110%",
            letterSpacing: "0.4px",
        }
    },
    colored : {
        color: colors.title
    },
    description: {
        
        zIndex: "2",
        [DESKTOP_XL] : {
            marginTop: "140px",
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
            lineHeight: "150%",
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

        
        [DESKTOP_XL] : {
            paddingTop: "20px",
            marginTop: "-25px",

            fontSize: "24px",
            lineHeight: "150%",
        },
        [DESKTOP_MD] : {
            paddingTop: "16px",
            marginTop: "-20px",

            fontSize: "18px",
            lineHeight: "150%",
        },
        [DESKTOP_S] : {
            paddingTop: "10px",
            marginTop: "-14px",

            fontSize: "14px",
            lineHeight: "150%",
        },
        [MOBILE_MD]: {
            paddingTop: "10px",
            marginTop: "-10px",

            fontSize: "16px",
            lineHeight: "150%",
        }
    },
    bg: {
        position: "absolute",
        transform: "rotate(29.708deg)",
        zIndex: "1",

        [DESKTOP_XL] : {
            top: "500px",
            right: "-775px",

        },
        [DESKTOP_MD] : {
            top: "330px",
            right: "-700px",
            width: "1350px"
        },
        [DESKTOP_S] : {
            top: "290px",
            right: "-320px",
            width: "800px"
        },
        [MOBILE_MD] : {
            top: "25%",
            left: "45%",
            width: "95%"
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
                        Тренды <span {...stylex.props(styles.colored)}>2024</span>
                    </h1>
                    <div {...stylex.props(styles.description)}>
                        <div {...stylex.props(styles.subtitle)}>
                            <p {...stylex.props(styles.subtitle_text)}>
                            Не следует, однако, забывать о том, что сложившаяся структура организации создаёт предпосылки качественно новых шагов для позиций, занимаемых участниками в отношении поставленных задач?
                            </p>
                        </div>
                        <div {...stylex.props(styles.info)}>
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    18+
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Прародителем текста-рыбы является известный «Lorem Ipsum» — латинский текст, ноги которого растут аж из 45 года до нашей эры.
                                </p>
                            </div>
       
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    76%
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Прародителем текста-рыбы является известный «Lorem Ipsum» — латинский текст, ноги которого растут аж из 45 года до нашей эры.
                                </p>
                            </div>
                  
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    400+
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Прародителем текста-рыбы является известный «Lorem Ipsum» — латинский текст, ноги которого растут аж из 45 года до нашей эры.
                                </p>
                            </div>
               
                            <div>
                                <p {...stylex.props(styles.info__title)}>
                                    8+
                                </p>
                                <p {...stylex.props(styles.info__description)}>
                                    Прародителем текста-рыбы является известный «Lorem Ipsum» — латинский текст, ноги которого растут аж из 45 года до нашей эры.
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