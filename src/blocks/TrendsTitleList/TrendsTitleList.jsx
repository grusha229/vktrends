import * as stylex from "@stylexjs/stylex";
import { colors, paddings } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/pattern_kv.inline.svg?url"


const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)"
const MOBILE_MD = "@media screen and (max-width: 1023px)"


const styles = stylex.create({
    block: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        overflow: "hidden",
        [DESKTOP_XL] : {
            paddingBottom: paddings.padding_xl,
        },
        [DESKTOP_MD] : {
            paddingBottom: paddings.padding_md,
        },
        [DESKTOP_S] : {
            paddingBottom: paddings.padding_sm,
        },
        [MOBILE_MD] : {
            paddingBottom: paddings.padding_s,
        },
    },
    content: {
        position: 'relative',
        display: "flex",
        flexDirection: "column",
        // alignItems: "center"
        alignItems: "flex-start",
        [MOBILE_MD] : {
            gap: "10px"
        },

    },
    theme : {
        // position: "absolute",
        cursor: "pointer",
        textAlign: "center"
    },
    theme__title : {
        textAlign: "center",
        leadingTrim: "both",

        textEdge: "cap",

        fontStyle: "normal",
        fontWeight: "600",
        letterSpacing: "0.9px",
        textTransform: "uppercase",
        lineHeight: "110%", /* 99px */

        pointerEvents: "none",
        display : "inline",
        [DESKTOP_XL]: {
            fontSize: "90px",
        },
        [DESKTOP_MD]: {
            fontSize: "68px",
            letterSpacing: "0.68px"
        },
        [DESKTOP_S]: {
            fontSize: "48px",
            letterSpacing: "0.48px"
        },
        [MOBILE_MD] : {
            fontSize: "28px",
            letterSpacing: "0.28px"
        }
    },
    theme__descr : {
        position: "relative",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "150%" /* 36px */,
        letterSpacing: "0.9px"
    },
    first: {
        transform: "rotate(-3deg)",
        // top: "27px",
        // left: "340px",
        color: colors.title,
        [DESKTOP_XL]: {
            height: "128px",
            paddingLeft: "424px",
        },
        [DESKTOP_MD]: {
            height: "96px",
            paddingLeft: "320px",
        },
        [DESKTOP_S]: {
            height: "71px",
            paddingLeft: "220px",
        },
        [MOBILE_MD] : {
            height: "38px",
        }
    },
    second: {
        transform: "rotate(3deg)",
        color: colors.green,
        alignSelf: "flex-end",
        [DESKTOP_XL]: {
            height: "138px",
            paddingRight: "424px" ,
        },
        [DESKTOP_MD]: {
            height: "104px",
            paddingRight: "320px" ,
        },
        [DESKTOP_S]: {
            height: "74px",
            paddingRight: "220px" ,
        },
        [MOBILE_MD] : {
            height: "32px",
        }
    },
    third: {
        transform: "rotate(-3deg)",
        color: colors.white,
        [DESKTOP_XL]: {
            height: "142px",
            paddingLeft: "260px",
        },
        [DESKTOP_MD]: {
            height: "128px",
            paddingLeft: "195px",
        },
        [DESKTOP_S]: {
            height: "74px",
            paddingLeft: "140px",
        },
        [MOBILE_MD] : {
            height: "34px",
        }
    },
    fourth: {
        transform: "rotate(3deg)",
        
        color: colors.purple,
        alignSelf: "flex-end",
        [DESKTOP_XL]: {
            height: "150px",
            paddingRight: "260px" ,
        },
        [DESKTOP_MD]: {
            height: "112px",
            paddingRight: "195px" ,
        },
        [DESKTOP_S]: {
            height: "80px",
            paddingRight: "140px" ,
        },
        [MOBILE_MD] : {
            height: "36px",
        }
    },
    fifth: {
        transform: "rotate(-3deg)",
        color: colors.yellow,
        alignSelf: "center",
        [DESKTOP_XL]: {
            height: "254px",
        },
        [DESKTOP_MD]: {
            height: "190px"
        },
        [DESKTOP_S]: {
            height: "135px"
        },
        [MOBILE_MD] : {
            textAlign: "left",
            height: "69px",
            alignSelf: "flex-start",
        }
    },
    sixth: {
        transform: "rotate(3deg)",
        color: colors.lightBlue,
        alignSelf: "center",
        [DESKTOP_XL]: {
            height: "162px",
        },
        [DESKTOP_MD]: {
            height: "120px"
        },
        [DESKTOP_S]: {
            height: "86px"
        },
        [MOBILE_MD] : {
            textAlign: "right",
            height: "68px",
            alignSelf: "flex-end",
        }
    }
})


export default function TrendsTitleList () {

    const handleClick = (e) => {
        e.stopPropagation()
        let currentTrend = e.target.dataset.id
        
        document.getElementById(`${currentTrend}-trend`).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return(
        <div {...stylex.props(styles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(styles.content)}>
                    <div data-id={"first"} {...stylex.props(styles.theme, styles.first)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Музыка</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"second"} {...stylex.props(styles.theme, styles.second)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Подкасты</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"third"} {...stylex.props(styles.theme, styles.third)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Нейросети</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"fourth"} {...stylex.props(styles.theme, styles.fourth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Трендвотчинг</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"fifth"} {...stylex.props(styles.theme, styles.fifth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Сторителлинг<br/>и&nbsp;креатив </p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"sixth"} {...stylex.props(styles.theme, styles.sixth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Короткие видео</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}