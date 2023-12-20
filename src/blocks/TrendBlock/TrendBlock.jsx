import * as stylex from "@stylexjs/stylex";
import { colors, paddings} from "../../tokens.stylex.js";
import { globalStyle } from "../../index.stylex.js";
import SVG_PATTERN from "../../svg/star.inline.svg?url"

import SVG_PATTERN_MUSIC from "../../svg/music_bg.svg?url"
import SVG_PATTERN_NEURO from "../../svg/neuro_bg.svg?url"
import SVG_PATTERN_PODCAST from "../../svg/podcast_bg.svg?url"
import SVG_PATTERN_STORY from "../../svg/story_bg.svg?url"
import SVG_PATTERN_THREAD from "../../svg/thread_bg.svg?url"
import SVG_PATTERN_VIDEO from "../../svg/video_bg.svg?url"

import SPEAKER_MUSIC from "../../photos/speaker_music.png";
import SPEAKER_NEURO from "../../photos/speaker_neuro.png";
import SPEAKER_PODCAST from "../../photos/speaker_podcast.png";
import SPEAKER_VIDEOS from "../../photos/speaker_short_videos.png";
import SPEAKER_STORYTELLING from "../../photos/speaker_storytelling.png";
import SPEAKER_THREADWATCHING from "../../photos/speaker_threadwatching.png";

const TEXTS = [
    {
        heading: "«Создавайте <span>музыкальный контент</span>, который отражает современные тренды и технологии, но не забывайте о качестве и оригинальности»"
    }
]


const DESKTOP_XL = "@media screen and (min-width: 1920px)";
const DESKTOP_MD = "@media screen and (min-width: 1440px) and (max-width: 1919px)";
const DESKTOP_S = "@media screen and (min-width: 1024px) and (max-width: 1439px)";
const MOBILE_MD = "@media screen and (max-width: 1023px)"

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
        },
        [MOBILE_MD] : {
            paddingBottom: paddings.padding_s,
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
        [MOBILE_MD] : {
            fontWeight: "600",
            lineHeight: "23px",
            letterSpacing: "0.2px",
            fontSize: "20px",
            textAlign: "left"
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
        },
        [MOBILE_MD] : {
            width: "450px",
            top: "45%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }
    },
    person: {
        display: 'flex',
        flexDirection: "row",

        [MOBILE_MD] : {
            flexDirection: "column-reverse",
            gap: "40px",
            alignItems: "center"
        },
    },
    dynamicLineColor: (color) => ({

            ':after' : {
                backgroundColor: color,
            }

    }),
    personLayout: {
        ':after' :{
            content: '',
            height: "9px",
            display: "block",
            marginTop: "-5px",
            backgroundColor: colors.title,
        },
        [DESKTOP_XL] : {
            marginTop: "90px",
            paddingLeft: "656px",
        },
        [DESKTOP_MD] : {
            marginTop: "70px",
            paddingLeft: "492px",
        },
        [DESKTOP_S] : {
            marginTop: "50px",
            paddingLeft: "350px",
        },
        [MOBILE_MD] : {
            marginTop: "40px",
        },
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
        },
        [MOBILE_MD] : {
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
        },
        [MOBILE_MD] : {
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
        },
        [MOBILE_MD] : {
            fontSize: "16px",
            lineHeight: "22.4px",
        },
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
        },
        [MOBILE_MD] : {
            fontSize: "14px",
            paddingRight: "20px"
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
        },
        [MOBILE_MD] : {
            paddingLeft: "0",
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
        [MOBILE_MD] : {
            padding: "0",
        },
    },

    data__trend: {
        position: "absolute",
        width: "430px",
        textAlign: "right",
        color: colors.title,
        
        fontStyle: "normal",
        fontWeight: "600",
        
        letterSpacing: "0.3px",
        textTransform: "uppercase", 

        margin: "0",

        [DESKTOP_XL] : {
            lineHeight: "60px" ,/* 150% */
            fontSize: "50px",
            top: "-25px",
            left: "-770px",
            width: "720px",
        },
        [DESKTOP_MD] : {
            lineHeight: "45px" ,/* 150% */
            fontSize: "36px",
            top: "-25px",
            left: "-460px",
        },
        [DESKTOP_S] : {
            lineHeight: "32px" ,
            fontSize: "26px",
            top: "-25px",
            left: "-460px",
        },
        [MOBILE_MD] : {
            position: "inherit",
            top: null,
            left: null,
            textAlign: "left",
            margin: "46px 0 32px 0"
        }
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
        [MOBILE_MD] : {
            gridTemplateColumns: "1fr",
            gap: "32px"
        }
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
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.title))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_MUSIC}/>
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
        <div id={`first-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >«</span>Создавайте <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >музыкальный контент,</span> который отражает современные тренды и технологии, но не забывайте о качестве и оригинальности<span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout)}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_MUSIC}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Сергей Мудрик</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Главный редактор VK Музыки</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout, TrendItemStyles.dynamicLineColor(colors.title))}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend)}>Музыка</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_MUSIC}/>
            </div>
        </div>
        <div id={`second-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >«</span>аудитория слушателей подкастов <span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >стремительно растет,</span> главное не упустить этот тренд<span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.green))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_PODCAST}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.green))}>Подкасты</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_PODCAST}/>
            </div>
        </div>
        <div id={`third-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} >«</span>Нейронные сети научились рисовать, и при том  <span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} >почти не хуже людей:</span> картина, созданная искусственным интеллектом, ушла с молотка<span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.orange))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_NEURO}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.orange))}>Нейросети</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_NEURO}/>
            </div>
        </div>
        <div id={`fourth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >«</span>В голове предпринимателя или продакт-менеджера, как правило,<span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >есть 3 основных фокуса:</span> продукт, клиент, бизнес. Именно на их стыке рождается новый продукт<span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.purple))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_THREADWATCHING}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.purple))}>Тредвотчинг</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_THREAD}/>
            </div>
        </div>
        <div id={`fifth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >«</span>Сторителлинг становится всё более популярным форматом для коммуникации брендов с потребителями <span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >благодаря большой вовлечённости аудитории </span>и укрепления доверия к спикеру<span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout,  TrendItemStyles.dynamicLineColor(colors.yellow))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_STORYTELLING}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.yellow))}>Сторителлинг и&nbsp;креатив</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_STORY}/>
            </div>
        </div>
        <div id={`sixth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >«</span>Нет сомнения в том, что в 2024 <span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >формат коротких видео продолжит набирать обороты,</span> и если перед Вами или Вашим бизнесом стоит задача продвижения в социальных сетях, делайте ставку на короткие видео<span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout,  TrendItemStyles.dynamicLineColor(colors.lightBlue))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo)} src={SPEAKER_VIDEOS}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Дарья Великолепная константинопольская</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.lightBlue))}>Короткие видео</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2024 году важно создавать музыкальный контент, который соответствует современным трендам и технологиям, таким как виртуальная и дополненная реальность, стриминговые сервисы и социальные медиа. Однако, не забывайте о качестве и оригинальности вашего творчества, создавайте новое. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Используйте новые звуковые и музыкальные инструменты, экспериментируйте с жанрами и стилями, но при этом оставайтесь верными своему уникальному звучанию. Будьте готовы к быстрым изменениям в индустрии и активно изучайте новые технологии и платформы для продвижения вашей музыки.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_VIDEO}/>
            </div>
        </div>
        </>
    )
}