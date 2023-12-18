import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import BG_image from "../../photos/video_bg.png";
import SVG_PLAY from "../../svg/play.inline.svg?url";
import SVG_ARC_1 from "../../svg/arc-1.inline.svg?url";
import SVG_ARC_2 from "../../svg/arc-2.inline.svg?url";


const rotation = stylex.keyframes({
    '0%': {transform: 'rotate(0deg)'},
    // '50%': {transform: 'scale(1.1)'},
    '100%': {transform: 'rotate(360deg)'},
  });
  const animations = stylex.create({
    positiveRotate: {
      animationName: rotation,
      animationDuration: '20s',
      animationIterationCount: "infinite"
    },
    negativeRotate: {
        animationName: rotation,
        animationDirection: 'reverse',
        animationDuration: '25s',
        animationIterationCount: "infinite"
    }
  });

const VideoBlockStyles = stylex.create({
    block: {
        width: "100%",
        backgroundColor: colors.background,
        position: "relative",
        paddingTop: "210px",
        overflow: "hidden",
    },
    content: {
        position: 'relative',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    video: {
        width: "1530px",
        height: "750px",
        backgroundImage: "url('/src/photos/video_bg.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "103%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",

        padding: "70px",

        boxSizing: "border-box"
    },
    link : {
        color: colors.white,

        leadingTrim: "both",
        textDecoration: "none",
        
        textEdge: "cap",
        fontSize: "90px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "90px", /* 100% */
        letterSpacing: "0.9px",
        textTransform: "uppercase",

        width: "796px",
    },
    play: {
        width: "360px",
        height: "360px",
        marginLeft: "130px",

        position: "relative",
        cursor: "pointer",
            transition: "transform .3s ease-out",

        ":hover" : {
            transform: 'scale(1.05,1.05)',
            transition: "transform .3s ease-out"
        }
    },
    play__item : {
        position: "absolute",
        top: "50%",
        left: "50%",
    },

    play__item_arc1 : {
        marginLeft: "-177px",
        marginTop: "-177px",
    },
    play__item_arc2 : {
        marginLeft: "-171px",
        marginTop: "-171px"
    },
    play__item_play: {
        marginLeft: "-150px",
        marginTop: "-150px",
    }
})

export const VideoBlock = () => {

    return (
        <div {...stylex.props(VideoBlockStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(VideoBlockStyles.content)}>
                    <div {...stylex.props(VideoBlockStyles.video)}>
                        <a href={"https://vk.com/video"} {...stylex.props(VideoBlockStyles.link)}>Смотреть видео</a>
                        <div {...stylex.props(VideoBlockStyles.play)}>
                            <img {...stylex.props(VideoBlockStyles.play__item, VideoBlockStyles.play__item_play )} src={SVG_PLAY}/>
                            <img {...stylex.props(VideoBlockStyles.play__item, VideoBlockStyles.play__item_arc1, animations.positiveRotate)} src={SVG_ARC_1}/>
                            <img {...stylex.props(VideoBlockStyles.play__item, VideoBlockStyles.play__item_arc2, animations.negativeRotate)} src={SVG_ARC_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}