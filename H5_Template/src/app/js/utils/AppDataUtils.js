var Baobab = require('baobab');

var tree = new Baobab({
    appConfig: {
        locale: 'ru-ru',       //默认语言环境 countries[0]
        countries: ['ru-ru', 'tr-tr', 'ar-sa', 'zh-os', 'zh-cn'],
        pages: ['home', 'tpl_create'],
        localStorageConfig: {}
    },
    login: {},
    home: {
        title: 'Home',
        country: ''
    },
    tpl_create: {
        tpl_cfg:{
            data:{
                pages:[
                    {
                        "collection":"judge_one",
                        "tplIndex":0,
                        "template": '<div class="judge_one_wrapper homepage-wrapper">\
                                <div class="banner"><a href="#"><img src="./img/banner.png"></a></div>\
                                <p class="home-title" style="color:{{homeTitle.style.color}};">{{{homeTitle.content}}}</p>\
                                <p class="home-des">{{{homeDes.content}}}</p>\
                                <button>{{{go.content}}}</button>\
                            <div>',
                        "layout": {
                            "homeTitle":{
                                "type":"text",
                                "content":"كيف تعرف رمضان جيدا؟?",
                                "style":{
                                    "color":"#fff",
                                    "fontSize":"28px"
                                }
                            },
                            "homeDes":{
                                "type":"text",
                                "content":"كما اننا نستقبل شهر رمضان المبارك. لقد حان الوقت للتحقق من المعارف الإسلامية لدينا. انضم الى اختبارنا واختبار نفسك",
                                "style":{
                                    "fontSize":"16px"
                                }
                            },
                            "go":{
                                "type":"text",
                                "content":"بدء الإجابة على الأسئلة",
                                "style":{
                                    "fontSize":"16px"
                                }
                            }
                        }
                    },
                    {
                        "collection":"judge_one",
                        "tplIndex":1,
                        "template": '<div class="judge_one_wrapper question-wrapper">\
                                        <div class="banner"><a href="#"><img src="./img/banner.png"></a></div>\
                                        <p class="series">{{{series.content}}}</p>\
                                        <div class="question" data-index="{{{index.content}}}">\
                                            <div class="ques"><p>{{{ques.content}}}</p>\
                                                <div class="result right"></div>\
                                                <div class="result wrong"></div>\
                                            </div>\
                                            <ul class="icons">\
                                                <li><div class="icon" data-index="0"><i class="right-btn"></i></div>\
                                                    <div class="icon right" data-index="1"><i class="wrong-btn"></i></div>\
                                                </li>\
                                            </ul>\
                                        </div>\
                                    </div>',
                        "layout": {
                            "series":{
                                "type":"text",
                                "content":"لسؤال 1",
                                "style":{
                                    "color":"#fff",
                                    "fontSize":"28px"
                                }
                            },
                            "ques":{
                                "type":"text",
                                "content":"شعبان هو شهر بعد رمضان؟",
                                "style":{
                                    "fontSize":"16px"
                                }
                            },
                            "index":{
                                "type":"text",
                                "content":0
                            }
                        }
                    },
                    {
                        "collection":"judge_one",
                        "tplIndex":2,
                        "template": '<div class="judge_one_wrapper last-wrapper">\
                                        <div class="banner">\
                                            <a href="#"><img src="./img/banner.png"></a>\
                                        </div>\
                                        <p class="gameover">{{{gameover.content}}}</p>\
                                        <p class="rank-text">{{{rank.content}}}</p>\
                                        <ul class="result-show">\
                                            <li></li><li></li><li></li><li></li><li></li>\
                                        </ul>\
                                        <p class="result-text">{{{success.content}}}</p>\
                                        <button>{{{tryAgain.content}}}</button>\
                                        <p class="share-text">——{{{share.content}}}——</p>\
                                        <div class="share-icon">'+
                                            '<a id="share-icon-facebook"><img src="./img/icon_share_facebook.png"></a>\
                                            <a id="share-icon-twitter"><img src="./img/icon_share_twitter.png"></a>\
                                            <a id="share-icon-email"><img src="./img/icon_share_email.png"></a>\
                                        </div>\
                                    </div>',
                        "layout": {
                            "gameover":{
                                "type":"text",
                                "content":"انتهت اللعبة",
                                "style":{
                                    "color":"#fff",
                                    "fontSize":"28px"
                                }
                            },
                            "rank":{
                                "type":"text",
                                "content":"علامتك هي"
                            },
                            "success":{
                                "type":"text",
                                "content":"!!كنت أفضل من 33% من الأشخاص الذين لعبوا هذه اللعبة. شارك النتائج الخاصة بك مع أصدقائك"
                            },
                            "tryAgain":{
                                "type":"text",
                                "content":"حاول مرة أخرى"
                            },
                            "share":{
                                "type":"text",
                                "content":"اضغط للمشاركة!"
                            }
                        }
                    }
                ]
            }
        },
        page_bar: [],
        init_page:{
            "collection":"default",
            "tplIndex":0,
            "template": '',
            "layout":{}
        },
        activeIndex:0,
        templateActiveIndex:0,
        eidtingItemTip:'',
        templateList:[
            {
                collectionTitle:"judge",
                collectionTitleImgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                collectionTPLs:[
                    {
                        label:"template_1",
                        title:"A single figure",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_2",
                        title:"multiple",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_3",
                        title:"Text photos",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_4",
                        title:"Three figure",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    }
                ]
            },
            {
                collectionTitle:"test 2",
                collectionTitleImgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                collectionTPLs:[
                    {
                        label:"template_1",
                        title:"A single figure 2",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_2",
                        title:"multiple 2",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_3",
                        title:"Text photos 2",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_4",
                        title:"Three figure 2",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    },
                    {
                        label:"template_5",
                        title:"four figure 2",
                        imgUrl:"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg",
                        config:{}
                    }
                ]
            }
        ]
    }
});

module.exports = tree;
