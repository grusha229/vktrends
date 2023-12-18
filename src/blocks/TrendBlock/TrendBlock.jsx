import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/star.inline.svg?url"

import FIRST_PHOTO from "../../photos/first.png"

const TEXTS = [
    {
        heading: "«Создавайте <span>музыкальный контент</span>, который отражает современные тренды и технологии, но не забывайте о качестве и оригинальности»"
    }
]


const TrendItemStyles = stylex.create({
    block: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        overflow: "hidden",
        paddingBottom: "80px"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        minHeight: "1000px",
        zIndex: "2",
        position: "relative",
    },
    title: {
        width: "100%",
        textAlign: "center",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "VK Sans Display Expanded",
        fontSize: "54px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "114%",
        letterSpacing: "0.54px",
        textTransform: "uppercase"
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
    },
    person: {
        display: 'flex',
        flexDirection: "row",
    },
    personLayout: {
        marginTop: "90px",
        paddingLeft: "620px",
        ':after' :{
            content: '',
            backgroundColor: colors.title,
            height: "9px",
            display: "block",
            marginTop: "-5px"
        }
    },
    person__photo: {
        width: "440px",
    },
    person__info: {
        paddingLeft: "96px",
        paddingTop: "237px",
        display: 'flex',
        gap: "20px",
        flexDirection: "column",
        justifyContent: "center"
    },
    person__info_name: {
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "140%",/* 39.2px */
        textTransform: "uppercase"
    },
    person__info_post: {
        width: "448px",

        fontFamily: "VK Sans Text",

        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "140%",
    },
    dataLayout: {
        paddingLeft: "620px",
    },
    data: {
        background: colors.background,
        padding: "48px 30px 60px 30px",
        position: "relative"
    },
    data__trend: {
        position: "absolute",
        width: "430px",
        top: "-25px",
        left: "-460px",
        textAlign: "right",
        color: colors.title,
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "45px" ,/* 150% */
        letterSpacing: "0.3px",
        textTransform: "uppercase"
    },
    data__grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",

        fontFamily: "VK Sans Text",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "140%",
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
                                <p>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
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