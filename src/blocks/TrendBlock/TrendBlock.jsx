import * as stylex from "@stylexjs/stylex";
import { colors, paddings} from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/star.inline.svg?url"

import FIRST_PHOTO from "../../photos/first.png"

const TEXTS = [
    {
        heading: "«Создавайте <span>музыкальный контент</span>, который отражает современные тренды и технологии, но не забывайте о качестве и оригинальности»"
    }
]


const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)"

const TrendItemStyles = stylex.create({
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
        }
    },
    content: {
        display: "flex",
        flexDirection: "column",
        zIndex: "2",
        position: "relative",
    },
    title: {
        width: "100%",
        textAlign: "center",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "VK Sans Display Expanded",
        fontStyle: "normal",
        textTransform: "uppercase",
        margin: "0",

        [DESKTOP_XL] : {
            fontWeight: "600",
            lineHeight: "114%",
            letterSpacing: "0.54px",
            fontSize: "54px",
        },
        [DESKTOP_MD] : {
            fontWeight: "600",
            lineHeight: "115%",
            letterSpacing: "0.42px",
            fontSize: "42px",
        },
        [DESKTOP_S] : {
            fontWeight: "600",
            lineHeight: "115%",
            letterSpacing: "0.28px",
            fontSize: "28px",
        },
    },
    dynamicColor: (value) => ({
        color: value,
    }),
    bg: {
        width: "1235px",
        position: "absolute",
        top: "160px",
        left: "220px",
        zIndex: "1",

        [DESKTOP_XL] : {
            width: "1235px",
            top: "160px",
            left: "230px",
        },
        [DESKTOP_MD] : {
            width: "926px",
            top: "150px",
            left: "50%",
            transform: "translate(-50%,0)"
        },
        [DESKTOP_S] : {
            width: "660px",
            top: "150px",
            left: "50%",
            transform: "translate(-50%,0)"
        }
    },
    person: {
        display: 'flex',
        flexDirection: "row",
    },
    personLayout: {
        marginTop: "90px",
        ':after' :{
            content: '',
            backgroundColor: colors.title,
            height: "9px",
            display: "block",
            marginTop: "-5px"
        },
        [DESKTOP_XL] : {
            paddingLeft: "656px",
        },
        [DESKTOP_MD] : {
            paddingLeft: "492px",
        },
        [DESKTOP_S] : {
            paddingLeft: "350px",
        }
    },
    person__photo: {
        

        [DESKTOP_XL] : {
            width: "440px",
        },
        [DESKTOP_MD] : {
            width: "330px",
        },
        [DESKTOP_S] : {
            width: "235px",
        }
    },
    person__info: {

        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",

        [DESKTOP_XL] : {
            paddingLeft: "96px",
            paddingTop: "237px",
            gap: "20px",
        },
        [DESKTOP_MD] : {
            paddingLeft: "42px",
            gap: "15px",
        },
        [DESKTOP_S] : {
            paddingLeft: "20px",
            gap: "10px",
        }
    },
    person__info_name: {
        fontStyle: "normal",
        fontWeight: "600",
        textTransform: "uppercase",
        margin: "0",

        [DESKTOP_XL] : {
            fontSize: "28px",
            lineHeight: "140%",/* 39.2px */
        },
        [DESKTOP_MD] : {
            fontSize: "22px",
            lineHeight: "140%",
        },
        [DESKTOP_S] : {
            fontSize: "16px",
            lineHeight: "140%",
        }
    },
    person__info_post: {
    
        fontFamily: "VK Sans Text",

        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "140%",
        margin: "0",

        [DESKTOP_XL] : {
            fontSize: "24px",
            width: "448px",
        },
        [DESKTOP_MD] : {
            fontSize: "18px",
            width: "330px"
        },
        [DESKTOP_S] : {
            fontSize: "14px",
            width: "240px"
        }
    },
    dataLayout: {
        paddingLeft: "620px",

        [DESKTOP_XL] : {
            paddingLeft: "656px",
        },
        [DESKTOP_MD] : {
            paddingLeft: "492px",
        },
        [DESKTOP_S] : {
            paddingLeft: "350px",
        }
    },
    data: {
        background: colors.background,
        position: "relative",

        [DESKTOP_XL] : {
            padding: "40px",
        },
        [DESKTOP_MD] : {
            padding: "30px",
        },
        [DESKTOP_S] : {
            padding: "30px",
        },
    },

    data__trend: {
        position: "absolute",
        width: "430px",
        top: "-25px",
        left: "-460px",
        textAlign: "right",
        color: colors.title,
        
        fontStyle: "normal",
        fontWeight: "600",
        
        letterSpacing: "0.3px",
        textTransform: "uppercase", 

        margin: "0",

        [DESKTOP_XL] : {
            lineHeight: "50px" ,/* 150% */
            fontSize: "60px",
        },
        [DESKTOP_MD] : {
            lineHeight: "45px" ,/* 150% */
            fontSize: "36px",
        },
        [DESKTOP_S] : {
            lineHeight: "32px" ,
            fontSize: "26px",
        },
    },
    data__grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",

        fontFamily: "VK Sans Text",

        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "140%",
        [DESKTOP_XL] : {
            gap: "60px",
            fontSize: "24px",
        },
        [DESKTOP_MD] : {
            gap: "40px",
            fontSize: "18px",
        },
        [DESKTOP_S] : {
            gap: "30px",
            fontSize: "14px",
        },
    },
    data__grid_text: {
        margin: "0",
    }
})
  

// position для работы якорной ссылки в TrendsTitleList.jsx 
function TrendItem ({position , color}) {
    return (
        <div id={`${position}-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >«</span>Создавайте <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >музыкальный контент,</span> который отражает современные тренды и технологии, но не забывайте о качестве и оригинальности<span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout)}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={FIRST_PHOTO}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend)}>Музыка</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN}/>
            </div>
        </div>
    )
}


export default function TrendBlock () {

    return(
        <>
            <TrendItem position={"first"} color={colors.title}/> 
            <TrendItem position={"second"} color={colors.title}/> 
            <TrendItem position={"third"} color={colors.title}/> 
            <TrendItem position={"fourth"} color={colors.title}/> 
        </>
    )
}