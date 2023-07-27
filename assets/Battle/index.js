window.__require = function e(t, i, l) {
    function s(n, a) {
        if (!i[n]) {
            if (!t[n]) {
                var c = n.split("/");
                if (c = c[c.length - 1],
                    !t[c]) {
                    var r = "function" == typeof __require && __require;
                    if (!a && r)
                        return r(c, !0);
                    if (o)
                        return o(c, !0);
                    throw new Error("Cannot find module '" + n + "'")
                }
                n = c
            }
            var p = i[n] = {
                exports: {}
            };
            t[n][0].call(p.exports, function (e) {
                return s(t[n][1][e] || e)
            }, p, p.exports, e, t, i, l)
        }
        return i[n].exports
    }
    for (var o = "function" == typeof __require && __require, n = 0; n < l.length; n++)
        s(l[n]);
    return s
}({
    AI: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "3458eVmCexAM5qL2C/usIQ8", "AI");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Enum")
            , o = e("../../../Script/Manager/MConfig")
            , n = e("../../../Script/Manager/MEvent")
            , a = e("../../../Script/Manager/MModel")
            , c = e("../BattleData")
            , { ccclass: r, property: p } = cc._decorator;
        var h, d;
        (function (e) {
            e[e.Attack = 0] = "Attack",
                e[e.Supply = 1] = "Supply"
        }
        )(h || (h = {})),
            function (e) {
                e[e.Grey = 0] = "Grey",
                    e[e.Enemy = 1] = "Enemy"
            }(d || (d = {}));
        let u = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.switch = "",
                    this.skill6001Status = "",
                    this.skill6112Status = "",
                    this.timeOutSleep = -1,
                    this.timeOutNormalWait = -1,
                    this.timeOutFightBackWait = -1
            }
            onEnable() {
                this.activate(),
                    n.MEvent.on(n.EMsg.Connected, e => {
                        if ("frozen" != this.skill6001Status && "pollute" != this.skill6112Status && this.city.city.serialnum == e.tail.serialnum && !e.tail.exports.find(t => t.serialnum == e.head.serialnum)) {
                            let t = [...o.MConfig.TableAIAction.values()].find(e => e.aiLevel == this.aiAttributeInfo.aiLevel);
                            100 * Math.random() < t.fightBackChance && (-1 != this.timeOutFightBackWait && clearTimeout(this.timeOutFightBackWait),
                                -1 != this.timeOutNormalWait && clearTimeout(this.timeOutNormalWait),
                                -1 != this.timeOutSleep && clearTimeout(this.timeOutSleep),
                                this.enterFightBackWait(() => {
                                    let t = this.city.getRouteByLevel(this.city.city.level);
                                    this.city.city.exports.length >= t && this.city.randomCutConnect(),
                                        n.MEvent.emit(n.EMsg.ConnectCity, {
                                            head: e.tail,
                                            tail: e.head
                                        }),
                                        this.enterNormalWait(() => {
                                            this.action()
                                        }
                                        )
                                }
                                ))
                        }
                    }
                        , this)
            }
            init(e) {
                this.city = this.getComponent("City");
                let t = [];
                a.MModel.Battle.gameEvent == s.EGameEvent.None ? a.MModel.Battle.gameModel == s.EGameModel.Normal ? t = [...o.MConfig.TableAIAttribute.values()] : a.MModel.Battle.gameModel == s.EGameModel.Infernal && (t = [...o.MConfig.TableIfAIAttribute.values()]) : a.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? t = [...o.MConfig.TableActivityAIAttribute.values()] : a.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (t = [...o.MConfig.TableActivityAIAttribute.values()]);
                let i = a.MModel.Battle.getUseLevel();
                if (e.origin == s.EAIOrigin.Default)
                    this.aiAttributeInfo = t.find(e => e.level == i && e.camp == this.city.city.camp && e.citySerialnum == this.city.city.serialnum),
                        this.enterSleep(() => {
                            this.connect({
                                givens: this.aiAttributeInfo.firstConnects
                            }),
                                this.enterNormalWait(() => {
                                    this.action()
                                }
                                )
                        }
                        );
                else {
                    let e = t.find(e => e.level == i && e.camp == this.city.city.camp && -1 == e.citySerialnum);
                    this.aiAttributeInfo = {
                        id: e.id,
                        level: e.level,
                        citySerialnum: this.city.city.serialnum,
                        camp: e.camp,
                        aiLevel: e.aiLevel,
                        sleepTime: e.sleepTime,
                        actionInterval: e.actionInterval,
                        connects: e.connects,
                        firstConnects: e.firstConnects
                    },
                        this.enterNormalWait(() => {
                            this.action()
                        }
                        )
                }
            }
            activate() {
                this.switch = "on"
            }
            invalid() {
                this.switch = "off",
                    this.skill6001Status = "",
                    this.unscheduleAllCallbacks(),
                    -1 != this.timeOutFightBackWait && clearTimeout(this.timeOutFightBackWait),
                    -1 != this.timeOutNormalWait && clearTimeout(this.timeOutNormalWait),
                    -1 != this.timeOutSleep && clearTimeout(this.timeOutSleep)
            }
            frozen() {
                this.skill6001Status = "frozen",
                    this.city.outAppointSpeed = 0,
                    this.city.updateOutSpeed(),
                    this.city.quitAutoUplevel()
            }
            thaw() {
                this.skill6001Status = "thaw",
                    this.city.outAppointSpeed = -1,
                    this.city.updateOutSpeed(),
                    this.city.checkAutoUplevel()
            }
            pollute() {
                for (; this.city.city.exports.length > 0;) {
                    let e = {
                        head: this.city.city,
                        tail: this.city.city.exports[0]
                    };
                    n.MEvent.emit(n.EMsg.CutConnect, e)
                }
                this.skill6112Status = "pollute",
                    this.city.outAppointSpeed = 0,
                    this.city.updateOutSpeed(),
                    this.city.quitAutoUplevel()
            }
            clean() {
                this.skill6112Status = "clean",
                    this.city.outAppointSpeed = -1,
                    this.city.updateOutSpeed(),
                    this.city.checkAutoUplevel()
            }
            enterSleep(e) {
                -1 != this.timeOutFightBackWait && clearTimeout(this.timeOutFightBackWait),
                    -1 != this.timeOutNormalWait && clearTimeout(this.timeOutNormalWait),
                    -1 != this.timeOutSleep && clearTimeout(this.timeOutSleep),
                    this.timeOutSleep = setTimeout(() => {
                        "on" == this.switch && (null == e || e())
                    }
                        , 1e3 * this.aiAttributeInfo.sleepTime)
            }
            enterNormalWait(e) {
                -1 != this.timeOutFightBackWait && clearTimeout(this.timeOutFightBackWait),
                    -1 != this.timeOutNormalWait && clearTimeout(this.timeOutNormalWait),
                    -1 != this.timeOutSleep && clearTimeout(this.timeOutSleep),
                    this.timeOutNormalWait = setTimeout(() => {
                        "on" == this.switch && (null == e || e())
                    }
                        , 1e3 * this.aiAttributeInfo.actionInterval)
            }
            enterFightBackWait(e) {
                -1 != this.timeOutFightBackWait && clearTimeout(this.timeOutFightBackWait),
                    -1 != this.timeOutNormalWait && clearTimeout(this.timeOutNormalWait),
                    -1 != this.timeOutSleep && clearTimeout(this.timeOutSleep);
                let t = [...o.MConfig.TableAIAction.values()].find(e => e.aiLevel == this.aiAttributeInfo.aiLevel);
                this.timeOutFightBackWait = setTimeout(() => {
                    "on" == this.switch && (null == e || e())
                }
                    , 1e3 * t.fightBackWait)
            }
            connect(e) {
                var t, i;
                if ("off" == this.switch || "frozen" == this.skill6001Status || "pollute" == this.skill6112Status)
                    return;
                let l = [];
                l = e.givens ? e.givens : this.aiAttributeInfo.connects;
                let o = !1
                    , a = null
                    , r = {
                        head: null,
                        tail: null
                    };
                for (let p = 0; p < c.BattleData.cities.length; p++)
                    if (o = !0,
                        (a = c.BattleData.cities[p]).city.serialnum != this.city.city.serialnum)
                        if (0 == l.length || 0 != l.length && -1 != l.indexOf(a.city.serialnum))
                            if (null == e.action || e.action == h.Attack && a.city.camp != this.city.city.camp || e.action == h.Supply && a.city.camp == this.city.city.camp)
                                if (null == e.targetCamp || e.targetCamp == d.Grey && a.city.camp == s.ECityCamp.Default || e.targetCamp == d.Enemy && a.city.camp != s.ECityCamp.Default && this.city.city.camp != a.city.camp) {
                                    for (let e = 0; e < c.BattleData.cities.length; e++)
                                        c.BattleData.cities[e].city.serialnum != this.city.city.serialnum && c.BattleData.cities[e].city.serialnum != a.city.serialnum && cc.Intersection.pointLineDistance(c.BattleData.cities[e].city.pos, this.city.city.pos, a.city.pos, !0) <= 60 && (o = !1);
                                    if (o) {
                                        r.head = this.city.city,
                                            r.tail = a.city;
                                        for (let e = 0; e < c.BattleData.decorates.length; e++)
                                            if (cc.Intersection.linePolygon(r.head.pos, r.tail.pos, c.BattleData.decorates[e].decorate.vertexs)) {
                                                o = !1;
                                                break
                                            }
                                        if (o)
                                            for (let e = 0; e < c.BattleData.blocks.length; e++)
                                                if (cc.Intersection.linePolygon(r.head.pos, r.tail.pos, c.BattleData.blocks[e].block.vertexs)) {
                                                    o = !1;
                                                    break
                                                }
                                    }
                                    if (o) {
                                        n.MEvent.emit(n.EMsg.ConnectCity, {
                                            head: r.head,
                                            tail: r.tail
                                        });
                                        break
                                    }
                                } else
                                    o = !1;
                            else
                                o = !1;
                        else
                            o = !1;
                o ? null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e) : null === (i = null == e ? void 0 : e.fail) || void 0 === i || i.call(e)
            }
            action() {
                if (!cc.game.isPaused() && "on" == this.switch && "frozen" != this.skill6001Status && "pollute" != this.skill6112Status) {
                    let e = this.city.getRouteByLevel(this.city.city.level);
                    if (this.city.city.exports.length < e) {
                        let e = [...o.MConfig.TableAIAction.values()].find(e => e.aiLevel == this.aiAttributeInfo.aiLevel)
                            , t = e.attackWeight + e.supplyWeight;
                        if (0 != t)
                            if (Math.floor(Math.random() * t) < e.attackWeight) {
                                let t = e.greyCampWeight + e.enemyCampWeight;
                                Math.floor(Math.random() * t) < e.greyCampWeight ? this.connect({
                                    action: h.Attack,
                                    targetCamp: d.Grey
                                }) : this.connect({
                                    action: h.Attack,
                                    targetCamp: d.Enemy
                                })
                            } else
                                this.connect({
                                    action: h.Supply
                                })
                    }
                }
                this.enterNormalWait(() => {
                    this.action()
                }
                )
            }
            onDisable() {
                this.invalid(),
                    n.MEvent.targetOff(this)
            }
        }
            ;
        u = l([r], u),
            i.default = u,
            cc._RF.pop()
    }
        , {
        "../../../Script/Enum": void 0,
        "../../../Script/Manager/MConfig": void 0,
        "../../../Script/Manager/MEvent": void 0,
        "../../../Script/Manager/MModel": void 0,
        "../BattleData": "BattleData"
    }],
    BattleData: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "9ad3d8X9/5ERIpkLpC0uvCV", "BattleData"),
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.BattleData = void 0;
        const l = e("../../Script/Enum")
            , s = e("../../Script/Manager/MBundle")
            , o = e("../../Script/Manager/MConfig")
            , n = e("../../Script/Manager/MDialog")
            , a = e("../../Script/Manager/MEvent")
            , c = e("../../Script/Manager/MModel")
            , r = e("../../Script/Manager/MTask")
            , p = e("../../Script/Temporary");
        i.BattleData = new class {
            constructor() {
                this.status = l.EBattleStatus.Ready,
                    this.cities = [],
                    this.blocks = [],
                    this.decorates = [],
                    this.soldiers = [],
                    this.levelStartTime = 0,
                    this.serialnum = 0
            }
            setGameStatus(e) {
                e == l.EBattleStatus.Fight && (this.levelStartTime = (new Date).getTime()),
                    this.status = e,
                    p.Temporary.battleStatus = e,
                    console.log("setGameStatus:", e)
            }
            addCity(e) {
                this.cities.push(e)
            }
            deleteCity(e) {
                let t = this.cities.findIndex(t => t.city.serialnum == e.city.serialnum);
                -1 != t && this.cities.splice(t, 1)
            }
            addBlock(e) {
                this.blocks.push(e)
            }
            addDecorate(e) {
                this.decorates.push(e)
            }
            addSoldier(e) {
                this.soldiers.push(e)
            }
            deleteSoldier(e) {
                let t = this.soldiers.findIndex(t => t.serialnum == e.serialnum);
                -1 != t && this.soldiers.splice(t, 1),
                    this.checkResult()
            }
            checkResult() {
                if (this.status == l.EBattleStatus.Fight) {
                    let e = () => {
                        ("android_mgct_official" == GA.Info.appId || "android_mgct_abroad_weiyou" == GA.Info.appId || !GA.Info.isPreview && GA.isPlatform(GA.Platform.WeiYouH5)) && (console.log("\u662f\u76ee\u6807\u5e73\u53f0\u5f00\u59cb\u5224\u5b9a\u64ad\u653e\u5168\u5c4f\u89c6\u9891\u5e7f\u544a\uff1a"),
                            c.MModel.Battle.level > o.MConfig.Config.NoFullScreenVideoAdLevel ? (console.log("\u7b26\u5408\u6761\u4ef61"),
                                1 != o.MConfig.Config.SwitchLevelFullScreenVideoAd && p.Temporary.levelShowVideo ? console.log("\u4e0d\u7b26\u5408\u6761\u4ef62") : (console.log("\u7b26\u5408\u6761\u4ef62"),
                                    (c.MModel.Battle.level - (o.MConfig.Config.NoFullScreenVideoAdLevel + 1)) % (o.MConfig.Config.FullScreenVideoAdInterval + 1) == 0 ? (console.log("\u7b26\u5408\u6761\u4ef63"),
                                        GA.isPlatform(GA.Platform.WeiYouH5) ? window.MiniGameAds.isInterstitialReady() ? MiniGameAds.showInterstitial().then(() => {
                                            console.info("====> show interstitial success")
                                        }
                                        ).catch(e => {
                                            console.error("====> show interstitial error: " + e.message)
                                        }
                                        ) : console.info("====> interstitial not ready") : GA.showFullScreenVideoAd()) : console.log("\u4e0d\u7b26\u5408\u6761\u4ef63"))) : console.log("\u4e0d\u7b26\u5408\u6761\u4ef61"))
                    }
                        ;
                    if (this.cities.every(e => e.city.camp == l.ECityCamp.One) && this.soldiers.every(e => e.camp == l.ECityCamp.One)) {
                        p.Temporary.continueWinCount++,
                            c.MModel.Task.doTask(2),
                            c.MModel.Task.doTask(3),
                            c.MModel.Battle.gameModel == l.EGameModel.Infernal && this.cities.forEach(e => {
                                e.city.camp == l.ECityCamp.One && 65 == e.city.level && r.MTask.task6++
                            }
                            ),
                            a.MEvent.emit(a.EMsg.SpeedNormal),
                            a.MEvent.emit(a.EMsg.GameOver),
                            this.setGameStatus(l.EBattleStatus.Win);
                        let t = ""
                            , i = 1;
                        c.MModel.Battle.gameEvent == l.EGameEvent.None ? c.MModel.Battle.gameModel == l.EGameModel.Normal ? (t = "\u666e\u901a\u6a21\u5f0f",
                            i = c.MModel.Battle.level,
                            p.Temporary.normalContinueWin++,
                            p.Temporary.normalContinueLose = 0) : c.MModel.Battle.gameModel == l.EGameModel.Infernal && (t = "\u5730\u72f1\u6a21\u5f0f",
                                i = c.MModel.Battle.ifUseLevel,
                                p.Temporary.infernalContinueWin++,
                                p.Temporary.infernalContinueLose = 0) : c.MModel.Battle.gameEvent == l.EGameEvent.NewYear ? (t = "\u6625\u8282\u6a21\u5f0f",
                                    i = c.MModel.Battle.newYearLevel) : c.MModel.Battle.gameEvent == l.EGameEvent.MothersDay && (t = "\u6bcd\u4eb2\u8282\u6a21\u5f0f",
                                        i = c.MModel.Battle.mothersDayLevel),
                            GA.sentLogs([{
                                eventId: "GameEnd"
                            }, {
                                eventId: "GameSuccess",
                                extraNum: i,
                                detail: JSON.stringify({
                                    "\u65f6\u957f": Math.floor(((new Date).getTime() - this.levelStartTime) / 1e3),
                                    mode: t
                                })
                            }]),
                            setTimeout(() => {
                                n.MDialog.showDialog(s.EDialog.Over, {
                                    data: this.status
                                })
                            }
                                , 1e3),
                            c.MModel.Battle.gameModel == l.EGameModel.Infernal && c.MModel.Battle.settlementTask(),
                            e()
                    } else if (this.cities.every(e => e.city.camp != l.ECityCamp.One) && this.soldiers.every(e => e.camp != l.ECityCamp.One)) {
                        p.Temporary.continueWinCount = 0,
                            c.MModel.Task.doTask(2),
                            a.MEvent.emit(a.EMsg.SpeedNormal),
                            a.MEvent.emit(a.EMsg.GameOver),
                            this.setGameStatus(l.EBattleStatus.Lose);
                        let t = ""
                            , i = 1;
                        c.MModel.Battle.gameEvent == l.EGameEvent.None ? c.MModel.Battle.gameModel == l.EGameModel.Normal ? (t = "\u666e\u901a\u6a21\u5f0f",
                            i = c.MModel.Battle.level) : c.MModel.Battle.gameModel == l.EGameModel.Infernal && (t = "\u5730\u72f1\u6a21\u5f0f",
                                i = c.MModel.Battle.ifUseLevel) : c.MModel.Battle.gameEvent == l.EGameEvent.NewYear ? (t = "\u6625\u8282\u6a21\u5f0f",
                                    i = c.MModel.Battle.newYearLevel) : c.MModel.Battle.gameEvent == l.EGameEvent.MothersDay && (t = "\u6bcd\u4eb2\u8282\u6a21\u5f0f",
                                        i = c.MModel.Battle.mothersDayLevel),
                            GA.sentLogs([{
                                eventId: "GameEnd"
                            }, {
                                eventId: "GameFailed",
                                extraNum: i,
                                detail: JSON.stringify({
                                    "\u65f6\u957f": Math.floor(((new Date).getTime() - this.levelStartTime) / 1e3),
                                    mode: t
                                })
                            }]),
                            setTimeout(() => {
                                n.MDialog.showDialog(s.EDialog.Over, {
                                    data: this.status
                                })
                            }
                                , 1e3),
                            e()
                    }
                }
            }
            genSerialnum() {
                return this.serialnum++,
                    this.serialnum
            }
            clear() {
                this.cities = [],
                    this.blocks = [],
                    this.decorates = [],
                    this.soldiers = [],
                    this.status = l.EBattleStatus.Ready,
                    console.log("\u6e05\u9664BattleData\u6570\u636e\uff01")
            }
        }
            ,
            cc._RF.pop()
    }
        , {
        "../../Script/Enum": void 0,
        "../../Script/Manager/MBundle": void 0,
        "../../Script/Manager/MConfig": void 0,
        "../../Script/Manager/MDialog": void 0,
        "../../Script/Manager/MEvent": void 0,
        "../../Script/Manager/MModel": void 0,
        "../../Script/Manager/MTask": void 0,
        "../../Script/Temporary": void 0
    }],
    Battle: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b625cdp2rdO6pY06fZWu1jP", "Battle");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../Script/Enum")
            , o = e("../../Script/Manager/MAudio")
            , n = e("../../Script/Manager/MBundle")
            , a = e("../../Script/Manager/MConfig")
            , c = e("../../Script/Manager/MDialog")
            , r = e("../../Script/Manager/MEvent")
            , p = e("../../Script/Manager/MI18n")
            , h = e("../../Script/Manager/MModel")
            , d = e("../../Script/Manager/MPool")
            , u = e("../../Script/Manager/MScreenshot")
            , M = e("../../Script/Manager/MSkill")
            , g = e("../../Script/Manager/MTask")
            , m = e("../../Script/Temporary")
            , v = e("./base/AI")
            , y = e("./base/Block")
            , f = e("./base/City")
            , S = e("./base/Decorate")
            , k = e("./BattleData")
            , C = e("./prefab/Gamut");
        var T;
        (function (e) {
            e.Normal = "res/prefab/city/cityNormal",
                e.Attack = "res/prefab/city/cityAttack",
                e.Defense = "res/prefab/city/cityDefense"
        }
        )(T || (T = {}));
        const E = ["res/texture/bg/bg_1", "res/texture/bg/bg_2", "res/texture/bg/bg_3", "res/texture/bg/bg_4", "res/texture/bg/bg_5", "res/texture/bg/bg_6", "res/texture/bg/bg_7", "res/texture/bg/bg_NewYear", "res/texture/bg/bg_4", "res/texture/bg/bg_mothersDay", "res/texture/bg/bg_Christmas", "res/texture/bg/bg_Halloween"]
            , { ccclass: B, property: w } = cc._decorator;
        let b = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.bg = null,
                    this.scope = null,
                    this.lineBgs = null,
                    this.lines = null,
                    this.cAndS = null,
                    this.blocks = null,
                    this.decorates = null,
                    this.gamuts = null,
                    this.level = null,
                    this.tip = null,
                    this.time = null,
                    this.languageLbs = [],
                    this.cutLine = {
                        head: null,
                        tail: null
                    },
                    this.gamutCamps = [],
                    this.motionStreak = null,
                    this.scopeItem = null,
                    this.scopepoints = [],
                    this.scopepolygons = [],
                    this.uvSpeed = 1
            }
            onEnable() {
                this.node.setContentSize(cc.winSize);
                let e = GA.PA.getSystemInfoSync()
                    , t = GA.PA.getMenuButtonBoundingClientRect();
                (null == t ? void 0 : t.top) ? this.gamuts.parent.getComponent(cc.Widget).top = t.top * (null == e ? void 0 : e.designPixelRatio) : this.gamuts.parent.getComponent(cc.Widget).top = 80,
                    r.MEvent.on(r.EMsg.SpeedUp, () => {
                        cc.director.getScheduler().setTimeScale(2),
                            this.uvSpeed = 2
                    }
                        , this),
                    r.MEvent.on(r.EMsg.SpeedNormal, () => {
                        cc.director.getScheduler().setTimeScale(1),
                            this.uvSpeed = 1
                    }
                        , this),
                    this.bg.node.on(cc.Node.EventType.TOUCH_START, e => {
                        var t, i, l, s, o, c, r, p;
                        6011 == (null === (t = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === t ? void 0 : t.id) || 6104 == (null === (i = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === i ? void 0 : i.id) || 6105 == (null === (l = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === l ? void 0 : l.id) || 6110 == (null === (s = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === s ? void 0 : s.id) || 6111 == (null === (o = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === o ? void 0 : o.id) || 6112 == (null === (c = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === c ? void 0 : c.id) || 6113 == (null === (r = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === r ? void 0 : r.id) || 6115 == (null === (p = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === p ? void 0 : p.id) ? n.MBundle.load({
                            bundle: n.EBundle.Battle,
                            path: "res/prefab/scope/scopeItem",
                            type: cc.Prefab,
                            onComplete: t => {
                                var i, l;
                                if (this.scopeItem = cc.instantiate(t),
                                    this.scopeItem.setParent(this.scope),
                                    this.scopeItem.setPosition(this.scope.convertToNodeSpaceAR(e.getLocation())),
                                    this.scopepoints = this.scopeItem.getComponent(cc.PolygonCollider).points,
                                    6011 == (null === (i = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === i ? void 0 : i.id)) {
                                    let e = a.MConfig.TableSkill.get(6011).param.A / 150;
                                    this.scopeItem.scale = e,
                                        this.scopepoints.forEach(t => {
                                            t.x *= e,
                                                t.y *= e
                                        }
                                        )
                                } else {
                                    let e = [...a.MConfig.TableHeroGrow.values()].find(e => {
                                        var t, i;
                                        return e.heroId == (null === (t = h.MModel.Hero.currentHero) || void 0 === t ? void 0 : t.id) && e.heroLevel == (null === (i = h.MModel.Hero.currentHero) || void 0 === i ? void 0 : i.level)
                                    }
                                    )
                                        , t = 0;
                                    (null === (l = h.MModel.Hero.currentHero) || void 0 === l ? void 0 : l.skinId) > -1 && (t = 10);
                                    let i = e.skillParam.A * (1 + t / 100) / 150;
                                    this.scopeItem.scale = i,
                                        this.scopepoints.forEach(e => {
                                            e.x *= i,
                                                e.y *= i
                                        }
                                        )
                                }
                            }
                        }) : M.MSkill.cancelSkill(),
                            this.cutLine.head = cc.Canvas.instance.node.convertToNodeSpaceAR(e.getLocation()),
                            n.MBundle.load({
                                bundle: n.EBundle.Battle,
                                path: "res/prefab/motionStreak",
                                type: cc.Prefab,
                                onComplete: t => {
                                    this.motionStreak = cc.instantiate(t),
                                        this.motionStreak.setParent(this.node),
                                        this.motionStreak.setPosition(this.node.convertToNodeSpaceAR(e.getLocation()))
                                }
                            })
                    }
                        , this),
                    this.bg.node.on(cc.Node.EventType.TOUCH_MOVE, e => {
                        var t, i, l, o, n, a, c, p, h, d;
                        let u = cc.Canvas.instance.node.convertToNodeSpaceAR(e.getLocation());
                        if (this.cutLine.tail = u,
                            (null === (t = this.motionStreak) || void 0 === t ? void 0 : t.isValid) && this.motionStreak.setPosition(u),
                            (6011 == (null === (i = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === i ? void 0 : i.id) || 6104 == (null === (l = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === l ? void 0 : l.id) || 6105 == (null === (o = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === o ? void 0 : o.id) || 6110 == (null === (n = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === n ? void 0 : n.id) || 6111 == (null === (a = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === a ? void 0 : a.id) || 6112 == (null === (c = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === c ? void 0 : c.id) || 6113 == (null === (p = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === p ? void 0 : p.id) || 6115 == (null === (h = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === h ? void 0 : h.id)) && ((null === (d = this.scopeItem) || void 0 === d ? void 0 : d.isValid) && this.scopeItem.setPosition(u),
                                this.scopepoints.length > 0)) {
                            for (let e = 0; e < this.scopepoints.length; e++)
                                this.scopepolygons[e] = this.scopepoints[e].add(u);
                            k.BattleData.cities.forEach(e => {
                                var t, i, l;
                                6111 == (null === (t = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === t ? void 0 : t.id) || 6113 == (null === (i = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === i ? void 0 : i.id) || 6115 == (null === (l = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === l ? void 0 : l.id) ? e.city.camp == s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) ? r.MEvent.emit(r.EMsg.ShowCityInCircle, e.city) : r.MEvent.emit(r.EMsg.HideCityInCircle, e.city) : e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) ? r.MEvent.emit(r.EMsg.ShowCityInCircle, e.city) : r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                            }
                            )
                        }
                    }
                        , this);
                const i = e => {
                    var t, i, l, o, n, c, p, h, u, g, m, v, y, f, S, C, T, E, B, w, b, L, A, D, P;
                    let I = cc.Canvas.instance.node.convertToNodeSpaceAR(e.getLocation());
                    if (this.scopepoints.length > 0)
                        for (let s = 0; s < this.scopepoints.length; s++)
                            this.scopepolygons[s] = this.scopepoints[s].add(I);
                    if ((null === (t = this.motionStreak) || void 0 === t ? void 0 : t.isValid) && d.MPool.recovery(this.motionStreak),
                        6011 == (null === (i = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === i ? void 0 : i.id) || 6104 == (null === (l = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === l ? void 0 : l.id) || 6105 == (null === (o = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === o ? void 0 : o.id) || 6110 == (null === (n = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === n ? void 0 : n.id) || 6111 == (null === (c = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === c ? void 0 : c.id) || 6112 == (null === (p = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === p ? void 0 : p.id) || 6113 == (null === (h = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === h ? void 0 : h.id) || 6115 == (null === (u = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === u ? void 0 : u.id)) {
                        if (6011 == (null === (g = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === g ? void 0 : g.id) && ((null === (m = this.scopeItem) || void 0 === m ? void 0 : m.isValid) && d.MPool.recovery(this.scopeItem),
                            k.BattleData.cities.forEach(e => {
                                e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6011, e.city),
                                    r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                            }
                            ),
                            M.MSkill.useSkill()),
                            6104 == (null === (v = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === v ? void 0 : v.id)) {
                            (null === (y = this.scopeItem) || void 0 === y ? void 0 : y.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6104, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6104 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6105 == (null === (f = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === f ? void 0 : f.id)) {
                            (null === (S = this.scopeItem) || void 0 === S ? void 0 : S.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6105, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6105 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6110 == (null === (C = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === C ? void 0 : C.id)) {
                            (null === (T = this.scopeItem) || void 0 === T ? void 0 : T.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6110, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6110 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6111 == (null === (E = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === E ? void 0 : E.id)) {
                            (null === (B = this.scopeItem) || void 0 === B ? void 0 : B.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp == s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6111, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6111 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6112 == (null === (w = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === w ? void 0 : w.id)) {
                            (null === (b = this.scopeItem) || void 0 === b ? void 0 : b.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp != s.ECityCamp.Default && e.city.camp != s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6112, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6112 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6113 == (null === (L = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === L ? void 0 : L.id)) {
                            (null === (A = this.scopeItem) || void 0 === A ? void 0 : A.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp == s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6113, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6113 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                        if (6115 == (null === (D = null === M.MSkill || void 0 === M.MSkill ? void 0 : M.MSkill.skill) || void 0 === D ? void 0 : D.id)) {
                            (null === (P = this.scopeItem) || void 0 === P ? void 0 : P.isValid) && d.MPool.recovery(this.scopeItem),
                                k.BattleData.cities.forEach(e => {
                                    e.city.camp == s.ECityCamp.One && cc.Intersection.pointInPolygon(cc.v2(e.city.pos), this.scopepolygons) && r.MEvent.emit(r.EMsg.DoSkill6115, e.city),
                                        r.MEvent.emit(r.EMsg.HideCityInCircle, e.city)
                                }
                                ),
                                M.MSkill.useSkill();
                            let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6115 == e.skillId && 1 == e.heroLevel);
                            r.MEvent.emit(r.EMsg.HeroShout, e)
                        }
                    } else
                        this.cutLine.head && this.cutLine.tail && r.MEvent.emit(r.EMsg.CutLine, Utils.copy(this.cutLine));
                    this.cutLine.head = null,
                        this.cutLine.tail = null,
                        this.scopepoints = [],
                        this.scopepolygons = []
                }
                    ;
                this.bg.node.on(cc.Node.EventType.TOUCH_END, i, this),
                    this.bg.node.on(cc.Node.EventType.TOUCH_CANCEL, i, this),
                    r.MEvent.on(r.EMsg.ClearLevel, () => {
                        this.clear()
                    }
                        , this),
                    r.MEvent.on(r.EMsg.LoadLevel, () => {
                        this.clear(),
                            this.scheduleOnce(() => {
                                this.loadLevel()
                            }
                            )
                    }
                        , this),
                    r.MEvent.on(r.EMsg.ClearBattleNode, () => {
                        this.clear()
                    }
                        , this),
                    r.MEvent.on(r.EMsg.ClearBattleData, () => {
                        k.BattleData.clear()
                    }
                        , this),
                    this.scheduleOnce(() => {
                        o.MAudio.playBG(o.EAudio.BattleBGM, !0)
                    }
                        , 1)
            }
            start() {
                this.loadLevel(),
                    this.languageLbs.forEach(e => {
                        let t = parseInt(e.node.name);
                        p.MI18n.showInfo(e, t)
                    }
                    )
            }
            update(e) {
                h.MModel.Battle.gameModel == s.EGameModel.Infernal && m.Temporary.battleStatus == s.EBattleStatus.Fight && (g.MTask.task1 += e,
                    this.time.string = `${GA.formatNumber(Math.floor(g.MTask.task1))}`),
                    m.Temporary.uvSpeed += this.uvSpeed * e
            }
            screnshot() {
                m.Temporary.screenshot = u.MScreenshot.getScreenshotPath()
            }
            loadLevel() {
                m.Temporary.levelShowVideo = !1,
                    h.MModel.NewbieTask.doTask(6),
                    m.Temporary.playGameCount++,
                    h.MModel.UserData.playGameCount++,
                    h.MModel.UserData.dayPlayGameCount++,
                    ("android_mgct_abroad_weiyou" == GA.Info.appId || GA.isPlatform(GA.Platform.WeiYouH5)) && 1 == h.MModel.UserData.playGameCount && (GA.sentLog("Sign_in"),
                        !GA.Info.isPreview && GA.isPlatform(GA.Platform.WeiYouH5) && window.MiniGameAnalytics.onGameEvent("Sign_in", "Sign_in")),
                    g.MTask.reset(),
                    m.Temporary.gamutFinish = !1,
                    (GA.isPlatform([GA.Platform.Kwaigame]) || GA.isPlatform(GA.Platform.ByteDance) && "novel_fm" != a.MConfig.appName && "novelapp" != a.MConfig.appName && "reading" != a.MConfig.appName) && (m.Temporary.screenshot = "",
                        r.MEvent.off(r.EMsg.ScreenShot, this.screnshot, this),
                        this.scheduleOnce(() => {
                            r.MEvent.once(r.EMsg.ScreenShot, this.screnshot, this)
                        }
                        )),
                    M.MSkill.cancelSkill();
                let e = ""
                    , t = 1;
                if (h.MModel.Battle.gameEvent == s.EGameEvent.None)
                    if (h.MModel.Battle.gameModel == s.EGameModel.Normal) {
                        if (e = "\u666e\u901a\u6a21\u5f0f",
                            t = h.MModel.Battle.level,
                            "android_mgct_abroad_weiyou" == GA.Info.appId || GA.isPlatform(GA.Platform.WeiYouH5)) {
                            let e = [55, 60, 65, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190];
                            (h.MModel.Battle.level <= 50 || e.includes(h.MModel.Battle.level)) && (GA.sentLog(`challenge_level ${h.MModel.Battle.level}`)
                                ,!GA.Info.isPreview && GA.isPlatform(GA.Platform.WeiYouH5)/* && window.MiniGameAnalytics.onGameEvent("challenge_level", `challenge_level ${h.MModel.Battle.level}`)*/)
                        }
                    } else
                        h.MModel.Battle.gameModel == s.EGameModel.Infernal && (e = "\u5730\u72f1\u6a21\u5f0f",
                            t = h.MModel.Battle.ifUseLevel);
                else
                    h.MModel.Battle.gameEvent == s.EGameEvent.Halloween ? (e = "\u4e07\u5723\u8282\u6a21\u5f0f",
                        t = h.MModel.Battle.halloweenLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.Thanksgiving ? (e = "\u611f\u6069\u8282\u6a21\u5f0f",
                            t = h.MModel.Battle.thanksgivingLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.Christmas ? (e = "\u5723\u8bde\u8282\u6a21\u5f0f",
                                t = h.MModel.Battle.christmasLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? (e = "\u6625\u8282\u6a21\u5f0f",
                                    t = h.MModel.Battle.newYearLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (e = "\u6bcd\u4eb2\u8282\u6a21\u5f0f",
                                        t = h.MModel.Battle.mothersDayLevel);
                GA.sentLogs([{
                    eventId: "PlayGame",
                    detail: JSON.stringify({
                        mode: e
                    })
                }, {
                    eventId: "GameStart",
                    detail: JSON.stringify({
                        mode: e
                    }),
                    extraNum: t
                }]);
                let i = "";
                if (h.MModel.Battle.gameEvent == s.EGameEvent.None) {
                    let e = h.MModel.Battle.getLevelChapter(h.MModel.Battle.getUseLevel());
                    console.log("\u5b9e\u9645\u5173\u5361:", h.MModel.Battle.getUseLevel()),
                        console.log("\u5b9e\u9645\u7ae0\u8282:", e),
                        i = E[(e - 1) % E.length]
                } else
                    h.MModel.Battle.gameEvent == s.EGameEvent.Halloween || h.MModel.Battle.gameEvent == s.EGameEvent.Thanksgiving ? i = "res/texture/bg/bg_4" : h.MModel.Battle.gameEvent == s.EGameEvent.Christmas ? i = "res/texture/bg/bg_Christmas" : h.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? i = "res/texture/bg/bg_NewYear" : h.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (i = "res/texture/bg/bg_mothersDay");
                const l = e => {
                    m.Temporary.AISpeedAdd = 0,
                        h.MModel.Battle.gameEvent == s.EGameEvent.None ? h.MModel.Battle.gameModel == s.EGameModel.Normal ? m.Temporary.lastLevel == h.MModel.Battle.level ? (r.MEvent.emit(r.EMsg.ShowJumpLevel),
                            m.Temporary.normalContinueWin = 0,
                            m.Temporary.normalContinueLose++) : r.MEvent.emit(r.EMsg.HideJumpLevel) : h.MModel.Battle.gameModel == s.EGameModel.Infernal && (m.Temporary.lastLevel == h.MModel.Battle.ifUseLevel ? (r.MEvent.emit(r.EMsg.ShowJumpLevel),
                                m.Temporary.infernalContinueWin = 0,
                                m.Temporary.infernalContinueLose++) : r.MEvent.emit(r.EMsg.HideJumpLevel)) : h.MModel.Battle.gameEvent == s.EGameEvent.Halloween ? m.Temporary.lastLevel == h.MModel.Battle.halloweenLevel ? r.MEvent.emit(r.EMsg.ShowJumpLevel) : r.MEvent.emit(r.EMsg.HideJumpLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.Thanksgiving ? m.Temporary.lastLevel == h.MModel.Battle.thanksgivingLevel ? r.MEvent.emit(r.EMsg.ShowJumpLevel) : r.MEvent.emit(r.EMsg.HideJumpLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.Christmas ? m.Temporary.lastLevel == h.MModel.Battle.christmasLevel ? r.MEvent.emit(r.EMsg.ShowJumpLevel) : r.MEvent.emit(r.EMsg.HideJumpLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? m.Temporary.lastLevel == h.MModel.Battle.newYearLevel ? r.MEvent.emit(r.EMsg.ShowJumpLevel) : r.MEvent.emit(r.EMsg.HideJumpLevel) : h.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (m.Temporary.lastLevel == h.MModel.Battle.mothersDayLevel ? r.MEvent.emit(r.EMsg.ShowJumpLevel) : r.MEvent.emit(r.EMsg.HideJumpLevel)),
                        h.MModel.Battle.gameEvent == s.EGameEvent.None && 1 == h.MModel.Battle.level ? (this.tip.active = !0,
                            cc.Tween.stopAllByTarget(this.tip),
                            cc.tween(this.tip).set({
                                scale: 1
                            }).to(.5, {
                                scale: 1.2
                            }).to(.5, {
                                scale: 1
                            }).union().repeatForever().start()) : this.tip.active = !1;
                    let t = h.MModel.Battle.getUseLevel()
                        , i = "";
                    if (h.MModel.Battle.gameEvent == s.EGameEvent.None) {
                        if (h.MModel.Battle.gameModel == s.EGameModel.Infernal) {
                            m.Temporary.lastLevel = h.MModel.Battle.ifUseLevel,
                                "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.ifUseLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.ifUseLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.ifUseLevel}`;
                            let e = [...a.MConfig.TableLevelTask.values()].find(e => e.level == t);
                            1 == (null == e ? void 0 : e.type) ? this.time.node.parent.active = !0 : this.time.node.parent.active = !1,
                                m.Temporary.AISpeedAdd = e.aiSpeedAdd,
                                3 == m.Temporary.infernalContinueWin ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalWin3 : 4 == m.Temporary.infernalContinueWin ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalWin4 : m.Temporary.infernalContinueWin >= 5 && (m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalWin5),
                                2 == m.Temporary.infernalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalFail2 : 3 == m.Temporary.infernalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalFail3 : 4 == m.Temporary.infernalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalFail4 : m.Temporary.infernalContinueLose >= 5 && (m.Temporary.AISpeedAdd += a.MConfig.Strategy.infernalFail5)
                        } else
                            h.MModel.Battle.gameModel == s.EGameModel.Normal && (m.Temporary.lastLevel = h.MModel.Battle.level,
                                "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.level}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.level}\u95dc` : this.level.string = `Level ${h.MModel.Battle.level}`,
                                this.time.node.parent.active = !1,
                                3 == m.Temporary.normalContinueWin ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalWin3 : 4 == m.Temporary.normalContinueWin ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalWin4 : m.Temporary.normalContinueWin >= 5 && (m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalWin5),
                                2 == m.Temporary.normalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalFail2 : 3 == m.Temporary.normalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalFail3 : 4 == m.Temporary.normalContinueLose ? m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalFail4 : m.Temporary.normalContinueLose >= 5 && (m.Temporary.AISpeedAdd += a.MConfig.Strategy.normalFail5));
                        i = `level_ ${1e4 + t}`
                    } else
                        h.MModel.Battle.gameEvent == s.EGameEvent.Halloween ? (m.Temporary.lastLevel = h.MModel.Battle.halloweenLevel,
                            "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.halloweenLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.halloweenLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.halloweenLevel}`,
                            this.time.node.parent.active = !1,
                            i = `wsj_ ${1e4 + t}`) : h.MModel.Battle.gameEvent == s.EGameEvent.Thanksgiving ? (m.Temporary.lastLevel = h.MModel.Battle.thanksgivingLevel,
                                "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.thanksgivingLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.thanksgivingLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.thanksgivingLevel}`,
                                this.time.node.parent.active = !1,
                                i = `gej_ ${1e4 + t}`) : h.MModel.Battle.gameEvent == s.EGameEvent.Christmas ? (m.Temporary.lastLevel = h.MModel.Battle.christmasLevel,
                                    "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.christmasLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.christmasLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.christmasLevel}`,
                                    this.time.node.parent.active = !1,
                                    i = `sdj_ ${1e4 + t}`) : h.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? (m.Temporary.lastLevel = h.MModel.Battle.newYearLevel,
                                        "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.newYearLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.newYearLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.newYearLevel}`,
                                        this.time.node.parent.active = !1,
                                        i = `cj_ ${1e4 + t}`) : h.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (m.Temporary.lastLevel = h.MModel.Battle.mothersDayLevel,
                                            "cn" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.mothersDayLevel}\u5173` : "tc" == a.MConfig.Language ? this.level.string = `\u7b2c ${h.MModel.Battle.mothersDayLevel}\u95dc` : this.level.string = `Level ${h.MModel.Battle.mothersDayLevel}`,
                                            this.time.node.parent.active = !1,
                                            i = `mqj_ ${1e4 + t}`);
                    k.BattleData.setGameStatus(s.EBattleStatus.Fight),
                        console.log("levelName:", i),
                        n.MBundle.load({
                            bundle: n.EBundle.Level,
                            path: i,
                            type: cc.JsonAsset,
                            onComplete: t => {
                                console.log(t);
                                let i = t.json;
                                console.log("levelInfo:", i),
                                    this.loadCity(0, i.cities, () => {
                                        this.gamutCamps = [],
                                            this.loadGamut(0, i.cities, () => {
                                                m.Temporary.gamutFinish = !0,
                                                    this.loadBlock(0, i.blocks, () => {
                                                        this.loadDecorate(0, i.decorates, () => {
                                                            e()
                                                        }
                                                        )
                                                    }
                                                    )
                                            }
                                            )
                                    }
                                    )
                            }
                        })
                }
                    , o = () => {
                        h.MModel.Battle.gameEvent == s.EGameEvent.None && (h.MModel.Guide.completeGuideHand || 1 != h.MModel.Battle.level || (h.MModel.Guide.completeGuideHand = !0,
                            d.MPool.load({
                                bundle: n.EBundle.Battle,
                                path: "res/prefab/guideHand",
                                type: cc.Prefab,
                                onComplete: e => {
                                    e.setParent(this.node),
                                        e.setPosition(cc.v2(0, -180)),
                                        cc.tween(e).repeat(5, cc.tween().set({
                                            position: cc.v3(0, -180)
                                        }).to(1.5, {
                                            position: cc.v3(0, 152)
                                        }).delay(.3)).call(() => {
                                            d.MPool.recovery(e)
                                        }
                                        ).start()
                                }
                            })),
                            h.MModel.Guide.completeGuide2 || 6 != h.MModel.Battle.level || (h.MModel.Guide.completeGuide2 = !0,
                                c.MDialog.showDialog(n.EDialog.Guide2, {})),
                            h.MModel.Guide.completeGuide3 || 8 != h.MModel.Battle.level || (h.MModel.Guide.completeGuide3 = !0,
                                c.MDialog.showDialog(n.EDialog.Guide3, {})))
                    }
                    ;
                (e => {
                    n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: i,
                        type: cc.SpriteFrame,
                        onComplete: t => {
                            this.bg.spriteFrame = t,
                                this.scheduleOnce(() => {
                                    this.bg.node.height < cc.winSize.height && this.node.setContentSize(cc.winSize),
                                        e()
                                }
                                )
                        }
                    })
                }
                )(() => {
                    l(() => {
                        o(),
                            this.gameRecorder()
                    }
                    )
                }
                )
            }
            loadCity(e, t, i) {
                if (e < t.length) {
                    let l = t[e];
                    d.MPool.load({
                        bundle: n.EBundle.Battle,
                        path: Utils.enumValue(T, s.ECityType[l.type]),
                        type: cc.Prefab,
                        onComplete: s => {
                            s.setParent(this.cAndS),
                                s.setPosition(l.pos),
                                s.zIndex = -l.pos.y;
                            let o = s.getComponent(f.default);
                            o.init(l, this.cAndS, this.lines, this.lineBgs),
                                k.BattleData.addCity(o),
                                this.loadCity(++e, t, i)
                        }
                    })
                } else
                    i()
            }
            loadGamut(e, t, i) {
                if (e < t.length) {
                    let l = t[e];
                    0 != l.camp ? this.gamutCamps.find(e => e == l.camp) ? this.loadGamut(++e, t, i) : (this.gamutCamps.push(l.camp),
                        d.MPool.load({
                            bundle: n.EBundle.Battle,
                            path: "res/prefab/gamut",
                            type: cc.Prefab,
                            onComplete: s => {
                                s.setParent(this.gamuts),
                                    1 == l.camp && s.setSiblingIndex(0),
                                    s.y = 0,
                                    s.getComponent(C.default).init(l.camp),
                                    this.loadGamut(++e, t, i)
                            }
                        })) : this.loadGamut(++e, t, i)
                } else
                    i()
            }
            loadBlock(e, t, i) {
                if (e < t.length) {
                    let l = t[e];
                    d.MPool.load({
                        bundle: n.EBundle.Battle,
                        path: "res/prefab/block/block",
                        type: cc.Prefab,
                        onComplete: s => {
                            var o;
                            s.setParent(this.blocks),
                                s.setPosition(l.pos),
                                s.scale = null !== (o = l.scale) && void 0 !== o ? o : 1;
                            let n = s.getComponent(y.default);
                            n.init(l),
                                k.BattleData.addBlock(n),
                                this.loadBlock(++e, t, i)
                        }
                    })
                } else
                    i()
            }
            loadDecorate(e, t, i) {
                if (e < t.length) {
                    let l = t[e];
                    d.MPool.load({
                        bundle: n.EBundle.Battle,
                        path: "res/prefab/decorate/decorate",
                        type: cc.Prefab,
                        onComplete: s => {
                            var o;
                            s.setParent(this.decorates),
                                s.setPosition(l.pos),
                                s.scale = null !== (o = l.scale) && void 0 !== o ? o : 1;
                            let n = s.getComponent(S.default);
                            n.init(l),
                                k.BattleData.addDecorate(n),
                                this.loadDecorate(++e, t, i)
                        }
                    })
                } else
                    i()
            }
            clear() {
                for (; this.cAndS.childrenCount > 0;)
                    try {
                        let t = this.cAndS.children[0]
                            , i = t.getComponent(f.default);
                        i && (i.lineMap.forEach(e => {
                            cc.Tween.stopAllByTarget(e.node),
                                d.MPool.recovery(e.node)
                        }
                        ),
                            i.lineBgMap.forEach(e => {
                                d.MPool.recovery(e)
                            }
                            ),
                            i.clear());
                        let l = t.getComponent(v.default);
                        l && (l.invalid(),
                            t.removeComponent(v.default)),
                            cc.Tween.stopAllByTarget(t),
                            d.MPool.recovery(t)
                    } catch (e) { }
                for (; this.blocks.childrenCount > 0;)
                    try {
                        d.MPool.recovery(this.blocks.children[0])
                    } catch (e) { }
                for (; this.decorates.childrenCount > 0;)
                    try {
                        d.MPool.recovery(this.decorates.children[0])
                    } catch (e) { }
                for (; this.gamuts.childrenCount > 0;)
                    try {
                        d.MPool.recovery(this.gamuts.children[0])
                    } catch (e) { }
                k.BattleData.clear()
            }
            gameRecorder() {
                if (GA.isPlatform([GA.Platform.ByteDance])) {
                    let e = GA.PA.getGameRecorderManager();
                    e.onStart(() => {
                        m.Temporary.clipVideoPath = "",
                            console.log("\u5f55\u5c4f\u5f00\u59cb")
                    }
                    ),
                        e.onStop(e => {
                            m.Temporary.clipVideoPath = e.videoPath,
                                console.log("\u5f55\u5c4f\u7ed3\u675f")
                        }
                        ),
                        e.start({
                            duration: 15
                        })
                } else if (GA.isPlatform([GA.Platform.Kwaigame])) {
                    let e = GA.PA.getGameRecorder();
                    e ? (console.log("mediaRecorder\u5b58\u5728"),
                        m.Temporary.recordingScreenFunc = !1,
                        e.on("start", () => {
                            console.log("\u5f55\u5c4f\u5f00\u59cb"),
                                m.Temporary.recordingScreenFunc = !0
                        }
                        ),
                        e.on("stop", e => {
                            e && e.videoID ? (console.log(`videoID is ${e.videoID}`),
                                m.Temporary.videoID = e.videoID,
                                console.log("\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u6210\u529f"),
                                r.MEvent.emit(r.EMsg.GameRecorderSuccess)) : (console.log("\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u5931\u8d25"),
                                    r.MEvent.emit(r.EMsg.GameRecorderFail))
                        }
                        ),
                        e.start({})) : console.log("mediaRecorder\u4e0d\u5b58\u5728")
                }
            }
            onDisable() {
                this.bg.node.targetOff(this),
                    r.MEvent.targetOff(this),
                    this.unscheduleAllCallbacks(),
                    o.MAudio.stopEffect(o.EAudio.Skill6102),
                    o.MAudio.stopEffect(o.EAudio.Skill6103)
            }
        }
            ;
        l([w(cc.Sprite)], b.prototype, "bg", void 0),
            l([w(cc.Node)], b.prototype, "scope", void 0),
            l([w(cc.Node)], b.prototype, "lineBgs", void 0),
            l([w(cc.Node)], b.prototype, "lines", void 0),
            l([w(cc.Node)], b.prototype, "cAndS", void 0),
            l([w(cc.Node)], b.prototype, "blocks", void 0),
            l([w(cc.Node)], b.prototype, "decorates", void 0),
            l([w(cc.Node)], b.prototype, "gamuts", void 0),
            l([w(cc.Label)], b.prototype, "level", void 0),
            l([w(cc.Node)], b.prototype, "tip", void 0),
            l([w(cc.Label)], b.prototype, "time", void 0),
            l([w([cc.Label])], b.prototype, "languageLbs", void 0),
            b = l([B], b),
            i.default = b,
            cc._RF.pop()
    }
        , {
        "../../Script/Enum": void 0,
        "../../Script/Manager/MAudio": void 0,
        "../../Script/Manager/MBundle": void 0,
        "../../Script/Manager/MConfig": void 0,
        "../../Script/Manager/MDialog": void 0,
        "../../Script/Manager/MEvent": void 0,
        "../../Script/Manager/MI18n": void 0,
        "../../Script/Manager/MModel": void 0,
        "../../Script/Manager/MPool": void 0,
        "../../Script/Manager/MScreenshot": void 0,
        "../../Script/Manager/MSkill": void 0,
        "../../Script/Manager/MTask": void 0,
        "../../Script/Temporary": void 0,
        "./BattleData": "BattleData",
        "./base/AI": "AI",
        "./base/Block": "Block",
        "./base/City": "City",
        "./base/Decorate": "Decorate",
        "./prefab/Gamut": "Gamut"
    }],
    Block: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e512cs43m9ELqlclnEh7rx3", "Block");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Manager/MBundle")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.spBlock = null
            }
            init(e) {
                this.block = {
                    vertexs: e.vertexs
                },
                    s.MBundle.load({
                        bundle: s.EBundle.Battle,
                        path: `res/texture/autoatlas/block/block-${e.id}`,
                        type: cc.SpriteFrame,
                        onComplete: e => {
                            this.spBlock.spriteFrame = e
                        }
                    })
            }
        }
            ;
        l([n(cc.Sprite)], a.prototype, "spBlock", void 0),
            a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../../Script/Manager/MBundle": void 0
    }],
    CityAttack: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "3622cTCV+JK3p8xQpCIQYXV", "CityAttack");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../base/City")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends s.default {
        }
            ;
        a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../base/City": "City"
    }],
    CityDefense: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "a56a1QVYmZPQ7dpH+KlyP69", "CityDefense");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../base/City")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends s.default {
        }
            ;
        a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../base/City": "City"
    }],
    CityNormal: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "be9d7ETg9hELLe5QTJD/BSq", "CityNormal");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../base/City")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends s.default {
        }
            ;
        a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../base/City": "City"
    }],
    City: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "03d91NRsKBBqKH72N4jHl+t", "City");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Enum")
            , o = e("../../../Script/Manager/MAudio")
            , n = e("../../../Script/Manager/MBundle")
            , a = e("../../../Script/Manager/MConfig")
            , c = e("../../../Script/Manager/MDialog")
            , r = e("../../../Script/Manager/MEvent")
            , p = e("../../../Script/Manager/MModel")
            , h = e("../../../Script/Manager/MPool")
            , d = e("../../../Script/Manager/MTask")
            , u = e("../../../Script/Temporary")
            , M = e("../BattleData")
            , g = e("./AI")
            , m = e("./ReceiveSkill")
            , v = e("./Soldier")
            , y = ["res/texture/autoatlas/cAndS/baseBg/bg_1", "res/texture/autoatlas/cAndS/baseBg/bg_2", "res/texture/autoatlas/cAndS/baseBg/bg_3", "res/texture/autoatlas/cAndS/baseBg/bg_4", "res/texture/autoatlas/cAndS/baseBg/bg_5", "res/texture/autoatlas/cAndS/baseBg/bg_6", "res/texture/autoatlas/cAndS/baseBg/bg_7", "res/texture/autoatlas/cAndS/baseBg/bg_5", "res/texture/autoatlas/cAndS/baseBg/bg_4", "res/texture/autoatlas/cAndS/baseBg/bg_1", "res/texture/autoatlas/cAndS/baseBg/bg_4", "res/texture/autoatlas/cAndS/baseBg/bg_6"];
        var f, S;
        (function (e) {
            e.One = "res/texture/autoatlas/cAndS/connectFill/one",
                e.Two = "res/texture/autoatlas/cAndS/connectFill/two",
                e.Three = "res/texture/autoatlas/cAndS/connectFill/three",
                e.Four = "res/texture/autoatlas/cAndS/connectFill/four"
        }
        )(f || (f = {})),
            function (e) {
                e.Blue = "res/texture/autoatlas/arrow/blue",
                    e.Red = "res/texture/autoatlas/arrow/red"
            }(S || (S = {}));
        const k = [1, 1, 0]
            , { ccclass: C, property: T } = cc._decorator;
        let E = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.originType = s.ECityType.Normal,
                    this.baseBg = null,
                    this.spCity = null,
                    this.lbLevel = null,
                    this.repairSkeleton = null,
                    this.occupySkeleton = null,
                    this.connects = null,
                    this.sellectArrow = null,
                    this.startPos = null,
                    this.soldiers = null,
                    this.lines = null,
                    this.lineBgs = null,
                    this.lineColor = s.ELineColor.Red,
                    this.cityMap = new Map,
                    this.lineMap = new Map,
                    this.lineBgMap = new Map,
                    this.lineNode = null,
                    this.arrow = null,
                    this.canConnect = !1,
                    this.touchSerialnum = "",
                    this.inAutoUplevel = !1,
                    this.finalCityPath = "",
                    this.cacheSourceCities = [],
                    this.connectFillMap = new Map,
                    this.arrowMap = new Map,
                    this.singleOutCount = 0,
                    this.threeRouteExtraOut = [1, 1, 0],
                    this.invincible = !1,
                    this.noSupply = !1,
                    this.outAppointSpeed = -1,
                    this.outFloatSpeed = 0,
                    this.skill6117 = 0,
                    this.moveFloatSpeed = 0,
                    this.soldierFloatHarm = 0,
                    this.skill6114FloatSpeed = 0
            }
            onEnable() {
                r.MEvent.on(r.EMsg.GameOver, () => {
                    this.arrow && (h.MPool.recovery(this.arrow),
                        this.arrow = null),
                        this.sellectArrow.active = !1;
                    let e = this.node.getComponent(g.default);
                    e && (e.invalid(),
                        this.node.removeComponent("AI")),
                        this.lineMap.forEach(e => {
                            cc.Tween.stopAllByTarget(e.node),
                                h.MPool.recovery(e.node)
                        }
                        ),
                        this.lineMap.clear(),
                        this.lineBgMap.forEach(e => {
                            h.MPool.recovery(e)
                        }
                        ),
                        this.lineBgMap.clear(),
                        this.overClear()
                }
                    , this),
                    r.MEvent.on(r.EMsg.EnterCity, e => {
                        if (this.city.serialnum == e.targetSerialnum) {
                            if (this.city.camp == e.sourceCity.camp) {
                                if (this.noSupply)
                                    return;
                                cc.tween(this.lbLevel.node).to(.125, {
                                    scale: 1.25
                                }).to(.125, {
                                    scale: 1
                                }).start(),
                                    e.sourceCity.doubleType || e.sourceCity.type != s.ECityType.Normal && e.sourceCity.type != s.ECityType.Attack ? (e.sourceCity.type == s.ECityType.Defense || e.sourceCity.doubleType) && (this.city.level += 2,
                                        this.city.level > 65 && (this.city.level = 65,
                                            this.overflow(e.sourceCity))) : (this.city.level++,
                                                this.city.level > 65 && (this.city.level = 65,
                                                    this.overflow(e.sourceCity)))
                            } else {
                                if (this.invincible)
                                    return;
                                cc.tween(this.lbLevel.node).to(.125, {
                                    scale: .75
                                }).to(.125, {
                                    scale: 1
                                }).start(),
                                    e.sourceCity.doubleType || e.sourceCity.type != s.ECityType.Normal && e.sourceCity.type != s.ECityType.Defense ? (e.sourceCity.type == s.ECityType.Attack || e.sourceCity.doubleType) && this.city.level >= 0 && (this.city.level -= 2 * (100 + this.soldierFloatHarm) / 100,
                                        this.city.level < 0 && (this.city.level = 0,
                                            this.changeCamp(e.sourceCity))) : this.city.level >= 0 && (this.city.level -= 1 * (100 + this.soldierFloatHarm) / 100,
                                                this.city.level < 0 && (this.city.level = 0,
                                                    this.changeCamp(e.sourceCity)))
                            }
                            this.updateLevelInfo(),
                                r.MEvent.emit(r.EMsg.UpdateGamut)
                        }
                    }
                        , this),
                    r.MEvent.on(r.EMsg.ConnectCity, e => {
                        var t;
                        if (this.city.serialnum == e.head.serialnum) {
                            if (e.head.exports.find(t => t.serialnum == e.tail.serialnum) || (e.head.exports.push(e.tail),
                                h.MPool.load({
                                    bundle: n.EBundle.Battle,
                                    path: "res/prefab/line",
                                    type: cc.Prefab,
                                    onComplete: t => {
                                        let i = cc.v2(e.tail.pos).sub(cc.v2(e.head.pos));
                                        this.lineNode = t,
                                            this.lineNode.setParent(this.lines),
                                            this.lineNode.setPosition(this.node.getPosition()),
                                            this.lineNode.angle = 180 * cc.Vec2.UP.signAngle(i) / Math.PI;
                                        let l = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag();
                                        e.head.camp != e.tail.camp && e.tail.exports.find(t => t.serialnum == e.head.serialnum) ? this.lineNode.height = l / 2 : this.lineNode.height = l,
                                            cc.Tween.stopAllByTarget(this.lineNode);
                                        let s = cc.tween(this.lineNode).delay(1).call(() => {
                                            this.singleOutCount++,
                                                this.singleOutCount > this.lineMap.size && (this.singleOutCount = 0,
                                                    this.threeRouteExtraOut = Utils.copy(k)),
                                                h.MPool.load({
                                                    bundle: n.EBundle.Battle,
                                                    path: "res/prefab/soldier/soldier",
                                                    type: cc.Prefab,
                                                    onComplete: t => {
                                                        t.setParent(this.soldiers),
                                                            t.setPosition(e.head.pos),
                                                            t.getComponent(v.default).init(Utils.copy(e.head), Utils.copy(e.head), Utils.copy(e.tail), this.moveFloatSpeed)
                                                    }
                                                });
                                            let t = []
                                                , i = 0;
                                            if (1 == this.lineMap.size)
                                                i = 2;
                                            else if (2 == this.lineMap.size)
                                                i = 1;
                                            else if (3 == this.lineMap.size && this.threeRouteExtraOut.length > 0) {
                                                let e = Math.floor(Math.random() * this.threeRouteExtraOut.length);
                                                i = this.threeRouteExtraOut[e],
                                                    this.threeRouteExtraOut.splice(e, 1)
                                            }
                                            for (let e = 0; e < i; e++)
                                                this.cacheSourceCities.length > 0 && t.push(this.cacheSourceCities.shift());
                                            if (t.length > 0) {
                                                let i = t.length;
                                                this.schedule(() => {
                                                    t.length > 0 && h.MPool.load({
                                                        bundle: n.EBundle.Battle,
                                                        path: "res/prefab/soldier/soldier",
                                                        type: cc.Prefab,
                                                        onComplete: i => {
                                                            let l = t.shift();
                                                            i.setParent(this.soldiers),
                                                                i.setPosition(e.head.pos),
                                                                i.getComponent(v.default).init(Utils.copy(l), Utils.copy(e.head), Utils.copy(e.tail), this.moveFloatSpeed)
                                                        }
                                                    })
                                                }
                                                    , .15, i - 1, .15)
                                            }
                                        }
                                        ).union().repeatForever().start();
                                        this.lineMap.set(`${e.head.serialnum}-${e.tail.serialnum}`, {
                                            node: this.lineNode,
                                            tween: s
                                        }),
                                            this.updateConnectInfo()
                                    }
                                }),
                                h.MPool.load({
                                    bundle: n.EBundle.Battle,
                                    path: "res/prefab/lineBg",
                                    type: cc.Prefab,
                                    onComplete: t => {
                                        let i = cc.v2(e.tail.pos).sub(cc.v2(e.head.pos));
                                        t.setParent(this.lineBgs),
                                            t.setPosition(this.node.getPosition()),
                                            t.color = Utils.hexToRgb(a.MConfig.LocalConfig.CampColor.get(e.head.camp)),
                                            t.angle = 180 * cc.Vec2.UP.signAngle(i) / Math.PI;
                                        let l = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag();
                                        e.head.camp != e.tail.camp && e.tail.exports.find(t => t.serialnum == e.head.serialnum) ? t.height = l / 2 : t.height = l,
                                            this.lineBgMap.set(`${e.head.serialnum}-${e.tail.serialnum}`, t)
                                    }
                                })),
                                e.head.camp == e.tail.camp) {
                                let t = e.head.enters.findIndex(t => t.serialnum == e.tail.serialnum);
                                -1 != t && e.head.enters.splice(t, 1)
                            }
                            this.checkAutoUplevel()
                        } else if (this.city.serialnum == e.tail.serialnum) {
                            this.city.enters.find(t => t.serialnum == e.head.serialnum) || this.city.enters.push(e.head);
                            let i = `${e.tail.serialnum}-${e.head.serialnum}`
                                , l = null === (t = this.lineMap.get(i)) || void 0 === t ? void 0 : t.node
                                , s = this.lineBgMap.get(i);
                            if (e.head.camp != e.tail.camp)
                                l && (l.height = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag() / 2),
                                    s && (s.height = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag() / 2),
                                    r.MEvent.emit(r.EMsg.Connected, e);
                            else {
                                let t = this.city.exports.findIndex(t => t.serialnum == e.head.serialnum);
                                -1 != t && (this.city.exports.splice(t, 1),
                                    l && (cc.Tween.stopAllByTarget(l),
                                        h.MPool.recovery(l),
                                        this.lineMap.delete(i),
                                        this.updateConnectInfo()),
                                    s && (h.MPool.recovery(s),
                                        this.lineBgMap.delete(i)))
                            }
                            this.checkAutoUplevel()
                        }
                    }
                        , this),
                    r.MEvent.on(r.EMsg.CutConnect, e => {
                        var t, i;
                        if (this.city.serialnum == e.head.serialnum) {
                            let i = this.city.exports.findIndex(t => t.serialnum == e.tail.serialnum);
                            if (-1 != i) {
                                this.city.exports.splice(i, 1);
                                let l = `${e.head.serialnum}-${e.tail.serialnum}`
                                    , s = null === (t = this.lineMap.get(l)) || void 0 === t ? void 0 : t.node
                                    , o = this.lineBgMap.get(l);
                                s && (cc.Tween.stopAllByTarget(s),
                                    h.MPool.recovery(s),
                                    this.lineMap.delete(l),
                                    this.updateConnectInfo()),
                                    o && (h.MPool.recovery(o),
                                        this.lineBgMap.delete(l))
                            }
                            this.checkAutoUplevel()
                        } else if (this.city.serialnum == e.tail.serialnum) {
                            let t = this.city.enters.findIndex(t => t.serialnum == e.head.serialnum);
                            if (-1 != t && (this.city.enters.splice(t, 1),
                                e.head.camp != e.tail.camp)) {
                                let t = `${e.tail.serialnum}-${e.head.serialnum}`
                                    , l = null === (i = this.lineMap.get(t)) || void 0 === i ? void 0 : i.node
                                    , s = this.lineBgMap.get(t);
                                l && (l.height = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag()),
                                    s && (s.height = cc.v2(e.head.pos).sub(cc.v2(e.tail.pos)).mag())
                            }
                            this.checkAutoUplevel()
                        }
                    }
                        , this),
                    r.MEvent.on(r.EMsg.CutLine, e => {
                        if (this.city.camp == s.ECityCamp.One)
                            for (let t = 0; t < this.city.exports.length; t++)
                                if (cc.Intersection.lineLine(e.head, e.tail, this.city.pos, this.city.exports[t].pos)) {
                                    let e = {
                                        head: this.city,
                                        tail: this.city.exports[t]
                                    };
                                    r.MEvent.emit(r.EMsg.CutConnect, e),
                                        t--
                                }
                    }
                        , this)
            }
            init(e, t, i, l) {
                var o;
                this.originType = e.type,
                    this.soldiers = t,
                    this.lines = i,
                    this.lineBgs = l,
                    this.city = {
                        serialnum: null !== (o = e.serialnum) && void 0 !== o ? o : M.BattleData.genSerialnum(),
                        camp: e.camp,
                        type: e.type,
                        level: e.level,
                        pos: e.pos,
                        exports: [],
                        enters: []
                    },
                    this.node.getChildByName("serialnum").getComponent(cc.Label).string = this.city.serialnum.toString(),
                    this.updateLevelInfo(),
                    this.city.camp != s.ECityCamp.Default && (this.intoAutoUplevel(),
                        this.city.camp == s.ECityCamp.One ? this.onEventTouch() : (this.offEventTouch(),
                            this.addComponent(g.default).init({
                                origin: s.EAIOrigin.Default
                            })));
                let a = ""
                    , c = p.MModel.Battle.getLevelChapter(p.MModel.Battle.getUseLevel());
                p.MModel.Battle.gameEvent == s.EGameEvent.None ? a = y[(c - 1) % y.length] : p.MModel.Battle.gameEvent == s.EGameEvent.NewYear ? a = "res/texture/autoatlas/cAndS/baseBg/bg_newYear" : p.MModel.Battle.gameEvent == s.EGameEvent.MothersDay && (a = "res/texture/autoatlas/cAndS/baseBg/bg_mothersDay"),
                    n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: a,
                        type: cc.SpriteFrame,
                        onComplete: e => {
                            this.baseBg.spriteFrame = e
                        }
                    }),
                    r.MEvent.emit(r.EMsg.UpdateGamut)
            }
            playRepair(e) {
                this.repairSkeleton.node.active = !0,
                    this.repairSkeleton.skeletonData ? (this.repairSkeleton.setAnimation(0, e, !1),
                        this.repairSkeleton.setCompleteListener(() => {
                            this.repairSkeleton.node.active = !1,
                                this.repairSkeleton.setCompleteListener(null)
                        }
                        )) : n.MBundle.load({
                            bundle: n.EBundle.Battle,
                            path: "res/spine/repair/skeleton",
                            type: sp.SkeletonData,
                            onComplete: t => {
                                this.repairSkeleton.skeletonData = t,
                                    this.repairSkeleton.setAnimation(0, e, !1),
                                    this.repairSkeleton.setCompleteListener(() => {
                                        this.repairSkeleton.node.active = !1,
                                            this.repairSkeleton.setCompleteListener(null)
                                    }
                                    )
                            }
                        })
            }
            overflow(e) {
                this.cacheSourceCities.length < 2 && this.cacheSourceCities.push(e)
            }
            onTouchStart(e) {
                this.lineColor = s.ELineColor.Red,
                    this.touchSerialnum = Utils.genUid(),
                    this.lineMap.size < this.getRouteByLevel(Math.floor(this.city.level)) && (GA.Info.isPreview || "on" != p.MModel.Pause.VibrateSwitch || GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5]) || GA.PA.vibrateShort({}),
                        o.MAudio.playEffect(o.EAudio.Connect),
                        this.startPos = this.getPosition(),
                        h.MPool.load({
                            bundle: n.EBundle.Battle,
                            path: "res/prefab/arrow",
                            type: cc.Prefab,
                            onComplete: e => {
                                null != this.startPos ? (e.scaleY = 0,
                                    this.arrow = e,
                                    e.setParent(this.node),
                                    e.setPosition(cc.v2()),
                                    this.arrowMap.has(S.Red) ? e.getComponent(cc.Sprite).spriteFrame = this.arrowMap.get(S.Red) : n.MBundle.load({
                                        bundle: n.EBundle.Battle,
                                        path: S.Red,
                                        type: cc.SpriteFrame,
                                        onComplete: t => {
                                            this.arrowMap.set(S.Red, t),
                                                e.getComponent(cc.Sprite).spriteFrame = t
                                        }
                                    }),
                                    e.height = 124) : (h.MPool.recovery(e),
                                        this.arrow = null)
                            }
                        }))
            }
            onTouchMove(e) {
                if (this.startPos) {
                    let t = !1
                        , i = null
                        , l = {
                            head: null,
                            tail: null
                        }
                        , o = cc.Canvas.instance.node.convertToNodeSpaceAR(e.getLocation())
                        , a = !1;
                    for (let e = 0; e < M.BattleData.cities.length; e++) {
                        if (a)
                            continue;
                        i = M.BattleData.cities[e],
                            t = !0;
                        let s = i.spCity.node
                            , n = this.node.parent.convertToNodeSpaceAR(s.parent.convertToWorldSpaceAR(s.getPosition())).add(cc.v2(0, s.height / 2));
                        if (i.city.serialnum != this.city.serialnum) {
                            let e = i.getPosition().sub(o).mag() <= 60
                                , s = cc.Intersection.pointInPolygon(o, [cc.v2(n.x - i.spCity.node.width / 2, n.y - i.spCity.node.height / 2), cc.v2(n.x + i.spCity.node.width / 2, n.y - i.spCity.node.height / 2), cc.v2(n.x + i.spCity.node.width / 2, n.y + i.spCity.node.height / 2), cc.v2(n.x - i.spCity.node.width / 2, n.y + i.spCity.node.height / 2)]);
                            if (e || s) {
                                for (let l = 0; l < M.BattleData.cities.length; l++)
                                    if (M.BattleData.cities[l].city.serialnum != this.city.serialnum && M.BattleData.cities[l].city.serialnum != i.city.serialnum && cc.Intersection.pointLineDistance(M.BattleData.cities[l].getPosition(), this.getPosition(), i.getPosition(), !0) <= 60) {
                                        t = !1,
                                            i && (i.sellectArrow.active = !1),
                                            a = !0;
                                        break
                                    }
                                if (a)
                                    continue;
                                for (let l = 0; l < M.BattleData.decorates.length; l++)
                                    if (cc.Intersection.linePolygon(this.startPos, i.getPosition(), M.BattleData.decorates[l].decorate.vertexs)) {
                                        t = !1,
                                            i && (i.sellectArrow.active = !1),
                                            a = !0;
                                        break
                                    }
                                if (a)
                                    continue;
                                if (t)
                                    for (let l = 0; l < M.BattleData.blocks.length; l++)
                                        if (cc.Intersection.linePolygon(this.startPos, i.getPosition(), M.BattleData.blocks[l].block.vertexs)) {
                                            t = !1,
                                                i && (i.sellectArrow.active = !1),
                                                a = !0;
                                            break
                                        }
                                if (a)
                                    continue;
                                l.head = this.city,
                                    l.tail = i.city;
                                let e = i.getPosition().sub(this.startPos);
                                this.arrow && (this.arrow.height = e.mag(),
                                    this.arrow.angle = 180 * cc.Vec2.UP.signAngle(e) / Math.PI),
                                    this.cityMap.set(this.touchSerialnum, i);
                                break
                            }
                            t = !1,
                                i && (i.sellectArrow.active = !1)
                        } else
                            t = !1,
                                i && (i.sellectArrow.active = !1)
                    }
                    if (!t) {
                        let e = o.sub(this.startPos);
                        this.arrow && (this.arrow.height = e.mag(),
                            this.arrow.angle = 180 * cc.Vec2.UP.signAngle(e) / Math.PI)
                    }
                    t ? (this.canConnect = !0,
                        this.lineColor == s.ELineColor.Red && (this.arrow && (i.sellectArrow.active = !0,
                            i.sellectArrow.y = i.spCity.node.height + i.spCity.node.y,
                            this.arrowMap.has(S.Blue) ? this.arrow.getComponent(cc.Sprite).spriteFrame = this.arrowMap.get(S.Blue) : n.MBundle.load({
                                bundle: n.EBundle.Battle,
                                path: S.Blue,
                                type: cc.SpriteFrame,
                                onComplete: e => {
                                    this.arrowMap.set(S.Blue, e),
                                        this.arrow.getComponent(cc.Sprite).spriteFrame = e
                                }
                            })),
                            this.lineColor = s.ELineColor.Blue)) : (this.canConnect = !1,
                                this.lineColor == s.ELineColor.Blue && (this.arrow && (this.arrowMap.has(S.Red) ? this.arrow.getComponent(cc.Sprite).spriteFrame = this.arrowMap.get(S.Red) : n.MBundle.load({
                                    bundle: n.EBundle.Battle,
                                    path: S.Red,
                                    type: cc.SpriteFrame,
                                    onComplete: e => {
                                        this.arrowMap.set(S.Red, e),
                                            this.arrow.getComponent(cc.Sprite).spriteFrame = e
                                    }
                                })),
                                    this.lineColor = s.ELineColor.Red)),
                        this.arrow && (this.arrow.height > 80 ? this.arrow.scaleY = 1 : this.arrow.scaleY = 0)
                }
            }
            onTouchEndCancel() {
                if (this.startPos = null,
                    this.canConnect && this.city.camp == s.ECityCamp.One) {
                    GA.Info.isPreview || "on" != p.MModel.Pause.VibrateSwitch || GA.isPlatform([GA.Platform.M4399MiniGame, GA.Platform.WeiYouH5]) || GA.PA.vibrateShort({}),
                        o.MAudio.playEffect(o.EAudio.ConnectSuccess),
                        this.canConnect = !1;
                    let e = {
                        head: this.city,
                        tail: this.cityMap.get(this.touchSerialnum).city
                    };
                    p.MModel.Guide.completeGuide1 || 2 != p.MModel.Battle.level || (p.MModel.Guide.completeGuide1 = !0,
                        c.MDialog.showDialog(n.EDialog.Guide1, {})),
                        r.MEvent.emit(r.EMsg.ConnectCity, e)
                } else
                    o.MAudio.playEffect(o.EAudio.ConnectFail);
                this.arrow && (h.MPool.recovery(this.arrow),
                    this.arrow = null),
                    this.cityMap.get(this.touchSerialnum) && (this.cityMap.get(this.touchSerialnum).sellectArrow.active = !1)
            }
            onEventTouch() {
                this.offEventTouch(),
                    this.spCity.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                    this.spCity.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    this.spCity.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCancel, this),
                    this.spCity.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCancel, this)
            }
            offEventTouch() {
                this.spCity.node.targetOff(this)
            }
            changeCamp(e) {
                for (this.cacheSourceCities = []; this.city.exports.length > 0;) {
                    let e = {
                        head: this.city,
                        tail: this.city.exports[0]
                    };
                    r.MEvent.emit(r.EMsg.CutConnect, e)
                }
                if (p.MModel.Battle.gameModel == s.EGameModel.Infernal && this.city.camp == s.ECityCamp.One && d.MTask.task3++,
                    this.city.camp = e.camp,
                    this.city.level = 0,
                    this.updateConnectInfo(),
                    e.camp == s.ECityCamp.One) {
                    this.onEventTouch(),
                        this.intoAutoUplevel();
                    let e = this.node.getComponent(g.default);
                    e && (e.thaw(),
                        e.invalid(),
                        this.node.removeComponent(g.default)),
                        o.MAudio.playEffect(o.EAudio.ChangeCamp),
                        p.MModel.NewbieTask.doTask(2)
                } else {
                    this.offEventTouch();
                    let t = this.node.getComponent(g.default);
                    t ? (t.enabled = !0,
                        t.init({
                            origin: s.EAIOrigin.Occupied,
                            intruder: e
                        })) : (t = this.addComponent(g.default)).init({
                            origin: s.EAIOrigin.Occupied,
                            intruder: e
                        })
                }
                this.playOccupied(e.camp),
                    this.arrow && (h.MPool.recovery(this.arrow),
                        this.arrow = null,
                        this.cityMap.get(this.touchSerialnum) && (this.cityMap.get(this.touchSerialnum).sellectArrow.active = !1)),
                    this.stopSkills()
            }
            updateConnectInfo() {
                if (this.city.camp != s.ECityCamp.Default) {
                    this.connects.active = !0;
                    let e = this.getRouteByLevel(Math.floor(this.city.level))
                        , t = Utils.enumValue(f, s.ECityCamp[this.city.camp]);
                    if (this.connectFillMap.has(t))
                        for (let i = 0; i < this.connects.childrenCount; i++) {
                            let l = this.connects.children[i];
                            i < e ? (l.active = !0,
                                i < this.lineMap.size ? (l.children[0].active = !0,
                                    l.getComponentInChildren(cc.Sprite).spriteFrame = this.connectFillMap.get(t)) : l.children[0].active = !1) : l.active = !1
                        }
                    else
                        n.MBundle.load({
                            bundle: n.EBundle.Battle,
                            path: t,
                            type: cc.SpriteFrame,
                            onComplete: i => {
                                this.connectFillMap.set(t, i);
                                for (let l = 0; l < this.connects.childrenCount; l++) {
                                    let i = this.connects.children[l];
                                    l < e ? (i.active = !0,
                                        l < this.lineMap.size ? (i.children[0].active = !0,
                                            i.getComponentInChildren(cc.Sprite).spriteFrame = this.connectFillMap.get(t)) : i.children[0].active = !1) : i.active = !1
                                }
                            }
                        });
                    this.updateOutSpeed()
                } else
                    this.connects.active = !1
            }
            updateLevelInfo() {
                GA.isPlatform(GA.Platform.Kwaigame) ? this.lbLevel.string = `${this.city.level >= 65 ? "\u6ee1\u7ea7" : Math.floor(this.city.level)}` : this.lbLevel.string = `${this.city.level >= 65 ? "Max" : Math.floor(this.city.level)}`,
                    this.updateCityStyle(this.city),
                    this.updateConnectInfo()
            }
            updateCityStyle(e) {
                let t = e.camp
                    , i = e.type
                    , l = this.getCityStyleByLevel(Math.floor(e.level))
                    , a = `res/texture/autoatlas/cAndS/city/${"camp-" + t}/${"type-" + i}/${"style-" + l}`;
                if (this.finalCityPath != a) {
                    if ("" != this.finalCityPath && l >= 2 && o.MAudio.playEffect(o.EAudio.ChangeStype),
                        this.spCity.spriteFrame) {
                        let e = parseInt(this.finalCityPath.split("style-")[1])
                            , t = parseInt(a.split("style-")[1]);
                        t > e ? this.playRepair("up") : t < e && this.playRepair("down")
                    }
                    this.finalCityPath = a,
                        n.MBundle.load({
                            bundle: n.EBundle.Battle,
                            path: a,
                            type: cc.SpriteFrame,
                            onComplete: e => {
                                this.spCity.spriteFrame = e,
                                    this.scheduleOnce(() => {
                                        if (this.spCity.node.getChildByName("bubble").getComponent(cc.Widget).top = 36,
                                            this.city.camp != s.ECityCamp.Default) {
                                            let e = this.spCity.node.getChildByName("connects");
                                            e.getComponent(cc.Widget).top = -28,
                                                e.active = !1,
                                                e.active = !0
                                        }
                                        this.spCity.node.children[0].active = !1,
                                            this.spCity.node.children[0].active = !0
                                    }
                                    )
                            }
                        })
                }
            }
            updateOutSpeed() {
                let e = [...this.lineMap.values()];
                for (let t = 0; t < e.length; t++) {
                    let i = e[t].tween._finalAction;
                    i._speedMethod = !0,
                        -1 != this.outAppointSpeed ? i._speed = this.outAppointSpeed : this.city.camp != s.ECityCamp.One ? i._speed = 1 / this.getOutSpeed(e.length) * (1 + u.Temporary.AISpeedAdd / 100) * (100 + this.outFloatSpeed - this.skill6114FloatSpeed) / 100 : i._speed = 1 / this.getOutSpeed(e.length) * (100 + this.outFloatSpeed + this.skill6117) / 100
                }
            }
            scheduleUplevel() {
                this.city.level++,
                    this.city.level >= 65 && this.quitAutoUplevel(),
                    this.updateLevelInfo()
            }
            intoAutoUplevel() {
                this.quitAutoUplevel(),
                    this.inAutoUplevel = !0,
                    this.schedule(this.scheduleUplevel, 1.5, cc.macro.REPEAT_FOREVER, 1.5)
            }
            quitAutoUplevel() {
                this.inAutoUplevel = !1,
                    this.unschedule(this.scheduleUplevel)
            }
            checkAutoUplevel() {
                let e = this.node.getComponent(g.default);
                "off" != (null == e ? void 0 : e.switch) && "frozen" != (null == e ? void 0 : e.skill6001Status) && "pollute" != (null == e ? void 0 : e.skill6112Status) && this.city.camp != s.ECityCamp.Default && (0 == this.city.exports.length || !this.noSupply && 0 != this.city.exports.length && this.city.enters.find(e => e.camp == this.city.camp) ? this.inAutoUplevel || this.intoAutoUplevel() : this.quitAutoUplevel())
            }
            getCityStyleByLevel(e) {
                return this.stageDivision(e)
            }
            getRouteByLevel(e) {
                return this.stageDivision(e)
            }
            stageDivision(e) {
                return e < 10 ? 1 : e < 30 ? 2 : 3
            }
            getOutSpeed(e) {
                switch (e) {
                    case 1:
                        return (1 - this.city.level * a.MConfig.Config.OutRatio.A) / a.MConfig.Config.OutRatio.Line1;
                    case 2:
                        return (1 - this.city.level * a.MConfig.Config.OutRatio.A) / a.MConfig.Config.OutRatio.Line2;
                    case 3:
                        return (1 - this.city.level * a.MConfig.Config.OutRatio.A) / a.MConfig.Config.OutRatio.Line3
                }
            }
            getPosition() {
                return this.node.getPosition()
            }
            randomCutConnect() {
                if (this.city.exports.length > 0) {
                    let e = this.city.exports[Math.floor(Math.random() * this.city.exports.length)]
                        , t = {
                            head: this.city,
                            tail: e
                        };
                    r.MEvent.emit(r.EMsg.CutConnect, t)
                }
            }
            playOccupied(e) {
                const t = e => {
                    switch (e) {
                        case s.ECityCamp.One:
                            this.occupySkeleton.setAnimation(0, "blue", !1);
                            break;
                        case s.ECityCamp.Two:
                            this.occupySkeleton.setAnimation(0, "red", !1);
                            break;
                        case s.ECityCamp.Three:
                            this.occupySkeleton.setAnimation(0, "green", !1);
                            break;
                        case s.ECityCamp.Four:
                            this.occupySkeleton.setAnimation(0, "yellow", !1)
                    }
                }
                    ;
                this.occupySkeleton.skeletonData ? t(e) : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: "res/spine/occupy/skeleton",
                    type: sp.SkeletonData,
                    onComplete: i => {
                        this.occupySkeleton.skeletonData = i,
                            t(e)
                    }
                })
            }
            downLevel(e) {
                this.city.level -= e,
                    this.city.level < 0 && (this.city.level = 0),
                    this.updateLevelInfo()
            }
            downLevelByPercent(e) {
                this.city.level *= e / 100,
                    this.city.level = Math.floor(this.city.level),
                    this.city.level < 0 && (this.city.level = 0),
                    this.updateLevelInfo()
            }
            levelDouble() {
                this.city.level *= 2,
                    this.city.level > 65 && (this.city.level = 65),
                    this.updateLevelInfo()
            }
            upLevel(e) {
                this.city.level += e,
                    this.city.level > 65 && (this.city.level = 65),
                    this.updateLevelInfo()
            }
            setLevel(e) {
                this.city.level = e,
                    this.updateLevelInfo()
            }
            ruin() {
                for (this.cacheSourceCities = []; this.city.exports.length > 0;) {
                    let e = {
                        head: this.city,
                        tail: this.city.exports[0]
                    };
                    r.MEvent.emit(r.EMsg.CutConnect, e)
                }
                let e = this.node.getComponent(g.default);
                e && (e.invalid(),
                    this.node.removeComponent(g.default)),
                    this.city.level = 0,
                    this.city.camp = s.ECityCamp.Default,
                    this.updateLevelInfo(),
                    this.unscheduleAllCallbacks(),
                    this.stopSkills()
            }
            becomeSelfCity() {
                let e = {
                    serialnum: this.city.serialnum,
                    camp: s.ECityCamp.One,
                    type: this.city.type,
                    pos: this.city.pos,
                    level: 0,
                    exports: [],
                    enters: []
                };
                this.changeCamp(e),
                    this.updateLevelInfo(),
                    r.MEvent.emit(r.EMsg.UpdateGamut)
            }
            forceCityType() {
                this.city.type = s.ECityType.Normal,
                    this.updateLevelInfo()
            }
            recoveryCityType() {
                this.city.type = this.originType,
                    this.updateLevelInfo()
            }
            overClear() {
                this.startPos = null,
                    this.soldiers = null,
                    this.lines = null,
                    this.lineBgs = null,
                    this.lineColor = s.ELineColor.Red,
                    this.cityMap = new Map,
                    this.lineMap = new Map,
                    this.lineBgMap = new Map,
                    this.lineNode = null,
                    this.arrow = null,
                    this.canConnect = !1,
                    this.touchSerialnum = "",
                    this.inAutoUplevel = !1,
                    this.finalCityPath = "",
                    this.cacheSourceCities = [],
                    this.threeRouteExtraOut = Utils.copy(k),
                    this.connectFillMap = new Map,
                    this.arrowMap = new Map,
                    this.invincible = !1,
                    this.outAppointSpeed = -1,
                    this.outFloatSpeed = 0,
                    this.skill6117 = 0,
                    this.skill6114FloatSpeed = 0,
                    this.moveFloatSpeed = 0,
                    this.soldierFloatHarm = 0,
                    r.MEvent.targetOff(this),
                    this.node.targetOff(this),
                    this.unscheduleAllCallbacks(),
                    this.offEventTouch()
            }
            stopSkills() {
                let e = this.node.getComponent(m.default);
                e && (e.stopSkill6001(),
                    e.stopSkill6002(),
                    e.stopSkill6004(),
                    e.stopSkill6007(),
                    e.stopSkill6008(),
                    e.stopSkill6101(),
                    e.stopSkill6102(),
                    e.stopSkill6103(),
                    e.stopSkill6104(),
                    e.stopSkill6107(),
                    e.stopSkill6108(),
                    e.stopSkill6111(),
                    e.stopSkill6112(),
                    e.stopSkill6114(),
                    e.stopSkill6116(),
                    e.stopSkill6117())
            }
            clear() {
                this.spCity.spriteFrame = null,
                    this.overClear()
            }
            onDisable() {
                this.clear()
            }
        }
            ;
        l([T(cc.Sprite)], E.prototype, "baseBg", void 0),
            l([T(cc.Sprite)], E.prototype, "spCity", void 0),
            l([T(cc.Label)], E.prototype, "lbLevel", void 0),
            l([T(sp.Skeleton)], E.prototype, "repairSkeleton", void 0),
            l([T(sp.Skeleton)], E.prototype, "occupySkeleton", void 0),
            l([T(cc.Node)], E.prototype, "connects", void 0),
            l([T(cc.Node)], E.prototype, "sellectArrow", void 0),
            E = l([C], E),
            i.default = E,
            cc._RF.pop()
    }
        , {
        "../../../Script/Enum": void 0,
        "../../../Script/Manager/MAudio": void 0,
        "../../../Script/Manager/MBundle": void 0,
        "../../../Script/Manager/MConfig": void 0,
        "../../../Script/Manager/MDialog": void 0,
        "../../../Script/Manager/MEvent": void 0,
        "../../../Script/Manager/MModel": void 0,
        "../../../Script/Manager/MPool": void 0,
        "../../../Script/Manager/MTask": void 0,
        "../../../Script/Temporary": void 0,
        "../BattleData": "BattleData",
        "./AI": "AI",
        "./ReceiveSkill": "ReceiveSkill",
        "./Soldier": "Soldier"
    }],
    Decorate: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "9e664dn2fRBwKdje+u6nFxf", "Decorate");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Manager/MBundle")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.spDecorate = null
            }
            init(e) {
                this.decorate = {
                    vertexs: e.vertexs
                },
                    s.MBundle.load({
                        bundle: s.EBundle.Battle,
                        path: `res/texture/autoatlas/decorate/decorate-${e.id}`,
                        type: cc.SpriteFrame,
                        onComplete: e => {
                            this.spDecorate.spriteFrame = e
                        }
                    })
            }
        }
            ;
        l([n(cc.Sprite)], a.prototype, "spDecorate", void 0),
            a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../../Script/Manager/MBundle": void 0
    }],
    Gamut: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "0be30BcY6RKl6dWKT2kwvIg", "Gamut");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Enum")
            , o = e("../../../Script/Manager/MConfig")
            , n = e("../../../Script/Manager/MEvent")
            , a = e("../../../Script/Manager/MModel")
            , c = e("../../../Script/Manager/MTask")
            , r = e("../../../Script/Temporary")
            , p = e("../BattleData")
            , { ccclass: h, property: d } = cc._decorator;
        let u = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.camp = -1
            }
            init(e) {
                this.camp = e,
                    this.node.color = Utils.hexToRgb(o.MConfig.LocalConfig.CampColor.get(e)),
                    this.updateGamut()
            }
            onEnable() {
                n.MEvent.on(n.EMsg.UpdateGamut, () => {
                    this.updateGamut()
                }
                    , this)
            }
            updateGamut() {
                let e = p.BattleData.cities.reduce((e, t) => 0 != t.city.camp ? e + t.city.level : e, 0)
                    , t = p.BattleData.cities.reduce((e, t) => t.city.camp == this.camp ? e + t.city.level : e, 0);
                this.node.width = t / e * 400.8,
                    r.Temporary.gamutFinish && (GA.isPlatform([GA.Platform.Kwaigame, GA.Platform.ByteDance]) && t / e >= .9 && n.MEvent.emit(n.EMsg.ScreenShot),
                        a.MModel.Battle.gameModel == s.EGameModel.Infernal && this.camp == s.ECityCamp.One && c.MTask.task2 < 100 * (1 - t / e) && (c.MTask.task2 = 100 * (1 - t / e)))
            }
            onDisable() {
                n.MEvent.targetOff(this)
            }
        }
            ;
        u = l([h], u),
            i.default = u,
            cc._RF.pop()
    }
        , {
        "../../../Script/Enum": void 0,
        "../../../Script/Manager/MConfig": void 0,
        "../../../Script/Manager/MEvent": void 0,
        "../../../Script/Manager/MModel": void 0,
        "../../../Script/Manager/MTask": void 0,
        "../../../Script/Temporary": void 0,
        "../BattleData": "BattleData"
    }],
    Move: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e32d1VmbhdClbX4zX+D9Ay/", "Move");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const { ccclass: s, property: o } = cc._decorator;
        let n = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.speed = 120
            }
            init(e, t, i) {
                let l = cc.v2(e[1]).sub(cc.v2(e[0])).mag() / this.speed * (100 + t) / 100;
                cc.tween(this.node).set({
                    position: cc.v3(e[0])
                }).to(l, {
                    position: cc.v3(e[1])
                }).call(() => {
                    null == i || i()
                }
                ).start()
            }
        }
            ;
        n = l([s], n),
            i.default = n,
            cc._RF.pop()
    }
        , {}],
    ReceiveSkill: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "5fe433JIjtDXpvV9dX72f0y", "ReceiveSkill");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../../Script/Enum")
            , o = e("../../../Script/Manager/MAudio")
            , n = e("../../../Script/Manager/MBundle")
            , a = e("../../../Script/Manager/MConfig")
            , c = e("../../../Script/Manager/MEvent")
            , r = e("../../../Script/Manager/MSkill")
            , p = e("../../../Script/Manager/MToast")
            , h = e("./AI")
            , d = e("./City");
        var u;
        (function (e) {
            e.Spine6001 = "res/spine/skill/6001/skeleton",
                e.Spine6002 = "res/spine/skill/6002/skeleton",
                e.Spine6003 = "res/spine/skill/6003/skeleton",
                e.Spine6004 = "res/spine/skill/6004/skeleton",
                e.Spine6005 = "res/spine/skill/6005/skeleton",
                e.Spine6006 = "res/spine/skill/6006/skeleton",
                e.Spine6007 = "res/spine/skill/6007/skeleton",
                e.Spine6008 = "res/spine/skill/6008/skeleton",
                e.Spine6009 = "res/spine/skill/6009/skeleton",
                e.Spine6010 = "res/spine/skill/6010/skeleton",
                e.Spine6011 = "res/spine/skill/6011/skeleton",
                e.Spine6101 = "res/spine/skill/6101/skeleton",
                e.Spine6102 = "res/spine/skill/6102/skeleton",
                e.Spine6103 = "res/spine/skill/6103/skeleton",
                e.Spine6104 = "res/spine/skill/6104/skeleton",
                e.Spine6104_2 = "res/spine/skill/6001/skeleton",
                e.Spine6105 = "res/spine/skill/6105/skeleton",
                e.Spine6106 = "res/spine/skill/6106/skeleton",
                e.Spine6107 = "res/spine/skill/6107/skeleton",
                e.Spine6108 = "res/spine/skill/6108/skeleton",
                e.Spine6109 = "res/spine/skill/6109/skeleton",
                e.Spine6110 = "res/spine/skill/6110/skeleton",
                e.Spine6111 = "res/spine/skill/6111/skeleton",
                e.Spine6112 = "res/spine/skill/6112/skeleton",
                e.Spine6113 = "res/spine/skill/6113/skeleton",
                e.Spine6114 = "res/spine/skill/6114/skeleton",
                e.Spine6115 = "res/spine/skill/6115/skeleton",
                e.Spine6116 = "res/spine/skill/6116/skeleton",
                e.Spine6117 = "res/spine/skill/6117/skeleton"
        }
        )(u || (u = {}));
        const { ccclass: M, property: g } = cc._decorator;
        let m = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.spine6001 = null,
                    this.spine6002 = null,
                    this.spine6003 = null,
                    this.spine6004 = null,
                    this.spine6005 = null,
                    this.spine6006 = null,
                    this.spine6007 = null,
                    this.spine6008 = null,
                    this.spine6009 = null,
                    this.spine6010 = null,
                    this.spine6011 = null,
                    this.spine6101 = null,
                    this.spine6102 = null,
                    this.spine6103 = null,
                    this.spine6104 = null,
                    this.spine6104_2 = null,
                    this.spine6105 = null,
                    this.spine6106 = null,
                    this.spine6107 = null,
                    this.spine6108 = null,
                    this.spine6109 = null,
                    this.spine6110 = null,
                    this.spine6111 = null,
                    this.spine6112 = null,
                    this.spine6113 = null,
                    this.spine6114 = null,
                    this.spine6115 = null,
                    this.spine6116 = null,
                    this.spine6117 = null,
                    this.skillTimer6001 = 0,
                    this.skillTimer6002 = 0,
                    this.skillTimer6004 = 0,
                    this.skillTimer6007 = 0,
                    this.skillTimer6101 = 0,
                    this.skillTimer6102 = 0,
                    this.skillTimer6103 = 0,
                    this.skillTimer6104 = 0,
                    this.skillTimer6107 = 0,
                    this.skillTimer6108 = 0,
                    this.skillTimer6111 = 0,
                    this.skillTimer6116 = 0,
                    this.skillTimer6117 = 0,
                    this.cityInCicle = null
            }
            onEnable() {
                this.scheduleOnce(() => {
                    this.city = this.node.getComponent(d.default),
                        this.city.spCity.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                        c.MEvent.on(c.EMsg.DoSkill6009, e => {
                            var t, i;
                            (null === (i = null === (t = this.city) || void 0 === t ? void 0 : t.city) || void 0 === i ? void 0 : i.serialnum) == e.city.serialnum && this.doSkill6009(e.targetLevel)
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6011, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6011()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6104, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6104()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6105, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6105()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6110, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6110()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6111, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6111()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6112, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6112()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6113, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6113()
                        }
                            , this),
                        c.MEvent.on(c.EMsg.DoSkill6115, e => {
                            this.city.city.serialnum == e.serialnum && this.doSkill6115()
                        }
                            , this)
                }
                ),
                    c.MEvent.on(c.EMsg.ShowCityInCircle, e => {
                        this.city.city.serialnum == e.serialnum && (this.cityInCicle.active = !0)
                    }
                        , this),
                    c.MEvent.on(c.EMsg.HideCityInCircle, e => {
                        this.city.city.serialnum == e.serialnum && (this.cityInCicle.active = !1)
                    }
                        , this)
            }
            onTouchStart() {
                if (r.MSkill.skill)
                    switch (r.MSkill.skill.id) {
                        case 6001:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6001();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6002:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6002();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6003:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6003();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6004:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6004();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6005:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6005();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6006:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6006();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6007:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6007();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6008:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6008();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6009:
                            if (r.MSkill.swapCity)
                                if (this.city.city.camp != s.ECityCamp.Default)
                                    if (r.MSkill.swapCity.camp == s.ECityCamp.One && this.city.city.camp == s.ECityCamp.One) {
                                        r.MSkill.swapCity = this.city.city;
                                        let e = a.MConfig.TableI18n.get(201003);
                                        "cn" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.cn
                                        }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.tc
                                        }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.pt
                                        }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.vi
                                        }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.in
                                        }) : p.MToast.showToast({
                                            title: e.en
                                        })
                                    } else if (r.MSkill.swapCity.camp != s.ECityCamp.One && this.city.city.camp != s.ECityCamp.One) {
                                        r.MSkill.swapCity = this.city.city;
                                        let e = a.MConfig.TableI18n.get(201004);
                                        "cn" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.cn
                                        }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.tc
                                        }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.pt
                                        }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.vi
                                        }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                            title: e.in
                                        }) : p.MToast.showToast({
                                            title: e.en
                                        })
                                    } else {
                                        let e = r.MSkill.swapCity.level
                                            , t = this.city.city.level;
                                        c.MEvent.emit(c.EMsg.DoSkill6009, {
                                            city: r.MSkill.swapCity,
                                            targetLevel: t
                                        }),
                                            c.MEvent.emit(c.EMsg.DoSkill6009, {
                                                city: this.city.city,
                                                targetLevel: e
                                            }),
                                            r.MSkill.swapCity = null,
                                            r.MSkill.useSkill()
                                    }
                                else {
                                    let e = a.MConfig.TableI18n.get(201005);
                                    "cn" == a.MConfig.Language ? p.MToast.showToast({
                                        title: e.cn
                                    }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                        title: e.tc
                                    }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                        title: e.pt
                                    }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                        title: e.vi
                                    }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                        title: e.in
                                    }) : p.MToast.showToast({
                                        title: e.en
                                    })
                                }
                            else if (this.city.city.camp != s.ECityCamp.Default)
                                r.MSkill.swapCity = this.city.city;
                            else {
                                let e = a.MConfig.TableI18n.get(201005);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6010:
                            if (this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6010();
                            else {
                                let e = a.MConfig.TableI18n.get(201006);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6011:
                            let e = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: e.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: e.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: e.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: e.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: e.in
                            }) : p.MToast.showToast({
                                title: e.en
                            });
                            break;
                        case 6101:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6101();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6102:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6102();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6103:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6103();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6104:
                            let t = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: t.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: t.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: t.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: t.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: t.in
                            }) : p.MToast.showToast({
                                title: t.en
                            });
                            break;
                        case 6105:
                            let i = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: i.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: i.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: i.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: i.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: i.in
                            }) : p.MToast.showToast({
                                title: i.en
                            });
                            break;
                        case 6106:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6106();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6107:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6107(this.city.city.type);
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6108:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6108();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6109:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6109();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6110:
                            let l = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: l.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: l.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: l.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: l.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: l.in
                            }) : p.MToast.showToast({
                                title: l.en
                            });
                            break;
                        case 6111:
                            let o = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: o.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: o.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: o.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: o.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: o.in
                            }) : p.MToast.showToast({
                                title: o.en
                            });
                            break;
                        case 6112:
                            let n = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: n.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: n.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: n.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: n.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: n.in
                            }) : p.MToast.showToast({
                                title: n.en
                            });
                            break;
                        case 6113:
                        case 6115:
                            let h = a.MConfig.TableI18n.get(201007);
                            "cn" == a.MConfig.Language ? p.MToast.showToast({
                                title: h.cn
                            }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                title: h.tc
                            }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                title: h.pt
                            }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                title: h.vi
                            }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                title: h.in
                            }) : p.MToast.showToast({
                                title: h.en
                            });
                            break;
                        case 6114:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6114();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6116:
                            if (this.city.city.camp != s.ECityCamp.Default && this.city.city.camp != s.ECityCamp.One)
                                this.doSkill6116();
                            else {
                                let e = a.MConfig.TableI18n.get(201001);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                            break;
                        case 6117:
                            if (this.city.city.camp == s.ECityCamp.One)
                                this.doSkill6117();
                            else {
                                let e = a.MConfig.TableI18n.get(201002);
                                "cn" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.cn
                                }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.tc
                                }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.pt
                                }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.vi
                                }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                                    title: e.in
                                }) : p.MToast.showToast({
                                    title: e.en
                                })
                            }
                    }
            }
            update(e) {
                this.skillTimer6001 > 0 && (this.skillTimer6001 -= e,
                    this.skillTimer6001 <= 0 && this.stopSkill6001(!0)),
                    this.skillTimer6002 > 0 && (this.skillTimer6002 -= e,
                        this.skillTimer6002 <= 0 && this.stopSkill6002()),
                    this.skillTimer6004 > 0 && (this.skillTimer6004 -= e,
                        this.skillTimer6004 <= 0 && this.stopSkill6004()),
                    this.skillTimer6007 > 0 && (this.skillTimer6007 -= e,
                        this.skillTimer6007 <= 0 && this.stopSkill6007()),
                    this.skillTimer6101 > 0 && (this.skillTimer6101 -= e,
                        this.skillTimer6101 <= 0 && this.stopSkill6101()),
                    this.skillTimer6102 > 0 && (this.skillTimer6102 -= e,
                        this.skillTimer6102 <= 0 && this.stopSkill6102()),
                    this.skillTimer6103 > 0 && (this.skillTimer6103 -= e,
                        this.skillTimer6103 <= 0 && this.stopSkill6103()),
                    this.skillTimer6104 > 0 && (this.skillTimer6104 -= e,
                        this.skillTimer6104 <= 0 && this.stopSkill6104(!0)),
                    this.skillTimer6107 > 0 && (this.skillTimer6107 -= e,
                        this.skillTimer6107 <= 0 && this.stopSkill6107()),
                    this.skillTimer6108 > 0 && (this.skillTimer6108 -= e,
                        this.skillTimer6108 <= 0 && this.stopSkill6108()),
                    this.skillTimer6111 > 0 && (this.skillTimer6111 -= e,
                        this.skillTimer6111 <= 0 && this.stopSkill6111()),
                    this.skillTimer6116 > 0 && (this.skillTimer6116 -= e,
                        this.skillTimer6116 <= 0 && this.stopSkill6116()),
                    this.skillTimer6117 > 0 && (this.skillTimer6117 -= e,
                        this.skillTimer6117 <= 0 && this.stopSkill6117())
            }
            doSkill6001() {
                var e;
                r.MSkill.useSkill();
                let t = r.MSkill.skillList.find(e => 6001 == e.id).param;
                if (this.skillTimer6001 > 0)
                    this.skillTimer6001 += t.A;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6001),
                        this.skillTimer6001 += t.A,
                        !this.spine6001) {
                        let e = new cc.Node("spine6001");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 0)),
                            this.spine6001 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6001.node.active = !0,
                        this.spine6001.premultipliedAlpha = !1;
                    const i = () => {
                        this.spine6001.setAnimation(0, "dongjie", !1)
                    }
                        ;
                    this.spine6001.skeletonData ? i() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6001,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6001.skeletonData = e,
                                i()
                        }
                    }),
                        null === (e = this.node.getComponent(h.default)) || void 0 === e || e.frozen()
                }
            }
            stopSkill6001(e) {
                var t;
                this.spine6001 && (e ? this.spine6001.setAnimation(0, "jiedong", !1) : this.skillTimer6001 > 0 && this.spine6001.setAnimation(0, "jiedong", !1),
                    this.skillTimer6001 = 0,
                    null === (t = this.node.getComponent(h.default)) || void 0 === t || t.thaw())
            }
            doSkill6002() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6002 == e.id).param;
                if (this.skillTimer6002 > 0)
                    this.skillTimer6002 += e.A;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6002),
                        this.skillTimer6002 += e.A,
                        !this.spine6002) {
                        let e = new cc.Node("spine6002");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, -10)),
                            this.spine6002 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6002.premultipliedAlpha = !1,
                        this.spine6002.node.active = !0;
                    const t = () => {
                        this.spine6002.setAnimation(0, "animation", !0)
                    }
                        ;
                    this.spine6002.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6002,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6002.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.invincible = !0
                }
            }
            stopSkill6002() {
                this.spine6002 && (this.spine6002.node.active = !1,
                    this.skillTimer6002 = 0,
                    this.city.invincible = !1)
            }
            doSkill6003() {
                o.MAudio.playEffect(o.EAudio.Skill6003),
                    r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6003 == e.id).param;
                if (!this.spine6003) {
                    let e = new cc.Node("spine6003");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6003 = e.addComponent(sp.Skeleton)
                }
                this.spine6003.node.active = !0,
                    this.spine6003.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6003.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6003.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6003,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6003.skeletonData = e,
                            t()
                    }
                }),
                    this.city.downLevel(e.A)
            }
            doSkill6004() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6004 == e.id).param;
                if (this.skillTimer6004 > 0)
                    this.skillTimer6004 += e.B;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6004),
                        this.skillTimer6004 += e.B,
                        !this.spine6004) {
                        let e = new cc.Node("spine6004");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, 30)),
                            this.spine6004 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6004.premultipliedAlpha = !1,
                        this.spine6004.node.active = !0;
                    const t = () => {
                        this.spine6004.setAnimation(0, "animation", !0)
                    }
                        ;
                    this.spine6004.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6004,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6004.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.outFloatSpeed = e.A,
                        this.city.updateOutSpeed()
                }
            }
            stopSkill6004() {
                this.spine6004 && (this.spine6004.node.active = !1,
                    this.skillTimer6004 = 0,
                    this.city.outFloatSpeed = 0,
                    this.city.updateOutSpeed())
            }
            doSkill6005() {
                o.MAudio.playEffect(o.EAudio.Skill6005),
                    r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6005 == e.id).param;
                if (!this.spine6005) {
                    let e = new cc.Node("spine6005");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6005 = e.addComponent(sp.Skeleton)
                }
                this.spine6005.node.active = !0,
                    this.spine6005.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6005.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6005.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6005,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6005.skeletonData = e,
                            t()
                    }
                }),
                    this.city.upLevel(e.A)
            }
            doSkill6006() {
                if (o.MAudio.playEffect(o.EAudio.Skill6006),
                    r.MSkill.useSkill(),
                    !this.spine6006) {
                    let e = new cc.Node("spine6006");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6006 = e.addComponent(sp.Skeleton)
                }
                this.spine6006.node.active = !0,
                    this.spine6006.premultipliedAlpha = !1;
                const e = () => {
                    this.spine6006.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6006.skeletonData ? e() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6006,
                    type: sp.SkeletonData,
                    onComplete: t => {
                        this.spine6006.skeletonData = t,
                            e()
                    }
                }),
                    this.city.ruin()
            }
            doSkill6007() {
                o.MAudio.playEffect(o.EAudio.Skill6007),
                    r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6007 == e.id).param;
                if (this.skillTimer6007 > 0)
                    this.skillTimer6007 += e.B;
                else {
                    if (this.skillTimer6007 += e.B,
                        !this.spine6007) {
                        let e = new cc.Node("spine6007");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 0)),
                            this.spine6007 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6007.premultipliedAlpha = !1,
                        this.spine6007.node.active = !0;
                    const t = () => {
                        this.spine6007.setAnimation(0, "animation", !0)
                    }
                        ;
                    this.spine6007.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6007,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6007.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.outFloatSpeed = -e.A,
                        this.city.updateOutSpeed()
                }
            }
            stopSkill6007() {
                this.spine6007 && (this.spine6007.node.active = !1,
                    this.skillTimer6007 = 0,
                    this.city.outFloatSpeed = 0,
                    this.city.updateOutSpeed())
            }
            doSkill6008() {
                if (r.MSkill.useSkill(),
                    !this.spine6008) {
                    let e = new cc.Node("spine6008");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6008 = e.addComponent(sp.Skeleton)
                }
                this.spine6008.node.active = !0,
                    this.spine6008.premultipliedAlpha = !1;
                const e = () => {
                    this.spine6008.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6008.skeletonData ? e() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6008,
                    type: sp.SkeletonData,
                    onComplete: t => {
                        this.spine6008.skeletonData = t,
                            e()
                    }
                }),
                    this.city.city.doubleType = !0
            }
            stopSkill6008() {
                this.spine6008 && (this.spine6008.node.active = !1,
                    this.city.city.doubleType = !1)
            }
            doSkill6009(e) {
                if (this.city.setLevel(e),
                    o.MAudio.playEffect(o.EAudio.Skill6009),
                    !this.spine6009) {
                    let e = new cc.Node("spine6009");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6009 = e.addComponent(sp.Skeleton)
                }
                this.spine6009.node.active = !0,
                    this.spine6009.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6009.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6009.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6009,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6009.skeletonData = e,
                            t()
                    }
                })
            }
            doSkill6010() {
                if (r.MSkill.useSkill(),
                    !this.spine6010) {
                    let e = new cc.Node("spine6010");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6010 = e.addComponent(sp.Skeleton)
                }
                this.spine6010.node.active = !0,
                    this.spine6010.premultipliedAlpha = !1;
                const e = () => {
                    this.spine6010.setAnimation(0, "animation", !1),
                        this.spine6010.setCompleteListener(() => {
                            this.spine6010.setCompleteListener(null),
                                this.city.becomeSelfCity()
                        }
                        )
                }
                    ;
                this.spine6010.skeletonData ? e() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6010,
                    type: sp.SkeletonData,
                    onComplete: t => {
                        this.spine6010.skeletonData = t,
                            e()
                    }
                })
            }
            doSkill6011() {
                let e = r.MSkill.skillList.find(e => 6011 == e.id).param;
                if (!this.spine6011) {
                    let e = new cc.Node("spine6011");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6011 = e.addComponent(sp.Skeleton)
                }
                this.spine6011.node.active = !0,
                    this.spine6011.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6011.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6011.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6011,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6011.skeletonData = e,
                            t()
                    }
                }),
                    this.city.downLevel(e.B)
            }
            doSkill6101() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6101 == e.id).param;
                if (this.skillTimer6101 > 0)
                    this.skillTimer6101 += e.B;
                else {
                    if (this.skillTimer6101 += e.B,
                        !this.spine6101) {
                        let e = new cc.Node("spine6101");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, 60)),
                            this.spine6101 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6101.premultipliedAlpha = !1,
                        this.spine6101.node.active = !0;
                    const t = () => {
                        this.spine6101.setAnimation(0, "chuxian", !1),
                            this.spine6101.setCompleteListener(() => {
                                this.spine6101.setCompleteListener(null),
                                    this.spine6101.setAnimation(0, "xunhuan", !0)
                            }
                            );
                        let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6101 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, e)
                    }
                        ;
                    this.spine6101.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6101,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6101.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.outFloatSpeed = e.A,
                        this.city.updateOutSpeed()
                }
            }
            stopSkill6101() {
                this.spine6101 && (this.spine6101.node.active = !1,
                    this.skillTimer6101 = 0,
                    this.city.outFloatSpeed = 0,
                    this.city.updateOutSpeed())
            }
            doSkill6102() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6102 == e.id).param;
                if (this.skillTimer6102 > 0)
                    this.skillTimer6102 += e.B;
                else {
                    if (this.skillTimer6102 += e.B,
                        !this.spine6102) {
                        let e = new cc.Node("spine6102");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 30)),
                            this.spine6102 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6102.premultipliedAlpha = !1,
                        this.spine6102.node.active = !0;
                    const t = () => {
                        o.MAudio.playEffect(o.EAudio.Skill6102, !0),
                            this.spine6102.setAnimation(0, "chuxian", !1),
                            this.spine6102.setCompleteListener(() => {
                                this.spine6102.setCompleteListener(null),
                                    this.spine6102.setAnimation(0, "xunhuan", !0)
                            }
                            );
                        let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6102 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, e)
                    }
                        ;
                    this.spine6102.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6102,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6102.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.moveFloatSpeed = -e.A
                }
            }
            stopSkill6102() {
                this.spine6102 && (this.spine6102.node.active = !1,
                    this.skillTimer6102 = 0,
                    this.city.moveFloatSpeed = 0,
                    o.MAudio.stopEffect(o.EAudio.Skill6102))
            }
            doSkill6103() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6103 == e.id).param;
                if (this.skillTimer6103 > 0)
                    this.skillTimer6103 += e.A;
                else {
                    if (this.skillTimer6103 += e.A,
                        !this.spine6103) {
                        let e = new cc.Node("spine6103");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 30)),
                            this.spine6103 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6103.premultipliedAlpha = !1,
                        this.spine6103.node.active = !0;
                    const t = () => {
                        o.MAudio.playEffect(o.EAudio.Skill6103, !0),
                            this.spine6103.setAnimation(0, "animation", !0);
                        let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6103 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, e)
                    }
                        ;
                    this.spine6103.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6103,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6103.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.soldierFloatHarm = -50
                }
            }
            stopSkill6103() {
                this.spine6103 && (this.spine6103.node.active = !1,
                    this.skillTimer6103 = 0,
                    this.city.soldierFloatHarm = 0,
                    o.MAudio.stopEffect(o.EAudio.Skill6103))
            }
            doSkill6104() {
                var e;
                let t = r.MSkill.skillList.find(e => 6104 == e.id).param;
                if (this.skillTimer6104 > 0)
                    this.skillTimer6104 += t.B;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6104),
                        this.skillTimer6104 += t.B,
                        this.spine6104)
                        this.spine6104.setCompleteListener(null);
                    else {
                        let e = new cc.Node("spine6104");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 0)),
                            this.spine6104 = e.addComponent(sp.Skeleton)
                    }
                    if (this.spine6104_2)
                        this.spine6104_2.setCompleteListener(null);
                    else {
                        let e = new cc.Node("spine6104_2");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 0)),
                            this.spine6104_2 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6104.node.active = !0,
                        this.spine6104.premultipliedAlpha = !1,
                        this.spine6104_2.node.active = !1,
                        this.spine6104_2.premultipliedAlpha = !1;
                    const i = () => {
                        this.spine6104.setAnimation(0, "animation", !1),
                            this.spine6104.setCompleteListener(() => {
                                this.spine6104.setCompleteListener(null),
                                    this.spine6104_2.skeletonData ? (this.spine6104_2.node.active = !0,
                                        this.spine6104_2.setAnimation(0, "dongjie", !1)) : n.MBundle.load({
                                            bundle: n.EBundle.Battle,
                                            path: u.Spine6104_2,
                                            type: sp.SkeletonData,
                                            onComplete: e => {
                                                this.spine6104_2.skeletonData = e,
                                                    this.spine6104_2.node.active = !0,
                                                    this.spine6104_2.setAnimation(0, "dongjie", !1)
                                            }
                                        })
                            }
                            )
                    }
                        ;
                    this.spine6104.skeletonData ? i() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6104,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6104.skeletonData = e,
                                i()
                        }
                    }),
                        null === (e = this.node.getComponent(h.default)) || void 0 === e || e.frozen()
                }
            }
            stopSkill6104(e) {
                var t;
                this.spine6104 && this.spine6104_2 && (this.spine6104.setCompleteListener(null),
                    this.spine6104_2.setCompleteListener(null),
                    e ? (this.spine6104_2.setAnimation(0, "jiedong", !1),
                        this.spine6104_2.setCompleteListener(() => {
                            this.spine6104_2.setCompleteListener(null),
                                this.spine6104_2.node.active = !1
                        }
                        )) : this.skillTimer6104 > 0 && (this.spine6104_2.setAnimation(0, "jiedong", !1),
                            this.spine6104_2.setCompleteListener(() => {
                                this.spine6104_2.setCompleteListener(null),
                                    this.spine6104_2.node.active = !1
                            }
                            )),
                    this.skillTimer6104 = 0,
                    null === (t = this.node.getComponent(h.default)) || void 0 === t || t.thaw())
            }
            doSkill6105() {
                o.MAudio.playEffect(o.EAudio.Skill6105);
                let e = r.MSkill.skillList.find(e => 6105 == e.id).param;
                if (!this.spine6105) {
                    let e = new cc.Node("spine6105");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6105 = e.addComponent(sp.Skeleton)
                }
                this.spine6105.node.active = !0,
                    this.spine6105.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6105.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6105.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6105,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6105.skeletonData = e,
                            t()
                    }
                }),
                    this.city.downLevelByPercent(e.B)
            }
            doSkill6106() {
                o.MAudio.playEffect(o.EAudio.Skill6106),
                    r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6106 == e.id).param;
                if (!this.spine6106) {
                    let e = new cc.Node("spine6106");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6106 = e.addComponent(sp.Skeleton)
                }
                this.spine6106.node.active = !0,
                    this.spine6106.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6106.setAnimation(0, "animation", !1);
                    let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6106 == e.skillId && 1 == e.heroLevel);
                    c.MEvent.emit(c.EMsg.HeroShout, e)
                }
                    ;
                this.spine6106.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6106,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6106.skeletonData = e,
                            t()
                    }
                }),
                    this.city.upLevel(e.A)
            }
            doSkill6107(e) {
                if (e == s.ECityType.Normal) {
                    let e = a.MConfig.TableI18n.get(201008);
                    return void ("cn" == a.MConfig.Language ? p.MToast.showToast({
                        title: e.cn
                    }) : "tc" == a.MConfig.Language ? p.MToast.showToast({
                        title: e.tc
                    }) : "pt" == a.MConfig.Language ? p.MToast.showToast({
                        title: e.pt
                    }) : "vi" == a.MConfig.Language ? p.MToast.showToast({
                        title: e.vi
                    }) : "id" == a.MConfig.Language ? p.MToast.showToast({
                        title: e.in
                    }) : p.MToast.showToast({
                        title: e.en
                    }))
                }
                r.MSkill.useSkill();
                let t = r.MSkill.skillList.find(e => 6107 == e.id).param;
                if (this.skillTimer6107 > 0)
                    this.skillTimer6107 += t.A;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6107),
                        this.skillTimer6107 += t.A,
                        !this.spine6107) {
                        let e = new cc.Node("spine6107");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, 60)),
                            this.spine6107 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6107.premultipliedAlpha = !1,
                        this.spine6107.node.active = !0;
                    const i = () => {
                        e == s.ECityType.Attack && this.spine6107.setAnimation(0, "gong", !1),
                            e == s.ECityType.Defense && this.spine6107.setAnimation(0, "fang", !1);
                        let t = [...a.MConfig.TableHeroGrow.values()].find(e => 6107 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, t)
                    }
                        ;
                    this.spine6107.skeletonData ? i() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6107,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6107.skeletonData = e,
                                i()
                        }
                    }),
                        this.city.forceCityType()
                }
            }
            stopSkill6107() {
                this.spine6107 && (this.spine6107.node.active = !1,
                    this.skillTimer6107 = 0,
                    this.city.recoveryCityType())
            }
            doSkill6108() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6108 == e.id).param;
                if (this.skillTimer6108 > 0)
                    this.skillTimer6108 += e.B;
                else {
                    if (this.skillTimer6108 += e.B,
                        !this.spine6108) {
                        let e = new cc.Node("spine6108");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(10, 30)),
                            this.spine6108 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6108.premultipliedAlpha = !1,
                        this.spine6108.node.active = !0;
                    const t = () => {
                        this.spine6108.setAnimation(0, "chuxian", !1),
                            this.spine6108.setCompleteListener(() => {
                                this.spine6108.setCompleteListener(null),
                                    this.spine6108.setAnimation(0, "xunhuan", !0)
                            }
                            );
                        let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6108 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, e)
                    }
                        ;
                    this.spine6108.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6108,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6108.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.outFloatSpeed = -e.A,
                        this.city.updateOutSpeed()
                }
            }
            stopSkill6108() {
                this.spine6108 && (this.spine6108.node.active = !1,
                    this.skillTimer6108 = 0,
                    this.city.outFloatSpeed = 0,
                    this.city.updateOutSpeed())
            }
            doSkill6109() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6109 == e.id).param;
                if (!this.spine6109) {
                    let e = new cc.Node("spine6109");
                    e.setParent(this.node),
                        e.setPosition(cc.v2(0, 50)),
                        this.spine6109 = e.addComponent(sp.Skeleton)
                }
                this.spine6109.node.active = !0,
                    this.spine6109.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6109.setAnimation(0, "animation", !1);
                    let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6109 == e.skillId && 1 == e.heroLevel);
                    c.MEvent.emit(c.EMsg.HeroShout, e)
                }
                    ;
                this.spine6109.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6109,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6109.skeletonData = e,
                            t()
                    }
                }),
                    this.city.downLevel(e.A)
            }
            doSkill6110() {
                if (!this.spine6110) {
                    let e = new cc.Node("spine6110");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6110 = e.addComponent(sp.Skeleton)
                }
                this.spine6110.node.active = !0,
                    this.spine6110.premultipliedAlpha = !1;
                const e = () => {
                    this.spine6110.setAnimation(0, "animation", !1),
                        o.MAudio.playEffect(o.EAudio.Skill6110)
                }
                    ;
                this.spine6110.skeletonData ? e() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6110,
                    type: sp.SkeletonData,
                    onComplete: t => {
                        this.spine6110.skeletonData = t,
                            e()
                    }
                }),
                    this.city.ruin()
            }
            doSkill6111() {
                let e = r.MSkill.skillList.find(e => 6111 == e.id).param;
                if (this.skillTimer6111 > 0)
                    this.skillTimer6111 += e.B;
                else {
                    if (o.MAudio.playEffect(o.EAudio.Skill6111),
                        this.skillTimer6111 += e.B,
                        !this.spine6111) {
                        let e = new cc.Node("spine6111");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, 0)),
                            this.spine6111 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6111.premultipliedAlpha = !1,
                        this.spine6111.node.active = !0;
                    const t = () => {
                        this.spine6111.setAnimation(0, "animation", !0)
                    }
                        ;
                    this.spine6111.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6111,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6111.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.invincible = !0
                }
            }
            stopSkill6111() {
                this.spine6111 && (this.spine6111.node.active = !1,
                    this.skillTimer6111 = 0,
                    this.city.invincible = !1)
            }
            doSkill6112() {
                var e;
                if (o.MAudio.playEffect(o.EAudio.Skill6112),
                    !this.spine6112) {
                    let e = new cc.Node("spine6112");
                    e.setParent(this.node),
                        e.setPosition(cc.v2(0, -10)),
                        e.scale = 2,
                        this.spine6112 = e.addComponent(sp.Skeleton)
                }
                this.spine6112.node.active = !0,
                    this.spine6112.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6112.setAnimation(0, "animation", !0)
                }
                    ;
                this.spine6112.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6112,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6112.skeletonData = e,
                            t()
                    }
                }),
                    null === (e = this.node.getComponent(h.default)) || void 0 === e || e.pollute()
            }
            stopSkill6112() {
                var e;
                this.spine6112 && (this.spine6112.node.active = !1,
                    null === (e = this.node.getComponent(h.default)) || void 0 === e || e.clean())
            }
            doSkill6113() {
                o.MAudio.playEffect(o.EAudio.Skill6113);
                let e = r.MSkill.skillList.find(e => 6113 == e.id).param;
                if (!this.spine6113) {
                    let e = new cc.Node("spine6113");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6113 = e.addComponent(sp.Skeleton)
                }
                this.spine6113.node.active = !0,
                    this.spine6113.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6113.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6113.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6113,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6113.skeletonData = e,
                            t()
                    }
                }),
                    this.city.upLevel(e.B)
            }
            doSkill6114() {
                r.MSkill.useSkill(),
                    o.MAudio.playEffect(o.EAudio.Skill6114);
                let e = r.MSkill.skillList.find(e => 6114 == e.id).param;
                if (!this.spine6114) {
                    let e = new cc.Node("spine6114");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6114 = e.addComponent(sp.Skeleton)
                }
                this.spine6114.node.active = !0,
                    this.spine6114.premultipliedAlpha = !1;
                const t = () => {
                    this.spine6114.setAnimation(0, "animation", !1),
                        this.city.skill6114FloatSpeed += e.B,
                        this.city.downLevel(e.B);
                    let t = [...a.MConfig.TableHeroGrow.values()].find(e => 6114 == e.skillId && 1 == e.heroLevel);
                    c.MEvent.emit(c.EMsg.HeroShout, t)
                }
                    ;
                this.spine6114.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6114,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6114.skeletonData = e,
                            t()
                    }
                })
            }
            stopSkill6114() {
                this.city.skill6114FloatSpeed = 0
            }
            doSkill6115() {
                if (o.MAudio.playEffect(o.EAudio.Skill6115),
                    !this.spine6115) {
                    let e = new cc.Node("spine6115");
                    e.setParent(this.node),
                        e.setPosition(cc.v2()),
                        this.spine6115 = e.addComponent(sp.Skeleton)
                }
                this.spine6115.node.active = !0,
                    this.spine6115.premultipliedAlpha = !1;
                const e = () => {
                    this.spine6115.setAnimation(0, "animation", !1)
                }
                    ;
                this.spine6115.skeletonData ? e() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6115,
                    type: sp.SkeletonData,
                    onComplete: t => {
                        this.spine6115.skeletonData = t,
                            e()
                    }
                }),
                    this.city.levelDouble()
            }
            doSkill6116() {
                r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6116 == e.id).param;
                if (this.skillTimer6116 > 0)
                    this.skillTimer6116 += e.A;
                else {
                    if (this.skillTimer6116 += e.A,
                        !this.spine6116) {
                        let e = new cc.Node("spine6116");
                        e.setParent(this.node),
                            e.setPosition(cc.v2(0, 152)),
                            this.spine6116 = e.addComponent(sp.Skeleton)
                    }
                    this.spine6116.premultipliedAlpha = !1,
                        this.spine6116.node.active = !0;
                    const t = () => {
                        this.spine6116.setAnimation(0, "pao", !1),
                            this.spine6116.setEventListener((e, t) => {
                                "baozha" == t.data.name && o.MAudio.playEffect(o.EAudio.Skill6116)
                            }
                            ),
                            this.spine6116.setCompleteListener(() => {
                                this.spine6116.setCompleteListener(null),
                                    this.spine6116.setAnimation(0, "xunhuan", !0)
                            }
                            );
                        let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6116 == e.skillId && 1 == e.heroLevel);
                        c.MEvent.emit(c.EMsg.HeroShout, e)
                    }
                        ;
                    this.spine6116.skeletonData ? t() : n.MBundle.load({
                        bundle: n.EBundle.Battle,
                        path: u.Spine6116,
                        type: sp.SkeletonData,
                        onComplete: e => {
                            this.spine6116.skeletonData = e,
                                t()
                        }
                    }),
                        this.city.noSupply = !0,
                        this.city.checkAutoUplevel()
                }
            }
            stopSkill6116() {
                this.spine6116 && (this.spine6116.node.active = !1,
                    this.skillTimer6116 = 0),
                    this.city.noSupply = !1,
                    this.city.checkAutoUplevel()
            }
            doSkill6117() {
                o.MAudio.playEffect(o.EAudio.Skill6117),
                    r.MSkill.useSkill();
                let e = r.MSkill.skillList.find(e => 6117 == e.id).param;
                if (this.skillTimer6117 += e.B,
                    !this.spine6117) {
                    let e = new cc.Node("spine6117");
                    e.setParent(this.node),
                        e.setPosition(cc.v2(0, 150)),
                        this.spine6117 = e.addComponent(sp.Skeleton)
                }
                this.spine6117.premultipliedAlpha = !0,
                    this.spine6117.node.active = !0;
                const t = () => {
                    this.spine6117.setAnimation(0, "animation", !1);
                    let e = [...a.MConfig.TableHeroGrow.values()].find(e => 6117 == e.skillId && 1 == e.heroLevel);
                    c.MEvent.emit(c.EMsg.HeroShout, e)
                }
                    ;
                this.spine6117.skeletonData ? t() : n.MBundle.load({
                    bundle: n.EBundle.Battle,
                    path: u.Spine6117,
                    type: sp.SkeletonData,
                    onComplete: e => {
                        this.spine6117.skeletonData = e,
                            t()
                    }
                }),
                    this.city.levelDouble(),
                    this.city.skill6117 = e.A,
                    this.city.updateOutSpeed()
            }
            stopSkill6117() {
                this.spine6117 && (this.spine6117.node.active = !1),
                    this.skillTimer6117 = 0,
                    this.city.skill6117 = 0,
                    this.city.updateOutSpeed()
            }
            clear() {
                this.spine6001 && (this.spine6001.node.active = !1),
                    this.spine6002 && (this.spine6002.node.active = !1),
                    this.spine6003 && (this.spine6003.node.active = !1),
                    this.spine6004 && (this.spine6004.node.active = !1),
                    this.spine6005 && (this.spine6005.node.active = !1),
                    this.spine6006 && (this.spine6006.node.active = !1),
                    this.spine6007 && (this.spine6007.node.active = !1),
                    this.spine6008 && (this.spine6008.node.active = !1),
                    this.spine6009 && (this.spine6009.node.active = !1),
                    this.spine6010 && (this.spine6010.node.active = !1),
                    this.spine6011 && (this.spine6011.node.active = !1),
                    this.spine6101 && (this.spine6101.node.active = !1),
                    this.spine6102 && (this.spine6102.node.active = !1),
                    this.spine6103 && (this.spine6103.node.active = !1),
                    this.spine6104 && (this.spine6104.node.active = !1),
                    this.spine6104_2 && (this.spine6104_2.node.active = !1),
                    this.spine6105 && (this.spine6105.node.active = !1),
                    this.spine6106 && (this.spine6106.node.active = !1),
                    this.spine6108 && (this.spine6108.node.active = !1),
                    this.spine6109 && (this.spine6109.node.active = !1),
                    this.spine6110 && (this.spine6110.node.active = !1),
                    this.spine6111 && (this.spine6111.node.active = !1),
                    this.spine6112 && (this.spine6112.node.active = !1),
                    this.spine6113 && (this.spine6113.node.active = !1),
                    this.spine6114 && (this.spine6114.node.active = !1),
                    this.spine6115 && (this.spine6115.node.active = !1),
                    this.spine6116 && (this.spine6116.node.active = !1),
                    this.spine6117 && (this.spine6117.node.active = !1),
                    this.stopSkill6008(),
                    this.stopSkill6112(),
                    this.skillTimer6001 = 0,
                    this.skillTimer6002 = 0,
                    this.skillTimer6004 = 0,
                    this.skillTimer6007 = 0,
                    this.skillTimer6101 = 0,
                    this.skillTimer6102 = 0,
                    this.skillTimer6103 = 0,
                    this.skillTimer6104 = 0,
                    this.skillTimer6107 = 0,
                    this.skillTimer6108 = 0,
                    this.skillTimer6111 = 0,
                    this.skillTimer6116 = 0,
                    this.skillTimer6117 = 0
            }
            onDisable() {
                this.clear(),
                    this.city.spCity.node.targetOff(this),
                    this.node.targetOff(this),
                    c.MEvent.targetOff(this),
                    this.cityInCicle.active = !1
            }
        }
            ;
        l([g(cc.Node)], m.prototype, "cityInCicle", void 0),
            m = l([M], m),
            i.default = m,
            cc._RF.pop()
    }
        , {
        "../../../Script/Enum": void 0,
        "../../../Script/Manager/MAudio": void 0,
        "../../../Script/Manager/MBundle": void 0,
        "../../../Script/Manager/MConfig": void 0,
        "../../../Script/Manager/MEvent": void 0,
        "../../../Script/Manager/MSkill": void 0,
        "../../../Script/Manager/MToast": void 0,
        "./AI": "AI",
        "./City": "City"
    }],
    Shell: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "59eadTI9nVDKpGoXxIh5zv2", "Shell");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../Script/Manager/MPool")
            , { ccclass: o, property: n } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.duration = .6,
                    this.vx = 0,
                    this.vy = 0,
                    this.startPos = cc.Vec2.ZERO,
                    this.timer = 0,
                    this.launched = !1,
                    this.catched = !1,
                    this.callback = null
            }
            shoot(e, t, i) {
                this.vx = (t.x - e.x) / this.duration,
                    this.vy = (t.y - e.y - -500 * this.duration * this.duration) / this.duration,
                    this.startPos = e,
                    this.launched = !0,
                    this.catched = !1,
                    this.callback = i
            }
            update(e) {
                var t;
                this.launched && !this.catched && (this.timer < this.duration ? (this.timer += e,
                    this.node.x = this.startPos.x + this.vx * this.timer,
                    this.node.y = this.startPos.y + this.vy * this.timer + -500 * Math.pow(this.timer, 2)) : (this.catched = !0,
                        null === (t = this.callback) || void 0 === t || t.call(this),
                        s.MPool.recovery(this.node)))
            }
            onDisable() {
                this.vx = 0,
                    this.vy = 0,
                    this.startPos = cc.Vec2.ZERO,
                    this.timer = 0,
                    this.launched = !1,
                    this.catched = !1,
                    this.callback = null
            }
        }
            ;
        a = l([o], a),
            i.default = a,
            cc._RF.pop()
    }
        , {
        "../../Script/Manager/MPool": void 0
    }],
    SoldierDieFrame: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b57692J9j9C5aC1Dw3aoA4y", "SoldierDieFrame");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../Common/src/NormalFrame")
            , o = e("../../Script/Manager/MBundle")
            , { ccclass: n, property: a } = cc._decorator;
        let c = class extends s.default {
            constructor() {
                super(...arguments),
                    this.divide = "_",
                    this.bundle = o.EBundle.Battle,
                    this.loop = !1,
                    this.path = "",
                    this.interval = 60
            }
            init(e) {
                this.path = e,
                    this.loadSpfs()
            }
        }
            ;
        l([a], c.prototype, "interval", void 0),
            c = l([n], c),
            i.default = c,
            cc._RF.pop()
    }
        , {
        "../../Common/src/NormalFrame": void 0,
        "../../Script/Manager/MBundle": void 0
    }],
    SoldierFrame: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "f9e58+pJz9G/b6fzUA18aR5", "SoldierFrame");
        var l = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const s = e("../../Common/src/NormalFrame")
            , o = e("../../Script/Manager/MBundle")
            , { ccclass: n, property: a } = cc._decorator;
        let c = class extends s.default {
            constructor() {
                super(...arguments),
                    this.divide = "_",
                    this.bundle = o.EBundle.Battle,
                    this.loop = !0,
                    this.path = "",
                    this.interval = 60
            }
            init(e) {
                this.path = e,
                    this.loadSpfs()
            }
        }
            ;
        l([a], c.prototype, "interval", void 0),
            c = l([n], c),
            i.default = c,
            cc._RF.pop()
    }
        , {
        "../../Common/src/NormalFrame": void 0,
        "../../Script/Manager/MBundle": void 0
    }],
    Soldier: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c93f982/k1NIbvvzki5+GUy", "Soldier");
        var l, s = this && this.__decorate || function (e, t, i, l) {
            var s, o = arguments.length, n = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, i) : l;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                n = Reflect.decorate(e, t, i, l);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
            return o > 3 && n && Object.defineProperty(t, i, n),
                n
        }
            ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const o = e("../../../Script/Enum")
            , n = e("../../../Script/Manager/MBundle")
            , a = e("../../../Script/Manager/MEvent")
            , c = e("../../../Script/Manager/MPool")
            , r = e("../BattleData")
            , p = e("../Move")
            , h = e("../SoldierDieFrame")
            , d = e("../SoldierFrame")
            , { ccclass: u, property: M } = cc._decorator;
        let g = l = class extends cc.Component {
            constructor() {
                super(...arguments),
                    this.skin = null,
                    this.move = null,
                    this.startCity = null,
                    this.endCity = null,
                    this.serialnum = -1,
                    this.camp = o.ECityCamp.Default,
                    this.hp = -1,
                    this.attack = 0,
                    this.orientation = "just"
            }
            onEnable() {
                a.MEvent.on(a.EMsg.GameOver, () => {
                    this.clear(),
                        c.MPool.recovery(this.node)
                }
                    , this),
                    a.MEvent.on(a.EMsg.Soldier, e => {
                        this.serialnum != e.serialnum && this.startCity.serialnum == e.endCity.serialnum && this.endCity.serialnum == e.startCity.serialnum && this.camp != e.camp && e.node.getPosition().sub(this.node.getPosition()).mag() <= 20 && (this.injured(e.attack),
                            e.node.getComponent(l).injured(this.attack))
                    }
                        , this)
            }
            init(e, t, i, l) {
                e && t && i ? (r.BattleData.addSoldier(this),
                    e.type == o.ECityType.Normal ? (this.hp = 1,
                        this.attack = 1) : e.type == o.ECityType.Attack ? (this.hp = 1,
                            this.attack = 2) : e.type == o.ECityType.Defense && (this.hp = 2,
                                this.attack = 1),
                    e.doubleType && (this.hp = 2,
                        this.attack = 2),
                    t.pos.x < i.pos.x ? this.node.scaleX = .6 : this.node.scaleX = -.6,
                    t.pos.y < i.pos.y ? this.orientation = "back" : this.orientation = "just",
                    this.loadSkin(e),
                    cc.tween(this.node).set({
                        scale: 0
                    }).to(.3, {
                        scaleX: this.node.scaleX,
                        scaleY: .6
                    }).start(),
                    this.serialnum = r.BattleData.genSerialnum(),
                    this.camp = e.camp,
                    this.startCity = t,
                    this.endCity = i,
                    this.getComponent(p.default).init([t.pos, i.pos], l, () => {
                        let t = {
                            sourceCity: e,
                            targetSerialnum: i.serialnum
                        };
                        a.MEvent.emit(a.EMsg.EnterCity, t),
                            r.BattleData.deleteSoldier(this),
                            c.MPool.recovery(this.node)
                    }
                    )) : c.MPool.recovery(this.node)
            }
            loadSkin(e) {
                let t = `res/texture/autoatlas/cAndS/soldier/camp-${e.camp}/type-${e.type}/${this.orientation}`;
                this.node.getComponent(d.default).init(t)
            }
            update() {
                if (this.hp > 0) {
                    this.node.zIndex = -this.node.y;
                    let e = {
                        serialnum: this.serialnum,
                        camp: this.camp,
                        startCity: this.startCity,
                        endCity: this.endCity,
                        attack: this.attack,
                        node: this.node
                    };
                    a.MEvent.emit(a.EMsg.Soldier, e)
                }
            }
            injured(e) {
                if (this.hp -= e,
                    this.hp <= 0) {
                    r.BattleData.deleteSoldier(this);
                    let e = this.node.parent
                        , t = this.node.getPosition();
                    c.MPool.recovery(this.node),
                        this.scheduleOnce(() => {
                            c.MPool.load({
                                bundle: n.EBundle.Battle,
                                path: "res/prefab/soldier/die",
                                type: cc.Prefab,
                                onComplete: i => {
                                    i.setParent(e),
                                        i.setPosition(cc.v2(t.x + 10 * Math.random() - 8, t.y + 10 * Math.random() - 8)),
                                        i.getComponent(h.default).init("res/texture/autoatlas/cAndS/soldier/die")
                                }
                            })
                        }
                            , .3 * Math.random())
                }
            }
            clear() {
                this.unscheduleAllCallbacks(),
                    a.MEvent.targetOff(this),
                    cc.Tween.stopAllByTarget(this.node),
                    this.skin.spriteFrame = null
            }
            onDisable() {
                this.clear()
            }
        }
            ;
        s([M(cc.Sprite)], g.prototype, "skin", void 0),
            g = l = s([u], g),
            i.default = g,
            cc._RF.pop()
    }
        , {
        "../../../Script/Enum": void 0,
        "../../../Script/Manager/MBundle": void 0,
        "../../../Script/Manager/MEvent": void 0,
        "../../../Script/Manager/MPool": void 0,
        "../BattleData": "BattleData",
        "../Move": "Move",
        "../SoldierDieFrame": "SoldierDieFrame",
        "../SoldierFrame": "SoldierFrame"
    }]
}, {}, ["Battle", "BattleData", "Move", "Shell", "SoldierDieFrame", "SoldierFrame", "AI", "Block", "City", "Decorate", "ReceiveSkill", "Soldier", "Gamut", "CityAttack", "CityDefense", "CityNormal"]);
