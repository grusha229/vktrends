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
        width: "1035px",
        position: "absolute",
        top: "160px",
        left: "220px",
        zIndex: "1",

        [DESKTOP_XL] : {
            width: "1035px",
            top: "160px",
            left: "230px",
        },
        [DESKTOP_MD] : {
            width: "850px",
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
        display: 'grid',
        // flexDirection: "row",

        gridTemplateColumns: "1fr 1fr",

        [MOBILE_MD] : {
            display: "flex",
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
    person__photo_music: {
        [DESKTOP_XL] : {
            width: "576px",
            marginLeft: "-63px"
        },
        [DESKTOP_MD] : {
            width: "432px",
            marginLeft: "-49px"
        },
        [DESKTOP_S] : {
            width: "310px",
            marginLeft: "-35px"
        },
        [MOBILE_MD] : {
            width: "335px",
        }
    },
    person__photo_neuro: {
        [DESKTOP_XL] : {
            width: "490px",
            marginLeft: "-63px"
        },
        [DESKTOP_MD] : {
            width: "367px",
            marginLeft: "-49px"
        },
        [DESKTOP_S] : {
            width: "262px",
            marginLeft: "-35px"
        },
        [MOBILE_MD] : {
            width: "262px",
        }
    },
    person__photo_podcast: {
        [DESKTOP_XL] : {
            width: "510px",
            marginLeft: "-17px"
        },
        [DESKTOP_MD] : {
            width: "382px",
            marginLeft: "-9px"
        },
        [DESKTOP_S] : {
            width: "272px",
            marginLeft: "-7px"
        },
        [MOBILE_MD] : {
            width: "272px",
        }
    },
    person__photo_thread: {
        [DESKTOP_XL] : {
            width: "572px",
            marginLeft: "-46px"
        },
        [DESKTOP_MD] : {
            width: "430px",
            marginLeft: "-35px"
        },
        [DESKTOP_S] : {
            width: "307px",
            marginLeft: "-25px"
        },
        [MOBILE_MD] : {
            width: "307px",
        }
    },
    person__photo_story: {
        [DESKTOP_XL] : {
            width: "556px",
            marginLeft: "-28px"
        },
        [DESKTOP_MD] : {
            width: "420px",
            marginLeft: "-22px"
        },
        [DESKTOP_S] : {
            width: "297px",
            marginLeft: "-14px"
        },
        [MOBILE_MD] : {
            width: "297px",
        }
    },
    person__photo_video: {
        [DESKTOP_XL] : {
            width: "500px",
            marginLeft: "-55px"
        },
        [DESKTOP_MD] : {
            width: "375px",
            marginLeft: "-42px"
        },
        [DESKTOP_S] : {
            width: "265px",
            marginLeft: "-31px"
        },
        [MOBILE_MD] : {
            width: "265px",
        }
    },

    person__info: {

        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",

        [DESKTOP_XL] : {
            // paddingLeft: "50px",
            // paddingTop: "237px",
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
            // width: "448px",
        },
        [DESKTOP_MD] : {
            fontSize: "18px",
            // width: "330px"
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
            fontSize: "26px",
        },
        [DESKTOP_MD] : {
            gap: "40px",
            fontSize: "20px",
        },
        [DESKTOP_S] : {
            gap: "30px",
            fontSize: "14px",
        },
        [MOBILE_MD] : {
            gridTemplateColumns: "1fr",
            gap: "32px",
            fontSize: "16px",
        }
    },
    data__grid_text: {
        margin: "0",
    }
})

export default function TrendBlock () {

    return(
        <>
        <div id={`sixth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >«</span>Загляните <span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >в&nbsp;мекку всей мемной индустрии России&nbsp;</span>— раздел видео ВКонтакте <span {...stylex.props(TrendItemStyles.dynamicColor(colors.lightBlue))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout,  TrendItemStyles.dynamicLineColor(colors.lightBlue))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_video)} src={SPEAKER_VIDEOS}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Василий Дидляков, старший продюсер талантов в VK Клипах</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >А&nbsp;ещё блогер, музыкант и&nbsp;мемолог со стажем</p>
                            </div>
                        </div>
                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.lightBlue))}>Короткие видео</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Ищите вдохновение в&nbsp;ретромемах из&nbsp;2000-х и&nbsp;интегрируйте их&nbsp;в&nbsp;свой контент. Если хотите стать автором тренда, приглашаю вас заглянуть в&nbsp;историческую мекку всей российской мемной индустрии&nbsp;— раздел видео ВКонтакте.</p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Пробуйте себя в&nbsp;разных амплуа и&nbsp;публикуйте короткие вертикальные видео&nbsp;— это самый востребованный тип контента сегодня».</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_VIDEO}/>
            </div>
        </div>
        <div id={`third-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} >«</span>Создайте<span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} > своего виртуального аватара</span> и&nbsp;придумайте ему роль в&nbsp;вашем сообществе<span {...stylex.props(TrendItemStyles.dynamicColor(colors.orange))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.orange))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_neuro)} src={SPEAKER_NEURO}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Даниил Трабун, креативный директор, евангелист нейросетей, блогер</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Знает всё про&nbsp;технологии в&nbsp;контенте и&nbsp;учит работать с&nbsp;нейросетями</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.orange))}>Нейросети</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Основным трендом для креаторов в&nbsp;2024 году станут реалистичные виртуальные аватары, которые создаются с&nbsp;помощью нейросетей. Многие сервисы позволяют создавать аватаров без знаний программирования, а&nbsp;в&nbsp;США и&nbsp;Китае уже появляются виртуальные актёры, способные участвовать в&nbsp;сериалах и&nbsp;стримах.</p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В&nbsp;следующем году реальные люди будут конкурировать с&nbsp;виртуальными аватарами, и&nbsp;возможностей для творчества и&nbsp;развития в&nbsp;этой области будет множество. Попробуйте создать такого аватара для своего сообщества и&nbsp;выбрать для него отдельный жанр: короткие видео, стримы или даже сериал. Уверен, что это всех удивит.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_NEURO}/>
            </div>
        </div>
        <div id={`second-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >«</span>Работайте <span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >на&nbsp;лояльность аудитории,</span> даже если она небольшая: каждый слушатель должен ощущать, что вы&nbsp;его цените<span {...stylex.props(TrendItemStyles.dynamicColor(colors.green))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.green))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_podcast)} src={SPEAKER_PODCAST}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Анна Ковалёва, соосновательница контент-бюро «Шторм»</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >За&nbsp;год студия «Шторм» запустила 14&nbsp;подкастов, которые послушали 1,5&nbsp;млн&nbsp;раз</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.green))}>Подкасты</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Мой любимый тренд — на сложные форматы: от журналистских расследований, нарративных подкастов и тру-крайма до аудиосериалов. Не ограничивайте себя рамками одного жанра и экспериментируйте.</p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Форматы в медиа становятся короче — в подкастах тоже. Используйте короткие форматы как основной вид контента или для того, чтобы привлечь внимание к более объёмному материалу.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_PODCAST}/>
            </div>
        </div>
        <div id={`fifth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >«</span>Вы сами, ваши эмоции, мысли, уникальная мимика и жесты — вот что составляет <span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >вашу «фишку».</span> Не бойтесь делиться этим невидимым измерением вашего творчества<span {...stylex.props(TrendItemStyles.dynamicColor(colors.yellow))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout,  TrendItemStyles.dynamicLineColor(colors.yellow))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_story)} src={SPEAKER_STORYTELLING}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Никита и Кирилл, творческое объединение «11»</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Набрали 50 тысяч подписчиков за 2 месяца</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.yellow))}>Cторителлинг</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В мире, где контент создаётся на каждом шагу, основная задача автора — выделиться. Чтобы выжить в конкурентной среде, нужны навыки сторителлинга. Если хотите удержать внимание читателей и зрителей, пригодятся базовые техники: можно задать вопрос в начале и дать ответ только в конце, использовать интонацию как подтекст. </p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Выражайте не только то, что написано на бумаге, но и то, что скрыто между строк: тогда у истории появится объём. Сильный сюжет — это эмоции, невысказанные мысли. Ваша фишка — это вы сами. Не бойтесь делиться тем, что скрыто внутри.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_STORY}/>
            </div>
        </div>
        <div id={`first-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >«</span>Выстраивайте <span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >связь между творчеством и имиджем</span> в соцсетях и пробуйте попадать в саундтреки к сериалам<span {...stylex.props(TrendItemStyles.dynamicColor(colors.title))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout)}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_music)} src={SPEAKER_MUSIC}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Сергей Мудрик, главный редактор VK&nbsp;Музыки</p>
                                <p {...stylex.props(TrendItemStyles.person__info_post)} >Открывает миру музыкантов c 2017 года</p>
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout, TrendItemStyles.dynamicLineColor(colors.title))}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend)}>Музыка</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>В 2023-м неожиданным стал успех фонк-ремиксов и треков, которые звучали в сериалах. Также всё ещё наблюдается ностальгия по прошлым десятилетиям. Советую внимательно следить за происходящим не только в музыке, но и во всей медиасфере, и использовать каждую возможность для продвижения — например, попадать в саундтреки сериалов и фильмов.</p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Творчество и имидж должны быть тесно связаны и отражены в соцсетях — их особенно важно развивать при высокой конкуренции за внимание аудитории. Если кто-то из зрителей услышит и полюбит вашу музыку, ему должно быть легко найти вас, — то же касается продюсеров и редакторов. Музыкальная карьера — это не только искусство, но и стратегия, а ещё маркетинг и умение работать на рынке.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_MUSIC}/>
            </div>
        </div>
        <div id={`fourth-trend`} {...stylex.props(TrendItemStyles.block)}>
            <div {...stylex.props(globalStyle.container)}>
                <div {...stylex.props(TrendItemStyles.content)}>
                    <p {...stylex.props(TrendItemStyles.title)}>
                        <span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >«</span>Изучите исследования, <span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >чтобы откалибровать взгляд,</span>  и&nbsp;сверяйтесь со&nbsp;своими ощущениями<span {...stylex.props(TrendItemStyles.dynamicColor(colors.purple))} >»</span>
                    </p>
                    <div {...stylex.props(TrendItemStyles.personLayout, TrendItemStyles.dynamicLineColor(colors.purple))}>

                        <div {...stylex.props(TrendItemStyles.person)}>
                            <img {...stylex.props(TrendItemStyles.person__photo, TrendItemStyles.person__photo_thread)} src={SPEAKER_THREADWATCHING}/>
                            <div {...stylex.props(TrendItemStyles.person__info)}>
                                <p {...stylex.props(TrendItemStyles.person__info_name)} >Леша Устьянцев, ​идеолог образовательного направления в&nbsp;рекламном агентстве «Пикчер»</p>
                                {/* <p {...stylex.props(TrendItemStyles.person__info_post)} >Генеральный директор «Компас», музыкальный продюсер</p> */}
                            </div>
                        </div>

                    </div>
                    <div {...stylex.props(TrendItemStyles.dataLayout)}>
                        <div {...stylex.props(TrendItemStyles.data)}>
                            <p {...stylex.props(TrendItemStyles.data__trend, TrendItemStyles.dynamicColor(colors.purple))}>Трендвотчинг</p>
                            <div {...stylex.props(TrendItemStyles.data__grid)}>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Трендвотчинг&nbsp;— это навык, которому нужно долго учиться. Но&nbsp;вы&nbsp;можете уже сейчас сделать первые шаги к&nbsp;поиску трендов. Для начала изучите, какие актуальные тренды выделяют исследователи: это поможет вам откалибровать взгляд.</p>
                                <p {...stylex.props(TrendItemStyles.data__grid_text)}>Затем смотрите много разного контента и&nbsp;задавайте себе вопросы: «Почему это классно? Чем это отличается от&nbsp;того, что я&nbsp;видел раньше?». Ответы помогут самостоятельно найти первые тренды и&nbsp;придумать новые идеи на&nbsp;их&nbsp;основе.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img {...stylex.props(TrendItemStyles.bg)} src={SVG_PATTERN_THREAD}/>
            </div>
        </div>
        </>
    )
}