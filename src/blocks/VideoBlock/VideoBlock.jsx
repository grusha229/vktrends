import * as stylex from "@stylexjs/stylex";
import { colors, paddings } from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import BG_image from "../../photos/video_bg.png";
import SVG_PLAY from "../../svg/play.inline.svg?url";
import SVG_ARC_1 from "../../svg/arc-1.inline.svg?url";
import SVG_ARC_2 from "../../svg/arc-2.inline.svg?url";

const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)"


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
    },
    content: {
        position: 'relative',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    video: {

        backgroundImage: "url('/src/photos/video_bg.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "103%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",

        boxSizing: "border-box",

        [DESKTOP_XL] : {
            width: "1530px",
            height: "750px",
            padding: "70px",
        },
        [DESKTOP_MD] : {
            width: "1148px",
            height: "560px",
            padding: "50px",
        },
        [DESKTOP_S] : {
            width: "816px",
            height: "398px",
            padding: "30px",
        },
    },
    link : {
        color: colors.white,

        leadingTrim: "both",
        textDecoration: "none",
        
        textEdge: "cap",
        fontStyle: "normal",
        fontWeight: "600",
        letterSpacing: "0.9px",
        textTransform: "uppercase",

        [DESKTOP_XL] : {
            width: "796px",
            lineHeight: "90px", /* 100% */
            fontSize: "90px",
        },
        [DESKTOP_MD] : {
            width: "734px",
            lineHeight: "68px", /* 100% */
            fontSize: "68px",
        },
        [DESKTOP_S] : {
            width: "540px",
            lineHeight: "48px", /* 100% */
            fontSize: "48px",
        },
    },
    play: {
        position: "relative",
        cursor: "pointer",
            transition: "transform .3s ease-out",

        ":hover" : {
            transform: 'scale(1.05,1.05)',
            transition: "transform .3s ease-out"
        },

        [DESKTOP_XL] : {
            width: "360px",
            height: "360px",
            marginLeft: "130px",
        },
        [DESKTOP_MD] : {
            width: "264px",
            height: "264px",
            marginLeft: "50px",
        },
        [DESKTOP_S] : {
            width: "186px",
            height: "186px",
            marginLeft: "30px",
        },
    },
    play__item : {
        position: "absolute",
        top: "50%",
        left: "50%",
    },

    play__item_arc1 : {
        [DESKTOP_XL] : {
            width: "352px",
            height: "352px",
            marginLeft: "-176px",
            marginTop: "-176px",
        },
        [DESKTOP_MD] : {
            width: "264px",
            height: "264px",
            marginLeft: "-132px",
            marginTop: "-132px",
        },
        [DESKTOP_S] : {
            width: "178px",
            height: "178px",
            marginLeft: "-89px",
            marginTop: "-89px",
        },
    },
    play__item_arc2 : {
  
        [DESKTOP_XL] : {
            width: "340px",
            height: "340px",
            marginLeft: "-170px",
            marginTop: "-170px",
    
        },
        [DESKTOP_MD] : {
            width: "256px",
            height: "256px",
            marginLeft: "-128px",
            marginTop: "-128px",
    
        },
        [DESKTOP_S] : {
            width: "186px",
            height: "186px",
            marginLeft: "-93px",
            marginTop: "-93px",
    
        },
    },
    play__item_play: {
        marginLeft: "-150px",
        marginTop: "-150px",

        [DESKTOP_XL] : {
            width: "302px",
            height: "302px",
            marginLeft: "-151px",
            marginTop: "-151px",
    
        },
        [DESKTOP_MD] : {
            width: "228px",
            height: "228px",
            marginLeft: "-114px",
            marginTop: "-114px",
        },
        [DESKTOP_S] : {
            width: "160px",
            height: "160px",
            marginLeft: "-80px",
            marginTop: "-80px",
        },
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