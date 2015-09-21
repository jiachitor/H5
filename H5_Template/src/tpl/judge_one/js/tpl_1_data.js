var data = {
    "code": 200,
    "data": {
        "thumbnail": "http://chuye.cloud7.com.cn/Cloud7BeginPage/Content/Image/logo.png",
        "title": "yicheng的初页",
        "mode": "push",
        "pageSwitch": {
            "animateId": "push"
        },
        "backgroud": {
            "color": "#FFFFFF"
        },
        "music": {},
        "pages": [
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
                    "box":{
                        "className":"ui-box",
                        "style":{
                            "backgroundImage":"url(http://img01.cloud7.com.cn/18cc7fee31825193dc9ab31e7c1d2a4c.jpg)",
                        }
                    },
                    "homeTitle":{
                        content:"كيف تعرف رمضان جيدا؟?",
                        "style":{
                            "color":"#fff"
                        }
                    },
                    "homeDes":{
                        "content":"كما اننا نستقبل شهر رمضان المبارك. لقد حان الوقت للتحقق من المعارف الإسلامية لدينا. انضم الى اختبارنا واختبار نفسك",
                    },
                    "go":{
                        "content":"بدء الإجابة على الأسئلة",
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
									<div class="icon right" data-index="1"><i class="wrong-btn"></i></div></li>\
							</ul>\
						</a>\
					</div>',
                "layout": {
                    "series":{
                        content:"لسؤال 1"
                    },
                    "ques":{
                        "content":"شعبان هو شهر بعد رمضان؟"
                    },
                    "index":{
                        "content":0
                    }
                }
            },
            {
                "collection":"judge_one",
                "tplIndex":2,
                "template": '<div class="judge_one_wrapper last-wrapper">\
                                <div class="banner"><a href="#"><img src="./img/banner.png"></a></div>\
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
                        content:"انتهت اللعبة"
                    },
                    "rank":{
                        "content":"علامتك هي"
                    },
                    "success":{
                        "content":"!!كنت أفضل من 33% من الأشخاص الذين لعبوا هذه اللعبة. شارك النتائج الخاصة بك مع أصدقائك"
                    },
                    "tryAgain":{
                        "content":"حاول مرة أخرى"
                    },
                    "share":{
                        "content":"اضغط للمشاركة!"
                    },

                }
            },
        ],
        "author": "yicheng",
        "headimgurl": "http://wx.qlogo.cn/mmopen/7GSJwgicRicAk8gK7yYZBYxZEnRCkg0FvUeWwiboia6CpH1ibOoxz8syguNXExlxpbdbGmj9yKYS1icKn1KkftG21GCbv3xNWia0Xrk/0",
        "userworks": {
            "title": "热门初页",
            "works": [
                {
                    "thumbnail": "http://img01.cloud7.com.cn/eb0ff3d1a7e560602f5e6d1d137a97af.jpg",
                    "title": "世界那么大?我想去看看(下)",
                    "url": "/3150411"
                },
                {
                    "thumbnail": "http://img01.cloud7.com.cn/0a1b4681dd5ae3b9479dac29845346f3.jpg",
                    "title": "严少辰",
                    "url": "/3974699"
                },
                {
                    "thumbnail": "http://img01.cloud7.com.cn/f3b74d9c46a550905d7598f0e4fe4400.jpg",
                    "title": "＃初页情书＃谢谢?",
                    "url": "/236077"
                }
            ]
        },
        "copyright": 1,
        "praise": 0
    }
};


module.exports = data;