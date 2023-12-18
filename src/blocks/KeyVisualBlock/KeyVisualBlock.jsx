import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/pattern_kv.inline.svg?url"
import { useEffect } from "react";


const styles = stylex.create({
    kvblock: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        paddingTop: "210px",
        overflow: "hidden"
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
        fontSize: "280px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "110%",
        letterSpacing: "2.8px",
        textTransform: "uppercase",
        zIndex: "3",
    },
    colored : {
        color: colors.title
    },
    description: {
        paddingLeft: "433px",
        zIndex: "2",
    },
    subtitle: {
        marginTop: "138px",
        color: colors.text,
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "150%"
    },
    info: {
        marginTop: "260px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "178px",
        rowGap: "138px"
    },
    info__title: {
        color: colors.title,
        fontSize: "90px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "110%", /* 99px */
        letterSpacing: "0.9px",
        textTransform: "uppercase",
        zIndex: "1",
        position: "relative"
    },
    info__description: {
        color: colors.text,
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "150%",
        padding: "20px 10px 32px 10px",
        background: colors.background,
        marginTop: "-29px",
        zIndex: "999",
        position: "relative",
    },
    bg: {
        position: "absolute",
        top: "635px",
        right: "-700px",
        transform: "rotate(29.708deg)",
        zIndex: "1",
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
                            <p>
                                Не следует, однако, забывать о том, что сложившаяся структура <br/> организации создаёт предпосылки качественно новых шагов<br/>для позиций,
                                занимаемых участниками в отношении поставленных задач?
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