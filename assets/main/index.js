window.__require = function e(t, o, i) {
    function n(s, r) {
        if (!o[s]) {
            if (!t[s]) {
                var l = s.split("/");
                if (l = l[l.length - 1],
                    !t[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!r && c)
                        return c(l, !0);
                    if (a)
                        return a(l, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = l
            }
            var d = o[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function (e) {
                return n(t[s][1][e] || e)
            }, d, d.exports, e, t, o, i)
        }
        return o[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++)
        n(i[s]);
    return n
}({
    1: [function () {
        "use strict";
        var e, t, o;
        (function (e) {
            e.BaseAppProxy = class {
                signInGoogle() {
                    console.log("BaseAppProxy signInGoogle")
                }
                signInGoogleSilently() {
                    console.log("BaseAppProxy signInGoogleSilently")
                }
                signOutGoogle() {
                    console.log("BaseAppProxy signOutGoogle")
                }
                saveFile(e) { }
                loadSavefile() { }
                setNonConsumableProduct(e) { }
                getProductDetail(e) { }
                requestPayment(e) { }
                checkPurchase() { }
                fetchRemoteConfig() { }
                confirmPurchase(e) { }
                getRemoteConfig() {
                    return new Map
                }
                getOrderInfo(e) {
                    return ""
                }
                restoreNonConsumablePurchase() { }
                onOfferwallAdCredited(e, t) { }
                onOfferwallAdClosed() { }
                submitScore(e, t) { }
                showLeaderboard(e) { }
            }
        }
        )(t || (t = {})),
            function (e) {
                let t, o, i, n;
                (function (e) {
                    e.SaveLog = "https://log.17tcw.com/collect/pushEvents",
                        e.SaveRedirect = "/xyx/statis/reqSaveRedirect",
                        e.GetNativationConfig = "/default/redirect/list",
                        e.GameConfig = "/default/extra/getNewConfigs",
                        e.SaveShare = "/xyx/statis/reqBeginShare",
                        e.GetShareConfig = "/xyx/basic/reqFenxiang",
                        e.GetUUID = "/game/wechat",
                        e.GetRewardConfig = "/default/game/getShareStrategy",
                        e.GameUrl = "",
                        e.GetOpenId = "/default/login/authorize",
                        e.UploadClickShare = "/default/game/clickShare",
                        e.PlaceOrder = "/default/product/createOrder",
                        e.QueryPendingOrder = "/default/product/getUserOrders",
                        e.ConfirmPurchase = "/default/product/finishOrder",
                        e.QueryUserAssets = "/default/product/getUserItems",
                        e.UpdateUserAssets = "/default/product/updateUserItems",
                        e.QueryShopProducts = "/default/product/getProductList"
                }
                )(t = e.Urls || (e.Urls = {})),
                    e.getUrl = function (t) {
                        return t.startsWith("http") ? t : e.Info.DebugServerAPI ? "https://game.17tcw.com:8502" + t : "https://game.17tcw.com" + t
                    }
                    ,
                    function (e) {
                        e.Default = "Default",
                            e.CocosCreator = "CocosCreator",
                            e.LayaAir = "LayaAir"
                    }(o = e.EngineType || (e.EngineType = {})),
                    function (e) {
                        e.Default = "Default",
                            e.Kuaidianwan = "Kuaidianwan",
                            e.WeChat = "WeChat",
                            e.QQ = "QQ",
                            e.OPPO = "OPPO",
                            e.Vivo = "Vivo",
                            e.BaiDu = "BaiDu",
                            e.XiaoDu = "XiaoDu",
                            e.QuTouTiao = "QuTouTiao",
                            e.QuTouTiaoAndroid = "QuTouTiaoAndroid",
                            e.ByteDance = "ByteDance",
                            e.YueYou = "YueYou",
                            e.KuaiKan = "KuaiKan",
                            e.BaoQu = "BaoQu",
                            e.Android = "Android",
                            e.iOS = "iOS",
                            e.UCMiniGame = "UCMiniGame",
                            e.LianShangMiniGame = "LianShangMiniGame",
                            e.Kwaigame = "Kwaigame",
                            e.M4399MiniGame = "M4399MiniGame",
                            e.Hago = "Hago",
                            e.HuaWeiQuickGame = "HuaWeiQuickGame",
                            e.ZuiYou = "ZuiYou",
                            e.WeiYouH5 = "WeiYouH5"
                    }(i = e.Platform || (e.Platform = {})),
                    function (e) {
                        e.None = "",
                            e.AppStore = "AppStore",
                            e.AppStoreWorld = "AppStoreWorld",
                            e.AndroidOfficial = "AndroidOfficial",
                            e.OPPO = "OPPO",
                            e.M4399 = "M4399",
                            e.M233 = "M233",
                            e.HaoYouKuaiBao = "HaoYouKuaiBao",
                            e.BaMenShenQi = "BaMenShenQi",
                            e.YingYongBao = "YingYongBao",
                            e.XiaoMi = "XiaoMi",
                            e.GooglePlay = "GooglePlay",
                            e.HuaweiGlobal = "HuaweiGlobal",
                            e.MomoyuAndroid = "MomoyuAndroid"
                    }(n = e.DistributionChannel || (e.DistributionChannel = {}))
            }(o || (o = {})),
            function (e) {
                e.Info = new class {
                    constructor() {
                        this.DebugServerAPI = !1,
                            this.debugLog = !1,
                            this.forbidHttpRequest = !1,
                            this.isPreview = !1,
                            this.appId = "",
                            this.appKey = "",
                            this.platform = e.Platform.Default,
                            this.engine = e.EngineType.Default,
                            this.distributionChannel = e.DistributionChannel.None,
                            this.channelId = "",
                            this.channelKey = "",
                            this.UUID = "",
                            this.underCheck = !1,
                            this.resolution = {
                                width: 0,
                                height: 0
                            },
                            this.sharePath = "",
                            this.openId = "",
                            this.kariquToken = "",
                            this.serverTime = 0,
                            this.clientTime = 0,
                            this.nickname = "",
                            this.avatar = "",
                            this.scene = "",
                            this.sceneWithSourceAppId = "",
                            this.gameInBackground = !1,
                            this.pageList = [],
                            this.shareOption = null,
                            this.shareTimes = 0,
                            this.shareTime = 0,
                            this.withoutRewardVideoAd = !1,
                            this.version = "1.0.0",
                            this.videoTopics = [],
                            this.rewardConfigOriginData = new Map,
                            this.rewardUserData = {
                                time: 0,
                                data: new Map
                            },
                            this.shareData = [{
                                id: "",
                                templateId: "",
                                title: "",
                                url: ""
                            }],
                            this.shareFailTips = ["\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u5230\u7fa4"],
                            this.sendMessageTitle = "",
                            this.sendMessageImg = ""
                    }
                }
            }(o || (o = {})),
            function (e) {
                function o(o) {
                    var i, n, a, s, r, l;
                    let c = null;
                    switch (o) {
                        case e.Platform.Android:
                            c = t.PROXY;
                            break;
                        case e.Platform.WeChat:
                            c = null !== (i = window.wx) && void 0 !== i ? i : {};
                            break;
                        case e.Platform.QQ:
                            c = null !== (n = window.qq) && void 0 !== n ? n : {};
                            break;
                        case e.Platform.iOS:
                            c = t.PROXY;
                            break;
                        case e.Platform.OPPO:
                        case e.Platform.Vivo:
                            c = null !== (a = window.qg) && void 0 !== a ? a : {};
                            break;
                        case e.Platform.ByteDance:
                            c = null !== (s = window.tt) && void 0 !== s ? s : {};
                            break;
                        case e.Platform.Kwaigame:
                            c = null !== (r = window.ks) && void 0 !== r ? r : {};
                            break;
                        case e.Platform.Kuaidianwan:
                            c = {},
                                window.GameAssistantWeb ? (console.log("GameAssistantWeb is ok."),
                                    GameAssistantWeb.onGameLoaded()) : console.log("GameAssistantWeb is not ok.");
                            break;
                        case e.Platform.Hago:
                            c = null !== (l = window.hg) && void 0 !== l ? l : {};
                            break;
                        case e.Platform.WeiYouH5:
                            c = {}
                    }
                    e.PA = new e.PAClass,
                        e.PA.init(c)
                }
                function i(t) {
                    var o, i, n, a, r, u, g, p;
                    if (e.log("init evn", t),
                        e.Info.debugLog = null !== (o = t.debugLog) && void 0 !== o && o,
                        e.Info.isPreview = t.isPreview,
                        e.Info.appId = t.appId,
                        e.Info.appKey = t.appKey,
                        e.Info.platform = t.platform,
                        e.Info.engine = t.engine,
                        e.Info.channelKey = t.channelKey,
                        e.Info.UUID = t.uuid,
                        e.Info.resolution.width = t.resolution.width ? t.resolution.width : 0,
                        e.Info.resolution.height = t.resolution.height ? t.resolution.height : 0,
                        e.Info.sharePath = t.sharePath,
                        e.Info.withoutRewardVideoAd = !!t.withoutRewardVideoAd,
                        e.Info.version = t.version ? t.version : "1.0.0",
                        !e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.WeiYouH5])) {
                        try {
                            let t = null === (i = e.PA.getSystemInfoSync) || void 0 === i ? void 0 : i.call(e.PA);
                            t.windowWidth / t.windowHeight > e.Info.resolution.width / e.Info.resolution.height ? e.Info.resolution.width = Math.round(t.windowWidth * e.Info.resolution.height / t.windowHeight) : e.Info.resolution.height = Math.round(t.windowHeight * e.Info.resolution.width / t.windowWidth)
                        } catch (m) {
                            console.error(m)
                        }
                        s();
                        try {
                            null === (n = e.PA.setKeepScreenOn) || void 0 === n || n.call(e.PA, {
                                keepScreenOn: !0
                            }),
                                e.PA.onShow(() => {
                                    var t, o, i, n, a, s, r, l, u, h, f, g;
                                    if (e.Info.gameInBackground = !1,
                                        e.Info.lastGameTimeUploadTimestamp = Date.now(),
                                        null === (t = e.PA.setKeepScreenOn) || void 0 === t || t.call(e.PA, {
                                            keepScreenOn: !0
                                        }),
                                        null === (o = e.Info.shareOption) || void 0 === o ? void 0 : o.result) {
                                        e.Info.shareTimes++;
                                        let t = null !== (a = null === (i = e.Info.rewardConfigOriginData) || void 0 === i ? void 0 : i.get(null === (n = e.Info.shareOption) || void 0 === n ? void 0 : n.tag)) && void 0 !== a ? a : null === (s = e.Info.rewardConfigOriginData) || void 0 === s ? void 0 : s.get("SCORE_STRATEGY");
                                        try {
                                            let o = null !== (l = null == t ? void 0 : t.shareSuccessRate[Math.min(e.Info.shareTimes - 1, (null === (r = null == t ? void 0 : t.shareSuccessRate) || void 0 === r ? void 0 : r.length) - 1)]) && void 0 !== l ? l : 0
                                                , i = Math.random() < o / 100;
                                            if (!i) {
                                                let o = null !== (h = 1e3 * (null == t ? void 0 : t.shareSuccessTime[Math.min(e.Info.shareTimes - 1, (null === (u = null == t ? void 0 : t.shareSuccessTime) || void 0 === u ? void 0 : u.length) - 1)])) && void 0 !== h ? h : 5e3;
                                                Date.now() - e.Info.shareTime >= o && o >= 0 && (i = !0)
                                            }
                                            try {
                                                e.Info.shareOption.result({
                                                    reward: i
                                                })
                                            } catch (p) { }
                                            i ? (e.Info.shareTimes = 0,
                                                e.Info.shareOption = null) : (null === (g = null === (f = e.Info.shareOption) || void 0 === f ? void 0 : f.showFailTip) || void 0 === g || g) && e.PA.showModal({
                                                    title: "\u63d0\u793a",
                                                    content: d(),
                                                    showCancel: !0,
                                                    cancelText: "\u8fd4\u56de\u6e38\u620f",
                                                    confirmText: "\u53bb\u5206\u4eab",
                                                    success: t => {
                                                        t.cancel ? e.Info.shareOption = null : c(e.Info.shareOption)
                                                    }
                                                })
                                        } catch (m) { }
                                    }
                                }
                                ),
                                e.PA.onHide(() => {
                                    e.Info.gameInBackground = !0,
                                        e.Info.openId && h(),
                                        f()
                                }
                                ),
                                setInterval(() => {
                                    e.Info.gameInBackground || h()
                                }
                                    , 1e3 * Math.max(null !== (a = t.uploadGameTimeIntervals) && void 0 !== a ? a : 10, 10)),
                                setInterval(() => {
                                    e.Info.pageList.length > 0 && (e.Info.pageList[e.Info.pageList.length - 1].time += 1)
                                }
                                    , 1e3),
                                null === (r = e.PA.showShareMenu) || void 0 === r || r.call(e.PA, {
                                    menus: ["shareAppMessage", "shareTimeline"]
                                }),
                                null === (u = e.PA.onShareMessageToFriend) || void 0 === u || u.call(e.PA, e => {
                                    console.log("onShareMessageToFriend:", e.success, e.errMsg)
                                }
                                );
                            let o = (t, o) => {
                                try {
                                    let i = ""
                                        , n = {
                                            id: "",
                                            title: "",
                                            url: ""
                                        }
                                        , a = {};
                                    return "video" == (t = null != t ? t : {
                                        channel: ""
                                    }).channel ? (i = `openid=${e.Info.openId}&tm=${Date.now().toFixed()}&${e.Info.channelKey}=10001`,
                                        a = {
                                            videoTopics: e.Info.videoTopics
                                        },
                                        e.sentLog("\u62cd\u6296\u97f3", null, {
                                            "\u89e6\u53d1\u70b9": o
                                        })) : (n = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)],
                                            e.request({
                                                url: e.getUrl(e.Urls.SaveShare),
                                                method: "POST",
                                                data: {
                                                    Openid: e.Info.openId,
                                                    ShareId: n.id,
                                                    ShareTm: Date.now().toFixed()
                                                }
                                            }),
                                            i = `openid=${e.Info.openId}&shareid=${n.id}&tm=${Date.now().toFixed()}&${e.Info.sharePath}`,
                                            e.sentLog("\u5206\u4eab", null, {
                                                "\u89e6\u53d1\u70b9": o
                                            })),
                                    {
                                        title: n.title,
                                        imageUrl: n.url,
                                        query: i,
                                        extra: a
                                    }
                                } catch (m) {
                                    return console.error(m),
                                        e.sentLog("\u5206\u4eab", null, {
                                            "\u89e6\u53d1\u70b9": o
                                        }),
                                    {
                                        title: "",
                                        imageUrl: "",
                                        query: `openid=${e.Info.openId}&tm=${Date.now().toFixed()}&${"video" == (null == t ? void 0 : t.channel) ? e.Info.channelKey + "=10001" : e.Info.sharePath}`
                                    }
                                }
                            }
                                ;
                            null === (g = e.PA.onShareAppMessage) || void 0 === g || g.call(e.PA, e => o(e, "\u9876\u90e8\u5206\u4eab")),
                                null === (p = e.PA.onShareTimeline) || void 0 === p || p.call(e.PA, () => o(null, "\u5206\u4eab\u670b\u53cb\u5708"))
                        } catch (m) {
                            console.error(m)
                        }
                        l(),
                            e.isPlatform([e.Platform.Android, e.Platform.iOS]) || e.request({
                                url: e.getUrl(e.Urls.GetShareConfig),
                                data: {
                                    Appid: e.Info.appId,
                                    Type: 0
                                },
                                method: "POST",
                                success: t => {
                                    var o, i;
                                    try {
                                        if ((null === (i = null === (o = null == t ? void 0 : t.data) || void 0 === o ? void 0 : o.data) || void 0 === i ? void 0 : i.length) >= 0) {
                                            let o = [];
                                            t.data.data.forEach(e => {
                                                o.push({
                                                    id: e.shareid,
                                                    title: e.title,
                                                    url: e.imageurl
                                                })
                                            }
                                            ),
                                                e.Info.shareData = o,
                                                e.log("ShareContent", e.Info.shareData)
                                        } else
                                            e.log("\u5206\u4eab\u5185\u5bb9\u83b7\u53d6\u5931\u8d25:" + JSON.stringify(t))
                                    } catch (n) { }
                                }
                            })
                    }
                }
                function n(t) {
                    e.Info.openId = t,
                        e.PA.setStorageSync("LocalOpenId", e.Info.openId)
                }
                function a(t) {
                    e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.WeiYouH5, e.Platform.Android, e.Platform.iOS]) ? t("") : e.request({
                        url: e.getUrl(e.Urls.GetUUID),
                        method: "POST",
                        dataType: "\u5176\u4ed6",
                        data: {
                            appid: e.Info.appId
                        },
                        success: e => {
                            try {
                                t(e.data)
                            } catch (o) { }
                        }
                        ,
                        fail: () => {
                            e.PA.showModal({
                                title: "\u63d0\u793a",
                                content: "\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5",
                                showCancel: !1,
                                confirmText: "\u91cd\u8bd5",
                                success: () => {
                                    a(t)
                                }
                            })
                        }
                    })
                }
                function s() {
                    var t, o, i, n;
                    try {
                        let s = e.PA.getLaunchOptionsSync();
                        console.log(`LaunchOption:${JSON.stringify(s)}`),
                            s.scene ? (e.Info.scene = s.scene + "",
                                e.Info.sceneWithSourceAppId = s.scene + "") : s.from && e.isPlatform([e.Platform.Kwaigame]) && (e.Info.scene = s.from + "",
                                    e.Info.sceneWithSourceAppId = s.from + ""),
                            (null === (t = null == s ? void 0 : s.query) || void 0 === t ? void 0 : t[e.Info.channelKey]) ? e.Info.channelId = `${e.Info.channelKey}=${s.query[e.Info.channelKey]}` : e.Info.channelId = null !== (i = null === (o = null == s ? void 0 : s.query) || void 0 === o ? void 0 : o.channel) && void 0 !== i ? i : "",
                            (null == s ? void 0 : s.referrerInfo) && (e.Info.sourceAppid = null !== (n = s.referrerInfo.appId) && void 0 !== n ? n : "",
                                e.Info.sourceAppid.length > 0 && (e.Info.sceneWithSourceAppId = e.Info.scene + "_" + e.Info.sourceAppid)),
                            console.log(`Launch Scene:${e.Info.scene}`),
                            console.log(`Launch Channel:${e.Info.channelId}`),
                            console.log(`Launch sourceAppid:${e.Info.sourceAppid}`)
                    } catch (a) {
                        console.error(a)
                    }
                }
                function r() {
                    var t, o;
                    try {
                        let n = e.PA.getLaunchOptionsSync();
                        e.Info.isPreview && (n = JSON.parse('{ "query": { "shareid": 1 ,"openid":"testopenid","tm":0} }')),
                            (null === (t = null == n ? void 0 : n.query) || void 0 === t ? void 0 : t.shareid) && e.request({
                                url: e.getUrl(e.Urls.UploadClickShare),
                                data: {
                                    openid: e.Info.openId,
                                    sourceOpenid: n.query.openid,
                                    shareId: parseInt(n.query.shareid),
                                    shareTm: null !== (o = n.query.tm) && void 0 !== o ? o : 0
                                },
                                method: "POST",
                                success: e => {
                                    console.log("UPLOAD click share ", e)
                                }
                            })
                    } catch (i) {
                        console.error(i)
                    }
                }
                function l() {
                    console.log("--------------* GA \u57fa\u7840\u914d\u7f6e\u548c\u4fe1\u606f *--------------"),
                        console.log(`Appid is "${e.Info.appId}"`),
                        console.log(`Platform is "${e.Info.platform}"`),
                        console.log(`ChannelKey is "${e.Info.channelKey}"`),
                        console.log(`ChannelID is "${e.Info.channelId}"`),
                        console.log(`SharePath is ${e.Info.sharePath}`),
                        console.log(`UUID is "${e.Info.UUID}"`),
                        console.log(`GameEngine is ${e.Info.engine}`),
                        console.log(`Design resolution is ${JSON.stringify(e.Info.resolution)}`),
                        console.log("--------------* GA \u4f7f\u7528\u57df\u540d\u6e05\u5355 *---------------");
                    let t = new Set;
                    for (let o in e.Urls) {
                        let i = e.getUrl(e.Urls[o]).split("/")
                            , n = i[0] + "//" + i[2];
                        t.has(n) || (t.add(n),
                            console.log(n))
                    }
                    console.log("----------------------------------------------")
                }
                function c(t) {
                    var o, i, n, a, s, r, l;
                    e.Info.shareOption = t,
                        e.Info.shareTime = Date.now();
                    let c = null;
                    e.Info.shareData.length > 0 && (c = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)]),
                        e.Info.isPreview ? (null === (o = e.Info.shareOption) || void 0 === o || o.result({
                            reward: !0
                        }),
                            e.Info.shareOption = null) : (e.PA.shareAppMessage({
                                templateId: null !== (i = c.templateId) && void 0 !== i ? i : "",
                                title: null !== (n = c.title) && void 0 !== n ? n : "",
                                imageUrl: null !== (a = c.url) && void 0 !== a ? a : "",
                                query: `openid=${e.Info.openId}&shareid=${null !== (s = c.id) && void 0 !== s ? s : 0}&tm=${Date.now().toFixed()}&${e.Info.sharePath}${t.query ? "&" : ""}${null !== (r = t.query) && void 0 !== r ? r : ""}`,
                                success: () => {
                                    console.log("\u5206\u4eab\u63a5\u53e3\u6210\u529f\u56de\u8c03\uff0c\u6682\u4e0d\u5f00\u653e")
                                }
                                ,
                                fail: () => {
                                    var t;
                                    null === (t = e.Info.shareOption) || void 0 === t || t.result({
                                        reward: !1
                                    })
                                }
                            }),
                                e.request({
                                    url: e.getUrl(e.Urls.SaveShare),
                                    method: "POST",
                                    data: {
                                        Openid: e.Info.openId,
                                        ShareId: c.id,
                                        ShareTm: Date.now().toFixed()
                                    }
                                }),
                                e.sentLog("\u5206\u4eab", null, {
                                    "\u89e6\u53d1\u70b9": null !== (l = t.tag) && void 0 !== l ? l : "\u672a\u77e5"
                                }))
                }
                function d() {
                    var t;
                    let o = "";
                    return (null === (t = null === e.Info || void 0 === e.Info ? void 0 : e.Info.shareFailTips) || void 0 === t ? void 0 : t.length) > 0 ? (o = e.Info.shareFailTips.shift(),
                        e.Info.shareFailTips.push(o)) : o = "\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u5230\u65b0\u7684\u7fa4",
                        o
                }
                function u(t, o, i) {
                    var a;
                    if (e.isPlatform([e.Platform.Android, e.Platform.OPPO, e.Platform.iOS]))
                        try {
                            i(o.code, "")
                        } catch (s) { }
                    else {
                        let s = "";
                        o.code = null !== (a = o.code) && void 0 !== a ? a : "",
                            Object.getOwnPropertyNames(o).forEach((e, t) => {
                                s += `${0 == t ? "?" : "&"}${e}=${o[e]}`
                            }
                            ),
                            console.log("GetOpenIdUrl:", e.getUrl(e.Urls.GetOpenId) + s),
                            e.request({
                                url: e.getUrl(e.Urls.GetOpenId) + s,
                                method: "GET",
                                success: a => {
                                    var s, r, l, c, d, h, f, g, p, m, v, M, y;
                                    if (console.log("GetOpenid:", JSON.stringify(a)),
                                        (null === (s = null == a ? void 0 : a.data) || void 0 === s ? void 0 : s.openid) ? e.Info.openId = null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.openid : (null === (c = null === (l = a.data) || void 0 === l ? void 0 : l.data) || void 0 === c ? void 0 : c.open_id) ? e.Info.openId = null === (h = null === (d = a.data) || void 0 === d ? void 0 : d.data) || void 0 === h ? void 0 : h.open_id : (null === (f = a.data) || void 0 === f ? void 0 : f.anonymous_openid) ? e.Info.openId = null === (g = a.data) || void 0 === g ? void 0 : g.anonymous_openid : (null === (m = null === (p = null == a ? void 0 : a.data) || void 0 === p ? void 0 : p.data) || void 0 === m ? void 0 : m.openId) && (e.Info.openId = a.data.data.openId),
                                        (null === (M = null === (v = null == a ? void 0 : a.data) || void 0 === v ? void 0 : v.data) || void 0 === M ? void 0 : M.nickName) && (e.Info.nickname = a.data.data.nickName),
                                        "" != e.Info.openId) {
                                        n(e.Info.openId);
                                        try {
                                            i(e.Info.openId, null === (y = a.data) || void 0 === y ? void 0 : y.session_key)
                                        } catch (P) { }
                                    } else
                                        t ? e.PA.showModal({
                                            title: "\u63d0\u793a",
                                            content: "\u83b7\u53d6\u767b\u5f55\u6570\u636e\u5931\u8d25(\u6570\u636e\u5f02\u5e38)\uff0c\u70b9\u51fb\u91cd\u8bd5",
                                            showCancel: !1,
                                            confirmText: "\u91cd\u8bd5",
                                            success: () => {
                                                u(t, o, i)
                                            }
                                        }) : i("", "")
                                }
                                ,
                                fail: () => {
                                    t ? e.PA.showModal({
                                        title: "\u63d0\u793a",
                                        content: "\u83b7\u53d6\u767b\u5f55\u6570\u636e\u5931\u8d25(\u8bf7\u6c42\u5931\u8d25)\uff0c\u70b9\u51fb\u91cd\u8bd5",
                                        showCancel: !1,
                                        confirmText: "\u91cd\u8bd5",
                                        success: () => {
                                            u(t, o, i)
                                        }
                                    }) : i("", "")
                                }
                            })
                    }
                }
                function h() {
                    let t = Math.round((Date.now() - e.Info.lastGameTimeUploadTimestamp) / 1e3);
                    e.sentLog("onlinetime", t, {
                        scene: e.Info.sceneWithSourceAppId
                    }),
                        e.Info.lastGameTimeUploadTimestamp = Date.now()
                }
                function f() {
                    try {
                        e.Info.rewardUserData.time = Date.now();
                        let o = {
                            time: 0,
                            data: []
                        };
                        o.time = e.Info.rewardUserData.time,
                            e.Info.rewardUserData.data.forEach((e, t) => {
                                o.data.push({
                                    tag: t,
                                    currIndex: e.currIndex,
                                    currCount: e.currCount
                                })
                            }
                            ),
                            e.PA.setStorageSync("RewardUserData", JSON.stringify(o))
                    } catch (t) {
                        console.error(t)
                    }
                }
                function g(t) {
                    t.forEach(t => {
                        e.Info.rewardConfigOriginData.set(t.tag, {
                            rule: t.rule,
                            shareSuccessRate: t.shareRate,
                            shareSuccessTime: t.shareTime
                        })
                    }
                    ),
                        e.log("RewardConfig ServerData is ", e.Info.rewardConfigOriginData),
                        p()
                }
                function p() {
                    try {
                        let i = e.PA.getStorageSync("RewardUserData");
                        if (!i || "" == i)
                            throw "loadRewardUserData:\u672c\u5730RewardUserData\u4e0d\u5b58\u5728";
                        try {
                            let o = JSON.parse(i);
                            if (!(o.time > e.Info.rewardUserData.time && e.isToday(o.time)))
                                throw "\u6570\u636e\u5df2\u8fc7\u671f";
                            if (e.Info.rewardUserData.time = o.time,
                                e.Info.rewardUserData.data.clear(),
                                o.data.length <= 0)
                                throw "\u6570\u636e\u4e3a\u7a7a";
                            o.data.forEach(t => {
                                e.Info.rewardUserData.data.set(t.tag, {
                                    currIndex: t.currIndex,
                                    currCount: t.currCount
                                })
                            }
                            ),
                                e.Info.rewardConfigOriginData.forEach((t, o) => {
                                    e.Info.rewardUserData.data.has(o) || e.Info.rewardUserData.data.set(o, {
                                        currIndex: 0,
                                        currCount: 0
                                    })
                                }
                                )
                        } catch (t) {
                            throw "loadRewardUserData:\u672c\u5730RewardUserData\u6570\u636e\u89e3\u6790\u5931\u8d25"
                        }
                    } catch (o) {
                        e.log(o),
                            e.Info.rewardUserData.time = Date.now(),
                            e.Info.rewardUserData.data.clear(),
                            e.Info.rewardConfigOriginData.forEach((t, o) => {
                                t.rule.length > 0 && e.Info.rewardUserData.data.set(o, {
                                    currIndex: 0,
                                    currCount: 0
                                })
                            }
                            )
                    }
                    e.log("RewardUserData", e.Info.rewardUserData)
                }
                function m(t) {
                    for (let o = 0; o < e.Info.pageList.length; o++)
                        if (e.Info.pageList[o].page == t) {
                            let t = e.Info.pageList[o];
                            return e.Info.pageList.splice(o, 1),
                                t
                        }
                    return null
                }
                function v(t, o, i, n) {
                    if (!t)
                        return void console.error("pageName is empty!");
                    if (!o)
                        return void console.error("tag is empty!");
                    let a = o
                        , s = e.Info.pageList[e.Info.pageList.length - 1]
                        , r = !1;
                    s && (s.map ? s.map.get(i) || (s.map.set(i, 1),
                        r = !0) : (s.map = new Map,
                            s.map.set(i, 1),
                            r = !0));
                    let l = "video" == i ? a : null
                        , c = "other" != i ? s.time : 0
                        , d = {
                            page: t,
                            eventType: "click",
                            posType: i,
                            pos: l,
                            isFirstClick: r ? 1 : 0
                        };
                    if (n && "object" == typeof n)
                        for (let e in n)
                            null == d[e] ? d[e] = n[e] : console.warn(`${e}\u662f\u4fdd\u7559key,\u8bf7\u4f7f\u7528\u5176\u5b83key`);
                    e.sentLog(o, c, d)
                }
                window.GA = e,
                    e.PA = null,
                    e.init = function (n) {
                        var s, r, l, c, d, u, h;
                        return console.log("GA3 Version:" + e.version + " buildTime:" + e.buildTime),
                            "" == e.Info.appId ? (e.Info.debugLog = null !== (s = n.debugLog) && void 0 !== s && s,
                                e.Info.isPreview = n.isPreview,
                                e.Info.engine = n.engine,
                                t.isAPP(n.platform) && (n.platform = t.getPlatform()),
                                e.Info.platform = n.platform,
                                o(n.platform),
                                t.isAPP() && (n.isPreview || (n.appId = null !== (c = null === (l = null === (r = e.PA.getLaunchOptionsSync()) || void 0 === r ? void 0 : r.query) || void 0 === l ? void 0 : l.appId) && void 0 !== c ? c : e.Info.appId),
                                    e.Info.distributionChannel = null !== (h = null === (u = null === (d = e.PA.getLaunchOptionsSync()) || void 0 === d ? void 0 : d.query) || void 0 === u ? void 0 : u.distributionChannel) && void 0 !== h ? h : e.Info.distributionChannel),
                                new Promise(o => {
                                    t.setSplashAdEndListener(() => {
                                        i(n),
                                            t.isAPP() ? o(null) : (e.isPlatform([e.Platform.WeChat, e.Platform.ByteDance, e.Platform.OPPO]) && e.AdTracking.init(),
                                                a(t => {
                                                    e.Info.underCheck = t == e.Info.UUID,
                                                        e.log("Server UUID : ", t, " UnderCheck:", e.Info.underCheck),
                                                        o(null)
                                                }
                                                ))
                                    }
                                    )
                                }
                                )) : new Promise((e, t) => {
                                    t("GA has been initialization already.")
                                }
                                )
                    }
                    ,
                    e.ENABLE_NEXT_VERSION = !1,
                    e.setUserId = function (t) {
                        var o;
                        e.Info.uid = t,
                            null === (o = null === e.PA || void 0 === e.PA ? void 0 : e.PA.setUserId) || void 0 === o || o.call(e.PA, e.Info.uid.toFixed()),
                            e.request({
                                url: e.getUrl(e.Urls.GetRewardConfig),
                                data: {
                                    appid: e.Info.appId,
                                    userId: e.Info.uid
                                },
                                method: "POST",
                                success: t => {
                                    var o;
                                    0 == (null === (o = null == t ? void 0 : t.data) || void 0 === o ? void 0 : o.code) ? g(t.data.data) : e.error("load reward config error ", t)
                                }
                            })
                    }
                    ,
                    e.setOpenId = n,
                    e.setServerTime = function (t) {
                        e.Info.serverTime = t,
                            e.Info.clientTime = Date.now()
                    }
                    ,
                    e.checkShareInfo = r,
                    e.exit = function () {
                        e.PA.exitMiniProgram()
                    }
                    ,
                    e.rewardOperation = function (t) {
                        t.byVideo ? e.Info.withoutRewardVideoAd ? t.result({
                            reward: !0
                        }) : e.showVideoAd(t) : c({
                            tag: t.tag,
                            page: t.page,
                            result: o => {
                                (null == o ? void 0 : o.reward) ? (e.Info.rewardUserData.data.has(t.tag) && e.Info.rewardUserData.data.get(t.tag).currCount++,
                                    t.result({
                                        reward: !0
                                    })) : t.result({
                                        reward: !1
                                    })
                            }
                        })
                    }
                    ,
                    e.randomShare = c,
                    e.getOpenId = function t(o, i, n) {
                        var a;
                        let s = (t, i) => {
                            if (e.Info.openId = t,
                                e.Info.session_key = i,
                                e.Info.openId && "" != e.Info.openId) {
                                let t = [{
                                    eventId: "GotOpenId",
                                    extraNum: 0,
                                    detail: JSON.stringify({
                                        channel: e.Info.channelId,
                                        version: e.Info.version,
                                        appVersion: e.PA.getSystemInfoSync().version
                                    })
                                }, {
                                    eventId: "LaunchScene",
                                    extraNum: 0,
                                    detail: JSON.stringify({
                                        scene: e.Info.sceneWithSourceAppId
                                    })
                                }]
                                    , o = e.PA.getLaunchOptionsSync();
                                if (e.isPlatform(e.Platform.WeChat) && !e.Info.isPreview && [1177, 1184, 1195, 1208].indexOf(o.scene) >= 0)
                                    try {
                                        e.PA.getChannelsShareKey({
                                            success: e => {
                                                var o, i, n, a, s, r, l;
                                                (null == e ? void 0 : e.sharerOpenId) && t.push({
                                                    eventId: "LaunchFromVideoChannel",
                                                    extraNum: 0,
                                                    detail: JSON.stringify({
                                                        sharerOpenId: null !== (o = null == e ? void 0 : e.sharerOpenId) && void 0 !== o ? o : "",
                                                        finderNickname: null !== (n = null === (i = null == e ? void 0 : e.promoter) || void 0 === i ? void 0 : i.finderNickname) && void 0 !== n ? n : "",
                                                        promoterId: null !== (s = null === (a = null == e ? void 0 : e.promoter) || void 0 === a ? void 0 : a.promoterId) && void 0 !== s ? s : "",
                                                        promoterOpenId: null !== (l = null === (r = null == e ? void 0 : e.promoter) || void 0 === r ? void 0 : r.promoterOpenId) && void 0 !== l ? l : ""
                                                    })
                                                })
                                            }
                                        })
                                    } catch (n) {
                                        console.error(n)
                                    }
                                e.sentLogs(t),
                                    r()
                            }
                            o(t, i)
                        }
                            ;
                        if (e.Info.isPreview || e.isPlatform(e.Platform.WeiYouH5))
                            try {
                                e.Info.openId = localStorage.getItem("user_id"),
                                    e.Info.openId || (e.Info.openId = `Test ${Date.now()}${(1e8 * Math.random()).toFixed()}`,
                                        localStorage.setItem("user_id", e.Info.openId)),
                                    s(e.Info.openId, "TestSessionKey")
                            } catch (l) {
                                console.error(l)
                            }
                        else if (e.isPlatform(e.Platform.Kuaidianwan))
                            GameAssistantWeb.login((t, o) => {
                                e.Info.openId = o,
                                    s(o, "")
                            }
                            );
                        else {
                            let r = null !== (a = e.PA.getStorageSync("LocalOpenId")) && void 0 !== a ? a : "";
                            r && !n && e.isPlatform([e.Platform.WeChat]) ? s(r, "") : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.isLogin() ? window.h5api.login(t => {
                                e.Info.uid = parseInt(t.uId),
                                    e.Info.nickname = t.userName,
                                    s(t.uId, "")
                            }
                            ) : s("LocalOpenId", "") : e.isPlatform(e.Platform.ZuiYou) ? e.Info.appKey ? window.__XCgs.call("init")(e.Info.appKey, (t, o) => {
                                t ? console.error(t.message) : (e.Info.openId = o.uid,
                                    s(o.uid, ""))
                            }
                            ) : console.log("appKey is null") : e.PA.login({
                                force: !1,
                                success: t => {
                                    console.log(`Platform ${e.Info.platform} login:${JSON.stringify(t)}`);
                                    let o = e.PA.getSystemInfoSync();
                                    if (e.isPlatform(e.Platform.Kwaigame))
                                        s(t.gameUserId, t.gameToken);
                                    else {
                                        let n = {};
                                        e.isPlatform([e.Platform.ByteDance]) ? n = {
                                            code: t.code,
                                            anonymous_code: t.anonymousCode
                                        } : e.isPlatform([e.Platform.LianShangMiniGame, e.Platform.Android, e.Platform.iOS]) ? n = {
                                            code: t.code
                                        } : e.isPlatform(e.Platform.OPPO) ? (e.Info.nickname = t.nickName,
                                            e.Info.avatar = t.avatar,
                                            e.Info.token = t.token,
                                            n = {
                                                code: t.uid
                                            }) : e.isPlatform(e.Platform.Vivo) ? (e.Info.token = t.code,
                                                n = {
                                                    token: t.code
                                                }) : e.isPlatform(e.Platform.Hago) ? (console.log("systemInfo:", JSON.stringify(o)),
                                                    n = {
                                                        code: t.code,
                                                        countryCode: o.countryCode
                                                    }) : n = {
                                                        js_code: t.code
                                                    },
                                            u(i, n, s)
                                    }
                                }
                                ,
                                fail: i => {
                                    console.log(i),
                                        e.PA.showModal({
                                            title: "\u63d0\u793a",
                                            content: "\u83b7\u53d6\u767b\u5f55\u6570\u636e\u5931\u8d25(\u5e73\u53f0\u6388\u6743\u5931\u8d25)\uff0c\u70b9\u51fb\u91cd\u8bd5",
                                            showCancel: !1,
                                            confirmText: "\u91cd\u8bd5",
                                            success: () => {
                                                t(o)
                                            }
                                        })
                                }
                            })
                        }
                    }
                    ,
                    e.isNextRewardVideo = function (t) {
                        let o = !0;
                        try {
                            if (!e.Info.underCheck) {
                                let i = e.Info.rewardConfigOriginData.get(t);
                                (null == i || i.rule.length <= 0) && (i = e.Info.rewardConfigOriginData.get("SCORE_STRATEGY"));
                                let n = e.Info.rewardUserData.data.get(t);
                                for (null == n && (n = e.Info.rewardUserData.data.get("SCORE_STRATEGY")); n.currCount >= i.rule[n.currIndex].count;)
                                    if (n.currIndex += 1,
                                        n.currCount = 0,
                                        n.currIndex >= i.rule.length) {
                                        n.currIndex = 0,
                                            n.currCount = 0;
                                        break
                                    }
                                o = "video" == i.rule[n.currIndex].type
                            }
                        } catch (i) {
                            o = !0
                        }
                        return o
                    }
                    ,
                    e.loadRewardUserLocalData = p,
                    e.getNavigationList = function (t, o, i) {
                        return new Promise((n, a) => {
                            e.request({
                                url: e.getUrl(e.Urls.GetNativationConfig),
                                method: "POST",
                                data: {
                                    userId: e.Info.uid,
                                    type: t,
                                    num: o,
                                    excludes: i
                                },
                                success: e => {
                                    if (0 == e.data.code) {
                                        let t = [];
                                        e.data.data.forEach(e => {
                                            t.push({
                                                id: e.redirectId,
                                                appid: e.appid,
                                                name: e.name,
                                                is_open_code: !1,
                                                path: e.path,
                                                icon: e.icon,
                                                qr_code: ""
                                            })
                                        }
                                        ),
                                            n(t)
                                    } else
                                        a(e)
                                }
                                ,
                                fail: e => {
                                    a(e)
                                }
                            })
                        }
                        )
                    }
                    ,
                    e.enterPage = function (t) {
                        var o, i;
                        e.Info.pageList.push({
                            page: t.page,
                            time: 0
                        }),
                            i = {
                                page: t.page,
                                existRedirect: t.existRedirect ? 1 : 0,
                                existVideo: t.existVideo ? 1 : 0,
                                existBanner: t.existBanner ? 1 : 0,
                                openType: null !== (o = t.openType) && void 0 !== o ? o : 0
                            },
                            e.sentLog("EnterPage", void 0, i)
                    }
                    ,
                    e.closePage = function (t) {
                        let o = m(t.page);
                        o && e.sentLog("ClosePage", o.time, {
                            page: t.page
                        })
                    }
                    ,
                    e.videoRequestEvent = function (t, o) {
                        t || console.error("pageName is empty!");
                        let i = [];
                        var n;
                        o.forEach(e => {
                            i.push({
                                eventId: "VideoRequest",
                                detail: JSON.stringify({
                                    page: t,
                                    type: e
                                })
                            })
                        }
                        ),
                            n = i,
                            e.sentLogs(n)
                    }
                    ,
                    e.clickEventConcatPage = function (e, t, o, i) {
                        v(e, `${e}-${t}`, o, i)
                    }
                    ,
                    e.clickEvent = v,
                    e.isDefault = function () {
                        return e.isPlatform(e.Platform.Default)
                    }
                    ,
                    e.isWeChat = function () {
                        return e.isPlatform(e.Platform.WeChat)
                    }
                    ,
                    e.isQQ = function () {
                        return e.isPlatform(e.Platform.QQ)
                    }
                    ,
                    e.isOPPO = function () {
                        return e.isPlatform(e.Platform.OPPO)
                    }
                    ,
                    e.isVivo = function () {
                        return e.isPlatform(e.Platform.Vivo)
                    }
                    ,
                    e.isKuaiDianWan = function () {
                        return e.isPlatform(e.Platform.Kuaidianwan)
                    }
                    ,
                    e.isQuTouTiao = function () {
                        return e.isPlatform(e.Platform.QuTouTiao)
                    }
                    ,
                    e.isQuTouTiaoAndroid = function () {
                        return e.isPlatform(e.Platform.QuTouTiaoAndroid)
                    }
                    ,
                    e.isByteDance = function () {
                        return e.isPlatform(e.Platform.ByteDance)
                    }
                    ,
                    e.isYueYou = function () {
                        return e.isPlatform(e.Platform.YueYou)
                    }
                    ,
                    e.isKuaiKan = function () {
                        return e.isPlatform(e.Platform.KuaiKan)
                    }
                    ,
                    e.isBaoQu = function () {
                        return e.isPlatform(e.Platform.BaoQu)
                    }
                    ,
                    e.isAndroid = function () {
                        return e.isPlatform(e.Platform.Android)
                    }
                    ,
                    e.isiOS = function () {
                        return e.isPlatform(e.Platform.iOS)
                    }
                    ,
                    e.isUCMiniGame = function () {
                        return e.isPlatform(e.Platform.UCMiniGame)
                    }
                    ,
                    e.isLianShangMiniGame = function () {
                        return e.isPlatform(e.Platform.LianShangMiniGame)
                    }
                    ,
                    e.isKwaigame = function () {
                        return e.isPlatform(e.Platform.Kwaigame)
                    }
                    ,
                    e.isM4399MiniGame = function () {
                        return e.isPlatform(e.Platform.M4399MiniGame)
                    }
                    ,
                    e.isZuiYou = function () {
                        return e.isPlatform(e.Platform.ZuiYou)
                    }
                    ,
                    e.isNative = function () {
                        return e.isPlatform(e.Platform.iOS) || e.isPlatform(e.Platform.Android)
                    }
                    ,
                    e.isOppoAndroid = function () {
                        return e.isPlatform(e.Platform.Android) && e.Info.distributionChannel == e.DistributionChannel.OPPO
                    }
            }(o || (o = {})),
            function (e) {
                e.PAClass = class {
                    constructor() {
                        this.platformObject = null,
                            this.launchOptions = null,
                            this.selfShowToast = null
                    }
                    init(e) {
                        null == e && console.log("GA PlatformApi init error: platformObject is null"),
                            this.syncUnsupportMethod(e),
                            this.platformObject = e
                    }
                    syncUnsupportMethod(t) {
                        try {
                            let i = [];
                            if (e.Info.isPreview || e.isPlatform([e.Platform.Kuaidianwan, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]))
                                i.push("getSetting", "showLoading", "hideLoading", "createUserInfoButton", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "setKeepScreenOn", "showShareMenu", "loadSubpackage", "onShareMessageToFriend", "onShareAppMessage", "saveAppToDesktop", "initGameBannerAd", "addColorSign", "addRecentColorSign", "subscribeAppMsg", "onShareTimeline", "vibrateShort", "vibrateLong");
                            else if (e.isPlatform([e.Platform.Android, e.Platform.iOS]))
                                Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e => {
                                    null == this[e] && (this[e] = (...o) => t[e](...o))
                                }
                                ),
                                    Object.getOwnPropertyNames(t).forEach(e => {
                                        null == this[e] && "function" == typeof t[e] && (this[e] = (...o) => t[e](...o))
                                    }
                                    );
                            else if (t) {
                                Object.getOwnPropertyNames(t).forEach(e => {
                                    try {
                                        null == this[e] && "function" == typeof t[e] && (this[e] = t[e])
                                    } catch (o) {
                                        console.error(o)
                                    }
                                }
                                ),
                                    i.push("showNativeAd", "hideNativeAd");
                                for (let e in t)
                                    try {
                                        null == this[e] && (this[e] = t[e])
                                    } catch (o) {
                                        console.error(o)
                                    }
                            }
                            i.forEach(e => {
                                this[e] = () => {
                                    console.log(`Preview \u6682\u4e0d\u652f\u6301 ${e}`)
                                }
                            }
                            )
                        } catch (o) {
                            console.error(o)
                        }
                    }
                    addUnsupportMethods(t, o) {
                        e.isPlatform(t) && o.forEach(e => {
                            this[e] = () => {
                                console.log(`${t} \u6682\u4e0d\u652f\u6301 ${e}`)
                            }
                        }
                        )
                    }
                    onShow(t) {
                        var o, i;
                        e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (o = cc.game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.on(cc.game.EVENT_SHOW, t),
                            (null === (i = cc.Game) || void 0 === i ? void 0 : i.EVENT_SHOW) && cc.game.on(cc.Game.EVENT_SHOW, t)) : e.log("laya onShow \u6682\u672a\u5b9e\u73b0") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onShow(t) : this.platformObject.onShow(t)
                    }
                    offShow(t) {
                        var o, i;
                        e.isPlatform([e.Platform.Android, e.Platform.iOS]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (o = cc.game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.off(cc.game.EVENT_SHOW, t),
                            (null === (i = cc.Game) || void 0 === i ? void 0 : i.EVENT_SHOW) && cc.game.off(cc.Game.EVENT_SHOW, t)) : e.log("laya offShow \u6682\u672a\u5b9e\u73b0") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offShow(t) : this.platformObject.offShow(t)
                    }
                    onHide(t) {
                        var o, i;
                        e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (o = cc.game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.on(cc.game.EVENT_HIDE, t),
                            (null === (i = cc.Game) || void 0 === i ? void 0 : i.EVENT_HIDE) && cc.game.on(cc.Game.EVENT_HIDE, t)) : e.log("laya onhide \u6682\u672a\u5b9e\u73b0") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onHide(t) : this.platformObject.onHide(t)
                    }
                    offHide(t) {
                        var o, i;
                        e.isPlatform([e.Platform.Android, e.Platform.iOS]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (o = cc.game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.off(cc.game.EVENT_HIDE, t),
                            (null === (i = cc.Game) || void 0 === i ? void 0 : i.EVENT_HIDE) && cc.game.off(cc.Game.EVENT_HIDE, t)) : e.log("laya offHide \u6682\u672a\u5b9e\u73b0") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offHide(t) : this.platformObject.offHide(t)
                    }
                    createCustomAd(t) {
                        var o, i;
                        if (e.isPlatform([e.Platform.Vivo])) {
                            let e = {
                                posId: t.adUnitId,
                                style: {
                                    left: null === (o = t.style) || void 0 === o ? void 0 : o.left,
                                    top: null === (i = t.style) || void 0 === i ? void 0 : i.top
                                }
                            };
                            return this.platformObject.createCustomAd(e)
                        }
                        return this.platformObject.createCustomAd(t)
                    }
                    getLaunchOptionsSync() {
                        return e.Info.isPreview || e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Kuaidianwan, e.Platform.Hago, e.Platform.WeiYouH5]) ? {
                            path: "",
                            query: {},
                            referrerInfo: {
                                appId: "",
                                extraData: {}
                            },
                            scene: 0,
                            shareTicket: ""
                        } : e.isPlatform([e.Platform.OPPO]) ? null != this.platformObject.getEnterOptionsSync ? this.platformObject.getEnterOptionsSync() : {
                            path: "",
                            query: {},
                            referrerInfo: {
                                appId: "",
                                extraData: {}
                            },
                            scene: 0,
                            shareTicket: ""
                        } : this.platformObject.getLaunchOptionsSync()
                    }
                    getSystemInfoSync() {
                        return null == e.Info.systemInfo && (e.Info.isPreview || e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Kuaidianwan, e.Platform.WeiYouH5]) ? e.Info.systemInfo = {
                            SDKVersion: "",
                            albumAuthorized: !1,
                            benchmarkLevel: 100,
                            bluetoothEnabled: !1,
                            brand: "Browser",
                            cameraAuthorized: !1,
                            fontSizeSetting: 0,
                            language: "zh-cn",
                            locationAuthorized: !1,
                            locationEnabled: !1,
                            microphoneAuthorized: !1,
                            model: "Browser",
                            notificationAlertAuthorized: !1,
                            notificationAuthorized: !1,
                            notificationBadgeAuthorized: !1,
                            notificationSoundAuthorized: !1,
                            pixelRatio: 1,
                            platform: "Browser",
                            screenHeight: e.Info.resolution.height,
                            screenWidth: e.Info.resolution.width,
                            statusBarHeight: 0,
                            system: "iOS",
                            version: "",
                            wifiEnabled: !1,
                            windowHeight: e.Info.resolution.height,
                            windowWidth: e.Info.resolution.width,
                            designPixelRatio: 1,
                            appName: "",
                            safeArea: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: e.Info.resolution.width,
                                height: e.Info.resolution.height
                            }
                        } : e.Info.systemInfo = this.platformObject.getSystemInfoSync(),
                            e.Info.systemInfo.windowHeight / e.Info.systemInfo.windowWidth < 1.5 ? e.Info.systemInfo.designPixelRatio = e.Info.resolution.height / e.Info.systemInfo.windowHeight : e.Info.systemInfo.designPixelRatio = e.Info.resolution.width / e.Info.systemInfo.windowWidth),
                            e.Info.systemInfo
                    }
                    exitMiniProgram() {
                        var t;
                        try {
                            (null !== (t = this.platformObject.exitMiniProgram) && void 0 !== t ? t : this.platformObject.exitApplication)()
                        } catch (o) {
                            e.error(o)
                        }
                    }
                    loadSubpackage(t) {
                        return this.platformObject && this.platformObject.loadSubpackage ? this.platformObject.loadSubpackage(t) : (e.UnsupportLog("loadSubpackage"),
                            null)
                    }
                    createRewardedVideoAd(t) {
                        return e.isPlatform(e.Platform.Vivo) && (t.posId = t.adUnitId),
                            this.platformObject.createRewardedVideoAd(t)
                    }
                    createInterstitialAd(t) {
                        return e.isPlatform(e.Platform.OPPO) ? this.platformObject.createInsertAd(t) : e.isPlatform(e.Platform.Vivo) ? (t.posId = t.adUnitId,
                            this.platformObject.createInterstitialAd(t)) : this.platformObject.createInterstitialAd(t)
                    }
                    saveAppToDesktop(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.saveAppToDesktop(t)
                    }
                    addColorSign(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.addColorSign(t)
                    }
                    addRecentColorSign(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.addRecentColorSign(t)
                    }
                    isColorSignExistSync() {
                        return !!e.isPlatform(e.Platform.QQ) && this.platformObject.isColorSignExistSync()
                    }
                    getLanguage() {
                        return this.platformObject.getLanguage ? this.platformObject.getLanguage() : "zh-CN"
                    }
                    initGameBannerAd(t, o, i = !0, n) {
                        if (e.isPlatform(e.Platform.OPPO)) {
                            let a, s = this.platformObject.getSystemInfoSync().platformVersionCode;
                            return n || (n = {
                                left: 100 / this.getSystemInfoSync().designPixelRatio,
                                top: (e.Info.resolution.height - 200) / this.getSystemInfoSync().designPixelRatio,
                                orientation: "horizontal"
                            }),
                                s >= 1090 && !i && o ? a = this.platformObject.createGameBannerAd({
                                    adUnitId: o,
                                    style: n
                                }) : s >= 1076 && (a = this.platformObject.createGameBannerAd({
                                    adUnitId: t
                                })),
                                a
                        }
                    }
                    showInterstitialAd() {
                        e.isPlatform(e.Platform.Android) ? this.platformObject.showInterstitialAd() : e.isPlatform(e.Platform.iOS) && this.platformObject.showInterstitialAd()
                    }
                    setShowToast(e) {
                        this.selfShowToast = e
                    }
                    showToast(t) {
                        e.Info.isPreview || e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) ? e.log("showToast:", t.title) : this.selfShowToast ? this.selfShowToast(t) : e.isPlatform(e.Platform.Vivo) ? this.platformObject.showToast({
                            message: t.title,
                            duration: t.duration
                        }) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showToast(t.title) : this.platformObject.showToast(t)
                    }
                    showModal(t) {
                        var o, i;
                        if (e.Info.isPreview || e.isPlatform([e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]))
                            e.log("showModal:" + t.content),
                                t.success({
                                    confirm: !1 === t.showCancel,
                                    cancel: 0 != t.showCancel
                                });
                        else {
                            if (e.isPlatform(e.Platform.Vivo)) {
                                let e = [];
                                return e.push({
                                    text: null !== (o = t.confirmText) && void 0 !== o ? o : "\u786e\u5b9a",
                                    color: t.confirmColor
                                }),
                                    t.showCancel && e.push({
                                        text: null !== (i = t.cancelText) && void 0 !== i ? i : "\u53d6\u6d88",
                                        color: t.cancelColor
                                    }),
                                    this.platformObject.showDialog({
                                        title: t.title,
                                        message: t.content,
                                        buttons: e,
                                        success: e => {
                                            0 == e.index ? t.success({
                                                confirm: !0,
                                                cancel: !1
                                            }) : 1 == e.index ? t.success({
                                                confirm: !1,
                                                cancel: !0
                                            }) : t.success({
                                                confirm: !1,
                                                cancel: !1
                                            })
                                        }
                                        ,
                                        cancel: t.fail,
                                        complete: t.complete
                                    })
                            }
                            if (!e.isPlatform(e.Platform.Kuaidianwan))
                                return this.platformObject.showModal(t);
                            GameAssistantWeb.showModal(t.title, t.content, t.confirmText, t.cancelText, (e, o) => {
                                t.success({
                                    confirm: e,
                                    cancel: o
                                })
                            }
                            )
                        }
                    }
                    showLoading(t) {
                        if (!e.isPlatform(e.Platform.Vivo))
                            return this.platformObject.showLoading(t);
                        this.platformObject.showLoading({
                            message: t.title,
                            success: t.success,
                            cancel: t.fail,
                            complete: t.complete
                        })
                    }
                    getMenuButtonBoundingClientRect() {
                        var t;
                        return e.isPlatform(e.Platform.OPPO) ? {
                            top: this.getSystemInfoSync().statusBarHeight,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        } : (null === (t = this.platformObject) || void 0 === t ? void 0 : t.getMenuButtonBoundingClientRect) ? this.platformObject.getMenuButtonBoundingClientRect() : {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    shareAppMessage(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.share({
                            success: t.success,
                            fail: t.fail,
                            cancel: t.fail
                        }) : (t.extra && (t.extra.hashtag_list && null == t.extra.videoTopics ? t.extra.videoTopics = t.extra.hashtag_list : t.extra.videoTopics && null == t.extra.hashtag_list && (t.extra.hashtag_list = t.extra.videoTopics)),
                            this.platformObject.shareAppMessage(t))
                    }
                    setStorageSync(t, o) {
                        e.isPlatform(e.Platform.Vivo) ? this.platformObject.setStorageSync({
                            key: t,
                            value: o
                        }) : e.isPlatform(e.Platform.OPPO) ? localStorage.setItem(t, o) : e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.setItem(t, o) : e.isEngine(e.EngineType.LayaAir) && localStorage.setItem(t, o) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.setStorage(t, o) : this.platformObject.setStorageSync(t, o)
                    }
                    setStorage(t) {
                        var o;
                        if (e.isPlatform(e.Platform.Vivo))
                            return this.platformObject.setStorage({
                                key: t.key,
                                value: t.data,
                                success: t.success,
                                fail: t.fail,
                                complete: t.complete
                            });
                        if (e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator)) {
                                cc.sys.localStorage.setItem(t.key, t.data);
                                try {
                                    t.success()
                                } catch (i) { }
                            } else if (e.isEngine(e.EngineType.LayaAir)) {
                                localStorage.setItem(t.key, t.data);
                                try {
                                    t.success()
                                } catch (n) { }
                            }
                        } else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan))
                                return this.platformObject.setStorage(t);
                            GameAssistantWeb.setStorage(t.key, t.data),
                                null === (o = t.success) || void 0 === o || o.call(t)
                        }
                    }
                    removeStorageSync(t) {
                        if (e.isPlatform(e.Platform.Vivo))
                            return this.platformObject.deleteStorageSync({
                                key: t
                            });
                        if (e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview)
                            e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.removeItem(t) : e.isEngine(e.EngineType.LayaAir) && localStorage.removeItem(t);
                        else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan))
                                return this.platformObject.removeStorageSync(t);
                            GameAssistantWeb.removeStorage(t)
                        }
                    }
                    removeStorage(t) {
                        var o;
                        if (e.isPlatform(e.Platform.Vivo))
                            return this.platformObject.deleteStorage(t);
                        if (e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator)) {
                                cc.sys.localStorage.removeItem(t.key);
                                try {
                                    t.success()
                                } catch (i) { }
                            } else if (e.isEngine(e.EngineType.LayaAir)) {
                                localStorage.removeItem(t.key);
                                try {
                                    t.success()
                                } catch (n) { }
                            }
                        } else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan))
                                return this.platformObject.removeStorage(t);
                            GameAssistantWeb.removeStorage(t.key),
                                null === (o = t.success) || void 0 === o || o.call(t)
                        }
                    }
                    getStorageSync(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.getStorageSync({
                            key: t
                        }) : e.isPlatform(e.Platform.OPPO) ? localStorage.getItem(t) : e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.getItem(t) : e.isEngine(e.EngineType.LayaAir) ? localStorage.getItem(t) : void 0 : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.getStorage(t) : e.isPlatform(e.Platform.Hago) ? null : this.platformObject.getStorageSync(t)
                    }
                    getStorage(t) {
                        var o;
                        if (this.platformObject.getStorage)
                            return this.platformObject.getStorage(t);
                        if (e.isPlatform([e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago, e.Platform.WeiYouH5]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator))
                                try {
                                    t.success(cc.sys.localStorage.getItem(t.key))
                                } catch (i) { }
                            else if (e.isEngine(e.EngineType.LayaAir))
                                try {
                                    t.success(localStorage.getItem(t.key))
                                } catch (n) { }
                        } else if (e.isPlatform(e.Platform.Kuaidianwan))
                            null === (o = t.success) || void 0 === o || o.call(t, GameAssistantWeb.getStorage(t.key));
                        else
                            try {
                                t.success("")
                            } catch (a) { }
                    }
                    navigateToMiniProgram(e) {
                        var t, o;
                        e.pkgName = null !== (t = e.pkgName) && void 0 !== t ? t : e.appId,
                            (null !== (o = this.platformObject.navigateToMiniGame) && void 0 !== o ? o : this.platformObject.navigateToMiniProgram)(e)
                    }
                    getUserInfo(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.getUserInfo({
                            success: e => {
                                try {
                                    t.success({
                                        userInfo: {
                                            nickName: e.data.nickName,
                                            avatarUrl: e.data.biggerAvatar,
                                            gender: 1 == e.data.gender ? "1" : 2 == e.data.gender ? "2" : "0",
                                            country: "",
                                            province: "",
                                            city: "",
                                            language: "zh_CN"
                                        },
                                        rawData: "",
                                        signature: "",
                                        encryptedData: "",
                                        iv: "",
                                        cloudID: ""
                                    })
                                } catch (o) {
                                    console.error(o)
                                }
                            }
                            ,
                            fail: t.fail
                        }) : this.platformObject.getUserInfo(t)
                    }
                    login(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.login({
                            success: e => {
                                try {
                                    t.success({
                                        code: e.data.token
                                    })
                                } catch (o) {
                                    console.error(o)
                                }
                            }
                            ,
                            fail: t.fail
                        }) : e.isPlatform(e.Platform.QuTouTiao) ? this.platformObject.qttlogin(t) : this.platformObject.login(t)
                    }
                    checkIsUserAdvisedToRest(t) {
                        e.isPlatform(e.Platform.WeChat) && this.platformObject.checkIsUserAdvisedToRest({
                            todayPlayedTime: t,
                            success: e => {
                                e.result && this.showModal({
                                    title: "\u9632\u6c89\u8ff7\u63d0\u793a",
                                    content: "\u4f60\u4eca\u65e5\u7684\u6e38\u620f\u5728\u7ebf\u65f6\u957f\u5df2\u8fbe\u4e0a\u9650\uff0c\u6216\u5f53\u524d\u65f6\u6bb5\u4e3a\u672a\u6210\u5e74\u767b\u9646\u9650\u5236\u65f6\u95f4\u6bb5\uff0c\u60a8\u5c06\u65e0\u6cd5\u7ee7\u7eed\u6e38\u620f\u3002",
                                    showCancel: !1,
                                    confirmText: "\u9000\u51fa\u6e38\u620f",
                                    success: () => {
                                        this.exitMiniProgram()
                                    }
                                })
                            }
                        })
                    }
                    setOrientation(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.setOrientation(t)
                    }
                    setFullScreen(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.setFullScreen(t)
                    }
                    initYueYou() {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.init()
                    }
                    getAuthCode(t, o, i) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.getAuthCode(t, o, i)
                    }
                    openGameAd(t, o, i, n, a, s) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.openGameAd(t, o, i, n, a, s)
                    }
                    addViewStateListener(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.addViewStateListener(t)
                    }
                    removeViewStateListener() {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.removeViewStateListener()
                    }
                    screenWidth() {
                        return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenWidth() : 0
                    }
                    screenHeight() {
                        return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenHeight() : 0
                    }
                    joinVoIPChat(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.joinVoIPChat) ? wx.joinVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.joinVoIPChat) && qg.joinVoIPChat(t)
                    }
                    exitVoIPChat(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.exitVoIPChat) ? wx.exitVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.exitVoIPChat) && qg.exitVoIPChat(t)
                    }
                    updateVoIPChatMuteConfig(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.updateVoIPChatMuteConfig) ? wx.updateVoIPChatMuteConfig(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.updateVoIPChatMuteConfig) && qg.updateVoIPChatMuteConfig(t)
                    }
                    onVoIPChatSpeakersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatSpeakersChanged) ? wx.onVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatSpeakersChanged) && qg.onVoIPChatSpeakersChanged(t)
                    }
                    onVoIPChatMembersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatMembersChanged) ? wx.onVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatMembersChanged) && qg.onVoIPChatMembersChanged(t)
                    }
                    onVoIPChatInterrupted(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatInterrupted) ? wx.onVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatInterrupted) && qg.onVoIPChatInterrupted(t)
                    }
                    offVoIPChatSpeakersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatSpeakersChanged) ? wx.offVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatSpeakersChanged) && qg.offVoIPChatSpeakersChanged(t)
                    }
                    offVoIPChatMembersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatMembersChanged) ? wx.offVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatMembersChanged) && qg.offVoIPChatMembersChanged(t)
                    }
                    offVoIPChatInterrupted(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatInterrupted) ? wx.offVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatInterrupted) && qg.offVoIPChatInterrupted(t)
                    }
                    isRewardVideoAdReady() {
                        return !!e.isPlatform([e.Platform.iOS, e.Platform.Android]) && this.platformObject.isRewardVideoAdReady()
                    }
                    getDeviceId(t) {
                        e.Info.isPreview ? t.success({
                            deviceId: "testdeviceId"
                        }) : null != this.platformObject.getDeviceId && this.platformObject.getDeviceId({
                            success: t.success,
                            fail: t.fail
                        })
                    }
                }
            }(o || (o = {})),
            function (e) {
                class t {
                    constructor(e) {
                        this.seed = e,
                            this.seed || 0 == this.seed || (this.seed = (new Date).getTime())
                    }
                    get value() {
                        return this.range(0, 1)
                    }
                    range(e, t) {
                        return e >= t ? e : (this.seed || 0 == this.seed || (this.seed = (new Date).getTime()),
                            t = t || 1,
                            e = e || 0,
                            this.seed = (9301 * this.seed + 49297) % 233280,
                            e + this.seed / 233280 * (t - e))
                    }
                    rangeInt(e, t) {
                        if (e >= t)
                            return e;
                        if (t - e >= 233280)
                            return 0;
                        this.seed || 0 == this.seed || (this.seed = (new Date).getTime()),
                            t = t || 1,
                            e = e || 0,
                            this.seed = (9301 * this.seed + 49297) % 233280;
                        var o = this.seed / 233280;
                        return e + Math.floor(o * (t - e + .9))
                    }
                    static get internalInstance() {
                        return null == this._internalInstance && (this._internalInstance = new t),
                            this._internalInstance
                    }
                    static get value() {
                        return this.internalInstance.range(0, 1)
                    }
                    static range(e, t) {
                        return this.internalInstance.range(e, t)
                    }
                    static rangeInt(e, t) {
                        return this.internalInstance.rangeInt(e, t)
                    }
                }
                t._internalInstance = null,
                    e.Random = t
            }(o || (o = {})),
            function (e) {
                function o(t) {
                    return t instanceof Array ? t.indexOf(e.Info.platform) >= 0 : e.Info.platform == t
                }
                function i(t) {
                    return t instanceof Array ? t.indexOf(e.Info.distributionChannel) >= 0 : e.Info.distributionChannel == t
                }
                function n(t) {
                    return t instanceof Array ? t.indexOf(e.Info.engine) >= 0 : e.Info.engine == t
                }
                function a(...t) {
                    e.Info.debugLog && (n(e.EngineType.LayaAir) && o([e.Platform.iOS, e.Platform.Android]) ? console.log("GA:" + t.join(",")) : console.log("GA:", ...t))
                }
                function s(...t) {
                    n(e.EngineType.LayaAir) && o([e.Platform.iOS, e.Platform.Android]) ? console.warn("GA:" + t.join(",")) : console.warn("GA:", ...t)
                }
                e.isPlatform = o,
                    e.isDistributionChannel = i,
                    e.isEngine = n,
                    e.log = a,
                    e.warn = s,
                    e.error = function (...t) {
                        n(e.EngineType.LayaAir) && o([e.Platform.iOS, e.Platform.Android]) ? console.error("GA:" + t.join(",")) : console.error("GA:", ...t)
                    }
                    ,
                    e.UnsupportLog = function (t) {
                        s("\u5f53\u524d\u5e73\u53f0 " + e.Info.platform + " \u6682\u4e0d\u652f\u6301 " + t)
                    }
                    ;
                const r = {
                    times: 0
                };
                function l(t) {
                    var i;
                    if (r.times++,
                        t.url.includes(".17tcw.com") && (t.header || (t.header = {}),
                            t.header.appid = e.Info.appId,
                            (null === (i = e.Info.kariquToken) || void 0 === i ? void 0 : i.length) > 0 && (t.header.openid = e.Info.openId,
                                t.header.timestamp = (e.Info.serverTime + (Date.now() - e.Info.clientTime)).toFixed(),
                                t.header.nonce = g("RequestTimes" + r.times.toFixed()),
                                t.header.sign = g([e.Info.appId, e.Info.openId, t.header.timestamp, t.header.nonce, e.Info.appKey, e.Info.kariquToken].sort().join("")))),
                        !o(e.Platform.M4399MiniGame) && !e.Info.forbidHttpRequest) {
                        if (e.PA && e.PA.request && !o([e.Platform.Vivo, e.Platform.Hago]))
                            return e.PA.request(t);
                        {
                            let n = new XMLHttpRequest;
                            n.onreadystatechange = function () {
                                if (4 == n.readyState) {
                                    let e = n.responseText
                                        , o = {
                                            data: "",
                                            statusCode: n.status,
                                            header: {},
                                            errMsg: ""
                                        };
                                    try {
                                        let t = JSON.parse(e);
                                        o.data = t
                                    } catch (i) {
                                        o.data = n.responseText
                                    }
                                    n.getAllResponseHeaders().split("\r\n").forEach(e => {
                                        var t;
                                        let i = e.split(": ");
                                        (null === (t = i[0]) || void 0 === t ? void 0 : t.length) > 0 && (o.header[i[0]] = i[1])
                                    }
                                    ),
                                        n.status >= 200 && n.status < 400 ? "function" == typeof t.success && t.success(o) : (s(`request fail with url : "${t.url}"`),
                                            "function" == typeof t.fail && t.fail(o))
                                }
                            }
                                ,
                                n.onerror = function () {
                                    t.fail && t.fail({
                                        errMsg: "request onerror"
                                    })
                                }
                                ,
                                n.onabort = function () {
                                    t.fail && t.fail({
                                        errMsg: "request onabort"
                                    })
                                }
                                ,
                                void 0 === t.method && (t.method = "GET"),
                                n.open(t.method, t.url, !0),
                                o(e.Platform.Hago) ? n.setRequestHeader("Content-Type", "application/json;charset=utf-8") : n.setRequestHeader("Content-type", "application/json;charset=utf-8");
                            for (let e in t.header)
                                n.setRequestHeader(e, t.header[e]);
                            void 0 === t.data ? n.send() : n.send(JSON.stringify(t.data))
                        }
                    }
                }
                e.request = l;
                const c = new Map;
                function d(n, s) {
                    "onlinetime" != n[0].eventId && a("sentLogs:" + JSON.stringify(n)),
                        n.forEach(e => {
                            try {
                                let o = null != e.detail && "" != e.detail ? JSON.parse(e.detail) : {};
                                c.forEach((e, t) => {
                                    null == o[t] && (o[t] = e)
                                }
                                ),
                                    null != e.extraNum && (o.extraNum = e.extraNum),
                                    e.detail = JSON.stringify(o)
                            } catch (t) { }
                        }
                        ),
                        (o([e.Platform.Android]) || o(e.Platform.iOS)) && n.forEach(e => {
                            var o;
                            if ("onlinetime" != e.eventId)
                                try {
                                    t.PROXY.sendEvent(e.eventId, null !== (o = e.detail) && void 0 !== o ? o : "{}")
                                } catch (i) {
                                    console.error(i)
                                }
                        }
                        ),
                        i([e.DistributionChannel.GooglePlay, e.DistributionChannel.AppStoreWorld]) || e.request({
                            url: e.getUrl(e.Urls.SaveLog),
                            data: {
                                appid: e.Info.appId,
                                uuid: e.Info.openId,
                                list: n,
                                channel: e.Info.channelId,
                                device: e.PA.getSystemInfoSync().model
                            },
                            method: "POST",
                            success: () => {
                                try {
                                    s()
                                } catch (e) { }
                            }
                        })
                }
                function u(e, t, o, i) {
                    d([{
                        eventId: e,
                        detail: o ? JSON.stringify(o) : "",
                        extraNum: t || 0
                    }], i)
                }
                let h;
                e.addEventDefaultProperty = function (e) {
                    for (let t in e)
                        c.has(t) || c.set(t, e[t])
                }
                    ,
                    e.sentLogs = d,
                    e.sentLog = u,
                    function (e) {
                        e.Consume = "Consume"
                    }(h = e.AssetOperation || (e.AssetOperation = {}));
                const f = new Set;
                function g(e) {
                    function t(e, t) {
                        return e << t | e >>> 32 - t
                    }
                    function o(e, t) {
                        let o, i, n, a, s;
                        return n = 2147483648 & e,
                            a = 2147483648 & t,
                            s = (1073741823 & e) + (1073741823 & t),
                            (o = 1073741824 & e) & (i = 1073741824 & t) ? 2147483648 ^ s ^ n ^ a : o | i ? 1073741824 & s ? 3221225472 ^ s ^ n ^ a : 1073741824 ^ s ^ n ^ a : s ^ n ^ a
                    }
                    function i(e, t, o) {
                        return e & t | ~e & o
                    }
                    function n(e, t, o) {
                        return e & o | t & ~o
                    }
                    function a(e, t, o) {
                        return e ^ t ^ o
                    }
                    function s(e, t, o) {
                        return t ^ (e | ~o)
                    }
                    function r(e, n, a, s, r, l, c) {
                        return e = o(e, o(o(i(n, a, s), r), c)),
                            o(t(e, l), n)
                    }
                    function l(e, i, a, s, r, l, c) {
                        return e = o(e, o(o(n(i, a, s), r), c)),
                            o(t(e, l), i)
                    }
                    function c(e, i, n, s, r, l, c) {
                        return e = o(e, o(o(a(i, n, s), r), c)),
                            o(t(e, l), i)
                    }
                    function d(e, i, n, a, r, l, c) {
                        return e = o(e, o(o(s(i, n, a), r), c)),
                            o(t(e, l), i)
                    }
                    function u(e) {
                        let t, o, i = "", n = "";
                        for (o = 0; o <= 3; o++)
                            i += (n = "0" + (t = e >>> 8 * o & 255).toString(16)).substr(n.length - 2, 2);
                        return i
                    }
                    let h, f, g, p, m, v, M, y, P, S = Array();
                    for (S = function (e) {
                        let t, o = e.length, i = o + 8, n = 16 * ((i - i % 64) / 64 + 1), a = Array(n - 1), s = 0, r = 0;
                        for (; r < o;)
                            s = r % 4 * 8,
                                a[t = (r - r % 4) / 4] = a[t] | e.charCodeAt(r) << s,
                                r++;
                        return s = r % 4 * 8,
                            a[t = (r - r % 4) / 4] = a[t] | 128 << s,
                            a[n - 2] = o << 3,
                            a[n - 1] = o >>> 29,
                            a
                    }(e = function (e) {
                        e = e.replace(/\r\n/g, "\n");
                        let t = "";
                        for (let o = 0; o < e.length; o++) {
                            let i = e.charCodeAt(o);
                            i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                                t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                                    t += String.fromCharCode(i >> 6 & 63 | 128),
                                    t += String.fromCharCode(63 & i | 128))
                        }
                        return t
                    }(e)),
                        v = 1732584193,
                        M = 4023233417,
                        y = 2562383102,
                        P = 271733878,
                        h = 0; h < S.length; h += 16)
                        f = v,
                            g = M,
                            p = y,
                            m = P,
                            v = r(v, M, y, P, S[h + 0], 7, 3614090360),
                            P = r(P, v, M, y, S[h + 1], 12, 3905402710),
                            y = r(y, P, v, M, S[h + 2], 17, 606105819),
                            M = r(M, y, P, v, S[h + 3], 22, 3250441966),
                            v = r(v, M, y, P, S[h + 4], 7, 4118548399),
                            P = r(P, v, M, y, S[h + 5], 12, 1200080426),
                            y = r(y, P, v, M, S[h + 6], 17, 2821735955),
                            M = r(M, y, P, v, S[h + 7], 22, 4249261313),
                            v = r(v, M, y, P, S[h + 8], 7, 1770035416),
                            P = r(P, v, M, y, S[h + 9], 12, 2336552879),
                            y = r(y, P, v, M, S[h + 10], 17, 4294925233),
                            M = r(M, y, P, v, S[h + 11], 22, 2304563134),
                            v = r(v, M, y, P, S[h + 12], 7, 1804603682),
                            P = r(P, v, M, y, S[h + 13], 12, 4254626195),
                            y = r(y, P, v, M, S[h + 14], 17, 2792965006),
                            v = l(v, M = r(M, y, P, v, S[h + 15], 22, 1236535329), y, P, S[h + 1], 5, 4129170786),
                            P = l(P, v, M, y, S[h + 6], 9, 3225465664),
                            y = l(y, P, v, M, S[h + 11], 14, 643717713),
                            M = l(M, y, P, v, S[h + 0], 20, 3921069994),
                            v = l(v, M, y, P, S[h + 5], 5, 3593408605),
                            P = l(P, v, M, y, S[h + 10], 9, 38016083),
                            y = l(y, P, v, M, S[h + 15], 14, 3634488961),
                            M = l(M, y, P, v, S[h + 4], 20, 3889429448),
                            v = l(v, M, y, P, S[h + 9], 5, 568446438),
                            P = l(P, v, M, y, S[h + 14], 9, 3275163606),
                            y = l(y, P, v, M, S[h + 3], 14, 4107603335),
                            M = l(M, y, P, v, S[h + 8], 20, 1163531501),
                            v = l(v, M, y, P, S[h + 13], 5, 2850285829),
                            P = l(P, v, M, y, S[h + 2], 9, 4243563512),
                            y = l(y, P, v, M, S[h + 7], 14, 1735328473),
                            v = c(v, M = l(M, y, P, v, S[h + 12], 20, 2368359562), y, P, S[h + 5], 4, 4294588738),
                            P = c(P, v, M, y, S[h + 8], 11, 2272392833),
                            y = c(y, P, v, M, S[h + 11], 16, 1839030562),
                            M = c(M, y, P, v, S[h + 14], 23, 4259657740),
                            v = c(v, M, y, P, S[h + 1], 4, 2763975236),
                            P = c(P, v, M, y, S[h + 4], 11, 1272893353),
                            y = c(y, P, v, M, S[h + 7], 16, 4139469664),
                            M = c(M, y, P, v, S[h + 10], 23, 3200236656),
                            v = c(v, M, y, P, S[h + 13], 4, 681279174),
                            P = c(P, v, M, y, S[h + 0], 11, 3936430074),
                            y = c(y, P, v, M, S[h + 3], 16, 3572445317),
                            M = c(M, y, P, v, S[h + 6], 23, 76029189),
                            v = c(v, M, y, P, S[h + 9], 4, 3654602809),
                            P = c(P, v, M, y, S[h + 12], 11, 3873151461),
                            y = c(y, P, v, M, S[h + 15], 16, 530742520),
                            v = d(v, M = c(M, y, P, v, S[h + 2], 23, 3299628645), y, P, S[h + 0], 6, 4096336452),
                            P = d(P, v, M, y, S[h + 7], 10, 1126891415),
                            y = d(y, P, v, M, S[h + 14], 15, 2878612391),
                            M = d(M, y, P, v, S[h + 5], 21, 4237533241),
                            v = d(v, M, y, P, S[h + 12], 6, 1700485571),
                            P = d(P, v, M, y, S[h + 3], 10, 2399980690),
                            y = d(y, P, v, M, S[h + 10], 15, 4293915773),
                            M = d(M, y, P, v, S[h + 1], 21, 2240044497),
                            v = d(v, M, y, P, S[h + 8], 6, 1873313359),
                            P = d(P, v, M, y, S[h + 15], 10, 4264355552),
                            y = d(y, P, v, M, S[h + 6], 15, 2734768916),
                            M = d(M, y, P, v, S[h + 13], 21, 1309151649),
                            v = d(v, M, y, P, S[h + 4], 6, 4149444226),
                            P = d(P, v, M, y, S[h + 11], 10, 3174756917),
                            y = d(y, P, v, M, S[h + 2], 15, 718787259),
                            M = d(M, y, P, v, S[h + 9], 21, 3951481745),
                            v = o(v, f),
                            M = o(M, g),
                            y = o(y, p),
                            P = o(P, m);
                    return (u(v) + u(M) + u(y) + u(P)).toLowerCase()
                }
                e.sendAssetsLog = function (e) {
                    f.add(e),
                        1 == f.size && setTimeout(() => {
                            let e = new Map;
                            f.forEach(t => {
                                let o = `${t.asset}-${t.operation}-${t.tag}`;
                                if (e.has(o)) {
                                    let i = e.get(o);
                                    i.amount += t.amount,
                                        i.times++
                                } else
                                    t.times = 1,
                                        e.set(o, t)
                            }
                            ),
                                u("AssetOperation", 0, Array.from(e.values())),
                                f.clear()
                        }
                            , 1e4)
                }
                    ,
                    e.betweenNum = function (e, t, o) {
                        return Math.min(o, Math.max(t, e))
                    }
                    ,
                    e.isiPhoneX = function () {
                        let t = e.PA.getSystemInfoSync().model;
                        return -1 != t.indexOf("iPhone X") || -1 != t.indexOf("iPhone12") || -1 != t.indexOf("iPhone13")
                    }
                    ,
                    e.isLongScreen = function () {
                        let t = e.PA.getSystemInfoSync();
                        return t.windowHeight > t.windowWidth ? t.windowHeight / t.windowWidth > 1.8 : t.windowWidth / t.windowHeight > 1.8
                    }
                    ,
                    e.isPad = function () {
                        let t = e.PA.getSystemInfoSync();
                        return t.windowHeight > t.windowWidth ? t.windowHeight / t.windowWidth < 1.55 : t.windowWidth / t.windowHeight < 1.55
                    }
                    ,
                    e.isiPad = function () {
                        return -1 != e.PA.getSystemInfoSync().model.indexOf("iPad")
                    }
                    ,
                    e.isToday = function (e) {
                        return Math.floor(e / 864e5) == Math.floor(Date.now() / 864e5)
                    }
                    ,
                    e.formatNumber = function (e) {
                        if (e < 1e4)
                            return e.toFixed();
                        if (e < 1e6)
                            return (e / 1e3).toFixed(1) + "K";
                        if (e < 1e9)
                            return (e / 1e3 / 1e3).toFixed(1) + "M";
                        if (e < 1e12)
                            return (e / 1e3 / 1e3 / 1e3).toFixed(1) + "B";
                        if (e < 1e15)
                            return (e / 1e3 / 1e3 / 1e3 / 1e3).toFixed(1) + "T";
                        {
                            let t = Math.round(e).toString()
                                , o = t.indexOf("e+");
                            if (o > 0) {
                                let e = t.substr(o + 2);
                                return t.substr(0, 4) + "E" + e
                            }
                            {
                                let t = Math.round(e).toString().length - 1;
                                return (e / Math.pow(10, t)).toFixed(1) + "E" + t
                            }
                        }
                    }
                    ,
                    e.formatTime = function (e) {
                        let t = Math.floor(e / 3600)
                            , o = Math.floor((e - 3600 * t) / 60)
                            , i = Math.floor(e % 60)
                            , n = "";
                        return t > 0 && (n = (t < 10 ? "0" : "") + t.toFixed() + ":"),
                            n + (o < 10 ? "0" : "") + o.toFixed() + ":" + (i < 10 ? "0" : "") + i.toFixed()
                    }
                    ,
                    e.rand = function (e, t) {
                        let o = Math.floor(e + Math.random() * (t - e + 1));
                        return o = Math.min(o, t),
                            Math.max(o, e)
                    }
                    ,
                    e.randFloat = function (e, t) {
                        return e + Math.random() * (t - e)
                    }
                    ,
                    e.saveRedirect = function (t, o, i) {
                        let n = {
                            Openid: e.Info.openId,
                            Channel: e.Info.channelId,
                            Appid: e.Info.appId,
                            Type: t,
                            TargetAppid: "",
                            Path: ""
                        };
                        "string" == typeof o ? (n.TargetAppid = o,
                            n.Path = i) : (n.TargetAppid = o.appid,
                                n.Path = o.path,
                                l({
                                    url: e.getUrl(e.Urls.SaveRedirect),
                                    data: {
                                        userId: e.Info.uid,
                                        redirectId: o.id
                                    },
                                    method: "POST",
                                    success: () => { }
                                })),
                            l({
                                url: e.getUrl(e.Urls.SaveRedirect),
                                data: n,
                                method: "POST",
                                success: () => {
                                    console.log("Navigate to ", n)
                                }
                            })
                    }
                    ,
                    e.loadServerConfig = function () {
                        return new Promise((t, o) => {
                            e.request({
                                url: e.getUrl(e.Urls.GameConfig) + "?userId=" + e.Info.uid,
                                method: "POST",
                                data: [],
                                success: e => {
                                    var i;
                                    0 == (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.code) ? t(e.data.data) : o(e.data)
                                }
                                ,
                                fail: e => {
                                    o(e)
                                }
                            })
                        }
                        )
                    }
                    ,
                    e.md5 = g
            }(o || (o = {})),
            function (e) {
                e.version = "1.0.167",
                    e.buildTime = "2023-1-4 \u4e0b\u53483:04:46"
            }(o || (o = {})),
            function (e) {
                let t;
                (function (e) {
                    e[e.Invalid = 0] = "Invalid",
                        e[e.Loaded = 1] = "Loaded",
                        e[e.Error = 2] = "Error",
                        e[e.Shown = 3] = "Shown",
                        e[e.Hidden = 4] = "Hidden"
                }
                )(t || (t = {}));
                var o = new class {
                    constructor() {
                        this.initOptions = new Map,
                            this.showOptions = new Map,
                            this.ads = new Map,
                            this.status = new Map,
                            this.showCount = new Map,
                            this.sizes = new Map,
                            this.tryShowCount = 0
                    }
                    initBannerAd(o) {
                        var i;
                        let n, a = null !== (i = null == (n = Array.isArray(o) ? o[0] : o) ? void 0 : n.adTag) && void 0 !== i ? i : "Banner";
                        this.initOptions.set(a, n),
                            this.status.set(a, t.Invalid);
                        let s, r = e.PA.getSystemInfoSync(), l = 0;
                        l = e.isPlatform([e.Platform.WeChat]) ? r.screenWidth > r.screenHeight ? 300 / r.designPixelRatio : r.screenWidth : Math.min(r.screenWidth, r.screenHeight),
                            s = e.isPlatform([e.Platform.Vivo]) ? {
                                posId: n.adId,
                                adIntervals: null == n ? void 0 : n.adIntervals,
                                style: {}
                            } : {
                                adUnitId: n.adId,
                                adIntervals: null == n ? void 0 : n.adIntervals,
                                style: {
                                    left: 0,
                                    top: 0,
                                    width: l
                                }
                            };
                        let c = e.PA.createBannerAd(s);
                        this.ads.set(a, c),
                            c.onLoad(() => {
                                this.status.set(a, t.Loaded)
                            }
                            ),
                            c.onError(o => {
                                this.status.set(a, t.Error),
                                    e.warn("banner onError:", o)
                            }
                            ),
                            e.isPlatform([e.Platform.Vivo]) || c.onResize(e => {
                                this.sizes.set(a, {
                                    width: e.width,
                                    height: e.height
                                }),
                                    this.updateBannerPosition(a)
                            }
                            )
                    }
                    tryInitBannerAd(o) {
                        var i, n, a;
                        let s = null !== (i = o.initOption.adTag) && void 0 !== i ? i : "Banner";
                        this.status.set(s, t.Invalid);
                        let r, l = e.PA.getSystemInfoSync(), c = 0;
                        c = e.isPlatform([e.Platform.WeChat]) ? l.screenWidth > l.screenHeight ? 300 / l.designPixelRatio : l.screenWidth : Math.min(l.screenWidth, l.screenHeight),
                            r = e.isPlatform([e.Platform.Vivo]) ? {
                                posId: o.initOption.adId,
                                adIntervals: null === (n = o.initOption) || void 0 === n ? void 0 : n.adIntervals,
                                style: {
                                    left: 0,
                                    top: (e.Info.resolution.height - 100) / e.PA.getSystemInfoSync().designPixelRatio
                                }
                            } : {
                                adUnitId: o.initOption.adId,
                                adIntervals: null === (a = o.initOption) || void 0 === a ? void 0 : a.adIntervals,
                                style: {
                                    left: 0,
                                    top: 0,
                                    width: c
                                }
                            };
                        let d = e.PA.createBannerAd(r);
                        this.ads.set(s, d),
                            d.onLoad(() => {
                                this.status.set(s, t.Loaded),
                                    o.success()
                            }
                            ),
                            d.onError(o => {
                                this.status.set(s, t.Error),
                                    e.warn("banner onError:", o)
                            }
                            ),
                            e.isPlatform([e.Platform.Vivo]) || d.onResize(e => {
                                this.sizes.set(s, {
                                    width: e.width,
                                    height: e.height
                                }),
                                    this.updateBannerPosition(s)
                            }
                            )
                    }
                    updateBannerPosition(t) {
                        var o, i;
                        if (e.isPlatform([e.Platform.Vivo]))
                            return;
                        let n = this.showOptions.get(t)
                            , a = this.ads.get(t)
                            , s = this.sizes.get(t);
                        if (!a || !s)
                            return;
                        let r = e.PA.getSystemInfoSync()
                            , l = 0
                            , c = 0;
                        l = null != (null === (o = null == n ? void 0 : n.style) || void 0 === o ? void 0 : o.offsetX) ? n.style.offsetX : (r.windowWidth - s.width) / 2,
                            c = null != (null === (i = null == n ? void 0 : n.style) || void 0 === i ? void 0 : i.offsetY) ? r.windowHeight - s.height - n.style.offsetY : r.windowHeight - s.height,
                            a.style.left = l,
                            a.style.top = c,
                            e.log(`update banner position left:${l} top:${c}`)
                    }
                    showBanner(o) {
                        var i, n, a, s;
                        this.tryShowCount++;
                        let r = null !== (i = null == o ? void 0 : o.adTag) && void 0 !== i ? i : "Banner"
                            , l = this.sizes.get(r)
                            , c = e.PA.getSystemInfoSync();
                        if (this.showOptions.set(r, o),
                            this.ads.has(r)) {
                            let d = this.ads.get(r)
                                , u = 0;
                            if (u = (null === (n = null == o ? void 0 : o.style) || void 0 === n ? void 0 : n.width) ? o.style.width : e.isPlatform([e.Platform.WeChat]) ? c.screenWidth > c.screenHeight ? 300 / c.designPixelRatio : c.screenWidth : Math.min(c.screenWidth, c.screenHeight),
                                e.isPlatform([e.Platform.Vivo]) || (d.style.width = u),
                                (null == l ? void 0 : l.width) != u && null == (null === (a = null == o ? void 0 : o.style) || void 0 === a ? void 0 : a.offsetX) && null == (null === (s = null == o ? void 0 : o.style) || void 0 === s ? void 0 : s.offsetY) || this.updateBannerPosition(r),
                                this.status.get(r) == t.Shown)
                                return void (this.tryShowCount = 0);
                            d.show().then(() => {
                                this.tryShowCount = 0,
                                    this.status.set(r, t.Shown)
                            }
                            ).catch(() => {
                                try {
                                    this.tryShowCount > 1 ? (this.tryShowCount = 0,
                                        null == o || o.fail()) : this.tryInitBannerAd({
                                            initOption: this.initOptions.get(r),
                                            success: () => {
                                                this.showBanner(o)
                                            }
                                        })
                                } catch (i) { }
                            }
                            )
                        } else
                            this.tryShowCount = 0,
                                e.warn(`\u663e\u793abanner\u5931\u8d25,\u5e7f\u544a\u6807\u7b7e ${r}\u4e0d\u5b58\u5728`)
                    }
                    hideBanner(e) {
                        var o;
                        let i = null != e ? e : "Banner";
                        try {
                            if (this.ads.has(i)) {
                                this.showCount.has(i) ? this.showCount.set(i, this.showCount.get(i) + 1) : this.showCount.set(i, 1);
                                let e = this.showCount.get(i)
                                    , n = this.ads.get(i)
                                    , a = null === (o = this.initOptions.get(i)) || void 0 === o ? void 0 : o.validTimes;
                                n && (e && a && e >= a ? n.destroy && (this.showCount.delete(i),
                                    n.destroy(),
                                    this.status.set(i, t.Invalid),
                                    this.initBannerAd(this.initOptions.get(i))) : n.hide && (n.hide(),
                                        this.status.set(i, t.Hidden)))
                            }
                        } catch (n) {
                            n(n)
                        }
                    }
                    hideAllBanner() { }
                    resumeShowBanner() { }
                    clearAllBanner() { }
                    isExistBanner(e) {
                        return !(!this.ads.has(e) || this.status.get(e) != t.Loaded && this.status.get(e) != t.Shown && this.status.get(e) != t.Hidden)
                    }
                    getBannerSize(e) {
                        let t = null != e ? e : "Banner";
                        return this.sizes.get(t)
                    }
                }
                    ;
                e.initBannerAd = function (t) {
                    e.isPlatform([e.Platform.Android]) || null == o || o.initBannerAd(t)
                }
                    ,
                    e.showBanner = function (t) {
                        var i, n, a, s, r, l, c, d;
                        if (e.isPlatform([e.Platform.Android, e.Platform.iOS])) {
                            let o = null !== (n = null === (i = null == t ? void 0 : t.style) || void 0 === i ? void 0 : i.offsetX) && void 0 !== n ? n : 0
                                , u = null !== (s = null === (a = null == t ? void 0 : t.style) || void 0 === a ? void 0 : a.offsetY) && void 0 !== s ? s : 0
                                , h = null !== (l = null === (r = null == t ? void 0 : t.style) || void 0 === r ? void 0 : r.width) && void 0 !== l ? l : 0
                                , f = null !== (d = null === (c = null == t ? void 0 : t.style) || void 0 === c ? void 0 : c.height) && void 0 !== d ? d : 0;
                            e.PA.showBanner(o, u, h, f)
                        } else
                            e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showBanner() : null == o || o.showBanner(t)
                    }
                    ,
                    e.hideBanner = function (t) {
                        e.isPlatform([e.Platform.Android, e.Platform.iOS]) ? e.PA.hideBanner() : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.hideBanner() : null == o || o.hideBanner(t)
                    }
                    ,
                    e.hideAllBanner = function () {
                        e.isPlatform([e.Platform.Android]) ? e.PA.hideAllBanner() : e.isPlatform(e.Platform.iOS) || null == o || o.hideAllBanner()
                    }
                    ,
                    e.resumeShowBanner = function () {
                        e.isPlatform([e.Platform.Android]) ? e.PA.resumeShowBanner() : e.isPlatform(e.Platform.iOS) || null == o || o.resumeShowBanner()
                    }
                    ,
                    e.clearAllBanner = function () {
                        e.isPlatform([e.Platform.Android]) ? e.PA.clearAllBanner() : e.isPlatform(e.Platform.iOS) || null == o || o.clearAllBanner()
                    }
                    ,
                    e.isExistBanner = function (e) {
                        return null == o ? void 0 : o.isExistBanner(e)
                    }
                    ,
                    e.getBannerSize = function (e) {
                        return o.getBannerSize(e)
                    }
            }(o || (o = {})),
            function (e) {
                let t;
                (function (e) {
                    e[e.Invalid = 0] = "Invalid",
                        e[e.Loaded = 1] = "Loaded",
                        e[e.Error = 2] = "Error"
                }
                )(t || (t = {}));
                var o = new class {
                    constructor() {
                        this.initOptions = new Map,
                            this.ads = new Map
                    }
                    init(e) {
                        e.forEach(e => {
                            var o;
                            this.initOptions.set(e.adTag, {
                                adTag: e.adTag,
                                adId: e.adId,
                                validTimes: null !== (o = e.validTimes) && void 0 !== o ? o : 1,
                                showTimes: 0,
                                isShow: !1,
                                status: t.Invalid
                            })
                        }
                        )
                    }
                    setValidTimes(e, t) {
                        let o = this.initOptions.get(e);
                        o && (o.validTimes = t)
                    }
                    createAd(o) {
                        let i = this.initOptions.get(o.adTag);
                        if (i) {
                            let n = e.PA.createCustomAd({
                                adUnitId: i.adId,
                                adIntervals: i.adIntervals,
                                style: o.style
                            });
                            return n && (this.ads.has(i.adTag) && this.remove(i.adTag),
                                this.ads.set(i.adTag, n),
                                n.onError(n => {
                                    e.warn("CustomAd error:", n),
                                        i.status = t.Error,
                                        o.fail && o.fail()
                                }
                                ),
                                n.onLoad(() => {
                                    e.log("CustomAd onLoad"),
                                        i.status = t.Loaded,
                                        i.isShow && n.show()
                                }
                                ),
                                n.onHide(() => {
                                    o.onHide && o.onHide()
                                }
                                )),
                                n
                        }
                        return e.warn(`\u521b\u5efaCustomAd\u5931\u8d25,\u5e7f\u544a\u6807\u7b7e ${o.adTag}\u4e0d\u5b58\u5728`),
                            null
                    }
                    show(o) {
                        let i = this.initOptions.get(o.adTag);
                        i ? (i.status == t.Error && (e.warn("\u65e0\u6548\u539f\u751f\u6a21\u7248\u5e7f\u544a,\u91cd\u65b0\u52a0\u8f7d."),
                            this.remove(o.adTag)),
                            i.showTimes++,
                            i.isShow = !0,
                            this.ads.has(o.adTag) ? this.ads.get(o.adTag).show().then(() => {
                                e.log("CustomAd show success.")
                            }
                            ).catch(t => {
                                e.warn("CustomAd show fail.", t),
                                    o.fail && o.fail()
                            }
                            ) : e.Info.isPreview || this.createAd(o)) : e.warn(`\u663e\u793aCustomAd\u5931\u8d25,\u5e7f\u544a\u6807\u7b7e ${o.adTag}\u4e0d\u5b58\u5728`)
                    }
                    hide(e) {
                        let t = this.initOptions.get(e);
                        t && (t.isShow = !1,
                            t.showTimes >= t.validTimes ? this.remove(e) : this.ads.has(e) && this.ads.get(e).hide())
                    }
                    isExistCustomAd(e) {
                        return !(!this.ads.has(e) || this.initOptions.get(e).status != t.Loaded)
                    }
                    remove(e) {
                        if (this.ads.has(e)) {
                            this.ads.get(e).destroy(),
                                this.ads.delete(e);
                            let o = this.initOptions.get(e);
                            o.status = t.Invalid,
                                o.isShow = !1,
                                o.showTimes = 0
                        }
                    }
                }
                    ;
                e.initCustomAds = function (t) {
                    e.Info.isPreview ? e.log("\u5f53\u524d\u5e73\u53f0\uff1a" + e.Info.platform + "\u6682\u4e0d\u652f\u6301\u539f\u751f\u6a21\u7248\u5e7f\u544a") : o.init(t)
                }
                    ,
                    e.setCustomAdValidTimes = function (t, i) {
                        e.Info.isPreview || o.setValidTimes(t, i)
                    }
                    ,
                    e.createCustomAd = function (t) {
                        e.Info.isPreview || o.createAd(t)
                    }
                    ,
                    e.showCustomAd = function (t) {
                        e.Info.isPreview || o.show(t)
                    }
                    ,
                    e.hideCustomAd = function (t) {
                        e.Info.isPreview || o.hide(t)
                    }
                    ,
                    e.isExistCustomAd = function (t) {
                        if (!e.Info.isPreview)
                            return o.isExistCustomAd(t)
                    }
                    ,
                    e.clearCustomAd = function (t) {
                        e.Info.isPreview || o.remove(t)
                    }
            }(o || (o = {})),
            function (e) {
                var t = new class {
                }
                    ;
                e.showFullScreenVideoAd = function () {
                    e.Info.isPreview || (e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showFullScreenVideoAd() : e.PA.showFullScreenVideoAd())
                }
                    ,
                    e.setFullScreenVideoAdPlayCallback = function (e) {
                        t.playCallback = e
                    }
                    ,
                    e.invokeFullScreenVideoAdPlayCallback = function (e) {
                        var o;
                        null === (o = null == t ? void 0 : t.playCallback) || void 0 === o || o.call(t, e)
                    }
            }(o || (o = {})),
            function (e) {
                var t = new class {
                    initGameBannerAd(t, o) {
                        e.isPlatform([e.Platform.Vivo, e.Platform.OPPO]) && !e.Info.isPreview ? (o || (o = {
                            left: 100 / e.PA.getSystemInfoSync().designPixelRatio,
                            top: (e.Info.resolution.height - 200) / e.PA.getSystemInfoSync().designPixelRatio,
                            orientation: "horizontal"
                        }),
                            e.isOPPO() ? this.gameBannerAd = e.PA.createGameBannerAd({
                                adUnitId: t,
                                style: o
                            }) : e.isVivo() && (this.gameBannerAd = e.PA.createBoxBannerAd({
                                posId: t
                            })),
                            this.gameBannerAd.onError(t => {
                                e.log("GameBannerAd error:", t)
                            }
                            ),
                            this.gameBannerAd.onLoad(() => {
                                e.log("GameBannerAd loaded")
                            }
                            )) : e.Info.isPreview || e.log("\u5f53\u524d\u5e73\u53f0\uff1a" + e.Info.platform + "\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u6a2a\u5e45\u5e7f\u544a")
                    }
                    showGameBannerAd() {
                        e.log("try show GameBannerAd"),
                            this.gameBannerAd ? this.gameBannerAd.show().then(() => {
                                console.log("GameBannerAd show success")
                            }
                            ).catch(e => {
                                console.log("GameBannerAd show fail with:" + e)
                            }
                            ) : e.log("GameBannerAd not init")
                    }
                    hideGameBannerAd() {
                        this.gameBannerAd ? (e.log("GameBannerAd hide"),
                            this.gameBannerAd.hide()) : e.log("GameBannerAd not init")
                    }
                }
                    ;
                e.initGameBannerAd = function (e, o) {
                    t.initGameBannerAd(e, o)
                }
                    ,
                    e.showGameBannerAd = function () {
                        t.showGameBannerAd()
                    }
                    ,
                    e.hideGameBannerAd = function () {
                        t.hideGameBannerAd()
                    }
            }(o || (o = {})),
            function (e) {
                var t = new class {
                    initGamePortalAd(t) {
                        e.isPlatform([e.Platform.Vivo, e.Platform.OPPO]) && !e.Info.isPreview ? (e.isOPPO() ? this.gamePortalAd = e.PA.createGamePortalAd({
                            adUnitId: t
                        }) : e.isVivo() && (this.gamePortalAd = e.PA.createBoxPortalAd({
                            posId: t
                        })),
                            this.gamePortalAd.onError(t => {
                                e.log("GamePortalAd error:", t)
                            }
                            ),
                            this.gamePortalAd.onLoad(() => {
                                e.log("GamePortalAd loaded")
                            }
                            ),
                            this.gamePortalAd.onClose(() => {
                                console.log("GamePortalAd closed.")
                            }
                            )) : e.Info.isPreview || e.log("\u5f53\u524d\u5e73\u53f0\uff1a" + e.Info.platform + "\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u4e5d\u5bab\u683c\u5e7f\u544a")
                    }
                    showGamePortalAd() {
                        e.log("try show GamePortalAd"),
                            this.gamePortalAd ? this.gamePortalAd.show().then(() => {
                                console.log("GamePortalAd show success")
                            }
                            ).catch(e => {
                                console.log("GamePortalAd show fail with:" + e);
                                try {
                                    this.gamePortalAd.load()
                                } catch (e) {
                                    console.warn(e)
                                }
                            }
                            ) : e.log("GamePortalAd not init")
                    }
                    hideGamePortalAd() {
                        this.gamePortalAd ? (e.log("GamePortalAd hide"),
                            this.gamePortalAd.hide()) : e.log("GamePortalAd not init")
                    }
                }
                    ;
                e.initGamePortalAd = function (e) {
                    t.initGamePortalAd(e)
                }
                    ,
                    e.showGamePortalAd = function () {
                        t.showGamePortalAd()
                    }
                    ,
                    e.hideGamePortalAd = function () {
                        t.hideGamePortalAd()
                    }
            }(o || (o = {})),
            function (e) {
                var t = new class {
                    constructor() {
                        this.adUnitId = ""
                    }
                    initInterstitialAd(e) {
                        this.adUnitId = e
                    }
                    showInterstitialAd() {
                        let t = e.PA.createInterstitialAd({
                            adUnitId: this.adUnitId
                        });
                        e.isPlatform([e.Platform.Vivo, e.Platform.Kwaigame]) ? t.show().then(() => {
                            e.log("InterstitialAd show")
                        }
                        ).catch(t => {
                            e.log("InterstitialAd fail", JSON.stringify(t))
                        }
                        ) : e.isPlatform([e.Platform.ByteDance]) ? t.load().then(() => {
                            t.show().then(() => {
                                e.log("InterstitialAd show")
                            }
                            )
                        }
                        ).catch(t => {
                            e.log(t)
                        }
                        ) : (t.onError(t => {
                            e.log("InterstitialAd error", t)
                        }
                        ),
                            t.onLoad(() => {
                                e.log("InterstitialAd onLoad"),
                                    t.show().catch(t => {
                                        e.error("show", t)
                                    }
                                    )
                            }
                            ),
                            t.load().catch(t => {
                                e.error("InterstitialAd err", t)
                            }
                            ))
                    }
                }
                    ;
                e.initInterstitialAd = function (e) {
                    t.initInterstitialAd(e)
                }
                    ,
                    e.showInterstitialAd = function () {
                        e.Info.isPreview || (e.isPlatform([e.Platform.iOS, e.Platform.Android]) ? e.PA.showInterstitialAd() : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showInterstitialAd() : t.showInterstitialAd())
                    }
            }(o || (o = {})),
            function (e) {
                e.showNativeAd = function (t) {
                    e.Info.isPreview || e.isPlatform([e.Platform.iOS, e.Platform.Android]) && e.PA.showNativeAd(t)
                }
                    ,
                    e.hideNativeAd = function () {
                        e.Info.isPreview || e.isPlatform([e.Platform.iOS, e.Platform.Android]) && e.PA.hideNativeAd()
                    }
            }(o || (o = {})),
            function (e) {
                e.showOfferWallAd = function () { }
            }(o || (o = {})),
            function (e) {
                let t;
                (function (e) {
                    e[e.Default = 0] = "Default",
                        e[e.Loading = 1] = "Loading",
                        e[e.Loaded = 2] = "Loaded",
                        e[e.Showing = 3] = "Showing",
                        e[e.End = 4] = "End",
                        e[e.Error = 5] = "Error"
                }
                )(t || (t = {}));
                var o = new class {
                    constructor() {
                        this.adIds = [],
                            this.currAdIdIdx = -1,
                            this.ad = null,
                            this.showOption = null,
                            this.videoPlayTimeStamp = 0,
                            this.status = t.Default,
                            this.closeTip = "\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6",
                            this.videoPlayCallbacks = [],
                            this.videoPlayEndCallbacks = [],
                            this.videoCloseCallbacks = []
                    }
                    init(e) {
                        this.adIds = e,
                            this.currAdIdIdx = -1,
                            this.initNextAd()
                    }
                    setCloseTip(e) {
                        this.closeTip = e
                    }
                    haveRewardVideo() {
                        return e.isPlatform([e.Platform.iOS, e.Platform.Android]) ? e.PA.isRewardVideoAdReady() : this.status == t.Loaded
                    }
                    onLoad() {
                        this.status = t.Loaded
                    }
                    onError(o) {
                        var i, n;
                        this.status = t.Error,
                            this.showOption && (e.Info.isPreview || e.sentLog("VideoAdFailed", null, {
                                type: this.showOption.tag,
                                page: null !== (i = this.showOption.page) && void 0 !== i ? i : ""
                            }),
                                e.PA.showToast({
                                    title: "\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230\u89c6\u9891",
                                    icon: "none",
                                    mask: !1
                                }),
                                null === (n = this.showOption) || void 0 === n || n.result({
                                    errorMsg: JSON.stringify(o),
                                    reward: !1,
                                    shown: !1
                                })),
                            e.isPlatform([e.Platform.OPPO, e.Platform.Vivo]) && this.ad.load(),
                            this.showOption = null
                    }
                    onClose(o) {
                        var i, n, a;
                        o.isEnded ? (e.Info.rewardUserData.data.has(this.showOption.tag) && e.Info.rewardUserData.data.get(this.showOption.tag).currCount++,
                            this.videoCloseCallbacks.forEach(e => {
                                try {
                                    e(o.isEnded)
                                } catch (i) { }
                            }
                            ),
                            this.videoPlayEndCallbacks.forEach(e => {
                                try {
                                    e()
                                } catch (i) { }
                            }
                            )) : this.videoCloseCallbacks.forEach(e => {
                                try {
                                    e(o.isEnded)
                                } catch (i) { }
                            }
                            ),
                            this.status = t.End,
                            null === (i = this.showOption) || void 0 === i || i.result({
                                reward: null == o ? void 0 : o.isEnded,
                                shown: !0,
                                ecpm: null !== (n = o.ecpm) && void 0 !== n ? n : 0
                            }),
                            e.Info.isPreview || e.sentLog((null == o ? void 0 : o.isEnded) ? "VideoAdEnded" : "VideoAdClosed", Math.round((Date.now() - this.videoPlayTimeStamp) / 1e3), {
                                type: this.showOption.tag,
                                page: null !== (a = this.showOption.page) && void 0 !== a ? a : ""
                            }),
                            e.isPlatform([e.Platform.OPPO, e.Platform.Vivo]) && !e.Info.isPreview && this.ad.load(),
                            this.showOption = null,
                            this.status = t.End,
                            (null == o ? void 0 : o.isEnded) || this.closeTip && "" != this.closeTip && e.PA.showToast({
                                title: this.closeTip,
                                mask: !0,
                                icon: "none"
                            })
                    }
                    initNextAd() {
                        if (this.adIds.length > 0 && !e.isPlatform(e.Platform.Android))
                            if (this.currAdIdIdx = (this.currAdIdIdx + 1) % this.adIds.length,
                                this.status = t.Loading,
                                e.isPlatform(e.Platform.Hago)) {
                                let t = window.hg.createRewardedVideoAd({
                                    adUnitId: this.adIds[this.currAdIdIdx]
                                });
                                t.onClose = e => {
                                    this.onClose(e)
                                }
                                    ,
                                    t.onError = () => {
                                        e.log("\u4e2d\u9014\u5173\u95ed\u5e7f\u544a\u6216\u8005\u62c9\u53d6\u5e7f\u544a\u5931\u8d25")
                                    }
                                    ,
                                    this.ad = t
                            } else
                                this.ad = e.PA.createRewardedVideoAd({
                                    adUnitId: this.adIds[this.currAdIdIdx],
                                    multiton: !1
                                }),
                                    this.ad.onLoad(() => {
                                        this.onLoad()
                                    }
                                    ),
                                    this.ad.onError(e => {
                                        this.onError(e)
                                    }
                                    ),
                                    this.ad.onClose(e => {
                                        this.onClose(e)
                                    }
                                    ),
                                    e.isPlatform([e.Platform.OPPO, e.Platform.Vivo, e.Platform.ByteDance]) && this.ad.load()
                    }
                    showVideoAd(t) {
                        var o;
                        this.showOption ? e.log("reward video is showing with " + this.showOption.page + " - " + this.showOption.tag) : (this.videoPlayTimeStamp = Date.now(),
                            this.showOption = t,
                            e.Info.isPreview || e.sentLog("TryPlayVideoAd", null, {
                                type: this.showOption.tag,
                                page: null !== (o = this.showOption.page) && void 0 !== o ? o : ""
                            }),
                            e.Info.isPreview ? this.onClose({
                                isEnded: !0
                            }) : e.isPlatform(e.Platform.QuTouTiao) ? qttGame.showVideo(e => {
                                this.onClose({
                                    isEnded: 1 == e
                                })
                            }
                            ) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showRewardVideo(e => {
                                this.onClose({
                                    isEnded: e
                                })
                            }
                            ) : e.isPlatform(e.Platform.Android) ? e.PA.showRewardVideoAd(t => {
                                var o;
                                e.log("reward video Android show callback:" + JSON.stringify(t)),
                                    t.shown ? this.onClose({
                                        isEnded: t.reward,
                                        ecpm: t.ecpm
                                    }) : (this.showOption && (null === (o = this.showOption) || void 0 === o || o.result({
                                        errorMsg: JSON.stringify(t),
                                        reward: !1,
                                        shown: !1
                                    })),
                                        this.showOption = null)
                            }
                            ) : e.isPlatform(e.Platform.iOS) ? e.PA.showRewardVideoAd(t => {
                                var o;
                                e.log("reward video ios show callback:" + JSON.stringify(t)),
                                    t.shown ? this.onClose({
                                        isEnded: t.reward,
                                        ecpm: t.ecpm
                                    }) : (this.showOption && (null === (o = this.showOption) || void 0 === o || o.result({
                                        errorMsg: JSON.stringify(t),
                                        reward: !1,
                                        shown: !1
                                    })),
                                        this.showOption = null)
                            }
                            ) : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.playAd(t => {
                                e.log("code:" + t.code + ",message:" + t.message),
                                    1e4 === t.code ? this.videoPlayCallbacks.forEach(e => {
                                        try {
                                            e()
                                        } catch (o) { }
                                    }
                                    ) : 10001 === t.code ? this.onClose({
                                        isEnded: !0
                                    }) : (this.showOption = null,
                                        this.videoCloseCallbacks.forEach(e => {
                                            try {
                                                e()
                                            } catch (o) { }
                                        }
                                        ))
                            }
                            ) : e.isPlatform(e.Platform.ZuiYou) ? window.__XCgs.call("playRewardAd")((e, t) => {
                                if (e)
                                    try {
                                        this.showAdResult(!1, e.message)
                                    } catch (o) { }
                                else
                                    t && 1 === t.status ? this.onClose({
                                        isEnded: !0
                                    }) : this.onClose({
                                        isEnded: !1
                                    })
                            }
                            ) : (null == this.ad && this.initNextAd(),
                                this.ad ? this.ad.show().then(() => {
                                    this.videoPlayTimeStamp = Date.now(),
                                        this.showAdResult(!0, "")
                                }
                                ).catch(e => {
                                    this.showAdResult(!1, JSON.stringify(e))
                                }
                                ) : this.showAdResult(!1, "")))
                    }
                    showAdResult(t, o) {
                        var i;
                        this.showOption && !e.Info.isPreview && e.sentLog(t ? "VideoAdSuccess" : "VideoAdFailed", null, {
                            type: this.showOption.tag,
                            page: null !== (i = this.showOption.page) && void 0 !== i ? i : ""
                        }),
                            t ? this.videoPlayCallbacks.forEach(e => {
                                try {
                                    e()
                                } catch (i) { }
                            }
                            ) : (e.isPlatform([e.Platform.OPPO, e.Platform.Vivo]) && this.ad.load(),
                                this.onError({
                                    errCode: 1,
                                    errMsg: o
                                }))
                    }
                    addPlayCallback(e) {
                        this.videoPlayCallbacks.push(e)
                    }
                    addPlayEndCallback(e) {
                        this.videoPlayEndCallbacks.push(e)
                    }
                    addCloseCallback(e) {
                        this.videoCloseCallbacks.push(e)
                    }
                    removePlayCallback(e) {
                        let t = this.videoPlayCallbacks.indexOf(e);
                        t >= 0 && this.videoPlayCallbacks.splice(t, 1)
                    }
                    removePlayEndCallback(e) {
                        let t = this.videoPlayEndCallbacks.indexOf(e);
                        t >= 0 && this.videoPlayEndCallbacks.splice(t, 1)
                    }
                    removeCloseCallback(e) {
                        let t = this.videoCloseCallbacks.indexOf(e);
                        t >= 0 && this.videoCloseCallbacks.splice(t, 1)
                    }
                }
                    ;
                e.haveRewardVideo = function () {
                    return o.haveRewardVideo()
                }
                    ,
                    e.showVideoAd = function (e) {
                        o.showVideoAd(e)
                    }
                    ,
                    e.initRewardVideoAd = function (t) {
                        e.Info.isPreview || o.init(t)
                    }
                    ,
                    e.addVideoPlayCallback = function (e) {
                        o.addPlayCallback(e)
                    }
                    ,
                    e.addVideoEndCallback = function (e) {
                        o.addPlayEndCallback(e)
                    }
                    ,
                    e.addVideoCloseCallback = function (e) {
                        o.addCloseCallback(e)
                    }
                    ,
                    e.removeVideoPlayCallback = function (e) {
                        o.removePlayCallback(e)
                    }
                    ,
                    e.removeVideoEndCallback = function (e) {
                        o.removePlayEndCallback(e)
                    }
                    ,
                    e.removeVideoCloseCallback = function (e) {
                        o.removeCloseCallback(e)
                    }
                    ,
                    e.setInterruptPlayTip = function (e) {
                        o.setCloseTip(e)
                    }
            }(o || (o = {})),
            function (e) {
                e.showSplashAd = function () {
                    var t;
                    e.Info.isPreview || e.isPlatform(e.Platform.Kuaidianwan) || null === (t = e.PA.showSplashAd) || void 0 === t || t.call(e.PA)
                }
            }(o || (o = {})),
            function (e) {
                let t;
                (function (t) {
                    let o, i;
                    (function (e) {
                        e[e.Active = 0] = "Active",
                            e[e.Register = 1] = "Register",
                            e[e.Pay = 2] = "Pay",
                            e[e.NextDay = 6] = "NextDay",
                            e[e.KeyAction = 25] = "KeyAction"
                    }
                    )(o = t.Action || (t.Action = {})),
                        function (e) {
                            e[e.KuaiShou = 1] = "KuaiShou",
                                e[e.SIGMOB = 2] = "SIGMOB",
                                e[e.Ocean = 3] = "Ocean",
                                e[e.MTG = 4] = "MTG",
                                e[e.OPPO = 8] = "OPPO"
                        }(i || (i = {}));
                    const n = {
                        clue_token: "",
                        ad_id: "",
                        creative_id: "",
                        ad_platform: 0
                    };
                    var a = "";
                    t.init = function () {
                        var t, o, s, r, l, c, d, u, h, f, g, p, m, v, M, y, P, S, A, C, w, I, k, b, E, T;
                        if (e.isPlatform([e.Platform.WeChat])) {
                            let a = e.PA.getLaunchOptionsSync();
                            "kuaishou" == (null !== (o = null === (t = null == a ? void 0 : a.query) || void 0 === t ? void 0 : t.ksChannel) && void 0 !== o ? o : "") ? (n.clue_token = null !== (r = null === (s = null == a ? void 0 : a.query) || void 0 === s ? void 0 : s.callback) && void 0 !== r ? r : "",
                                n.ad_id = null !== (c = null === (l = null == a ? void 0 : a.query) || void 0 === l ? void 0 : l.ksCampaignId) && void 0 !== c ? c : "",
                                n.creative_id = null !== (u = null === (d = null == a ? void 0 : a.query) || void 0 === d ? void 0 : d.ksCreativeId) && void 0 !== u ? u : "",
                                n.ad_platform = i.KuaiShou) : (n.clue_token = null !== (f = null === (h = null == a ? void 0 : a.query) || void 0 === h ? void 0 : h.clue_token) && void 0 !== f ? f : "",
                                    n.ad_id = null !== (p = null === (g = null == a ? void 0 : a.query) || void 0 === g ? void 0 : g.ad_id) && void 0 !== p ? p : "",
                                    n.creative_id = null !== (v = null === (m = null == a ? void 0 : a.query) || void 0 === m ? void 0 : m.creative_id) && void 0 !== v ? v : "",
                                    n.ad_platform = i.Ocean),
                                e.addVideoEndCallback(() => {
                                    e.request({
                                        url: "https://game.17tcw.com/default/user/videoAd",
                                        method: "POST",
                                        data: {
                                            userId: e.Info.uid,
                                            adType: "RewardVideoAd",
                                            ecpm: 0
                                        },
                                        success: t => {
                                            e.log("RewardVideoAd: " + JSON.stringify(t))
                                        }
                                    })
                                }
                                )
                        } else if (e.isPlatform([e.Platform.ByteDance])) {
                            let t = e.PA.getLaunchOptionsSync();
                            n.clue_token = null !== (y = null === (M = null == t ? void 0 : t.query) || void 0 === M ? void 0 : M.clickid) && void 0 !== y ? y : "",
                                n.ad_id = null !== (S = null === (P = null == t ? void 0 : t.query) || void 0 === P ? void 0 : P.adid) && void 0 !== S ? S : "",
                                n.creative_id = null !== (C = null === (A = null == t ? void 0 : t.query) || void 0 === A ? void 0 : A.creativeid) && void 0 !== C ? C : "",
                                n.ad_platform = i.Ocean,
                                e.addVideoEndCallback(() => {
                                    e.request({
                                        url: "https://game.17tcw.com/default/user/videoAd",
                                        method: "POST",
                                        data: {
                                            userId: e.Info.uid,
                                            adType: "RewardVideoAd",
                                            ecpm: 0
                                        },
                                        success: t => {
                                            e.log("RewardVideoAd: " + JSON.stringify(t))
                                        }
                                    })
                                }
                                )
                        } else if (e.isPlatform([e.Platform.OPPO])) {
                            let t = e.PA.getLaunchOptionsSync();
                            n.clue_token = null !== (I = null === (w = null == t ? void 0 : t.query) || void 0 === w ? void 0 : w.clickid) && void 0 !== I ? I : "",
                                n.ad_id = null !== (b = null === (k = null == t ? void 0 : t.query) || void 0 === k ? void 0 : k.adid) && void 0 !== b ? b : "",
                                n.creative_id = null !== (T = null === (E = null == t ? void 0 : t.query) || void 0 === E ? void 0 : E.creativeid) && void 0 !== T ? T : "",
                                n.ad_platform = i.OPPO,
                                e.addVideoEndCallback(() => {
                                    e.request({
                                        url: "https://game.17tcw.com/default/user/videoAd",
                                        method: "POST",
                                        data: {
                                            userId: e.Info.uid,
                                            adType: "RewardVideoAd",
                                            ecpm: 0
                                        },
                                        success: t => {
                                            e.log("RewardVideoAd: " + JSON.stringify(t))
                                        }
                                    })
                                }
                                ),
                                e.PA.getDeviceId({
                                    success: e => {
                                        a = e.deviceId,
                                            console.log("deviceId:", a)
                                    }
                                })
                        }
                    }
                        ,
                        t.reportKeyAction = function (t) {
                            var o;
                            e.isPlatform([e.Platform.OPPO]) ? "" != a && null != a && e.request({
                                url: "https://game.17tcw.com/default/put/reportWX",
                                method: "POST",
                                data: {
                                    uid: e.Info.uid,
                                    event_type: t,
                                    clueToken: a,
                                    ad_platform: n.ad_platform
                                },
                                success: t => {
                                    e.log("Report KeyAction: " + JSON.stringify(t))
                                }
                            }) : (null === (o = n.clue_token) || void 0 === o ? void 0 : o.length) > 0 && e.request({
                                url: "https://game.17tcw.com/default/put/reportWX",
                                method: "POST",
                                data: {
                                    uid: e.Info.uid,
                                    event_type: t,
                                    clueToken: n.clue_token,
                                    ad_id: n.ad_id,
                                    ad_platform: n.ad_platform
                                },
                                success: t => {
                                    e.log("Report KeyAction: " + JSON.stringify(t))
                                }
                            })
                        }
                        ,
                        t.videoAd = function () { }
                }
                )(t = e.AdTracking || (e.AdTracking = {}))
            }(o || (o = {})),
            function (e) {
                let t;
                (function (t) {
                    t.queryUserAssets = function () {
                        return new Promise(t => {
                            e.request({
                                url: e.getUrl(e.Urls.QueryUserAssets),
                                data: {
                                    openid: e.Info.openId
                                },
                                method: "POST",
                                success: o => {
                                    if (0 == o.data.code) {
                                        let e = {
                                            success: !0,
                                            assets: new Map
                                        };
                                        o.data.data.forEach(t => {
                                            e.assets.set(t.itemId, t.itemNum)
                                        }
                                        ),
                                            t(e)
                                    } else
                                        e.log("\u67e5\u8be2\u7528\u6237\u8d44\u4ea7\u5931\u8d25", o),
                                            t({
                                                success: !1,
                                                assets: new Map
                                            })
                                }
                                ,
                                fail: o => {
                                    e.log("\u67e5\u8be2\u7528\u6237\u8d44\u4ea7\u5931\u8d25", o),
                                        t({
                                            success: !1,
                                            assets: new Map
                                        })
                                }
                            })
                        }
                        )
                    }
                        ,
                        t.updateUserAssets = function (t, o) {
                            return new Promise(i => {
                                let n = [];
                                t.forEach((e, t) => {
                                    n.push({
                                        itemId: t,
                                        itemNum: e
                                    })
                                }
                                ),
                                    e.request({
                                        url: e.getUrl(e.Urls.UpdateUserAssets),
                                        data: {
                                            openid: e.Info.openId,
                                            itemList: n,
                                            tag: o
                                        },
                                        method: "POST",
                                        success: t => {
                                            if (0 == t.data.code || 1303 == t.data.code) {
                                                let e = {
                                                    success: 1303 != t.data.code,
                                                    assets: new Map
                                                };
                                                t.data.data.forEach(t => {
                                                    e.assets.set(t.itemId, t.itemNum)
                                                }
                                                ),
                                                    i(e)
                                            } else
                                                e.log("\u66f4\u65b0\u7528\u6237\u8d44\u4ea7\u5931\u8d25", t),
                                                    i({
                                                        success: !1,
                                                        assets: new Map
                                                    })
                                        }
                                        ,
                                        fail: t => {
                                            e.log("\u66f4\u65b0\u7528\u6237\u8d44\u4ea7\u5931\u8d25", t),
                                                i({
                                                    success: !1,
                                                    assets: new Map
                                                })
                                        }
                                    })
                            }
                            )
                        }
                        ,
                        t.queryShopProducts = function () {
                            return new Promise(t => {
                                e.request({
                                    url: e.getUrl(e.Urls.QueryShopProducts),
                                    method: "POST",
                                    data: {},
                                    success: o => {
                                        0 == o.data.code ? t({
                                            success: !0,
                                            products: o.data.data
                                        }) : (e.log("\u67e5\u8be2\u5546\u54c1\u4fe1\u606f\u5931\u8d25", o),
                                            t({
                                                success: !1,
                                                products: []
                                            }))
                                    }
                                    ,
                                    fail: o => {
                                        e.log("\u67e5\u8be2\u5546\u54c1\u4fe1\u606f\u5931\u8d25", o),
                                            t({
                                                success: !1,
                                                products: []
                                            })
                                    }
                                })
                            }
                            )
                        }
                        ;
                    let o = 0;
                    function i(t) {
                        return new Promise(o => {
                            let i, s = e.PA.getSystemInfoSync();
                            e.isPlatform(e.Platform.ByteDance) && (i = "ios" == s.platform ? a.WeChatNative : a.ByteDance),
                                e.isPlatform(e.Platform.WeChat) && (i = "ios" == s.platform ? a.WeChatJSAPI : n.enableV2 ? a.WeChatMiniGameV2 : a.WeChatMiniGame),
                                e.isPlatform(e.Platform.QQ) && (i = a.QQ),
                                i ? e.request({
                                    url: e.getUrl(e.Urls.PlaceOrder),
                                    method: "POST",
                                    data: {
                                        openid: e.Info.openId,
                                        productId: t.product,
                                        productNum: t.amount,
                                        paymentMode: i
                                    },
                                    success: t => {
                                        0 == t.data.code ? (d(t.data.data.orderId),
                                            o(t.data.data)) : (e.warn("\u4e0b\u5355\u5931\u8d25:", t.data),
                                                o(null))
                                    }
                                    ,
                                    fail: t => {
                                        e.warn("\u4e0b\u5355\u5931\u8d25:", t),
                                            o(null)
                                    }
                                }) : o(null)
                        }
                        )
                    }
                    t.queryPendingOrder = function () {
                        let t = o = Date.now();
                        return new Promise(i => {
                            e.request({
                                url: e.getUrl(e.Urls.QueryPendingOrder),
                                method: "POST",
                                data: {
                                    openid: e.Info.openId
                                },
                                success: n => {
                                    0 == n.data.code ? t != o ? i({
                                        success: !0,
                                        orders: []
                                    }) : (o = 0,
                                        i({
                                            success: !0,
                                            orders: n.data.data.paidList
                                        })) : (e.log("\u67e5\u8be2\u5f85\u5904\u7406\u8ba2\u5355\u5931\u8d25", n),
                                            i({
                                                success: !1,
                                                orders: []
                                            }))
                                }
                                ,
                                fail: t => {
                                    e.log("\u67e5\u8be2\u5f85\u5904\u7406\u8ba2\u5355\u5931\u8d25", t),
                                        i({
                                            success: !1,
                                            orders: []
                                        })
                                }
                            })
                        }
                        )
                    }
                        ,
                        t.confirmPurchase = function (t) {
                            return new Promise(o => {
                                e.request({
                                    url: e.getUrl(e.Urls.ConfirmPurchase),
                                    method: "POST",
                                    data: {
                                        openid: e.Info.openId,
                                        orderId: t
                                    },
                                    success: t => {
                                        var i, n;
                                        if (0 == t.data.code) {
                                            let e = [];
                                            null === (n = null === (i = t.data.data) || void 0 === i ? void 0 : i.itemList) || void 0 === n || n.forEach(t => {
                                                e.push({
                                                    id: t.itemId,
                                                    amount: t.itemNum,
                                                    delta: t.addItem
                                                })
                                            }
                                            ),
                                                o({
                                                    success: !0,
                                                    changedAssets: e
                                                })
                                        } else
                                            e.log("\u6838\u9500\u8ba2\u5355\u5931\u8d25", t),
                                                o({
                                                    success: !1,
                                                    changedAssets: []
                                                })
                                    }
                                    ,
                                    fail: t => {
                                        e.log("\u6838\u9500\u8ba2\u5355\u5931\u8d25", t),
                                            o({
                                                success: !1,
                                                changedAssets: []
                                            })
                                    }
                                })
                            }
                            )
                        }
                        ,
                        t.requestPay = function (t) {
                            return new Promise(o => {
                                let c = e.PA.getSystemInfoSync();
                                if (e.Info.isPreview)
                                    o(!0);
                                else if (e.isPlatform(e.Platform.WeChat)) {
                                    let r = e.PA.getSystemInfoSync();
                                    "ios" == r.platform ? i(t).then(t => {
                                        t ? wx.openCustomerServiceConversation({
                                            showMessageCard: !0,
                                            sendMessageTitle: e.Info.sendMessageTitle,
                                            sendMessageImg: e.Info.sendMessageImg
                                        }) : (e.PA.showToast({
                                            title: "\u4e0b\u5355\u5931\u8d25"
                                        }),
                                            o(!1))
                                    }
                                    ) : "android" == r.platform || "windows" == r.platform ? i(t).then(i => {
                                        var l;
                                        if (i) {
                                            let c = {
                                                mode: "game",
                                                env: n.DEBUG ? 1 : 0,
                                                offerId: n.offerId,
                                                buyQuantity: i.params.buyQuantity,
                                                currencyType: "CNY",
                                                platform: r.platform,
                                                zoneId: null !== (l = t.zoneId) && void 0 !== l ? l : "1",
                                                success: () => {
                                                    s.forEach(e => {
                                                        try {
                                                            e(!0, n.enableV2 ? a.WeChatMiniGameV2 : a.WeChatMiniGame)
                                                        } catch (l) { }
                                                    }
                                                    ),
                                                        o(!0)
                                                }
                                                ,
                                                fail: t => {
                                                    e.warn("\u652f\u4ed8\u5931\u8d25", t),
                                                        e.warn("\u652f\u4ed8\u53c2\u6570", c),
                                                        o(!1)
                                                }
                                            };
                                            wx.requestMidasPayment(c)
                                        } else
                                            e.PA.showToast({
                                                title: "\u4e0b\u5355\u5931\u8d25"
                                            }),
                                                o(!1)
                                    }
                                    ) : o(!1)
                                } else if (e.isPlatform(e.Platform.QQ)) {
                                    let n = e.PA.getSystemInfoSync();
                                    "android" == n.platform || "windows" == n.platform ? i(t).then(t => {
                                        if (t) {
                                            let i = {
                                                prepayId: t.params.prepayId,
                                                starCurrency: t.params.buyQuantity,
                                                setEnv: t.params.env,
                                                success: () => {
                                                    s.forEach(e => {
                                                        try {
                                                            e(!0, a.QQ)
                                                        } catch (t) { }
                                                    }
                                                    ),
                                                        o(!0)
                                                }
                                                ,
                                                fail: t => {
                                                    e.warn("\u652f\u4ed8\u5931\u8d25", t),
                                                        e.warn("\u652f\u4ed8\u53c2\u6570", i),
                                                        o(!1)
                                                }
                                            };
                                            qq.requestMidasPayment(i)
                                        } else
                                            e.PA.showToast({
                                                title: "\u4e0b\u5355\u5931\u8d25"
                                            }),
                                                o(!1)
                                    }
                                    ) : o(!1)
                                } else if (e.isPlatform(e.Platform.ByteDance))
                                    "ios" == c.platform ? i(t).then(i => {
                                        i ? o({
                                            purchaseUrl: i.params,
                                            price: t.price,
                                            orderId: i.orderId
                                        }) : (e.PA.showToast({
                                            title: "\u4e0b\u5355\u5931\u8d25"
                                        }),
                                            o(!1))
                                    }
                                    ) : "android" == c.platform ? i(t).then(i => {
                                        var n;
                                        if (i.params) {
                                            let r = {
                                                mode: "game",
                                                env: 0,
                                                currencyType: "CNY",
                                                platform: "android",
                                                buyQuantity: i.params.buyQuantity,
                                                zoneId: null !== (n = null == t ? void 0 : t.zoneId) && void 0 !== n ? n : "1",
                                                customId: i.orderId,
                                                extraInfo: "",
                                                success: () => {
                                                    s.forEach(e => {
                                                        try {
                                                            e(!0, a.ByteDance)
                                                        } catch (n) { }
                                                    }
                                                    ),
                                                        o(!0)
                                                }
                                                ,
                                                fail: t => {
                                                    e.error(t),
                                                        t.errCode < -2 && e.log(r),
                                                        o(!1)
                                                }
                                            };
                                            tt.requestGamePayment(r)
                                        } else
                                            o(!0)
                                    }
                                    ) : o(!1);
                                else if (e.isPlatform(e.Platform.Android)) {
                                    let e = t => {
                                        l(e),
                                            o(t)
                                    }
                                        ;
                                    r(e),
                                        jsb.reflection.callStaticMethod("com/kariqu/sdk/paysdk/PayManager", "requestPay", "(Ljava/lang/String;ILjava/lang/String;I)V", t.product, t.amount, t.description, t.price)
                                } else
                                    o(!1)
                            }
                            )
                        }
                        ;
                    const n = {
                        DEBUG: !1,
                        offerId: "",
                        enableV2: !1
                    };
                    let a;
                    t.setWeChatEnv = function (e) {
                        n.DEBUG = e.DEBUG,
                            n.offerId = e.offerId,
                            n.enableV2 = e.enableV2
                    }
                        ,
                        function (e) {
                            e[e.WeChatJSAPI = 1] = "WeChatJSAPI",
                                e[e.WeChat = 2] = "WeChat",
                                e[e.WeChatNative = 4] = "WeChatNative",
                                e[e.AliPay = 10] = "AliPay",
                                e[e.ByteDance = 40] = "ByteDance",
                                e[e.WeChatMiniGame = 50] = "WeChatMiniGame",
                                e[e.WeChatMiniGameV2 = 51] = "WeChatMiniGameV2",
                                e[e.QQ = 60] = "QQ"
                        }(a = t.PayMethod || (t.PayMethod = {}));
                    const s = new Set;
                    function r(e) {
                        s.add(e)
                    }
                    function l(e) {
                        s.delete(e)
                    }
                    t.addPayListener = r,
                        t.removePayListener = l,
                        t.onPayResult = function (t, o) {
                            s.forEach(i => {
                                try {
                                    i(t, o)
                                } catch (n) {
                                    e.log("\u652f\u4ed8\u56de\u8c03\u5f02\u5e38", n)
                                }
                            }
                            )
                        }
                        ;
                    const c = new Set;
                    function d(t) {
                        c.forEach(o => {
                            try {
                                o(t)
                            } catch (i) {
                                e.log("\u4e0b\u5355\u56de\u8c03\u5f02\u5e38", i)
                            }
                        }
                        )
                    }
                    t.addPlaceOrderListener = function (e) {
                        c.add(e)
                    }
                        ,
                        t.removePlaceOrderListener = function (e) {
                            c.delete(e)
                        }
                        ,
                        t.onPlaceOrder = d
                }
                )(t = e.IAP || (e.IAP = {}))
            }(o || (o = {})),
            function (t) {
                t.AndroidProxy = class extends t.BaseAppProxy {
                    constructor() {
                        super(),
                            this.compatibleMethods = ["onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC"],
                            this.bridge = null,
                            this.isSplashAdEnd = !1,
                            this.splashAdEndCallback = null,
                            this.callbacks = new Map,
                            this.times = 0,
                            this.offerWallListener = null,
                            this.compatibleMethods.forEach(e => {
                                this[e] = () => {
                                    console.log(`Android \u6682\u4e0d\u652f\u6301 ${e}`)
                                }
                            }
                            );
                        try {
                            this.bridge = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy")
                        } catch (e) { }
                    }
                    signInGoogle() {
                        e.signIn()
                    }
                    signInGoogleSilently() {
                        e.signInSilently()
                    }
                    signOutGoogle() {
                        e.signOut()
                    }
                    saveFile(t) {
                        e.saveFile(t)
                    }
                    loadSavefile() {
                        e.loadSavefile()
                    }
                    setNonConsumableProduct(t) {
                        e.setAcknowledgedSku(t)
                    }
                    getProductDetail(t, i) {
                        o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.loadSkuDetail(t, []) : this.native("requestProductInfo", "(Ljava/lang/String;I)V", JSON.stringify(t), null != i ? i : 0)
                    }
                    requestPayment(t, i) {
                        o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.purchaseSku(t) : this.native("requestPayProduct", "(Ljava/lang/String;I)V", t, null != i ? i : 0)
                    }
                    checkPurchase() {
                        o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.checkPurchase() : this.native("checkUnfinishedTransaction", "()V")
                    }
                    fetchRemoteConfig() {
                        e.syncRemoteConfig()
                    }
                    confirmPurchase(t) {
                        o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.confirmPurchase(t) : this.native("finishTransaction", "(Ljava/lang/String;)V", t)
                    }
                    getRemoteConfig() {
                        return e.getRemoteConfig()
                    }
                    getOrderInfo(t) {
                        return o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.getOrderInfo(t) : this.native("getTransactionInfo", "(Ljava/lang/String;)Ljava/lang/String;", t)
                    }
                    restoreNonConsumablePurchase() {
                        o.isDistributionChannel(o.DistributionChannel.GooglePlay) ? e.recoverAcknowledgedPurchase() : this.native("restoreNonConsumableTransaction", "()V")
                    }
                    setUserId(e) {
                        this.native("setUserId", "(Ljava/lang/String;)V", e)
                    }
                    setSplashAdEnd() {
                        this.isSplashAdEnd = !0,
                            this.splashAdEndCallback && this.splashAdEndCallback(),
                            this.splashAdEndCallback = null
                    }
                    afterSplashAd(e) {
                        this.isSplashAdEnd ? e() : this.splashAdEndCallback = e
                    }
                    native(e, t, ...o) {
                        console.log("call android native " + e + " " + t + " " + o.join(","));
                        try {
                            if (this.bridge)
                                return o.forEach(e => {
                                    "number" == typeof e && (e *= 1)
                                }
                                ),
                                    this.bridge.call(e, ...o);
                            if (jsb)
                                return jsb.reflection.callStaticMethod("com/kariqu/sdkmanager/JavaScriptProxy", e, t, ...o)
                        } catch (i) { }
                    }
                    callCallback(e, ...t) {
                        if (this.callbacks.has(e))
                            try {
                                this.callbacks.get(e)(...t)
                            } catch (o) {
                                console.error(o)
                            } finally {
                                this.callbacks.delete(e)
                            }
                    }
                    uuid() {
                        return this.times++,
                            Date.now() + "-" + this.times
                    }
                    onShow(e) { }
                    offShow(e) { }
                    onHide(e) { }
                    offHide(e) { }
                    getSystemInfoSync() {
                        return JSON.parse(this.native("getSystemInfoSync", "()Ljava/lang/String;"))
                    }
                    getLaunchOptionsSync() {
                        let e = null
                            , t = this.native("getLaunchOptionsSync", "()Ljava/lang/String;");
                        if (t && "" != t)
                            try {
                                e = JSON.parse(t)
                            } catch (i) {
                                console.error(JSON.stringify(i))
                            }
                        else
                            o.log("Android getLaunchOptionsSync error('').");
                        return e
                    }
                    exitMiniProgram() {
                        this.native("exitApplication", "()V")
                    }
                    showRewardVideoAd(e) {
                        let t = "showRewardVideoAd:" + this.uuid();
                        this.callbacks.set(t, e);
                        let o = "showRewardVideoAd:show:" + this.uuid();
                        this.callbacks.set(o, e),
                            this.native("showRewardVideoAd", "(Ljava/lang/String;Ljava/lang/String;)V", o, t)
                    }
                    showFullScreenVideoAd() {
                        this.native("showFullScreenVideoAd", "()V")
                    }
                    showInterstitialAd() {
                        this.native("showInterstitialAd", "()V")
                    }
                    showBanner(e, t, o, i) {
                        this.native("showBanner", "(Ljava/lang/String;)V", JSON.stringify({
                            offsetX: null != e ? e : 0,
                            offsetY: null != t ? t : 0,
                            width: null != o ? o : 0,
                            height: null != i ? i : 0
                        }))
                    }
                    hideBanner() {
                        this.native("hideBanner", "()V")
                    }
                    showNativeAd(e) {
                        var t, o, i, n;
                        e.offsetX = null !== (t = e.offsetX) && void 0 !== t ? t : 0,
                            e.offsetY = null !== (o = e.offsetY) && void 0 !== o ? o : 0,
                            e.width = null !== (i = e.width) && void 0 !== i ? i : 0,
                            e.height = null !== (n = e.height) && void 0 !== n ? n : 0,
                            this.native("showNativeAd", "(Ljava/lang/String;)V", JSON.stringify(e))
                    }
                    hideNativeAd() {
                        this.native("hideNativeAd", "()V")
                    }
                    showOfferWallAd(e) {
                        this.offerWallListener = e,
                            this.native("showOfferWallAd", "()V")
                    }
                    onOfferwallAdCredited(e, t) {
                        var o;
                        null === (o = this.offerWallListener) || void 0 === o || o.call(this, e, t)
                    }
                    onOfferwallAdClosed() {
                        this.offerWallListener = null
                    }
                    showToast(e) {
                        this.native("showToast", "(Ljava/lang/String;)V", JSON.stringify(e))
                    }
                    getLanguage() {
                        return this.native("getLanguage", "()Ljava/lang/String;")
                    }
                    showModal(e) {
                        var t, o;
                        let i = "showModal:" + this.uuid();
                        this.native("showModal", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e.title, e.content, null !== (t = e.confirmText) && void 0 !== t ? t : "\u786e\u8ba4", e.showCancel ? null !== (o = e.cancelText) && void 0 !== o ? o : "\u53d6\u6d88" : "", i),
                            this.callbacks.set(i, e.success)
                    }
                    showLoading(e) {
                        this.native("showLoading", "(Ljava/lang/String;)V", e.title)
                    }
                    hideLoading(e) {
                        this.native("hideLoading", "()V")
                    }
                    showShareMenu(e) {
                        this.native("showShareMenu", "()V")
                    }
                    shareAppMessage(e) {
                        this.native("shareAppMessage", "(Ljava/lang/String;)V", JSON.stringify(e))
                    }
                    getUserInfo(e) { }
                    getWeChatOpenId(e) {
                        let t = "getWeChatOpenId:" + this.uuid();
                        this.callbacks.set(t, o => {
                            var i;
                            e(null !== (i = o.openid) && void 0 !== i ? i : ""),
                                this.callbacks.delete(t)
                        }
                        ),
                            this.native("getWeChatOpenId", "(Ljava/lang/String;)V", t)
                    }
                    login(e) {
                        let t = "login:success:" + this.uuid();
                        this.callbacks.set(t, e.success);
                        let o = "login:fail:" + this.uuid();
                        this.callbacks.set(o, e.fail);
                        let i = "login:complete:" + this.uuid();
                        this.callbacks.set(i, () => {
                            this.callbacks.delete(t),
                                this.callbacks.delete(o),
                                this.callbacks.delete(i)
                        }
                        ),
                            this.native("login", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, o, i)
                    }
                    setKeepScreenOn(e) { }
                    vibrateShort(e) {
                        this.native("vibrateShort", "()V")
                    }
                    vibrateLong(e) {
                        this.native("vibrateLong", "()V")
                    }
                    setClipboardData(e) {
                        var t;
                        this.native("setClipboardData", "(Ljava/lang/String;)V", e.data),
                            null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e, null)
                    }
                    getClipboardData(e) {
                        try {
                            e.success({
                                data: this.native("getClipboardData", "()Ljava/lang/String;")
                            })
                        } catch (t) { }
                    }
                    getBatteryInfo(e) { }
                    getBatteryInfoSync() {
                        return {
                            level: 0,
                            isCharging: !1
                        }
                    }
                    onOceanEngineInit() {
                        this.native("onOceanEngineInit", "()V")
                    }
                    reportKeyAction(e) {
                        e ? this.native("reportKeyAction", "(Ljava/lang/String;)V", e) : this.native("reportKeyAction", "()V")
                    }
                    onOceanEngineRegister(e, t) {
                        this.native("onOceanEngineRegister", "(Ljava/lang/String;Z)V", e, t)
                    }
                    onOceanEnginePurchase(e, t) {
                        this.native("onOceanEnginePurchase", "(Ljava/lang/String;Z)V", e, t)
                    }
                    jumpLeisureSubject() {
                        this.native("jumpLeisureSubject", "()V")
                    }
                    exitApplication() {
                        this.native("exitApplication", "()V")
                    }
                    isRewardVideoAdReady() {
                        return this.native("isRewardVideoAdReady", "()Z")
                    }
                    sendEvent(e, t) {
                        this.native("sendEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)
                    }
                    submitScore(t, o) {
                        e.submitScore(t, o)
                    }
                    showLeaderboard(t) {
                        e.showLeaderboard(t)
                    }
                }
            }(t || (t = {})),
            function (e) {
                window.AppProxy = e;
                const t = new class {
                    constructor() {
                        this.isAndroid = !1,
                            this.isiOS = !1
                    }
                    check(t) {
                        if (null == e.PROXY) {
                            if (null == this.platform) {
                                try {
                                    if (this.platform = jsb.reflection.callStaticMethod("com/kariqu/sdkmanager/JavaScriptProxy", "getPlatform", "()Ljava/lang/String;"),
                                        !this.platform)
                                        throw "";
                                    console.log("Platform : Cocos Creator Android")
                                } catch (i) {
                                    try {
                                        if (this.platform = jsb.reflection.callStaticMethod("JavaScriptProxy", "getPlatform"),
                                            !this.platform)
                                            throw "";
                                        console.log("Platform : Cocos Creator iOS")
                                    } catch (n) {
                                        try {
                                            if (this.platform = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy").call("getPlatform"),
                                                !this.platform)
                                                throw "";
                                            console.log("Platform : LayaAir Android")
                                        } catch (a) {
                                            try {
                                                if (this.platform = PlatformClass.createClass("JavaScriptProxy").call("getPlatform"),
                                                    !this.platform)
                                                    throw "";
                                                console.log("Platform : LayaAir iOS")
                                            } catch (s) {
                                                console.log("Platform : null, default " + t),
                                                    this.platform = null
                                            }
                                        }
                                    }
                                }
                                null == this.platform && (this.platform = t)
                            }
                            console.log(`AppProxy Platform is ${this.platform} default is ${t}`),
                                this.platform == o.Platform.Android ? (this.isAndroid = !0,
                                    e.PROXY = new e.AndroidProxy,
                                    console.log(`AppProxy PROXY init ${null == e.PROXY ? "failed" : "success"} Platform:${this.platform}`)) : this.platform == o.Platform.iOS && (this.isiOS = !0,
                                        e.PROXY = new e.IOSProxy,
                                        console.log(`AppProxy PROXY init ${null == e.PROXY ? "failed" : "success"} Platform:${this.platform}`))
                        }
                    }
                    isAndroidApp() {
                        return this.isAndroid
                    }
                    isiOSApp() {
                        return this.isiOS
                    }
                }
                    ;
                let i, n;
                (function (e) {
                    e[e.Consumable = 0] = "Consumable",
                        e[e.NonConsumable = 1] = "NonConsumable",
                        e[e.Subscription = 2] = "Subscription"
                }
                )(i = e.ProductType || (e.ProductType = {})),
                    function (e) {
                        e.SIGN_IN = "SIGN_IN",
                            e.SIGN_IN_FAILED = "SIGN_IN_FAILED",
                            e.SIGN_OUT = "SIGN_OUT",
                            e.SAVE_FILE = "SAVE_FILE",
                            e.LOAD_SAVE_FILE = "LOAD_SAVE_FILE",
                            e.REMOTE_CONFIG_SYNC = "REMOTE_CONFIG_SYNC",
                            e.GOT_SKU_DETAIL = "GOT_PRODUCT_DETAIL",
                            e.GOT_PRODUCT_DETAIL = "GOT_PRODUCT_DETAIL",
                            e.PENDING_ORDER = "PENDING_ORDER",
                            e.RECOVER_ACKNOWLEDGED_SKUS = "RESTORE_NONCONSUMABLE_PURCHASE",
                            e.RESTORE_NONCONSUMABLE_PURCHASE = "RESTORE_NONCONSUMABLE_PURCHASE",
                            e.PURCHASE_RESULT = "PURCHASE_RESULT",
                            e.XiaoMiCustomNativeAdClosed = "XiaoMiCustomNativeAdClosed",
                            e.OnLeaderboardDismiss = "OnLeaderboardDismiss"
                    }(n = e.ListenerKey || (e.ListenerKey = {}));
                const a = new Map;
                function s(e) {
                    return t.check(e),
                        t.isAndroidApp() || t.isiOSApp()
                }
                e.isAPP = s,
                    e.getPlatform = function () {
                        return t.isiOSApp() ? o.Platform.iOS : t.isAndroidApp() ? o.Platform.Android : o.Platform.Default
                    }
                    ;
                var r = null
                    , l = !1;
                function c(e, t) {
                    a.set(e, t)
                }
                function d(e) {
                    a.delete(e)
                }
                function u(e, t) {
                    if (a.has(n.PURCHASE_RESULT))
                        try {
                            a.get(n.PURCHASE_RESULT)(e, t)
                        } catch (o) { }
                }
                e.setSplashAdEndListener = function (e) {
                    l || !s() || o.Info.isPreview ? null == e || e() : r = e
                }
                    ,
                    e.afterSplashAd = function () {
                        console.log("AppProxy afterSplashAd"),
                            l = !0,
                            null == r || r()
                    }
                    ,
                    e.registListener = c,
                    e.unregistListener = d,
                    e.onXiaoMiCustomNativeAdClosed = function () {
                        if (a.has(n.XiaoMiCustomNativeAdClosed))
                            try {
                                a.get(n.XiaoMiCustomNativeAdClosed)()
                            } catch (e) { }
                    }
                    ,
                    e.onSignIn = function () {
                        if (a.has(n.SIGN_IN))
                            try {
                                a.get(n.SIGN_IN)()
                            } catch (e) { }
                    }
                    ,
                    e.onSignInFailed = function (e) {
                        if (a.has(n.SIGN_IN_FAILED))
                            try {
                                a.get(n.SIGN_IN_FAILED)(e)
                            } catch (t) { }
                    }
                    ,
                    e.onSignOut = function () {
                        if (a.has(n.SIGN_OUT))
                            try {
                                a.get(n.SIGN_OUT)()
                            } catch (e) { }
                    }
                    ,
                    e.onSaveFile = function (e) {
                        if (a.has(n.SAVE_FILE))
                            try {
                                a.get(n.SAVE_FILE)(e)
                            } catch (t) { }
                    }
                    ,
                    e.onLoadSavefile = function (e, t) {
                        if (a.has(n.LOAD_SAVE_FILE))
                            try {
                                a.get(n.LOAD_SAVE_FILE)(e, t)
                            } catch (o) { }
                    }
                    ,
                    e.onRemoteConfigSynced = function (e) {
                        if (a.has(n.REMOTE_CONFIG_SYNC))
                            try {
                                a.get(n.REMOTE_CONFIG_SYNC)(e)
                            } catch (t) { }
                    }
                    ,
                    e.onPendingOrder = function (e) {
                        if (a.has(n.PENDING_ORDER))
                            try {
                                a.get(n.PENDING_ORDER)(JSON.parse(e))
                            } catch (t) { }
                    }
                    ,
                    e.onPurchaseResult = u,
                    e.onGotSkuDetail = function (e, t) {
                        if (a.has(n.GOT_PRODUCT_DETAIL))
                            try {
                                a.get(n.GOT_PRODUCT_DETAIL)(e, t)
                            } catch (o) { }
                    }
                    ,
                    e.onRestoreNonConsumablePurchase = function (e) {
                        if (a.has(n.RESTORE_NONCONSUMABLE_PURCHASE))
                            try {
                                a.get(n.RESTORE_NONCONSUMABLE_PURCHASE)(JSON.parse(e))
                            } catch (t) { }
                    }
                    ,
                    e.signInGoogle = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.signInGoogle()
                    }
                    ,
                    e.signInGoogleSilently = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.signInGoogleSilently()
                    }
                    ,
                    e.signOutGoogle = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.signOutGoogle()
                    }
                    ,
                    e.saveFile = function (t) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.saveFile(t)
                    }
                    ,
                    e.loadSavefile = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.loadSavefile()
                    }
                    ,
                    e.setNonConsumableProduct = function (t) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.setNonConsumableProduct(t)
                    }
                    ,
                    e.getProductDetail = function (t) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.getProductDetail(t)
                    }
                    ,
                    e.requestPayment = function (t) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.requestPayment(t),
                            o.Info.isPreview && u(t, !0)
                    }
                    ,
                    e.checkPurchase = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.checkPurchase()
                    }
                    ,
                    e.fetchRemoteConfig = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.fetchRemoteConfig()
                    }
                    ,
                    e.confirmPurchase = function (t) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.confirmPurchase(t)
                    }
                    ,
                    e.getRemoteConfig = function () {
                        var t;
                        return null !== (t = null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.getRemoteConfig()) && void 0 !== t ? t : new Map
                    }
                    ,
                    e.getOrderInfo = function (t) {
                        try {
                            return JSON.parse(null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.getOrderInfo(t))
                        } catch (o) {
                            return null
                        }
                    }
                    ,
                    e.restoreNonConsumablePurchase = function () {
                        return null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.restoreNonConsumablePurchase()
                    }
                    ,
                    e.onOfferwallAdCredited = function (t, o) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdCredited(t, o)
                    }
                    ,
                    e.onOfferwallAdClosed = function () {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdClosed()
                    }
                    ,
                    e.submitScore = function (t, o) {
                        null === e.PROXY || void 0 === e.PROXY || e.PROXY.submitScore(t, o)
                    }
                    ,
                    e.showLeaderboard = function (t, o) {
                        c(n.OnLeaderboardDismiss, () => {
                            d(n.OnLeaderboardDismiss),
                                null == o || o()
                        }
                        ),
                            null === e.PROXY || void 0 === e.PROXY || e.PROXY.showLeaderboard(t)
                    }
                    ,
                    e.invokeListener = function (e) {
                        var t;
                        null === (t = a.get(e)) || void 0 === t || t()
                    }
            }(t || (t = {})),
            function (e) {
                window.GoogleService = e;
                var t = null;
                function i(e, o, ...i) {
                    console.log("call android native " + e + " " + o + " " + i.join(","));
                    try {
                        return jsb.reflection.callStaticMethod("com/kariqu/googleservice/GSSDK", e, o, ...i)
                    } catch (n) {
                        return null == t && (t = PlatformClass.createClass("com.kariqu.googleservice.GSSDK")),
                            t.call(e, ...i)
                    }
                }
                e.signIn = function () {
                    i("signIn", "()V")
                }
                    ,
                    e.signInSilently = function () {
                        i("signInSilently", "()V")
                    }
                    ,
                    e.signOut = function () {
                        i("signOut", "()V")
                    }
                    ,
                    e.saveFile = function (e) {
                        i("saveFile", "(Ljava/lang/String;)V", e)
                    }
                    ,
                    e.loadSavefile = function () {
                        i("loadSavefile", "()V")
                    }
                    ,
                    e.setAcknowledgedSku = function (e) {
                        i("setAcknowledgedSku", "(Ljava/lang/String;)V", JSON.stringify(e))
                    }
                    ,
                    e.loadSkuDetail = function (e, t) {
                        i("loadSkuDetail", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), JSON.stringify(t))
                    }
                    ,
                    e.purchaseSku = function (e) {
                        i("purchaseSku", "(Ljava/lang/String;)V", e)
                    }
                    ,
                    e.checkPurchase = function () {
                        i("checkPurchase", "()V")
                    }
                    ,
                    e.syncRemoteConfig = function () {
                        i("syncRemoteConfig", "()V")
                    }
                    ,
                    e.confirmPurchase = function (e) {
                        i("confirmPurchase", "(Ljava/lang/String;)V", e)
                    }
                    ,
                    e.getRemoteConfig = function () {
                        let e = i("getRemoteConfig", "()Ljava/lang/String;");
                        o.log("Google RemoteConfig is " + e);
                        let t = JSON.parse(e)
                            , n = new Map;
                        for (let o of Object.keys(t))
                            n.set(o, t[o]);
                        return n
                    }
                    ,
                    e.getOrderInfo = function (e) {
                        return i("getOrderInfo", "(Ljava/lang/String;)Ljava/lang/String;", e)
                    }
                    ,
                    e.recoverAcknowledgedPurchase = function () {
                        return i("recoverAcknowledgedPurchase", "()V")
                    }
                    ,
                    e.submitScore = function (e, t) {
                        i("submitScore", "(Ljava/lang/String;I)V", e, t)
                    }
                    ,
                    e.showLeaderboard = function (e) {
                        i("showLeaderboard", "(Ljava/lang/String;)V", e)
                    }
            }(e || (e = {})),
            function (e) {
                e.IOSProxy = class extends e.BaseAppProxy {
                    constructor() {
                        super(),
                            this.compatibleMethods = ["onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC"],
                            this.bridge = null,
                            this.callbacks = new Map,
                            this.callbackValidTimes = new Map,
                            this.times = 0,
                            this.compatibleMethods.forEach(e => {
                                this[e] = () => {
                                    console.log(`iOS \u6682\u4e0d\u652f\u6301 ${e}`)
                                }
                            }
                            );
                        try {
                            this.bridge = PlatformClass.createClass("JavaScriptProxy")
                        } catch (e) { }
                    }
                    native(e, ...t) {
                        let i = null
                            , n = null;
                        try {
                            o.isEngine(o.EngineType.CocosCreator) && "undefined" != typeof jsb ? i = t ? jsb.reflection.callStaticMethod("JavaScriptProxy", e, ...t) : jsb.reflection.callStaticMethod("JavaScriptProxy", e) : o.isEngine(o.EngineType.LayaAir) && (i = t ? this.bridge.call(e, ...t) : this.bridge.call(e))
                        } catch (a) {
                            n = a
                        }
                        return n ? (console.log("call ios native ", e, " error."),
                            console.error(n)) : console.log("call ios native ", e, " return:", i),
                            i
                    }
                    sendEvent(e, t) {
                        this.native("sendEvent:params:", e, null != t ? t : "")
                    }
                    callCallback(e, ...t) {
                        if (this.callbacks.has(e)) {
                            console.log("ios call jscallback : ", e, JSON.stringify(t));
                            try {
                                this.callbacks.get(e)(...t)
                            } catch (o) {
                                console.error(o)
                            } finally {
                                let t = this.callbackValidTimes.get(e);
                                t > 1 ? this.callbackValidTimes.set(e, t - 1) : (this.callbacks.delete(e),
                                    this.callbackValidTimes.delete(e))
                            }
                        } else
                            console.log("ios call jscallback(not exist): ", e, JSON.stringify(t))
                    }
                    addCallback(e, t, o) {
                        this.callbacks.set(e, t),
                            this.callbackValidTimes.set(e, o)
                    }
                    uuid() {
                        return this.times++,
                            Date.now() + "-" + this.times
                    }
                    onShow(e) { }
                    offShow(e) { }
                    onHide(e) { }
                    offHide(e) { }
                    getSystemInfoSync() {
                        var e;
                        return JSON.parse(null !== (e = this.native("getSystemInfoSync")) && void 0 !== e ? e : "{}")
                    }
                    getLaunchOptionsSync() {
                        var e;
                        return JSON.parse(null !== (e = this.native("getLaunchOptionsSync")) && void 0 !== e ? e : "{}")
                    }
                    exitMiniProgram() {
                        this.native("exitMiniProgram")
                    }
                    showRewardVideoAd(e) {
                        let t = "showRewardVideoAd:show:" + this.uuid();
                        this.addCallback(t, e, 2),
                            this.native("showRewardVideoAd:scene:", t, "")
                    }
                    showFullScreenVideoAd() {
                        this.native("showFullScreenVideoAd:", "")
                    }
                    showInterstitialAd() {
                        this.native("showInterstitial")
                    }
                    showBanner(e, t, o, i) {
                        this.native("showBannerAdWithOffsetX:offsetY:width:height:", e, t, o, i)
                    }
                    hideBanner() {
                        this.native("hideBannerAd")
                    }
                    showNativeAd(e) {
                        var t, o, i, n;
                        this.native("showNativeAdWithOffsetX:offsetY:width:height:", null !== (t = e.offsetX) && void 0 !== t ? t : 0, null !== (o = e.offsetY) && void 0 !== o ? o : 0, null !== (i = e.width) && void 0 !== i ? i : 0, null !== (n = e.height) && void 0 !== n ? n : 0)
                    }
                    hideNativeAd() {
                        this.native("hideNativeAd")
                    }
                    showToast(e) {
                        var t;
                        e.duration && e.duration > 100 && (e.duration = e.duration / 1e3),
                            this.native("showToast:duration:", e.title, null !== (t = e.duration) && void 0 !== t ? t : 1.5)
                    }
                    showModal(e) {
                        var t, o;
                        let i = "showModal:" + this.uuid();
                        this.native("showModal:content:cancelText:confirmText:callbackKey:", e.title, e.content, e.showCancel ? null !== (t = e.cancelText) && void 0 !== t ? t : "\u53d6\u6d88" : "", null !== (o = e.confirmText) && void 0 !== o ? o : "\u786e\u8ba4", i),
                            this.addCallback(i, e.success, 1)
                    }
                    showLoading(e) {
                        var t;
                        this.native("showLoading:mask:", null !== (t = e.title) && void 0 !== t ? t : "", !!e.mask)
                    }
                    hideLoading(e) {
                        this.native("hideLoading")
                    }
                    showShareMenu(e) {
                        this.native("showShareMenu")
                    }
                    shareAppMessage(e) { }
                    login(e) {
                        var t;
                        let o = this.native("login");
                        null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e, {
                            code: o
                        })
                    }
                    setUserId(e) {
                        this.native("setUserId:", e)
                    }
                    setKeepScreenOn(e) { }
                    vibrateShort(e) {
                        this.native("vibrate:", 15)
                    }
                    vibrateLong(e) {
                        this.native("vibrate:", 400)
                    }
                    setClipboardData(e) {
                        var t, o;
                        this.native("setClipboardData:", null !== (t = e.data) && void 0 !== t ? t : ""),
                            null === (o = null == e ? void 0 : e.success) || void 0 === o || o.call(e, null)
                    }
                    getClipboardData(e) {
                        try {
                            e.success({
                                data: this.native("getClipboardData")
                            })
                        } catch (t) { }
                    }
                    getBatteryInfo(e) { }
                    getBatteryInfoSync() {
                        return {
                            level: 0,
                            isCharging: !1
                        }
                    }
                    onOceanEngineInit() {
                        this.native("onOceanEngineInit")
                    }
                    reportKeyAction(e) {
                        e ? this.native("reportKeyAction:", e) : this.native("reportKeyAction")
                    }
                    onOceanEngineRegister(e, t) {
                        this.native("onOceanEngineRegister:success:", e, t)
                    }
                    onOceanEnginePurchase(e, t) {
                        this.native("onOceanEnginePurchase:success:", e, t)
                    }
                    getMenuButtonBoundingClientRect() {
                        return {
                            top: this.native("getTopUnsafeArea"),
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    exitApplication() {
                        this.native("exitApplication")
                    }
                    isRewardVideoAdReady() {
                        return this.native("isRewardVideoAdReady")
                    }
                    getProductDetail(e) {
                        this.native("getProductsInfo:", JSON.stringify(e))
                    }
                    requestPayment(e) {
                        this.native("payProduct:", e)
                    }
                    checkPurchase() {
                        this.native("checkPurchase")
                    }
                    confirmPurchase(e) {
                        this.native("confirmPurchase:", e)
                    }
                    getOrderInfo(e) {
                        return this.native("getTransactionInfo:", e)
                    }
                    restoreNonConsumablePurchase() {
                        this.native("restoreNonConsumablePurchase")
                    }
                    fetchRemoteConfig() {
                        this.native("fetchRemoteConfig")
                    }
                    getRemoteConfig() {
                        let e = this.native("getRemoteConfig")
                            , t = JSON.parse(e)
                            , o = new Map;
                        for (let i of Object.keys(t))
                            o.set(i, t[i]);
                        return o
                    }
                    submitScore(e, t) {
                        this.native("submitScore:score:", e, t)
                    }
                    showLeaderboard(e) {
                        this.native("showLeaderboard:", e)
                    }
                }
            }(t || (t = {})),
            function (e) {
                e.PlatformAdapter = class {
                    constructor() {
                        this.platform = e.Platform.Default
                    }
                }
            }(o || (o = {}))
    }
        , {}],
    2: [function (e, t, o) {
        var i;
        i = function e() {
            "use strict";
            var t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {}
                , o = !t.document && !!t.postMessage
                , i = o && /blob:/i.test((t.location || {}).protocol)
                , n = {}
                , a = 0
                , s = {
                    parse: function (o, i) {
                        var r = (i = i || {}).dynamicTyping || !1;
                        if (S(r) && (i.dynamicTypingFunction = r,
                            r = {}),
                            i.dynamicTyping = r,
                            i.transform = !!S(i.transform) && i.transform,
                            i.worker && s.WORKERS_SUPPORTED) {
                            var l = function () {
                                if (!s.WORKERS_SUPPORTED)
                                    return !1;
                                var o, i, r = (o = t.URL || t.webkitURL || null,
                                    i = e.toString(),
                                    s.BLOB_URL || (s.BLOB_URL = o.createObjectURL(new Blob(["(", i, ")();"], {
                                        type: "text/javascript"
                                    })))), l = new t.Worker(r);
                                return l.onmessage = m,
                                    l.id = a++,
                                    n[l.id] = l
                            }();
                            return l.userStep = i.step,
                                l.userChunk = i.chunk,
                                l.userComplete = i.complete,
                                l.userError = i.error,
                                i.step = S(i.step),
                                i.chunk = S(i.chunk),
                                i.complete = S(i.complete),
                                i.error = S(i.error),
                                delete i.worker,
                                void l.postMessage({
                                    input: o,
                                    config: i,
                                    workerId: l.id
                                })
                        }
                        var f = null;
                        return s.NODE_STREAM_INPUT,
                            "string" == typeof o ? f = i.download ? new c(i) : new u(i) : !0 === o.readable && S(o.read) && S(o.on) ? f = new h(i) : (t.File && o instanceof File || o instanceof Object) && (f = new d(i)),
                            f.stream(o)
                    },
                    unparse: function (e, t) {
                        var o = !1
                            , i = !0
                            , n = ","
                            , a = "\r\n"
                            , r = '"'
                            , l = r + r
                            , c = !1
                            , d = null
                            , u = !1;
                        !function () {
                            if ("object" == typeof t) {
                                if ("string" != typeof t.delimiter || s.BAD_DELIMITERS.filter(function (e) {
                                    return -1 !== t.delimiter.indexOf(e)
                                }).length || (n = t.delimiter),
                                    ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (o = t.quotes),
                                    "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (c = t.skipEmptyLines),
                                    "string" == typeof t.newline && (a = t.newline),
                                    "string" == typeof t.quoteChar && (r = t.quoteChar),
                                    "boolean" == typeof t.header && (i = t.header),
                                    Array.isArray(t.columns)) {
                                    if (0 === t.columns.length)
                                        throw new Error("Option columns is empty");
                                    d = t.columns
                                }
                                void 0 !== t.escapeChar && (l = t.escapeChar + r),
                                    ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (u = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/)
                            }
                        }();
                        var h = new RegExp(g(r), "g");
                        if ("string" == typeof e && (e = JSON.parse(e)),
                            Array.isArray(e)) {
                            if (!e.length || Array.isArray(e[0]))
                                return f(null, e, c);
                            if ("object" == typeof e[0])
                                return f(d || Object.keys(e[0]), e, c)
                        } else if ("object" == typeof e)
                            return "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                                Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || d),
                                    e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []),
                                    Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])),
                                f(e.fields || [], e.data || [], c);
                        throw new Error("Unable to serialize unrecognized input");
                        function f(e, t, o) {
                            var s = "";
                            "string" == typeof e && (e = JSON.parse(e)),
                                "string" == typeof t && (t = JSON.parse(t));
                            var r = Array.isArray(e) && 0 < e.length
                                , l = !Array.isArray(t[0]);
                            if (r && i) {
                                for (var c = 0; c < e.length; c++)
                                    0 < c && (s += n),
                                        s += p(e[c], c);
                                0 < t.length && (s += a)
                            }
                            for (var d = 0; d < t.length; d++) {
                                var u = r ? e.length : t[d].length
                                    , h = !1
                                    , f = r ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                                if (o && !r && (h = "greedy" === o ? "" === t[d].join("").trim() : 1 === t[d].length && 0 === t[d][0].length),
                                    "greedy" === o && r) {
                                    for (var g = [], m = 0; m < u; m++) {
                                        var v = l ? e[m] : m;
                                        g.push(t[d][v])
                                    }
                                    h = "" === g.join("").trim()
                                }
                                if (!h) {
                                    for (var M = 0; M < u; M++) {
                                        0 < M && !f && (s += n);
                                        var y = r && l ? e[M] : M;
                                        s += p(t[d][y], M)
                                    }
                                    d < t.length - 1 && (!o || 0 < u && !f) && (s += a)
                                }
                            }
                            return s
                        }
                        function p(e, t) {
                            if (null == e)
                                return "";
                            if (e.constructor === Date)
                                return JSON.stringify(e).slice(1, 25);
                            var i = !1;
                            u && "string" == typeof e && u.test(e) && (e = "'" + e,
                                i = !0);
                            var a = e.toString().replace(h, l);
                            return (i = i || !0 === o || "function" == typeof o && o(e, t) || Array.isArray(o) && o[t] || function (e, t) {
                                for (var o = 0; o < t.length; o++)
                                    if (-1 < e.indexOf(t[o]))
                                        return !0;
                                return !1
                            }(a, s.BAD_DELIMITERS) || -1 < a.indexOf(n) || " " === a.charAt(0) || " " === a.charAt(a.length - 1)) ? r + a + r : a
                        }
                    }
                };
            if (s.RECORD_SEP = String.fromCharCode(30),
                s.UNIT_SEP = String.fromCharCode(31),
                s.BYTE_ORDER_MARK = "\ufeff",
                s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK],
                s.WORKERS_SUPPORTED = !o && !!t.Worker,
                s.NODE_STREAM_INPUT = 1,
                s.LocalChunkSize = 10485760,
                s.RemoteChunkSize = 5242880,
                s.DefaultDelimiter = ",",
                s.Parser = p,
                s.ParserHandle = f,
                s.NetworkStreamer = c,
                s.FileStreamer = d,
                s.StringStreamer = u,
                s.ReadableStreamStreamer = h,
                t.jQuery) {
                var r = t.jQuery;
                r.fn.parse = function (e) {
                    var o = e.config || {}
                        , i = [];
                    return this.each(function () {
                        if ("INPUT" !== r(this).prop("tagName").toUpperCase() || "file" !== r(this).attr("type").toLowerCase() || !t.FileReader || !this.files || 0 === this.files.length)
                            return !0;
                        for (var e = 0; e < this.files.length; e++)
                            i.push({
                                file: this.files[e],
                                inputElem: this,
                                instanceConfig: r.extend({}, o)
                            })
                    }),
                        n(),
                        this;
                    function n() {
                        if (0 !== i.length) {
                            var t, o, n, l = i[0];
                            if (S(e.before)) {
                                var c = e.before(l.file, l.inputElem);
                                if ("object" == typeof c) {
                                    if ("abort" === c.action)
                                        return t = l.file,
                                            o = l.inputElem,
                                            n = c.reason,
                                            void (S(e.error) && e.error({
                                                name: "AbortError"
                                            }, t, o, n));
                                    if ("skip" === c.action)
                                        return void a();
                                    "object" == typeof c.config && (l.instanceConfig = r.extend(l.instanceConfig, c.config))
                                } else if ("skip" === c)
                                    return void a()
                            }
                            var d = l.instanceConfig.complete;
                            l.instanceConfig.complete = function (e) {
                                S(d) && d(e, l.file, l.inputElem),
                                    a()
                            }
                                ,
                                s.parse(l.file, l.instanceConfig)
                        } else
                            S(e.complete) && e.complete()
                    }
                    function a() {
                        i.splice(0, 1),
                            n()
                    }
                }
            }
            function l(e) {
                this._handle = null,
                    this._finished = !1,
                    this._completed = !1,
                    this._halted = !1,
                    this._input = null,
                    this._baseIndex = 0,
                    this._partialLine = "",
                    this._rowCount = 0,
                    this._start = 0,
                    this._nextChunk = null,
                    this.isFirstChunk = !0,
                    this._completeResults = {
                        data: [],
                        errors: [],
                        meta: {}
                    },
                    function (e) {
                        var t = y(e);
                        t.chunkSize = parseInt(t.chunkSize),
                            e.step || e.chunk || (t.chunkSize = null),
                            this._handle = new f(t),
                            (this._handle.streamer = this)._config = t
                    }
                        .call(this, e),
                    this.parseChunk = function (e, o) {
                        if (this.isFirstChunk && S(this._config.beforeFirstChunk)) {
                            var n = this._config.beforeFirstChunk(e);
                            void 0 !== n && (e = n)
                        }
                        this.isFirstChunk = !1,
                            this._halted = !1;
                        var a = this._partialLine + e;
                        this._partialLine = "";
                        var r = this._handle.parse(a, this._baseIndex, !this._finished);
                        if (!this._handle.paused() && !this._handle.aborted()) {
                            var l = r.meta.cursor;
                            this._finished || (this._partialLine = a.substring(l - this._baseIndex),
                                this._baseIndex = l),
                                r && r.data && (this._rowCount += r.data.length);
                            var c = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                            if (i)
                                t.postMessage({
                                    results: r,
                                    workerId: s.WORKER_ID,
                                    finished: c
                                });
                            else if (S(this._config.chunk) && !o) {
                                if (this._config.chunk(r, this._handle),
                                    this._handle.paused() || this._handle.aborted())
                                    return void (this._halted = !0);
                                r = void 0,
                                    this._completeResults = void 0
                            }
                            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data),
                                this._completeResults.errors = this._completeResults.errors.concat(r.errors),
                                this._completeResults.meta = r.meta),
                                this._completed || !c || !S(this._config.complete) || r && r.meta.aborted || (this._config.complete(this._completeResults, this._input),
                                    this._completed = !0),
                                c || r && r.meta.paused || this._nextChunk(),
                                r
                        }
                        this._halted = !0
                    }
                    ,
                    this._sendError = function (e) {
                        S(this._config.error) ? this._config.error(e) : i && this._config.error && t.postMessage({
                            workerId: s.WORKER_ID,
                            error: e,
                            finished: !1
                        })
                    }
            }
            function c(e) {
                var t;
                (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
                    l.call(this, e),
                    this._nextChunk = o ? function () {
                        this._readChunk(),
                            this._chunkLoaded()
                    }
                        : function () {
                            this._readChunk()
                        }
                    ,
                    this.stream = function (e) {
                        this._input = e,
                            this._nextChunk()
                    }
                    ,
                    this._readChunk = function () {
                        if (this._finished)
                            this._chunkLoaded();
                        else {
                            if (t = new XMLHttpRequest,
                                this._config.withCredentials && (t.withCredentials = this._config.withCredentials),
                                o || (t.onload = P(this._chunkLoaded, this),
                                    t.onerror = P(this._chunkError, this)),
                                t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !o),
                                this._config.downloadRequestHeaders) {
                                var e = this._config.downloadRequestHeaders;
                                for (var i in e)
                                    t.setRequestHeader(i, e[i])
                            }
                            if (this._config.chunkSize) {
                                var n = this._start + this._config.chunkSize - 1;
                                t.setRequestHeader("Range", "bytes=" + this._start + "-" + n)
                            }
                            try {
                                t.send(this._config.downloadRequestBody)
                            } catch (e) {
                                this._chunkError(e.message)
                            }
                            o && 0 === t.status && this._chunkError()
                        }
                    }
                    ,
                    this._chunkLoaded = function () {
                        var e;
                        4 === t.readyState && (t.status < 200 || 400 <= t.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length,
                            this._finished = !this._config.chunkSize || this._start >= (null === (e = t.getResponseHeader("Content-Range")) ? -1 : parseInt(e.substring(e.lastIndexOf("/") + 1))),
                            this.parseChunk(t.responseText)))
                    }
                    ,
                    this._chunkError = function (e) {
                        var o = t.statusText || e;
                        this._sendError(new Error(o))
                    }
            }
            function d(e) {
                var t, o;
                (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
                    l.call(this, e);
                var i = "undefined" != typeof FileReader;
                this.stream = function (e) {
                    this._input = e,
                        o = e.slice || e.webkitSlice || e.mozSlice,
                        i ? ((t = new FileReader).onload = P(this._chunkLoaded, this),
                            t.onerror = P(this._chunkError, this)) : t = new FileReaderSync,
                        this._nextChunk()
                }
                    ,
                    this._nextChunk = function () {
                        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
                    }
                    ,
                    this._readChunk = function () {
                        var e = this._input;
                        if (this._config.chunkSize) {
                            var n = Math.min(this._start + this._config.chunkSize, this._input.size);
                            e = o.call(e, this._start, n)
                        }
                        var a = t.readAsText(e, this._config.encoding);
                        i || this._chunkLoaded({
                            target: {
                                result: a
                            }
                        })
                    }
                    ,
                    this._chunkLoaded = function (e) {
                        this._start += this._config.chunkSize,
                            this._finished = !this._config.chunkSize || this._start >= this._input.size,
                            this.parseChunk(e.target.result)
                    }
                    ,
                    this._chunkError = function () {
                        this._sendError(t.error)
                    }
            }
            function u(e) {
                var t;
                l.call(this, e = e || {}),
                    this.stream = function (e) {
                        return t = e,
                            this._nextChunk()
                    }
                    ,
                    this._nextChunk = function () {
                        if (!this._finished) {
                            var e, o = this._config.chunkSize;
                            return o ? (e = t.substring(0, o),
                                t = t.substring(o)) : (e = t,
                                    t = ""),
                                this._finished = !t,
                                this.parseChunk(e)
                        }
                    }
            }
            function h(e) {
                l.call(this, e = e || {});
                var t = []
                    , o = !0
                    , i = !1;
                this.pause = function () {
                    l.prototype.pause.apply(this, arguments),
                        this._input.pause()
                }
                    ,
                    this.resume = function () {
                        l.prototype.resume.apply(this, arguments),
                            this._input.resume()
                    }
                    ,
                    this.stream = function (e) {
                        this._input = e,
                            this._input.on("data", this._streamData),
                            this._input.on("end", this._streamEnd),
                            this._input.on("error", this._streamError)
                    }
                    ,
                    this._checkIsFinished = function () {
                        i && 1 === t.length && (this._finished = !0)
                    }
                    ,
                    this._nextChunk = function () {
                        this._checkIsFinished(),
                            t.length ? this.parseChunk(t.shift()) : o = !0
                    }
                    ,
                    this._streamData = P(function (e) {
                        try {
                            t.push("string" == typeof e ? e : e.toString(this._config.encoding)),
                                o && (o = !1,
                                    this._checkIsFinished(),
                                    this.parseChunk(t.shift()))
                        } catch (e) {
                            this._streamError(e)
                        }
                    }, this),
                    this._streamError = P(function (e) {
                        this._streamCleanUp(),
                            this._sendError(e)
                    }, this),
                    this._streamEnd = P(function () {
                        this._streamCleanUp(),
                            i = !0,
                            this._streamData("")
                    }, this),
                    this._streamCleanUp = P(function () {
                        this._input.removeListener("data", this._streamData),
                            this._input.removeListener("end", this._streamEnd),
                            this._input.removeListener("error", this._streamError)
                    }, this)
            }
            function f(e) {
                var t, o, i, n = Math.pow(2, 53), a = -n, r = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, l = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, c = this, d = 0, u = 0, h = !1, f = !1, m = [], v = {
                    data: [],
                    errors: [],
                    meta: {}
                };
                if (S(e.step)) {
                    var M = e.step;
                    e.step = function (t) {
                        if (v = t,
                            C())
                            A();
                        else {
                            if (A(),
                                0 === v.data.length)
                                return;
                            d += t.data.length,
                                e.preview && d > e.preview ? o.abort() : (v.data = v.data[0],
                                    M(v, c))
                        }
                    }
                }
                function P(t) {
                    return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length
                }
                function A() {
                    return v && i && (I("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + s.DefaultDelimiter + "'"),
                        i = !1),
                        e.skipEmptyLines && (v.data = v.data.filter(function (e) {
                            return !P(e)
                        })),
                        C() && function () {
                            if (v)
                                if (Array.isArray(v.data[0])) {
                                    for (var t = 0; C() && t < v.data.length; t++)
                                        v.data[t].forEach(o);
                                    v.data.splice(0, 1)
                                } else
                                    v.data.forEach(o);
                            function o(t, o) {
                                S(e.transformHeader) && (t = e.transformHeader(t, o)),
                                    m.push(t)
                            }
                        }(),
                        function () {
                            if (!v || !e.header && !e.dynamicTyping && !e.transform)
                                return v;
                            function t(t, o) {
                                var i, n = e.header ? {} : [];
                                for (i = 0; i < t.length; i++) {
                                    var a = i
                                        , s = t[i];
                                    e.header && (a = i >= m.length ? "__parsed_extra" : m[i]),
                                        e.transform && (s = e.transform(s, a)),
                                        s = w(a, s),
                                        "__parsed_extra" === a ? (n[a] = n[a] || [],
                                            n[a].push(s)) : n[a] = s
                                }
                                return e.header && (i > m.length ? I("FieldMismatch", "TooManyFields", "Too many fields: expected " + m.length + " fields but parsed " + i, u + o) : i < m.length && I("FieldMismatch", "TooFewFields", "Too few fields: expected " + m.length + " fields but parsed " + i, u + o)),
                                    n
                            }
                            var o = 1;
                            return !v.data.length || Array.isArray(v.data[0]) ? (v.data = v.data.map(t),
                                o = v.data.length) : v.data = t(v.data, 0),
                                e.header && v.meta && (v.meta.fields = m),
                                u += o,
                                v
                        }()
                }
                function C() {
                    return e.header && 0 === m.length
                }
                function w(t, o) {
                    return i = t,
                        e.dynamicTypingFunction && void 0 === e.dynamicTyping[i] && (e.dynamicTyping[i] = e.dynamicTypingFunction(i)),
                        !0 === (e.dynamicTyping[i] || e.dynamicTyping) ? "true" === o || "TRUE" === o || "false" !== o && "FALSE" !== o && (function (e) {
                            if (r.test(e)) {
                                var t = parseFloat(e);
                                if (a < t && t < n)
                                    return !0
                            }
                            return !1
                        }(o) ? parseFloat(o) : l.test(o) ? new Date(o) : "" === o ? null : o) : o;
                    var i
                }
                function I(e, t, o, i) {
                    var n = {
                        type: e,
                        code: t,
                        message: o
                    };
                    void 0 !== i && (n.row = i),
                        v.errors.push(n)
                }
                this.parse = function (n, a, r) {
                    var l = e.quoteChar || '"';
                    if (e.newline || (e.newline = function (e, t) {
                        e = e.substring(0, 1048576);
                        var o = new RegExp(g(t) + "([^]*?)" + g(t), "gm")
                            , i = (e = e.replace(o, "")).split("\r")
                            , n = e.split("\n")
                            , a = 1 < n.length && n[0].length < i[0].length;
                        if (1 === i.length || a)
                            return "\n";
                        for (var s = 0, r = 0; r < i.length; r++)
                            "\n" === i[r][0] && s++;
                        return s >= i.length / 2 ? "\r\n" : "\r"
                    }(n, l)),
                        i = !1,
                        e.delimiter)
                        S(e.delimiter) && (e.delimiter = e.delimiter(n),
                            v.meta.delimiter = e.delimiter);
                    else {
                        var c = function (t, o, i, n, a) {
                            var r, l, c, d;
                            a = a || [",", "\t", "|", ";", s.RECORD_SEP, s.UNIT_SEP];
                            for (var u = 0; u < a.length; u++) {
                                var h = a[u]
                                    , f = 0
                                    , g = 0
                                    , m = 0;
                                c = void 0;
                                for (var v = new p({
                                    comments: n,
                                    delimiter: h,
                                    newline: o,
                                    preview: 10
                                }).parse(t), M = 0; M < v.data.length; M++)
                                    if (i && P(v.data[M]))
                                        m++;
                                    else {
                                        var y = v.data[M].length;
                                        g += y,
                                            void 0 !== c ? 0 < y && (f += Math.abs(y - c),
                                                c = y) : c = y
                                    }
                                0 < v.data.length && (g /= v.data.length - m),
                                    (void 0 === l || f <= l) && (void 0 === d || d < g) && 1.99 < g && (l = f,
                                        r = h,
                                        d = g)
                            }
                            return {
                                successful: !!(e.delimiter = r),
                                bestDelimiter: r
                            }
                        }(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                        c.successful ? e.delimiter = c.bestDelimiter : (i = !0,
                            e.delimiter = s.DefaultDelimiter),
                            v.meta.delimiter = e.delimiter
                    }
                    var d = y(e);
                    return e.preview && e.header && d.preview++,
                        t = n,
                        o = new p(d),
                        v = o.parse(t, a, r),
                        A(),
                        h ? {
                            meta: {
                                paused: !0
                            }
                        } : v || {
                            meta: {
                                paused: !1
                            }
                        }
                }
                    ,
                    this.paused = function () {
                        return h
                    }
                    ,
                    this.pause = function () {
                        h = !0,
                            o.abort(),
                            t = S(e.chunk) ? "" : t.substring(o.getCharIndex())
                    }
                    ,
                    this.resume = function () {
                        c.streamer._halted ? (h = !1,
                            c.streamer.parseChunk(t, !0)) : setTimeout(c.resume, 3)
                    }
                    ,
                    this.aborted = function () {
                        return f
                    }
                    ,
                    this.abort = function () {
                        f = !0,
                            o.abort(),
                            v.meta.aborted = !0,
                            S(e.complete) && e.complete(v),
                            t = ""
                    }
            }
            function g(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            function p(e) {
                var t, o = (e = e || {}).delimiter, i = e.newline, n = e.comments, a = e.step, r = e.preview, l = e.fastMode, c = t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
                if (void 0 !== e.escapeChar && (c = e.escapeChar),
                    ("string" != typeof o || -1 < s.BAD_DELIMITERS.indexOf(o)) && (o = ","),
                    n === o)
                    throw new Error("Comment character same as delimiter");
                !0 === n ? n = "#" : ("string" != typeof n || -1 < s.BAD_DELIMITERS.indexOf(n)) && (n = !1),
                    "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
                var d = 0
                    , u = !1;
                this.parse = function (e, s, h) {
                    if ("string" != typeof e)
                        throw new Error("Input must be a string");
                    var f = e.length
                        , p = o.length
                        , m = i.length
                        , v = n.length
                        , M = S(a)
                        , y = []
                        , P = []
                        , A = []
                        , C = d = 0;
                    if (!e)
                        return D();
                    if (l || !1 !== l && -1 === e.indexOf(t)) {
                        for (var w = e.split(i), I = 0; I < w.length; I++) {
                            if (A = w[I],
                                d += A.length,
                                I !== w.length - 1)
                                d += i.length;
                            else if (h)
                                return D();
                            if (!n || A.substring(0, v) !== n) {
                                if (M) {
                                    if (y = [],
                                        O(A.split(o)),
                                        N(),
                                        u)
                                        return D()
                                } else
                                    O(A.split(o));
                                if (r && r <= I)
                                    return y = y.slice(0, r),
                                        D(!0)
                            }
                        }
                        return D()
                    }
                    for (var k = e.indexOf(o, d), b = e.indexOf(i, d), E = new RegExp(g(c) + g(t), "g"), T = e.indexOf(t, d); ;)
                        if (e[d] !== t)
                            if (n && 0 === A.length && e.substring(d, d + v) === n) {
                                if (-1 === b)
                                    return D();
                                d = b + m,
                                    b = e.indexOf(i, d),
                                    k = e.indexOf(o, d)
                            } else if (-1 !== k && (k < b || -1 === b))
                                A.push(e.substring(d, k)),
                                    d = k + p,
                                    k = e.indexOf(o, d);
                            else {
                                if (-1 === b)
                                    break;
                                if (A.push(e.substring(d, b)),
                                    L(b + m),
                                    M && (N(),
                                        u))
                                    return D();
                                if (r && y.length >= r)
                                    return D(!0)
                            }
                        else
                            for (T = d,
                                d++; ;) {
                                if (-1 === (T = e.indexOf(t, T + 1)))
                                    return h || P.push({
                                        type: "Quotes",
                                        code: "MissingQuotes",
                                        message: "Quoted field unterminated",
                                        row: y.length,
                                        index: d
                                    }),
                                        G();
                                if (T === f - 1)
                                    return G(e.substring(d, T).replace(E, t));
                                if (t !== c || e[T + 1] !== c) {
                                    if (t === c || 0 === T || e[T - 1] !== c) {
                                        -1 !== k && k < T + 1 && (k = e.indexOf(o, T + 1)),
                                            -1 !== b && b < T + 1 && (b = e.indexOf(i, T + 1));
                                        var _ = x(-1 === b ? k : Math.min(k, b));
                                        if (e.substr(T + 1 + _, p) === o) {
                                            A.push(e.substring(d, T).replace(E, t)),
                                                e[d = T + 1 + _ + p] !== t && (T = e.indexOf(t, d)),
                                                k = e.indexOf(o, d),
                                                b = e.indexOf(i, d);
                                            break
                                        }
                                        var R = x(b);
                                        if (e.substring(T + 1 + R, T + 1 + R + m) === i) {
                                            if (A.push(e.substring(d, T).replace(E, t)),
                                                L(T + 1 + R + m),
                                                k = e.indexOf(o, d),
                                                T = e.indexOf(t, d),
                                                M && (N(),
                                                    u))
                                                return D();
                                            if (r && y.length >= r)
                                                return D(!0);
                                            break
                                        }
                                        P.push({
                                            type: "Quotes",
                                            code: "InvalidQuotes",
                                            message: "Trailing quote on quoted field is malformed",
                                            row: y.length,
                                            index: d
                                        }),
                                            T++
                                    }
                                } else
                                    T++
                            }
                    return G();
                    function O(e) {
                        y.push(e),
                            C = d
                    }
                    function x(t) {
                        var o = 0;
                        if (-1 !== t) {
                            var i = e.substring(T + 1, t);
                            i && "" === i.trim() && (o = i.length)
                        }
                        return o
                    }
                    function G(t) {
                        return h || (void 0 === t && (t = e.substring(d)),
                            A.push(t),
                            d = f,
                            O(A),
                            M && N()),
                            D()
                    }
                    function L(t) {
                        d = t,
                            O(A),
                            A = [],
                            b = e.indexOf(i, d)
                    }
                    function D(e) {
                        return {
                            data: y,
                            errors: P,
                            meta: {
                                delimiter: o,
                                linebreak: i,
                                aborted: u,
                                truncated: !!e,
                                cursor: C + (s || 0)
                            }
                        }
                    }
                    function N() {
                        a(D()),
                            y = [],
                            P = []
                    }
                }
                    ,
                    this.abort = function () {
                        u = !0
                    }
                    ,
                    this.getCharIndex = function () {
                        return d
                    }
            }
            function m(e) {
                var t = e.data
                    , o = n[t.workerId]
                    , i = !1;
                if (t.error)
                    o.userError(t.error, t.file);
                else if (t.results && t.results.data) {
                    var a = {
                        abort: function () {
                            i = !0,
                                v(t.workerId, {
                                    data: [],
                                    errors: [],
                                    meta: {
                                        aborted: !0
                                    }
                                })
                        },
                        pause: M,
                        resume: M
                    };
                    if (S(o.userStep)) {
                        for (var s = 0; s < t.results.data.length && (o.userStep({
                            data: t.results.data[s],
                            errors: t.results.errors,
                            meta: t.results.meta
                        }, a),
                            !i); s++)
                            ;
                        delete t.results
                    } else
                        S(o.userChunk) && (o.userChunk(t.results, a, t.file),
                            delete t.results)
                }
                t.finished && !i && v(t.workerId, t.results)
            }
            function v(e, t) {
                var o = n[e];
                S(o.userComplete) && o.userComplete(t),
                    o.terminate(),
                    delete n[e]
            }
            function M() {
                throw new Error("Not implemented.")
            }
            function y(e) {
                if ("object" != typeof e || null === e)
                    return e;
                var t = Array.isArray(e) ? [] : {};
                for (var o in e)
                    t[o] = y(e[o]);
                return t
            }
            function P(e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }
            function S(e) {
                return "function" == typeof e
            }
            return i && (t.onmessage = function (e) {
                var o = e.data;
                if (void 0 === s.WORKER_ID && o && (s.WORKER_ID = o.workerId),
                    "string" == typeof o.input)
                    t.postMessage({
                        workerId: s.WORKER_ID,
                        results: s.parse(o.input, o.config),
                        finished: !0
                    });
                else if (t.File && o.input instanceof File || o.input instanceof Object) {
                    var i = s.parse(o.input, o.config);
                    i && t.postMessage({
                        workerId: s.WORKER_ID,
                        results: i,
                        finished: !0
                    })
                }
            }
            ),
                (c.prototype = Object.create(l.prototype)).constructor = c,
                (d.prototype = Object.create(l.prototype)).constructor = d,
                (u.prototype = Object.create(u.prototype)).constructor = u,
                (h.prototype = Object.create(l.prototype)).constructor = h,
                s
        }
            ,
            "function" == typeof define && define.amd ? define([], i) : "object" == typeof t && void 0 !== o ? t.exports = i() : this.Papa = i()
    }
        , {}],
    BaseDialog: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "da311nxbI5J5ogmVESoNnR2", "BaseDialog");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("../Manager/MConfig")
            , a = e("../Manager/MDialog")
            , s = e("../Manager/MEvent")
            , r = e("../Manager/MI18n")
            , { ccclass: l, property: c } = cc._decorator;
        let d = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.serialNumber = "",
                    this.dialogOption = null,
                    this.scriptName = "",
                    this.adSafeBottom = null,
                    this.languageLbs = [],
                    this.noAdCenters = []
            }
            onLoad() {
                this.scriptName = this.name.split("<")[0],
                    this.node.setContentSize(cc.winSize)
            }
            start() {
                this.languageLbs.forEach(e => {
                    let t = parseInt(e.node.name);
                    r.MI18n.showInfo(e, t)
                }
                ),
                    GA.Info.withoutRewardVideoAd && this.noAdCenters.forEach(e => {
                        e.x = 0
                    }
                    )
            }
            init(e, t, o) {
                console.log("basedialog init"),
                    this.dialogName = e,
                    this.serialNumber = t,
                    this.dialogOption = o
            }
            showDialog() {
                var e, t, o, i;
                null === (t = null === (e = this.dialogOption) || void 0 === e ? void 0 : e.beforeShow) || void 0 === t || t.call(e);
                try {
                    if (!GA.Info.isPreview) {
                        switch (this.scriptName) {
                            case "DialogOver":
                            case "DialogPause":
                                !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ, GA.Platform.Kuaidianwan, GA.Platform.Android]) && GA.showBanner();
                                break;
                            case "DialogOverBox":
                                !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ, GA.Platform.Kuaidianwan, GA.Platform.Android]) && "l" == Utils.screenSize() && GA.showBanner()
                        }
                        switch (this.scriptName) {
                            case "DialogOver":
                                n.MConfig.Config.CustomAd.BattleL && s.MEvent.emit(s.EMsg.HideCustomAdL),
                                    n.MConfig.Config.CustomAd.OverR ? s.MEvent.emit(s.EMsg.ShowCustomAdR) : s.MEvent.emit(s.EMsg.HideCustomAdR);
                                break;
                            case "DialogOverBox":
                                n.MConfig.Config.CustomAd.BattleL && s.MEvent.emit(s.EMsg.HideCustomAdL),
                                    n.MConfig.Config.CustomAd.OverBoxR ? s.MEvent.emit(s.EMsg.ShowCustomAdR) : s.MEvent.emit(s.EMsg.HideCustomAdR);
                                break;
                            case "DialogPause":
                                n.MConfig.Config.CustomAd.BattleL && s.MEvent.emit(s.EMsg.HideCustomAdL),
                                    n.MConfig.Config.CustomAd.PauseR ? s.MEvent.emit(s.EMsg.ShowCustomAdR) : s.MEvent.emit(s.EMsg.HideCustomAdR)
                        }
                        switch (this.scriptName) {
                            case "DialogBlindBoxPrize":
                            case "DialogFreeCoin":
                            case "DialogFreeGemstone":
                            case "DialogFreeStrength":
                            case "DialogLevelSelect":
                            case "DialogLevelTask":
                            case "DialogOver":
                            case "DialogOverBox":
                            case "DialogIfPause":
                            case "DialogPause":
                            case "DialogSignIn":
                            case "DialogTask":
                            case "DialogTrialSkill":
                                GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.XiaoMi && this.scheduleOnce(() => {
                                    var e, t;
                                    GA.showNativeAd({
                                        height: (null !== (t = cc.winSize.height / 2 + (null === (e = this.adSafeBottom) || void 0 === e ? void 0 : e.y)) && void 0 !== t ? t : 266) / GA.PA.getSystemInfoSync().designPixelRatio
                                    })
                                }
                                    , .1)
                        }
                    }
                } catch (a) { }
                null === (i = null === (o = this.dialogOption) || void 0 === o ? void 0 : o.afterShow) || void 0 === i || i.call(o)
            }
            hideDialog() {
                var e, t, o, i;
                null === (t = null === (e = this.dialogOption) || void 0 === e ? void 0 : e.beforeHide) || void 0 === t || t.call(e),
                    null === (i = null === (o = this.dialogOption) || void 0 === o ? void 0 : o.afterHide) || void 0 === i || i.call(o)
            }
            destroyDialog() {
                var e, t, o, i, r, l, c;
                null === (t = null === (e = this.dialogOption) || void 0 === e ? void 0 : e.beforeHide) || void 0 === t || t.call(e);
                try {
                    if (!GA.Info.isPreview) {
                        switch (this.scriptName) {
                            case "DialogOver":
                            case "DialogOverBox":
                            case "DialogPause":
                                !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ, GA.Platform.Kuaidianwan, GA.Platform.Android]) && GA.hideBanner()
                        }
                        switch (this.scriptName) {
                            case "DialogOver":
                            case "DialogOverBox":
                            case "DialogPause":
                                n.MConfig.Config.CustomAd.BattleL && s.MEvent.emit(s.EMsg.ShowCustomAdL),
                                    n.MConfig.Config.CustomAd.BattleR && s.MEvent.emit(s.EMsg.ShowCustomAdR)
                        }
                        switch (this.scriptName) {
                            case "DialogBlindBoxPrize":
                            case "DialogFreeCoin":
                            case "DialogFreeGemstone":
                            case "DialogFreeStrength":
                            case "DialogLevelSelect":
                            case "DialogLevelTask":
                            case "DialogOver":
                            case "DialogOverBox":
                            case "DialogIfPause":
                            case "DialogPause":
                            case "DialogSignIn":
                            case "DialogTask":
                            case "DialogTrialSkill":
                                GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.XiaoMi && GA.hideNativeAd()
                        }
                    }
                    null === (r = null === (i = null === (o = this.node) || void 0 === o ? void 0 : o.parent) || void 0 === i ? void 0 : i.destroy) || void 0 === r || r.call(i)
                } catch (d) {
                    console.error(d)
                }
                a.MDialog.destroyDialog(this.dialogName),
                    null === (c = null === (l = this.dialogOption) || void 0 === l ? void 0 : l.afterHide) || void 0 === c || c.call(l)
            }
            onDestroy() {
                var e, t;
                null === (t = null === (e = this.dialogOption) || void 0 === e ? void 0 : e.onDestroy) || void 0 === t || t.call(e)
            }
        }
            ;
        i([c(cc.Node)], d.prototype, "adSafeBottom", void 0),
            i([c([cc.Label])], d.prototype, "languageLbs", void 0),
            i([c([cc.Node])], d.prototype, "noAdCenters", void 0),
            d = i([l], d),
            o.default = d,
            cc._RF.pop()
    }
        , {
        "../Manager/MConfig": "MConfig",
        "../Manager/MDialog": "MDialog",
        "../Manager/MEvent": "MEvent",
        "../Manager/MI18n": "MI18n"
    }],
    BaseModel: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "454b2DMCxNP0qVQDISJPCt9", "BaseModel"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.BaseModel = void 0,
            o.BaseModel = class {
                constructor() {
                    this.rejectSaveProperties = []
                }
                syncConfig(e) { }
                afterSyncConfig1() { }
                getData() {
                    let e = new Object;
                    for (let t in this) {
                        let o = t.toString();
                        "rejectSaveProperties" == o || this.rejectSaveProperties.includes(o) || (e[o] = this[o])
                    }
                    return e
                }
                syncData(e) {
                    console.log("sync data:", e);
                    for (let t in this) {
                        let o = t.toString();
                        null != e[o] && (this[o] = e[o])
                    }
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    BaseScene: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5afb5uCWKZOyLTlOwzrh+VJ", "BaseScene");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("../Manager/MDialog")
            , a = e("../Manager/MI18n")
            , { ccclass: s, property: r } = cc._decorator;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.languageLbs = []
            }
            onLoad() {
                let e = cc.view.getCanvasSize();
                cc.winSize.width < cc.winSize.height ? e.height / e.width < 1.5 ? (cc.Canvas.instance.fitHeight = !0,
                    cc.Canvas.instance.fitWidth = !1,
                    console.log("\u7ad6\u5c4f PAD")) : (cc.Canvas.instance.fitHeight = !1,
                        cc.Canvas.instance.fitWidth = !0,
                        console.log("\u7ad6\u5c4f Phone")) : e.width / e.height < 1.5 ? (cc.Canvas.instance.fitHeight = !1,
                            cc.Canvas.instance.fitWidth = !0,
                            console.log("\u6a2a\u5c4f Phone")) : (cc.Canvas.instance.fitHeight = !0,
                                cc.Canvas.instance.fitWidth = !1,
                                console.log("\u6a2a\u5c4f PAD")),
                    this.node.setContentSize(cc.winSize)
            }
            start() {
                this.languageLbs.forEach(e => {
                    let t = parseInt(e.node.name);
                    a.MI18n.showInfo(e, t)
                }
                )
            }
            onDisable() {
                n.MDialog.clear()
            }
        }
            ;
        i([r([cc.Label])], l.prototype, "languageLbs", void 0),
            l = i([s], l),
            o.default = l,
            cc._RF.pop()
    }
        , {
        "../Manager/MDialog": "MDialog",
        "../Manager/MI18n": "MI18n"
    }],
    CustomAdNode: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a1514dOBSFGm5VvSxXE8pUB", "CustomAdNode");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("../../Script/Manager/MConfig")
            , a = e("../../Script/Manager/MEvent")
            , s = e("../../Script/Manager/MModel")
            , { ccclass: r, property: l } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.customAdLInited = !1,
                    this.customAdRInited = !1
            }
            onLoad() {
                cc.game.addPersistRootNode(this.node),
                    a.MEvent.on(a.EMsg.ShowCustomAdL, () => {
                        var e, t;
                        !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ]) && (s.MModel.UserData.checkNewbieTask() && s.MModel.NewbieTask.day < 7 && s.MModel.NewbieTask.surplusDuration() > 0 || (this.customAdLInited ? null === (t = null === (e = this.singleCustomAdL) || void 0 === e ? void 0 : e.show()) || void 0 === t || t.then(() => console.log("L\u539f\u751f\u6a21\u677f\u5e7f\u544a\u663e\u793a")) : (this.customAdLInited = !0,
                            this.creatCustomAdL())))
                    }
                        , this),
                    a.MEvent.on(a.EMsg.HideCustomAdL, () => {
                        var e;
                        !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ]) && this.customAdLInited && (null === (e = this.singleCustomAdL) || void 0 === e || e.hide())
                    }
                        , this),
                    a.MEvent.on(a.EMsg.ShowCustomAdR, () => {
                        var e, t;
                        !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ]) && (this.customAdRInited ? null === (t = null === (e = this.singleCustomAdR) || void 0 === e ? void 0 : e.show()) || void 0 === t || t.then(() => console.log("R\u539f\u751f\u6a21\u677f\u5e7f\u544a\u663e\u793a")) : (this.customAdRInited = !0,
                            this.creatCustomAdR()))
                    }
                        , this),
                    a.MEvent.on(a.EMsg.HideCustomAdR, () => {
                        var e;
                        !GA.Info.isPreview && GA.isPlatform([GA.Platform.WeChat, GA.Platform.QQ]) && this.customAdRInited && (null === (e = this.singleCustomAdR) || void 0 === e || e.hide())
                    }
                        , this)
            }
            creatCustomAdL() {
                let e = GA.PA.getSystemInfoSync()
                    , t = GA.PA.getMenuButtonBoundingClientRect();
                if (GA.isPlatform(GA.Platform.WeChat)) {
                    let o = "";
                    "1" == n.MConfig.Mgct ? o = "adunit-cb431236499a3633" : "2" == n.MConfig.Mgct && (o = "adunit-c60384f78840855c"),
                        this.singleCustomAdL = window.wx.createCustomAd({
                            adUnitId: o,
                            adIntervals: n.MConfig.Config.CustomAdRefreshRatio,
                            style: {
                                left: 14 / e.designPixelRatio,
                                top: t.bottom + 10,
                                fixed: !0
                            }
                        })
                } else
                    GA.isPlatform(GA.Platform.QQ) && (this.singleCustomAdL = window.qq.createBlockAd({
                        adUnitId: "3819f3f91e762930cccc106d0f917726",
                        style: {
                            left: 50 / e.designPixelRatio,
                            top: t.bottom + 10
                        },
                        size: 1,
                        orientation: "vertical"
                    }));
                this.singleCustomAdL.onLoad(() => {
                    var e, t;
                    console.log("L\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"),
                        null === (t = null === (e = this.singleCustomAdL) || void 0 === e ? void 0 : e.show()) || void 0 === t || t.then(() => console.log("L\u539f\u751f\u6a21\u677f\u5e7f\u544a\u663e\u793a"))
                }
                ),
                    this.singleCustomAdL.onError(e => {
                        console.log("L\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"),
                            console.log(e)
                    }
                    )
            }
            creatCustomAdR() {
                let e = GA.PA.getSystemInfoSync()
                    , t = GA.PA.getMenuButtonBoundingClientRect();
                if (GA.isPlatform(GA.Platform.WeChat)) {
                    let o = "";
                    "1" == n.MConfig.Mgct ? o = "adunit-70a7ef9cf3ef8952" : "2" == n.MConfig.Mgct && (o = "adunit-58285b4d1b510baa"),
                        this.singleCustomAdR = window.wx.createCustomAd({
                            adUnitId: o,
                            adIntervals: n.MConfig.Config.CustomAdRefreshRatio,
                            style: {
                                left: 602 / e.designPixelRatio,
                                top: t.bottom + 10,
                                fixed: !0
                            }
                        })
                } else
                    GA.isPlatform(GA.Platform.QQ) && (this.singleCustomAdR = window.qq.createBlockAd({
                        adUnitId: "3819f3f91e762930cccc106d0f917726",
                        style: {
                            left: 520 / e.designPixelRatio,
                            top: t.bottom + 10
                        },
                        size: 1,
                        orientation: "vertical"
                    }));
                this.singleCustomAdR.onLoad(() => {
                    var e, t;
                    console.log("R\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"),
                        null === (t = null === (e = this.singleCustomAdR) || void 0 === e ? void 0 : e.show()) || void 0 === t || t.then(() => console.log("R\u539f\u751f\u6a21\u677f\u5e7f\u544a\u663e\u793a"))
                }
                ),
                    this.singleCustomAdR.onError(e => {
                        console.log("R\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"),
                            console.log(e)
                    }
                    )
            }
        }
            ;
        c = i([r], c),
            o.default = c,
            cc._RF.pop()
    }
        , {
        "../../Script/Manager/MConfig": "MConfig",
        "../../Script/Manager/MEvent": "MEvent",
        "../../Script/Manager/MModel": "MModel"
    }],
    Enum: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e9f3eRq/axOHKU0gvDh+Y7S", "Enum"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ERsv = o.EGoods = o.EReceiveStatus = o.EGameEvent = o.EGameModel = o.ERewardSource = o.EGrade = o.EBox = o.EAIOrigin = o.ELineColor = o.ECityStyle = o.ECityCamp = o.ECityType = o.EBattleStatus = void 0,
            function (e) {
                e.Ready = "Ready",
                    e.Fight = "Fight",
                    e.Win = "Win",
                    e.Lose = "Lose"
            }(o.EBattleStatus || (o.EBattleStatus = {})),
            function (e) {
                e[e.Normal = 0] = "Normal",
                    e[e.Attack = 1] = "Attack",
                    e[e.Defense = 2] = "Defense",
                    e[e.Double = 3] = "Double"
            }(o.ECityType || (o.ECityType = {})),
            function (e) {
                e[e.Default = 0] = "Default",
                    e[e.One = 1] = "One",
                    e[e.Two = 2] = "Two",
                    e[e.Three = 3] = "Three",
                    e[e.Four = 4] = "Four"
            }(o.ECityCamp || (o.ECityCamp = {})),
            function (e) {
                e[e.One = 1] = "One",
                    e[e.Two = 2] = "Two",
                    e[e.Three = 3] = "Three"
            }(o.ECityStyle || (o.ECityStyle = {})),
            function (e) {
                e[e.Red = 0] = "Red",
                    e[e.Blue = 1] = "Blue"
            }(o.ELineColor || (o.ELineColor = {})),
            function (e) {
                e[e.Default = 0] = "Default",
                    e[e.Occupied = 1] = "Occupied"
            }(o.EAIOrigin || (o.EAIOrigin = {})),
            function (e) {
                e[e.Normal = 0] = "Normal",
                    e[e.Rare = 1] = "Rare"
            }(o.EBox || (o.EBox = {})),
            function (e) {
                e[e.White = 1] = "White",
                    e[e.Green = 2] = "Green",
                    e[e.Blue = 3] = "Blue",
                    e[e.Purple = 4] = "Purple",
                    e[e.Orange = 5] = "Orange"
            }(o.EGrade || (o.EGrade = {})),
            function (e) {
                e[e.BlindBox = 0] = "BlindBox",
                    e[e.SignIn = 1] = "SignIn",
                    e[e.Task = 2] = "Task",
                    e[e.Halloween = 3] = "Halloween",
                    e[e.Thanksgiving = 4] = "Thanksgiving",
                    e[e.Christmas = 5] = "Christmas",
                    e[e.NewYear = 6] = "NewYear",
                    e[e.ExchangeCode = 7] = "ExchangeCode",
                    e[e.MothersDay = 8] = "MothersDay",
                    e[e.AddDesktop = 9] = "AddDesktop"
            }(o.ERewardSource || (o.ERewardSource = {})),
            function (e) {
                e[e.Normal = 0] = "Normal",
                    e[e.Infernal = 1] = "Infernal"
            }(o.EGameModel || (o.EGameModel = {})),
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Halloween = 1] = "Halloween",
                    e[e.Thanksgiving = 2] = "Thanksgiving",
                    e[e.Christmas = 3] = "Christmas",
                    e[e.NewYear = 4] = "NewYear",
                    e[e.MothersDay = 5] = "MothersDay"
            }(o.EGameEvent || (o.EGameEvent = {})),
            function (e) {
                e[e.UnReach = 0] = "UnReach",
                    e[e.UnReceive = 1] = "UnReceive",
                    e[e.Received = 2] = "Received",
                    e[e.Invalid = 3] = "Invalid"
            }(o.EReceiveStatus || (o.EReceiveStatus = {})),
            function (e) {
                e[e.Coin = 1] = "Coin",
                    e[e.Strength = 2] = "Strength",
                    e[e.Gemstone = 3] = "Gemstone",
                    e[e.Key = 4] = "Key"
            }(o.EGoods || (o.EGoods = {})),
            function (e) {
                e[e.Share = 0] = "Share",
                    e[e.Video = 1] = "Video"
            }(o.ERsv || (o.ERsv = {})),
            cc._RF.pop()
    }
        , {}],
    HotUpdate: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "846cdnzW+VINbCF5PSkhxPW", "HotUpdate");
        var i = this && this.__awaiter || function (e, t, o, i) {
            return new (o || (o = Promise))(function (n, a) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (t) {
                        a(t)
                    }
                }
                function r(e) {
                    try {
                        l(i.throw(e))
                    } catch (t) {
                        a(t)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                        t instanceof o ? t : new o(function (e) {
                            e(t)
                        }
                        )).then(s, r)
                }
                l((i = i.apply(e, t || [])).next())
            }
            )
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
            o.HotUpdate = void 0,
            (o.HotUpdate || (o.HotUpdate = {})).Manager = new class {
                constructor() {
                    this.storagePath = "",
                        this.updating = !1,
                        cc.sys.isNative && (this.storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "game-remote-assets",
                            console.log("Storage path for remote asset : " + this.storagePath),
                            this.assetsManager = new jsb.AssetsManager("", this.storagePath, (e, t) => {
                                console.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
                                let o = e.split(".")
                                    , i = t.split(".");
                                for (let n = 0; n < o.length; ++n) {
                                    let e = parseInt(o[n])
                                        , t = parseInt(i[n] || "0");
                                    if (e !== t)
                                        return e - t
                                }
                                return i.length > o.length ? -1 : 0
                            }
                            ),
                            console.log("AM State", this.assetsManager.getState()),
                            console.log("Am remote manifest", this.assetsManager.getRemoteManifest()),
                            this.assetsManager.setVerifyCallback((e, t) => (t.compressed,
                                t.md5,
                                t.path,
                                t.size,
                                !0)),
                            console.log("Max concurrent tasks is", this.assetsManager.getMaxConcurrentTask()))
                }
                loadLocalManifest() {
                    return i(this, void 0, void 0, function* () {
                        return new Promise(e => {
                            cc.resources.load("hotupdate/project", cc.Asset, (t, o) => {
                                if (t)
                                    console.error(t),
                                        e("");
                                else {
                                    let t = JSON.parse(o._nativeAsset);
                                    console.log(`HotUpdate packageurl:${t.packageUrl}`),
                                        console.log(`HotUpdate remoteManifestUrl:${t.remoteManifestUrl}`),
                                        console.log(`HotUpdate remoteVersionUrl:${t.remoteVersionUrl}`),
                                        e(JSON.stringify(t))
                                }
                            }
                            )
                        }
                        )
                    })
                }
                checkUpdate() {
                    return new Promise(e => i(this, void 0, void 0, function* () {
                        var t;
                        if (cc.sys.isNative)
                            if (this.updating)
                                e({
                                    code: -1,
                                    newVersion: !1,
                                    message: "\u6b63\u5728\u66f4\u65b0"
                                });
                            else {
                                if (this.assetsManager.getState() === jsb.AssetsManager.State.UNINITED && this.assetsManager.loadLocalManifest(new jsb.Manifest(yield this.loadLocalManifest(), this.storagePath), this.storagePath),
                                    !(null === (t = this.assetsManager.getLocalManifest()) || void 0 === t ? void 0 : t.isLoaded()))
                                    return console.log("Failed to load local manifest ..."),
                                        void e({
                                            code: jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST,
                                            newVersion: !1,
                                            message: "\u7248\u672c\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25"
                                        });
                                this.assetsManager.setEventCallback(t => {
                                    switch (t.getEventCode()) {
                                        case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                                            console.log("No local manifest file found, hot update skipped.");
                                            break;
                                        case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                                            console.log("Fail to download manifest file, hot update skipped.");
                                            break;
                                        case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                                            console.log("Fail to parse manifest file, hot update skipped.");
                                            break;
                                        case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                                            console.log("\u5f53\u524d\u7248\u672c\u662f\u6700\u65b0\u7248\u672c");
                                            break;
                                        case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                                            let e = this.assetsManager.getTotalBytes()
                                                , o = ["Byte", "KB", "MB", "GB", "TB"]
                                                , i = 0;
                                            for (; e >= 1024 && i < o.length;)
                                                i++,
                                                    e /= 1024;
                                            console.log(`\u53d1\u73b0\u65b0\u7248\u672c(\u5927\u5c0f\uff1a ${e.toFixed(2)}${o[i]})`)
                                    }
                                    t.getEventCode() != jsb.EventAssetsManager.UPDATE_PROGRESSION && (this.assetsManager.setEventCallback(null),
                                        this.updating = !1,
                                        e({
                                            code: t.getEventCode(),
                                            newVersion: t.getEventCode() == jsb.EventAssetsManager.NEW_VERSION_FOUND,
                                            message: t.getMessage()
                                        }))
                                }
                                ),
                                    this.assetsManager.checkUpdate(),
                                    this.updating = !0
                            }
                        else
                            e({
                                code: -2,
                                newVersion: !1,
                                message: "\u975e\u539f\u751f\u5e73\u53f0"
                            })
                    }))
                }
                downloadUpdate(e) {
                    this.assetsManager && !this.updating && (this.assetsManager.setEventCallback(t => {
                        let o = !1
                            , i = !1;
                        switch (t.getEventCode()) {
                            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                                console.log("No local manifest file found, hot update skipped."),
                                    i = !0;
                                break;
                            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                                e.progress(t.getDownloadedFiles(), t.getTotalFiles(), t.getDownloadedBytes(), t.getTotalBytes());
                                break;
                            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                                console.log("Fail to download manifest file, hot update skipped."),
                                    i = !0;
                                break;
                            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                                console.log("Already up to date with the latest remote version."),
                                    i = !0;
                                break;
                            case jsb.EventAssetsManager.UPDATE_FINISHED:
                                console.log("Update finished. " + t.getMessage()),
                                    o = !0,
                                    i = !0;
                                break;
                            case jsb.EventAssetsManager.UPDATE_FAILED:
                                console.log("Update failed. " + t.getMessage()),
                                    this.updating = !1,
                                    o = !0,
                                    i = !0;
                                break;
                            case jsb.EventAssetsManager.ERROR_UPDATING:
                                console.log(`Asset update error:${t.getAssetId()} ${t.getMessage()} ${t.getCURLECode()} ${t.getCURLMCode()}`);
                                break;
                            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                                console.log("ERROR_DECOMPRESS", t.getMessage())
                        }
                        i && (this.assetsManager.setEventCallback(null),
                            this.updating = !1,
                            o ? e.success() : e.fail(!1, t.getMessage()))
                    }
                    ),
                        this.assetsManager.update(),
                        this.updating = !0)
                }
                retry() {
                    this.assetsManager.downloadFailedAssets()
                }
                applyUpdate() {
                    for (var e = jsb.fileUtils.getSearchPaths(), t = this.assetsManager.getLocalManifest().getSearchPaths(), o = 0; o < t.length; o++)
                        -1 == e.indexOf(t[o]) && Array.prototype.unshift.apply(e, [t[o]]);
                    cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(e)),
                        jsb.fileUtils.setSearchPaths(e),
                        cc.audioEngine.stopAll(),
                        cc.game.restart()
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    IAI: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "13b2clj94FFE6HRWJZUhViW", "IAI"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IBlindBox: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0dac6BUsvZDyZabx+nVVbkI", "IBlindBox"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IBlock: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3fe79DGOzxP3bFbB8HMR6RH", "IBlock"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IChapter: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "09153v5rI5GMbIs27Balyx/", "IChapter"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ICity: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "862a9M2zyhJBIKdrEJjTgZU", "ICity"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IDecorate: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "127caWp5dxIdY60GyH4A8H8", "IDecorate"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IExchangeCode: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "dfa661msNhBr7iBC0XnhNoX", "IExchangeCode"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IGift: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "f981aeqjdBKNJq2SFCCbZte", "IGift"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IHero: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4afafKHU1FMX7nhlqyzCkwl", "IHero"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    II18n: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "677264ZaTBJAa3MueVOmthz", "II18n"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IItem: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "00351qbh5VI1KwzNCs5ATxW", "IItem"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ILevelTask: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4a362vOf1BFI5vjn7JIPhwK", "ILevelTask"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ILevel: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "78c95hhoLBHB63FRbq+TMpr", "ILevel"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IPass: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "483ae+/QbpFUos7/6j6f8Oj", "IPass"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IPurchase: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "6e4e2H8SZdGC5A7blyOGoQE", "IPurchase"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.IPurchaseGoods = void 0,
            o.IPurchaseGoods = class {
                constructor() {
                    this.productId = "",
                        this.type = "",
                        this.title = "",
                        this.name = "",
                        this.price = "",
                        this.price_amount_micros = 0,
                        this.price_currency_code = "",
                        this.description = "",
                        this.skuDetailsToken = ""
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    ISignIn: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8fba6KzB2NN06InROMdPZJn", "ISignIn"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ISoldier: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e512cAq9pNK5pSgn+2y3Oth", "ISoldier"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    IStore: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b22deS8hYhKqKj0ihgbzz8C", "IStore"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ITask: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8647cfLUv9E8YwBUoa6l6sv", "ITask"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ETaskTag = void 0,
            function (e) {
                e[e.Daily = 1] = "Daily",
                    e[e.Achievement = 2] = "Achievement",
                    e[e.NewbieTask = 3] = "NewbieTask",
                    e[e.NewbieTaskBox = 4] = "NewbieTaskBox"
            }(o.ETaskTag || (o.ETaskTag = {})),
            cc._RF.pop()
    }
        , {}],
    ITower: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5b69bJcif9NLo1G8vtQg6Hm", "ITower"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    ImgLoop: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e9da9EnmYNKBpGhLk4IgZrG", "ImgLoop");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("../../Script/Temporary")
            , { ccclass: a, property: s, executeInEditMode: r } = cc._decorator;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.sp = null,
                    this._material = null
            }
            onEnable() {
                cc.dynamicAtlasManager.enabled = !1,
                    this._material = this.sp.getMaterial(0)
            }
            update() {
                let e = this._material.getProperty("u_uvSpeed", 0);
                e[1] = n.Temporary.uvSpeed,
                    this._material.setProperty("u_uvSpeed", e)
            }
        }
            ;
        i([s(cc.Sprite)], l.prototype, "sp", void 0),
            l = i([a], l),
            o.default = l,
            cc._RF.pop()
    }
        , {
        "../../Script/Temporary": "Temporary"
    }],
    Interface: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "22a9bWkS2VGPL9EzL6mBUHa", "Interface"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    LoadScene: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ebb49Ml1G9H+rCFW8pz4Kjz", "LoadScene");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
            e("gameassistant3");
        const n = e("papaparse")
            , a = e("../../Script/Base/BaseScene")
            , s = e("../../Script/HotUpdate")
            , r = e("../../Script/Manager/MAd")
            , l = e("../../Script/Manager/MBundle")
            , c = e("../../Script/Manager/MConfig")
            , d = e("../../Script/Manager/MData")
            , u = e("../../Script/Manager/MDialog")
            , h = e("../../Script/Manager/MEvent")
            , f = e("../../Script/Manager/MIP")
            , g = e("../../Script/Manager/MModel")
            , p = e("../../Script/Manager/MToast")
            , m = e("../../Script/Temporary")
            , { ccclass: v, property: M } = cc._decorator;
        let y = class extends a.default {
            constructor() {
                super(...arguments),
                    this.logo_02 = null,
                    this.logo_cn = null,
                    this.logo_tc = null,
                    this.logo_en = null,
                    this.logo_pt = null,
                    this.logo_id = null,
                    this.logo_vi = null,
                    this.advice = null,
                    this.ageAppropriate = null,
                    this.percent = null,
                    this.wxbzdPercent = null,
                    this.fill = null,
                    this.wxbzdFill = null,
                    this.falseFill = null,
                    this.clause = null,
                    this.weiyouLogo = null,
                    this.preloadSceneComplete = !1,
                    this.dataComplete = !1,
                    this.loadedScene = !1
            }
            onLoad() {
                super.onLoad(),
                    c.MConfig.Papaparse = n,
                    window.GameAssistantWeb && window.GameAssistantWeb.gameLoadingFinished()
            }
            start() {
                super.start();
                let e = ""
                    , t = "";
                "1" == c.MConfig.Mgct ? (e = "krq_mgct",
                    t = "krq_mgct=001") : "2" == c.MConfig.Mgct && (e = "krq_mgct2",
                        t = "krq_mgct2=001"),
                    this.initOption = {
                        isPreview: !1,
                        platform: GA.Platform.WeiYouH5,
                        engine: GA.EngineType.CocosCreator,
                        appId: "mgct_weiyou",
                        channelKey: e,
                        uuid: "59D80F3E-F0BB-4B74-9F87-42B1BBE08076",
                        resolution: cc.winSize,
                        sharePath: t,
                        debugLog: !0,
                        uploadGameTimeIntervals: 10
                    };
                let o = cc.sys.languageCode;
                "inland" != c.MConfig.Region || c.MConfig.Hago || this.initOption.platform == GA.Platform.WeiYouH5 ? ("overseas" == c.MConfig.Region || c.MConfig.Hago || this.initOption.platform == GA.Platform.WeiYouH5) && (GA.ENABLE_NEXT_VERSION = !0,
                    this.ageAppropriate.active = !1,
                    this.advice.active = !1,
                    -1 != o.indexOf("zh") ? "zh" == o || (-1 != o.indexOf("cn") || -1 != o.indexOf("CN")) && -1 == o.indexOf("hant") && -1 == o.indexOf("Hant") ? c.MConfig.Language = "cn" : c.MConfig.Language = "tc" : -1 != o.indexOf("pt") || -1 != o.indexOf("PT") ? c.MConfig.Language = "pt" : -1 != o.indexOf("id") || -1 != o.indexOf("ID") ? c.MConfig.Language = "id" : -1 != o.indexOf("vi") || -1 != o.indexOf("VI") ? c.MConfig.Language = "vi" : c.MConfig.Language = "en") : (this.ageAppropriate.active = !0,
                        this.advice.active = !0,
                        c.MConfig.Language = "cn"),
                    console.log("cc.sys.languageCode:", o, "MConfig.Language:", c.MConfig.Language),
                    "1" == c.MConfig.Mgct ? (this.logo_02.active = !1,
                        "cn" == c.MConfig.Language ? (this.logo_cn.active = !0,
                            this.logo_tc.active = !1,
                            this.logo_en.active = !1,
                            this.logo_pt.active = !1,
                            this.logo_id.active = !1,
                            this.logo_vi.active = !1) : "tc" == c.MConfig.Language ? (this.logo_cn.active = !1,
                                this.logo_tc.active = !0,
                                this.logo_en.active = !1,
                                this.logo_pt.active = !1,
                                this.logo_id.active = !1,
                                this.logo_vi.active = !1) : "en" == c.MConfig.Language ? (this.logo_cn.active = !1,
                                    this.logo_tc.active = !1,
                                    this.logo_en.active = !0,
                                    this.logo_pt.active = !1,
                                    this.logo_id.active = !1,
                                    this.logo_vi.active = !1) : "pt" == c.MConfig.Language ? (this.logo_cn.active = !1,
                                        this.logo_tc.active = !1,
                                        this.logo_en.active = !1,
                                        this.logo_pt.active = !0,
                                        this.logo_id.active = !1,
                                        this.logo_vi.active = !1) : "id" == c.MConfig.Language ? (this.logo_cn.active = !1,
                                            this.logo_tc.active = !1,
                                            this.logo_en.active = !1,
                                            this.logo_pt.active = !1,
                                            this.logo_id.active = !0,
                                            this.logo_vi.active = !1) : "vi" == c.MConfig.Language && (this.logo_cn.active = !1,
                                                this.logo_tc.active = !1,
                                                this.logo_en.active = !1,
                                                this.logo_pt.active = !1,
                                                this.logo_id.active = !1,
                                                this.logo_vi.active = !0)) : "2" == c.MConfig.Mgct && (this.logo_02.active = !0,
                                                    this.logo_cn.active = !1,
                                                    this.logo_tc.active = !1,
                                                    this.logo_en.active = !1),
                    this.falseFill && cc.tween(this.falseFill).to(1, {
                        width: 448
                    }).set({
                        width: 0
                    }).union().repeatForever().start(),
                    s.HotUpdate.Manager.checkUpdate().then(e => {
                        e.newVersion ? (this.percent.string = "\u4fee\u590d\u6e38\u620f\u5185\u5bb9",
                            this.fill.width = 0,
                            s.HotUpdate.Manager.downloadUpdate({
                                progress: (e, t, o, i) => {
                                    this.percent.string = `\u6587\u4ef6\u6570 ${e}/${t} \u5927\u5c0f\uff1a ${this.formatByteProgress(o, i)}`,
                                        this.fill.width = o / i * 359,
                                        console.log(`\u6587\u4ef6\u6570 ${e}/${t} \u5927\u5c0f\uff1a ${this.formatByteProgress(o, i)}`)
                                }
                                ,
                                success: () => {
                                    s.HotUpdate.Manager.applyUpdate()
                                }
                                ,
                                fail: e => {
                                    e && s.HotUpdate.Manager.retry()
                                }
                            })) : (this.loadBundle(),
                                this.gaInit())
                    }
                    )
            }
            loadBundle() {
                l.GetBundle(l.EBundle.Common, () => {
                    l.MBundle.preloadScene({
                        bundle: l.EBundle.Game,
                        scene: l.EScene.GameScene,
                        onProgress: (e, t) => {
                            this.updateProgress(e / t),
                                this.tryLoadScene()
                        }
                    })
                }
                )
            }
            gaInit() {
                cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isSplashEnd", "()Z") && (console.log("setSplashAdEnd!"),
                    window.kariqu_android_proxy.setSplashAdEnd()),
                    GA.init(this.initOption).then(() => {
                        "android_mgct_abroad_weiyou" == GA.Info.appId ? this.weiyouLogo.active = !0 : this.weiyouLogo.active = !1,
                            GA.isPlatform(GA.Platform.Kwaigame) && (GA.sentLog = () => { }
                                ,
                                GA.sentLogs = () => { }
                            ),
                            c.MConfig.Transsion && (GA.Info.withoutRewardVideoAd = !0),
                            GA.isPlatform([GA.Platform.OPPO, GA.Platform.Vivo, GA.Platform.QQ, GA.Platform.ByteDance]) && !Utils.getItem("Clause") ? this.clause.active = !0 : this.afterInited()
                    }
                    ).catch(e => {
                        console.log("GA init failed. " + e)
                    }
                    )
            }
            afterInited() {
                console.log("GA init success."),
                    console.log("getLaunchOptionsSync:", JSON.stringify(GA.PA.getLaunchOptionsSync())),
                    "overseas" == c.MConfig.Region ? this.initAppProxy() : c.MConfig.Hago && (c.MConfig.PurchaseGoods.newfirstimpulse = {
                        gameItemId: 1,
                        price_amount_micros: 1802068,
                        name: "hero gift",
                        price: "$0.99"
                    },
                        c.MConfig.PurchaseGoods.newtimelimit = {
                            gameItemId: 2,
                            price_amount_micros: 1802069,
                            name: "special present",
                            price: "$1.99"
                        },
                        c.MConfig.PurchaseGoods.newpermanent_1 = {
                            gameItemId: 11,
                            productId: "1",
                            price_amount_micros: 1802070,
                            name: "gift pack1",
                            price: "$2.99"
                        },
                        c.MConfig.PurchaseGoods.newpermanent_2 = {
                            gameItemId: 12,
                            productId: "2",
                            price_amount_micros: 1802073,
                            name: "gift pack2",
                            price: "$5.99"
                        },
                        c.MConfig.PurchaseGoods.newpermanent_3 = {
                            gameItemId: 13,
                            productId: "3",
                            price_amount_micros: 1802076,
                            name: "gift pack3",
                            price: "$8.99"
                        },
                        c.MConfig.PurchaseGoods.inited = !0),
                    GA.isPlatform(GA.Platform.Kwaigame) && (c.MConfig.KwaiHost = GA.PA.getSystemInfoSync().host.env,
                        console.log("MConfig.KwaiHost:", c.MConfig.KwaiHost)),
                    GA.isPlatform(GA.Platform.ByteDance) && (c.MConfig.appName = GA.PA.getSystemInfoSync().appName,
                        console.log("MConfig.appName:", c.MConfig.appName)),
                    this.checkUpdate();
                const e = () => {
                    GA.PA.showModal({
                        title: "\u63d0\u793a",
                        content: "\u767b\u5f55\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5",
                        showCancel: !1,
                        confirmText: "\u91cd\u8bd5",
                        success: () => {
                            t()
                        }
                    })
                }
                    , t = () => {
                        GA.request({
                            url: Urls.url_reqLogin,
                            data: {
                                openid: GA.Info.openId,
                                channel: GA.Info.channelId,
                                scence: GA.Info.scene,
                                nickname: GA.Info.nickname,
                                headicon: GA.Info.avatar
                            },
                            method: "POST",
                            success: t => {
                                console.log("Login:", t),
                                    0 == t.data.code ? (GA.Info.sharePath = t.data.data.shareChannel,
                                        GA.setUserId(t.data.data.userId),
                                        Utils.setItem("LocalUserId", t.data.data.userId.toString()),
                                        console.log("GA.Info.uid:", GA.Info.uid),
                                        c.MConfig.loadConfig(() => {
                                            c.MConfig.checkIP(),
                                                d.MData.syncData({
                                                    data: t.data.data.data
                                                }),
                                                GA.Info.isPreview || this.initAd(),
                                                l.GetBundle(l.EBundle.Common, () => {
                                                    this.dataComplete = !0,
                                                        this.tryLoadScene()
                                                }
                                                )
                                        }
                                        )) : e()
                            }
                            ,
                            fail: t => {
                                console.log("fail:", JSON.stringify(t)),
                                    e()
                            }
                        })
                    }
                    ;
                if (GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5]) || "overseas" == c.MConfig.Region)
                    GA.getOpenId(e => {
                        console.log("GA.Info.openId:", e),
                            c.MConfig.loadConfig(() => {
                                d.MData.syncData({
                                    data: null,
                                    callback: () => {
                                        "overseas" == c.MConfig.Region && (m.Temporary.SycnData = !0,
                                            m.Temporary.SycnData && m.Temporary.RemoteConfig_SkuIds && !m.Temporary.LoadedSkuDetail && (m.Temporary.LoadedSkuDetail = !0,
                                                console.log("\u5f00\u59cb\u83b7\u53d6\u5546\u54c1\u4fe1\u606f2\uff1a"),
                                                null === AppProxy || void 0 === AppProxy || AppProxy.getProductDetail(c.MConfig.AppProxyConfig.SkuIds)))
                                    }
                                }),
                                    GA.Info.isPreview || this.initAd(),
                                    l.GetBundle(l.EBundle.Common, () => {
                                        this.dataComplete = !0,
                                            this.tryLoadScene()
                                    }
                                    )
                            }
                            )
                    }
                        , !0);
                else if (GA.Info.isPreview) {
                    let e = Utils.getItem("LocalOpenId");
                    "" != e && null != e || (e = "genUid" + Utils.genUid(),
                        Utils.setItem("LocalOpenId", e)),
                        GA.Info.openId = e,
                        console.log("GA.Info.openId:", GA.Info.openId),
                        t()
                } else {
                    let e = !0;
                    GA.isPlatform([GA.Platform.WeChat, GA.Platform.OPPO, GA.Platform.Vivo]) && (e = !1),
                        console.log("getOpenId!"),
                        GA.getOpenId(e => {
                            let o = Utils.getItem("LocalOpenId");
                            "" != e && null != e || (GA.Info.openId = "genUid" + Utils.genUid()),
                                "" != o && null != o || (o = GA.Info.openId,
                                    Utils.setItem("LocalOpenId", o)),
                                GA.Info.openId = o,
                                console.log("GA.Info.openId:", GA.Info.openId),
                                t()
                        }
                            , e)
                }
            }
            tryLoadScene() {
                this.loadedScene || this.preloadSceneComplete && this.dataComplete && (this.loadedScene = !0,
                    l.MBundle.loadScene({
                        bundle: l.EBundle.Hall,
                        scene: l.EScene.HallScene,
                        onBeforeLoadScene: () => {
                            console.log("\u52a0\u8f7d\u573a\u666f\u524d\uff01")
                        }
                        ,
                        onLaunched: () => {
                            m.Temporary.currentScene = l.EScene.HallScene,
                                console.log("\u542f\u52a8\u573a\u666f\u540e\uff01"),
                                GA.sentLogs([{
                                    eventId: "HomeStartGame"
                                }]),
                                GA.isPlatform(GA.Platform.Hago) && (window.hg.gameLoadResult && window.hg.gameLoadResult({
                                    code: 0
                                }),
                                    f.MIP.getPayResult({
                                        amount: 1,
                                        receive: !0
                                    })),
                                GA.isPlatform(GA.Platform.Kwaigame) && !GA.Info.underCheck && 1 == c.MConfig.Config.LanchPlayVideo && GA.rewardOperation({
                                    tag: "\u542f\u52a8\u64ad\u653e\u89c6\u9891",
                                    byVideo: !0,
                                    page: "\u542f\u52a8\u9875",
                                    result: e => {
                                        e.reward && console.log("\u542f\u52a8\u64ad\u653e\u89c6\u9891\u770b\u5b8c\u5173\u95ed\uff01")
                                    }
                                })
                        }
                    }))
            }
            updateProgress(e) {
                this.fill.width = 359 * (e > 1 ? 1 : e),
                    this.percent.string = `${Math.ceil(100 * (e > 1 ? 1 : e))}%`,
                    this.wxbzdFill.width = 420 * (e > 1 ? 1 : e),
                    this.wxbzdPercent.string = `${Math.ceil(100 * (e > 1 ? 1 : e))}%`,
                    e >= 1 && (this.preloadSceneComplete = !0)
            }
            checkUpdate() {
                if (GA.isPlatform([GA.Platform.WeChat])) {
                    let e = GA.PA.getUpdateManager();
                    e && e.onUpdateReady(function () {
                        GA.PA.showModal({
                            title: "\u66f4\u65b0\u63d0\u793a",
                            content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f",
                            success(t) {
                                t.confirm && e.applyUpdate()
                            }
                        })
                    })
                }
            }
            initAppProxy() {
                try {
                    let t = () => {
                        let e = null === AppProxy || void 0 === AppProxy ? void 0 : AppProxy.getRemoteConfig();
                        console.log("configs:", JSON.stringify(e)),
                            e.forEach((e, t) => {
                                console.log(`Remote Config: ${t}:${e}`),
                                    "RsvDiamond" == t && (c.MConfig.AppProxyConfig.RsvDiamond = "string" == typeof e ? JSON.parse(e) : e),
                                    "SkuIds" == t && (c.MConfig.AppProxyConfig.SkuIds = "string" == typeof e ? JSON.parse(e) : e,
                                        m.Temporary.RemoteConfig_SkuIds = !0,
                                        m.Temporary.SycnData && m.Temporary.RemoteConfig_SkuIds && !m.Temporary.LoadedSkuDetail && (m.Temporary.LoadedSkuDetail = !0,
                                            console.log("\u5f00\u59cb\u83b7\u53d6\u5546\u54c1\u4fe1\u606f3\uff1a"),
                                            null === AppProxy || void 0 === AppProxy || AppProxy.getProductDetail(c.MConfig.AppProxyConfig.SkuIds))),
                                    GA.isPlatform(GA.Platform.Android) ? ("NewFirstImpulse" == t && (c.MConfig.AppProxyConfig.NewFirstImpulse = "string" == typeof e ? JSON.parse(e) : e),
                                        "NewTimeLimit" == t && (c.MConfig.AppProxyConfig.NewTimeLimit = "string" == typeof e ? JSON.parse(e) : e),
                                        "NewPermanent_1" == t && (c.MConfig.AppProxyConfig.NewPermanent_1 = "string" == typeof e ? JSON.parse(e) : e),
                                        "NewPermanent_2" == t && (c.MConfig.AppProxyConfig.NewPermanent_2 = "string" == typeof e ? JSON.parse(e) : e),
                                        "NewPermanent_3" == t && (c.MConfig.AppProxyConfig.NewPermanent_3 = "string" == typeof e ? JSON.parse(e) : e)) : ("FirstImpulse" == t && (c.MConfig.AppProxyConfig.NewFirstImpulse = "string" == typeof e ? JSON.parse(e) : e),
                                            "TimeLimit" == t && (c.MConfig.AppProxyConfig.NewTimeLimit = "string" == typeof e ? JSON.parse(e) : e),
                                            "Permanent_1" == t && (c.MConfig.AppProxyConfig.NewPermanent_1 = "string" == typeof e ? JSON.parse(e) : e),
                                            "Permanent_2" == t && (c.MConfig.AppProxyConfig.NewPermanent_2 = "string" == typeof e ? JSON.parse(e) : e),
                                            "Permanent_3" == t && (c.MConfig.AppProxyConfig.NewPermanent_3 = "string" == typeof e ? JSON.parse(e) : e)),
                                    "RewardVideoAdRatio" == t && (c.MConfig.AppProxyConfig.RewardVideoAdRatio = e),
                                    "NewPlayerFsvAdPd" == t && (c.MConfig.AppProxyConfig.NewPlayerFsvAdPd = e),
                                    "OldPlayerFsvAdPd" == t && (c.MConfig.AppProxyConfig.OldPlayerFsvAdPd = e),
                                    "FsvAdRatio" == t && (c.MConfig.AppProxyConfig.FsvAdRatio = e),
                                    "AfterVideoAdFsvRatio" == t && (c.MConfig.AppProxyConfig.AfterVideoAdFsvRatio = e),
                                    "SwitchPTBXFsvAd" == t && (c.MConfig.AppProxyConfig.SwitchPTBXFsvAd = e),
                                    "SwitchFHSYFsvAd" == t && (c.MConfig.AppProxyConfig.SwitchFHSYFsvAd = e)
                            }
                            ),
                            c.MConfig.AppProxyConfig.Inited = !0,
                            console.log("MConfig.AppProxyConfig:", JSON.stringify(c.MConfig.AppProxyConfig))
                    }
                        ;
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.REMOTE_CONFIG_SYNC, e => {
                        if (console.log(`AppProxy: Sync Remote Config ${e}`),
                            e)
                            t();
                        else {
                            let e = ""
                                , t = ""
                                , o = "";
                            "cn" == c.MConfig.Language ? (e = "\u63d0\u793a",
                                t = "\u8fdc\u7a0b\u914d\u7f6e\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01",
                                o = "\u786e\u5b9a") : "tc" == c.MConfig.Language ? (e = "\u63d0\u793a",
                                    t = "\u9060\u7a0b\u914d\u5bd8\u7372\u53d6\u5931\u6557\uff0c\u8acb\u91cd\u8a66\uff01",
                                    o = "\u78ba\u5b9a") : "en" != c.MConfig.Language && "pt" != c.MConfig.Language && "vi" != c.MConfig.Language && "id" != c.MConfig.Language || (e = "Tip",
                                        t = "Remote configuration acquisition failed, please try again!",
                                        o = "Confirm"),
                                GA.PA.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: !1,
                                    confirmText: o,
                                    success: () => {
                                        null === AppProxy || void 0 === AppProxy || AppProxy.fetchRemoteConfig()
                                    }
                                })
                        }
                    }
                    ),
                        c.MConfig.Transsion ? (console.log("\u5f00\u59cb\u83b7\u53d6\u5546\u54c1\u4fe1\u606f1\uff1a"),
                            m.Temporary.LoadedSkuDetail = !0,
                            null === AppProxy || void 0 === AppProxy || AppProxy.getProductDetail(c.MConfig.AppProxyConfig.SkuIds)) : null === AppProxy || void 0 === AppProxy || AppProxy.fetchRemoteConfig()
                } catch (e) { }
                null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.GOT_PRODUCT_DETAIL, (e, t) => {
                    console.log(`AppProxy: GOT_SKU_DETAIL ${JSON.stringify(e)}`),
                        console.log("details:", t),
                        c.MConfig.TablePurchaseDiamond.set(1, {
                            productId: "diamond_ref",
                            type: "",
                            title: "",
                            name: "",
                            price: "US$0",
                            price_amount_micros: 0,
                            price_currency_code: "",
                            description: "USD",
                            skuDetailsToken: "",
                            order: 1
                        });
                    let o = e => {
                        var t;
                        let o = [];
                        for (let i = 0; i < e.length; i++)
                            -1 != e[i].productId.indexOf("diamond") && o.push(e[i]),
                                "NoAd" != e[i].productId && "no_ad" != e[i].productId || (c.MConfig.PurchaseGoods.no_ad = e[i],
                                    h.MEvent.emit(h.EMsg.GetNoAdInfo)),
                                GA.isPlatform(GA.Platform.Android) ? ("newfirstimpulse" != e[i].productId && "com_001" != e[i].productId || (c.MConfig.PurchaseGoods.newfirstimpulse = e[i]),
                                    "newtimelimit" != e[i].productId && "com_005" != e[i].productId || (c.MConfig.PurchaseGoods.newtimelimit = e[i]),
                                    "newpermanent_1" != e[i].productId && "com_002" != e[i].productId || (c.MConfig.PurchaseGoods.newpermanent_1 = e[i]),
                                    "newpermanent_2" != e[i].productId && "com_003" != e[i].productId || (c.MConfig.PurchaseGoods.newpermanent_2 = e[i]),
                                    "newpermanent_3" != e[i].productId && "com_004" != e[i].productId || (c.MConfig.PurchaseGoods.newpermanent_3 = e[i])) : ("firstimpulse" == e[i].productId && (c.MConfig.PurchaseGoods.newfirstimpulse = e[i]),
                                        "timelimit" == e[i].productId && (c.MConfig.PurchaseGoods.newtimelimit = e[i]),
                                        "permanent_1" == e[i].productId && (c.MConfig.PurchaseGoods.newpermanent_1 = e[i]),
                                        "permanent_2" == e[i].productId && (c.MConfig.PurchaseGoods.newpermanent_2 = e[i]),
                                        "permanent_3" == e[i].productId && (c.MConfig.PurchaseGoods.newpermanent_3 = e[i])),
                                "overbox3x" == e[i].productId && (c.MConfig.PurchaseGoods.overbox3x = e[i]);
                        o.sort((e, t) => parseInt(e.productId.split("_")[1]) - parseInt(t.productId.split("_")[1]));
                        for (let i = 0; i < o.length; i++) {
                            let e = o[i];
                            c.MConfig.TablePurchaseDiamond.set(i + 2, {
                                productId: e.productId,
                                type: e.type,
                                title: e.title,
                                name: e.name,
                                price: e.price,
                                price_amount_micros: e.price_amount_micros,
                                price_currency_code: e.price_currency_code,
                                description: e.description,
                                skuDetailsToken: e.skuDetailsToken,
                                order: i + 2
                            })
                        }
                        AppProxy.checkPurchase(),
                            c.MConfig.PurchaseGoods.inited = !0,
                            null === (t = m.Temporary.GotProductDetailCallBack) || void 0 === t || t.call(m.Temporary),
                            m.Temporary.GotProductDetailCallBack = null
                    }
                        , i = [];
                    GA.isPlatform(GA.Platform.iOS) ? o(i = t) : cc.loader.load(t, (e, t) => {
                        e || ((i = JSON.parse(t)).forEach(e => {
                            console.log("element:", JSON.stringify(e))
                        }
                        ),
                            console.log("arr:", JSON.stringify(i)),
                            o(i))
                    }
                    )
                }
                ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.PENDING_ORDER, e => {
                        console.log(`AppProxy: PENDING_ORDER ${JSON.stringify(e)}`),
                            e.forEach(e => {
                                var t;
                                let o = AppProxy.getOrderInfo(e);
                                console.log("getOrderInfo:", JSON.stringify(o));
                                let i = o.productId;
                                -1 != i.indexOf("diamond") && g.MModel.Account.addDiamond(parseInt(o.productId.split("_")[1])),
                                    "NoAd" != i && "no_ad" != i || (g.MModel.Gift.noAd = !0,
                                        GA.Info.withoutRewardVideoAd = !0,
                                        h.MEvent.emit(h.EMsg.NoAd)),
                                    "newfirstimpulse" != i && "firstimpulse" != i && "com_001" != i || (g.MModel.Gift.getFirstImpulseReward(),
                                        g.MModel.Gift.firstImpulseComplete = !0,
                                        h.MEvent.emit(h.EMsg.GetFirstImpulseReward)),
                                    "newtimelimit" != i && "newtimelimit" != i && "com_005" != i || (g.MModel.Gift.getTimeLimitReward(),
                                        g.MModel.Gift.timeLimitComplete = !0,
                                        h.MEvent.emit(h.EMsg.GetTimeLimitReward)),
                                    "newpermanent_1" != i && "newpermanent_1" != i && "com_002" != i || g.MModel.Gift.getPermanentReward("1"),
                                    "newpermanent_2" != i && "newpermanent_2" != i && "com_003" != i || g.MModel.Gift.getPermanentReward("2"),
                                    "newpermanent_3" != i && "newpermanent_3" != i && "com_004" != i || g.MModel.Gift.getPermanentReward("3"),
                                    "overbox3x" == i && h.MEvent.emit(h.EMsg.GetOverBox3x),
                                    "VideoToPay" == i && (null === (t = m.Temporary.TranssionVideoCallBack) || void 0 === t || t.call(m.Temporary)),
                                    null === AppProxy || void 0 === AppProxy || AppProxy.confirmPurchase(e),
                                    console.log(`AppProxy: getOrderInfo ${o}`)
                            }
                            )
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.PURCHASE_RESULT, (e, t) => {
                        console.log(`AppProxy: PURCHASE_RESULT ${e}:${t}`)
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.SIGN_IN, () => {
                        console.log("AppProxy: SIGN_IN."),
                            g.MModel.Common.GooleLogined = !0,
                            m.Temporary.GooleLogined = !0,
                            h.MEvent.emit(h.EMsg.Goole_SIGN_IN)
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.SIGN_IN_FAILED, e => {
                        console.log(`AppProxy: SIGN_IN_FAILED(${e}).`),
                            p.MToast.showToast({
                                title: "Sign in failed."
                            })
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.SIGN_OUT, () => {
                        g.MModel.Common.GooleLogined = !1,
                            m.Temporary.GooleLogined = !1,
                            h.MEvent.emit(h.EMsg.Goole_SIGN_OUT),
                            console.log("AppProxy: SIGN_OUT.")
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.SAVE_FILE, e => {
                        console.log(`AppProxy: SAVE_FILE (${e}).`)
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.LOAD_SAVE_FILE, (e, t) => {
                        console.log(`AppProxy: LOAD_SAVE_FILE ${e} : ${t}`),
                            d.MData.syncData({
                                data: t,
                                forceReadServer: !0
                            }),
                            h.MEvent.emit(h.EMsg.RefreshHallScene)
                    }
                    ),
                    null === AppProxy || void 0 === AppProxy || AppProxy.registListener(AppProxy.ListenerKey.RESTORE_NONCONSUMABLE_PURCHASE, e => {
                        console.log(`AppProxy: RESTORE_NONCONSUMABLE_PURCHASE ${e}`),
                            "NoAd" != e && "no_ad" != e || (g.MModel.Gift.noAd = !0,
                                GA.Info.withoutRewardVideoAd = !0,
                                h.MEvent.emit(h.EMsg.NoAd))
                    }
                    )
            }
            initAd() {
                GA.isPlatform(GA.Platform.WeChat) ? "1" == c.MConfig.Mgct ? (GA.initBannerAd([{
                    adId: "adunit-e6a616dc109505af",
                    validTimes: c.MConfig.Config.BannerValidTimes
                }]),
                    GA.initRewardVideoAd(["adunit-9e6436beff86ed36"]),
                    r.MAd.initInterstitialAd("adunit-5e06483b40093264")) : "2" == c.MConfig.Mgct && (GA.initBannerAd([{
                        adId: "adunit-99ff1d3a80690ed4",
                        validTimes: c.MConfig.Config.BannerValidTimes
                    }]),
                        GA.initRewardVideoAd(["adunit-174070a5131a1aa4"]),
                        r.MAd.initInterstitialAd("adunit-0c62ba3dd782ce83")) : GA.isPlatform(GA.Platform.OPPO) ? (GA.initRewardVideoAd(["342829"]),
                            r.MAd.initGamePortalAd("342840"),
                            r.MAd.initGameBannerAd("342832")) : GA.isPlatform(GA.Platform.QQ) ? (GA.initBannerAd([{
                                adId: "1e2476b30df50507555c10d0b252bf2a",
                                validTimes: c.MConfig.Config.BannerValidTimes
                            }]),
                                GA.initRewardVideoAd(["b88622939631f6bbd5232614eac2cb7c"]),
                                r.MAd.initInterstitialAd("c73d7e08b6a4039e66844e973dd02cae"),
                                r.MAd.initAppBoxAd("bd4b00b08cc01c16a8516c3bb603c333")) : GA.isPlatform(GA.Platform.Vivo) ? (GA.initRewardVideoAd(["6ad2ce08f12740a28fa4dc21027e95dc"]),
                                    r.MAd.initInterstitialAd("f9b88888aae54bf6ade1ad744897197b")) : GA.isPlatform(GA.Platform.ByteDance) ? GA.initRewardVideoAd(["1b8xx30dwsba6kahk5"]) : GA.isPlatform([GA.Platform.Kwaigame]) ? (GA.initRewardVideoAd(["2300001332_01"]),
                                        GA.initInterstitialAd("2300001332_02")) : GA.isPlatform(GA.Platform.Hago) && GA.initRewardVideoAd([10498]),
                    GA.addVideoEndCallback(() => {
                        console.log("Test:\u89c6\u9891\u770b\u5b8c\u5173\u95ed\uff01"),
                            m.Temporary.levelShowVideo = !0,
                            m.Temporary.closeVideoTime = (new Date).getTime(),
                            g.MModel.Task.doTask(4),
                            g.MModel.Task.doTask(10),
                            r.MAd.lastPlayVideoAd = (new Date).getTime()
                    }
                    )
            }
            onClickShilingtixing() {
                u.MDialog.showDialog(l.EDialog.Clause, {
                    data: "\u9002\u9f84\u63d0\u9192"
                })
            }
            onClickYonghuxieyi() {
                u.MDialog.showDialog(l.EDialog.Yonghuxieyi, {})
            }
            onClickYinsizhengce() {
                u.MDialog.showDialog(l.EDialog.Yinsizhengce, {})
            }
            onClickDisagree() {
                cc.game.end()
            }
            onClickAgree() {
                Utils.setItem("Clause", "true"),
                    this.clause.active = !1,
                    this.afterInited()
            }
            formatByteProgress(e, t) {
                let o = 0;
                for (; t > 2048;)
                    t /= 1024,
                        e /= 1024,
                        o++;
                switch (o) {
                    case 0:
                        return `${e}Byte/${t}Byte`;
                    case 1:
                        return `${e.toFixed(2)}KB/${t.toFixed(2)}KB`;
                    case 2:
                        return `${e.toFixed(2)}MB/${t.toFixed(2)}MB`;
                    case 3:
                        return `${e.toFixed(2)}GB/${t.toFixed(2)}GB`;
                    case 4:
                        return `${e.toFixed(2)}TB/${t.toFixed(2)}TB`;
                    case 5:
                        return `${e.toFixed(2)}PB/${t.toFixed(2)}PB`;
                    default:
                        return ""
                }
            }
        }
            ;
        i([M(cc.Node)], y.prototype, "logo_02", void 0),
            i([M(cc.Node)], y.prototype, "logo_cn", void 0),
            i([M(cc.Node)], y.prototype, "logo_tc", void 0),
            i([M(cc.Node)], y.prototype, "logo_en", void 0),
            i([M(cc.Node)], y.prototype, "logo_pt", void 0),
            i([M(cc.Node)], y.prototype, "logo_id", void 0),
            i([M(cc.Node)], y.prototype, "logo_vi", void 0),
            i([M(cc.Node)], y.prototype, "advice", void 0),
            i([M(cc.Node)], y.prototype, "ageAppropriate", void 0),
            i([M(cc.Label)], y.prototype, "percent", void 0),
            i([M(cc.Label)], y.prototype, "wxbzdPercent", void 0),
            i([M(cc.Node)], y.prototype, "fill", void 0),
            i([M(cc.Node)], y.prototype, "wxbzdFill", void 0),
            i([M(cc.Node)], y.prototype, "falseFill", void 0),
            i([M(cc.Node)], y.prototype, "clause", void 0),
            i([M(cc.Node)], y.prototype, "weiyouLogo", void 0),
            y = i([v], y),
            o.default = y,
            cc._RF.pop()
    }
        , {
        "../../Script/Base/BaseScene": "BaseScene",
        "../../Script/HotUpdate": "HotUpdate",
        "../../Script/Manager/MAd": "MAd",
        "../../Script/Manager/MBundle": "MBundle",
        "../../Script/Manager/MConfig": "MConfig",
        "../../Script/Manager/MData": "MData",
        "../../Script/Manager/MDialog": "MDialog",
        "../../Script/Manager/MEvent": "MEvent",
        "../../Script/Manager/MIP": "MIP",
        "../../Script/Manager/MModel": "MModel",
        "../../Script/Manager/MToast": "MToast",
        "../../Script/Temporary": "Temporary",
        gameassistant3: 1,
        papaparse: 2
    }],
    MAd: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8c5abGrBgBEPbo8CMABvDi1", "MAd"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MAd = void 0;
        const i = e("../Enum")
            , n = e("../Temporary")
            , a = e("./MAudio")
            , s = e("./MBundle")
            , r = e("./MConfig")
            , l = e("./MEvent")
            , c = e("./MToast");
        o.MAd = new class {
            constructor() {
                this.gamePortalAd = null,
                    this.gamePortalAdId = "",
                    this.gameBannerAd = null,
                    this.gameBannerAdId = "",
                    this.interstitialAdId = "",
                    this.appBoxAdId = "",
                    this.lastPlayVideoAd = 0
            }
            initMatrixCustomAd() {
                let e = cc.winSize.height - 788
                    , t = "adunit-0d9b65b4e7e9b9d1"
                    , o = 380;
                if (e < 380)
                    return;
                e < 540 ? (t = "adunit-0d9b65b4e7e9b9d1",
                    o = 380,
                    console.log("\u663e\u793a2\u884c\u539f\u751f\u77e9\u9635\u5e7f\u544a")) : e < 700 ? (t = "adunit-5e20b61cc15c643b",
                        o = 540,
                        console.log("\u663e\u793a3\u884c\u539f\u751f\u77e9\u9635\u5e7f\u544a")) : e < 860 ? (t = "adunit-cb0fa365d637817a",
                            o = 700,
                            console.log("\u663e\u793a4\u884c\u539f\u751f\u77e9\u9635\u5e7f\u544a")) : (t = "adunit-72b3a9de52fea923",
                                o = 860,
                                console.log("\u663e\u793a5\u884c\u539f\u751f\u77e9\u9635\u5e7f\u544a"));
                let i = GA.PA.getSystemInfoSync()
                    , n = 0;
                "l" == Utils.screenSize() ? n = GA.PA.getMenuButtonBoundingClientRect().top : "m" == Utils.screenSize() && (n = GA.PA.getMenuButtonBoundingClientRect().bottom),
                    this.matrixCustomAd = window.wx.createCustomAd({
                        adUnitId: t,
                        adIntervals: 99999,
                        style: {
                            left: 0,
                            top: (cc.winSize.height - o) / i.designPixelRatio - n,
                            fixed: !0
                        }
                    }),
                    this.matrixCustomAd.onLoad(() => {
                        console.log("\u539f\u751f\u77e9\u9635\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                    }
                    ),
                    this.matrixCustomAd.onError(e => {
                        console.log("\u539f\u751f\u77e9\u9635\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"),
                            console.log(e)
                    }
                    )
            }
            showMatrixCustomAd() {
                var e;
                null === (e = this.matrixCustomAd) || void 0 === e || e.show()
            }
            hideMatrixCustomAd() {
                var e;
                null === (e = this.matrixCustomAd) || void 0 === e || e.hide()
            }
            initGamePortalAd(e) {
                console.log("\u521d\u59cb\u5316\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a");
                try {
                    this.gamePortalAdId = e,
                        window.qg.getSystemInfoSync().platformVersionCode >= 1076 && (this.gamePortalAd = window.qg.createGamePortalAd({
                            adUnitId: this.gamePortalAdId
                        }),
                            console.log(this.gamePortalAd),
                            this.gamePortalAd.onLoad(() => {
                                console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f!")
                            }
                            ),
                            this.gamePortalAd.onClose(() => {
                                console.log("\u5173\u95ed\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\uff01"),
                                    this.gamePortalAd = window.qg.createGamePortalAd({
                                        adUnitId: this.gamePortalAdId
                                    }),
                                    this.gamePortalAd.load().then(() => {
                                        console.log("gamePortalAd load success!")
                                    }
                                    ).catch(e => {
                                        console.log("gamePortalAd load fail with:" + e.errCode + "," + e.errMsg)
                                    }
                                    )
                            }
                            ),
                            this.gamePortalAd.load().then(() => {
                                console.log("gamePortalAd load success!")
                            }
                            ).catch(e => {
                                console.log("gamePortalAd load fail with:" + e.errCode + "," + e.errMsg)
                            }
                            ))
                } catch (t) {
                    console.log(t)
                }
            }
            showGamePortalAd() {
                if (this.gamePortalAd && window.qg.getSystemInfoSync().platformVersionCode >= 1076)
                    try {
                        this.gamePortalAd.show().then(() => {
                            console.log("gamePortalAd show success!")
                        }
                        ).catch(e => {
                            console.log("gamePortalAd show fail with:" + e.errCode + "," + e.errMsg),
                                this.gamePortalAd.load().then(() => {
                                    console.log("gamePortalAd load success!"),
                                        this.showGamePortalAd()
                                }
                                ).catch(e => {
                                    console.log("gamePortalAd load fail with:" + e.errCode + "," + e.errMsg)
                                }
                                )
                        }
                        )
                    } catch (e) { }
                else
                    GA.PA.showToast({
                        title: "\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API",
                        icon: "none"
                    })
            }
            initGameBannerAd(e) {
                console.log("\u521d\u59cb\u5316\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a");
                try {
                    this.gameBannerAdId = e,
                        window.qg.getSystemInfoSync().platformVersionCode >= 1076 ? (this.gameBannerAd = window.qg.createGameBannerAd({
                            adUnitId: this.gameBannerAdId
                        }),
                            this.gameBannerAd.onLoad(() => {
                                console.log("\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f!")
                            }
                            )) : console.log("initGameBannerAd \u7248\u672c\u5c0f\u4e8e1076")
                } catch (t) {
                    console.log(t)
                }
            }
            showGameBannerAd() {
                if (this.gameBannerAd && window.qg.getSystemInfoSync().platformVersionCode >= 1076)
                    try {
                        this.gameBannerAd.show().then(() => {
                            console.log("gameBannerAd show success!")
                        }
                        ).catch(e => {
                            console.log("gameBannerAd show fail with:" + e.errCode + "," + e.errMsg)
                        }
                        )
                    } catch (e) { }
            }
            hideGameBannerAd() {
                try {
                    this.gameBannerAd && this.gameBannerAd.hide().then(function () {
                        console.log("gameBannerAd hide success")
                    }).catch(function (e) {
                        console.log("gameBannerAd hide fail with:" + e.errCode + "," + e.errMsg)
                    })
                } catch (e) { }
            }
            initInterstitialAd(e) {
                this.interstitialAdId = e
            }
            showInterstitialAd() {
                if (GA.isPlatform([GA.Platform.Vivo]))
                    window.qg.createInterstitialAd({
                        posId: "f9b88888aae54bf6ade1ad744897197b"
                    }).show().then(() => {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
                    }
                    ).catch(e => {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(e))
                    }
                    );
                else if (GA.isPlatform([GA.Platform.Kwaigame])) {
                    console.log("\u5373\u5c06\u5c55\u793a\u63d2\u5c4f\uff01!");
                    let e = {};
                    e.adUnitId = this.interstitialAdId;
                    let t = window.ks.createInterstitialAd(e);
                    t ? (t.onClose(e => {
                        console.log(e)
                    }
                    ),
                        t.onError(e => {
                            console.log(e)
                        }
                        ),
                        t.show().then(function () {
                            console.log("show interstitial ad success")
                        }).catch(function (e) {
                            console.log("show interstitial ad failed"),
                                console.log(e),
                                e.code
                        })) : console.log("\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u5931\u8d25")
                } else {
                    if (GA.Info.underCheck)
                        return;
                    let e = GA.PA.createInterstitialAd({
                        adUnitId: this.interstitialAdId
                    });
                    e.onError(e => {
                        console.log("error", e)
                    }
                    ),
                        e.load().catch(e => {
                            console.error("load", e)
                        }
                        ),
                        e.onLoad(() => {
                            console.log("onLoad event emit"),
                                e.show().catch(e => {
                                    console.error("show", e)
                                }
                                )
                        }
                        )
                }
            }
            initAppBoxAd(e) {
                this.appBoxAdId = e
            }
            showAppBoxAd() {
                if (GA.Info.underCheck)
                    return;
                let e = GA.PA.createAppBox({
                    adUnitId: this.appBoxAdId
                });
                e.load().then(() => {
                    e.show()
                }
                )
            }
            rewardOperation(e) {
                if (GA.isPlatform(GA.Platform.Hago) && (r.MConfig.AppProxyConfig.RewardVideoAdRatio = 12),
                    (new Date).getTime() - this.lastPlayVideoAd < 1e3 * r.MConfig.AppProxyConfig.RewardVideoAdRatio && (GA.isPlatform(GA.Platform.Android) && "overseas" == r.MConfig.Region || GA.isPlatform(GA.Platform.Hago)))
                    return void ("cn" == r.MConfig.Language ? c.MToast.showToast({
                        title: "\u6682\u65e0\u5e7f\u544a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5~"
                    }) : "tc" == r.MConfig.Language ? c.MToast.showToast({
                        title: "\u66ab\u7121\u5ee3\u544a\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66~"
                    }) : "id" == r.MConfig.Language ? c.MToast.showToast({
                        title: "Tidak ada iklan, tolong coba lagi nanti."
                    }) : "pt" == r.MConfig.Language ? c.MToast.showToast({
                        title: "N\xe3o h\xe1 nenhum an\xfancio, por favor tente novamente mais tarde~"
                    }) : "vi" == r.MConfig.Language ? c.MToast.showToast({
                        title: "Kh\xf4ng c\xf3 qu\u1ea3ng c\xe1o, xin vui l\xf2ng th\u1eed l\u1ea1i sau."
                    }) : c.MToast.showToast({
                        title: "No ads, please try again later."
                    }));
                GA.isPlatform(GA.Platform.OPPO) && !GA.Info.underCheck && 1 == r.MConfig.Config.SwitchVideoToNavigate && n.Temporary.hasNavigateAd ? (l.MEvent.emit(l.EMsg.VideoToNavigate),
                    e.result({
                        reward: !0
                    })) : (() => {
                        n.Temporary.currentScene == s.EScene.HallScene && a.MAudio.pauseBG(),
                            console.info("====> show RewardedVideo success"),
                            n.Temporary.currentScene == s.EScene.HallScene && a.MAudio.resumeBG(),
                            e.result({
                                reward: !0
                            })
                            /*!GA.Info.isPreview && GA.isPlatform(GA.Platform.WeiYouH5) ? window.MiniGameAds.isRewardvideoReady() ? (cc.game.pause(),
                                MiniGameAds.showRewardedVideo().then(() => {
                                    cc.game.resume(),
                                        console.info("====> show RewardedVideo success"),
                                        n.Temporary.currentScene == s.EScene.HallScene && a.MAudio.resumeBG(),
                                        e.result({
                                            reward: !0
                                        })
                                }
                                ).catch(e => {
                                    cc.game.resume(),
                                        console.error("====> show RewardedVideo error: " + e.message)
                                }
                                )) : console.info("====> RewardedVideo not ready") : (cc.game.pause(),
                                    GA.rewardOperation({
                                        tag: e.tag,
                                        byVideo: this.checkRsv(e.tag) == i.ERsv.Video,
                                        page: e.page,
                                        result: t => {
                                            cc.game.resume(),
                                                n.Temporary.currentScene == s.EScene.HallScene && a.MAudio.resumeBG(),
                                                e.result(t)
                                        }
                                    }))*/
                    }
                    )()
            }
            checkRsv(e) {
                return GA.isPlatform([GA.Platform.WeChat]) ? GA.Info.underCheck ? i.ERsv.Video : GA.isNextRewardVideo(e) && GA.haveRewardVideo() ? i.ERsv.Video : i.ERsv.Share : i.ERsv.Video
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Enum": "Enum",
        "../Temporary": "Temporary",
        "./MAudio": "MAudio",
        "./MBundle": "MBundle",
        "./MConfig": "MConfig",
        "./MEvent": "MEvent",
        "./MToast": "MToast"
    }],
    MAudio: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "802a0RuW7tD3aPB6sB8eL8o", "MAudio"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MAudio = o.EAudio = void 0;
        const i = e("./MBundle")
            , n = e("./MModel");
        var a;
        (function (e) {
            e.BattleBGM = "BattleBGM",
                e.HallBGM = "HallBGM",
                e.CoinEffect = "CoinEffect",
                e.ChangeCamp = "ChangeCamp",
                e.TurnPage = "TurnPage",
                e.StrengthEffect = "StrengthEffect",
                e.Click = "Click",
                e.Connect = "Connect",
                e.Fail = "Fail",
                e.Win = "Win",
                e.ChangeStype = "ChangeStype",
                e.ConnectFail = "ConnectFail",
                e.ConnectSuccess = "ConnectSuccess",
                e.OpenBox = "OpenBox",
                e.HeroUplevel = "HeroUplevel",
                e.Skill6001 = "Skill6001",
                e.Skill6002 = "Skill6002",
                e.Skill6003 = "Skill6003",
                e.Skill6004 = "Skill6004",
                e.Skill6005 = "Skill6005",
                e.Skill6006 = "Skill6006",
                e.Skill6007 = "Skill6007",
                e.Skill6008 = "Skill6008",
                e.Skill6009 = "Skill6009",
                e.Skill6010 = "Skill6010",
                e.Skill6011 = "Skill6011",
                e.Skill6101 = "Skill6101",
                e.Skill6102 = "Skill6102",
                e.Skill6103 = "Skill6103",
                e.Skill6104 = "Skill6104",
                e.Skill6105 = "Skill6105",
                e.Skill6106 = "Skill6106",
                e.Skill6107 = "Skill6107",
                e.Skill6108 = "Skill6108",
                e.Skill6109 = "Skill6109",
                e.Skill6110 = "Skill6110",
                e.Skill6111 = "Skill6111",
                e.Skill6112 = "Skill6112",
                e.Skill6113 = "Skill6113",
                e.Skill6114 = "Skill6114",
                e.Skill6115 = "Skill6115",
                e.Skill6116 = "Skill6116",
                e.Skill6117 = "Skill6117"
        }
        )(a = o.EAudio || (o.EAudio = {})),
            o.MAudio = new class {
                constructor() {
                    this.audioClips = new Map,
                        this.uuids = [],
                        this.playClipTimes = []
                }
                playBG(e, t) {
                    (e != a.BattleBGM || GA.isPlatform([GA.Platform.OPPO, GA.Platform.Vivo]) || GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO) && "off" != n.MModel.Pause.AudioSwitch && (this.audioClips.has(e) ? cc.audioEngine.playMusic(this.audioClips.get(e), t) : i.MBundle.load({
                        bundle: i.EBundle.Audio,
                        path: e,
                        type: cc.AudioClip,
                        onComplete: o => {
                            cc.audioEngine.playMusic(o, t),
                                this.audioClips.set(e, o)
                        }
                    }))
                }
                stopBG() {
                    cc.audioEngine.stopMusic()
                }
                pauseBG() {
                    cc.audioEngine.pauseMusic()
                }
                resumeBG() {
                    "off" != n.MModel.Pause.AudioSwitch && cc.audioEngine.resumeMusic()
                }
                playEffect(e, t) {
                    if ("off" == n.MModel.Pause.AudioSwitch)
                        return;
                    let o = (new Date).getTime();
                    if (!this.playClipTimes[e] || o - this.playClipTimes[e] >= 100)
                        if (this.playClipTimes[e] = o,
                            this.audioClips[e])
                            if (t) {
                                let t = cc.audioEngine.playEffect(this.audioClips[e], !0);
                                this.uuids[e] = t
                            } else {
                                let t = cc.audioEngine.playEffect(this.audioClips[e], !1);
                                this.uuids[e] = t
                            }
                        else
                            i.MBundle.load({
                                bundle: i.EBundle.Audio,
                                path: e,
                                type: cc.AudioClip,
                                onComplete: o => {
                                    if (this.audioClips.set(e, o),
                                        t) {
                                        let t = cc.audioEngine.playEffect(o, !0);
                                        this.uuids[e] = t
                                    } else {
                                        let t = cc.audioEngine.playEffect(o, !1);
                                        this.uuids[e] = t
                                    }
                                }
                            })
                }
                stopEffect(e) {
                    this.uuids[e] && cc.audioEngine.stopEffect(this.uuids[e])
                }
            }
            ,
            cc._RF.pop()
    }
        , {
        "./MBundle": "MBundle",
        "./MModel": "MModel"
    }],
    MBundle: [function (e, t, o) {
        "use strict";
        function i(e, t) {
            let o = cc.assetManager.getBundle(e);
            if (o)
                try {
                    t(o)
                } catch (i) {
                    console.log(i)
                }
            else
                cc.assetManager.loadBundle(e, (e, o) => {
                    if (e)
                        console.log(e);
                    else
                        try {
                            t(o)
                        } catch (i) {
                            console.log(i)
                        }
                }
                )
        }
        cc._RF.push(t, "81af9kFzUNARaDkUwzI3RMU", "MBundle"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MBundle = o.EDialog = o.EScene = o.EBundle = o.GetBundle = void 0,
            o.GetBundle = i,
            function (e) {
                e.resources = "resources",
                    e.Common = "Common",
                    e.Config = "Config",
                    e.Audio = "Audio",
                    e.Hall = "Hall",
                    e.Game = "Game",
                    e.Level = "Level",
                    e.Battle = "Battle",
                    e.Dialog = "Dialog",
                    e.Effect = "Effect",
                    e.MineTower = "MineTower"
            }(o.EBundle || (o.EBundle = {})),
            function (e) {
                e.HallScene = "HallScene",
                    e.GameScene = "GameScene",
                    e.MineTower = "MineTower"
            }(o.EScene || (o.EScene = {})),
            function (e) {
                e.FreeCoin = "FreeCoin/res/DialogFreeCoin",
                    e.FreeStrength = "FreeStrength/res/DialogFreeStrength",
                    e.FreeGemstone = "FreeGemstone/res/DialogFreeGemstone",
                    e.Pause = "Pause/res/DialogPause",
                    e.Over = "Over/res/DialogOver",
                    e.OverBox = "OverBox/res/DialogOverBox",
                    e.TrialSkill = "TrialSkill/res/DialogTrialSkill",
                    e.Hero = "Hero/res/DialogHero",
                    e.BlindBox = "BlindBox/res/DialogBlindBox",
                    e.BlindBoxPrize = "BlindBoxPrize/res/DialogBlindBoxPrize",
                    e.Guide1 = "Guide/res/DialogGuide1",
                    e.Guide2 = "Guide/res/DialogGuide2",
                    e.Guide3 = "Guide/res/DialogGuide3",
                    e.SignIn = "SignIn/res/DialogSignIn",
                    e.GameRecorder = "GameRecorder/res/DialogGameRecorder",
                    e.LevelTask = "LevelTask/res/DialogLevelTask",
                    e.IfPause = "Pause/res/DialogIfPause",
                    e.LevelSelect = "LevelSelect/res/DialogLevelSelect",
                    e.Task = "Task/res/DialogTask",
                    e.Setting = "Setting/res/DialogSetting",
                    e.Store = "Store/res/DialogStore",
                    e.AddShortcut = "AddShortcut/res/DialogAddShortcut",
                    e.FirstImpulse = "FirstImpulse/res/DialogFirstImpulse",
                    e.TimeLimit = "TimeLimit/res/DialogTimeLimit",
                    e.Permanent = "Permanent/res/DialogPermanent",
                    e.Clause = "Clause/res/DialogClause",
                    e.Halloween = "Halloween/res/DialogHalloween",
                    e.ActivityExplain = "ActivityExplain/res/DialogActivityExplain",
                    e.Rank = "Rank/res/DialogRank",
                    e.Thanksgiving = "Thanksgiving/res/DialogThanksgiving",
                    e.Yinsizhengce = "Clause/res/DialogYinsizhengce",
                    e.Yonghuxieyi = "Clause/res/DialogYonghuxieyi",
                    e.Christmas = "Christmas/res/DialogChristmas",
                    e.NewYear = "NewYear/res/DialogNewYear",
                    e.MothersDay = "MothersDay/res/DialogMothersDay",
                    e.Pass = "Pass/res/DialogPass",
                    e.TowerOver = "custom/res/DialogTowerOver",
                    e.TowerPause = "custom/res/DialogTowerPause",
                    e.NewbieTask = "NewbieTask/res/DialogNewbieTask",
                    e.DeleteUser = "Setting/res/DialogDeleteUser"
            }(o.EDialog || (o.EDialog = {})),
            o.MBundle = new class {
                constructor() {
                    this.res = new Map
                }
                preload(e) {
                    i(e.bundle, t => {
                        t.preload(e.path, e.type)
                    }
                    )
                }
                preloadDir(e) {
                    i(e.bundle, t => {
                        e.type ? t.preloadDir(e.path, e.type) : e.onComplete && t.preloadDir(e.path, e.onComplete)
                    }
                    )
                }
                preloadScene(e) {
                    i(e.bundle, t => {
                        t.preloadScene(e.scene, (t, o, i) => {
                            var n;
                            null === (n = null == e ? void 0 : e.onProgress) || void 0 === n || n.call(e, t, o, i)
                        }
                            , t => {
                                var o;
                                if (t)
                                    console.log(t);
                                else
                                    try {
                                        null === (o = null == e ? void 0 : e.onComplete) || void 0 === o || o.call(e)
                                    } catch (i) { }
                            }
                        )
                    }
                    )
                }
                load(e) {
                    i(e.bundle, t => {
                        t.load(e.path, e.type, (t, o) => {
                            /*if (t)
                                return console.log("path:", e.path),
                                    void console.log(t);*/
                            console.log(e.path + " path va type " + e.type)
                            try {
                                e.type == cc.SpriteFrame && (o.addRef(),
                                    this.res.set(o._uuid, o)),
                                    e.onComplete(o)
                            } catch (i) { }
                        }
                        )
                    }
                    )
                }
                loadDir(e) {
                    i(e.bundle, t => {
                        t.loadDir(e.path, e.type, (t, o) => {
                            if (t)
                                console.log(t);
                            else
                                try {
                                    e.type == cc.SpriteFrame && o.forEach(e => {
                                        e.addRef(),
                                            this.res.set(e._uuid, e)
                                    }
                                    ),
                                        e.onComplete(o)
                                } catch (i) { }
                        }
                        )
                    }
                    )
                }
                loadScene(e) {
                    i(e.bundle, t => {
                        t.loadScene(e.scene, (t, o) => {
                            t ? console.log(t) : cc.director.runScene(o, null == e ? void 0 : e.onBeforeLoadScene, null == e ? void 0 : e.onLaunched)
                        }
                        )
                    }
                    )
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MConfig: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9d7baxkpX9Hgav/GR7GxW7H", "MConfig"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MConfig = void 0;
        const i = e("../Interface/IPurchase")
            , n = e("./MBundle")
            , a = ["AIAction", "AIAttribute", "BlindBoxPrize", "ChapterReward", "MothersDay", "MothersDayAIAttribute", "Config", "I18n", "IfAIAttribute", "Pass", "SignIn", "StoreGoods", "Strategy", "ExchangeCode", "Tower", "AppProxyConfig", "SummerFun"];
        class s {
            constructor() {
                this.DefaultGemstone = 300,
                    this.FreeGemstone = 100,
                    this.DefaultCoin = 3e3,
                    this.FreeCoin = 500,
                    this.DefaultStrength = 30,
                    this.FreeStrength = 15,
                    this.FreeStrengthAdds = [25, 50, 75, 100],
                    this.MaxStrength = 30,
                    this.OutRatio = {
                        A: .005,
                        Line1: 1,
                        Line2: .65,
                        Line3: .45
                    },
                    this.BtnDelayShow = 2,
                    this.SwitchTrialSkill = 1,
                    this.BlackCities = ["\u5e7f\u5dde", "\u4e1c\u839e", "\u6df1\u5733"],
                    this.NormalKeyChance = 10,
                    this.RareKeyChance = 80,
                    this.FreeRareBoxCount = 1,
                    this.DefaultBlindBoxKey = 3,
                    this.NormalBoxRewards = [{
                        id: 10005,
                        amount: 1e3
                    }, {
                        id: 10004,
                        amount: 80
                    }, {
                        id: 10006,
                        amount: 3
                    }, {
                        id: 10002,
                        amount: 1
                    }, {
                        id: 10005,
                        amount: 1e3
                    }, {
                        id: 10004,
                        amount: 80
                    }],
                    this.RareBoxRewards = [{
                        id: 10005,
                        amount: 1500
                    }, {
                        id: 10004,
                        amount: 100
                    }, {
                        id: 10006,
                        amount: 4
                    }, {
                        id: 10002,
                        amount: 1
                    }, {
                        id: 10005,
                        amount: 1500
                    }, {
                        id: 10004,
                        amount: 100
                    }],
                    this.EnNormalBoxRewards = [{
                        id: 10005,
                        amount: 1e3
                    }, {
                        id: 10004,
                        amount: 80
                    }, {
                        id: 10006,
                        amount: 3
                    }, {
                        id: 10002,
                        amount: 1
                    }, {
                        id: 10005,
                        amount: 1e3
                    }, {
                        id: 10004,
                        amount: 80
                    }],
                    this.EnRareBoxRewards = [{
                        id: 10005,
                        amount: 1500
                    }, {
                        id: 10004,
                        amount: 100
                    }, {
                        id: 10006,
                        amount: 4
                    }, {
                        id: 10002,
                        amount: 1
                    }, {
                        id: 10005,
                        amount: 1500
                    }, {
                        id: 10004,
                        amount: 100
                    }],
                    this.SwitchGameBanner = 0,
                    this.BannerValidTimes = 9999,
                    this.CustomAd = {
                        HallR: 0,
                        FreeStrengthR: 0,
                        FreeCoinR: 0,
                        BattleR: 0,
                        BattleL: 0,
                        PauseR: 0,
                        OverR: 0,
                        OverBoxR: 0
                    },
                    this.CustomAdRefreshRatio = 200,
                    this.NewPlayerItlAdPd = 300,
                    this.OldPlayerItlAdPd = 0,
                    this.NewPlayerItlAdRt = 90,
                    this.OldPlayerItlAdRt = 60,
                    this.SwitchAutoMistouch = 1,
                    this.MaxAutoMistouch = 9,
                    this.AutoMistouchRatio = 3,
                    this.NewPlayerNAdPd = 30,
                    this.OldPlayerNAdPd = 20,
                    this.FirstCloseShowNavigateAd = 1,
                    this.GoLookSideDelayShow = 2,
                    this.ReportNavigateAdRatio = 3,
                    this.SwitchInterstitialAd = 1,
                    this.SwitchAppBoxAd = 1,
                    this.FreeSignInCount = 1,
                    this.UnlockIfModelLevel = 25,
                    this.ContinueWinAddShortcut = 5,
                    this.ContinueCloseDontShow = 3,
                    this.KwaiHostWhiteList = [],
                    this.ByteDanceHostWhiteList = [],
                    this.MineTowerFunc = 0,
                    this.SwitchVideoToNavigate = 0,
                    this.NoFullScreenVideoAdLevel = 3,
                    this.SwitchLevelFullScreenVideoAd = 0,
                    this.FullScreenVideoAdInterval = 0,
                    this.LanchPlayVideo = 0,
                    this.PlayTimeShowSignIn = 3
            }
        }
        class r {
        }
        class l {
        }
        class c {
            constructor() {
                this.CampColor = new Map,
                    this.CityLevelColor = new Map,
                    this.TrialSkillColor = new Map,
                    this.ChapterMap = new Map,
                    this.LoopChapterSize = 30,
                    this.HalloweenMaxLevel = 40,
                    this.ThanksgivingMaxLevel = 30,
                    this.ChristmasMaxLevel = 40,
                    this.NewYearMaxLevel = 40,
                    this.MothersDayMaxLevel = 40,
                    this.initColor()
            }
            initColor() {
                this.CampColor.set(1, "#3781f1"),
                    this.CampColor.set(2, "#ea4143"),
                    this.CampColor.set(3, "#63d71d"),
                    this.CampColor.set(4, "#ffd117"),
                    this.CityLevelColor.set(0, "#000000"),
                    this.CityLevelColor.set(1, "#3b7ac1"),
                    this.CityLevelColor.set(2, "#dd4749"),
                    this.CityLevelColor.set(3, "#158531"),
                    this.CityLevelColor.set(4, "#ec8411"),
                    this.TrialSkillColor.set(1, "#3a5e59"),
                    this.TrialSkillColor.set(2, "#226800"),
                    this.TrialSkillColor.set(3, "#25376b"),
                    this.TrialSkillColor.set(4, "#731749"),
                    this.TrialSkillColor.set(5, "#a54815"),
                    this.ChapterMap.set(1, [1, 40]),
                    this.ChapterMap.set(2, [41, 70]),
                    this.ChapterMap.set(3, [71, 100]),
                    this.ChapterMap.set(4, [101, 130]),
                    this.ChapterMap.set(5, [131, 160]),
                    this.ChapterMap.set(6, [161, 190]),
                    this.ChapterMap.set(7, [191, 220]),
                    this.ChapterMap.set(8, [221, 250]),
                    this.ChapterMap.set(9, [251, 280]),
                    this.ChapterMap.set(10, [281, 310]),
                    this.ChapterMap.set(11, [311, 340]),
                    this.ChapterMap.set(12, [341, 370])
            }
        }
        class d {
            constructor() {
                this.Inited = !1,
                    this.RsvDiamond = {
                        DailyFreeDiamondTimes: 5,
                        Reward: 10
                    },
                    this.SkuIds = ["diamond_100", "diamond_220", "diamond_1400", "diamond_3600", "diamond_7400", "timelimit", "firstimpulse", "permanent_1", "permanent_2", "permanent_3", "newtimelimit", "newfirstimpulse", "newpermanent_1", "newpermanent_2", "newpermanent_3", "overbox3x", "VideoToPay"],
                    this.RewardVideoAdRatio = 0,
                    this.NewPlayerFsvAdPd = 300,
                    this.OldPlayerFsvAdPd = 0,
                    this.FsvAdRatio = 90,
                    this.AfterVideoAdFsvRatio = 60,
                    this.SwitchPTBXFsvAd = 1,
                    this.SwitchFHSYFsvAd = 1
            }
        }
        class u {
            constructor() {
                this.inited = !1,
                    this.no_ad = new i.IPurchaseGoods,
                    this.newfirstimpulse = new i.IPurchaseGoods,
                    this.newtimelimit = new i.IPurchaseGoods,
                    this.newpermanent_1 = new i.IPurchaseGoods,
                    this.newpermanent_2 = new i.IPurchaseGoods,
                    this.newpermanent_3 = new i.IPurchaseGoods,
                    this.overbox3x = new i.IPurchaseGoods
            }
        }
        o.MConfig = new class {
            constructor() {
                this.Mgct = "1",
                    this.Transsion = !1,
                    this.Hago = !1,
                    this.Region = "inland",
                    this.Language = "",
                    this.KwaiHost = "",
                    this.appName = "",
                    this.Debug = !1,
                    this.LocalConfig = new c,
                    this.Config = new s,
                    this.Activity = new r,
                    this.Strategy = new l,
                    this.AppProxyConfig = new d,
                    this.PurchaseGoods = new u,
                    this.TableI18n = new Map,
                    this.TableAIAttribute = new Map,
                    this.TableIfAIAttribute = new Map,
                    this.TableAIAction = new Map,
                    this.TableSkill = new Map,
                    this.TableHeroGrow = new Map,
                    this.TableBlindBoxPrize = new Map,
                    this.TableItem = new Map,
                    this.TableSignIn = new Map,
                    this.TableLevelTask = new Map,
                    this.TableTask = new Map,
                    this.TableChapterReward = new Map,
                    this.TableStoreGoods = new Map,
                    this.TablePurchaseDiamond = new Map,
                    this.TableActivityAIAttribute = new Map,
                    this.TablePass = new Map,
                    this.TableExchangeCode = new Map,
                    this.TableTower = new Map,
                    this.TableNewbieTask = new Map,
                    this.BlackCity = !0
            }
            loadConfig(e) {
                GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5]) ? this.loadLocalConfig(e) : "inland" == this.Region ? "cn" != this.Language || this.Hago ? this.loadLocalConfig(e) : (this.loadI18nConfig(),
                    this.loadServerConfig(e)) : "overseas" == this.Region && this.loadLocalConfig(e)
            }
            loadServerConfig(e) {
                GA.request({
                    url: Urls.url_reqConfig,
                    method: "POST",
                    data: [{
                        key: "Config",
                        version: 4
                    }, {
                        key: "AIAttribute",
                        version: 6
                    }, {
                        key: "AIAction",
                        version: 2
                    }, {
                        key: "Skill",
                        version: 8
                    }, {
                        key: "HeroGrow",
                        version: 8
                    }, {
                        key: "BlindBoxPrize",
                        version: 2
                    }, {
                        key: "Item",
                        version: 6
                    }, {
                        key: "SignIn",
                        version: 3
                    }, {
                        key: "LevelTask",
                        version: 2
                    }, {
                        key: "Task",
                        version: 1
                    }, {
                        key: "ChapterReward",
                        version: 2
                    }, {
                        key: "IfAIAttribute",
                        version: 2
                    }, {
                        key: "Strategy",
                        version: 1
                    }, {
                        key: "Pass",
                        version: 2
                    }, {
                        key: "ExchangeCode",
                        version: 1
                    }, {
                        key: "Tower",
                        version: 1
                    }, {
                        key: "NewbieTask",
                        version: 1
                    }, {
                        key: "MothersDay",
                        version: 1
                    }, {
                        key: "MothersDayAIAttribute",
                        version: 1
                    }, {
                        key: "SummerFun",
                        version: 1
                    }],
                    success: t => {
                        console.log(t),
                            0 == t.data.code ? (this.analysisConfig(t.data.data.Config, this.Config),
                                this.analysisTable(t.data.data.AIAttribute, this.TableAIAttribute),
                                this.analysisTable(t.data.data.IfAIAttribute, this.TableIfAIAttribute),
                                this.analysisTable(t.data.data.AIAction, this.TableAIAction),
                                this.analysisTable(t.data.data.Skill, this.TableSkill),
                                this.analysisTable(t.data.data.HeroGrow, this.TableHeroGrow),
                                this.analysisTable(t.data.data.BlindBoxPrize, this.TableBlindBoxPrize),
                                this.analysisTable(t.data.data.Item, this.TableItem),
                                this.analysisTable(t.data.data.SignIn, this.TableSignIn),
                                this.analysisTable(t.data.data.LevelTask, this.TableLevelTask),
                                this.analysisTable(t.data.data.Task, this.TableTask),
                                this.analysisTable(t.data.data.ChapterReward, this.TableChapterReward),
                                this.analysisConfig(t.data.data.Strategy, this.Strategy),
                                this.analysisTable(t.data.data.Pass, this.TablePass),
                                this.analysisTable(t.data.data.ExchangeCode, this.TableExchangeCode),
                                this.analysisTable(t.data.data.Tower, this.TableTower),
                                this.analysisTable(t.data.data.NewbieTask, this.TableNewbieTask),
                                this.analysisConfig(t.data.data.SummerFun, this.Activity),
                                this.analysisTable(t.data.data.MothersDayAIAttribute, this.TableActivityAIAttribute),
                                console.log("\u670d\u52a1\u7aef\u914d\u7f6e\u521d\u59cb\u5316\u5b8c\u6210\uff01"),
                                null == e || e()) : (console.log("\u670d\u52a1\u7aef\u914d\u7f6e\u52a0\u8f7d\u5931\u8d25,\u5f00\u59cb\u8bfb\u53d6\u672c\u5730\u914d\u7f6e\uff01"),
                                    this.loadLocalConfig(e))
                    }
                    ,
                    fail: t => {
                        console.error(t),
                            this.loadLocalConfig(e)
                    }
                })
            }
            loadLocalConfig(e) {
                let t = "";
                t = "cn" == this.Language ? "cn" : "tc" == this.Language ? "tc" : "en" == this.Language ? "en" : "pt" == this.Language ? "pt" : "id" == this.Language ? "id" : "vi" == this.Language ? "vi" : "en",
                    n.MBundle.loadDir({
                        bundle: n.EBundle.Config,
                        path: t,
                        type: cc.TextAsset,
                        onComplete: t => {
                            t.forEach(e => {
                                switch (e.name) {
                                    case "Skill":
                                        this.analysisTable(e.text, this.TableSkill);
                                        break;
                                    case "HeroGrow":
                                        this.analysisTable(e.text, this.TableHeroGrow);
                                        break;
                                    case "Item":
                                        this.analysisTable(e.text, this.TableItem);
                                        break;
                                    case "LevelTask":
                                        this.analysisTable(e.text, this.TableLevelTask);
                                        break;
                                    case "Task":
                                        this.analysisTable(e.text, this.TableTask);
                                        break;
                                    case "NewbieTask":
                                        this.analysisTable(e.text, this.TableNewbieTask)
                                }
                            }
                            ),
                                o(0, a, e)
                        }
                    });
                let o = (e, t, i) => {
                    e < t.length ? n.MBundle.load({
                        bundle: n.EBundle.Config,
                        path: t[e],
                        type: cc.TextAsset,
                        onComplete: n => {
                            switch (console.log(n),
                            n.name) {
                                case "Config":
                                    this.analysisConfig(n.text, this.Config);
                                    break;
                                case "AIAction":
                                    this.analysisTable(n.text, this.TableAIAction);
                                    break;
                                case "AIAttribute":
                                    this.analysisTable(n.text, this.TableAIAttribute);
                                    break;
                                case "IfAIAttribute":
                                    this.analysisTable(n.text, this.TableIfAIAttribute);
                                    break;
                                case "BlindBoxPrize":
                                    this.analysisTable(n.text, this.TableBlindBoxPrize);
                                    break;
                                case "SignIn":
                                    this.analysisTable(n.text, this.TableSignIn);
                                    break;
                                case "ChapterReward":
                                    this.analysisTable(n.text, this.TableChapterReward);
                                    break;
                                case "StoreGoods":
                                    this.analysisTable(n.text, this.TableStoreGoods);
                                    break;
                                case "Strategy":
                                    this.analysisConfig(n.text, this.Strategy);
                                    break;
                                case "Pass":
                                    this.analysisTable(n.text, this.TablePass);
                                    break;
                                case "I18n":
                                    this.analysisTable(n.text, this.TableI18n);
                                    break;
                                case "ExchangeCode":
                                    this.analysisTable(n.text, this.TableExchangeCode);
                                    break;
                                case "Tower":
                                    this.analysisTable(n.text, this.TableTower);
                                    break;
                                case "AppProxyConfig":
                                    (this.Transsion || this.Hago || "android_mgct_abroad_weiyou" == GA.Info.appId) && this.analysisConfig(n.text, this.AppProxyConfig);
                                    break;
                                case "SummerFun":
                                    this.analysisConfig(n.text, this.Activity);
                                    break;
                                case "MothersDayAIAttribute":
                                    this.analysisTable(n.text, this.TableActivityAIAttribute)
                            }
                            o(++e, t, i)
                        }
                    }) : null == i || i()
                }
            }
            loadI18nConfig() {
                n.MBundle.load({
                    bundle: n.EBundle.Config,
                    path: "I18n",
                    type: cc.TextAsset,
                    onComplete: e => {
                        this.analysisTable(e.text, this.TableI18n)
                    }
                })
            }
            analysisTable(e, t) {
                "" != e && null != e && (this.Papaparse.parse(e, {
                    dynamicTyping: !0,
                    header: !0
                }).data.forEach(e => {
                    if ((null == e ? void 0 : e.id) && "number" == typeof e.id) {
                        let i = {};
                        for (const t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t) && t)
                                switch (typeof e[t]) {
                                    case "number":
                                    case "boolean":
                                        i[t] = e[t];
                                        break;
                                    default:
                                        try {
                                            i[t] = JSON.parse(e[t])
                                        } catch (o) {
                                            i[t] = e[t]
                                        }
                                }
                        t.set(e.id, i)
                    }
                }
                ),
                    console.log("target:", t))
            }
            analysisConfig(e, t) {
                if ("" == e || null == e)
                    return;
                let o = this.Papaparse.parse(e, {
                    dynamicTyping: !0,
                    header: !0
                }).data[1];
                for (const n in o)
                    if (Object.prototype.hasOwnProperty.call(o, n) && n)
                        switch (typeof o[n]) {
                            case "number":
                            case "boolean":
                                t[n] = o[n];
                                break;
                            default:
                                try {
                                    t[n] = JSON.parse(o[n])
                                } catch (i) {
                                    t[n] = o[n]
                                }
                        }
                console.log("config:", JSON.stringify(t))
            }
            checkIP() {
                GA.request({
                    url: Urls.url_getCity,
                    method: "GET",
                    success: e => {
                        if (console.log("ip:", e.data.data),
                            this.BlackCity = !1,
                            0 == e.data.code) {
                            let t = JSON.stringify(e.data.data);
                            this.Config.BlackCities.forEach(e => {
                                -1 != t.indexOf(e) && (this.BlackCity = !0,
                                    console.log("\u654f\u611fCT"))
                            }
                            )
                        } else
                            this.BlackCity = !0,
                                console.log("code\u4e0d\u4e3a0");
                        this.BlackCity || console.log("\u4e0d\u654f\u611fCT")
                    }
                })
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Interface/IPurchase": "IPurchase",
        "./MBundle": "MBundle"
    }],
    MData: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2c908KoqjpJVaTLv4oHQeqv", "MData"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MData = void 0;
        const i = e("./MModel");
        o.MData = new class {
            syncData(e) {
                var t, o, n, a, s, r, l;
                let c = !0;
                try {
                    let u = e.data
                        , h = ""
                        , f = "";
                    if (h = GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.Hago, GA.Platform.WeiYouH5]) ? Utils.getItem("GameData") : GA.PA.getStorageSync("GameData"),
                        e.forceReadServer)
                        f = e.data,
                            console.log("\u5f3a\u5236\u8bfb\u53d6\u3010\u670d\u52a1\u5668\u3011\u6570\u636e");
                    else if (e.forceReadLocal)
                        f = h,
                            console.log("\u5f3a\u5236\u8bfb\u53d6\u3010\u672c\u5730\u3011\u6570\u636e");
                    else if (null != u && "" != u && null != h && "" != h) {
                        let e = JSON.parse(u)
                            , t = JSON.parse(h);
                        console.log(`\u670d\u52a1\u5668\u9000\u51fa\u65f6\u95f4\uff1a ${new Date(e.UserData.quitTime).toLocaleString()} \u672c\u5730\u9000\u51fa\u65f6\u95f4\uff1a ${new Date(t.UserData.quitTime).toLocaleString()}`),
                            e.UserData.quitTime >= t.UserData.quitTime ? (f = u,
                                console.log("(\u672c\u5730\u3001\u670d\u52a1\u5668)\u7528\u6237\u6570\u636e\u90fd\u5b58\u5728 \u8bfb\u53d6\u3010\u670d\u52a1\u5668\u3011\u6570\u636e")) : (f = h,
                                    console.log("(\u672c\u5730\u3001\u670d\u52a1\u5668)\u7528\u6237\u6570\u636e\u90fd\u5b58\u5728 \u8bfb\u53d6\u3010\u672c\u5730\u3011\u6570\u636e"))
                    } else
                        null != e.data && "" != e.data ? (f = e.data,
                            console.log("\u672c\u5730\u6570\u636e\u4e0d\u5b58\u5728 \u8bfb\u53d6\u3010\u670d\u52a1\u5668\u3011\u6570\u636e")) : null != h && "" != h ? (f = h,
                                console.log("\u670d\u52a1\u5668\u6570\u636e\u4e0d\u5b58\u5728 \u8bfb\u53d6\u3010\u672c\u5730\u3011\u6570\u636e")) : console.log("\u3010\u670d\u52a1\u5668\u3011\u3010\u672c\u5730\u3011\u6570\u636e\u5747\u4e0d\u5b58\u5728");
                    if (null != f && "" != f) {
                        c = !1,
                            console.log("\u8001\u73a9\u5bb6");
                        let e = JSON.parse(f);
                        for (const n in e)
                            null === (o = null === (t = i.MModel[n]) || void 0 === t ? void 0 : t.syncData) || void 0 === o || o.call(t, e[n])
                    } else
                        c = !0,
                            console.log("\u65b0\u73a9\u5bb6"),
                            GA.isPlatform([GA.Platform.WeChat, GA.Platform.ByteDance, GA.Platform.OPPO]) && GA.AdTracking.reportKeyAction(GA.AdTracking.Action.Active)
                } catch (d) {
                    console.log(d)
                } finally {
                    let t = GA.isToday(i.MModel.UserData.loginTime);
                    console.log("isToday:", t);
                    for (const e in i.MModel)
                        null === (a = null === (n = i.MModel[e]) || void 0 === n ? void 0 : n.syncConfig) || void 0 === a || a.call(n, {
                            isToday: t,
                            isNewUser: c
                        });
                    for (const e in i.MModel)
                        null === (r = null === (s = i.MModel[e]) || void 0 === s ? void 0 : s.afterSyncConfig1) || void 0 === r || r.call(s);
                    c && (i.MModel.UserData.registTime = (new Date).getTime()),
                        GA.isToday(i.MModel.UserData.registTime) ? i.MModel.UserData.dayNewUser = !0 : i.MModel.UserData.dayNewUser = !1,
                        1 == Utils.intervalDay(i.MModel.UserData.loginTime) ? i.MModel.Task.doTask(14) : i.MModel.Task.doTask(14, 1),
                        t || i.MModel.NewbieTask.doTask(1),
                        i.MModel.UserData.loginTime = (new Date).getTime(),
                        GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5]) ? cc.game.on(cc.game.EVENT_HIDE, () => {
                            this.save()
                        }
                        ) : GA.PA.onHide(() => {
                            this.save()
                        }
                        ),
                        null === (l = e.callback) || void 0 === l || l.call(e)
                }
            }
            save() {
                i.MModel.UserData.newUser = !1,
                    i.MModel.UserData.quitTime = (new Date).getTime();
                let e = i.MModel.getData();
                try {
                    this.upload(JSON.stringify(e))
                } catch (t) {
                    console.log(t)
                } finally {
                    GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.Hago, GA.Platform.WeiYouH5]) ? Utils.setItem("GameData", JSON.stringify(e)) : GA.PA.setStorageSync("GameData", JSON.stringify(e))
                }
            }
            upload(e, t) {
                GA.request({
                    url: Urls.url_reqSaveUser,
                    data: {
                        userId: GA.Info.uid,
                        data: e,
                        guanqia: i.MModel.Battle.level
                    },
                    method: "POST",
                    success: e => {
                        console.log("upload data ", e),
                            0 == e.data.code && (null == t || t())
                    }
                })
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MModel": "MModel"
    }],
    MDialog: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9e44e6aoPtEJbVLRbNN/CwA", "MDialog"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MDialog = void 0;
        const i = e("../Base/BaseDialog")
            , n = e("../Temporary")
            , a = e("./MBundle")
            , s = e("./MConfig")
            , r = e("./MEvent");
        o.MDialog = new class {
            constructor() {
                this.rootNode = null,
                    this.dialogMap = new Map
            }
            showDialog(e, t) {
                if ((e == a.EDialog.Permanent || e == a.EDialog.TimeLimit || e == a.EDialog.FirstImpulse) && !s.MConfig.PurchaseGoods.inited)
                    return n.Temporary.GotProductDetailCallBack = () => {
                        console.log("GotProductDetailCallBack\uff01"),
                            this.showDialog(e, t)
                    }
                        ,
                        void (null === AppProxy || void 0 === AppProxy || AppProxy.getProductDetail(s.MConfig.AppProxyConfig.SkuIds));
                if (GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5, GA.Platform.Kwaigame, GA.Platform.Android, GA.Platform.iOS]) || GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO) {
                    let e = cc.Canvas.instance.node.getChildByName("loading");
                    if (e) {
                        let t = e.getChildByName("tip");
                        "cn" == s.MConfig.Language ? t.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u7b49..." : "tc" == s.MConfig.Language ? t.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f09\uff0c\u8acb\u7a0d\u7b49..." : "pt" == s.MConfig.Language ? t.getComponent(cc.Label).string = "Carregando, por favor espere..." : "vi" == s.MConfig.Language ? t.getComponent(cc.Label).string = "N\u1ea1p \u0111\u1ea1n, \u0111\u1ee3i \u0111\xe3..." : "id" == s.MConfig.Language ? t.getComponent(cc.Label).string = "Memuatkan, tolong tunggu..." : t.getComponent(cc.Label).string = "loading...",
                            e.active = !0
                    }
                } else
                    GA.PA.showLoading({
                        title: "loading...",
                        mask: !0
                    });
                let o = a.EBundle.Dialog;
                e != a.EDialog.TowerOver && e != a.EDialog.TowerPause || (o = a.EBundle.MineTower),
                    a.MBundle.load({
                        bundle: o,
                        path: e,
                        type: cc.Prefab,
                        onComplete: o => {
                            if (GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5, GA.Platform.Kwaigame, GA.Platform.Android, GA.Platform.iOS]) || GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO) {
                                let e = cc.Canvas.instance.node.getChildByName("loading");
                                e && (e.active = !1)
                            } else
                                GA.PA.hideLoading({});
                            let n = Utils.genUid()
                                , s = cc.instantiate(o);
                            this.dialogMap.set(e, s),
                                s.parent = this.getDialogNode(e),
                                s.parent.parent = this.getRootNode();
                            let r = s.getComponent(i.default);
                            switch (r.init(e, n, t),
                            r.showDialog(),
                            e) {
                                case a.EDialog.FreeStrength:
                                case a.EDialog.FreeCoin:
                                case a.EDialog.FreeGemstone:
                                case a.EDialog.Pause:
                                case a.EDialog.Guide1:
                                case a.EDialog.Guide2:
                                case a.EDialog.Guide3:
                                case a.EDialog.TrialSkill:
                                case a.EDialog.SignIn:
                                case a.EDialog.BlindBoxPrize:
                                case a.EDialog.LevelTask:
                                case a.EDialog.IfPause:
                                case a.EDialog.LevelSelect:
                                case a.EDialog.Task:
                                case a.EDialog.AddShortcut:
                                case a.EDialog.Store:
                                case a.EDialog.Setting:
                                case a.EDialog.Permanent:
                                case a.EDialog.FirstImpulse:
                                case a.EDialog.TimeLimit:
                                case a.EDialog.Clause:
                                case a.EDialog.Halloween:
                                case a.EDialog.ActivityExplain:
                                case a.EDialog.Rank:
                                case a.EDialog.Thanksgiving:
                                case a.EDialog.Christmas:
                                case a.EDialog.NewYear:
                                case a.EDialog.TowerOver:
                                case a.EDialog.TowerPause:
                                case a.EDialog.NewbieTask:
                                case a.EDialog.MothersDay:
                                case a.EDialog.DeleteUser:
                                    cc.tween(s).set({
                                        scale: .72
                                    }).to(.3, {
                                        scale: 1
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start()
                            }
                        }
                    })
            }
            destroyDialog(e) {
                var t, o, i;
                this.dialogMap.has(e) && this.dialogMap.get(e).isValid && (null === (i = null === (o = null === (t = this.dialogMap.get(e)) || void 0 === t ? void 0 : t.parent) || void 0 === o ? void 0 : o.destroy) || void 0 === i || i.call(o),
                    this.dialogMap.delete(e)),
                    r.MEvent.emit(r.EMsg.CloseDialog, e)
            }
            destroyAllDialog() {
                var e;
                GA.Info.isPreview || (GA.hideBanner(),
                    GA.hideNativeAd()),
                    this.dialogMap.clear(),
                    null === (e = this.rootNode) || void 0 === e || e.destroyAllChildren()
            }
            getRootNode() {
                return this.rootNode || (this.rootNode = new cc.Node("rootNode"),
                    this.rootNode.zIndex = cc.macro.MAX_ZINDEX - 10,
                    this.rootNode.parent = cc.Canvas.instance.node,
                    this.rootNode.setPosition(cc.v2()),
                    this.rootNode.setContentSize(cc.winSize)),
                    this.rootNode
            }
            getDialogNode(e) {
                let t = new cc.Node("dialog");
                t.setContentSize(cc.winSize);
                let o = new cc.Node("shadow");
                return o.parent = t,
                    o.color = cc.Color.BLACK,
                    e == a.EDialog.BlindBoxPrize ? o.opacity = 234 : o.opacity = 222,
                    a.MBundle.load({
                        bundle: a.EBundle.Common,
                        path: "res/texture/bg",
                        type: cc.SpriteFrame,
                        onComplete: e => {
                            let t = o.addComponent(cc.Sprite);
                            t.spriteFrame = e,
                                t.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                                o.setContentSize(cc.winSize)
                        }
                    }),
                    t.addComponent(cc.BlockInputEvents),
                    t
            }
            clear() {
                this.rootNode = null
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseDialog": "BaseDialog",
        "../Temporary": "Temporary",
        "./MBundle": "MBundle",
        "./MConfig": "MConfig",
        "./MEvent": "MEvent"
    }],
    MEvent: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4c84b9e3kFF0YT75/6exOaa", "MEvent"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MEvent = o.EmsgNavigate = o.EMsg = void 0,
            function (e) {
                e.Goole_SIGN_IN = "Goole_SIGN_IN",
                    e.Goole_SIGN_OUT = "Goole_SIGN_OUT",
                    e.StrengthEffect = "StrengthEffect",
                    e.CoinEffect = "CoinEffect",
                    e.GemstonEffect = "GemstonEffect",
                    e.DiamondEffect = "DiamondEffect",
                    e.CityUplevel = "CityUplevel",
                    e.CityReducelevel = "CityReducelevel",
                    e.CutConnect = "CutConnect",
                    e.CutLine = "CutLine",
                    e.RemoveConnect = "RemoveConnect",
                    e.ConnectCity = "ConnectCity",
                    e.ConnectNode = "ConnectNode",
                    e.CutConnectNode = "CutConnectNode",
                    e.Connected = "Connected",
                    e.EnterCity = "EnterCity",
                    e.LoadLevel = "LoadLevel",
                    e.ClearLevel = "ClearLevel",
                    e.Soldier = "Soldier",
                    e.UpdateGamut = "UpdateGamut",
                    e.UpdateStrength = "UpdateStrength",
                    e.UpdateCoin = "UpdateCoin",
                    e.UpdateGemstone = "UpdateGemstone",
                    e.UpdateDiamond = "UpdateDiamond",
                    e.UpdateKey = "UpdateKey",
                    e.UpdateLuckyValue = "UpdateLuckyValue",
                    e.UpdateSurplusPrize = "UpdateSurplusPrize",
                    e.SpeedUp = "SpeedUp",
                    e.SpeedNormal = "SpeedNormal",
                    e.ClearBattleNode = "ClearBattleNode",
                    e.ClearBattleData = "ClearBattleData",
                    e.CloseDialog = "CloseDialog",
                    e.GameOver = "GameOver",
                    e.ShowJumpLevel = "ShowJumpLevel",
                    e.HideJumpLevel = "HideJumpLevel",
                    e.ShowCustomAdL = "ShowCustomAdL",
                    e.HideCustomAdL = "HideCustomAdL",
                    e.ShowCustomAdR = "ShowCustomAdR",
                    e.HideCustomAdR = "HideCustomAdR",
                    e.ShowGameBanner = "ShowGameBanner",
                    e.SelectSkill = "SelectSkill",
                    e.CancelSkill = "CancelSkill",
                    e.UsedSkill = "UsedSkill",
                    e.LoadSkill = "LoadSkill",
                    e.ClearSkill = "ClearSkill",
                    e.HeroCardReset = "HeroCardReset",
                    e.ReplaceHero = "ReplaceHero",
                    e.ClickHero = "ClickHero",
                    e.UnlockHero = "UnlockHero",
                    e.UplevelHero = "UplevelHero",
                    e.ResetBlindBoxDisplay = "ResetBlindBoxDisplay",
                    e.DoSkill6009 = "DoSkill6009",
                    e.DoSkill6011 = "DoSkill6011",
                    e.DoSkill6104 = "DoSkill6104",
                    e.DoSkill6105 = "DoSkill6105",
                    e.DoSkill6110 = "DoSkill6110",
                    e.DoSkill6111 = "DoSkill6111",
                    e.DoSkill6112 = "DoSkill6112",
                    e.DoSkill6113 = "DoSkill6113",
                    e.DoSkill6115 = "DoSkill6115",
                    e.HeroShout = "HeroShout",
                    e.ShowCityInCircle = "ShowCityInCircle",
                    e.HideCityInCircle = "HideCityInCircle",
                    e.ShowBlindBoxGuide = "ShowBlindBoxGuide",
                    e.ShowUplevelGuide = "showUplevelGuide",
                    e.GameRecorderSuccess = "GameRecorderSuccess",
                    e.GameRecorderFail = "GameRecorderFail",
                    e.ChangeCityType = "ChangeCityType",
                    e.ChangeCityCamp = "ChangeCityCamp",
                    e.UplevelCity = "UplevelCity",
                    e.SignIn = "SignIn",
                    e.ScreenShot = "ScreenShot",
                    e.DoTask = "DoTask",
                    e.TaskChange = "TaskChange",
                    e.TryPlayGame = "TryPlayGame",
                    e.RefreshHallScene = "RefreshHallScene",
                    e.NoAd = "NoAd",
                    e.GetNoAdInfo = "GetNoAdInfo",
                    e.GetFirstImpulseReward = "getFirstImpulseReward",
                    e.GetTimeLimitReward = "GetTimeLimitReward",
                    e.ReceivedActivityReward = "ReceivedActivityReward",
                    e.GetOverBox3x = "GetOverBox3x",
                    e.SelectHeroSkin = "SelectHeroSkin",
                    e.UseHeroSkin = "UseHeroSkin",
                    e.ReceivePassReward = "ReceivePassReward",
                    e.LoadTowerLevel = "LoadTowerLevel",
                    e.UpdateNewbieTaskBox = "UpdateNewbieTaskBox",
                    e.ReceiveNewbieTask = "ReceiveNewbieTask",
                    e.DoNewbieTask = "DoNewbieTask",
                    e.ReceiveNewbieTaskBox = "ReceiveNewbieTaskBox",
                    e.ExtractPrize = "ExtractPrize",
                    e.VideoToNavigate = "VideoToNavigate",
                    e.AddDesktopSuccess = "AddDesktopSuccess"
            }(o.EMsg || (o.EMsg = {})),
            function (e) {
                e.Extra = "Navigate_Extra",
                    e.GoLook = "Navigate_GoLook",
                    e.Center = "Navigate_Center",
                    e.Error = "Error"
            }(o.EmsgNavigate || (o.EmsgNavigate = {})),
            o.MEvent = new class {
                emit(e, t, o, i, n, a) {
                    "string" == typeof e ? cc.systemEvent.emit(e, t, o, i, n, a) : e.forEach(e => {
                        cc.systemEvent.emit(e, t, o, i, n, a)
                    }
                    )
                }
                on(e, t, o, i) {
                    "string" == typeof e ? cc.systemEvent.on(e, t, o, i) : e.forEach(e => {
                        cc.systemEvent.on(e, t, o, i)
                    }
                    )
                }
                once(e, t, o) {
                    "string" == typeof e ? cc.systemEvent.once(e, t, o) : e.forEach(e => {
                        cc.systemEvent.once(e, t, o)
                    }
                    )
                }
                off(e, t, o) {
                    "string" == typeof e ? cc.systemEvent.off(e, t, o) : e.forEach(e => {
                        cc.systemEvent.off(e, t, o)
                    }
                    )
                }
                targetOff(e) {
                    cc.systemEvent.targetOff(e)
                }
                removeAll(e) {
                    cc.systemEvent.removeAll(e)
                }
                clear() {
                    cc.systemEvent.clear()
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MI18n: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d58ac6YwkhPKKdYnBnPWKHe", "MI18n"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MI18n = void 0;
        const i = e("./MConfig");
        o.MI18n = new class {
            showInfo(e, t) {
                var o, n, a;
                let s = i.MConfig.TableI18n.get(t);
                "cn" == i.MConfig.Language ? (e.string = null == s ? void 0 : s.cn,
                    e.fontSize = null !== (o = null == s ? void 0 : s.cnFontSize) && void 0 !== o ? o : e.fontSize) : "tc" == i.MConfig.Language ? (e.string = null == s ? void 0 : s.tc,
                        e.fontSize = null !== (n = null == s ? void 0 : s.tcFontSize) && void 0 !== n ? n : e.fontSize) : "pt" == i.MConfig.Language ? e.string = null == s ? void 0 : s.pt : "vi" == i.MConfig.Language ? e.string = null == s ? void 0 : s.vi : "id" == i.MConfig.Language ? e.string = null == s ? void 0 : s.in : (e.string = null == s ? void 0 : s.en,
                            e.fontSize = null !== (a = null == s ? void 0 : s.enFontSize) && void 0 !== a ? a : e.fontSize)
            }
            getInfo(e) {
                let t = i.MConfig.TableI18n.get(e);
                return "cn" == i.MConfig.Language ? null == t ? void 0 : t.cn : "tc" == i.MConfig.Language ? null == t ? void 0 : t.tc : "pt" == i.MConfig.Language ? null == t ? void 0 : t.pt : "vi" == i.MConfig.Language ? null == t ? void 0 : t.vi : "id" == i.MConfig.Language ? null == t ? void 0 : t.in : null == t ? void 0 : t.en
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MConfig": "MConfig"
    }],
    MIP: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a2b367YygVGjKSWrwRjNDs8", "MIP"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MIP = void 0;
        const i = e("./MEvent")
            , n = e("./MModel");
        o.MIP = new class {
            getRewardByGameItemId(e) {
                switch (e) {
                    case 1:
                        n.MModel.Gift.getFirstImpulseReward(),
                            n.MModel.Gift.firstImpulseComplete = !0,
                            i.MEvent.emit(i.EMsg.GetFirstImpulseReward);
                        break;
                    case 2:
                        n.MModel.Gift.getTimeLimitReward(),
                            n.MModel.Gift.timeLimitComplete = !0,
                            i.MEvent.emit(i.EMsg.GetTimeLimitReward);
                        break;
                    case 11:
                    case 12:
                    case 13:
                        n.MModel.Gift.getPermanentRewardByGameItemId(e)
                }
            }
            createTransaction(e) {
                GA.request({
                    url: Urls.url_createTransaction,
                    data: {
                        openid: GA.Info.openId,
                        gameItemId: e.gameItemId
                    },
                    method: "POST",
                    success: t => {
                        0 == t.data.code && e.callback(t.data.data)
                    }
                })
            }
            getPayResult(e) {
                let t = 0
                    , i = () => {
                        GA.request({
                            url: Urls.url_getPayResult,
                            data: {
                                openid: GA.Info.openId
                            },
                            method: "POST",
                            success: n => {
                                var a, s;
                                0 == n.data.code && (n.data.data.forEach(t => {
                                    console.log("\u672a\u7ed9\u9053\u5177\u7684\u8ba2\u5355:", t),
                                        e.receive && o.MIP.getRewardByGameItemId(t.gameItemId),
                                        o.MIP.confirmPurchase(t.orderId)
                                }
                                ),
                                    t++,
                                    console.log(`getPayResult...${t} ${(new Date).toLocaleString()}`),
                                    0 == (null === (s = null === (a = null == n ? void 0 : n.data) || void 0 === a ? void 0 : a.data) || void 0 === s ? void 0 : s.length) && t < e.amount && setTimeout(i, 1e3))
                            }
                        })
                    }
                    ;
                i()
            }
            confirmPurchase(e) {
                GA.request({
                    url: Urls.url_confirmPurchase,
                    data: {
                        openid: GA.Info.openId,
                        orderId: e
                    },
                    method: "POST",
                    success: t => {
                        0 == t.data.code && console.log(`confirmPurchase...${e}`)
                    }
                })
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MEvent": "MEvent",
        "./MModel": "MModel"
    }],
    MItem: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c366cmLf1NCyaXqKMf15Tl3", "MItem"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MItem = void 0;
        const i = e("./MConfig")
            , n = e("./MModel");
        o.MItem = new class {
            getItem(e, t) {
                if (!e)
                    return;
                let o = 0
                    , a = 0
                    , s = 0
                    , r = 0
                    , l = 0
                    , c = 0
                    , d = 0
                    , u = 0;
                if (e.forEach(e => {
                    10002 == e.id ? o += e.amount : 10003 == e.id ? a += e.amount : 10004 == e.id ? s += e.amount : 10005 == e.id ? r += e.amount : 10006 == e.id ? l += e.amount : 10007 == e.id ? c += e.amount : e.id >= 700101 && e.id < 8e5 ? d = e.id : e.id >= 7001 && e.id < 8e3 && (u = e.id)
                }
                ),
                    o > 0 && n.MModel.BlindBox.addKey(o * (null != t ? t : 1)),
                    a > 0 && n.MModel.Hero.addMushroom(a * (null != t ? t : 1)),
                    r > 0 && n.MModel.Account.addCoin(r * (null != t ? t : 1)),
                    s > 0 && n.MModel.Account.addGemstone(s * (null != t ? t : 1)),
                    l > 0 && n.MModel.Account.addStrength(l * (null != t ? t : 1)),
                    c > 0 && n.MModel.Account.addDiamond(c * (null != t ? t : 1)),
                    d > 0) {
                    let e = Math.floor(d / 100);
                    n.MModel.Hero.unlockSkin(e, d)
                }
                if (u > 0)
                    if (n.MModel.Hero.checkHeroUnlock(u)) {
                        let e = [...i.MConfig.TableHeroGrow.values()].find(e => e.heroId == u && 1 == e.heroLevel);
                        n.MModel.Hero.addMushroom(null == e ? void 0 : e.decompose)
                    } else
                        n.MModel.Hero.unlockHero(u)
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MConfig": "MConfig",
        "./MModel": "MModel"
    }],
    MModel: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2b817zWolBOVIxsRHPLeGkX", "MModel"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MModel = void 0;
        const i = e("../Model/ModelAccount")
            , n = e("../Model/ModelBattle")
            , a = e("../Model/ModelBlindBox")
            , s = e("../Model/ModelChristmas")
            , r = e("../Model/ModelCommon")
            , l = e("../Model/ModelGift")
            , c = e("../Model/ModelGuide")
            , d = e("../Model/ModelHalloween")
            , u = e("../Model/ModelHero")
            , h = e("../Model/ModelMothersDay")
            , f = e("../Model/ModelNewbieTask")
            , g = e("../Model/ModelNewYear")
            , p = e("../Model/ModelPass")
            , m = e("../Model/ModelPause")
            , v = e("../Model/ModelSignIn")
            , M = e("../Model/ModelStore")
            , y = e("../Model/ModelTask")
            , P = e("../Model/ModelThanksgiving")
            , S = e("../Model/UserData");
        o.MModel = new class {
            constructor() {
                this.UserData = new S.UserData,
                    this.Pause = new m.ModelPause,
                    this.Account = new i.ModelAccount,
                    this.Battle = new n.ModelBattle,
                    this.Guide = new c.ModelGuide,
                    this.Common = new r.ModelCommon,
                    this.Hero = new u.ModelHero,
                    this.BlindBox = new a.ModelBlindBox,
                    this.SignIn = new v.ModelSignIn,
                    this.Task = new y.ModelTask,
                    this.Gift = new l.ModelGift,
                    this.Halloween = new d.ModelHalloween,
                    this.Thanksgiving = new P.ModelThanksgiving,
                    this.Store = new M.ModelStore,
                    this.Christmas = new s.ModelChristmas,
                    this.NewYear = new g.ModelNewYear,
                    this.SummerFunPass = new p.ModelPass,
                    this.NewbieTask = new f.ModelNewbieTask,
                    this.MothersDay = new h.ModelMothersDay
            }
            getData() {
                let e = new Object;
                for (let t in this) {
                    let o = t.toString();
                    e[o] = this[o].getData()
                }
                return console.log(e),
                    e
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Model/ModelAccount": "ModelAccount",
        "../Model/ModelBattle": "ModelBattle",
        "../Model/ModelBlindBox": "ModelBlindBox",
        "../Model/ModelChristmas": "ModelChristmas",
        "../Model/ModelCommon": "ModelCommon",
        "../Model/ModelGift": "ModelGift",
        "../Model/ModelGuide": "ModelGuide",
        "../Model/ModelHalloween": "ModelHalloween",
        "../Model/ModelHero": "ModelHero",
        "../Model/ModelMothersDay": "ModelMothersDay",
        "../Model/ModelNewYear": "ModelNewYear",
        "../Model/ModelNewbieTask": "ModelNewbieTask",
        "../Model/ModelPass": "ModelPass",
        "../Model/ModelPause": "ModelPause",
        "../Model/ModelSignIn": "ModelSignIn",
        "../Model/ModelStore": "ModelStore",
        "../Model/ModelTask": "ModelTask",
        "../Model/ModelThanksgiving": "ModelThanksgiving",
        "../Model/UserData": "UserData"
    }],
    MMove: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1d87bb9juxCXo3OTaxjnGFz", "MMove"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MMove = void 0,
            o.MMove = new class {
                getPrePos(e, t, o, i, n) {
                    var a, s, r, l, c, d;
                    if (!o)
                        return null;
                    if (t >= e.length)
                        return null;
                    let u = i * n
                        , h = null === (a = e[t + 1]) || void 0 === a ? void 0 : a.sub(o)
                        , f = null == h ? void 0 : h.mag();
                    if (u <= f)
                        return cc.v2(o.x + h.normalize().x * u, o.y + h.normalize().y * u);
                    {
                        if (++t >= e.length)
                            return null;
                        let o = u - f
                            , i = null === (r = null === (s = e[t + 1]) || void 0 === s ? void 0 : s.sub(e[t])) || void 0 === r ? void 0 : r.mag();
                        for (; o > i;) {
                            if (o -= i,
                                ++t >= e.length)
                                return null;
                            i = null === (c = null === (l = e[t + 1]) || void 0 === l ? void 0 : l.sub(e[t])) || void 0 === c ? void 0 : c.mag()
                        }
                        if (t >= e.length)
                            return null;
                        let n = null === (d = e[t + 1]) || void 0 === d ? void 0 : d.sub(e[t]).normalize();
                        return e[t].add(cc.v2(n.x * o, n.y * o))
                    }
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MNavigate: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5e90497Sb9D6JZfKAzCQPiz", "MNavigate"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MNavigate = void 0,
            o.MNavigate = new class {
                constructor() {
                    this.navigateGameInfoMap = new Map,
                        this.navigateGameIconMap = new Map,
                        this.navigateGameIndexMap = new Map
                }
                getNavigateList(e) {
                    GA.request({
                        url: Urls.url_list,
                        data: {
                            userId: GA.Info.uid,
                            type: e.type,
                            excludes: []
                        },
                        method: "POST",
                        success: t => {
                            0 == t.data.code && e.callback(t.data.data)
                        }
                    })
                }
                getNavigateGameInfo(e) {
                    let t = o.MNavigate.getNavigateGameIndex(e)
                        , i = o.MNavigate.navigateGameInfoMap.get(e);
                    return i[t % i.length]
                }
                getNavigateGameIndex(e) {
                    let t = 0;
                    return this.navigateGameIndexMap.has(e) && (t = this.navigateGameIndexMap.get(e)),
                        this.navigateGameIndexMap.set(e, t + 1),
                        t
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MPool: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "da656Dc4TJJxKk05bMC6wbt", "MPool"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MPool = void 0;
        const i = e("./MBundle");
        class n extends cc.Component {
            constructor() {
                super(...arguments),
                    this.path = ""
            }
        }
        o.MPool = new class {
            constructor() {
                this.pools = new Map
            }
            load(e) {
                if (this.pools.has(e.path) || this.pools.set(e.path, new cc.NodePool),
                    this.pools.get(e.path).size() > 0)
                    try {
                        e.onComplete(this.pools.get(e.path).get())
                    } catch (t) { }
                else
                    i.MBundle.load({
                        bundle: e.bundle,
                        path: e.path,
                        type: e.type,
                        onComplete: t => {
                            let o = cc.instantiate(t);
                            o.addComponent(n).path = e.path,
                                e.onComplete(o)
                        }
                    })
            }
            recovery(e) {
                var t;
                let o = null === (t = e.getComponent(n)) || void 0 === t ? void 0 : t.path;
                o && this.pools.has(o) ? this.pools.get(o).put(e) : null == e || e.destroy()
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MBundle": "MBundle"
    }],
    MRank: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "6906795i31FTK3w0tKilZEL", "MRank"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MRank = void 0,
            o.MRank = new class {
                saveRank(e) {
                    GA.request({
                        url: Urls.url_saveRank,
                        data: {
                            userid: GA.Info.uid,
                            score: e
                        },
                        method: "POST",
                        success: e => {
                            0 == e.data.code && console.log("saveRank")
                        }
                    })
                }
                reqRank(e, t) {
                    GA.request({
                        url: Urls.url_reqRank,
                        data: {
                            openid: GA.Info.openId,
                            score: e
                        },
                        method: "POST",
                        success: e => {
                            if (0 == e.data.code)
                                try {
                                    t && t(e.data.data)
                                } catch (o) { }
                        }
                    })
                }
                saveMatchRank(e) {
                    GA.request({
                        url: Urls.url_saveMatchRank,
                        data: {
                            userId: GA.Info.uid,
                            score: e,
                            nickname: "",
                            headicon: "",
                            needHeadIcon: 0
                        },
                        method: "POST",
                        success: e => {
                            0 == e.data.code && console.log("saveMatchRank")
                        }
                    })
                }
                reqMatchRank(e) {
                    GA.request({
                        url: Urls.url_reqMatchRank,
                        data: {
                            userId: GA.Info.uid
                        },
                        method: "POST",
                        success: t => {
                            if (0 == t.data.code)
                                try {
                                    e && e(t.data.data)
                                } catch (o) { }
                        }
                    })
                }
                getNickNameList(e, t) {
                    GA.request({
                        url: Urls.url_getHeadIcon,
                        data: {
                            robotIdList: e
                        },
                        method: "POST",
                        success: e => {
                            if (0 == e.data.code)
                                try {
                                    let i = [];
                                    e.data.data.forEach(e => {
                                        i.push(e.nickname)
                                    }
                                    ),
                                        t && t(i)
                                } catch (o) { }
                        }
                    })
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MScreenshot: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "46ee1YFK3RDwaYjKmdeeh4V", "MScreenshot"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MScreenshot = void 0,
            o.MScreenshot = new class {
                getScreenshotPath() {
                    let e = cc.Canvas.instance.node.getChildByName("Screenshot Camera").getComponent(cc.Camera);
                    e.alignWithScreen = !1,
                        e.orthoSize = 275,
                        e.position = cc.v2(0, 0);
                    let t = new cc.RenderTexture
                        , o = cc.game._renderContext;
                    t.initWithSize(449, 550, o.STENCIL_INDEX8),
                        e.targetTexture = t,
                        e.render();
                    let i = t.readPixels()
                        , n = document.createElement("canvas")
                        , a = n.getContext("2d")
                        , s = n.width = t.width
                        , r = n.height = t.height;
                    n.width = t.width,
                        n.height = t.height;
                    let l = 4 * s;
                    for (let u = 0; u < r; u++) {
                        let e = r - 1 - u
                            , t = a.createImageData(s, 1)
                            , o = e * s * 4;
                        for (let n = 0; n < l; n++)
                            t.data[n] = i[o + n];
                        a.putImageData(t, 0, u)
                    }
                    let c = n.toDataURL("image/jpeg");
                    document.createElement("img").src = c;
                    let d = n.toTempFilePathSync({
                        x: 0,
                        y: 0,
                        width: n.width,
                        height: n.height,
                        destWidth: n.width,
                        destHeight: n.height,
                        fileType: "png",
                        quality: 1
                    });
                    return console.log("ScreenshotPath:", d),
                        d
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MSkill: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "78c17BxJ45LgoqlWfkfOjCQ", "MSkill"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MSkill = void 0;
        const i = e("../Enum")
            , n = e("./MConfig")
            , a = e("./MEvent")
            , s = e("./MModel")
            , r = e("./MTask");
        o.MSkill = new class {
            constructor() {
                this.skillList = [],
                    this.skill = null,
                    this.swapCity = null
            }
            addSkill(e) {
                var t, o, i, a, r;
                let l = [];
                for (let n = 0; n < e.length; n++)
                    this.skillList.push(e[n]),
                        l.push({
                            eventId: "\u9009\u62e9\u6280\u80fd",
                            detail: JSON.stringify({
                                skillId: e[n].id
                            })
                        });
                if ((null === (t = s.MModel.Hero.currentHero) || void 0 === t ? void 0 : t.id) > -1) {
                    let e = [...n.MConfig.TableHeroGrow.values()].find(e => e.heroId == s.MModel.Hero.currentHero.id && e.heroLevel == s.MModel.Hero.currentHero.level)
                        , t = n.MConfig.TableSkill.get(e.skillId);
                    if (t.param = e.skillParam,
                        (null === (o = s.MModel.Hero.currentHero) || void 0 === o ? void 0 : o.skinId) > 1) {
                        let e = {
                            id: t.id,
                            name: t.name,
                            describe: t.describe,
                            grade: t.grade,
                            param: {
                                A: t.param.A,
                                B: t.param.B,
                                C: t.param.C
                            },
                            weight: t.weight
                        };
                        (null === (i = null == e ? void 0 : e.param) || void 0 === i ? void 0 : i.A) && (e.param.A = parseFloat((1.1 * e.param.A).toFixed(1))),
                            (null === (a = null == e ? void 0 : e.param) || void 0 === a ? void 0 : a.B) && (e.param.B = parseFloat((1.1 * e.param.B).toFixed(1))),
                            (null === (r = null == e ? void 0 : e.param) || void 0 === r ? void 0 : r.C) && (e.param.C = parseFloat((1.1 * e.param.C).toFixed(1))),
                            this.skillList.push(e)
                    } else
                        this.skillList.push(t)
                }
                GA.sentLogs(l)
            }
            selectSkill(e) {
                this.skill = e,
                    a.MEvent.emit(a.EMsg.SelectSkill, e)
            }
            useSkill() {
                s.MModel.Hero.checkIsHeroSkill(this.skill.id) && GA.sentLogs([{
                    eventId: "\u4f7f\u7528\u82f1\u96c4\u6280\u80fd",
                    detail: JSON.stringify({
                        skillId: this.skill.id
                    })
                }]),
                    a.MEvent.emit(a.EMsg.UsedSkill, Utils.copy(this.skill)),
                    this.skill = null,
                    s.MModel.Battle.gameModel == i.EGameModel.Infernal && (r.MTask.task4++,
                        r.MTask.task5++),
                    s.MModel.Task.doTask(11),
                    s.MModel.NewbieTask.doTask(4)
            }
            cancelSkill() {
                a.MEvent.emit(a.EMsg.CancelSkill, Utils.copy(this.skill)),
                    this.skill = null,
                    this.swapCity = null
            }
            clear() {
                this.skillList = [],
                    this.skill = null,
                    this.swapCity = null
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Enum": "Enum",
        "./MConfig": "MConfig",
        "./MEvent": "MEvent",
        "./MModel": "MModel",
        "./MTask": "MTask"
    }],
    MTask: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "db3a20AcHNNzqMUKRWyE/BF", "MTask"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MTask = void 0,
            o.MTask = new class {
                constructor() {
                    this.task1 = 0,
                        this.task2 = 0,
                        this.task3 = 0,
                        this.task4 = 0,
                        this.task5 = 0,
                        this.task6 = 0
                }
                reset() {
                    this.task1 = 0,
                        this.task2 = 0,
                        this.task3 = 0,
                        this.task4 = 0,
                        this.task5 = 0,
                        this.task6 = 0
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    MToast: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c5f50e1LgNPnqA4y6JiubxR", "MToast"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MToast = void 0;
        const i = e("./MBundle")
            , n = e("./MPool");
        o.MToast = new class {
            constructor() {
                this.stacks = [],
                    this.moveUping = !1
            }
            showToast(e) {
                this.moveUping ? this.stacks.push(e) : (this.moveUping = !0,
                    n.MPool.load({
                        bundle: i.EBundle.Common,
                        path: "res/prefab/toast",
                        type: cc.Prefab,
                        onComplete: t => {
                            t.getComponentInChildren(cc.Label).string = e.title,
                                t.setParent(cc.Canvas.instance.node),
                                t.setPosition(cc.v2(0, 0)),
                                t.opacity = 255,
                                t.zIndex = cc.macro.MAX_ZINDEX,
                                cc.tween(t).by(.3, {
                                    position: cc.v3(0, 100)
                                }).delay(.6).call(() => {
                                    if (this.moveUping = !1,
                                        this.stacks.length > 0) {
                                        let e = this.stacks.shift();
                                        this.showToast(e)
                                    }
                                }
                                ).to(.3, {
                                    opacity: 0
                                }).call(() => {
                                    n.MPool.recovery(t)
                                }
                                ).start()
                        }
                    }))
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./MBundle": "MBundle",
        "./MPool": "MPool"
    }],
    MTween: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0f07aSp8gNJaY9bdRHXgIy0", "MTween"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.MTween = void 0,
            o.MTween = new class {
                jelly(e) {
                    cc.Tween.stopAllByTarget(e),
                        cc.tween(e).set({
                            scale: 1
                        }).to(.1, {
                            scale: 1.2
                        }).to(.1, {
                            scale: 1
                        }).to(.1, {
                            scale: 1.1
                        }).to(.1, {
                            scale: 1
                        }).to(.1, {
                            scale: 1.05
                        }).to(.1, {
                            scale: 1
                        }).delay(1).union().repeatForever().start()
                }
                breath(e) {
                    cc.Tween.stopAllByTarget(e),
                        cc.tween(e).set({
                            scale: 1
                        }).to(.18, {
                            scale: 1.05
                        }).to(.18, {
                            scale: 1
                        }).to(.18, {
                            scale: .95
                        }).to(.18, {
                            scale: 1
                        }).union().repeatForever().start()
                }
                swing(e) {
                    cc.Tween.stopAllByTarget(e),
                        cc.tween(e).set({
                            angle: 0
                        }).to(.06, {
                            angle: 15
                        }).to(.06, {
                            angle: 0
                        }).to(.06, {
                            angle: -15
                        }).to(.06, {
                            angle: 0
                        }).to(.06, {
                            angle: 15
                        }).to(.06, {
                            angle: 0
                        }).to(.06, {
                            angle: -15
                        }).to(.06, {
                            angle: 0
                        }).to(.06, {
                            angle: 15
                        }).to(.06, {
                            angle: 0
                        }).to(.06, {
                            angle: -15
                        }).to(.06, {
                            angle: 0
                        }).delay(1).union().repeatForever().start()
                }
                infiniteRotate(e) {
                    cc.Tween.stopAllByTarget(e),
                        cc.tween(e).set({
                            angle: 0
                        }).to(5, {
                            angle: -359
                        }).union().repeatForever().start()
                }
                twinkle(e) {
                    cc.Tween.stopAllByTarget(e),
                        cc.tween(e).set({
                            opacity: 255
                        }).to(.5, {
                            opacity: 50
                        }).to(.5, {
                            opacity: 255
                        }).union().repeatForever().start()
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    ModelAccount: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "78a95SmhrZEvo5XSL4OGXnk", "ModelAccount"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelAccount = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Manager/MData")
            , s = e("../Manager/MEvent")
            , r = e("../Manager/MModel");
        o.ModelAccount = class extends i.BaseModel {
            constructor() {
                super(),
                    this.coin = -1,
                    this.gemstone = -1,
                    this.strength = -1,
                    this.diamond = 0,
                    this.lastAddStrengthTime = -1,
                    this.addSrengthCountdown = 300,
                    this.inited = !1,
                    setInterval(() => {
                        this.inited && this.strength < n.MConfig.Config.MaxStrength && (this.addSrengthCountdown--,
                            this.addSrengthCountdown <= 0 && (this.addStrength(1),
                                this.lastAddStrengthTime = (new Date).getTime()))
                    }
                        , 1e3)
            }
            syncConfig(e) {
                e.isNewUser && (this.lastAddStrengthTime = (new Date).getTime()),
                    -1 == this.coin && (this.coin = n.MConfig.Config.DefaultCoin),
                    -1 == this.gemstone && (this.gemstone = n.MConfig.Config.DefaultGemstone),
                    -1 == this.strength && (this.strength = n.MConfig.Config.DefaultStrength);
                let t = (new Date).getTime()
                    , o = Math.floor((t - this.lastAddStrengthTime) / 1e3 / 300);
                o > 0 && this.strength < n.MConfig.Config.MaxStrength && (o + this.strength >= n.MConfig.Config.MaxStrength ? this.addStrength(n.MConfig.Config.MaxStrength - this.strength) : this.addStrength(o)),
                    this.strength < n.MConfig.Config.MaxStrength ? (this.addSrengthCountdown = (t - this.lastAddStrengthTime) / 1e3 % 300,
                        this.lastAddStrengthTime = (new Date).getTime() - 1e3 * this.addSrengthCountdown) : this.lastAddStrengthTime = (new Date).getTime(),
                    this.inited = !0,
                    n.MConfig.Debug && (this.coin = 999999999,
                        this.gemstone = 999999999,
                        this.strength = 999999999,
                        this.diamond = 999999999)
            }
            addCoin(e) {
                this.coin += e,
                    s.MEvent.emit(s.EMsg.CoinEffect),
                    setTimeout(() => {
                        s.MEvent.emit(s.EMsg.UpdateCoin)
                    }
                        , 1800),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            payCoin(e) {
                this.coin >= e ? this.coin -= e : this.coin = 0,
                    s.MEvent.emit(s.EMsg.UpdateCoin),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            checkPayCoin(e) {
                return this.coin >= e
            }
            addStrength(e) {
                this.strength += e,
                    this.addSrengthCountdown = 300,
                    s.MEvent.emit(s.EMsg.StrengthEffect),
                    setTimeout(() => {
                        s.MEvent.emit(s.EMsg.UpdateStrength)
                    }
                        , 1800),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            payStrength(e) {
                this.strength >= e ? this.strength -= e : this.strength = 0,
                    s.MEvent.emit(s.EMsg.UpdateStrength),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save(),
                    r.MModel.NewbieTask.doTask(8, e)
            }
            checkPayStrength(e) {
                return this.strength >= e || (r.MModel.Common.SentFirstLackStrength || (r.MModel.Common.SentFirstLackStrength = !0,
                    GA.sentLogs([{
                        eventId: "\u9996\u6b21\u51fa\u73b0\u4f53\u529b\u4e0d\u8db3"
                    }])),
                    !1)
            }
            addGemstone(e) {
                this.gemstone += e,
                    s.MEvent.emit(s.EMsg.GemstonEffect),
                    setTimeout(() => {
                        s.MEvent.emit(s.EMsg.UpdateGemstone)
                    }
                        , 1800),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            checkPayGemstone(e) {
                return this.gemstone >= e
            }
            payGemstone(e) {
                this.gemstone >= e ? this.gemstone -= e : this.gemstone = 0,
                    s.MEvent.emit(s.EMsg.UpdateGemstone),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save(),
                    r.MModel.NewbieTask.doTask(5, e)
            }
            addDiamond(e) {
                this.diamond += e,
                    s.MEvent.emit(s.EMsg.DiamondEffect),
                    setTimeout(() => {
                        s.MEvent.emit(s.EMsg.UpdateDiamond)
                    }
                        , 1800),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            checkPayDiamond(e) {
                return this.diamond >= e
            }
            payDiamond(e) {
                this.diamond >= e ? this.diamond -= e : this.diamond = 0,
                    s.MEvent.emit(s.EMsg.UpdateDiamond),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MEvent": "MEvent",
        "../Manager/MModel": "MModel"
    }],
    ModelBattle: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "258bfTi1/NLwr4jd6nTrBJE", "ModelBattle"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelBattle = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum")
            , a = e("../Manager/MConfig")
            , s = e("../Manager/MData")
            , r = e("../Manager/MModel")
            , l = e("../Manager/MRank")
            , c = e("../Manager/MTask")
            , d = e("../Temporary");
        o.ModelBattle = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.gameModel = n.EGameModel.Normal,
                    this.gameEvent = n.EGameEvent.None,
                    this.level = 1,
                    this.levels = [],
                    this.levelContrasts = [],
                    this.ifLevel = 1,
                    this.ifUseLevel = 1,
                    this.ifLevels = [],
                    this.ifLevelTasks = [],
                    this.ifChapters = [],
                    this.halloweenLevel = 1,
                    this.completeHalloweenLevelCount = 0,
                    this.thanksgivingLevel = 1,
                    this.completeThanksgivingLevelCount = 0,
                    this.christmasLevel = 1,
                    this.completeChristmasLevelCount = 0,
                    this.newYearLevel = 1,
                    this.completeNewYearLevelCount = 0,
                    this.mothersDayLevel = 1,
                    this.completeMothersDayLevelCount = 0
            }
            syncConfig() {
                for (let e = 1; e < this.level; e++)
                    this.ifLevelTasks.find(t => t.level == e) || this.ifLevelTasks.push({
                        level: e,
                        complete: !1
                    });
                l.MRank.saveRank(this.level),
                    l.MRank.saveMatchRank(this.ifLevel)
            }
            afterSyncConfig1() {
                r.MModel.Task.doTask(8, this.level),
                    r.MModel.Task.doTask(9, this.ifLevel)
            }
            receiveChapterRewrd(e) {
                let t = this.ifChapters.find(t => t.chapter == e);
                t && (t.status = n.EReceiveStatus.Received)
            }
            setIfUseLevel(e) {
                this.ifUseLevel = e
            }
            passLevel() {
                if (r.MModel.NewbieTask.doTask(7),
                    this.gameEvent == n.EGameEvent.None)
                    if (this.gameModel == n.EGameModel.Normal) {
                        let e = this.getMaxLevel()
                            , t = 1;
                        if (t = this.level <= e ? this.level : this.levels.shift(),
                            this.levelContrasts.find(e => e.level == this.level) || this.levelContrasts.push({
                                level: this.level,
                                actLevel: t
                            }),
                            "android_mgct_abroad_weiyou" == GA.Info.appId || GA.isPlatform(GA.Platform.WeiYouH5)) {
                            let e = [45, 50, 55, 60, 65, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190];
                            (r.MModel.Battle.level <= 40 || e.includes(r.MModel.Battle.level)) && (GA.sentLog(`level ${r.MModel.Battle.level}_pass`)
                                ,!GA.Info.isPreview && GA.isPlatform(GA.Platform.WeiYouH5)/* && window.MiniGameAnalytics.onGameEvent("passlevel", `level ${r.MModel.Battle.level}_pass`)*/)
                        }
                        this.level++,
                            r.MModel.Task.doTask(8, this.level);
                        for (let o = this.ifLevelTasks.length; o < this.level; o++)
                            this.ifLevelTasks.find(e => e.level == o) || this.ifLevelTasks.push({
                                level: o,
                                complete: !1
                            });
                        this.level >= 5 && !r.MModel.Common.SentFirstTo5Level && (r.MModel.Common.SentFirstTo5Level = !0,
                            GA.sentLogs([{
                                eventId: "\u9996\u6b21\u6253\u5230\u7b2c5\u5173"
                            }])),
                            l.MRank.saveRank(this.level)
                    } else
                        this.gameModel == n.EGameModel.Infernal && (r.MModel.NewbieTask.doTask(10),
                            this.ifUseLevel == this.ifLevel && this.ifLevel <= this.level - 2 && (this.ifLevels.shift(),
                                this.ifLevel++,
                                r.MModel.Task.doTask(9, this.ifLevel),
                                l.MRank.saveMatchRank(this.ifLevel)));
                else
                    this.gameEvent == n.EGameEvent.Halloween ? this.halloweenLevel < a.MConfig.LocalConfig.HalloweenMaxLevel ? (this.halloweenLevel++,
                        this.completeHalloweenLevelCount++,
                        this.halloweenLevel > a.MConfig.Activity.reward1.level && r.MModel.Halloween.reward1Status == n.EReceiveStatus.UnReach && (r.MModel.Halloween.reward1Status = n.EReceiveStatus.UnReceive),
                        this.halloweenLevel > a.MConfig.Activity.reward2.level && r.MModel.Halloween.reward2Status == n.EReceiveStatus.UnReach && (r.MModel.Halloween.reward2Status = n.EReceiveStatus.UnReceive)) : (this.completeHalloweenLevelCount = a.MConfig.LocalConfig.HalloweenMaxLevel,
                            this.halloweenLevel >= a.MConfig.Activity.reward2.level && r.MModel.Halloween.reward3Status == n.EReceiveStatus.UnReach && (r.MModel.Halloween.reward3Status = n.EReceiveStatus.UnReceive)) : this.gameEvent == n.EGameEvent.Thanksgiving ? this.thanksgivingLevel < a.MConfig.LocalConfig.ThanksgivingMaxLevel ? (this.thanksgivingLevel++,
                                this.completeThanksgivingLevelCount++,
                                this.thanksgivingLevel > a.MConfig.Activity.reward1.level && r.MModel.Thanksgiving.reward1Status == n.EReceiveStatus.UnReach && (r.MModel.Thanksgiving.reward1Status = n.EReceiveStatus.UnReceive),
                                this.thanksgivingLevel > a.MConfig.Activity.reward2.level && r.MModel.Thanksgiving.reward2Status == n.EReceiveStatus.UnReach && (r.MModel.Thanksgiving.reward2Status = n.EReceiveStatus.UnReceive)) : (this.completeThanksgivingLevelCount = a.MConfig.LocalConfig.ThanksgivingMaxLevel,
                                    this.thanksgivingLevel >= a.MConfig.Activity.reward2.level && r.MModel.Thanksgiving.reward3Status == n.EReceiveStatus.UnReach && (r.MModel.Thanksgiving.reward3Status = n.EReceiveStatus.UnReceive)) : this.gameEvent == n.EGameEvent.Christmas ? this.christmasLevel < a.MConfig.LocalConfig.ChristmasMaxLevel ? (this.christmasLevel++,
                                        this.completeChristmasLevelCount++,
                                        this.christmasLevel > a.MConfig.Activity.reward1.level && r.MModel.Christmas.reward1Status == n.EReceiveStatus.UnReach && (r.MModel.Christmas.reward1Status = n.EReceiveStatus.UnReceive),
                                        this.christmasLevel > a.MConfig.Activity.reward2.level && r.MModel.Christmas.reward2Status == n.EReceiveStatus.UnReach && (r.MModel.Christmas.reward2Status = n.EReceiveStatus.UnReceive)) : (this.completeChristmasLevelCount = a.MConfig.LocalConfig.ChristmasMaxLevel,
                                            this.christmasLevel >= a.MConfig.Activity.reward2.level && r.MModel.Christmas.reward3Status == n.EReceiveStatus.UnReach && (r.MModel.Christmas.reward3Status = n.EReceiveStatus.UnReceive)) : this.gameEvent == n.EGameEvent.NewYear ? this.newYearLevel < a.MConfig.LocalConfig.NewYearMaxLevel ? (this.newYearLevel++,
                                                this.completeNewYearLevelCount++,
                                                this.newYearLevel > a.MConfig.Activity.reward1.level && r.MModel.NewYear.reward1Status == n.EReceiveStatus.UnReach && (r.MModel.NewYear.reward1Status = n.EReceiveStatus.UnReceive),
                                                this.newYearLevel > a.MConfig.Activity.reward2.level && r.MModel.NewYear.reward2Status == n.EReceiveStatus.UnReach && (r.MModel.NewYear.reward2Status = n.EReceiveStatus.UnReceive)) : (this.completeNewYearLevelCount = a.MConfig.LocalConfig.NewYearMaxLevel,
                                                    this.newYearLevel >= a.MConfig.Activity.reward2.level && r.MModel.NewYear.reward3Status == n.EReceiveStatus.UnReach && (r.MModel.NewYear.reward3Status = n.EReceiveStatus.UnReceive)) : this.gameEvent == n.EGameEvent.MothersDay && (this.mothersDayLevel < a.MConfig.LocalConfig.MothersDayMaxLevel ? (this.mothersDayLevel++,
                                                        this.completeMothersDayLevelCount++,
                                                        this.mothersDayLevel > a.MConfig.Activity.reward1.level && r.MModel.MothersDay.reward1Status == n.EReceiveStatus.UnReach && (r.MModel.MothersDay.reward1Status = n.EReceiveStatus.UnReceive),
                                                        this.mothersDayLevel > a.MConfig.Activity.reward2.level && r.MModel.MothersDay.reward2Status == n.EReceiveStatus.UnReach && (r.MModel.MothersDay.reward2Status = n.EReceiveStatus.UnReceive)) : (this.completeMothersDayLevelCount = a.MConfig.LocalConfig.MothersDayMaxLevel,
                                                            this.mothersDayLevel >= a.MConfig.Activity.reward2.level && r.MModel.MothersDay.reward3Status == n.EReceiveStatus.UnReach && (r.MModel.MothersDay.reward3Status = n.EReceiveStatus.UnReceive)));
                s.MData.save()
            }
            settlementTask() {
                let e = [...a.MConfig.TableLevelTask.values()].find(e => e.level == this.getUseLevel())
                    , t = this.ifLevelTasks.find(e => e.level == this.ifUseLevel);
                switch (e.type) {
                    case 1:
                        c.MTask.task1 <= e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1;
                        break;
                    case 2:
                        c.MTask.task2 <= e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1;
                        break;
                    case 3:
                        c.MTask.task3 <= e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1;
                        break;
                    case 4:
                        c.MTask.task4 > e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1;
                        break;
                    case 5:
                        c.MTask.task5 < e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1;
                        break;
                    case 6:
                        c.MTask.task6 >= e.param.A ? (t.complete = !0,
                            r.MModel.Task.doTask(5),
                            d.Temporary.completeTask = !0) : d.Temporary.completeTask = !1
                }
                console.log("MModel.task1:", c.MTask.task1, "MModel.task2:", c.MTask.task2, "MModel.task3:", c.MTask.task3, "MModel.task4:", c.MTask.task4, "MModel.task5:", c.MTask.task5, "MModel.task6:", c.MTask.task6, "levelTaskInfo.param.A:", e.param.A);
                let o = this.ifLevelTasks.filter(e => 1 == e.complete).length;
                r.MModel.Task.doTask(12, o);
                let i = this.getChapterByLevel(this.ifUseLevel);
                if (!this.ifChapters.find(e => e.chapter == i)) {
                    let e = this.getActualChapter(i)
                        , t = this.getChapterHeadLevel(i)
                        , o = this.getChapterTailLevel(i)
                        , s = [...a.MConfig.TableChapterReward.values()].find(t => t.chapter == e);
                    this.ifLevelTasks.filter(e => 1 == e.complete && e.level >= t && e.level <= o).length >= (null == s ? void 0 : s.collectStar) && this.ifChapters.push({
                        chapter: i,
                        status: n.EReceiveStatus.UnReceive
                    })
                }
            }
            getUseLevel() {
                if (a.MConfig.Debug)
                    if (this.gameEvent == n.EGameEvent.None) {
                        if (r.MModel.Battle.gameModel == n.EGameModel.Normal)
                            return this.getActualLevel(this.level);
                        if (r.MModel.Battle.gameModel == n.EGameModel.Infernal)
                            return this.getActualLevel(this.ifUseLevel)
                    } else {
                        if (this.gameEvent == n.EGameEvent.Halloween)
                            return this.halloweenLevel;
                        if (this.gameEvent == n.EGameEvent.Thanksgiving)
                            return this.thanksgivingLevel;
                        if (this.gameEvent == n.EGameEvent.Christmas)
                            return this.christmasLevel;
                        if (this.gameEvent == n.EGameEvent.NewYear)
                            return this.newYearLevel;
                        if (this.gameEvent == n.EGameEvent.MothersDay)
                            return this.mothersDayLevel
                    }
                else if (this.gameEvent == n.EGameEvent.None) {
                    let e = this.getMaxLevel();
                    if (this.gameModel == n.EGameModel.Normal) {
                        if (this.level <= e)
                            return this.level;
                        if (this.levels.length <= 0) {
                            let e = !1;
                            if (a.MConfig.LocalConfig.ChapterMap.forEach(t => {
                                if (this.level >= t[0] && this.level <= t[1]) {
                                    e = !0;
                                    for (let e = t[0]; e <= t[1]; e++)
                                        this.levels.push(e)
                                }
                            }
                            ),
                                !e) {
                                let e = this.getChapter()
                                    , t = e % a.MConfig.LocalConfig.ChapterMap.size == 0 ? a.MConfig.LocalConfig.ChapterMap.size : e % a.MConfig.LocalConfig.ChapterMap.size
                                    , o = a.MConfig.LocalConfig.ChapterMap.get(t);
                                for (let i = o[1] - a.MConfig.LocalConfig.LoopChapterSize + 1; i <= o[1]; i++)
                                    this.levels.push(i);
                                this.levels = this.levels.sort(() => Math.random() - .5)
                            }
                        }
                        return this.levels[0]
                    }
                    if (this.gameModel == n.EGameModel.Infernal) {
                        if (this.ifUseLevel <= e)
                            return this.ifUseLevel;
                        {
                            let e = this.levelContrasts.find(e => e.level == this.ifUseLevel);
                            if (e)
                                return e.actLevel;
                            if (this.ifLevels.length <= 0) {
                                let e = !1;
                                if (a.MConfig.LocalConfig.ChapterMap.forEach(t => {
                                    if (this.ifLevel >= t[0] && this.ifLevel <= t[1]) {
                                        e = !0;
                                        for (let e = t[0]; e <= t[1]; e++)
                                            this.ifLevels.push(e)
                                    }
                                }
                                ),
                                    !e) {
                                    let e = this.getChapter()
                                        , t = e % a.MConfig.LocalConfig.ChapterMap.size == 0 ? a.MConfig.LocalConfig.ChapterMap.size : e % a.MConfig.LocalConfig.ChapterMap.size
                                        , o = a.MConfig.LocalConfig.ChapterMap.get(t);
                                    for (let i = o[1] - a.MConfig.LocalConfig.LoopChapterSize + 1; i <= o[1]; i++)
                                        this.ifLevels.push(i);
                                    this.ifLevels = this.ifLevels.sort(() => Math.random() - .5)
                                }
                            }
                            return this.ifLevels[0]
                        }
                    }
                } else {
                    if (this.gameEvent == n.EGameEvent.Halloween)
                        return this.halloweenLevel;
                    if (this.gameEvent == n.EGameEvent.Thanksgiving)
                        return this.thanksgivingLevel;
                    if (this.gameEvent == n.EGameEvent.Christmas)
                        return this.christmasLevel;
                    if (this.gameEvent == n.EGameEvent.NewYear)
                        return this.newYearLevel;
                    if (this.gameEvent == n.EGameEvent.MothersDay)
                        return this.mothersDayLevel
                }
            }
            getActualLevel(e) {
                let t = this.levelContrasts.find(t => t.level == e);
                if (t)
                    return t.actLevel;
                let o = -1
                    , i = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach(t => {
                    e >= t[0] && e <= t[1] && (o = e),
                        t[1] > i && (i = t[1])
                }
                ),
                    -1 == o && (o = (e - i) % (i - 10) == 0 ? i : (e - i) % (i - 10) + 10),
                    o
            }
            getActualChapter(e) {
                let t = -1
                    , o = -1;
                return a.MConfig.LocalConfig.ChapterMap.forEach((i, n) => {
                    e == n && (t = n),
                        n > o && (o = n)
                }
                ),
                    -1 == t ? e % o == 0 ? o : e - Math.floor(e / o) * o : t
            }
            getChapter() {
                let e = -1;
                this.gameModel == n.EGameModel.Normal ? e = this.level : this.gameModel == n.EGameModel.Infernal && (e = this.ifLevel);
                let t = -1
                    , o = 0
                    , i = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach((n, a) => {
                    e >= n[0] && e <= n[1] && (t = a),
                        n[1] > o && (o = n[1]),
                        a > i && (i = a)
                }
                ),
                    -1 == t ? i + Math.ceil((e - o) / a.MConfig.LocalConfig.LoopChapterSize) : t
            }
            getLevelChapter(e) {
                let t = -1;
                return a.MConfig.LocalConfig.ChapterMap.forEach((o, i) => {
                    e >= o[0] && e <= o[1] && (t = i)
                }
                ),
                    t
            }
            getChapterSize(e) {
                let t = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach((o, i) => {
                    e == i && (t = o[1] - o[0] + 1)
                }
                ),
                    0 == t && (t = a.MConfig.LocalConfig.LoopChapterSize),
                    t
            }
            getChapterLevel(e) {
                let t = -1
                    , o = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach(i => {
                    e >= i[0] && e <= i[1] && (t = e - i[0] + 1),
                        i[1] > o && (o = i[1])
                }
                ),
                    -1 == t && (t = (e - o) % a.MConfig.LocalConfig.LoopChapterSize == 0 ? a.MConfig.LocalConfig.LoopChapterSize : (e - o) % a.MConfig.LocalConfig.LoopChapterSize),
                    t
            }
            getChapterHeadLevel(e) {
                let t = -1
                    , o = 0
                    , i = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach((n, a) => {
                    e == a && (t = n[0]),
                        n[1] > o && (o = n[1]),
                        a > i && (i = a)
                }
                ),
                    -1 == t && (t = o + (e - i - 1) * a.MConfig.LocalConfig.LoopChapterSize + 1),
                    t
            }
            getChapterTailLevel(e) {
                let t = -1
                    , o = 0
                    , i = 0;
                return a.MConfig.LocalConfig.ChapterMap.forEach((n, a) => {
                    e == a && (t = n[1]),
                        n[1] > o && (o = n[1]),
                        a > i && (i = a)
                }
                ),
                    -1 == t && (t = o + (e - i) * a.MConfig.LocalConfig.LoopChapterSize),
                    t
            }
            getChapterByLevel(e) {
                let t = -1
                    , o = -1
                    , i = -1;
                return a.MConfig.LocalConfig.ChapterMap.forEach((n, a) => {
                    e >= n[0] && e <= n[1] && (t = a),
                        a > o && (o = a),
                        n[1] > i && (i = n[1])
                }
                ),
                    -1 == t ? o + Math.ceil((e - i) / a.MConfig.LocalConfig.LoopChapterSize) : t
            }
            getMaxLevel() {
                let e = -1;
                return a.MConfig.LocalConfig.ChapterMap.forEach(t => {
                    t[1] > e && (e = t[1])
                }
                ),
                    e
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MModel": "MModel",
        "../Manager/MRank": "MRank",
        "../Manager/MTask": "MTask",
        "../Temporary": "Temporary"
    }],
    ModelBlindBox: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "85ad8PZyMFOlaeN2Op1MD5b", "ModelBlindBox"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelBlindBox = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Manager/MData")
            , s = e("../Manager/MEvent")
            , r = e("../Manager/MModel")
            , l = e("../Manager/MToast")
            , c = [5, 6, 7, 8];
        o.ModelBlindBox = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.stage = -1,
                    this.key = -1,
                    this.luckValueList = [],
                    this.displayItems = [],
                    this.blindBoxPrizes = [],
                    this.updateLuckValueCount = 0
            }
            syncConfig(e) {
                e.isToday ? 0 != this.updateLuckValueCount && 0 != this.blindBoxPrizes.length || (this.resetLuckValueList(3),
                    this.resetDisplayItem(),
                    this.resetBlindBoxPrize()) : (this.stage++,
                        0 == this.updateLuckValueCount ? this.resetLuckValueList(3) : this.resetLuckValueList(),
                        this.resetDisplayItem(),
                        this.resetBlindBoxPrize()),
                    -1 == this.stage && (this.stage = 0),
                    -1 == this.key && (this.key = n.MConfig.Config.DefaultBlindBoxKey)
            }
            checkPayKey(e) {
                return this.key >= e
            }
            payKey(e) {
                this.key >= e ? this.key -= e : this.key = 0,
                    s.MEvent.emit(s.EMsg.UpdateKey),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            addKey(e) {
                this.key += e,
                    s.MEvent.emit(s.EMsg.UpdateKey);
                let t = n.MConfig.TableI18n.get(201016)
                    , o = "";
                "cn" == n.MConfig.Language ? o = t.cn : "tc" == n.MConfig.Language ? o = t.tc : "en" != n.MConfig.Language && "pt" != n.MConfig.Language && "vi" != n.MConfig.Language && "id" != n.MConfig.Language || (o = t.en),
                    l.MToast.showToast({
                        title: `${o} x ${e}`
                    }),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            resetLuckValueList(e) {
                this.updateLuckValueCount++,
                    this.luckValueList = [0];
                let t = null != e ? e : c[Math.floor(Math.random() * c.length)]
                    , o = Math.floor(100 / t);
                for (let i = 0; i < t - 1; i++)
                    this.luckValueList.push(i * o + Math.floor(4 * o / 5 + Math.random() * o * 2 / 5));
                this.luckValueList.push(100),
                    s.MEvent.emit(s.EMsg.UpdateLuckyValue)
            }
            resetDisplayItem() {
                this.displayItems = [];
                for (let e = 0; e < 9; e++)
                    this.displayItems[e] = {
                        id: 10001,
                        amount: 1
                    };
                s.MEvent.emit(s.EMsg.ResetBlindBoxDisplay)
            }
            resetBlindBoxPrize() {
                let e = (this.stage - 1) % 7 + 1
                    , t = [...n.MConfig.TableBlindBoxPrize.values()].filter(t => t.stage == e);
                this.blindBoxPrizes = [],
                    t.forEach(e => {
                        this.blindBoxPrizes.push({
                            info: e,
                            extract: !1
                        })
                    }
                    )
            }
            extractPrize() {
                if (r.MModel.NewbieTask.doTask(9),
                    s.MEvent.emit(s.EMsg.ExtractPrize),
                    100 == this.luckValueList[0]) {
                    this.resetLuckValueList();
                    let e = this.blindBoxPrizes.find(e => r.MModel.Hero.checkIsHero(e.info.reward.id));
                    return e.extract = !0,
                        e.info.reward
                }
                {
                    let e = 0;
                    this.blindBoxPrizes.forEach(t => {
                        t.extract || r.MModel.Hero.checkIsHero(t.info.reward.id) || (e += t.info.weight)
                    }
                    );
                    let t = Math.floor(Math.random() * e)
                        , o = 0;
                    for (let i = 0; i < this.blindBoxPrizes.length; i++)
                        if (!this.blindBoxPrizes[i].extract && !r.MModel.Hero.checkIsHero(this.blindBoxPrizes[i].info.reward.id) && t <= (o += this.blindBoxPrizes[i].info.weight))
                            return this.blindBoxPrizes[i].extract = !0,
                                this.addLuckValue(),
                                this.blindBoxPrizes[i].info.reward
                }
            }
            addLuckValue() {
                this.luckValueList.shift(),
                    this.luckValueList.length > 0 && 100 == this.luckValueList[0] && GA.sentLogs([{
                        eventId: "\u7d2f\u79ef\u5e78\u8fd0\u503c100%"
                    }]),
                    s.MEvent.emit(s.EMsg.UpdateLuckyValue)
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MEvent": "MEvent",
        "../Manager/MModel": "MModel",
        "../Manager/MToast": "MToast"
    }],
    ModelChristmas: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2a170TpgApDNrMrGrXvzg4+", "ModelChristmas"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelChristmas = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum");
        o.ModelChristmas = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.reward1Status = n.EReceiveStatus.UnReach,
                    this.reward2Status = n.EReceiveStatus.UnReach,
                    this.reward3Status = n.EReceiveStatus.UnReach
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum"
    }],
    ModelCommon: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "928c0H/RZZBmLwJCQDqp2/x", "ModelCommon"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelCommon = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Temporary");
        o.ModelCommon = class extends i.BaseModel {
            constructor() {
                super(),
                    this.rejectSaveProperties = ["gameDuration"],
                    this.autoMistouchCount = 0,
                    this.gameDuration = 0,
                    this.freeRareBoxCount = 0,
                    this.clickSelectLevel = !1,
                    this.closeAddShortcutCount = 0,
                    this.receiveFreeDiamondCount = 0,
                    this.GooleLogined = !1,
                    this.SentFirstTo5Level = !1,
                    this.SentFirstLackStrength = !1,
                    this.KwaiVideoCheatCount = 0,
                    this.Register = !1,
                    this.ReceiveAddDesktop = !1,
                    setInterval(() => {
                        this.gameDuration++
                    }
                        , 1e3)
            }
            syncConfig(e) {
                e.isToday || (this.autoMistouchCount = 0,
                    this.receiveFreeDiamondCount = 0,
                    this.KwaiVideoCheatCount = 0),
                    "overseas" == n.MConfig.Region && this.GooleLogined && !a.Temporary.GooleLogined && GA.isPlatform(GA.Platform.Android) && (null === AppProxy || void 0 === AppProxy || AppProxy.signInGoogleSilently())
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Temporary": "Temporary"
    }],
    ModelGift: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "23bca174RlALagiEBQGJtg6", "ModelGift"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelGift = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Manager/MEvent")
            , s = e("../Manager/MModel");
        o.ModelGift = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.firstImpulseComplete = !1,
                    this.timeLimitComplete = !1,
                    this.timeLimitStartTime = -1,
                    this.noAd = !1
            }
            syncConfig(e) {
                1 == this.noAd && (GA.Info.withoutRewardVideoAd = !0),
                    -1 == this.timeLimitStartTime && (this.timeLimitStartTime = (new Date).getTime())
            }
            getFirstImpulseReward() {
                this.getGift(n.MConfig.AppProxyConfig.NewFirstImpulse)
            }
            getTimeLimitReward() {
                this.getGift(n.MConfig.AppProxyConfig.NewTimeLimit)
            }
            getPermanentReward(e) {
                switch (e) {
                    case "1":
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_1);
                        break;
                    case "2":
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_2);
                        break;
                    case "3":
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_3)
                }
            }
            getPermanentRewardByGameItemId(e) {
                switch (e) {
                    case 11:
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_1);
                        break;
                    case 12:
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_2);
                        break;
                    case 13:
                        this.getGift(n.MConfig.AppProxyConfig.NewPermanent_3)
                }
            }
            getGift(e) {
                if (e.heroId)
                    if (s.MModel.Hero.checkHeroUnlock(e.heroId)) {
                        let t = [...n.MConfig.TableHeroGrow.values()].find(t => t.heroId == e.heroId && 1 == t.heroLevel);
                        s.MModel.Hero.addMushroom(t.decompose)
                    } else
                        s.MModel.Hero.unlockHero(e.heroId);
                e.coin && s.MModel.Account.addCoin(e.coin),
                    e.strength && s.MModel.Account.addStrength(e.strength),
                    e.gemstone && s.MModel.Account.addGemstone(e.gemstone),
                    e.diamond && s.MModel.Account.addDiamond(e.diamond),
                    e.mushroom && s.MModel.Hero.addMushroom(e.mushroom),
                    e.key && s.MModel.BlindBox.addKey(e.key),
                    "noAd" == e.extra1 && (s.MModel.Gift.noAd = !0,
                        GA.Info.withoutRewardVideoAd = !0,
                        a.MEvent.emit(a.EMsg.NoAd))
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Manager/MEvent": "MEvent",
        "../Manager/MModel": "MModel"
    }],
    ModelGuide: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "bf5342MNbZMCZ0f1A3AQW0O", "ModelGuide"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelGuide = void 0;
        const i = e("../Base/BaseModel");
        o.ModelGuide = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.completeGuideHand = !1,
                    this.completeGuide1 = !1,
                    this.completeGuide2 = !1,
                    this.completeGuide3 = !1,
                    this.completeBlindBoxGuide = !1,
                    this.completeBlindBoxBulleGuide = !1,
                    this.completeHeroOnBattleGuide = !1,
                    this.completeHeroUplevelGuide = !1
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel"
    }],
    ModelHalloween: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1a19ahfUSVCDr9ZHrVO7t+y", "ModelHalloween"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelHalloween = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum");
        o.ModelHalloween = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.reward1Status = n.EReceiveStatus.UnReach,
                    this.reward2Status = n.EReceiveStatus.UnReach,
                    this.reward3Status = n.EReceiveStatus.UnReach
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum"
    }],
    ModelHero: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "97001sTRdBMhI+KE3avYKdh", "ModelHero"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelHero = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Manager/MData")
            , s = e("../Manager/MEvent")
            , r = e("../Manager/MModel")
            , l = e("../Manager/MToast")
            , c = [7001, 7002, 7003, 7004, 7005, 7006, 7007, 7008, 7009, 7010, 7011, 7012];
        o.ModelHero = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.rejectSaveProperties = ["displayHeroId", "displaySkinId"],
                    this.currentHero = {
                        id: -1,
                        level: 1
                    },
                    this.unlockHeros = [],
                    this.unlockSkins = [],
                    this.mushroom = 0,
                    this.displayHeroId = -1,
                    this.displaySkinId = -1
            }
            syncConfig() {
                if (-1 != this.currentHero.id) {
                    let e = this.unlockHeros.find(e => e.id == this.currentHero.id);
                    this.currentHero.level = e.level
                }
                n.MConfig.Debug && (this.mushroom = 999999999)
            }
            afterSyncConfig1() {
                this.unlockHeros.length > 0 && r.MModel.Task.doTask(7, this.unlockHeros.length);
                let e = this.unlockHeros.filter(e => 10 == e.level).length;
                e > 0 && r.MModel.Task.doTask(13, e),
                    [...n.MConfig.TablePass.values()].forEach(e => {
                        var t, o;
                        this.checkIsHero(null === (t = null == e ? void 0 : e.normal) || void 0 === t ? void 0 : t.id) && r.MModel.SummerFunPass.exp >= e.exp && (-1 == r.MModel.SummerFunPass.normalReceivedList.indexOf(e.id) || this.checkHeroUnlock(e.normal.id) || this.unlockHero(e.normal.id)),
                            this.checkIsHero(null === (o = null == e ? void 0 : e.special) || void 0 === o ? void 0 : o.id) && r.MModel.SummerFunPass.exp >= e.exp && (-1 == r.MModel.SummerFunPass.specialReceivedList.indexOf(e.id) || this.checkHeroUnlock(e.special.id) || this.unlockHero(e.special.id))
                    }
                    )
            }
            checkHeroUnlock(e) {
                return !!this.unlockHeros.find(t => t.id == e)
            }
            addMushroom(e) {
                this.mushroom += e;
                let t = n.MConfig.TableI18n.get(201017)
                    , o = "";
                "cn" == n.MConfig.Language ? o = t.cn : "tc" == n.MConfig.Language ? o = t.tc : "en" != n.MConfig.Language && "pt" != n.MConfig.Language && "vi" != n.MConfig.Language && "id" != n.MConfig.Language || (o = t.en),
                    l.MToast.showToast({
                        title: `${o} x ${e}`
                    }),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            checkPayMushroom(e) {
                return this.mushroom >= e
            }
            payMushroom(e) {
                this.mushroom -= e,
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            replaceHero(e) {
                if (this.currentHero = e,
                    -1 != this.displayHeroId && -1 != this.displaySkinId) {
                    let e = this.unlockSkins.find(e => e.heroId == this.currentHero.id);
                    (1 == this.displaySkinId || (null == e ? void 0 : e.skinIds) && -1 != e.skinIds.indexOf(this.displaySkinId)) && this.useSkin(this.displayHeroId, this.displaySkinId)
                }
                s.MEvent.emit(s.EMsg.ReplaceHero, e),
                    s.MEvent.emit(s.EMsg.ShowUplevelGuide),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            uplevelHero(e) {
                let t = this.unlockHeros.find(t => t.id == e);
                t.level < 10 && (t.level++,
                    t.level >= 10 && r.MModel.Task.doTask(13),
                    r.MModel.NewbieTask.doTask(3)),
                    this.currentHero.id == e && (this.currentHero.level = t.level),
                    GA.sentLogs([{
                        eventId: "\u82f1\u96c4\u5347\u7ea7",
                        detail: JSON.stringify({
                            heroId: e
                        })
                    }]),
                    s.MEvent.emit(s.EMsg.UplevelHero, e),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            unlockHero(e) {
                GA.sentLogs([{
                    eventId: "\u89e3\u9501\u82f1\u96c4",
                    detail: JSON.stringify({
                        heroId: e
                    })
                }]),
                    this.unlockHeros.find(t => t.id == e) || (this.unlockHeros.push({
                        id: e,
                        level: 1
                    }),
                        r.MModel.Task.doTask(7)),
                    s.MEvent.emit(s.EMsg.UnlockHero, e),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            unlockSkin(e, t) {
                let o = this.unlockSkins.find(t => t.heroId == e);
                o ? -1 == o.skinIds.indexOf(t) && o.skinIds.push(t) : this.unlockSkins.push({
                    heroId: e,
                    skinIds: [t]
                }),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            useSkin(e, t) {
                this.currentHero.id == e && (this.currentHero.skinId = t);
                let o = this.unlockHeros.find(t => t.id == e);
                o && (o.skinId = t),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
            checkIsSkin(e) {
                return e >= 700101 && e < 8e5
            }
            checkIsHero(e) {
                return e >= 7001 && e < 8e3
            }
            checkIsHeroSkill(e) {
                return e >= 6101 && e < 6199
            }
            checkIsFragmentUnlock(e) {
                return -1 != c.indexOf(e)
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MEvent": "MEvent",
        "../Manager/MModel": "MModel",
        "../Manager/MToast": "MToast"
    }],
    ModelMothersDay: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0252dIa7v9LsbR3+Ax0ly1q", "ModelMothersDay"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelMothersDay = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum");
        o.ModelMothersDay = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.reward1Status = n.EReceiveStatus.UnReach,
                    this.reward2Status = n.EReceiveStatus.UnReach,
                    this.reward3Status = n.EReceiveStatus.UnReach
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum"
    }],
    ModelNewYear: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "093ca0uotJPlLlgwcQ9jz/j", "ModelNewYear"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelNewYear = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum");
        o.ModelNewYear = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.reward1Status = n.EReceiveStatus.UnReach,
                    this.reward2Status = n.EReceiveStatus.UnReach,
                    this.reward3Status = n.EReceiveStatus.UnReach
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum"
    }],
    ModelNewbieTask: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ef143FVG5RKk5bK4q92vBpQ", "ModelNewbieTask"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelNewbieTask = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum")
            , a = e("../Interface/ITask")
            , s = e("../Manager/MConfig")
            , r = e("../Manager/MEvent");
        o.ModelNewbieTask = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.startTime = -1,
                    this.day = 0,
                    this.tasks = []
            }
            syncConfig(e) {
                -1 == this.startTime && (this.startTime = (new Date).getTime()),
                    this.surplusDuration() <= 0 || (s.MConfig.TableNewbieTask.forEach((e, t) => {
                        if (e.tag == a.ETaskTag.NewbieTask)
                            this.tasks.find(e => e.id == t) || this.tasks.push({
                                id: t,
                                day: e.day,
                                tag: a.ETaskTag.NewbieTask,
                                count: 0,
                                receiveStatus: n.EReceiveStatus.UnReach
                            });
                        else if (e.tag == a.ETaskTag.NewbieTaskBox) {
                            let o = this.tasks.find(e => e.id == t);
                            o ? o.count = e.param.ref1 : this.tasks.push({
                                id: t,
                                tag: a.ETaskTag.NewbieTaskBox,
                                count: e.param.ref1,
                                receiveStatus: n.EReceiveStatus.UnReach
                            })
                        }
                    }
                    ),
                        e.isToday || this.day++,
                        this.day > 6 && (this.day = 6),
                        0 == this.day && (this.day = 1),
                        console.log("this.startTime:", this.startTime))
            }
            getTasks(e) {
                let t = [];
                return e.tag == a.ETaskTag.NewbieTask ? t = this.tasks.filter(t => t.tag == e.tag && t.day == e.day) : e.tag == a.ETaskTag.NewbieTaskBox && (t = this.tasks.filter(t => t.tag == e.tag)),
                    e.sort ? t.sort((e, t) => e.receiveStatus == n.EReceiveStatus.UnReceive && t.receiveStatus == n.EReceiveStatus.UnReach || e.receiveStatus == n.EReceiveStatus.UnReceive && t.receiveStatus == n.EReceiveStatus.Received || e.receiveStatus == n.EReceiveStatus.UnReach && t.receiveStatus == n.EReceiveStatus.Received ? -1 : e.receiveStatus == n.EReceiveStatus.UnReceive && t.receiveStatus == n.EReceiveStatus.UnReceive || e.receiveStatus == n.EReceiveStatus.UnReach && t.receiveStatus == n.EReceiveStatus.UnReach || e.receiveStatus == n.EReceiveStatus.Received && t.receiveStatus == n.EReceiveStatus.Received ? 0 : 1) : t
            }
            receiveTaskReward(e) {
                if (e.receiveStatus = n.EReceiveStatus.Received,
                    e.tag == a.ETaskTag.NewbieTask) {
                    let e = 0;
                    this.tasks.forEach(t => {
                        if (t.tag == a.ETaskTag.NewbieTask && t.receiveStatus == n.EReceiveStatus.Received) {
                            let o = s.MConfig.TableNewbieTask.get(t.id);
                            e += o.integral
                        }
                    }
                    ),
                        this.tasks.forEach(t => {
                            t.tag == a.ETaskTag.NewbieTaskBox && t.receiveStatus == n.EReceiveStatus.UnReach && e >= t.count && (t.receiveStatus = n.EReceiveStatus.UnReceive,
                                r.MEvent.emit(r.EMsg.UpdateNewbieTaskBox, t))
                        }
                        )
                }
                return e
            }
            doTask(e, t) {
                this.tasks.forEach(o => {
                    let i = s.MConfig.TableNewbieTask.get(o.id);
                    (null == i ? void 0 : i.type) == e && (t ? o.count += t : o.count++,
                        o.count >= i.param.ref1 && o.receiveStatus == n.EReceiveStatus.UnReach && (o.receiveStatus = n.EReceiveStatus.UnReceive),
                        r.MEvent.emit(r.EMsg.DoNewbieTask, o))
                }
                )
            }
            surplusDuration() {
                return Math.ceil((864e6 - ((new Date).getTime() - this.startTime)) / 1e3)
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum",
        "../Interface/ITask": "ITask",
        "../Manager/MConfig": "MConfig",
        "../Manager/MEvent": "MEvent"
    }],
    ModelPass: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4d744eYc8VOA5fdvrmOxA0L", "ModelPass"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelPass = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MEvent");
        o.ModelPass = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.exp = 0,
                    this.normalReceivedList = [],
                    this.specialReceivedList = []
            }
            receiveNormalReward(e) {
                -1 == this.normalReceivedList.indexOf(e) && this.normalReceivedList.push(e),
                    n.MEvent.emit(n.EMsg.ReceivePassReward)
            }
            receiveSpecialReward(e) {
                -1 == this.specialReceivedList.indexOf(e) && this.specialReceivedList.push(e),
                    n.MEvent.emit(n.EMsg.ReceivePassReward)
            }
            checkNormalReceived(e) {
                return -1 != this.normalReceivedList.indexOf(e)
            }
            checkSpecialReceived(e) {
                return -1 != this.specialReceivedList.indexOf(e)
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MEvent": "MEvent"
    }],
    ModelPause: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "92290zrrgJFRI8HgQvMaSvF", "ModelPause"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelPause = void 0;
        const i = e("../Base/BaseModel");
        o.ModelPause = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.AudioSwitch = "on",
                    this.VibrateSwitch = "on"
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel"
    }],
    ModelSignIn: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ce4a4niFtRB370tEO/j/zac", "ModelSignIn"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelSignIn = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Manager/MConfig")
            , a = e("../Manager/MData")
            , s = e("../Manager/MEvent");
        o.ModelSignIn = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.day = 1,
                    this.isSignIned = !1
            }
            syncConfig(e) {
                this.isSignIned && !e.isToday && (this.isSignIned = !1,
                    this.day++)
            }
            dayInfos() {
                let e = [...n.MConfig.TableSignIn.values()]
                    , t = [];
                return e.find(e => e.day == this.day) ? e.forEach(e => {
                    Math.ceil(e.day / 7) == Math.ceil(this.day / 7) && t.push(e)
                }
                ) : t = e.splice(-7),
                    t
            }
            signin() {
                this.isSignIned = !0,
                    s.MEvent.emit(s.EMsg.SignIn),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && a.MData.save()
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MEvent": "MEvent"
    }],
    ModelStore: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "114fcI4wzVNZbdFwEPd7gpo", "ModelStore"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelStore = void 0;
        const i = e("../Base/BaseModel");
        o.ModelStore = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.freeCoinCount = 0,
                    this.freeStrengthCount = 0,
                    this.freeGemstoneCount = 0
            }
            syncConfig(e) {
                e.isToday || (this.freeCoinCount = 0,
                    this.freeStrengthCount = 0,
                    this.freeGemstoneCount = 0)
            }
            coinContinueFree() {
                return this.freeCoinCount < 5
            }
            strengthContinueFree() {
                return this.freeStrengthCount < 5
            }
            gemstoneContinueFree() {
                return this.freeGemstoneCount < 5
            }
            consumeFreeCoin() {
                this.freeCoinCount++
            }
            consumeFreeStrength() {
                this.freeStrengthCount++
            }
            consumeFreeGemstone() {
                this.freeGemstoneCount++
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel"
    }],
    ModelTask: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9bc2ed4YZZNILz9XQiAdGC/", "ModelTask"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelTask = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum")
            , a = e("../Interface/ITask")
            , s = e("../Manager/MConfig")
            , r = e("../Manager/MData")
            , l = e("../Manager/MEvent");
        o.ModelTask = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.tasks = [{
                        id: 21e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 22e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 23e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 24e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 25e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 26e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 27e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }, {
                        id: 28e3,
                        tag: a.ETaskTag.Achievement,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }]
            }
            syncConfig(e) {
                s.MConfig.TableTask.forEach((e, t) => {
                    e.tag == a.ETaskTag.Daily && (this.tasks.find(e => e.id == t) || this.tasks.push({
                        id: t,
                        tag: a.ETaskTag.Daily,
                        count: 0,
                        receiveStatus: n.EReceiveStatus.UnReach
                    }))
                }
                ),
                    e.isToday || this.tasks.forEach(e => {
                        e.tag == a.ETaskTag.Daily && (e.count = 0,
                            e.receiveStatus = n.EReceiveStatus.UnReach)
                    }
                    ),
                    this.tasks.forEach(e => {
                        if (e.tag == a.ETaskTag.Achievement && e.receiveStatus == n.EReceiveStatus.Received) {
                            let t = s.MConfig.TableTask.get(e.id);
                            if (t.nextId) {
                                let o = s.MConfig.TableTask.get(t.nextId);
                                e.count >= o.param.A ? e.receiveStatus = n.EReceiveStatus.UnReceive : e.receiveStatus = n.EReceiveStatus.UnReach
                            }
                        }
                    }
                    ),
                    setInterval(() => {
                        this.doTask(1)
                    }
                        , 6e4)
            }
            getTasks(e) {
                return this.tasks.filter(t => t.tag == e).sort((e, t) => e.receiveStatus == n.EReceiveStatus.UnReceive || e.receiveStatus == n.EReceiveStatus.UnReach && t.receiveStatus == n.EReceiveStatus.Received || e.receiveStatus == n.EReceiveStatus.UnReach && t.receiveStatus == n.EReceiveStatus.UnReach || e.receiveStatus == n.EReceiveStatus.Received && t.receiveStatus == n.EReceiveStatus.Received ? -1 : 1)
            }
            receiveTaskReward(e) {
                let t = s.MConfig.TableTask.get(e.id);
                if (t.nextId) {
                    e.id = t.nextId;
                    let o = s.MConfig.TableTask.get(e.id);
                    e.count >= o.param.A ? e.receiveStatus = n.EReceiveStatus.UnReceive : e.receiveStatus = n.EReceiveStatus.UnReach
                } else
                    e.receiveStatus = n.EReceiveStatus.Received;
                return l.MEvent.emit(l.EMsg.TaskChange),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && r.MData.save(),
                    e
            }
            doTask(e, t) {
                this.tasks.forEach(o => {
                    let i = s.MConfig.TableTask.get(o.id);
                    (null == i ? void 0 : i.type) == e && (t ? o.count = t : o.count++,
                        o.count >= i.param.A && o.receiveStatus == n.EReceiveStatus.UnReach && (o.receiveStatus = n.EReceiveStatus.UnReceive),
                        l.MEvent.emit(l.EMsg.DoTask, o),
                        l.MEvent.emit(l.EMsg.TaskChange))
                }
                ),
                    GA.isPlatform([GA.Platform.Hago, GA.Platform.WeiYouH5]) && r.MData.save()
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum",
        "../Interface/ITask": "ITask",
        "../Manager/MConfig": "MConfig",
        "../Manager/MData": "MData",
        "../Manager/MEvent": "MEvent"
    }],
    ModelThanksgiving: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9edb9b8iHlO4pMvxG5VDlW3", "ModelThanksgiving"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ModelThanksgiving = void 0;
        const i = e("../Base/BaseModel")
            , n = e("../Enum");
        o.ModelThanksgiving = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.reward1Status = n.EReceiveStatus.UnReach,
                    this.reward2Status = n.EReceiveStatus.UnReach,
                    this.reward3Status = n.EReceiveStatus.UnReach
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel",
        "../Enum": "Enum"
    }],
    NavigateAd: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d00044MECVHpb47pS3s1j5a", "NavigateAd");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("./Manager/MConfig")
            , a = e("./Manager/MEvent")
            , s = e("./Manager/MModel")
            , r = e("./Temporary");
        var l = "";
        const { ccclass: c, property: d } = cc._decorator;
        let u = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.adSprite = null,
                    this.btnLookAdNode = null,
                    this.navigateAd = null,
                    this.adId = "",
                    this.lx = 0,
                    this.rx = 0,
                    this.reportAdShow = !1
            }
            onEnable() {
                a.MEvent.on(a.EMsg.VideoToNavigate, () => {
                    this.btnAdLook()
                }
                    , this),
                    r.Temporary.navigateAdShowCount++,
                    r.Temporary.navigateAdTmShowCount++,
                    r.Temporary.clickCloseNavigateAdCount = 0;
                let e = 0;
                a.MEvent.once(a.EmsgNavigate.Extra, e => {
                    "right" == e ? this.btnLookAdNode.x = this.lx : "left" == e && (this.btnLookAdNode.x = this.rx)
                }
                    , this),
                    GA.isPlatform([GA.Platform.OPPO, GA.Platform.Vivo]) && (GA.isPlatform(GA.Platform.OPPO) ? l = "342827" : GA.isPlatform(GA.Platform.Vivo) && (l = "23b2bb3fed074d069b977826b5846fb0"),
                        this.navigateAd = GA.PA.createNativeAd({
                            adUnitId: l
                        }));
                let t = !1;
                GA.isPlatform([GA.Platform.OPPO, GA.Platform.Vivo]) ? (this.navigateAd.onLoad(o => {
                    if (t = !0,
                        o.adList.length > 0) {
                        let e = o.adList[Math.floor(Math.random() * o.adList.length)];
                        this.adId = e.adId;
                        let t = e.imgUrlList
                            , i = t[Math.floor(Math.random() * t.length)];
                        console.log("imgUrl:", i);
                        let n = ""
                            , a = "";
                        -1 != i.indexOf(".png") ? (a = ".png",
                            n = i.split(a)[0] + a) : -1 != i.indexOf(".jpg") ? (a = ".jpg",
                                n = i.split(a)[0] + a) : (a = ".png",
                                    n = i),
                            console.log("url:", n),
                            cc.assetManager.loadRemote(n, {
                                ext: a,
                                cacheEnabled: !1
                            }, (e, t) => {
                                e ? console.error(e) : this.adSprite.spriteFrame = new cc.SpriteFrame(t)
                            }
                            ),
                            r.Temporary.hasNavigateAd = !0
                    }
                    0 == e && (e++,
                        GA.isPlatform(GA.Platform.OPPO) ? Math.random() > .5 ? (this.btnLookAdNode.x = 0,
                            a.MEvent.emit(a.EmsgNavigate.GoLook, "right")) : (this.btnLookAdNode.x = 0,
                                a.MEvent.emit(a.EmsgNavigate.GoLook, "left")) : GA.isPlatform(GA.Platform.Vivo) && a.MEvent.emit(a.EmsgNavigate.GoLook, "center")),
                        this.adSprite.node.active = !0,
                        GA.isPlatform(GA.Platform.OPPO) ? this.btnLookAdNode.active = !0 : GA.isPlatform(GA.Platform.Vivo) && (this.btnLookAdNode.active = !1),
                        this.reportAdShow = !1,
                        r.Temporary.navigateAdShowCount % n.MConfig.Config.ReportNavigateAdRatio == 0 && (this.reportAdShow = !0,
                            console.log("\u4e0a\u62a5\u539f\u751f\u5e7f\u544a\u663e\u793a"),
                            this.navigateAd.reportAdShow({
                                adId: this.adId
                            })),
                        !GA.Info.underCheck && !n.MConfig.BlackCity && n.MConfig.Config.SwitchAutoMistouch && s.MModel.Common.autoMistouchCount < n.MConfig.Config.MaxAutoMistouch && r.Temporary.navigateAdTmShowCount >= n.MConfig.Config.AutoMistouchRatio && (s.MModel.UserData.newUser && s.MModel.Common.gameDuration > n.MConfig.Config.NewPlayerNAdPd || !s.MModel.UserData.newUser && s.MModel.Common.gameDuration > n.MConfig.Config.OldPlayerNAdPd) && this.scheduleOnce(() => {
                            s.MModel.Common.autoMistouchCount++,
                                this.btnAdLook(),
                                console.log("\u89e6\u53d1autoMistouch!")
                        }
                            , 1 + 2 * Math.random())
                }
                ),
                    this.navigateAd.onError(e => {
                        t || a.MEvent.emit(a.EmsgNavigate.Error),
                            console.log(e)
                    }
                    ),
                    this.navigateAd.load()) : GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO && GA.PA.loadOppoNativeAd(o => {
                        t = !0,
                            this.adId = o.id;
                        let i = o.imageUrl;
                        console.log("imgUrl:", i);
                        let l = ""
                            , c = "";
                        -1 != i.indexOf(".png") ? (c = ".png",
                            l = i.split(c)[0] + c) : -1 != i.indexOf(".jpg") ? (c = ".jpg",
                                l = i.split(c)[0] + c) : -1 != i.indexOf(".jpeg") && (c = ".jpeg",
                                    l = i.split(c)[0] + c),
                            cc.assetManager.loadRemote(l, {
                                ext: c,
                                cacheEnabled: !1
                            }, (e, t) => {
                                e ? console.error(e) : this.adSprite.spriteFrame = new cc.SpriteFrame(t)
                            }
                            ),
                            0 == e && (e++,
                                Math.random() > .5 ? (this.btnLookAdNode.x = 0,
                                    a.MEvent.emit(a.EmsgNavigate.GoLook, "right")) : (this.btnLookAdNode.x = 0,
                                        a.MEvent.emit(a.EmsgNavigate.GoLook, "left"))),
                            this.adSprite.node.active = !0,
                            this.btnLookAdNode.active = !0;
                        let d = !1;
                        r.Temporary.navigateAdShowCount % n.MConfig.Config.ReportNavigateAdRatio == 0 && (!0,
                            console.log("\u4e0a\u62a5\u539f\u751f\u5e7f\u544a\u663e\u793a"),
                            GA.PA.reportOppoNativeAdShow(this.adId)),
                            n.MConfig.Config.SwitchAutoMistouch && s.MModel.Common.autoMistouchCount < n.MConfig.Config.MaxAutoMistouch && r.Temporary.navigateAdTmShowCount >= n.MConfig.Config.AutoMistouchRatio && (s.MModel.UserData.newUser && s.MModel.Common.gameDuration > n.MConfig.Config.NewPlayerNAdPd || !s.MModel.UserData.newUser && s.MModel.Common.gameDuration > n.MConfig.Config.OldPlayerNAdPd) && this.scheduleOnce(() => {
                                s.MModel.Common.autoMistouchCount++,
                                    this.btnAdLook(),
                                    console.log("\u89e6\u53d1autoMistouch!")
                            }
                                , 1 + 2 * Math.random())
                    }
                    )
            }
            btnAdLook() {
                GA.isPlatform([GA.Platform.OPPO, GA.Platform.Vivo]) ? (this.reportAdShow || this.navigateAd.reportAdShow({
                    adId: this.adId
                }),
                    this.navigateAd.reportAdClick({
                        adId: this.adId
                    }),
                    this.navigateAd.load()) : GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO && (this.reportAdShow || GA.PA.reportOppoNativeAdShow(this.adId),
                        GA.PA.reportOppoNativeAdClick(this.adId)),
                    r.Temporary.navigateAdTmShowCount = 0
            }
            btnClose() {
                r.Temporary.clickCloseNavigateAdCount++,
                    GA.Info.underCheck || n.MConfig.BlackCity || 1 != r.Temporary.clickCloseNavigateAdCount || !n.MConfig.Config.FirstCloseShowNavigateAd ? (this.adSprite.node.active = !1,
                        this.btnLookAdNode.active = !1,
                        a.MEvent.emit(a.EmsgNavigate.Center)) : this.btnAdLook()
            }
            onDisable() {
                this.unscheduleAllCallbacks(),
                    a.MEvent.targetOff(this);
                try {
                    this.navigateAd && this.navigateAd.destroy && this.navigateAd.destroy()
                } catch (e) { }
                if (this.adSprite.node.active = !1,
                    this.btnLookAdNode.active = !1,
                    GA.isPlatform(GA.Platform.Android) && GA.Info.distributionChannel == GA.DistributionChannel.OPPO)
                    try {
                        GA.PA.destroyOppoNativeAd(this.adId)
                    } catch (e) { }
                r.Temporary.hasNavigateAd = !1
            }
        }
            ;
        i([d(cc.Sprite)], u.prototype, "adSprite", void 0),
            i([d(cc.Node)], u.prototype, "btnLookAdNode", void 0),
            i([d], u.prototype, "lx", void 0),
            i([d], u.prototype, "rx", void 0),
            u = i([c], u),
            o.default = u,
            cc._RF.pop()
    }
        , {
        "./Manager/MConfig": "MConfig",
        "./Manager/MEvent": "MEvent",
        "./Manager/MModel": "MModel",
        "./Temporary": "Temporary"
    }],
    OnEnginLaunch: [function (e, t) {
        "use strict";
        cc._RF.push(t, "95bb0ZJUSZPkrSGyfxXjmFw", "OnEnginLaunch"),
            cc.game.on(cc.game.EVENT_GAME_INITED, () => {
                cc.macro.ENABLE_MULTI_TOUCH = !1
            }
            ),
            cc._RF.pop()
    }
        , {}],
    Rsv: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "6da948if9NNC56gnyzE63yU", "Rsv");
        var i = this && this.__decorate || function (e, t, o, i) {
            var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, i);
            else
                for (var r = e.length - 1; r >= 0; r--)
                    (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
            return a > 3 && s && Object.defineProperty(t, o, s),
                s
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("./Enum")
            , a = e("./Manager/MAd")
            , { ccclass: s, property: r } = cc._decorator;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.tag = "",
                    this.spVideo = null,
                    this.spShare = null
            }
            onEnable() {
                GA.Info.withoutRewardVideoAd ? this.getComponent(cc.Sprite).spriteFrame = null : this.check()
            }
            check() {
                a.MAd.checkRsv(this.tag) == n.ERsv.Video ? this.getComponent(cc.Sprite).spriteFrame = this.spVideo : this.getComponent(cc.Sprite).spriteFrame = this.spShare
            }
        }
            ;
        i([r], l.prototype, "tag", void 0),
            i([r(cc.SpriteFrame)], l.prototype, "spVideo", void 0),
            i([r(cc.SpriteFrame)], l.prototype, "spShare", void 0),
            l = i([s], l),
            o.default = l,
            cc._RF.pop()
    }
        , {
        "./Enum": "Enum",
        "./Manager/MAd": "MAd"
    }],
    Skill: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "fca7aXATN9Gsav3hFZGi8ev", "Skill"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            cc._RF.pop()
    }
        , {}],
    Temporary: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "08a57ZDRTJN5pgMICOmBVAb", "Temporary"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.Temporary = void 0;
        const i = e("./Enum");
        o.Temporary = new class {
            constructor() {
                this.GooleLogined = !1,
                    this.playGameCount = 0,
                    this.navigateAdShowCount = 0,
                    this.navigateAdTmShowCount = 0,
                    this.lastLevel = -1,
                    this.preloaded = !1,
                    this.battleStatus = i.EBattleStatus.Ready,
                    this.reachOverCount = 0,
                    this.clickCloseNavigateAdCount = 0,
                    this.LastShowInterstitialAdTime = -1,
                    this.LastShowFullScreenVideoAdTime = -1,
                    this.clipVideoPath = "",
                    this.closeVideoTime = -1,
                    this.loadSceneLoaded = !1,
                    this.videoID = -1,
                    this.screenshot = "",
                    this.AISpeedAdd = 0,
                    this.completeTask = !1,
                    this.gamutFinish = !1,
                    this.continueWinCount = 0,
                    this.SycnData = !1,
                    this.RemoteConfig_SkuIds = !1,
                    this.LoadedSkuDetail = !1,
                    this.normalContinueWin = 0,
                    this.infernalContinueWin = 0,
                    this.normalContinueLose = 0,
                    this.infernalContinueLose = 0,
                    this.recordingScreenFunc = !1,
                    this.cnTips = ["\u5360\u9886\u5168\u90e8\u5efa\u7b51\u624d\u53ef\u4ee5\u53d6\u5f97\u80dc\u5229\u54e6~", "1\u6761\u8fde\u7ebf\u53ef\u4ee5\u63d0\u4f9b\u66f4\u5feb\u7684\u51fa\u51fb\u901f\u5ea6\u54e6\uff01", "\u591a\u6761\u8fde\u7ebf\u51fa\u51fb\u7684\u58eb\u5175\u603b\u91cf\u4f1a\u66f4\u591a\u54e6\uff01", "\u5c1d\u8bd5\u4e0d\u540c\u7684\u5f00\u5c40\u65b9\u5f0f\u4f1a\u6709\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c~ ", "\u5931\u8d25\u65f6\u53ef\u4ee5\u8bd5\u8bd5\u66f4\u6362\u82f1\u96c4\u8fdb\u884c\u6218\u6597\uff01"],
                    this.tcTips = ["\u4f54\u9818\u5168\u90e8\u5efa\u7bc9\u624d\u53ef\u4ee5\u53d6\u5f97\u52dd\u5229\u54e6~ ", "1\u689d\u9023\u7dda\u53ef\u4ee5\u63d0\u4f9b\u66f4\u5feb\u7684\u51fa\u64ca\u901f\u5ea6\u54e6\uff01", "\u591a\u689d\u9023\u7dda\u51fa\u64ca\u7684\u58eb\u5175\u7e3d\u91cf\u6703\u66f4\u591a\u54e6\uff01", "\u5617\u8a66\u4e0d\u540c\u7684\u958b\u5c40\u65b9\u5f0f\u6703\u6709\u610f\u60f3\u4e0d\u5230\u7684\u7d50\u679c~ ", "\u5931\u6557\u6642\u53ef\u4ee5\u8a66\u8a66\u66f4\u63db\u82f1\u96c4\u9032\u884c\u6230\u9b25\uff01"],
                    this.enTips = ["Occupy all the buildings to win the victory~", " One connection can provide faster attack speed!", "There will be more soldiers attacking through multiple connections!", "Different opening methods for levels will have unexpected results~", " If you fail, you can try to change the hero to fight!"],
                    this.uvSpeed = 0,
                    this.RewardDoubleHide = !1,
                    this.hasNavigateAd = !1,
                    this.levelShowVideo = !1
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "./Enum": "Enum"
    }],
    Urls: [function (e, t) {
        "use strict";
        cc._RF.push(t, "90d7c8WPaBJnZT/8b/WyLku", "Urls"),
            window.Urls = new class {
                constructor() {
                    this.platform_url = "https://game.17tcw.com/default/",
                        this.url_getSomeRobots = "https://game.17tcw.com/game/extra/getSomeRobots2",
                        this.url_reqLogin = "",
                        this.url_reqConfig = "",
                        this.url_reqGetUser = "",
                        this.url_reqSaveUser = "",
                        this.url_list = "",
                        this.url_confirm = "",
                        this.url_getGameConfig = "",
                        this.url_saveRank = "",
                        this.url_reqRank = "",
                        this.url_saveMatchRank = "",
                        this.url_reqMatchRank = "",
                        this.url_getExcelConfigs = "",
                        this.url_getCity = "",
                        this.url_getStatus = "",
                        this.url_banUser = "",
                        this.url_subscribe = "",
                        this.url_sendDelayMsg = "",
                        this.url_cancelDelayMsg = "",
                        this.url_getHeadIcon = "",
                        this.url_checkExchangeCode = "",
                        this.url_exchangeCode = "",
                        this.url_getPayResult = "",
                        this.url_confirmPurchase = "",
                        this.url_createTransaction = "",
                        this.url_reqLogin = this.platform_url + "login/reqLogin",
                        this.url_reqConfig = this.platform_url + "extra/getNewConfigs",
                        this.url_reqGetUser = this.platform_url + "game/reqGetUser",
                        this.url_reqSaveUser = this.platform_url + "gameV2/reqSaveUser",
                        this.url_list = this.platform_url + "redirect/list",
                        this.url_confirm = this.platform_url + "redirect/confirm",
                        this.url_getGameConfig = this.platform_url + "extraPpxns/getGameConfig",
                        this.url_saveRank = this.platform_url + "lobby/saveRank",
                        this.url_reqRank = this.platform_url + "lobby/reqRank",
                        this.url_saveMatchRank = this.platform_url + "matchRank/saveRank",
                        this.url_reqMatchRank = this.platform_url + "matchRank/reqRank",
                        this.url_getExcelConfigs = this.platform_url + "extra/getExcelConfigs",
                        this.url_getCity = this.platform_url + "ip/getCity",
                        this.url_getStatus = this.platform_url + "dgfyClick/getStatus",
                        this.url_banUser = this.platform_url + "dgfyClick/banUser",
                        this.url_subscribe = this.platform_url + "msg/subscribe",
                        this.url_sendDelayMsg = this.platform_url + "msg/sendDelayMsg",
                        this.url_cancelDelayMsg = this.platform_url + "msg/cancelDelayMsg",
                        this.url_getHeadIcon = this.platform_url + "robot/getHeadIcon",
                        this.url_checkExchangeCode = this.platform_url + "fun/checkExchangeCode",
                        this.url_exchangeCode = this.platform_url + "fun/exchangeCode",
                        this.url_getPayResult = this.platform_url + "Hago/GetPayResult/v1",
                        this.url_confirmPurchase = this.platform_url + "Hago/ConfirmPurchase/v1",
                        this.url_createTransaction = this.platform_url + "Hago/CreateTransaction/v1"
                }
            }
            ,
            cc._RF.pop()
    }
        , {}],
    UserData: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3d94fGzYAhBrazfSY7g/2AE", "UserData"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.UserData = void 0;
        const i = e("../Base/BaseModel");
        o.UserData = class extends i.BaseModel {
            constructor() {
                super(...arguments),
                    this.rejectSaveProperties = ["dayNewUser", "dayFirstLogin"],
                    this.dayNewUser = !0,
                    this.dayFirstLogin = !0,
                    this.newUser = !0,
                    this.registTime = 0,
                    this.loginTime = 0,
                    this.quitTime = 0,
                    this.autoNavigateCount = 0,
                    this.saveAppToDesktop = !1,
                    this.playGameCount = 0,
                    this.dayPlayGameCount = 0,
                    this.subscribeOfflineId = ""
            }
            syncConfig(e) {
                e.isToday ? this.dayFirstLogin = !1 : (this.autoNavigateCount = 0,
                    this.dayFirstLogin = !0,
                    this.dayPlayGameCount = 0)
            }
            checkNewbieTask() {
                return this.registTime >= 1646892254604
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../Base/BaseModel": "BaseModel"
    }],
    Utils: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b017cHmeNxOm4oafWBwRKSg", "Utils");
        const o = window.Utils = new class {
            constructor() {
                this.chnNumChar = ["\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d"],
                    this.chnUnitSection = ["", "\u4e07", "\u4ebf", "\u4e07\u4ebf", "\u4ebf\u4ebf"],
                    this.tcChnUnitSection = ["", "\u842c", "\u5104", "\u842c\u5104", "\u5104\u5104"],
                    this.chnUnitChar = ["", "\u5341", "\u767e", "\u5343"]
            }
            getNavigateGame(e) {
                let t = {
                    id: 0,
                    appid: "",
                    name: "",
                    is_open_code: !1,
                    path: "",
                    icon: "",
                    qr_code: ""
                };
                return e && (null != e.redirectId && (t.id = e.redirectId),
                    null != e.appid && (t.appid = e.appid),
                    null != e.name && (t.name = e.name),
                    null != e.is_open_code && (t.is_open_code = e.is_open_code),
                    null != e.path && (t.path = e.path),
                    null != e.icon && (t.icon = e.icon),
                    null != e.qr_code && (t.qr_code = e.qr_code)),
                    t
            }
            navigateToMiniProgram(e, t, o, i) {
                GA.PA.navigateToMiniProgram({
                    appId: t.appid,
                    pkgName: t.appid,
                    path: t.path,
                    success: () => {
                        GA.saveRedirect(e, t),
                            o && o()
                    }
                })
            }
            rgbToHex(e, t, o) {
                let i = (e << 16 | t << 8 | o).toString(16);
                return "#" + new Array(Math.abs(i.length - 7)).join("0") + i
            }
            hexToRgb(e) {
                let t = [];
                for (let o = 1; o < 7; o += 2)
                    t.push(parseInt("0x" + e.slice(o, o + 2)));
                return cc.color(t[0], t[1], t[2])
            }
            getTimeDHMS(e) {
                if (null == e)
                    return "";
                {
                    let t = Math.floor(e / 86400)
                        , i = Math.floor(e % 86400 / 3600)
                        , n = Math.floor(e % 3600 / 60)
                        , a = Math.floor(e % 3600 % 60);
                    return `${t}d ${o.prefixZero(i, 2)}:${o.prefixZero(n, 2)}:${o.prefixZero(a, 2)}`
                }
            }
            getTimeHMS(e) {
                if (null == e)
                    return "";
                {
                    let t = Math.floor(e / 3600)
                        , i = Math.floor(e % 3600 / 60)
                        , n = Math.floor(e % 3600 % 60);
                    return `${o.prefixZero(t, 2)}:${o.prefixZero(i, 2)}:${o.prefixZero(n, 2)}`
                }
            }
            getTimeMS(e) {
                if (null == e)
                    return "";
                {
                    let t = Math.floor(e / 60)
                        , i = Math.floor(e % 60);
                    return `${t < 10 ? o.prefixZero(t, 2) : t}:${o.prefixZero(i, 2)}`
                }
            }
            prefixZero(e, t) {
                return (Array(t).join("0") + e).slice(-t)
            }
            copy(e) {
                return "object" != typeof e ? e : Array.isArray(e) ? this.copyArray(e) : this.copyObject(e)
            }
            copyArray(e) {
                let t = [];
                return Array.isArray(e) && e.forEach(e => {
                    "object" == typeof e ? Array(e) ? t.push(this.copyArray(e)) : t.push(this.copy(e)) : t.push(e)
                }
                ),
                    t
            }
            copyObject(e) {
                let t = new Object;
                for (var o in e)
                    t[o] = e[o];
                return t
            }
            formatNumber(e) {
                return e < Math.pow(10, 8) ? this.wan(e) : e < Math.pow(10, 16) ? this.wan(e / Math.pow(10, 8)) + "\u4ebf" : e < Math.pow(10, 24) ? this.wan(e / Math.pow(10, 16)) + "\u5146" : e < Math.pow(10, 32) ? this.wan(e / Math.pow(10, 24)) + "\u4eac" : e < Math.pow(10, 40) ? this.wan(e / Math.pow(10, 32)) + "\u5793" : e < Math.pow(10, 48) ? this.wan(e / Math.pow(10, 40)) + "\u79ed" : e < Math.pow(10, 56) ? this.wan(e / Math.pow(10, 48)) + "\u7a70" : e < Math.pow(10, 64) ? this.wan(e / Math.pow(10, 56)) + "\u6c9f" : e < Math.pow(10, 72) ? this.wan(e / Math.pow(10, 64)) + "\u6da7" : e < Math.pow(10, 80) ? this.wan(e / Math.pow(10, 72)) + "\u6b63" : e < Math.pow(10, 88) ? this.wan(e / Math.pow(10, 80)) + "\u8f7d" : e < Math.pow(10, 96) ? this.wan(e / Math.pow(10, 88)) + "\u6781" : "\u65e0\u7a77\u5927"
            }
            wan(e) {
                if (e < Math.pow(10, 4)) {
                    if (parseInt(e.toString()) == parseFloat(e.toString()))
                        return e + "";
                    {
                        let t = e.toFixed(1);
                        return parseInt(t) == parseFloat(t) ? e.toFixed(0) : t
                    }
                }
                {
                    let t = (e / Math.pow(10, 4)).toFixed(1);
                    return parseInt(t) == parseFloat(t) ? (e / Math.pow(10, 4)).toFixed(0) + "\u4e07" : t + "\u4e07"
                }
            }
            scientificToNumber(e) {
                var t;
                return Math.abs(e) < 1 ? (t = parseInt(e.toString().split("e-")[1])) && (e *= Math.pow(10, t - 1),
                    e = "0." + new Array(t).join("0") + e.toString().substring(2)) : (t = parseInt(e.toString().split("+")[1])) > 20 && (t -= 20,
                        e /= Math.pow(10, t),
                        e += new Array(t + 1).join("0")),
                    e
            }
            genUid(e, t) {
                let o = null != e ? e : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                    , i = null != t ? t : 30
                    , n = o.length
                    , a = [];
                for (let s = 0; s < i; s++)
                    a[s] = o.charAt(Math.random() * n);
                return a.join("")
            }
            genSerialnum() {
                return parseInt(this.genUid("123456789", 20))
            }
            enumValue(e, t) {
                for (const o in e)
                    if (o == t || o == t.toString() || o.includes(t.toString()))
                        return e[o]
            }
            screenSize() {
                let e = cc.view.getVisibleSize().height
                    , t = cc.view.getVisibleSize().width;
                return e > t ? e / t >= 2 ? "l" : e / t > 1.776 ? "m" : "s" : t / e >= 2 ? "l" : t / e >= 1.775 ? "m" : "s"
            }
            numberToChinese(e) {
                let t = cc.sys.languageCode;
                var o = 0
                    , i = ""
                    , n = ""
                    , a = !1;
                if (0 === e)
                    return this.chnNumChar[0];
                for (; e > 0;) {
                    var s = e % 1e4;
                    a && (n = this.chnNumChar[0] + n),
                        i = this.sectionToChinese(s),
                        -1 != t.indexOf("zh-cn") || -1 != t.indexOf("zh_cn") || "zh" == t ? i += 0 !== s ? this.chnUnitSection[o] : this.chnUnitSection[0] : i += 0 !== s ? this.tcChnUnitSection[o] : this.tcChnUnitSection[0],
                        n = i + n,
                        a = s < 1e3 && s > 0,
                        e = Math.floor(e / 1e4),
                        o++
                }
                return n
            }
            sectionToChinese(e) {
                for (var t = "", o = "", i = 0, n = !0; e > 0;) {
                    var a = e % 10;
                    0 === a ? n || (n = !0,
                        o = this.chnNumChar[a] + o) : (n = !1,
                            t = this.chnNumChar[a],
                            o = (t += this.chnUnitChar[i]) + o),
                        i++,
                        e = Math.floor(e / 10)
                }
                return o
            }
            intervalDay(e) {
                return Math.floor(Date.now() / 864e5) - Math.floor(e / 864e5)
            }
            getItem(e) {
                return cc.sys.localStorage.getItem(e)
            }
            setItem(e, t) {
                cc.sys.localStorage.setItem(e, t)
            }
        }
            ;
        cc._RF.pop()
    }
        , {}],
    hagosdk: [function (require, module, exports) {
        "use strict";
        cc._RF.push(module, "2ee0aHnfBdNX4vf8KUvPjkq", "hagosdk"),
            function (e, t) {
                for (var o in t)
                    e[o] = t[o]
            }(window, function (e) {
                var t = {};
                function o(i) {
                    if (t[i])
                        return t[i].exports;
                    var n = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(n.exports, n, n.exports, o),
                        n.l = !0,
                        n.exports
                }
                return o.m = e,
                    o.c = t,
                    o.d = function (e, t, i) {
                        o.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: i
                        })
                    }
                    ,
                    o.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                    }
                    ,
                    o.t = function (e, t) {
                        if (1 & t && (e = o(e)),
                            8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var i = Object.create(null);
                        if (o.r(i),
                            Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: e
                            }),
                            2 & t && "string" != typeof e)
                            for (var n in e)
                                o.d(i, n, function (t) {
                                    return e[t]
                                }
                                    .bind(null, n));
                        return i
                    }
                    ,
                    o.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        }
                            : function () {
                                return e
                            }
                            ;
                        return o.d(t, "a", t),
                            t
                    }
                    ,
                    o.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    o.p = "/dist/",
                    o(o.s = 62)
            }([function (e, t, o) {
                o(49),
                    o(40),
                    o(51);
                var i = o(3);
                function n(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                function a(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var i = t[o];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                var s = new (function () {
                    function e() {
                        var t = this;
                        n(this, e),
                            console.log("hg.App constructor"),
                            this.asyncId = 1e5,
                            this.asyncCallbacks = {},
                            this.listeners = {},
                            window.yyrt ? (this.code = this.sync("hg.code"),
                                this.openid = this.sync("hg.openid"),
                                this.gameId = this.sync("hg.gameId"),
                                this.uid = this.sync("hg.uid"),
                                this.host = this.sync("hg.apiHost"),
                                this.roomId = this.sync("hg.roomId") || "",
                                this.gameUrl = this.sync("hg.gameUrl") || "",
                                this.imageResizeParam = this.sync("hg.imageResizeParam") || "",
                                this.userInfo = JSON.parse(this.sync("hg.getUserInfo")),
                                this.userInfo.openid = this.openid,
                                this.userInfo.avatarUrl = this.resizeImage(this.userInfo.avatarUrl),
                                this.systemInfo = JSON.parse(this.sync("hg.getSystemInfoSync")),
                                this.gameInviteInfo = this.sync("hg.gameInviteInfo") || "",
                                console.log("hg.App code:" + this.code),
                                console.log("hg.App hg.openid:" + this.openid),
                                i.a.setHost(this.host),
                                console.log("hg.App apiHost:" + this.host),
                                window.addEventListener("onReceiveMessageFromApp", function (e) {
                                    var o = e.appMsgObj
                                        , i = o.type
                                        , n = o.msgObj
                                        , a = o.tag;
                                    if (console.log("hg onReceiveMessageFromApp: " + i + ", tag:" + a + ",msgObj:" + JSON.stringify(n)),
                                        t.asyncCallbacks[a]) {
                                        if (n.jsonData) {
                                            var s = JSON.parse(n.jsonData);
                                            t.asyncCallbacks[a].callback(s, i)
                                        } else
                                            t.asyncCallbacks[a].callback(n, i);
                                        t.asyncCallbacks[a] && !t.asyncCallbacks[a].keep && delete t.asyncCallbacks[a]
                                    }
                                    if (t.listeners[i]) {
                                        var r = {};
                                        n.jsonData && (r = JSON.parse(n.jsonData)),
                                            t.listeners[i](r, i)
                                    }
                                })) : (this.imageResizeParam = "",
                                    console.log("hagosdk web environment "))
                    }
                    var t, o;
                    return t = e,
                        (o = [{
                            key: "getFriendUids",
                            value: function (e) {
                                var t = this;
                                this.friendUids ? e(this.friendUids) : this.async("hg.friendUids", null, function (o) {
                                    t.friendUids = JSON.parse(o.uids),
                                        console.log("hg.friendUids:" + JSON.stringify(t.friendUids)),
                                        e(t.friendUids)
                                })
                            }
                        }, {
                            key: "listen",
                            value: function (e, t) {
                                this.listeners[e] = t
                            }
                        }, {
                            key: "cancelListen",
                            value: function () {
                                delete this.listeners.type
                            }
                        }, {
                            key: "sync",
                            value: function (e, t, o) {
                                var i = window.yyrt.sendMessageToAppSync(e, t, o);
                                return console.log("hg yyrt.sendMessageToAppSync " + e + ",result:" + i),
                                    i
                            }
                        }, {
                            key: "syncV1",
                            value: function (e, t, o) {
                                t = {
                                    jsondata: JSON.stringify(t),
                                    version: 1
                                },
                                    this.sync(e, t, o)
                            }
                        }, {
                            key: "async",
                            value: function (e, t, o, i) {
                                if (this.asyncId++,
                                    o) {
                                    var n = {
                                        callback: o,
                                        keep: i
                                    };
                                    this.asyncCallbacks[this.asyncId] = n
                                }
                                return console.log("hg yyrt.sendMessageToAppAsync " + e + ",tag:" + this.asyncId),
                                    window.yyrt && window.yyrt.sendMessageToApp(e, t, this.asyncId),
                                    this.asyncId
                            }
                        }, {
                            key: "asyncV1",
                            value: function (e, t, o, i) {
                                t = {
                                    jsondata: JSON.stringify(t),
                                    version: 1
                                },
                                    this.async(e, t, o, i)
                            }
                        }, {
                            key: "deleteCallbackById",
                            value: function (e) {
                                delete this.asyncCallbacks[e]
                            }
                        }, {
                            key: "resizeImage",
                            value: function (e) {
                                return e && -1 == e.indexOf("?") && (e += this.imageResizeParam,
                                    console.log("hagosdk resizeImage " + e)),
                                    e
                            }
                        }]) && a(t.prototype, o),
                        e
                }());
                t.a = s
            }
                , function (e, t, o) {
                    var i = o(34)("wks")
                        , n = o(17)
                        , a = o(2).Symbol
                        , s = "function" == typeof a;
                    (e.exports = function (e) {
                        return i[e] || (i[e] = s && a[e] || (s ? a : n)("Symbol." + e))
                    }
                    ).store = i
                }
                , function (e) {
                    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("", "return this")();
                    "number" == typeof __g && (__g = t)
                }
                , function (e, t) {
                    var o = function (e, t) {
                        var o = new XMLHttpRequest;
                        o.onreadystatechange = function () {
                            if (4 == o.readyState)
                                if (200 == o.status) {
                                    var e;
                                    try {
                                        e = JSON.parse(o.responseText)
                                    } catch (i) {
                                        return console.error(i),
                                            void t(!1, {
                                                errcode: -10,
                                                errmsg: "ClientJSONParseError"
                                            })
                                    }
                                    t(!0, e)
                                } else
                                    t(!1, {
                                        errcode: -10,
                                        errmsg: "HttpStatusCodeError " + o.status
                                    })
                        }
                            ,
                            o.open("GET", e, !0),
                            o.send()
                    }
                        , i = function (e, t, o) {
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function () {
                                if (4 == i.readyState)
                                    if (200 == i.status) {
                                        var e;
                                        try {
                                            e = JSON.parse(i.responseText)
                                        } catch (t) {
                                            return console.error(t),
                                                void o(!1, {
                                                    errcode: -10,
                                                    errmsg: "ClientJSONParseError"
                                                })
                                        }
                                        o(!0, e)
                                    } else
                                        o(!1, {
                                            errcode: -10,
                                            errmsg: "HttpStatusCodeError " + i.status
                                        })
                            }
                                ,
                                i.open("POST", e, !0),
                                i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                                i.send(JSON.stringify(t))
                        }
                        , n = "https://access-api-test-id.ihago.net";
                    function a(e) {
                        var t = [];
                        for (var o in e)
                            t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                        return t.join("&")
                    }
                    t.a = {
                        getApi: function (e, t, i) {
                            var s = n + e;
                            t && (s += "?" + a(t)),
                                o(s, i)
                        },
                        postApi: function (e, t, o) {
                            i(n + e, t, o)
                        },
                        setHost: function (e) {
                            n = e
                        }
                    }
                }
                , function (e) {
                    e.exports = function (e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }
                }
                , function (e, t, o) {
                    var i = o(4);
                    e.exports = function (e) {
                        if (!i(e))
                            throw TypeError(e + " is not an object!");
                        return e
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(14)
                        , a = o(10)
                        , s = o(12)
                        , r = o(15)
                        , l = function e(t, o, l) {
                            var c, d, u, h, f = t & e.F, g = t & e.G, p = t & e.P, m = t & e.B, v = g ? i : t & e.S ? i[o] || (i[o] = {}) : (i[o] || {}).prototype, M = g ? n : n[o] || (n[o] = {}), y = M.prototype || (M.prototype = {});
                            for (c in g && (l = o),
                                l)
                                u = ((d = !f && v && void 0 !== v[c]) ? v : l)[c],
                                    h = m && d ? r(u, i) : p && "function" == typeof u ? r(Function.call, u) : u,
                                    v && s(v, c, u, t & e.U),
                                    M[c] != u && a(M, c, h),
                                    p && y[c] != u && (y[c] = u)
                        };
                    i.core = n,
                        l.F = 1,
                        l.G = 2,
                        l.S = 4,
                        l.P = 8,
                        l.B = 16,
                        l.W = 32,
                        l.U = 64,
                        l.R = 128,
                        e.exports = l
                }
                , function (e, t, o) {
                    var i = o(5)
                        , n = o(46)
                        , a = o(22)
                        , s = Object.defineProperty;
                    t.f = o(8) ? Object.defineProperty : function (e, t, o) {
                        if (i(e),
                            t = a(t, !0),
                            i(o),
                            n)
                            try {
                                return s(e, t, o)
                            } catch (r) { }
                        if ("get" in o || "set" in o)
                            throw TypeError("Accessors not supported!");
                        return "value" in o && (e[t] = o.value),
                            e
                    }
                }
                , function (e, t, o) {
                    e.exports = !o(9)(function () {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function () {
                                return 7
                            }
                        }).a
                    })
                }
                , function (e) {
                    e.exports = function (e) {
                        try {
                            return !!e()
                        } catch (t) {
                            return !0
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(7)
                        , n = o(23);
                    e.exports = o(8) ? function (e, t, o) {
                        return i.f(e, t, n(1, o))
                    }
                        : function (e, t, o) {
                            return e[t] = o,
                                e
                        }
                }
                , function (e) {
                    var t = {}.hasOwnProperty;
                    e.exports = function (e, o) {
                        return t.call(e, o)
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(10)
                        , a = o(11)
                        , s = o(17)("src")
                        , r = Function.toString
                        , l = ("" + r).split("toString");
                    o(14).inspectSource = function (e) {
                        return r.call(e)
                    }
                        ,
                        (e.exports = function (e, t, o, r) {
                            var c = "function" == typeof o;
                            c && (a(o, "name") || n(o, "name", t)),
                                e[t] !== o && (c && (a(o, s) || n(o, s, e[t] ? "" + e[t] : l.join(String(t)))),
                                    e === i ? e[t] = o : r ? e[t] ? e[t] = o : n(e, t, o) : (delete e[t],
                                        n(e, t, o)))
                        }
                        )(Function.prototype, "toString", function () {
                            return "function" == typeof this && this[s] || r.call(this)
                        })
                }
                , function (e) {
                    var t = {}.toString;
                    e.exports = function (e) {
                        return t.call(e).slice(8, -1)
                    }
                }
                , function (e) {
                    var t = e.exports = {
                        version: "2.6.1"
                    };
                    "number" == typeof __e && (__e = t)
                }
                , function (e, t, o) {
                    var i = o(24);
                    e.exports = function (e, t, o) {
                        if (i(e),
                            void 0 === t)
                            return e;
                        switch (o) {
                            case 1:
                                return function (o) {
                                    return e.call(t, o)
                                }
                                    ;
                            case 2:
                                return function (o, i) {
                                    return e.call(t, o, i)
                                }
                                    ;
                            case 3:
                                return function (o, i, n) {
                                    return e.call(t, o, i, n)
                                }
                        }
                        return function () {
                            return e.apply(t, arguments)
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(31)
                        , n = o(19);
                    e.exports = function (e) {
                        return i(n(e))
                    }
                }
                , function (e) {
                    var t = 0
                        , o = Math.random();
                    e.exports = function (e) {
                        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + o).toString(36))
                    }
                }
                , function (e, t, o) {
                    var i = o(47)
                        , n = o(35);
                    e.exports = Object.keys || function (e) {
                        return i(e, n)
                    }
                }
                , function (e) {
                    e.exports = function (e) {
                        if (null == e)
                            throw TypeError("Can't call method on  " + e);
                        return e
                    }
                }
                , function (e) {
                    e.exports = !1
                }
                , function (e) {
                    e.exports = {}
                }
                , function (e, t, o) {
                    var i = o(4);
                    e.exports = function (e, t) {
                        if (!i(e))
                            return e;
                        var o, n;
                        if (t && "function" == typeof (o = e.toString) && !i(n = o.call(e)))
                            return n;
                        if ("function" == typeof (o = e.valueOf) && !i(n = o.call(e)))
                            return n;
                        if (!t && "function" == typeof (o = e.toString) && !i(n = o.call(e)))
                            return n;
                        throw TypeError("Can't convert object to primitive value")
                    }
                }
                , function (e) {
                    e.exports = function (e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                }
                , function (e) {
                    e.exports = function (e) {
                        if ("function" != typeof e)
                            throw TypeError(e + " is not a function!");
                        return e
                    }
                }
                , function (e, t, o) {
                    var i = o(32)
                        , n = Math.min;
                    e.exports = function (e) {
                        return e > 0 ? n(i(e), 9007199254740991) : 0
                    }
                }
                , function (e, t) {
                    t.f = {}.propertyIsEnumerable
                }
                , function (e, t, o) {
                    var i = o(7).f
                        , n = o(11)
                        , a = o(1)("toStringTag");
                    e.exports = function (e, t, o) {
                        e && !n(e = o ? e : e.prototype, a) && i(e, a, {
                            configurable: !0,
                            value: t
                        })
                    }
                }
                , function (e, t, o) {
                    for (var i = o(83), n = o(18), a = o(12), s = o(2), r = o(10), l = o(21), c = o(1), d = c("iterator"), u = c("toStringTag"), h = l.Array, f = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1
                    }, g = n(f), p = 0; p < g.length; p++) {
                        var m, v = g[p], M = f[v], y = s[v], P = y && y.prototype;
                        if (P && (P[d] || r(P, d, h),
                            P[u] || r(P, u, v),
                            l[v] = h,
                            M))
                            for (m in i)
                                P[m] || a(P, m, i[m], !0)
                    }
                }
                , function (e, t, o) {
                    var i = o(0);
                    t.a = {
                        reportMetrics: function (e) {
                            e ? i.a.asyncV1("hg.reportMetrics", {
                                uri: e.uri,
                                time: e.time,
                                returnCode: e.code
                            }, function (e, t) {
                                console.log("hg.reportMetrics" + e + t)
                            }) : console.log("invalid object")
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = o(2).document
                        , a = i(n) && i(n.createElement);
                    e.exports = function (e) {
                        return a ? n.createElement(e) : {}
                    }
                }
                , function (e, t, o) {
                    var i = o(13);
                    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                        return "String" == i(e) ? e.split("") : Object(e)
                    }
                }
                , function (e) {
                    var t = Math.ceil
                        , o = Math.floor;
                    e.exports = function (e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? o : t)(e)
                    }
                }
                , function (e, t, o) {
                    var i = o(34)("keys")
                        , n = o(17);
                    e.exports = function (e) {
                        return i[e] || (i[e] = n(e))
                    }
                }
                , function (e, t, o) {
                    var i = o(14)
                        , n = o(2)
                        , a = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
                    (e.exports = function (e, t) {
                        return a[e] || (a[e] = void 0 !== t ? t : {})
                    }
                    )("versions", []).push({
                        version: i.version,
                        mode: o(20) ? "pure" : "global",
                        copyright: "\u5a55\ufffd 2018 Denis Pushkarev (zloirock.ru)"
                    })
                }
                , function (e) {
                    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                }
                , function (e, t) {
                    t.f = Object.getOwnPropertySymbols
                }
                , function (e, t, o) {
                    var i = o(19);
                    e.exports = function (e) {
                        return Object(i(e))
                    }
                }
                , function (e, t, o) {
                    var i = o(13)
                        , n = o(1)("toStringTag")
                        , a = "Arguments" == i(function () {
                            return arguments
                        }())
                        , s = function (e, t) {
                            try {
                                return e[t]
                            } catch (o) { }
                        };
                    e.exports = function (e) {
                        var t, o, r;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (o = s(t = Object(e), n)) ? o : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
                    }
                }
                , function (e, t, o) {
                    var i, n, a = o(71), s = RegExp.prototype.exec, r = String.prototype.replace, l = s, c = (i = /a/,
                        n = /b*/g,
                        s.call(i, "a"),
                        s.call(n, "a"),
                        0 !== i.lastIndex || 0 !== n.lastIndex), d = void 0 !== /()??/.exec("")[1];
                    (c || d) && (l = function (e) {
                        var t, o, i, n, l = this;
                        return d && (o = new RegExp("^" + l.source + "$(?!\\s)", a.call(l))),
                            c && (t = l.lastIndex),
                            i = s.call(l, e),
                            c && i && (l.lastIndex = l.global ? i.index + i[0].length : t),
                            d && i && i.length > 1 && r.call(i[0], o, function () {
                                for (n = 1; n < arguments.length - 2; n++)
                                    void 0 === arguments[n] && (i[n] = void 0)
                            }),
                            i
                    }
                    ),
                        e.exports = l
                }
                , function (e, t, o) {
                    var i = o(6);
                    i(i.S + i.F * !o(8), "Object", {
                        defineProperty: o(7).f
                    })
                }
                , function (e, t, o) {
                    o(53)("asyncIterator")
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(11)
                        , a = o(8)
                        , s = o(6)
                        , r = o(12)
                        , l = o(79).KEY
                        , c = o(9)
                        , d = o(34)
                        , u = o(27)
                        , h = o(17)
                        , f = o(1)
                        , g = o(54)
                        , p = o(53)
                        , m = o(80)
                        , v = o(55)
                        , M = o(5)
                        , y = o(4)
                        , P = o(16)
                        , S = o(22)
                        , A = o(23)
                        , C = o(43)
                        , w = o(82)
                        , I = o(45)
                        , k = o(7)
                        , b = o(18)
                        , E = I.f
                        , T = k.f
                        , _ = w.f
                        , R = i.Symbol
                        , O = i.JSON
                        , x = O && O.stringify
                        , G = f("_hidden")
                        , L = f("toPrimitive")
                        , D = {}.propertyIsEnumerable
                        , N = d("symbol-registry")
                        , B = d("symbols")
                        , U = d("op-symbols")
                        , H = Object.prototype
                        , F = "function" == typeof R
                        , V = i.QObject
                        , j = !V || !V.prototype || !V.prototype.findChild
                        , q = a && c(function () {
                            return 7 != C(T({}, "a", {
                                get: function () {
                                    return T(this, "a", {
                                        value: 7
                                    }).a
                                }
                            })).a
                        }) ? function (e, t, o) {
                            var i = E(H, t);
                            i && delete H[t],
                                T(e, t, o),
                                i && e !== H && T(H, t, i)
                        }
                            : T
                        , Y = function (e) {
                            var t = B[e] = C(R.prototype);
                            return t._k = e,
                                t
                        }
                        , W = F && "symbol" == typeof R.iterator ? function (e) {
                            return "symbol" == typeof e
                        }
                            : function (e) {
                                return e instanceof R
                            }
                        , z = function (e, t, o) {
                            return e === H && z(U, t, o),
                                M(e),
                                t = S(t, !0),
                                M(o),
                                n(B, t) ? (o.enumerable ? (n(e, G) && e[G][t] && (e[G][t] = !1),
                                    o = C(o, {
                                        enumerable: A(0, !1)
                                    })) : (n(e, G) || T(e, G, A(1, {})),
                                        e[G][t] = !0),
                                    q(e, t, o)) : T(e, t, o)
                        }
                        , K = function (e, t) {
                            M(e);
                            for (var o, i = m(t = P(t)), n = 0, a = i.length; a > n;)
                                z(e, o = i[n++], t[o]);
                            return e
                        }
                        , J = function (e) {
                            var t = D.call(this, e = S(e, !0));
                            return !(this === H && n(B, e) && !n(U, e)) && (!(t || !n(this, e) || !n(B, e) || n(this, G) && this[G][e]) || t)
                        }
                        , X = function (e, t) {
                            if (e = P(e),
                                t = S(t, !0),
                                e !== H || !n(B, t) || n(U, t)) {
                                var o = E(e, t);
                                return !o || !n(B, t) || n(e, G) && e[G][t] || (o.enumerable = !0),
                                    o
                            }
                        }
                        , $ = function (e) {
                            for (var t, o = _(P(e)), i = [], a = 0; o.length > a;)
                                n(B, t = o[a++]) || t == G || t == l || i.push(t);
                            return i
                        }
                        , Q = function (e) {
                            for (var t, o = e === H, i = _(o ? U : P(e)), a = [], s = 0; i.length > s;)
                                !n(B, t = i[s++]) || o && !n(H, t) || a.push(B[t]);
                            return a
                        };
                    F || (r((R = function () {
                        if (this instanceof R)
                            throw TypeError("Symbol is not a constructor!");
                        var e = h(arguments.length > 0 ? arguments[0] : void 0)
                            , t = function t(o) {
                                this === H && t.call(U, o),
                                    n(this, G) && n(this[G], e) && (this[G][e] = !1),
                                    q(this, e, A(1, o))
                            };
                        return a && j && q(H, e, {
                            configurable: !0,
                            set: t
                        }),
                            Y(e)
                    }
                    ).prototype, "toString", function () {
                        return this._k
                    }),
                        I.f = X,
                        k.f = z,
                        o(44).f = w.f = $,
                        o(26).f = J,
                        o(36).f = Q,
                        a && !o(20) && r(H, "propertyIsEnumerable", J, !0),
                        g.f = function (e) {
                            return Y(f(e))
                        }
                    ),
                        s(s.G + s.W + s.F * !F, {
                            Symbol: R
                        });
                    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;)
                        f(Z[ee++]);
                    for (var te = b(f.store), oe = 0; te.length > oe;)
                        p(te[oe++]);
                    s(s.S + s.F * !F, "Symbol", {
                        for: function (e) {
                            return n(N, e += "") ? N[e] : N[e] = R(e)
                        },
                        keyFor: function (e) {
                            if (!W(e))
                                throw TypeError(e + " is not a symbol!");
                            for (var t in N)
                                if (N[t] === e)
                                    return t
                        },
                        useSetter: function () {
                            j = !0
                        },
                        useSimple: function () {
                            j = !1
                        }
                    }),
                        s(s.S + s.F * !F, "Object", {
                            create: function (e, t) {
                                return void 0 === t ? C(e) : K(C(e), t)
                            },
                            defineProperty: z,
                            defineProperties: K,
                            getOwnPropertyDescriptor: X,
                            getOwnPropertyNames: $,
                            getOwnPropertySymbols: Q
                        }),
                        O && s(s.S + s.F * (!F || c(function () {
                            var e = R();
                            return "[null]" != x([e]) || "{}" != x({
                                a: e
                            }) || "{}" != x(Object(e))
                        })), "JSON", {
                            stringify: function (e) {
                                for (var t, o, i = [e], n = 1; arguments.length > n;)
                                    i.push(arguments[n++]);
                                if (o = t = i[1],
                                    (y(t) || void 0 !== e) && !W(e))
                                    return v(t) || (t = function (e, t) {
                                        if ("function" == typeof o && (t = o.call(this, e, t)),
                                            !W(t))
                                            return t
                                    }
                                    ),
                                        i[1] = t,
                                        x.apply(O, i)
                            }
                        }),
                        R.prototype[L] || o(10)(R.prototype, L, R.prototype.valueOf),
                        u(R, "Symbol"),
                        u(Math, "Math", !0),
                        u(i.JSON, "JSON", !0)
                }
                , function (e, t, o) {
                    var i = o(5)
                        , n = o(81)
                        , a = o(35)
                        , s = o(33)("IE_PROTO")
                        , r = function () { }
                        , l = function () {
                            var e, t = o(30)("iframe"), i = a.length;
                            for (t.style.display = "none",
                                o(56).appendChild(t),
                                t.src = "javascript:",
                                (e = t.contentWindow.document).open(),
                                e.write("<script>document.F=Object<\/script>"),
                                e.close(),
                                l = e.F; i--;)
                                delete l.prototype[a[i]];
                            return l()
                        };
                    e.exports = Object.create || function (e, t) {
                        var o;
                        return null !== e ? (r.prototype = i(e),
                            o = new r,
                            r.prototype = null,
                            o[s] = e) : o = l(),
                            void 0 === t ? o : n(o, t)
                    }
                }
                , function (e, t, o) {
                    var i = o(47)
                        , n = o(35).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function (e) {
                        return i(e, n)
                    }
                }
                , function (e, t, o) {
                    var i = o(26)
                        , n = o(23)
                        , a = o(16)
                        , s = o(22)
                        , r = o(11)
                        , l = o(46)
                        , c = Object.getOwnPropertyDescriptor;
                    t.f = o(8) ? c : function (e, t) {
                        if (e = a(e),
                            t = s(t, !0),
                            l)
                            try {
                                return c(e, t)
                            } catch (o) { }
                        if (r(e, t))
                            return n(!i.f.call(e, t), e[t])
                    }
                }
                , function (e, t, o) {
                    e.exports = !o(8) && !o(9)(function () {
                        return 7 != Object.defineProperty(o(30)("div"), "a", {
                            get: function () {
                                return 7
                            }
                        }).a
                    })
                }
                , function (e, t, o) {
                    var i = o(11)
                        , n = o(16)
                        , a = o(48)(!1)
                        , s = o(33)("IE_PROTO");
                    e.exports = function (e, t) {
                        var o, r = n(e), l = 0, c = [];
                        for (o in r)
                            o != s && i(r, o) && c.push(o);
                        for (; t.length > l;)
                            i(r, o = t[l++]) && (~a(c, o) || c.push(o));
                        return c
                    }
                }
                , function (e, t, o) {
                    var i = o(16)
                        , n = o(25)
                        , a = o(65);
                    e.exports = function (e) {
                        return function (t, o, s) {
                            var r, l = i(t), c = n(l.length), d = a(s, c);
                            if (e && o != o) {
                                for (; c > d;)
                                    if ((r = l[d++]) != r)
                                        return !0
                            } else
                                for (; c > d; d++)
                                    if ((e || d in l) && l[d] === o)
                                        return e || d || 0;
                            return !e && -1
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(67)
                        , n = o(5)
                        , a = o(50)
                        , s = o(68)
                        , r = o(25)
                        , l = o(70)
                        , c = o(39)
                        , d = Math.min
                        , u = [].push
                        , h = !!function () {
                            try {
                                return new RegExp("x", "y")
                            } catch (e) { }
                        }();
                    o(72)("split", 2, function (e, t, o, f) {
                        var g;
                        return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, t) {
                            var n = String(this);
                            if (void 0 === e && 0 === t)
                                return [];
                            if (!i(e))
                                return o.call(n, e, t);
                            for (var a, s, r, l = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, f = void 0 === t ? 4294967295 : t >>> 0, g = new RegExp(e.source, d + "g"); (a = c.call(g, n)) && !((s = g.lastIndex) > h && (l.push(n.slice(h, a.index)),
                                a.length > 1 && a.index < n.length && u.apply(l, a.slice(1)),
                                r = a[0].length,
                                h = s,
                                l.length >= f));)
                                g.lastIndex === a.index && g.lastIndex++;
                            return h === n.length ? !r && g.test("") || l.push("") : l.push(n.slice(h)),
                                l.length > f ? l.slice(0, f) : l
                        }
                            : "0".split(void 0, 0).length ? function (e, t) {
                                return void 0 === e && 0 === t ? [] : o.call(this, e, t)
                            }
                                : o,
                            [function (o, i) {
                                var n = e(this)
                                    , a = null == o ? void 0 : o[t];
                                return void 0 !== a ? a.call(o, n, i) : g.call(String(n), o, i)
                            }
                                , function (e, t) {
                                    var i = f(g, e, this, t, g !== o);
                                    if (i.done)
                                        return i.value;
                                    var c = n(e)
                                        , u = String(this)
                                        , p = a(c, RegExp)
                                        , m = c.unicode
                                        , v = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h ? "y" : "g")
                                        , M = new p(h ? c : "^(?:" + c.source + ")", v)
                                        , y = void 0 === t ? 4294967295 : t >>> 0;
                                    if (0 === y)
                                        return [];
                                    if (0 === u.length)
                                        return null === l(M, u) ? [u] : [];
                                    for (var P = 0, S = 0, A = []; S < u.length;) {
                                        M.lastIndex = h ? S : 0;
                                        var C, w = l(M, h ? u : u.slice(S));
                                        if (null === w || (C = d(r(M.lastIndex + (h ? 0 : S)), u.length)) === P)
                                            S = s(u, S, m);
                                        else {
                                            if (A.push(u.slice(P, S)),
                                                A.length === y)
                                                return A;
                                            for (var I = 1; I <= w.length - 1; I++)
                                                if (A.push(w[I]),
                                                    A.length === y)
                                                    return A;
                                            S = P = C
                                        }
                                    }
                                    return A.push(u.slice(P)),
                                        A
                                }
                            ]
                    })
                }
                , function (e, t, o) {
                    var i = o(5)
                        , n = o(24)
                        , a = o(1)("species");
                    e.exports = function (e, t) {
                        var o, s = i(e).constructor;
                        return void 0 === s || null == (o = i(s)[a]) ? t : n(o)
                    }
                }
                , function (e, t, o) {
                    var i = o(6)
                        , n = o(48)(!1)
                        , a = [].indexOf
                        , s = !!a && 1 / [1].indexOf(1, -0) < 0;
                    i(i.P + i.F * (s || !o(52)(a)), "Array", {
                        indexOf: function (e) {
                            return s ? a.apply(this, arguments) || 0 : n(this, e, arguments[1])
                        }
                    })
                }
                , function (e, t, o) {
                    var i = o(9);
                    e.exports = function (e, t) {
                        return !!e && i(function () {
                            t ? e.call(null, function () { }, 1) : e.call(null)
                        })
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(14)
                        , a = o(20)
                        , s = o(54)
                        , r = o(7).f;
                    e.exports = function (e) {
                        var t = n.Symbol || (n.Symbol = a ? {} : i.Symbol || {});
                        "_" == e.charAt(0) || e in t || r(t, e, {
                            value: s.f(e)
                        })
                    }
                }
                , function (e, t, o) {
                    t.f = o(1)
                }
                , function (e, t, o) {
                    var i = o(13);
                    e.exports = Array.isArray || function (e) {
                        return "Array" == i(e)
                    }
                }
                , function (e, t, o) {
                    var i = o(2).document;
                    e.exports = i && i.documentElement
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getSystemInfoSync", function () {
                            return n
                        });
                    var i = o(0);
                    function n() {
                        return i.a.systemInfo.SDKVersion = 3100,
                            i.a.systemInfo
                    }
                }
                , function (e, t, o) {
                    var i, n, a, s = o(15), r = o(96), l = o(56), c = o(30), d = o(2), u = d.process, h = d.setImmediate, f = d.clearImmediate, g = d.MessageChannel, p = d.Dispatch, m = 0, v = {}, M = function () {
                        var e = +this;
                        if (v.hasOwnProperty(e)) {
                            var t = v[e];
                            delete v[e],
                                t()
                        }
                    }, y = function (e) {
                        M.call(e.data)
                    };
                    h && f || (h = function (e) {
                        for (var t = [], o = 1; arguments.length > o;)
                            t.push(arguments[o++]);
                        return v[++m] = function () {
                            r("function" == typeof e ? e : Function(e), t)
                        }
                            ,
                            i(m),
                            m
                    }
                        ,
                        f = function (e) {
                            delete v[e]
                        }
                        ,
                        "process" == o(13)(u) ? i = function (e) {
                            u.nextTick(s(M, e, 1))
                        }
                            : p && p.now ? i = function (e) {
                                p.now(s(M, e, 1))
                            }
                                : g ? (a = (n = new g).port2,
                                    n.port1.onmessage = y,
                                    i = s(a.postMessage, a, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (i = function (e) {
                                        d.postMessage(e + "", "*")
                                    }
                                        ,
                                        d.addEventListener("message", y, !1)) : i = "onreadystatechange" in c("script") ? function (e) {
                                            l.appendChild(c("script")).onreadystatechange = function () {
                                                l.removeChild(this),
                                                    M.call(e)
                                            }
                                        }
                                            : function (e) {
                                                setTimeout(s(M, e, 1), 0)
                                            }
                    ),
                        e.exports = {
                            set: h,
                            clear: f
                        }
                }
                , function (e, t, o) {
                    var i = o(24);
                    function n(e) {
                        var t, o;
                        this.promise = new e(function (e, i) {
                            if (void 0 !== t || void 0 !== o)
                                throw TypeError("Bad Promise constructor");
                            t = e,
                                o = i
                        }
                        ),
                            this.resolve = i(t),
                            this.reject = i(o)
                    }
                    e.exports.f = function (e) {
                        return new n(e)
                    }
                }
                , function (e, t, o) {
                    var i = o(7).f
                        , n = Function.prototype
                        , a = /^\s*function ([^ (]*)/;
                    "name" in n || o(8) && i(n, "name", {
                        configurable: !0,
                        get: function () {
                            try {
                                return ("" + this).match(a)[1]
                            } catch (e) {
                                return ""
                            }
                        }
                    })
                }
                , function (module, exports, __webpack_require__) {
                    (function (process, global) {
                        var __WEBPACK_AMD_DEFINE_RESULT__;
                        (function () {
                            var root = "object" == typeof window ? window : {}
                                , NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                            NODE_JS && (root = global);
                            var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports
                                , AMD = __webpack_require__(115)
                                , HEX_CHARS = "0123456789abcdef".split("")
                                , EXTRA = [-2147483648, 8388608, 32768, 128]
                                , SHIFT = [24, 16, 8, 0]
                                , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
                                , blocks = []
                                , createOutputMethod = function (e) {
                                    return function (t) {
                                        return new Sha1(!0).update(t)[e]()
                                    }
                                }
                                , createMethod = function () {
                                    var e = createOutputMethod("hex");
                                    NODE_JS && (e = nodeWrap(e)),
                                        e.create = function () {
                                            return new Sha1
                                        }
                                        ,
                                        e.update = function (t) {
                                            return e.create().update(t)
                                        }
                                        ;
                                    for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                                        var o = OUTPUT_TYPES[t];
                                        e[o] = createOutputMethod(o)
                                    }
                                    return e
                                }
                                , nodeWrap = function nodeWrap(method) {
                                    var crypto = eval("require('crypto')")
                                        , Buffer = eval("require('buffer').Buffer")
                                        , nodeMethod = function (e) {
                                            if ("string" == typeof e)
                                                return crypto.createHash("sha1").update(e, "utf8").digest("hex");
                                            if (e.constructor === ArrayBuffer)
                                                e = new Uint8Array(e);
                                            else if (void 0 === e.length)
                                                return method(e);
                                            return crypto.createHash("sha1").update(new Buffer(e)).digest("hex")
                                        };
                                    return nodeMethod
                                };
                            function Sha1(e) {
                                e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                                    this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                    this.h0 = 1732584193,
                                    this.h1 = 4023233417,
                                    this.h2 = 2562383102,
                                    this.h3 = 271733878,
                                    this.h4 = 3285377520,
                                    this.block = this.start = this.bytes = this.hBytes = 0,
                                    this.finalized = this.hashed = !1,
                                    this.first = !0
                            }
                            Sha1.prototype.update = function (e) {
                                if (!this.finalized) {
                                    var t = "string" != typeof e;
                                    t && e.constructor === root.ArrayBuffer && (e = new Uint8Array(e));
                                    for (var o, i, n = 0, a = e.length || 0, s = this.blocks; n < a;) {
                                        if (this.hashed && (this.hashed = !1,
                                            s[0] = this.block,
                                            s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                                            t)
                                            for (i = this.start; n < a && i < 64; ++n)
                                                s[i >> 2] |= e[n] << SHIFT[3 & i++];
                                        else
                                            for (i = this.start; n < a && i < 64; ++n)
                                                (o = e.charCodeAt(n)) < 128 ? s[i >> 2] |= o << SHIFT[3 & i++] : o < 2048 ? (s[i >> 2] |= (192 | o >> 6) << SHIFT[3 & i++],
                                                    s[i >> 2] |= (128 | 63 & o) << SHIFT[3 & i++]) : o < 55296 || o >= 57344 ? (s[i >> 2] |= (224 | o >> 12) << SHIFT[3 & i++],
                                                        s[i >> 2] |= (128 | o >> 6 & 63) << SHIFT[3 & i++],
                                                        s[i >> 2] |= (128 | 63 & o) << SHIFT[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++n)),
                                                            s[i >> 2] |= (240 | o >> 18) << SHIFT[3 & i++],
                                                            s[i >> 2] |= (128 | o >> 12 & 63) << SHIFT[3 & i++],
                                                            s[i >> 2] |= (128 | o >> 6 & 63) << SHIFT[3 & i++],
                                                            s[i >> 2] |= (128 | 63 & o) << SHIFT[3 & i++]);
                                        this.lastByteIndex = i,
                                            this.bytes += i - this.start,
                                            i >= 64 ? (this.block = s[16],
                                                this.start = i - 64,
                                                this.hash(),
                                                this.hashed = !0) : this.start = i
                                    }
                                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                                        this.bytes = this.bytes % 4294967296),
                                        this
                                }
                            }
                                ,
                                Sha1.prototype.finalize = function () {
                                    if (!this.finalized) {
                                        this.finalized = !0;
                                        var e = this.blocks
                                            , t = this.lastByteIndex;
                                        e[16] = this.block,
                                            e[t >> 2] |= EXTRA[3 & t],
                                            this.block = e[16],
                                            t >= 56 && (this.hashed || this.hash(),
                                                e[0] = this.block,
                                                e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                                            e[14] = this.hBytes << 3 | this.bytes >>> 29,
                                            e[15] = this.bytes << 3,
                                            this.hash()
                                    }
                                }
                                ,
                                Sha1.prototype.hash = function () {
                                    var e, t, o = this.h0, i = this.h1, n = this.h2, a = this.h3, s = this.h4, r = this.blocks;
                                    for (e = 16; e < 80; ++e)
                                        t = r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16],
                                            r[e] = t << 1 | t >>> 31;
                                    for (e = 0; e < 20; e += 5)
                                        o = (t = (i = (t = (n = (t = (a = (t = (s = (t = o << 5 | o >>> 27) + (i & n | ~i & a) + s + 1518500249 + r[e] << 0) << 5 | s >>> 27) + (o & (i = i << 30 | i >>> 2) | ~o & n) + a + 1518500249 + r[e + 1] << 0) << 5 | a >>> 27) + (s & (o = o << 30 | o >>> 2) | ~s & i) + n + 1518500249 + r[e + 2] << 0) << 5 | n >>> 27) + (a & (s = s << 30 | s >>> 2) | ~a & o) + i + 1518500249 + r[e + 3] << 0) << 5 | i >>> 27) + (n & (a = a << 30 | a >>> 2) | ~n & s) + o + 1518500249 + r[e + 4] << 0,
                                            n = n << 30 | n >>> 2;
                                    for (; e < 40; e += 5)
                                        o = (t = (i = (t = (n = (t = (a = (t = (s = (t = o << 5 | o >>> 27) + (i ^ n ^ a) + s + 1859775393 + r[e] << 0) << 5 | s >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ n) + a + 1859775393 + r[e + 1] << 0) << 5 | a >>> 27) + (s ^ (o = o << 30 | o >>> 2) ^ i) + n + 1859775393 + r[e + 2] << 0) << 5 | n >>> 27) + (a ^ (s = s << 30 | s >>> 2) ^ o) + i + 1859775393 + r[e + 3] << 0) << 5 | i >>> 27) + (n ^ (a = a << 30 | a >>> 2) ^ s) + o + 1859775393 + r[e + 4] << 0,
                                            n = n << 30 | n >>> 2;
                                    for (; e < 60; e += 5)
                                        o = (t = (i = (t = (n = (t = (a = (t = (s = (t = o << 5 | o >>> 27) + (i & n | i & a | n & a) + s - 1894007588 + r[e] << 0) << 5 | s >>> 27) + (o & (i = i << 30 | i >>> 2) | o & n | i & n) + a - 1894007588 + r[e + 1] << 0) << 5 | a >>> 27) + (s & (o = o << 30 | o >>> 2) | s & i | o & i) + n - 1894007588 + r[e + 2] << 0) << 5 | n >>> 27) + (a & (s = s << 30 | s >>> 2) | a & o | s & o) + i - 1894007588 + r[e + 3] << 0) << 5 | i >>> 27) + (n & (a = a << 30 | a >>> 2) | n & s | a & s) + o - 1894007588 + r[e + 4] << 0,
                                            n = n << 30 | n >>> 2;
                                    for (; e < 80; e += 5)
                                        o = (t = (i = (t = (n = (t = (a = (t = (s = (t = o << 5 | o >>> 27) + (i ^ n ^ a) + s - 899497514 + r[e] << 0) << 5 | s >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ n) + a - 899497514 + r[e + 1] << 0) << 5 | a >>> 27) + (s ^ (o = o << 30 | o >>> 2) ^ i) + n - 899497514 + r[e + 2] << 0) << 5 | n >>> 27) + (a ^ (s = s << 30 | s >>> 2) ^ o) + i - 899497514 + r[e + 3] << 0) << 5 | i >>> 27) + (n ^ (a = a << 30 | a >>> 2) ^ s) + o - 899497514 + r[e + 4] << 0,
                                            n = n << 30 | n >>> 2;
                                    this.h0 = this.h0 + o << 0,
                                        this.h1 = this.h1 + i << 0,
                                        this.h2 = this.h2 + n << 0,
                                        this.h3 = this.h3 + a << 0,
                                        this.h4 = this.h4 + s << 0
                                }
                                ,
                                Sha1.prototype.hex = function () {
                                    this.finalize();
                                    var e = this.h0
                                        , t = this.h1
                                        , o = this.h2
                                        , i = this.h3
                                        , n = this.h4;
                                    return HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n]
                                }
                                ,
                                Sha1.prototype.toString = Sha1.prototype.hex,
                                Sha1.prototype.digest = function () {
                                    this.finalize();
                                    var e = this.h0
                                        , t = this.h1
                                        , o = this.h2
                                        , i = this.h3
                                        , n = this.h4;
                                    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n]
                                }
                                ,
                                Sha1.prototype.array = Sha1.prototype.digest,
                                Sha1.prototype.arrayBuffer = function () {
                                    this.finalize();
                                    var e = new ArrayBuffer(20)
                                        , t = new DataView(e);
                                    return t.setUint32(0, this.h0),
                                        t.setUint32(4, this.h1),
                                        t.setUint32(8, this.h2),
                                        t.setUint32(12, this.h3),
                                        t.setUint32(16, this.h4),
                                        e
                                }
                                ;
                            var exports = createMethod();
                            COMMON_JS ? module.exports = exports : (root.sha1 = exports,
                                AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                    return exports
                                }
                                    .call(exports, __webpack_require__, exports, module),
                                    void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                        }
                        )()
                    }
                    ).call(this, __webpack_require__(113), __webpack_require__(114))
                }
                , function (e, t, o) {
                    var i;
                    if (o.r(t),
                        o.d(t, "hg", function () {
                            return i
                        }),
                        o(63),
                        window.hg)
                        console.log("hago jssdk init defined, export old"),
                            i = window.hg;
                    else {
                        var n = o(66)
                            , a = o(74)
                            , s = o(75)
                            , r = o(76)
                            , l = o(77)
                            , c = o(78)
                            , d = o(57)
                            , u = o(89)
                            , h = o(111)
                            , f = o(112)
                            , g = o(116)
                            , p = o(117)
                            , m = o(118)
                            , v = o(119)
                            , M = o(124)
                            , y = o(125)
                            , P = o(126);
                        console.log("hago jssdk init hg not defined, export new"),
                            i = window.yyrt ? Object.assign({}, n, a, r, l, s, c, d, u, h, f, g, m, v, M, y, P) : Object.assign({}, n, a, r, l, s, c, d, u, h, f, g, m, v, p)
                    }
                }
                , function (e, t, o) {
                    var i = o(6);
                    i(i.S + i.F, "Object", {
                        assign: o(64)
                    })
                }
                , function (e, t, o) {
                    var i = o(18)
                        , n = o(36)
                        , a = o(26)
                        , s = o(37)
                        , r = o(31)
                        , l = Object.assign;
                    e.exports = !l || o(9)(function () {
                        var e = {}
                            , t = {}
                            , o = Symbol()
                            , i = "abcdefghijklmnopqrst";
                        return e[o] = 7,
                            i.split("").forEach(function (e) {
                                t[e] = e
                            }),
                            7 != l({}, e)[o] || Object.keys(l({}, t)).join("") != i
                    }) ? function (e, t) {
                        for (var o = s(e), l = arguments.length, c = 1, d = n.f, u = a.f; l > c;)
                            for (var h, f = r(arguments[c++]), g = d ? i(f).concat(d(f)) : i(f), p = g.length, m = 0; p > m;)
                                u.call(f, h = g[m++]) && (o[h] = f[h]);
                        return o
                    }
                        : l
                }
                , function (e, t, o) {
                    var i = o(32)
                        , n = Math.max
                        , a = Math.min;
                    e.exports = function (e, t) {
                        return (e = i(e)) < 0 ? n(e + t, 0) : a(e, t)
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "login", function () {
                            return n
                        });
                    var i = o(0);
                    function n(e) {
                        console.log("hg.login called");
                        var t = i.a.code;
                        console.log("hg.login result " + t),
                            e && e.success && e.success({
                                code: t
                            }),
                            e && e.complete && e.complete()
                    }
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = o(13)
                        , a = o(1)("match");
                    e.exports = function (e) {
                        var t;
                        return i(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == n(e))
                    }
                }
                , function (e, t, o) {
                    var i = o(69)(!0);
                    e.exports = function (e, t, o) {
                        return t + (o ? i(e, t).length : 1)
                    }
                }
                , function (e, t, o) {
                    var i = o(32)
                        , n = o(19);
                    e.exports = function (e) {
                        return function (t, o) {
                            var a, s, r = String(n(t)), l = i(o), c = r.length;
                            return l < 0 || l >= c ? e ? "" : void 0 : (a = r.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === c || (s = r.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? r.charAt(l) : a : e ? r.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(38)
                        , n = RegExp.prototype.exec;
                    e.exports = function (e, t) {
                        var o = e.exec;
                        if ("function" == typeof o) {
                            var a = o.call(e, t);
                            if ("object" != typeof a)
                                throw new TypeError("RegExp exec method returned something other than an Object or null");
                            return a
                        }
                        if ("RegExp" !== i(e))
                            throw new TypeError("RegExp#exec called on incompatible receiver");
                        return n.call(e, t)
                    }
                }
                , function (e, t, o) {
                    var i = o(5);
                    e.exports = function () {
                        var e = i(this)
                            , t = "";
                        return e.global && (t += "g"),
                            e.ignoreCase && (t += "i"),
                            e.multiline && (t += "m"),
                            e.unicode && (t += "u"),
                            e.sticky && (t += "y"),
                            t
                    }
                }
                , function (e, t, o) {
                    o(73);
                    var i = o(12)
                        , n = o(10)
                        , a = o(9)
                        , s = o(19)
                        , r = o(1)
                        , l = o(39)
                        , c = r("species")
                        , d = !a(function () {
                            var e = /./;
                            return e.exec = function () {
                                var e = [];
                                return e.groups = {
                                    a: "7"
                                },
                                    e
                            }
                                ,
                                "7" !== "".replace(e, "$<a>")
                        })
                        , u = function () {
                            var e = /(?:)/
                                , t = e.exec;
                            e.exec = function () {
                                return t.apply(this, arguments)
                            }
                                ;
                            var o = "ab".split(e);
                            return 2 === o.length && "a" === o[0] && "b" === o[1]
                        }();
                    e.exports = function (e, t, o) {
                        var h = r(e)
                            , f = !a(function () {
                                var t = {};
                                return t[h] = function () {
                                    return 7
                                }
                                    ,
                                    7 != ""[e](t)
                            })
                            , g = f ? !a(function () {
                                var t = !1
                                    , o = /a/;
                                return o.exec = function () {
                                    return t = !0,
                                        null
                                }
                                    ,
                                    "split" === e && (o.constructor = {},
                                        o.constructor[c] = function () {
                                            return o
                                        }
                                    ),
                                    o[h](""),
                                    !t
                            }) : void 0;
                        if (!f || !g || "replace" === e && !d || "split" === e && !u) {
                            var p = /./[h]
                                , m = o(s, h, ""[e], function (e, t, o, i, n) {
                                    return t.exec === l ? f && !n ? {
                                        done: !0,
                                        value: p.call(t, o, i)
                                    } : {
                                        done: !0,
                                        value: e.call(o, t, i)
                                    } : {
                                        done: !1
                                    }
                                })
                                , v = m[0]
                                , M = m[1];
                            i(String.prototype, e, v),
                                n(RegExp.prototype, h, 2 == t ? function (e, t) {
                                    return M.call(e, this, t)
                                }
                                    : function (e) {
                                        return M.call(e, this)
                                    }
                                )
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(39);
                    o(6)({
                        target: "RegExp",
                        proto: !0,
                        forced: i !== /./.exec
                    }, {
                        exec: i
                    })
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getFriendCloudStorage", function () {
                            return a
                        }),
                        o.d(t, "getUserCloudStorage", function () {
                            return s
                        }),
                        o.d(t, "removeUserCloudStorage", function () {
                            return r
                        }),
                        o.d(t, "setUserCloudStorage", function () {
                            return l
                        });
                    var i = o(3)
                        , n = o(0);
                    function a(e) {
                        console.log("getFriendCloudStorage called"),
                            n.a.getFriendUids(function (t) {
                                console.log("friendUidList", t);
                                var o = {
                                    uids: t,
                                    keylist: e.keyList
                                }
                                    , a = JSON.stringify(o);
                                console.log("getFriendCloudStorage dataStr", a),
                                    i.a.getApi("/lianyun/kv/getFriendCloudStorage", {
                                        data: a,
                                        js_code: n.a.code
                                    }, function (t, o) {
                                        console.log("getFriendCloudStorage res ", t, o),
                                            t && 0 == o.errcode ? e.success(o.data) : e.fail(o)
                                    })
                            })
                    }
                    function s(e) {
                        console.log("getUserCloudStorage called");
                        var t = JSON.stringify(e.keyList);
                        console.log("getUserCloudStorage keyListStr", t),
                            i.a.getApi("/lianyun/kv/getUserCloudStorage", {
                                keylist: t,
                                js_code: n.a.code
                            }, function (t, o) {
                                console.log("hagosdk getUserCloudStorage " + t + ",res:" + JSON.stringify(o)),
                                    t && 0 == o.errcode ? e.success(o.data) : e.fail(o)
                            })
                    }
                    function r(e) {
                        console.log("removeUserCloudStorage called");
                        var t = JSON.stringify(e.keyList);
                        console.log("removeUserCloudStorage keyListStr", t),
                            i.a.getApi("/lianyun/kv/removeUserCloudStorage", {
                                keylist: t,
                                js_code: n.a.code
                            }, function (t, o) {
                                console.log("removeUserCloudStorage res ", t, o),
                                    t && 0 == o.errcode ? e.success(o.data) : e.fail(o)
                            })
                    }
                    function l(e) {
                        console.log("setUserCloudStorage called");
                        var t = JSON.stringify(e.KVDataList);
                        console.log("setUserCloudStorage keyDadaStr", t),
                            i.a.getApi("/lianyun/kv/setUserCloudStorage", {
                                kvdata: t,
                                js_code: n.a.code
                            }, function (t, o) {
                                console.log("setUserCloudStorage res ", t, o),
                                    t && 0 == o.errcode ? e.success(o.data) : e.fail(o)
                            })
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "exitMiniProgram", function () {
                            return n
                        }),
                        o.d(t, "updateCloseView", function () {
                            return a
                        }),
                        o.d(t, "gameLoadResult", function () {
                            return s
                        });
                    var i = o(0);
                    function n(e) {
                        i.a.webDebug ? alert("call exitMiniProgram success!") : (e || (e = {
                            exitConfirm: !0
                        }),
                            e.exitConfirm || (e.exitConfirm = !1),
                            i.a.asyncV1("hg.exitMiniProgram", {
                                confirm: e.exitConfirm
                            }),
                            console.log("confirm " + e.exitConfirm))
                    }
                    function a(e) {
                        i.a.webDebug ? alert("call updateCloseView success!") : i.a.async("hg.updateCloseView", e)
                    }
                    function s(e) {
                        e || (e = {}),
                            console.log("call hg.gameLoadResult " + e.code),
                            e.code || (e.code = 0),
                            i.a.webDebug ? console.log("call gameLoadResult success!") : i.a.async("hg.gameLoad", e),
                            i.a.gameUrl && (0 === e.code ? i.a.asyncV1("hg.onGameStageChange", {
                                stage: 3
                            }) : i.a.asyncV1("hg.onGameStageChange", {
                                stage: 4,
                                message: e.message
                            }))
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "requestPayment", function () {
                            return a
                        });
                    var i = o(0)
                        , n = o(29);
                    function a(e) {
                        console.log("hg.requestPayment " + JSON.stringify(e)),
                            e.subject || console.log("ERROR requestPayment() param must have subject"),
                            e.item_id ? e.transaction_id ? i.a.webDebug ? s(e) : r(e) : (e.fail && e.fail({
                                errCode: 102,
                                errMsg: "ERROR requestPayment() param must have transaction_id"
                            }),
                                e.complete && e.complete()) : (e.fail && e.fail({
                                    errCode: 102,
                                    errMsg: "ERROR requestPayment() param must have item_id"
                                }),
                                    e.complete && e.complete())
                    }
                    function s(e) {
                        if (!confirm("OK ===> user pay success\n Cancel ==> user pay error"))
                            return e.fail && e.fail({
                                errCode: 3,
                                errMsg: "user cancel"
                            }),
                                void (e.complete && e.complete());
                        var t = new XMLHttpRequest;
                        t.open("POST", "https://i-test-863.ihago.net/ymicro/api?token=12345", !0),
                            t.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
                            t.setRequestHeader("X-Ymicro-Api-Service-Name", "net.ihago.money.api.pay"),
                            t.setRequestHeader("X-Ymicro-Api-Method-Name", "Pay.FakeReChargeMsg");
                        var o = i.a.gameId;
                        if (!o)
                            return e.fail && e.fail({
                                errCode: -1,
                                errMsg: "no gameId"
                            }),
                                void (e.complete && e.complete());
                        var n = {
                            uid: i.a.uid,
                            createTime: +Math.round((new Date).getTime() / 1e3),
                            finishTime: +Math.round((new Date).getTime() / 1e3),
                            amount: 1,
                            transactionHago: "kwb_test_fake_hagoid_" + Math.round((new Date).getTime() / 1e3),
                            status: 1,
                            chargeConfigID: e.item_id,
                            expand: '{"quantity":"1","unitPrice":1,"product_id":"hago_58diam_1.99","hdid":"ef7b9350c93fc289b350a28458ac6b7f","srcCurrencySymbol":"$","gameId":"' + o + '","itemId":' + e.item_id + ',"companyId":"' + o + '","openId":"' + i.a.openid + '","chargeEntry":9,"companyOrderId":"' + e.transaction_id + '","goodsName":"' + e.subject + '","countryCode":"' + i.a.countryCode + '","clientVersion":"2.9.0","isSandBoxOrder":"true"}'
                        };
                        console.log("hagosdk fake pay params " + JSON.stringify(n)),
                            t.send(JSON.stringify(n)),
                            t.onloadend = function () {
                                console.log("hagosdk fake pay response " + t.response);
                                var o = JSON.parse(t.response);
                                0 === o.code ? e.success && e.success({
                                    errCode: 1,
                                    errMsg: "success"
                                }) : e.fail && e.fail({
                                    errCode: o.code,
                                    errMsg: o.message
                                }),
                                    e.complete && e.complete()
                            }
                    }
                    function r(e) {
                        i.a.async("hg.requestPayment", {
                            item_id: e.item_id,
                            transaction_id: e.transaction_id,
                            subject: e.subject,
                            openid: i.a.openid
                        }, function (t) {
                            0 == t.errCode ? (e.success && e.success({
                                errCode: t.errCode,
                                errMsg: t.errMsg
                            }),
                                e.complete && e.complete()) : (e.fail && e.fail({
                                    errCode: t.errCode,
                                    errMsg: t.errMsg
                                }),
                                    e.complete && e.complete()),
                                n.a.reportMetrics({
                                    uri: "request_payment/" + i.a.gameId,
                                    time: 0,
                                    code: t.errCode
                                })
                        })
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "hideShareMenu", function () {
                            return a
                        }),
                        o.d(t, "showShareMenu", function () {
                            return n
                        });
                    var i = o(0);
                    function n(e) {
                        if (e || (e = {}),
                            e.title)
                            if (e.content)
                                if (e.imageUrl)
                                    if (e.goToUrl) {
                                        if (i.a.webDebug)
                                            return console.log("hagosdk showShareMenu success"),
                                                e.success && e.success({
                                                    success: "success"
                                                }),
                                                void (e.complete && e.complete());
                                        i.a.async("hg.showShareMenu", {
                                            title: e.title,
                                            content: e.content,
                                            imageUrl: e.imageUrl,
                                            goToUrl: e.goToUrl
                                        }, function (t) {
                                            0 == t.errCode ? e.success && e.success({
                                                success: "success"
                                            }) : e.fail && e.fail({
                                                errCode: t.errCode,
                                                errMsg: t.errMsg
                                            })
                                        }),
                                            e.complete && e.complete()
                                    } else
                                        console.error("showShareMenu object.goToUrl is required");
                                else
                                    console.error("showShareMenu object.imageUrl is required");
                            else
                                console.error("showShareMenu object.content is required");
                        else
                            console.error("showShareMenu object.title is required")
                    }
                    function a(e) {
                        if (i.a.webDebug)
                            return console.log("hagosdk hideShareMenu success"),
                                e.success && e.success({
                                    success: "success"
                                }),
                                void (e.complete && e.complete());
                        i.a.async("hg.hideShareMenu", {}, function (t) {
                            0 == t.errCode ? e.success && e.success({
                                success: "success"
                            }) : e.fail && e.fail()
                        }),
                            e.complete && e.complete()
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getUserInfo", function () {
                            return n
                        }),
                        o.d(t, "getUserInfoByUids", function () {
                            return a
                        }),
                        o.d(t, "getUid", function () {
                            return r
                        }),
                        o.d(t, "showUserCard", function () {
                            return c
                        }),
                        o(41),
                        o(42),
                        o(28);
                    var i = o(0);
                    function n(e) {
                        e && e.success && e.success({
                            userInfo: i.a.userInfo
                        })
                    }
                    function a(e) {
                        if (!e || !e.uids)
                            return console.error("getUserInfoByUids uids is empty"),
                                void (e && e.fail && e.fail({
                                    errCode: -1,
                                    errMsg: "getUserInfoByUids uids is empty"
                                }));
                        i.a.webDebug ? l(e) : s(e)
                    }
                    function s(e) {
                        i.a.async("hg.getUserInfoByUids", {
                            uids: JSON.stringify(e.uids)
                        }, function (t) {
                            0 === t.errCode ? (console.log("getUserInfoByUids success :" + t.users),
                                e.success && e.success(JSON.parse(t.users))) : e.fail && e.fail({
                                    errCode: t.errCode,
                                    errMsg: t.errMsg
                                })
                        })
                    }
                    function r() {
                        return i.a.uid
                    }
                    function l(e) {
                        var t = []
                            , o = !0
                            , i = !1
                            , n = void 0;
                        try {
                            for (var a, s = e.uids[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) {
                                var r = a.value;
                                t.push({
                                    city: "Guangzhou",
                                    sex: 1,
                                    uid: r,
                                    birthday: "1980-01-01",
                                    zodiac: 0,
                                    avatar: "https://o-id.ihago.net/user_album/101001211_1532329700765.png",
                                    nick: "xxxxx",
                                    locationTude: "xxxx"
                                })
                            }
                        } catch (l) {
                            i = !0,
                                n = l
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (i)
                                    throw n
                            }
                        }
                        e.success && e.success(t)
                    }
                    function c(e) {
                        e && e.uid ? i.a.async("hg.showUserCard", {
                            uid: e.uid
                        }) : console.error("showUserCard uid is empty")
                    }
                }
                , function (e, t, o) {
                    var i = o(17)("meta")
                        , n = o(4)
                        , a = o(11)
                        , s = o(7).f
                        , r = 0
                        , l = Object.isExtensible || function () {
                            return !0
                        }
                        , c = !o(9)(function () {
                            return l(Object.preventExtensions({}))
                        })
                        , d = function (e) {
                            s(e, i, {
                                value: {
                                    i: "O" + ++r,
                                    w: {}
                                }
                            })
                        }
                        , u = e.exports = {
                            KEY: i,
                            NEED: !1,
                            fastKey: function (e, t) {
                                if (!n(e))
                                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                                if (!a(e, i)) {
                                    if (!l(e))
                                        return "F";
                                    if (!t)
                                        return "E";
                                    d(e)
                                }
                                return e[i].i
                            },
                            getWeak: function (e, t) {
                                if (!a(e, i)) {
                                    if (!l(e))
                                        return !0;
                                    if (!t)
                                        return !1;
                                    d(e)
                                }
                                return e[i].w
                            },
                            onFreeze: function (e) {
                                return c && u.NEED && l(e) && !a(e, i) && d(e),
                                    e
                            }
                        }
                }
                , function (e, t, o) {
                    var i = o(18)
                        , n = o(36)
                        , a = o(26);
                    e.exports = function (e) {
                        var t = i(e)
                            , o = n.f;
                        if (o)
                            for (var s, r = o(e), l = a.f, c = 0; r.length > c;)
                                l.call(e, s = r[c++]) && t.push(s);
                        return t
                    }
                }
                , function (e, t, o) {
                    var i = o(7)
                        , n = o(5)
                        , a = o(18);
                    e.exports = o(8) ? Object.defineProperties : function (e, t) {
                        n(e);
                        for (var o, s = a(t), r = s.length, l = 0; r > l;)
                            i.f(e, o = s[l++], t[o]);
                        return e
                    }
                }
                , function (e, t, o) {
                    var i = o(16)
                        , n = o(44).f
                        , a = {}.toString
                        , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
                        , r = function (e) {
                            try {
                                return n(e)
                            } catch (t) {
                                return s.slice()
                            }
                        };
                    e.exports.f = function (e) {
                        return s && "[object Window]" == a.call(e) ? r(e) : n(i(e))
                    }
                }
                , function (e, t, o) {
                    var i = o(84)
                        , n = o(85)
                        , a = o(21)
                        , s = o(16);
                    e.exports = o(86)(Array, "Array", function (e, t) {
                        this._t = s(e),
                            this._i = 0,
                            this._k = t
                    }, function () {
                        var e = this._t
                            , t = this._k
                            , o = this._i++;
                        return !e || o >= e.length ? (this._t = void 0,
                            n(1)) : n(0, "keys" == t ? o : "values" == t ? e[o] : [o, e[o]])
                    }, "values"),
                        a.Arguments = a.Array,
                        i("keys"),
                        i("values"),
                        i("entries")
                }
                , function (e, t, o) {
                    var i = o(1)("unscopables")
                        , n = Array.prototype;
                    null == n[i] && o(10)(n, i, {}),
                        e.exports = function (e) {
                            n[i][e] = !0
                        }
                }
                , function (e) {
                    e.exports = function (e, t) {
                        return {
                            value: t,
                            done: !!e
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(20)
                        , n = o(6)
                        , a = o(12)
                        , s = o(10)
                        , r = o(21)
                        , l = o(87)
                        , c = o(27)
                        , d = o(88)
                        , u = o(1)("iterator")
                        , h = !([].keys && "next" in [].keys())
                        , f = function () {
                            return this
                        };
                    e.exports = function (e, t, o, g, p, m, v) {
                        l(o, t, g);
                        var M, y, P, S = function (e) {
                            if (!h && e in I)
                                return I[e];
                            switch (e) {
                                case "keys":
                                case "values":
                                    return function () {
                                        return new o(this, e)
                                    }
                            }
                            return function () {
                                return new o(this, e)
                            }
                        }, A = t + " Iterator", C = "values" == p, w = !1, I = e.prototype, k = I[u] || I["@@iterator"] || p && I[p], b = k || S(p), E = p ? C ? S("entries") : b : void 0, T = "Array" == t && I.entries || k;
                        if (T && (P = d(T.call(new e))) !== Object.prototype && P.next && (c(P, A, !0),
                            i || "function" == typeof P[u] || s(P, u, f)),
                            C && k && "values" !== k.name && (w = !0,
                                b = function () {
                                    return k.call(this)
                                }
                            ),
                            i && !v || !h && !w && I[u] || s(I, u, b),
                            r[t] = b,
                            r[A] = f,
                            p)
                            if (M = {
                                values: C ? b : S("values"),
                                keys: m ? b : S("keys"),
                                entries: E
                            },
                                v)
                                for (y in M)
                                    y in I || a(I, y, M[y]);
                            else
                                n(n.P + n.F * (h || w), t, M);
                        return M
                    }
                }
                , function (e, t, o) {
                    var i = o(43)
                        , n = o(23)
                        , a = o(27)
                        , s = {};
                    o(10)(s, o(1)("iterator"), function () {
                        return this
                    }),
                        e.exports = function (e, t, o) {
                            e.prototype = i(s, {
                                next: n(1, o)
                            }),
                                a(e, t + " Iterator")
                        }
                }
                , function (e, t, o) {
                    var i = o(11)
                        , n = o(37)
                        , a = o(33)("IE_PROTO")
                        , s = Object.prototype;
                    e.exports = Object.getPrototypeOf || function (e) {
                        return e = n(e),
                            i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "createRewardedVideoAd", function () {
                            return l
                        }),
                        o.d(t, "loadRewardedVideoAd", function () {
                            return r
                        }),
                        o(40),
                        o(90),
                        o(104),
                        o(109);
                    var i = o(0);
                    function n(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function a(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var i = t[o];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    o(57);
                    var s = function () {
                        function e(t) {
                            n(this, e),
                                t.adUnitId || console.error("RewardedVideoAd no adUnitId!"),
                                Number.isInteger(t.adUnitId) || console.error("RewardedVideoAd adUnitId must be int type!"),
                                this.adUnitId = t.adUnitId || 0,
                                "Test" === i.a.systemInfo.env && (console.log("test env use adUnitId 9999"),
                                    this.adUnitId = 9999)
                        }
                        var t, o;
                        return t = e,
                            (o = [{
                                key: "show",
                                value: function () {
                                    var e = this;
                                    return new Promise(function (t, o) {
                                        i.a.webDebug ? e.doShowWeb(t, o) : e.doShow(t, o)
                                    }
                                    )
                                }
                            }, {
                                key: "doShowWeb",
                                value: function (e, t) {
                                    1 == confirm("OK ===> user view success\n Cancel ==> ad load error") ? (e(),
                                        this.onLoad && this.onLoad(),
                                        this.onClose && this.onClose({
                                            isEnded: !0
                                        })) : (this.onError && this.onError(),
                                            t(result))
                                }
                            }, {
                                key: "doShow",
                                value: function (e, t) {
                                    var o = this;
                                    this.tag = i.a.async("hg.rewardedVideoAd.show", {
                                        adUnitId: this.adUnitId
                                    }, function (n, a) {
                                        "hg.rewardedVideoAd.show" == a ? 0 == n.errCode ? (o.onLoad && o.onLoad(),
                                            e()) : 1 == n.errCode ? o.doShow(e, t) : (o.onError && o.onError(),
                                                t(n)) : "hg.rewardedVideoAd.close" == a && (o.onClose && o.onClose({
                                                    isEnded: 0 == n.errCode
                                                }),
                                                    i.a.deleteCallbackById(o.tag))
                                    }, !0)
                                }
                            }]) && a(t.prototype, o),
                            e
                    }();
                    function r(e) {
                        console.log("loadRewardedVideoAd " + JSON.stringify(e)),
                            i.a.async("hg.rewardedVideoAd.show", {
                                adUnitId: e.adUnitId,
                                cache: !0
                            }, function (t, o) {
                                "hg.rewardedVideoAd.show" == o && (1 == t.errCode || 0 == t.errCode ? console.log("hg.rewardedVideoAd cache success") : (console.log("hg.rewardedVideoAd error repeat in 5 seconds:" + t.errCode + ",msg:" + t.errMsg),
                                    setTimeout(function () {
                                        r(e)
                                    }, 5e3)))
                            })
                    }
                    function l(e) {
                        return new s(e)
                    }
                }
                , function (e, t, o) {
                    var i, n, a, s, r = o(20), l = o(2), c = o(15), d = o(38), u = o(6), h = o(4), f = o(24), g = o(91), p = o(92), m = o(50), v = o(58).set, M = o(97)(), y = o(59), P = o(98), S = o(99), A = o(100), C = l.TypeError, w = l.process, I = w && w.versions, k = I && I.v8 || "", b = l.Promise, E = "process" == d(w), T = function () { }, _ = n = y.f, R = !!function () {
                        try {
                            var e = b.resolve(1)
                                , t = (e.constructor = {})[o(1)("species")] = function (e) {
                                    e(T, T)
                                }
                                ;
                            return (E || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t && 0 !== k.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
                        } catch (i) { }
                    }(), O = function (e) {
                        var t;
                        return !(!h(e) || "function" != typeof (t = e.then)) && t
                    }, x = function (e, t) {
                        if (!e._n) {
                            e._n = !0;
                            var o = e._c;
                            M(function () {
                                for (var i = e._v, n = 1 == e._s, a = 0, s = function (t) {
                                    var o, a, s, r = n ? t.ok : t.fail, l = t.resolve, c = t.reject, d = t.domain;
                                    try {
                                        r ? (n || (2 == e._h && D(e),
                                            e._h = 1),
                                            !0 === r ? o = i : (d && d.enter(),
                                                o = r(i),
                                                d && (d.exit(),
                                                    s = !0)),
                                            o === t.promise ? c(C("Promise-chain cycle")) : (a = O(o)) ? a.call(o, l, c) : l(o)) : c(i)
                                    } catch (u) {
                                        d && !s && d.exit(),
                                            c(u)
                                    }
                                }; o.length > a;)
                                    s(o[a++]);
                                e._c = [],
                                    e._n = !1,
                                    t && !e._h && G(e)
                            })
                        }
                    }, G = function (e) {
                        v.call(l, function () {
                            var t, o, i, n = e._v, a = L(e);
                            if (a && (t = P(function () {
                                E ? w.emit("unhandledRejection", n, e) : (o = l.onunhandledrejection) ? o({
                                    promise: e,
                                    reason: n
                                }) : (i = l.console) && i.error && i.error("Unhandled promise rejection", n)
                            }),
                                e._h = E || L(e) ? 2 : 1),
                                e._a = void 0,
                                a && t.e)
                                throw t.v
                        })
                    }, L = function (e) {
                        return 1 !== e._h && 0 === (e._a || e._c).length
                    }, D = function (e) {
                        v.call(l, function () {
                            var t;
                            E ? w.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                                promise: e,
                                reason: e._v
                            })
                        })
                    }, N = function (e) {
                        var t = this;
                        t._d || (t._d = !0,
                            (t = t._w || t)._v = e,
                            t._s = 2,
                            t._a || (t._a = t._c.slice()),
                            x(t, !0))
                    }, B = function e(t) {
                        var o, i = this;
                        if (!i._d) {
                            i._d = !0,
                                i = i._w || i;
                            try {
                                if (i === t)
                                    throw C("Promise can't be resolved itself");
                                (o = O(t)) ? M(function () {
                                    var n = {
                                        _w: i,
                                        _d: !1
                                    };
                                    try {
                                        o.call(t, c(e, n, 1), c(N, n, 1))
                                    } catch (a) {
                                        N.call(n, a)
                                    }
                                }) : (i._v = t,
                                    i._s = 1,
                                    x(i, !1))
                            } catch (n) {
                                N.call({
                                    _w: i,
                                    _d: !1
                                }, n)
                            }
                        }
                    };
                    R || (b = function (e) {
                        g(this, b, "Promise", "_h"),
                            f(e),
                            i.call(this);
                        try {
                            e(c(B, this, 1), c(N, this, 1))
                        } catch (t) {
                            N.call(this, t)
                        }
                    }
                        ,
                        (i = function () {
                            this._c = [],
                                this._a = void 0,
                                this._s = 0,
                                this._d = !1,
                                this._v = void 0,
                                this._h = 0,
                                this._n = !1
                        }
                        ).prototype = o(101)(b.prototype, {
                            then: function (e, t) {
                                var o = _(m(this, b));
                                return o.ok = "function" != typeof e || e,
                                    o.fail = "function" == typeof t && t,
                                    o.domain = E ? w.domain : void 0,
                                    this._c.push(o),
                                    this._a && this._a.push(o),
                                    this._s && x(this, !1),
                                    o.promise
                            },
                            catch: function (e) {
                                return this.then(void 0, e)
                            }
                        }),
                        a = function () {
                            var e = new i;
                            this.promise = e,
                                this.resolve = c(B, e, 1),
                                this.reject = c(N, e, 1)
                        }
                        ,
                        y.f = _ = function (e) {
                            return e === b || e === s ? new a(e) : n(e)
                        }
                    ),
                        u(u.G + u.W + u.F * !R, {
                            Promise: b
                        }),
                        o(27)(b, "Promise"),
                        o(102)("Promise"),
                        s = o(14).Promise,
                        u(u.S + u.F * !R, "Promise", {
                            reject: function (e) {
                                var t = _(this);
                                return (0,
                                    t.reject)(e),
                                    t.promise
                            }
                        }),
                        u(u.S + u.F * (r || !R), "Promise", {
                            resolve: function (e) {
                                return A(r && this === s ? b : this, e)
                            }
                        }),
                        u(u.S + u.F * !(R && o(103)(function (e) {
                            b.all(e).catch(T)
                        })), "Promise", {
                            all: function (e) {
                                var t = this
                                    , o = _(t)
                                    , i = o.resolve
                                    , n = o.reject
                                    , a = P(function () {
                                        var o = []
                                            , a = 0
                                            , s = 1;
                                        p(e, !1, function (e) {
                                            var r = a++
                                                , l = !1;
                                            o.push(void 0),
                                                s++,
                                                t.resolve(e).then(function (e) {
                                                    l || (l = !0,
                                                        o[r] = e,
                                                        --s || i(o))
                                                }, n)
                                        }),
                                            --s || i(o)
                                    });
                                return a.e && n(a.v),
                                    o.promise
                            },
                            race: function (e) {
                                var t = this
                                    , o = _(t)
                                    , i = o.reject
                                    , n = P(function () {
                                        p(e, !1, function (e) {
                                            t.resolve(e).then(o.resolve, i)
                                        })
                                    });
                                return n.e && i(n.v),
                                    o.promise
                            }
                        })
                }
                , function (e) {
                    e.exports = function (e, t, o, i) {
                        if (!(e instanceof t) || void 0 !== i && i in e)
                            throw TypeError(o + ": incorrect invocation!");
                        return e
                    }
                }
                , function (e, t, o) {
                    var i = o(15)
                        , n = o(93)
                        , a = o(94)
                        , s = o(5)
                        , r = o(25)
                        , l = o(95)
                        , c = {}
                        , d = {};
                    (t = e.exports = function (e, t, o, u, h) {
                        var f, g, p, m, v = h ? function () {
                            return e
                        }
                            : l(e), M = i(o, u, t ? 2 : 1), y = 0;
                        if ("function" != typeof v)
                            throw TypeError(e + " is not iterable!");
                        if (a(v)) {
                            for (f = r(e.length); f > y; y++)
                                if ((m = t ? M(s(g = e[y])[0], g[1]) : M(e[y])) === c || m === d)
                                    return m
                        } else
                            for (p = v.call(e); !(g = p.next()).done;)
                                if ((m = n(p, M, g.value, t)) === c || m === d)
                                    return m
                    }
                    ).BREAK = c,
                        t.RETURN = d
                }
                , function (e, t, o) {
                    var i = o(5);
                    e.exports = function (e, t, o, n) {
                        try {
                            return n ? t(i(o)[0], o[1]) : t(o)
                        } catch (s) {
                            var a = e.return;
                            throw void 0 !== a && i(a.call(e)),
                            s
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(21)
                        , n = o(1)("iterator")
                        , a = Array.prototype;
                    e.exports = function (e) {
                        return void 0 !== e && (i.Array === e || a[n] === e)
                    }
                }
                , function (e, t, o) {
                    var i = o(38)
                        , n = o(1)("iterator")
                        , a = o(21);
                    e.exports = o(14).getIteratorMethod = function (e) {
                        if (null != e)
                            return e[n] || e["@@iterator"] || a[i(e)]
                    }
                }
                , function (e) {
                    e.exports = function (e, t, o) {
                        var i = void 0 === o;
                        switch (t.length) {
                            case 0:
                                return i ? e() : e.call(o);
                            case 1:
                                return i ? e(t[0]) : e.call(o, t[0]);
                            case 2:
                                return i ? e(t[0], t[1]) : e.call(o, t[0], t[1]);
                            case 3:
                                return i ? e(t[0], t[1], t[2]) : e.call(o, t[0], t[1], t[2]);
                            case 4:
                                return i ? e(t[0], t[1], t[2], t[3]) : e.call(o, t[0], t[1], t[2], t[3])
                        }
                        return e.apply(o, t)
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(58).set
                        , a = i.MutationObserver || i.WebKitMutationObserver
                        , s = i.process
                        , r = i.Promise
                        , l = "process" == o(13)(s);
                    e.exports = function () {
                        var e, t, o, c = function () {
                            var i, n;
                            for (l && (i = s.domain) && i.exit(); e;) {
                                n = e.fn,
                                    e = e.next;
                                try {
                                    n()
                                } catch (a) {
                                    throw e ? o() : t = void 0,
                                    a
                                }
                            }
                            t = void 0,
                                i && i.enter()
                        };
                        if (l)
                            o = function () {
                                s.nextTick(c)
                            }
                                ;
                        else if (!a || i.navigator && i.navigator.standalone)
                            if (r && r.resolve) {
                                var d = r.resolve(void 0);
                                o = function () {
                                    d.then(c)
                                }
                            } else
                                o = function () {
                                    n.call(i, c)
                                }
                                    ;
                        else {
                            var u = !0
                                , h = document.createTextNode("");
                            new a(c).observe(h, {
                                characterData: !0
                            }),
                                o = function () {
                                    h.data = u = !u
                                }
                        }
                        return function (i) {
                            var n = {
                                fn: i,
                                next: void 0
                            };
                            t && (t.next = n),
                                e || (e = n,
                                    o()),
                                t = n
                        }
                    }
                }
                , function (e) {
                    e.exports = function (e) {
                        try {
                            return {
                                e: !1,
                                v: e()
                            }
                        } catch (t) {
                            return {
                                e: !0,
                                v: t
                            }
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(2).navigator;
                    e.exports = i && i.userAgent || ""
                }
                , function (e, t, o) {
                    var i = o(5)
                        , n = o(4)
                        , a = o(59);
                    e.exports = function (e, t) {
                        if (i(e),
                            n(t) && t.constructor === e)
                            return t;
                        var o = a.f(e);
                        return (0,
                            o.resolve)(t),
                            o.promise
                    }
                }
                , function (e, t, o) {
                    var i = o(12);
                    e.exports = function (e, t, o) {
                        for (var n in t)
                            i(e, n, t[n], o);
                        return e
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(7)
                        , a = o(8)
                        , s = o(1)("species");
                    e.exports = function (e) {
                        var t = i[e];
                        a && t && !t[s] && n.f(t, s, {
                            configurable: !0,
                            get: function () {
                                return this
                            }
                        })
                    }
                }
                , function (e, t, o) {
                    var i = o(1)("iterator")
                        , n = !1;
                    try {
                        var a = [7][i]();
                        a.return = function () {
                            n = !0
                        }
                            ,
                            Array.from(a, function () {
                                throw 2
                            })
                    } catch (s) { }
                    e.exports = function (e, t) {
                        if (!t && !n)
                            return !1;
                        var o = !1;
                        try {
                            var a = [7]
                                , r = a[i]();
                            r.next = function () {
                                return {
                                    done: o = !0
                                }
                            }
                                ,
                                a[i] = function () {
                                    return r
                                }
                                ,
                                e(a)
                        } catch (s) { }
                        return o
                    }
                }
                , function (e, t, o) {
                    var i = o(2)
                        , n = o(11)
                        , a = o(13)
                        , s = o(105)
                        , r = o(22)
                        , l = o(9)
                        , c = o(44).f
                        , d = o(45).f
                        , u = o(7).f
                        , h = o(107).trim
                        , f = i.Number
                        , g = f
                        , p = f.prototype
                        , m = "Number" == a(o(43)(p))
                        , v = "trim" in String.prototype
                        , M = function (e) {
                            var t = r(e, !1);
                            if ("string" == typeof t && t.length > 2) {
                                var o, i, n, a = (t = v ? t.trim() : h(t, 3)).charCodeAt(0);
                                if (43 === a || 45 === a) {
                                    if (88 === (o = t.charCodeAt(2)) || 120 === o)
                                        return NaN
                                } else if (48 === a) {
                                    switch (t.charCodeAt(1)) {
                                        case 66:
                                        case 98:
                                            i = 2,
                                                n = 49;
                                            break;
                                        case 79:
                                        case 111:
                                            i = 8,
                                                n = 55;
                                            break;
                                        default:
                                            return +t
                                    }
                                    for (var s, l = t.slice(2), c = 0, d = l.length; c < d; c++)
                                        if ((s = l.charCodeAt(c)) < 48 || s > n)
                                            return NaN;
                                    return parseInt(l, i)
                                }
                            }
                            return +t
                        };
                    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
                        f = function (e) {
                            var t = arguments.length < 1 ? 0 : e
                                , o = this;
                            return o instanceof f && (m ? l(function () {
                                p.valueOf.call(o)
                            }) : "Number" != a(o)) ? s(new g(M(t)), o, f) : M(t)
                        }
                            ;
                        for (var y, P = o(8) ? c(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; P.length > S; S++)
                            n(g, y = P[S]) && !n(f, y) && u(f, y, d(g, y));
                        f.prototype = p,
                            p.constructor = f,
                            o(12)(i, "Number", f)
                    }
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = o(106).set;
                    e.exports = function (e, t, o) {
                        var a, s = t.constructor;
                        return s !== o && "function" == typeof s && (a = s.prototype) !== o.prototype && i(a) && n && n(e, a),
                            e
                    }
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = o(5)
                        , a = function (e, t) {
                            if (n(e),
                                !i(t) && null !== t)
                                throw TypeError(t + ": can't set as prototype!")
                        };
                    e.exports = {
                        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, i) {
                            try {
                                (i = o(15)(Function.call, o(45).f(Object.prototype, "__proto__").set, 2))(e, []),
                                    t = !(e instanceof Array)
                            } catch (n) {
                                t = !0
                            }
                            return function (e, o) {
                                return a(e, o),
                                    t ? e.__proto__ = o : i(e, o),
                                    e
                            }
                        }({}, !1) : void 0),
                        check: a
                    }
                }
                , function (e, t, o) {
                    var i = o(6)
                        , n = o(19)
                        , a = o(9)
                        , s = o(108)
                        , r = "[" + s + "]"
                        , l = RegExp("^" + r + r + "*")
                        , c = RegExp(r + r + "*$")
                        , d = function (e, t, o) {
                            var n = {}
                                , r = a(function () {
                                    return !!s[e]() || "\u200b\x85" != "\u200b\x85"[e]()
                                })
                                , l = n[e] = r ? t(u) : s[e];
                            o && (n[o] = l),
                                i(i.P + i.F * r, "String", n)
                        }
                        , u = d.trim = function (e, t) {
                            return e = String(n(e)),
                                1 & t && (e = e.replace(l, "")),
                                2 & t && (e = e.replace(c, "")),
                                e
                        }
                        ;
                    e.exports = d
                }
                , function (e) {
                    e.exports = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"
                }
                , function (e, t, o) {
                    var i = o(6);
                    i(i.S, "Number", {
                        isInteger: o(110)
                    })
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = Math.floor;
                    e.exports = function (e) {
                        return !i(e) && isFinite(e) && n(e) === e
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getSubModuleUrlSync", function () {
                            return a
                        });
                    var i = o(0)
                        , n = o(29);
                    function a(e) {
                        var t = i.a.sync("hg.getSubModule", {
                            id: e.id
                        });
                        console.log("getSubModuleUrlSync " + i.a.gameId + " " + t),
                            console.log("submodule gameId" + i.a.gameId);
                        var o = 0;
                        return t || (o = -1),
                            n.a.reportMetrics({
                                uri: "submodule_url/" + i.a.gameId,
                                time: 0,
                                code: o
                            }),
                        {
                            url: t
                        }
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "setRank", function () {
                            return r
                        }),
                        o.d(t, "getRank", function () {
                            return l
                        }),
                        o(60);
                    var i = o(3)
                        , n = o(0)
                        , a = o(61)
                        , s = o.n(a);
                    function r(e) {
                        var t = (new Date).getTime()
                            , o = JSON.stringify({
                                tagId: e.name ? e.name : "default",
                                rankMode: [e.type ? e.type : 0],
                                isBigger: !!e.bigFirst,
                                isReplace: !1,
                                score: e.score,
                                timeUnix: t
                            })
                            , a = {
                                payload: o,
                                sign: s()(t + o)
                            }
                            , r = JSON.stringify(a);
                        console.log("reportRank dataStr", r),
                            i.a.postApi("/lianyun/rank/report?js_code=" + n.a.code, a, function (t, o) {
                                console.log("reportRank res ", t, o),
                                    t && 0 == o.errcode ? e.success() : e.fail(o)
                            })
                    }
                    function l(e) {
                        (new Date).getTime();
                        var t = {
                            tagId: e.name ? e.name : "default",
                            rankMode: e.type ? e.type : 0,
                            daysDesc: 0,
                            page: e.page ? e.page : 1,
                            size: e.size ? e.size : 20
                        }
                            , o = {
                                payload: t
                            }
                            , a = JSON.stringify(o);
                        console.log("reportRank dataStr", a),
                            i.a.postApi("/lianyun/rank/global?js_code=" + n.a.code, t, function (t, o) {
                                console.log("reportRank res ", t, o),
                                    t && 0 == o.errcode ? e.success(o.data) : e.fail(o)
                            })
                    }
                }
                , function (e) {
                    var t, o, i = e.exports = {};
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function a() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function s(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === n || !t) && setTimeout)
                            return t = setTimeout,
                                setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (o) {
                            try {
                                return t.call(null, e, 0)
                            } catch (o) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    function r(e) {
                        if (o === clearTimeout)
                            return clearTimeout(e);
                        if ((o === a || !o) && clearTimeout)
                            return o = clearTimeout,
                                clearTimeout(e);
                        try {
                            return o(e)
                        } catch (t) {
                            try {
                                return o.call(null, e)
                            } catch (t) {
                                return o.call(this, e)
                            }
                        }
                    }
                    (function () {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : n
                        } catch (e) {
                            t = n
                        }
                        try {
                            o = "function" == typeof clearTimeout ? clearTimeout : a
                        } catch (e) {
                            o = a
                        }
                    }
                    )();
                    var l, c = [], d = !1, u = -1;
                    function h() {
                        d && l && (d = !1,
                            l.length ? c = l.concat(c) : u = -1,
                            c.length && f())
                    }
                    function f() {
                        if (!d) {
                            var e = s(h);
                            d = !0;
                            for (var t = c.length; t;) {
                                for (l = c,
                                    c = []; ++u < t;)
                                    l && l[u].run();
                                u = -1,
                                    t = c.length
                            }
                            l = null,
                                d = !1,
                                r(e)
                        }
                    }
                    function g(e, t) {
                        this.fun = e,
                            this.array = t
                    }
                    function p() { }
                    i.nextTick = function (e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var o = 1; o < arguments.length; o++)
                                t[o - 1] = arguments[o];
                        c.push(new g(e, t)),
                            1 !== c.length || d || s(f)
                    }
                        ,
                        g.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }
                        ,
                        i.title = "browser",
                        i.browser = !0,
                        i.env = {},
                        i.argv = [],
                        i.version = "",
                        i.versions = {},
                        i.on = p,
                        i.addListener = p,
                        i.once = p,
                        i.off = p,
                        i.removeListener = p,
                        i.removeAllListeners = p,
                        i.emit = p,
                        i.prependListener = p,
                        i.prependOnceListener = p,
                        i.listeners = function () {
                            return []
                        }
                        ,
                        i.binding = function () {
                            throw new Error("process.binding is not supported")
                        }
                        ,
                        i.cwd = function () {
                            return "/"
                        }
                        ,
                        i.chdir = function () {
                            throw new Error("process.chdir is not supported")
                        }
                        ,
                        i.umask = function () {
                            return 0
                        }
                }
                , function (e) {
                    var t;
                    t = function () {
                        return this
                    }();
                    try {
                        t = t || new Function("return this")()
                    } catch (o) {
                        "object" == typeof window && (t = window)
                    }
                    e.exports = t
                }
                , function (e) {
                    (function (t) {
                        e.exports = t
                    }
                    ).call(this, {})
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getAIUser", function () {
                            return a
                        }),
                        o(41),
                        o(42),
                        o(28);
                    var i = o(3)
                        , n = o(0);
                    function a(e) {
                        console.log("getAIUser called"),
                            e || (e = {}),
                            e.num || (e.num = 1),
                            console.log("getAIUser num", e.num),
                            i.a.getApi("/AI/get", {
                                data: JSON.stringify(e),
                                js_code: n.a.code
                            }, function (t, o) {
                                if (console.log("getAIUser res ", t, o),
                                    t)
                                    if (0 == o.errcode) {
                                        var i = !0
                                            , a = !1
                                            , s = void 0;
                                        try {
                                            for (var r, l = o.data[Symbol.iterator](); !(i = (r = l.next()).done); i = !0) {
                                                var c = r.value;
                                                c.avataUrl = n.a.resizeImage(c.avataUrl)
                                            }
                                        } catch (d) {
                                            a = !0,
                                                s = d
                                        } finally {
                                            try {
                                                i || null == l.return || l.return()
                                            } finally {
                                                if (a)
                                                    throw s
                                            }
                                        }
                                        e.success(o.data)
                                    } else
                                        e.fail(o);
                                else
                                    e.fail(o)
                            })
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "initWebDebug", function () {
                            return a
                        });
                    var i = o(0)
                        , n = o(3);
                    function a(e) {
                        if (window.yyrt)
                            console.error("jssdk in hago app can't initWebDebug");
                        else if (console.log("jssdk initWebDebug"),
                            i.a.webDebug = !0,
                            e && e.gameId) {
                            e.success || (e.success = function () {
                                console.log("jssdk Init success")
                            }
                            ),
                                e.fail || (e.fail = function () {
                                    console.log("jssdk Init fail")
                                }
                                );
                            var t = [void 0, {
                                systemInfo: {
                                    brand: "samsung",
                                    countryCode: "ID",
                                    env: "Test",
                                    language: "id",
                                    model: "SM-G935V",
                                    pixelRatio: 480,
                                    screenHeight: 1920,
                                    screenWidth: 1080,
                                    statusBarHeight: 72,
                                    windowHeight: 1920,
                                    windowWidth: 1080
                                },
                                uid: 101001267,
                                friendUids: [101339111, 101339112],
                                tokenData: {
                                    adUnitIds: [],
                                    code: "9aS1u8bGy1PWyA0yz44NdUOdjLiCEAcAO4VOlUZH1pt7rAFqZTwqm76z0J295JU1piJspleybeKHcetvQ8QdSA==",
                                    moduleMap: {},
                                    openid: "9WW0Oa0XGRAVXCOwygylq8X5pls6qHj3"
                                },
                                userInfo: {
                                    avatarUrl: "https://kaixindou.kaixindou.net/user_avatar/101336588_1527510296077.jpg",
                                    city: "",
                                    country: "",
                                    gender: 1,
                                    language: "id",
                                    nickName: "haha",
                                    province: ""
                                }
                            }, {
                                systemInfo: {
                                    brand: "samsung",
                                    countryCode: "ID",
                                    env: "Test",
                                    language: "id",
                                    model: "SM-G935V",
                                    pixelRatio: 480,
                                    screenHeight: 1920,
                                    screenWidth: 1080,
                                    statusBarHeight: 72,
                                    windowHeight: 1920,
                                    windowWidth: 1080
                                },
                                uid: 101339111,
                                friendUids: [101001267, 101339112],
                                tokenData: {
                                    adUnitIds: [],
                                    code: "dx3I4X1TFsEb7umJgrncAulMGhaztm3RKw_D3cqzPXAMSDy4Qpn532YKV1ZP3JyqCFFJ8n37i9cBDJst4A-5QKFXDh2YOR3En-knKypqvoo=",
                                    moduleMap: {},
                                    openid: "PLRmzT3TuEM+rL3s6zx0tfkDr52YccLTR0JGAx9DQ6N1rIQL86OGtw=="
                                },
                                userInfo: {
                                    avatarUrl: "https://o-hk.ihago.net/ikxd/54366b6b08536a0c5ba4d340fbddf1e2/guest_4.png",
                                    city: "",
                                    country: "",
                                    gender: 1,
                                    language: "id",
                                    nickName: "axdq9183",
                                    province: ""
                                }
                            }, {
                                systemInfo: {
                                    brand: "samsung",
                                    countryCode: "ID",
                                    env: "Test",
                                    language: "id",
                                    model: "SM-G935V",
                                    pixelRatio: 480,
                                    screenHeight: 1920,
                                    screenWidth: 1080,
                                    statusBarHeight: 72,
                                    windowHeight: 1920,
                                    windowWidth: 1080
                                },
                                uid: 101339112,
                                friendUids: [101001267, 101339111],
                                tokenData: {
                                    adUnitIds: [],
                                    code: "N0Mgc2l-xF2KtX19g8o7u6tWZaFQJ99k4h9rS5QJpsRVWUljAa-A3Toh8WK9FNPjNev1zC9uaJtip-gSvagb8qPJSR49MVaPdrk08nRNNW8=",
                                    moduleMap: {},
                                    openid: "PLRmzT3TuEOgpBXXtSrv/SPj2Dy2mt7Otwt9HGeWFcOkZYJcfxUekA=="
                                },
                                userInfo: {
                                    avatarUrl: "https://o-hk.ihago.net/ikxd/3db395b39f961b398ec23fc1e868673f/guest_2.png",
                                    city: "",
                                    country: "",
                                    gender: 1,
                                    language: "id",
                                    nickName: "noms2967",
                                    province: ""
                                }
                            }];
                            void 0 === t[e.user] && (console.log("jssdk mock user use default 1"),
                                e.user = 1);
                            var o = t[e.user];
                            i.a.friendUids = o.friendUids,
                                i.a.uid = o.uid,
                                i.a.systemInfo = o.systemInfo,
                                i.a.userInfo = o.userInfo,
                                i.a.userInfo.openid = o.tokenData.openid,
                                i.a.gameId = e.gameId,
                                e.env && (i.a.systemInfo.env = e.env),
                                e.countryCode && (i.a.systemInfo.countryCode = e.countryCode),
                                e.language && (i.a.systemInfo.language = e.language),
                                console.log("user info", o),
                                n.a.getApi("/jssdk/hagoToken2code", {
                                    token: o.uid,
                                    gameid: e.gameId
                                }, function (t, o) {
                                    console.log("hagosdk get hagoToken2Code res ", t, o),
                                        t ? (i.a.code = o.code,
                                            i.a.openid = o.openid,
                                            0 == o.errcode ? e.success({
                                                msg: "success"
                                            }) : e.fail({
                                                msg: o.msg
                                            })) : e.fail(o)
                                }),
                                console.log("jssdk initWebDebug gameId", e.gameId)
                        } else
                            e.fail({
                                msg: "invalid object"
                            })
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "createVoiceChannel", function () {
                            return r
                        }),
                        o(40),
                        o(41),
                        o(42),
                        o(28);
                    var i = o(0);
                    function n(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function a(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var i = t[o];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    var s = function () {
                        function e(t) {
                            var o = this;
                            n(this, e),
                                t.channelId || console.error("Channel no channelId"),
                                this.channelId = t.channelId,
                                i.a.listen("hg.channel.micState.callback", function (e) {
                                    var t = e
                                        , i = !0
                                        , n = !1
                                        , a = void 0;
                                    try {
                                        for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done); i = !0) {
                                            var l = s.value;
                                            o.micStateCallback && o.micStateCallback(l.uid, l.state)
                                        }
                                    } catch (c) {
                                        n = !0,
                                            a = c
                                    } finally {
                                        try {
                                            i || null == r.return || r.return()
                                        } finally {
                                            if (n)
                                                throw a
                                        }
                                    }
                                }),
                                i.a.listen("hg.channel.speakState.callback", function (e) {
                                    var t = e
                                        , i = !0
                                        , n = !1
                                        , a = void 0;
                                    try {
                                        for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done); i = !0) {
                                            var l = s.value;
                                            o.speakStateCallback && o.speakStateCallback(l.uid, l.state)
                                        }
                                    } catch (c) {
                                        n = !0,
                                            a = c
                                    } finally {
                                        try {
                                            i || null == r.return || r.return()
                                        } finally {
                                            if (n)
                                                throw a
                                        }
                                    }
                                })
                        }
                        var t, o;
                        return t = e,
                            (o = [{
                                key: "join",
                                value: function () {
                                    i.a.async("hg.channel.join", {
                                        channelId: this.channelId
                                    }, function (e, t) {
                                        console.log("hg.channel.join" + e + t)
                                    })
                                }
                            }, {
                                key: "exit",
                                value: function () {
                                    i.a.async("hg.channel.exit", {
                                        channelId: this.channelId
                                    }, function (e, t) {
                                        console.log("hg.channel.exit" + e + t)
                                    }),
                                        i.a.cancelListen("hg.channel.micState.callback"),
                                        i.a.cancelListen("hg.channel.speakState.callback")
                                }
                            }, {
                                key: "operateMic",
                                value: function (e, t) {
                                    i.a.async("hg.channel.operateMic", {
                                        channelId: this.channelId,
                                        operateMic: e
                                    }, function (e) {
                                        t && t(e.code, e.operateMic)
                                    })
                                }
                            }, {
                                key: "setMicStateCallback",
                                value: function (e) {
                                    this.micStateCallback = e,
                                        i.a.asyncV1("hg.queryMicState", {}, function () { })
                                }
                            }, {
                                key: "setSpeakStateCallback",
                                value: function (e) {
                                    this.speakStateCallback = e
                                }
                            }]) && a(t.prototype, o),
                            e
                    }();
                    function r(e) {
                        return new s(e)
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getMatchupInfo", function () {
                            return a
                        }),
                        o.d(t, "getMatchupUrl", function () {
                            return u
                        }),
                        o.d(t, "pkStart", function () {
                            return h
                        }),
                        o.d(t, "pkFinish", function () {
                            return g
                        }),
                        o.d(t, "pkFinishError", function () {
                            return p
                        }),
                        o.d(t, "listenPkExit", function () {
                            return c
                        }),
                        o.d(t, "exitPkGame", function () {
                            return d
                        }),
                        o.d(t, "pkResult", function () {
                            return f
                        }),
                        o(60),
                        o(49),
                        o(28),
                        o(120),
                        o(51);
                    var i, n = o(0);
                    function a() {
                        if (n.a.gameUrl) {
                            var e = s(n.a.gameUrl).post_data;
                            return console.info("hg.getMatchupInfo " + e),
                                JSON.parse(e)
                        }
                        return {}
                    }
                    function s(e) {
                        e || (e = location.href);
                        var t = e.indexOf("?")
                            , o = e.indexOf("#");
                        if (-1 == o && -1 == t)
                            return {};
                        -1 == o && (o = e.length);
                        var i = -1 == t || o == t + 1 ? e.substring(o) : e.substring(t + 1, o)
                            , n = {};
                        return i.split("&").forEach(function (e) {
                            if (e) {
                                var t = (e = e.split("+").join(" ")).indexOf("=")
                                    , o = t > -1 ? e.substr(0, t) : e
                                    , i = t > -1 ? decodeURIComponent(e.substr(t + 1)) : ""
                                    , a = o.indexOf("[");
                                if (-1 == a)
                                    n[decodeURIComponent(o)] = i;
                                else {
                                    var s = o.indexOf("]", a)
                                        , r = decodeURIComponent(o.substring(a + 1, s));
                                    o = decodeURIComponent(o.substring(0, a)),
                                        n[o] || (n[o] = []),
                                        r ? n[o][r] = i : n[o].push(i)
                                }
                            }
                        }),
                            n
                    }
                    function r(e) {
                        i = s(e);
                        var t = l("wsscheme") || "wss"
                            , o = l("websocketdomain")
                            , n = l("port")
                            , a = l("sign")
                            , r = l("nonstr")
                            , c = l("timestamp")
                            , d = l("post_data")
                            , u = (l("tpl"),
                                l("ver"),
                                JSON.parse(decodeURIComponent(d)))
                            , h = t + "://" + o + ":" + n + "/" + u.gameid + "/" + u.roomid + "/?post_data=" + encodeURIComponent(d) + "&timestamp=" + c + "&nonstr=" + encodeURIComponent(r) + "&sign=" + a;
                        return console.log("hagosdk wssUrl " + h),
                            h
                    }
                    function l(e) {
                        return i[e]
                    }
                    function c(e) {
                        n.a.listen("hg.pkExit.notify", e)
                    }
                    function d() {
                        n.a.asyncV1("hg.pkExit")
                    }
                    function u() {
                        return r(n.a.gameUrl)
                    }
                    function h() {
                        n.a.asyncV1("hg.onGameStageChange", {
                            stage: 6
                        })
                    }
                    function f(e) {
                        n.a.asyncV1("hg.pkResult", {
                            result: JSON.stringify(e)
                        })
                    }
                    function g(e) {
                        n.a.asyncV1("hg.onGameStageChange", {
                            stage: 7,
                            result: JSON.stringify(e)
                        })
                    }
                    function p(e) {
                        n.a.asyncV1("hg.onGameStageChange", {
                            stage: 8,
                            message: e.message
                        })
                    }
                }
                , function (e, t, o) {
                    var i = o(6)
                        , n = o(121)(0)
                        , a = o(52)([].forEach, !0);
                    i(i.P + i.F * !a, "Array", {
                        forEach: function (e) {
                            return n(this, e, arguments[1])
                        }
                    })
                }
                , function (e, t, o) {
                    var i = o(15)
                        , n = o(31)
                        , a = o(37)
                        , s = o(25)
                        , r = o(122);
                    e.exports = function (e, t) {
                        var o = 1 == e
                            , l = 2 == e
                            , c = 3 == e
                            , d = 4 == e
                            , u = 6 == e
                            , h = 5 == e || u
                            , f = t || r;
                        return function (t, r, g) {
                            for (var p, m, v = a(t), M = n(v), y = i(r, g, 3), P = s(M.length), S = 0, A = o ? f(t, P) : l ? f(t, 0) : void 0; P > S; S++)
                                if ((h || S in M) && (m = y(p = M[S], S, v),
                                    e))
                                    if (o)
                                        A[S] = m;
                                    else if (m)
                                        switch (e) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return p;
                                            case 6:
                                                return S;
                                            case 2:
                                                A.push(p)
                                        }
                                    else if (d)
                                        return !1;
                            return u ? -1 : c || d ? d : A
                        }
                    }
                }
                , function (e, t, o) {
                    var i = o(123);
                    e.exports = function (e, t) {
                        return new (i(e))(t)
                    }
                }
                , function (e, t, o) {
                    var i = o(4)
                        , n = o(55)
                        , a = o(1)("species");
                    e.exports = function (e) {
                        var t;
                        return n(e) && ("function" != typeof (t = e.constructor) || t !== Array && !n(t.prototype) || (t = void 0),
                            i(t) && null === (t = t[a]) && (t = void 0)),
                            void 0 === t ? Array : t
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "subscribeGame", function () {
                            return s
                        }),
                        o.d(t, "unsubscribeGame", function () {
                            return r
                        }),
                        o.d(t, "getGameSubscribeStatus", function () {
                            return l
                        }),
                        o.d(t, "sendMsgInGame", function () {
                            return n
                        }),
                        o.d(t, "getGameInviteInfo", function () {
                            return a
                        });
                    var i = o(0);
                    function n(e) {
                        e && e.toUserId && e.gameId ? i.a.asyncV1("hg.sendMsgInGame", {
                            gameId: e.gameId,
                            roomId: e.roomId ? e.roomId : "default",
                            toUserId: e.toUserId,
                            content: e.toUserId,
                            infoPayLoad: e.infoPayLoad
                        }) : console.error("sendMsgInGame invalid object " + e)
                    }
                    function a() {
                        return i.a.gameInviteInfo
                    }
                    function s(e) {
                        e && e.gameId || console.error("subscribeGame empty gameId"),
                            i.a.asyncV1("hg.subscribeGame", {
                                gameId: e.gameId
                            })
                    }
                    function r(e) {
                        e && e.gameId ? i.a.asyncV1("hg.unsubscribeGame", {
                            gameId: e.gameId
                        }) : console.error("unsubscribeGame empty gameId")
                    }
                    function l(e) {
                        e && e.gameId || console.error("getGameSubscribeStatus empty gameId"),
                            i.a.asyncV1("hg.getGameSubscribeStatus", {
                                gameId: e.gameId
                            }, function (t) {
                                e.success && e.success(t.status)
                            })
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "getFriendInfos", function () {
                            return n
                        }),
                        o.d(t, "addFriend", function () {
                            return a
                        });
                    var i = o(0);
                    function n(e) {
                        e ? i.a.asyncV1("hg.getFriendInfos", {}, function (t) {
                            0 === t.errCode ? (console.log("getFriendInfos success " + t.users),
                                e.success && e.success(JSON.parse(t.users))) : e.fail && e.fail({
                                    errCode: t.errCode,
                                    errMsg: t.errMsg
                                })
                        }) : console.error("invalid object")
                    }
                    function a(e) {
                        e && e.uid ? i.a.asyncV1("hg.addFriend", {
                            uid: e.uid
                        }, function (t) {
                            1 === t.code ? (console.log("addFriend success"),
                                e.success && e.success({
                                    errCode: t.code
                                })) : e.fail && e.fail({
                                    errCode: t.code
                                })
                        }) : console.error("addFriend no uid")
                    }
                }
                , function (e, t, o) {
                    o.r(t),
                        o.d(t, "startVoiceRecord", function () {
                            return s
                        }),
                        o.d(t, "cancelVoiceRecord", function () {
                            return c
                        }),
                        o.d(t, "stopVoiceRecord", function () {
                            return l
                        }),
                        o.d(t, "uploadVoiceRecord", function () {
                            return d
                        }),
                        o.d(t, "playVoiceRecord", function () {
                            return h
                        }),
                        o.d(t, "stopPlayVoiceRecord", function () {
                            return g
                        }),
                        o.d(t, "pausePlayVoiceRecord", function () {
                            return p
                        }),
                        o.d(t, "resumePlayVoiceRecord", function () {
                            return m
                        }),
                        o.d(t, "downLoadVoiceRecord", function () {
                            return v
                        }),
                        o.d(t, "cancelDownLoadVoiceRecord", function () {
                            return y
                        }),
                        o.d(t, "setDownLoadVoiceRecordCallback", function () {
                            return M
                        }),
                        o.d(t, "setPlayVoiceRecordCallback", function () {
                            return f
                        }),
                        o.d(t, "setStartVoiceRecordCallback", function () {
                            return r
                        }),
                        o.d(t, "setUploadVoiceRecordCallback", function () {
                            return u
                        }),
                        o.d(t, "isRecordSupport", function () {
                            return n
                        }),
                        o.d(t, "requestRecordAudioPermission", function () {
                            return a
                        });
                    var i = o(0);
                    function n(e) {
                        e || console.error("isRecordSupport empty object"),
                            i.a.asyncV1("hg.isRecordSupport(", {}, function (t) {
                                e.success && e.success(t.support)
                            })
                    }
                    function a(e) {
                        e && e.gameId ? i.a.asyncV1("hg.requestRecordAudioPermission", {
                            gameId: e.gameId
                        }, function (t) {
                            e.success && e.success(t.result)
                        }) : console.error("requestRecordAudioPermission empty gameId")
                    }
                    function s(e) {
                        e && e.gameId && e.roomId ? i.a.asyncV1("hg.startVoiceRecord", {
                            gameId: e.gameId,
                            roomId: e.roomId,
                            maxDuration: e.maxDuration
                        }) : console.error("startVoiceRecord invalid object" + e)
                    }
                    function r(e) {
                        i.a.listen("hg.startVoiceRecord.callback", function (t) {
                            console.log("startvoicecallback " + JSON.stringify(date)),
                                e && e(t.code, t.localId, t.result)
                        })
                    }
                    function l(e) {
                        e && e.localId ? i.a.asyncV1("hg.stopVoiceRecord", {
                            localId: e.localId
                        }, function () { }) : console.error("stopVoiceRecord empty localId")
                    }
                    function c(e) {
                        e && e.localId || console.log("cancelVoiceRecord empty localId"),
                            i.a.asyncV1("hg.cancelVoiceRecord", {
                                localId: e.localId
                            }, function () { })
                    }
                    function d(e) {
                        e && e.localId ? i.a.asyncV1("hg.uploadVoiceRecord", {
                            localId: e.localId
                        }) : console.error("uploadVoiceRecord empty localId")
                    }
                    function u(e) {
                        i.a.listen("hg.uploadVoiceRecord.callback", function (t) {
                            e && e(t.code, t.recordUrl, t.result)
                        })
                    }
                    function h(e) {
                        e && e.recordId ? i.a.asyncV1("hg.playVoiceRecord", {
                            recordId: e.recordId
                        }) : console.log("playVoiceRecord empty recordId")
                    }
                    function f(e) {
                        i.a.listen("hg.playVoiceRecord.callback", function (t) {
                            e && e(t.code, t.recordId, t.result)
                        })
                    }
                    function g(e) {
                        e && e.recordId ? i.a.asyncV1("hg.stopPlayVoiceRecord", {
                            recordId: e.recordId
                        }) : console.log("stopPlayVoiceRecord empty recordId")
                    }
                    function p(e) {
                        e && e.recordId ? i.a.asyncV1("hg.pausePlayVoiceRecord", {
                            recordId: e.recordId
                        }) : console.log("pausePlayVoiceRecord empty recordId")
                    }
                    function m(e) {
                        e && e.recordId ? i.a.asyncV1("hg.resumePlayVoiceRecord", {
                            recordId: e.recordId
                        }) : console.log("resumePlayVoiceRecord empty recordId")
                    }
                    function v(e) {
                        e && e.recordUrl && i.a.asyncV1("hg.downLoadVoiceRecord", {
                            recordUrl: e.recordUrl
                        })
                    }
                    function M(e) {
                        i.a.listen("hg.downLoadVoiceRecord.callback", function (t) {
                            e && e(t.code, t.recordUrl, t.result)
                        })
                    }
                    function y(e) {
                        e && e.recordId ? i.a.asyncV1("hg.cancelDownLoadVoiceRecord", {
                            recordUrl: e.recordUrl
                        }) : console.log("resumePlayVoiceRecord empty recordId")
                    }
                }
            ])),
            cc._RF.pop()
    }
        , {}]
}, {}, ["CustomAdNode", "LoadScene", "BaseDialog", "BaseModel", "BaseScene", "Enum", "HotUpdate", "Interface", "IAI", "IBlindBox", "IBlock", "IChapter", "ICity", "IDecorate", "IExchangeCode", "IGift", "IHero", "II18n", "IItem", "ILevel", "ILevelTask", "IPass", "IPurchase", "ISignIn", "ISoldier", "IStore", "ITask", "ITower", "Skill", "MAd", "MAudio", "MBundle", "MConfig", "MData", "MDialog", "MEvent", "MI18n", "MIP", "MItem", "MModel", "MMove", "MNavigate", "MPool", "MRank", "MScreenshot", "MSkill", "MTask", "MToast", "MTween", "ModelAccount", "ModelBattle", "ModelBlindBox", "ModelChristmas", "ModelCommon", "ModelGift", "ModelGuide", "ModelHalloween", "ModelHero", "ModelMothersDay", "ModelNewYear", "ModelNewbieTask", "ModelPass", "ModelPause", "ModelSignIn", "ModelStore", "ModelTask", "ModelThanksgiving", "UserData", "NavigateAd", "OnEnginLaunch", "Rsv", "Temporary", "Urls", "Utils", "hagosdk", "ImgLoop"]);
