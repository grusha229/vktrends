import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/pattern_kv.inline.svg?url"


const styles = stylex.create({
    block: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        paddingTop: "210px",
        overflow: "hidden",
        paddingBottom: "210px",
    },
    content: {
        position: 'relative',
        display: "flex",
        flexDirection: "column",
        height: "2050px"
    },
    theme : {
        position: "absolute",
        cursor: "pointer",
    },
    theme__title : {
        textAlign: "center",
        leadingTrim: "both",

        textEdge: "cap",
        fontSize: "90px",
        fontStyle: "normal",
        fontWeight: "600",
        letterSpacing: "0.9px",
        textTransform: "uppercase",
        lineHeight: "110%", /* 99px */

        pointerEvents: "none"
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
        top: "27px",
        left: "340px",
        color: "#FF3A75"
    },
    second: {
        transform: "rotate(3deg)",
        top: "185px",
        left: "928px",
        color: "#FFEB3A",
        width: "796px"
    },
    third: {
        transform: "rotate(-3deg)",
        top: "306px",
        left: "170px",
        color: "#FFF",
        width: "818px"
    },
    fourth: {
        transform: "rotate(3deg)",
        top: "420px",
        left: "720px",
        color: "#C03AFF",
        width: "1013px"
    },
    fifth: {
        transform: "rotate(-3deg)",
        top: "700px",
        left: "290px",
        color: "#2ADE26",
        width: "825px"
    },
    sixth: {
        transform: "rotate(3deg)",
        top: "900px",
        left: "907px",
        color: "#3A71FF",
        width: "616px"
    },
    seventh: {
        transform: "rotate(-3deg)",
        top: "1095px",
        left: "65px",
        color: "#3AFFFF",
        width: "1780px"
    },
    eighth: {
        transform: "rotate(3deg)",
        top: "1300px",
        left: "300px",
        color: "#FF2FB8",
        width: "1780px"
    },
    ninth: {
        transform: "rotate(-3deg)",
        top: "1600px",
        left: "-90px",
        color: "#FF9111",
        width: "1780px"
    },
    tenth: {
        transform: "rotate(3deg)",
        top: "1855px",
        left: "65px",
        color: "#FF1F00",
        width: "1780px"
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
                        <p {...stylex.props(styles.theme__title)}>Работа с&nbsp;комьюнити</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"fifth"} {...stylex.props(styles.theme, styles.fifth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Аналитика</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"sixth"} {...stylex.props(styles.theme, styles.sixth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Контент</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"seventh"} {...stylex.props(styles.theme, styles.seventh)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Платный контент</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"eighth"} {...stylex.props(styles.theme, styles.eighth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Сторителлинг в&nbsp;бизнесе</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"ninth"} {...stylex.props(styles.theme, styles.ninth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Короткие видео</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                    <div data-id={"tenth"} {...stylex.props(styles.theme, styles.tenth)} onClick={handleClick}>
                        <p {...stylex.props(styles.theme__title)}>Развитие сообщества</p>
                        {/* <p {...stylex.props(styles.theme__descr)}>Прародителем текста-рыбы является известный «Lorem Ipsum» </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}