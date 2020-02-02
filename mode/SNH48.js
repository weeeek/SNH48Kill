'use strict';
game.import('mode', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48',
        startBefore: function () {
            var playback = localStorage.getItem(lib.configprefix + 'playback');
            for (var i in lib.characterPack.mode_guozhan) {
                if (!get.config('onlyguozhan') && !playback) {
                    if (lib.character[i.slice(3)]) continue;
                }
                lib.character[i] = lib.characterPack.mode_guozhan[i];
                if (!lib.character[i][4]) {
                    lib.character[i][4] = [];
                }
                if (!lib.translate[i]) {
                    lib.translate[i] = lib.translate[i.slice(3)];
                }
            }
            for (var i in lib.character) {
                if (lib.character[i][1] == 'shen') {
                    if (lib.character[i][4] && lib.group.contains(lib.character[i][4][0])) {
                        lib.character[i][1] = lib.character[i][4][0];
                    } else {
                        lib.character[i][1] = 'qun';
                    }
                }
            }
            lib.card.sha.complexTarget = true;
        },
        onreinit: function () {
            var pack = lib.characterPack.mode_guozhan;
            for (var i in pack) {
                if (!lib.configOL.onlyguozhan) {
                    if (lib.character[i.slice(3)]) continue;
                }
                lib.character[i] = pack[i];
                if (!lib.character[i][4]) {
                    lib.character[i][4] = [];
                }
                if (!lib.translate[i]) {
                    lib.translate[i] = lib.translate[i.slice(3)];
                }
            }
        },
        start: function () {
            "step 0"
            var playback = localStorage.getItem(lib.configprefix + 'playback');
            if (playback) {
                ui.create.me();
                ui.arena.style.display = 'none';
                ui.system.style.display = 'none';
                _status.playback = playback;
                localStorage.removeItem(lib.configprefix + 'playback');
                var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
                store.get(parseInt(playback)).onsuccess = function (e) {
                    if (e.target.result) {
                        game.playVideoContent(e.target.result.video);
                    } else {
                        alert('播放失败：找不到录像');
                        game.reload();
                    }
                }
                event.finish();
            } else if (_status.connectMode) {
                game.waitForPlayer();
            } else {
                if (get.config('guozhanpile')) {
                    lib.card.list = lib.guozhanPile.slice(0);
                    game.fixedPile = true;
                }
                game.prepareArena();
                // game.delay();
                game.showChangeLog();
            }
            if (!_status.connectMode) {
                _status.mode = get.config('guozhan_mode');
                if (_status.brawl && _status.brawl.submode) {
                    _status.mode = _status.brawl.submode;
                }
            }
            "step 1"
            if (_status.connectMode) {
                if (lib.configOL.guozhanpile) {
                    lib.card.list = lib.guozhanPile.slice(0);
                    game.fixedPile = true;
                }
                game.broadcastAll(function (pack) {
                    for (var i = 0; i < game.players.length; i++) {
                        game.players[i].node.name.hide();
                        game.players[i].node.name2.hide();
                    }
                    lib.characterPack.mode_guozhan = pack;
                    for (var i in pack) {
                        if (!lib.configOL.onlyguozhan) {
                            if (lib.character[i.slice(3)]) continue;
                        }
                        lib.character[i] = pack[i];
                        if (!lib.character[i][4]) {
                            lib.character[i][4] = [];
                        }
                        if (!lib.translate[i]) {
                            lib.translate[i] = lib.translate[i.slice(3)];
                        }
                    }
                }, lib.characterPack.mode_guozhan);
                game.randomMapOL();
            } else {
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].node.name.hide();
                    game.players[i].node.name2.hide();
                    game.players[i].getId();
                }
                if (_status.brawl && _status.brawl.chooseCharacterBefore) {
                    _status.brawl.chooseCharacterBefore();
                }
                game.chooseCharacter();
            }
            "step 2"
            game.broadcast(function (cardtag) {
                _status.cardtag = cardtag;
            }, _status.cardtag);
            if (ui.coin) {
                _status.coinCoeff = get.coinCoeff([game.me.name1, game.me.name2]);
            }
            var player;
            if (_status.cheat_seat) {
                var seat = _status.cheat_seat.link;
                if (seat == 0) {
                    player = game.me;
                } else {
                    player = game.players[game.players.length - seat];
                }
                if (!player) player = game.me;
                delete _status.cheat_seat;
            } else {
                player = game.players[Math.floor(Math.random() * game.players.length)];
            }
            event.playerx = player;
            event.trigger('gameStart');

            "step 3"
            game.gameDraw(event.playerx);
            game.broadcastAll(function (player) {
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].name = 'unknown' + get.distance(player, game.players[i], 'absolute');
                    game.players[i].node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[game.players[i].name]), game.players[i]);
                    // if(game.players[i]==game.me){
                    // 	lib.translate[game.players[i].name]+='（你）';
                    // }
                }
            }, event.playerx);

            var players = get.players(lib.sort.position);
            var info = [];
            for (var i = 0; i < players.length; i++) {
                info.push({
                    name: game.players[i].name,
                    translate: lib.translate[game.players[i].name],
                    name1: players[i].name1,
                    name2: players[i].name2,
                });
            }
            _status.videoInited = true,
                game.addVideo('init', null, info);
            if (_status.mode == 'mingjiang') {
                game.showIdentity(true);
            } else {
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].ai.shown = 0;
                }
            }
            game.phaseLoop(event.playerx);
        },
        card: {
            junling1: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
            junling2: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
            junling3: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
            junling4: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
            junling5: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
            junling6: {
                type: 'junling',
                vanish: true,
                derivation: 'guozhan',
            },
        },
        aozhanRank: {
            '8': [],
            '7': [],
            '6': [],
            '5': [
                'gz_lukang', 'gz_caoren', 'gz_lvfan',
                'gz_machao', 'gz_ganfuren', 'gz_madai',
                'gz_jiling', 'gz_pangde',
            ],
            '4': [
                'gz_re_lidian', 'gz_yuejin', 'gz_huangzhong',
                'gz_menghuo', 'gz_sunshangxiang', 'gz_lvmeng',
                'gz_lvbu',
            ],
            '3': [
                'gz_simayi', 'gz_luxun', 'gz_wuguotai',
                'gz_caiwenji',
            ],
            '2': [
                'gz_re_lusu', 'gz_zhangzhang',
            ],
            '1': [
                'gz_caocao', 'gz_guojia', 'gz_xiahoudun',
                'gz_xunyu', 'gz_caopi', 'gz_liubei',
                'gz_fazheng', 'gz_dongzhuo', 'gz_yuji',
                'gz_liqueguosi', 'gz_huanggai',
            ],
        },
        guozhanRank: {
            '8': [
                'gz_xunyou', 'gz_re_lidian', 'gz_caopi',
                'gz_shamoke', 'gz_lifeng', 'gz_wangping',
                'gz_xiaoqiao', 'gz_zhoutai', 'gz_lvfan',
                'gz_beimihu', 'gz_mateng', 'gz_jiaxu',
            ],
            '7': [
                'gz_zhanghe', 'gz_jianggan', 'gz_simayi',
                'gz_weiyan', 'gz_huangyueying', 'gz_zhugeliang',
                'gz_lingtong', 'gz_sunshangxiang', 'gz_sunce',
                'gz_re_yuanshao', 'gz_yuanshu', 'gz_hetaihou',
            ],
            '6': [
                'gz_zhenji', 'gz_guojia', 'gz_yujin',
                'gz_jiangwei', 'gz_zhangfei', 'gz_sp_zhugeliang',
                'gz_zhouyu', 'gz_lingcao', 'gz_daqiao',
                'gz_yuji', 'gz_caiwenji', 'gz_diaochan',
            ],
            '5': [
                'gz_zhangliao', 'gz_caocao', 'gz_xuhuang',
                'gz_liushan', 'gz_pangtong', 'gz_zhaoyun',
                'gz_re_lusu', 'gz_sunquan', 'gz_ganning',
                'gz_zhangxiu', 'gz_liqueguosi', 'gz_huatuo',
            ],
            '4': [
                'gz_dianwei', 'gz_dengai', 'gz_xunyu',
                'gz_madai', 'gz_liubei', 'gz_mifuren',
                'gz_wuguotai', 'gz_luxun', 'gz_taishici',
                'gz_zhangjiao', 'gz_zuoci', 'gz_pangde',
            ],
            '3': [
                'gz_xiahoudun', 'gz_yuejin', 'gz_caoren',
                'gz_machao', 'gz_masu', 'gz_fazheng',
                'gz_zhangzhang', 'gz_lvmeng', 'gz_huanggai',
                'gz_jiling', 'gz_lvbu', 'gz_dongzhuo',
            ],
            '2': [
                'gz_cuimao', 'gz_xiahouyuan', 'gz_caohong',
                'gz_zhurong', 'gz_zhurong', 'gz_jiangfei',
                'gz_xusheng', 'gz_dingfeng', 'gz_sunjian',
                'gz_zhangren', 'gz_kongrong', 'gz_yanwen',
            ],
            '1': [
                'gz_zangba', 'gz_bianfuren', 'gz_xuzhu',
                'gz_menghuo', 'gz_ganfuren', 'gz_guanyu',
                'gz_lukang', 'gz_jiangqing', 'gz_chendong',
                'gz_zoushi', 'gz_panfeng', 'gz_tianfeng',
            ],
        },
        characterSort: {
            mode_guozhan: {
                guozhan_default: ["gz_caocao", "gz_simayi", "gz_xiahoudun", "gz_zhangliao", "gz_xuzhu", "gz_guojia", "gz_zhenji", "gz_xiahouyuan", "gz_zhanghe", "gz_xuhuang", "gz_caoren", "gz_dianwei", "gz_xunyu", "gz_caopi", "gz_yuejin", "gz_liubei", "gz_guanyu", "gz_zhangfei", "gz_zhugeliang", "gz_zhaoyun", "gz_machao", "gz_huangyueying", "gz_huangzhong", "gz_weiyan", "gz_pangtong", "gz_sp_zhugeliang", "gz_liushan", "gz_menghuo", "gz_zhurong", "gz_ganfuren", "gz_sunquan", "gz_ganning", "gz_lvmeng", "gz_huanggai", "gz_zhouyu", "gz_daqiao", "gz_luxun", "gz_sunshangxiang", "gz_sunjian", "gz_xiaoqiao", "gz_taishici", "gz_zhoutai", "gz_re_lusu", "gz_zhangzhang", "gz_dingfeng", "gz_huatuo", "gz_lvbu", "gz_diaochan", "gz_re_yuanshao", "gz_yanwen", "gz_jiaxu", "gz_pangde", "gz_zhangjiao", "gz_caiwenji", "gz_mateng", "gz_kongrong", "gz_jiling", "gz_tianfeng", "gz_panfeng", "gz_zoushi", ],
                guozhan_zhen: ["gz_dengai", "gz_caohong", "gz_jiangfei", "gz_jiangwei", "gz_xusheng", "gz_jiangqing", "gz_hetaihou", "gz_yuji"],
                guozhan_shi: [, "gz_re_lidian", "gz_zangba", "gz_madai", "gz_mifuren", "gz_sunce", "gz_chendong", "gz_sp_dongzhuo", "gz_zhangren"],
                guozhan_bian: ["gz_liqueguosi", "gz_zuoci", "gz_bianfuren", "gz_xunyou", "gz_lingtong", "gz_lvfan", "gz_masu", "gz_shamoke", ],
                guozhan_quan: ["gz_cuimao", "gz_yujin", "gz_wangping", "gz_fazheng", "gz_wuguotai", "gz_lukang", "gz_yuanshu", "gz_zhangxiu"],
                guozhan_jun: ["gz_jun_caocao", "gz_jun_sunquan", "gz_jun_liubei", "gz_jun_zhangjiao"],
                guozhan_others: ["gz_lingcao", "gz_lifeng", "gz_beimihu", "gz_jianggan"],
            }
        },
        characterPack: {
            //女团大战版武将属性配置
            mode_guozhan: {
                //S
                chenguanhui_SNH48: ['female', 'S', 4, ['wenwan', 'fuhei']],
                chengjue_SNH48: ['female', 'S', 4, ['kuaidao', 'qiaoyan']],
                chensi_SNH48: ['female', 'S', 4, ['jingwu', 'tianyin']],
                daimeng_SNH48: ['female', 'S', 4, ['dandang', 'jianyi', 'new_lingjun', 'stage']],
                jiangyun_SNH48: ['female', 'S', 3, ['jingyan', 'qichang', 'duomian']],
                kongxiaoyin_SNH48: ['female', 'S', 4, ['shenhun', 'diandao', 'xinggan']],
                liyuqi_SNH48: ['female', 'S', 3, ['haomai', 'quanneng', 'chongzhen']],
                liuzengyan_SNH48: ['female', 'S', 4, ['tongyin', 'ganbei', 'guohuo']],
                mohan_SNH48: ['female', 'S', 3, ['shiyu', 'yuyan', 'new_ziqiang']],
                panyanqi_SNH48: ['female', 'S', 4, ['tongxin', 'dedication']],
                qianbeiting_SNH48: ['female', 'S', 4, ['juxia', 'qiangong', 'stage']],
                qiuxinyi_SNH48: ['female', 'S', 4, ['meixi', 'nvwang', 'laydown']],
                sunrui_SNH48: ['female', 'S', 3, ['chidu', 'rexin']],
                shaoxuecong_SNH48: ['female', 'S', 4, ['yibing', 'tianpin', 'jiaozhu']],
                shenzhilin_SNH48: ['female', 'S', 4, ['zanmei', 'luanyin', 'luansheng']],
                wenjingjie_SNH48: ['female', 'S', 4, ['talent', 'wenhe']],
                wuzhehan_SNH48: ['female', 'S', 4, ['jiangshan', 'jiamian']],
                xuchenchen_SNH48: ['female', 'S', 4, ['qiangyin', 'jinwu', 'chengshu']],
                xujiaqi_SNH48: ['female', 'S', 4, ['shengou', 'secret', 'meiren']],
                xuyiren_SNH48: ['female', 'S', 4, ['tisu', 'fenfa']],
                xuzixuan_SNH48: ['female', 'S', 4, ['luogod', 'longgong', 'huangzi']],
                yuandanni_SNH48: ['female', 'S', 4, ['complement', 'kuxuan']],
                yuanyuzhen_SNH48: ['female', 'S', 4, ['ganxing', 'huopo']],
                zhangyuge_SNH48: ['female', 'S', 3, ['guayan', 'xuanmu']],
                zhaohanqian_SNH48: ['female', 'S', 4, ['kuaiyan', 'innocence']],
                zhaoye_SNH48: ['female', 'S', 4, ['baofa', 'caihua']],
                zhuxiaodan_SNH48: ['female', 'S', 4, ['liren', 'shouzhuo']],
                chenjunyu_SNH48: ['female', 'S', 4, ['mengdong', 'maomao']],
                youmiao_SNH48: ['female', 'S', 4, ['lianyu', 'guiji']],
                chenyuzi_SNH48: ['female', 'S', 4, ['manjia', 'xiaoshou']],
                liuliqian_SNH48: ['female', 'S', 4, ['qiangzheng', 'moukui']],
                wangbeini_SNH48: ['female', 'S', 4, ['suoling', 'xixing']],
                zhaojiamin_SNH48: ['female', 'S', 4, ['shuangfa', 'buzhuang']],

                //N
                chenjiaying_SNH48: ['female', 'N', 4, ['zhushe', 'hehe']],
                chenwenyan_SNH48: ['female', 'N', 3, ['zhiheng']],
                fengxinduo_SNH48: ['female', 'N', 4, ['pupu', 'hainv', 'ho2h']],
                guoqianyun_SNH48: ['female', 'N', 3, ['zhiheng']],
                huangtingting_SNH48: ['female', 'N', 4, ['yancang', 'jiezou']],
                haowanqing_SNH48: ['female', 'N', 3, ['rende', 'yingzi']],
                hexiaoyu_SNH48: ['female', 'N', 3, ['rende', 'yingzi', 'lightLocus']],
                jinyingyue_SNH48: ['female', 'N', 3, ['activation', 'huimie']],
                jiangzhenyi_SNH48: ['female', 'N', 4, ['zhengyi']],
                liujuzi_SNH48: ['female', 'N', 3, ['rende', 'yingzi']],
                liupeixin_SNH48: ['female', 'N', 3, ['rende', 'yingzi']],
                luting_SNH48: ['female', 'N', 4, ['dage', 'kongchang', 'ho2o']],
                taoboer_SNH48: ['female', 'N', 3, ['biyue', 'paoxiao']],
                xieni_SNH48: ['female', 'N', 3, ['biyue', 'liuli']],
                yijiaai_SNH48: ['female', 'N', 4, ['ruoyu', 'geini', 'lightLocus']],
                zhaoyue_SNH48: ['female', 'N', 4, ['huobing', 'renwu']],
                zhangyi_SNH48: ['female', 'N', 3, ['duwu', 'mashu']],
                zhangyuxin_SNH48: ['female', 'N', 3, ['xingwen', 'duoyi']],

                jujingyi_SNH48: ['female', 'N', 4, ['dufei', 'poisonousfog', 'jiedu', 'duzong']],

                //H
                feiqinyuan_SNH48: ['female', 'H', 3, ['tianxuan', 'yuanqi', 'taizi']],
                hongpeiyun_SNH48: ['female', 'H', 4, ['peiyun', 'fuwei']],
                jiangshan_SNH48: ['female', 'H', 4, ['yonggu']],
                jiangshuting_SNH48: ['female', 'H', 4, ['jiang', 'luanji']],
                lijiaen_SNH48: ['female', 'H', 4, ['jiang', 'luanji']],
                linnan_SNH48: ['female', 'H', 4, ['tianding', 'dapin']],
                linsiyi_SNH48: ['female', 'H', 3, ['luoshen', 'qingguo']],
                liyitong_SNH48: ['female', 'H', 4, ['jizhi', 'haibao', 'jianfeng']],
                qiyuzhu_SNH48: ['female', 'H', 3, ['kurou', 'biyue']],
                shenmengyao_SNH48: ['female', 'H', 4, ['shenmiao']],
                songyushan_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                sunzhenni_SNH48: ['female', 'H', 4, ['pengyue', 'haosi']],
                wanlina_SNH48: ['female', 'H', 4, ['tiequan', 'orangeDone']],
                wangyi_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                xuhan_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                xiongqinxian_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                xuyangyuzhuo_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                yanghuiting_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                yujiayi_SNH48: ['female', 'H', 4, ['princess', 'jiaoyi']],
                yuanyiqi_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],
                zhangxin_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan', 'orangeDone']],
                zengxiaowen_SNH48: ['female', 'H', 3, ['paoxiao', 'longdan']],

                liujiongran_SNH48: ['female', 'H', 3, ['luoshen', 'biyue']],
                //X
                chenlin_SNH48: ['female', 'X', 4, ['datou', 'xunshan']],
                chenyunling_SNH48: ['female', 'X', 4, ['taowa', 'quanhuang']],
                fengxiaofei_SNH48: ['female', 'X', 4, ['chongaaaa', 'beifen', 'yuanzhen']],
                lizhao_SNH48: ['female', 'X', 4, ['mitao', 'taobao', 'xflag']],
                lvyi_SNH48: ['female', 'X', 4, ['chengzhang']],
                panyingqi_SNH48: ['female', 'X', 4, ['liangong', 'tisheng']],
                qijing_SNH48: ['female', 'X', 4, ['lianer', 'jingjing']],
                songxinran_SNH48: ['female', 'X', 4, ['guoer', 'xiaohua']],
                sunxinwen_SNH48: ['female', 'X', 4, ['news']],
                wangjialing_SNH48: ['female', 'X', 4, ['jiujiu']],
                wangshu_SNH48: ['female', 'X', 4, ['chemistry', 'neighbor']],
                wangxiaojia_SNH48: ['female', 'X', 4, ['tiancao', 'dianyan']],
                xushiqi_SNH48: ['female', 'X', 4, ['xiaoqi']],
                xietianyi_SNH48: ['female', 'X', 4, ['wushuang', 'nvzun']],
                yangbingyi_SNH48: ['female', 'X', 4, ['tieyi', 'icefeng', 'ershui']],
                yangyunyu_SNH48: ['female', 'X', 3, ['zhanbu']],
                zhangdansan_SNH48: ['female', 'X', 4, ['tansuan']],
                zhangjiayu_SNH48: ['female', 'X', 4, ['muwang']],

                lijing_SNH48: ['female', 'X', 4, ['order', 'xflag']],

                //BEJ48
                duanyixuan_BEJ48: ['female', 'B', 4, ['paoxiao']],
                liushuxian_BEJ48: ['female', 'B', 4, ['paoxiao']],
                sushanshan_BEJ48: ['female', 'E', 4, ['paoxiao']],
                lizi_BEJ48: ['female', 'E', 4, ['paoxiao']],
                huangenru_BEJ48: ['female', 'J', 4, ['paoxiao']],
                hanjiale_BEJ48: ['female', 'J', 4, ['paoxiao']],

                //GNZ48
                xieleilei_GNZ48: ['female', 'G', 4, ['paoxiao']],
                zhangqiongyu_GNZ48: ['female', 'G', 4, ['paoxiao']],
                liangjiao_GNZ48: ['female', 'G', 3, ['hongyan', 'tianxian']],
                zhengdanni_GNZ48: ['female', 'N3', 4, ['paoxiao']],
                liulifei_GNZ48: ['female', 'N3', 4, ['paoxiao']],
                laizixi_GNZ48: ['female', 'Z', 4, ['paoxiao']],
                nongyanping_GNZ48: ['female', 'Z', 4, ['paoxiao']],
                liangqiao_GNZ48: ['female', 'Z', 3, ['guose', 'liuli']],

                //CKG48
                leiyuxiao_CKG48: ['female', 'C', 4, ['luoshen']],
                maoyihan_CKG48: ['female', 'C', 4, ['miji']],
                hanlinqin_CKG48: ['female', 'K', 4, ['buqu']],
                wujingjing_CKG48: ['female', 'K', 4, ['guanxing']],

                wangzijie_SB: ['male', 'guan', 1, ['longdan', 'chongzhen', 'paoxiao', 'jiang', 'linglong']],
                aji_SB: ['male', 'guan', 1, ['buqu', 'yingzi', 'kuaihuo', 'yiji', 'jizhi']],
                yesheng_SB: ['male', 'guan', 1, ['zhiheng', 'paoxiao', 'wansha', 'weimu', 'luanwu']],
                mulaosi_SB: ['female', 'guan', 1, ['biyue', 'tiaoxin', 'xiaoji', 'liuli', 'ruoyu']],
                piggyrae_SB: ['female', 'guan', 1, ['luoshen', 'luandance', 'qingguo', 'fankui', 'leiji']],
            }
        },
        skill: {
            //国战版技能
            new_lingjun: {
                audio: 1,
                unique: true,
                trigger: {
                    target: 'taoBegin'
                },
                forced: true,
                filter: function (event, player) {
                    //自己对自己不触发
                    if (event.player == player) return false;
                    //主公体力大于0不触发
                    if (player.hp > 0) return false;
                    if (event.player.group != player.group) return false;
                    return true;
                },
                content: function (event, target) {
                    player.recover();
                    trigger.player.draw();
                }
            },
            new_ziqiang: {
                priority: 15,
                skillAnimation: 'legend',
                audio: 1,
                unique: true,
                keepSkill: true,
                derivation: 'mowang',
                trigger: {
                    player: 'phaseBegin'
                },
                forced: true,
                filter: function (event, player) {
                    if (player.storage.ziqiang)
                        return false;
                    return player.isMinHp();
                },
                content: function () {
                    player.storage.ziqiang = true;
                    player.maxHp++;
                    if (player.hasSkill('new_ziqiang')) {
                        player.addSkill('mowang');
                    } else {
                        player.addAdditionalSkill('new_ziqiang', ['mowang']);
                    }
                    //event.trigger('update');                    
                    player.awakenSkill('new_ziqiang');
                    player.update();
                    player.recover();
                }
            },
            ho2_break: {
                priority: 15,
                audio: 1,
                unique: true,
                trigger: {
                    player: 'phaseBegin'
                },
                forced: true,
                frequent: true,
                derivation: 'ho2',
                skillAnimation: 'legend',
                filter: function (event, player) {
                    return (player.hasSkill('ho2h') && player.hasSkill('ho2o')) || player.hasSkill('ho2');
                },
                content: function () {
                    if (!player.hasSkill('ho2')) {
                        --player.maxHp;
                        player.recover();
                    }
                    player.removeAdditionalSkill('ho2_init');
                    player.addAdditionalSkill('ho2_break', ['ho2'])
                    player.awakenSkill('ho2_break');
                    player.removeSkill('ho2h');
                    player.removeSkill('ho2o');
                    player.update();
                }
            },
            ho2_init: {
                trigger: {
                    global: 'gameStart'
                },
                direct: true,
                filter: function () {
                    return true
                },
                content: function () {
                    player.addAdditionalSkill('ho2_init', ['ho2_break']);
                }
            },
            ho2h: {
                group: 'ho2_init'
            },
            ho2o: {
                group: 'ho2_init'
            },
            ho2: {
                audio: 1,
                trigger: {
                    player: 'useCardAfter'
                },
                filter: function (event, player) {
                    return event.card && get.suit(event.card) == 'heart';
                },
                frequent: true,
                content: function () {
                    player.draw();
                    player.recover();
                },
                effect: {
                    target: function (card, player, target) {
                        if (get.suit(card) == 'heart') return [1, 0.6];
                    },
                    player: function (card, player, target) {
                        if (get.suit(card) == 'heart') return [1, 1];
                    }
                }
            },
            xflag: {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame'
                },
                forced: true,
                filter: function () {
                    return game.countPlayer(function (current) {
                        return current.group == "H"
                    }) > 2;
                },
                content: function () {
                    game.countPlayer(function (current) {
                        if (current.group == "X")
                            current.addAdditionalSkill('xflag', ['xflag2']);
                    })
                }
            },
            xflag2: {
                mod: {
                    globalTo: function (from, to, distance) {
                        return distance + 1;
                    }
                }
            },
            lightLocus: {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame'
                },
                forced: true,
                filter: function () {
                    return game.countPlayer(function (current) {
                        return current.group == "N"
                    }) > 2;
                },
                content: function () {
                    game.countPlayer(function (current) {
                        if (current.group == "N")
                            current.addAdditionalSkill('lightLocus', ['lightLocus2']);
                    })
                }
            },
            lightLocus2: {
                mod: {
                    globalFrom: function (from, to, distance) {
                        return distance - 1;
                    }
                }
            },
            orangeDone: {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame'
                },
                forced: true,
                filter: function () {
                    return game.countPlayer(function (current) {
                        return current.group == "H"
                    }) > 2;
                },
                content: function () {
                    game.countPlayer(function (current) {
                        if (current.group == "H")
                            current.addAdditionalSkill('orangeDone', ['orangeDone2']);
                    })
                }
            },
            orangeDone2: {
                mod: {
                    attackFrom: function (from, to, distance) {
                        return distance - 1;
                    }
                }
            },
            stage: {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame'
                },
                forced: true,
                filter: function () {
                    return game.countPlayer(function (current) {
                        return current.group == "S"
                    }) > 2;
                },
                content: function () {
                    game.countPlayer(function (current) {
                        if (current.group == "S")
                            current.addAdditionalSkill('stage', ['stage2']);
                    })
                }
            },
            stage2: {
                mod: {
                    maxHandcard: function (player, num) {
                        return num + 2;
                    }
                }
            }
        },
        game: {
            getCharacterChoice: function (list, num) {
                var choice = list.splice(0, num);
                //选将快速检索的类型
                var map = {
                    S: [],
                    N: [],
                    H: [],
                    X: [],
                    B: [],
                    E: [],
                    J: [],
                    G: [],
                    N3: [],
                    Z: [],
                    guan: []
                };
                //num配置的可选角色个数
                for (var i = 0; i < choice.length; i++) {
                    var group = lib.character[choice[i]][1];
                    if (map[group]) {
                        map[group].push(choice[i]);
                    }
                }
                for (var i in map) {
                    if (map[i].length < 2) {
                        if (map[i].length == 1) {
                            choice.remove(map[i][0]);
                            list.push(map[i][0]);
                        }
                        delete map[i];
                    }
                }
                if (choice.length == num - 1) {
                    for (var i = 0; i < list.length; i++) {
                        if (map[lib.character[list[i]][1]]) {
                            choice.push(list[i]);
                            list.splice(i--, 1);
                            break;
                        }
                    }
                } else if (choice.length < num - 1) {
                    var group = null
                    for (var i = 0; i < list.length; i++) {
                        if (group) {
                            if (lib.character[list[i]][1] == group) {
                                choice.push(list[i]);
                                list.splice(i--, 1);
                                if (choice.length >= num) {
                                    break;
                                }
                            }
                        } else {
                            if (!map[lib.character[list[i]][1]]) {
                                group = lib.character[list[i]][1];
                                choice.push(list[i]);
                                list.splice(i--, 1);
                            }
                        }
                    }
                }
                return choice;
            },
            getState: function () {
                var state = {};
                for (var i in lib.playerOL) {
                    var player = lib.playerOL[i];
                    state[i] = {
                        identity: player.identity,
                        shown: player.ai.shown,
                    };
                }
                return state;
            },
            updateState: function (state) {
                for (var i in state) {
                    var player = lib.playerOL[i];
                    if (player) {
                        player.identity = state[i].identity;
                        player.ai.shown = state[i].shown;
                    }
                }
            },
            getRoomInfo: function (uiintro) {
                var num, last;
                if (lib.configOL.initshow_draw == '0') {
                    num = '关闭'
                } else {
                    num = {
                        mark: '标记',
                        draw: '摸牌'
                    } [lib.configOL.initshow_draw];
                }
                uiintro.add('<div class="text chat">首亮奖励：' + num);
                uiintro.add('<div class="text chat">珠联璧合：' + (lib.configOL.zhulian ? '开启' : '关闭'));
                uiintro.add('<div class="text chat">出牌时限：' + lib.configOL.choose_timeout + '秒');
                uiintro.add('<div class="text chat">国战牌堆：' + (lib.configOL.guozhanpile ? '开启' : '关闭'));
                // uiintro.add('<div class="text chat">鏖战模式：' + (lib.configOL.aozhan ? '开启' : '关闭'));
                // uiintro.add('<div class="text chat">观看下家副将：' + (lib.configOL.viewnext ? '开启' : '关闭'));
                last = uiintro.add('<div class="text chat">国战武将：' + (lib.configOL.onlyguozhan ? '开启' : '关闭'));
                if (!lib.configOL.onlyguozhan) {
                    // uiintro.add('<div class="text chat">屏蔽弱将：'+(lib.configOL.ban_weak?'开启':'关闭'));
                    // last=uiintro.add('<div class="text chat">屏蔽强将：'+(lib.configOL.ban_strong?'开启':'关闭'));
                    if (lib.configOL.banned.length) {
                        last = uiintro.add('<div class="text chat">禁用武将：' + get.translation(lib.configOL.banned));
                    }
                    if (lib.configOL.bannedcards.length) {
                        last = uiintro.add('<div class="text chat">禁用卡牌：' + get.translation(lib.configOL.bannedcards));
                    }
                }
                last.style.paddingBottom = '8px';
            },
            addRecord: function (bool) {
                if (typeof bool == 'boolean') {
                    var data = lib.config.gameRecord.guozhan.data;
                    var identity = game.me.identity;
                    if (!data[identity]) {
                        data[identity] = [0, 0];
                    }
                    if (bool) {
                        data[identity][0]++;
                    } else {
                        data[identity][1]++;
                    }
                    var list = ['S', 'N', 'H', 'X', 'B', 'E', 'J', 'G', 'N3', 'Z', 'C', 'K', 'guan'];
                    var str = '';
                    for (var i = 0; i < list.length; i++) {
                        if (data[list[i]]) {
                            str += lib.translate[list[i] + '2'] + '：' + data[list[i]][0] + '胜' + ' ' + data[list[i]][1] + '负<br>';
                        }
                    }
                    lib.config.gameRecord.guozhan.str = str;
                    game.saveConfig('gameRecord', lib.config.gameRecord);
                }
            },
            getIdentityList: function (player) {
                if (!player.isUnseen()) return;
                if (player == game.me) return;
                var list = {
                    S: 'S',
                    N: 'N',
                    H: 'H',
                    X: 'X',
                    B: 'B',
                    E: 'E',
                    J: 'J',
                    G: 'G',
                    N3: 'N',
                    Z: 'Z',
                    C: 'C',
                    K: 'K',
                    guan: '官',
                    unknown: '猜'
                }
                var num = Math.floor((game.players.length + game.dead.length) / 2);
                var noye = true;
                if (get.population('S') >= num) {
                    delete list.S;
                    noye = false;
                }
                if (get.population('N') >= num) {
                    delete list.N;
                    noye = false;
                }
                if (get.population('H') >= num) {
                    delete list.H;
                    noye = false;
                }
                if (get.population('X') >= num) {
                    delete list.X;
                    noye = false;
                }
                if (get.population('B') >= num) {
                    delete list.B;
                    noye = false;
                }
                if (get.population('E') >= num) {
                    delete list.E;
                    noye = false;
                }
                if (get.population('J') >= num) {
                    delete list.J;
                    noye = false;
                }
                if (get.population('G') >= num) {
                    delete list.G;
                    noye = false;
                }
                if (get.population('N3') >= num) {
                    delete list.N3;
                    noye = false;
                }
                if (get.population('Z') >= num) {
                    delete list.Z;
                    noye = false;
                }
                if (noye) {
                    delete list.ye;
                }
                return list;
            },
            getIdentityList2: function (list) {
                for (var i in list) {
                    switch (i) {
                        case 'unknown': list[i] = '未知'; break;
                        case 'guan': list[i] = '官方'; break;
                        default: list[i] += '队';
                    }
                }
            },
            getVideoName: function () {
                var str = get.translation(game.me.name1) + '/' + get.translation(game.me.name2);
                var str2 = get.cnNumber(parseInt(get.config('player_number'))) + '人' +
                    get.translation(lib.config.mode);
                if (game.me.identity == 'guan') {
                    str2 += ' - 官方';
                }
                var name = [str, str2];
                return name;
            },
            showIdentity: function (started) {
                if (game.phaseNumber == 0 && !started) return;
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].showCharacter(2, false);
                }
            },
            tryResult: function () {
                var hasunknown = false,
                    check = true,
                    unknown, giveup;
                var group = game.players[0]._group;
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i].identity == 'unknown') {
                        hasunknown = true;
                        if (unknown) {
                            unknown = 'no';
                        } else {
                            unknown = game.players[i];
                        }
                    }
                    if (game.players[i]._group != group) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    if (get.population('guan')) {
                        if (game.players.length > 1) {
                            check = false;
                        }
                    } else {
                        if (hasunknown && !game.hasPlayer(function (current) {
                                return get.is.jun(current);
                            })) {
                            var players = game.players.concat(game.dead);
                            var num = 0;
                            for (var i = 0; i < players.length; i++) {
                                if (players[i]._group == group) {
                                    num++;
                                }
                            }
                            if (num > players.length / 2) {
                                check = false;
                            }
                        }
                    }
                }
                if (check) {
                    game.checkResult();
                } else if (!hasunknown) {
                    var ids = [];
                    var idmap = {};
                    var idp = {};
                    for (var i = 0; i < game.players.length; i++) {
                        var id = game.players[i].identity;
                        ids.add(id);
                        if (!idmap[id]) {
                            idmap[id] = 1;
                        } else {
                            idmap[id]++;
                        }
                        idp[id] = game.players[i];
                    }
                    if (ids.length != 2) return;
                    var id1 = ids[0],
                        id2 = ids[1];
                    if (idmap[id1] > 1 && idmap[id2] > 1) return;
                    if (idmap[id1] > 1 && id1 == 'guan') return;
                    if (idmap[id2] > 1 && id2 == 'guan') return;
                    if (idmap[id1] == 1) {
                        idp[id1].showGiveup();
                    }
                    if (idmap[id2] == 1) {
                        idp[id2].showGiveup();
                    }
                }
            },
            checkResult: function () {
                _status.overing = true;
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].showCharacter(2);
                }
                if (game.me.identity == 'guan') {
                    if (game.me.classList.contains('dead')) {
                        game.over(false);
                    } else {
                        game.over(true);
                    }
                } else {
                    if (get.population(game.me.identity) == 0) {
                        game.over(false);
                    } else {
                        game.over(true);
                    }
                }
                game.showIdentity();
            },
            checkOnlineResult: function (player) {
                if (player.identity == 'guan') {
                    return player.isAlive();
                }
                return get.population(player.identity) > 0;
            },
            chooseCharacter: function () {
                var next = game.createEvent('chooseCharacter', false);
                next.showConfig = true;
                next.addPlayer = true;
                next.ai = function (player, list, back) {
                    if (_status.brawl && _status.brawl.chooseCharacterAi) {
                        if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
                            return;
                        }
                    }
                    for (var i = 0; i < list.length - 1; i++) {
                        for (var j = i + 1; j < list.length; j++) {
                            if (lib.character[list[i]][1] == lib.character[list[j]][1]) {
                                var mainx = list[i];
                                var vicex = list[j];
                                if (get.guozhanReverse(mainx, vicex)) {
                                    mainx = list[j];
                                    vicex = list[i];
                                }
                                player.init(mainx, vicex, false);
                                if (back) {
                                    list.remove(player.name);
                                    list.remove(player.name2);
                                    for (var i = 0; i < list.length; i++) {
                                        back.push(list[i]);
                                    }
                                }
                                return;
                            }
                        }
                    }
                }
                next.setContent(function () {
                    "step 0"
                    ui.arena.classList.add('choose-character');
                    var addSetting = function (dialog) {
                        dialog.add('选择座位').classList.add('add-setting');
                        var seats = document.createElement('table');
                        seats.classList.add('add-setting');
                        seats.style.margin = '0';
                        seats.style.width = '100%';
                        seats.style.position = 'relative';
                        for (var i = 1; i <= game.players.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
                            td.link = i - 1;
                            seats.appendChild(td);
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                if (_status.cheat_seat) {
                                    _status.cheat_seat.classList.remove('bluebg');
                                    if (_status.cheat_seat == this) {
                                        delete _status.cheat_seat;
                                        return;
                                    }
                                }
                                this.classList.add('bluebg');
                                _status.cheat_seat = this;
                            });
                        }
                        dialog.content.appendChild(seats);
                        if (game.me == game.zhu) {
                            seats.previousSibling.style.display = 'none';
                            seats.style.display = 'none';
                        }

                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                    };
                    var removeSetting = function () {
                        var dialog = _status.event.dialog;
                        if (dialog) {
                            dialog.style.height = '';
                            delete dialog._scrollset;
                            var list = Array.from(dialog.querySelectorAll('.add-setting'));
                            while (list.length) {
                                list.shift().remove();
                            }
                            ui.update();
                        }
                    };
                    event.addSetting = addSetting;
                    event.removeSetting = removeSetting;

                    var chosen = lib.config.continue_name || [];
                    game.saveConfig('continue_name');
                    event.chosen = chosen;

                    var i;
                    event.list = [];
                    for (i in lib.character) {
                        if (i.indexOf('gz_shibing') == 0) continue;
                        if (chosen.contains(i)) continue;
                        if (lib.filter.characterDisabled(i)) continue;
                        if (get.config('onlyguozhan')) {
                            if (!lib.characterPack.mode_guozhan[i]) continue;
                            if (get.is.jun(i)) continue;
                        }
                        //可选角色血量控制
                        switch(lib.character[i][2]){
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                                event.list.push(i);
                                break;
                            default:
                                //因为SB的人都是2血，之前跳过了他们，现在他们可以被随机pick到了。
                                if(i.indexOf('_SB')> 0){
                                    event.list.push(i);
                                }
                                break;
                        }
                    }
                    _status.characterlist = event.list.slice(0);
                    _status.yeidentity = [];
                    if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                        event.list = _status.brawl.chooseCharacterFilter(event.list);
                    }
                    event.list.randomSort();
                    // var list=event.list.splice(0,parseInt(get.config('choice_num')));
                    var list;
                    if (_status.brawl && _status.brawl.chooseCharacter) {
                        list = _status.brawl.chooseCharacter(event.list, game.me);
                    } else {
                        list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                    }
                    if (_status.auto) {
                        event.ai(game.me, list);
                        lib.init.onfree();
                    } else if (chosen.length) {
                        game.me.init(chosen[0], chosen[1], false);
                        lib.init.onfree();
                    } else {
                        var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
                        if (!_status.brawl || !_status.brawl.noAddSetting) {
                            if (get.config('change_identity')) {
                                addSetting(dialog);
                            }
                        }
                        var next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
                        next.filterButton = function (button) {
                            if (ui.dialog.buttons.length <= 10) {
                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                    if (ui.dialog.buttons[i] != button) {
                                        if (lib.element.player.perfectPair.call({
                                                name1: button.link,
                                                name2: ui.dialog.buttons[i].link
                                            })) {
                                            button.classList.add('glow2');
                                        }
                                    }
                                }
                            }
                            if (ui.selected.buttons.length == 0) return true;
                            return (lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1]);
                        };
                        next.switchToAuto = function () {
                            event.ai(game.me, list);
                            ui.arena.classList.remove('selecting');
                        };
                        var createCharacterDialog = function () {
                            event.dialogxx = ui.create.characterDialog('heightset', function (i) {
                                if (i.indexOf('gz_shibing') == 0) return true;
                                if (get.config('onlyguozhan')) {
                                    if (!lib.characterPack.mode_guozhan[i]) return true;
                                    if (get.is.jun(i)) return true;
                                }
                            }, get.config('onlyguozhanexpand') ? 'expandall' : undefined, get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined);
                            if (ui.cheat2) {
                                ui.cheat2.animate('controlpressdownx', 500);
                                ui.cheat2.classList.remove('disabled');
                            }
                        };
                        if (lib.onfree) {
                            lib.onfree.push(createCharacterDialog);
                        } else {
                            createCharacterDialog();
                        }
                        ui.create.cheat2 = function () {
                            ui.cheat2 = ui.create.control('自由选将', function () {
                                if (this.dialog == _status.event.dialog) {
                                    if (game.changeCoin) {
                                        game.changeCoin(50);
                                    }
                                    this.dialog.close();
                                    _status.event.dialog = this.backup;
                                    this.backup.open();
                                    delete this.backup;
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.animate('controlpressdownx', 500);
                                        ui.cheat.classList.remove('disabled');
                                    }
                                } else {
                                    if (game.changeCoin) {
                                        game.changeCoin(-10);
                                    }
                                    this.backup = _status.event.dialog;
                                    _status.event.dialog.close();
                                    _status.event.dialog = _status.event.parent.dialogxx;
                                    this.dialog = _status.event.dialog;
                                    this.dialog.open();
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.classList.add('disabled');
                                    }
                                }
                            });
                            if (lib.onfree) {
                                ui.cheat2.classList.add('disabled');
                            }
                        }
                        ui.create.cheat = function () {
                            _status.createControl = ui.cheat2;
                            ui.cheat = ui.create.control('更换', function () {
                                if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                    return;
                                }
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
                                }
                                event.list = event.list.concat(list);
                                event.list.randomSort();
                                // list=event.list.splice(0,parseInt(get.config('choice_num')));
                                list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                                var buttons = ui.create.div('.buttons');
                                var node = _status.event.dialog.buttons[0].parentNode;
                                _status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
                                _status.event.dialog.content.insertBefore(buttons, node);
                                buttons.animate('start');
                                node.remove();
                                game.uncheck();
                                game.check();
                            });
                            delete _status.createControl;
                        }
                        if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                            if (!ui.cheat && get.config('change_choice'))
                                ui.create.cheat();
                            if (!ui.cheat2 && get.config('free_choose'))
                                ui.create.cheat2();
                        }
                    }
                    "step 1"
                    if (ui.cheat) {
                        ui.cheat.close();
                        delete ui.cheat;
                    }
                    if (ui.cheat2) {
                        ui.cheat2.close();
                        delete ui.cheat2;
                    }
                    if (result.buttons) {
                        game.me.init(result.buttons[0].link, result.buttons[1].link, false);
                        game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                    }
                    // game.me.setIdentity(game.me.group);
                    event.list.remove(game.me.name);
                    event.list.remove(game.me.name2);
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i] != game.me) {
                            event.ai(game.players[i], event.list.splice(0, parseInt(get.config('choice_num'))), event.list);
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        game.players[i].classList.add('unseen');
                        game.players[i].classList.add('unseen2');
                        _status.characterlist.remove(game.players[i].name);
                        _status.characterlist.remove(game.players[i].name2);
                        if (game.players[i] != game.me) {
                            game.players[i].node.identity.firstChild.innerHTML = '猜';
                            game.players[i].node.identity.dataset.color = 'unknown';
                            game.players[i].node.identity.classList.add('guessing');
                        }
                        game.players[i].hiddenSkills = lib.character[game.players[i].name][3].slice(0);
                        var hiddenSkills2 = lib.character[game.players[i].name2][3];
                        for (var j = 0; j < hiddenSkills2.length; j++) {
                            game.players[i].hiddenSkills.add(hiddenSkills2[j]);
                        }
                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                            if (!lib.skill[game.players[i].hiddenSkills[j]]) {
                                game.players[i].hiddenSkills.splice(j--, 1);
                            }
                        }
                        game.players[i].group = 'unknown';
                        game.players[i].sex = 'unknown';
                        game.players[i].name1 = game.players[i].name;
                        game.players[i].name = 'unknown';
                        game.players[i].identity = 'unknown';
                        game.players[i].node.name.show();
                        game.players[i].node.name2.show();
                        game.players[i]._group = lib.character[game.players[i].name1][1];
                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                            game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j], true);
                        }
                    }
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);
                });
            },
            chooseCharacterOL: function () {
                var next = game.createEvent('chooseCharacter', false);
                next.setContent(function () {
                    'step 0'
                    game.broadcastAll(function () {
                        ui.arena.classList.add('choose-character');
                    });
                    var list;
                    if (lib.configOL.onlyguozhan) {
                        list = [];
                        for (var i in lib.characterPack.mode_guozhan) {
                            if (i.indexOf('gz_shibing') == 0) continue;
                            if (get.is.jun(i)) continue;
                            list.push(i);
                        }
                    } else {
                        list = get.charactersOL();
                    }
                    _status.characterlist = list.slice(0);
                    _status.yeidentity = [];
                    event.list = list.slice(0);
                    var list2 = [];
                    var num;
                    if (lib.configOL.number * 6 > list.length) {
                        num = 5;
                    } else if (lib.configOL.number * 7 > list.length) {
                        num = 6;
                    } else {
                        num = 7;
                    }
                    var filterButton = function (button) {
                        if (ui.dialog) {
                            if (ui.dialog.buttons.length <= 10) {
                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                    if (ui.dialog.buttons[i] != button) {
                                        if (lib.element.player.perfectPair.call({
                                                name1: button.link,
                                                name2: ui.dialog.buttons[i].link
                                            })) {
                                            button.classList.add('glow2');
                                        }
                                    }
                                }
                            }
                        }
                        if (ui.selected.buttons.length == 0) return true;
                        if (!lib.character[button.link]) return false;
                        return (lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1]);
                    };
                    list.randomSort();
                    for (var i = 0; i < game.players.length; i++) {
                        list2.push([game.players[i],
                            ['选择角色', [game.getCharacterChoice(list, num), 'character']], 2,
                            true,
                            function () {
                                return Math.random()
                            },
                            filterButton
                        ]);
                    }
                    game.me.chooseButtonOL(list2, function (player, result) {
                        if (game.online || player == game.me) player.init(result.links[0], result.links[1], false);
                    }).set('switchToAuto', function () {
                        _status.event.result = 'ai';
                    }).set('processAI', function () {
                        var buttons = _status.event.dialog.buttons;
                        for (var i = 0; i < buttons.length - 1; i++) {
                            for (var j = i + 1; j < buttons.length; j++) {
                                if (lib.character[buttons[i].link][1] == lib.character[buttons[j].link][1]) {
                                    var list = [buttons[i].link, buttons[j].link];
                                    if (get.guozhanReverse(list[0], list[1])) list.reverse();
                                    return {
                                        bool: true,
                                        links: list,
                                    }
                                }
                            }
                        }
                    });
                    'step 1'
                    var sort = true;
                    for (var i in result) {
                        if (result[i] && result[i].links) {
                            for (var j = 0; j < result[i].links.length; j++) {
                                event.list.remove(result[i].links[j]);
                            }
                        }
                    }
                    for (var i in result) {
                        if (result[i] == 'ai' || !result[i].links || result[i].links.length < 1) {
                            if (sort) {
                                sort = false;
                                event.list.randomSort();
                            }
                            result[i] = [event.list.shift()];
                            var group = lib.character[result[i][0]][1];
                            for (var j = 0; j < event.list.length; j++) {
                                if (lib.character[event.list[j]][1] == group) {
                                    result[i].push(event.list[j]);
                                    event.list.splice(j--, 1);
                                    break;
                                }
                            }
                        } else {
                            result[i] = result[i].links
                        }
                        if (!lib.playerOL[i].name) {
                            lib.playerOL[i].init(result[i][0], result[i][1], false);
                        }
                    }

                    for (var i = 0; i < game.players.length; i++) {
                        _status.characterlist.remove(game.players[i].name);
                        _status.characterlist.remove(game.players[i].name2);
                        game.players[i].hiddenSkills = lib.character[game.players[i].name][3].slice(0);
                        var hiddenSkills2 = lib.character[game.players[i].name2][3];
                        for (var j = 0; j < hiddenSkills2.length; j++) {
                            game.players[i].hiddenSkills.add(hiddenSkills2[j]);
                        }
                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                            if (!lib.skill[game.players[i].hiddenSkills[j]]) {
                                game.players[i].hiddenSkills.splice(j--, 1);
                            }
                        }
                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                            game.players[i].name1 = game.players[i].name;
                            game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j], true);
                        }
                    }
                    game.broadcastAll(function (result) {
                        for (var i in result) {
                            if (!lib.playerOL[i].name) {
                                lib.playerOL[i].init(result[i][0], result[i][1], false);
                            }
                        }
                        for (var i = 0; i < game.players.length; i++) {
                            game.players[i].classList.add('unseen');
                            game.players[i].classList.add('unseen2');
                            if (game.players[i] != game.me) {
                                game.players[i].node.identity.firstChild.innerHTML = '猜';
                                game.players[i].node.identity.dataset.color = 'unknown';
                                game.players[i].node.identity.classList.add('guessing');
                            }
                            game.players[i].group = 'unknown';
                            game.players[i].sex = 'unknown';
                            game.players[i].name1 = game.players[i].name;
                            game.players[i].name = 'unknown';
                            game.players[i].identity = 'unknown';
                            game.players[i].node.name.show();
                            game.players[i].node.name2.show();
                            game.players[i]._group = lib.character[game.players[i].name1][1];
                        }
                        setTimeout(function () {
                            ui.arena.classList.remove('choose-character');
                        }, 500);
                    }, result);
                });
            }
        },
        ui: {
            click: {
                identity: function () {
                    if (this.touched) {
                        this.touched = false; return;
                    }
                    _status.clicked = true;
                    if (this.parentNode.isUnseen() && this.parentNode != game.me) {
                        switch (this.firstChild.innerHTML) {
                            //右上角队伍归属标识，如有需要CKG48，idft于此处扩展case，并在layout.css中添加对应样式
                            case 'S': this.firstChild.innerHTML = 'S'; this.dataset.color = 'SNH48S'; break;
                            case 'N': this.firstChild.innerHTML = 'N'; this.dataset.color = 'SNH48N'; break;
                            case 'H': this.firstChild.innerHTML = 'H'; this.dataset.color = 'SNH48H'; break;
                            case 'X': this.firstChild.innerHTML = 'X'; this.dataset.color = 'SNH48X'; break;
                            case 'B': this.firstChild.innerHTML = 'B'; this.dataset.color = 'BEJ48B'; break;
                            case 'E': this.firstChild.innerHTML = 'E'; this.dataset.color = 'BEJ48E'; break;
                            case 'J': this.firstChild.innerHTML = 'J'; this.dataset.color = 'BEJ48J'; break;
                            case 'G': this.firstChild.innerHTML = 'G'; this.dataset.color = 'GNZ48G'; break;
                            case 'N3': this.firstChild.innerHTML = 'N'; this.dataset.color = 'GNZ48N'; break;
                            case 'Z': this.firstChild.innerHTML = 'Z'; this.dataset.color = 'GNZ48Z'; break;
                            case 'C': this.firstChild.innerHTML = 'C'; this.dataset.color = 'CKG48C'; break;
                            case 'K': this.firstChild.innerHTML = 'K'; this.dataset.color = 'CKG48K'; break;
                            case 'guan': this.firstChild.innerHTML = 'guan'; this.dataset.color = 'metal'; break;
                            default: this.firstChild.innerHTML = 'S'; this.dataset.color = 'SNH48S'; break;
                        }
                    }
                }
            }
        },
        translate: {
            bumingzhi: '不明置',
            tongshimingzhi: '同时明置',
            mingzhizhujiang: '明置主将',
            mingzhifujiang: '明置副将',
            mode_guozhan_character_config: '国战武将',
            new_lingjun: '领军',
            new_lingjun_info: '当你陷入濒死状态时，与你同势力的角色对你使用的[桃]额外回复一点体力值。你以此法脱离濒死状态时，其可摸一张牌。',
            new_ziqiang: '自强',
            new_ziqiang_info: '觉醒技, 准备阶段，若你的体力为全场最低（或之一），你增加一点体力上限并回复1点体力，获得技能“魔王”',
            //女团大战版本独有
            xflag: '梦旗',
            xflag_info: '游戏开始时，若Team X队玩家数大于等于2，则所有Team X角色防御距离+1',
            orangeDone: '橘定',
            orangeDone_info: '游戏开始时，若Team HII玩家数大于等于2，则所有Team HII角色攻击距离+1',
            stage: '舞台',
            stage_info: '游戏开始时，若Team SII玩家数大于等于2，则所有Team SII角色手牌上限+2',
            lightLocus:'光轨',
            lightLocus_info: '游戏开始时，若Team NII玩家数大于等于2，则所有Team NII角色攻击距离+1',
            //组合篇
            ho2h: 'H',
            ho2h_info: 'HO2组合成员之一，如果回合开始时，你的主将和副将都是明置的，并且有H和O技能，则获得技能HO2',
            ho2o: 'O',
            ho2o_info: 'HO2组合成员之一，如果回合开始时，你的主将和副将都是明置的，并且有H和O技能，则获得技能HO2',
            ho2: 'HO',
            ho2_info: '如果这就是爱情。你每使用一张♥牌，摸一张牌，回复一点体力'
        },
        junList: ['SNH48daimeng', 'SNH48yijiaai', 'SNH48wanlina', 'SNH48lizhao'],
        guozhanPile: [
            ["spade", 7, "sha"],
            ["spade", 8, "sha"],
            ["spade", 8, "sha"],
            ["spade", 9, "sha"],
            ["spade", 9, "sha"],
            ["spade", 10, "sha"],
            ["spade", 10, "sha"],
            ["club", 2, "sha"],
            ["club", 3, "sha"],
            ["club", 4, "sha"],
            ["club", 5, "sha"],
            ["club", 6, "sha"],
            ["club", 7, "sha"],
            ["club", 8, "sha"],
            ["club", 8, "sha"],
            ["club", 9, "sha"],
            ["club", 9, "sha"],
            ["club", 10, "sha"],
            ["club", 10, "sha"],
            ["club", 11, "sha"],
            ["club", 11, "sha"],
            ["heart", 10, "sha"],
            ["heart", 10, "sha"],
            ["heart", 11, "sha"],
            ["diamond", 6, "sha"],
            ["diamond", 7, "sha"],
            ["diamond", 8, "sha"],
            ["diamond", 9, "sha"],
            ["diamond", 10, "sha"],
            ["diamond", 13, "sha"],
            ["heart", 2, "shan"],
            ["heart", 2, "shan"],
            ["heart", 13, "shan"],
            ["diamond", 2, "shan"],
            ["diamond", 2, "shan"],
            ["diamond", 3, "shan"],
            ["diamond", 4, "shan"],
            ["diamond", 5, "shan"],
            ["diamond", 6, "shan"],
            ["diamond", 7, "shan"],
            ["diamond", 8, "shan"],
            ["diamond", 9, "shan"],
            ["diamond", 10, "shan"],
            ["diamond", 11, "shan"],
            ["diamond", 11, "shan"],
            ["heart", 3, "tao"],
            ["heart", 4, "tao"],
            ["heart", 6, "tao"],
            ["heart", 7, "tao"],
            ["heart", 8, "tao"],
            ["heart", 9, "tao"],
            ["heart", 12, "tao"],
            ["diamond", 12, "tao"],

            ["spade", 2, "bagua"],
            ["club", 2, "bagua"],
            ["spade", 5, "jueying"],
            ["club", 5, "dilu"],
            ["heart", 13, "zhuahuang"],
            ["heart", 5, "chitu"],
            ["spade", 13, "dawan"],
            ["diamond", 13, "zixin"],
            ["club", 1, "zhuge"],
            ["diamond", 1, "zhuge"],
            //因为代码有BUG，禁用飞龙夺凤
            //["spade", 2, "feilongduofeng"],
            ["spade", 6, "qinggang"],
            ["spade", 5, "qinglong"],
            ["spade", 12, "zhangba"],
            ["diamond", 5, "guanshi"],
            ["diamond", 12, "fangtian"],
            ["heart", 5, "qilin"],

            ["heart", 3, "wugu"],
            ["heart", 4, "wugu"],
            ["heart", 1, "taoyuan"],
            ["spade", 7, "nanman"],
            ["spade", 13, "nanman"],
            ["club", 7, "nanman"],
            ["heart", 1, "wanjian"],
            ["spade", 1, "juedou"],
            ["club", 1, "juedou"],
            ["diamond", 1, "juedou"],
            ["heart", 7, "wuzhong"],
            ["heart", 8, "wuzhong"],
            ["heart", 9, "wuzhong"],
            ["heart", 11, "wuzhong"],
            ["spade", 3, 'shunshou'],
            ["spade", 4, 'shunshou'],
            ["spade", 11, 'shunshou'],
            ["diamond", 3, 'shunshou'],
            ["diamond", 4, 'shunshou'],
            ["spade", 3, 'guohe'],
            ["spade", 4, 'guohe'],
            ["spade", 12, 'guohe'],
            ["club", 3, 'guohe'],
            ["club", 4, 'guohe'],
            ["heart", 12, 'guohe'],
            ["club", 12, 'jiedao'],
            ["club", 13, 'jiedao'],
            ["spade", 11, 'wuxie'],
            ["club", 12, 'wuxie'],
            ["club", 13, 'wuxie'],
            ["spade", 6, 'lebu'],
            ["club", 6, 'lebu'],
            ["heart", 6, 'lebu'],
            ["spade", 1, 'shandian', 'thunder'],
            ["spade", 2, 'hanbing'],
            ["club", 2, 'renwang'],
            ["heart", 12, 'shandian', 'thunder'],
            ["diamond", 12, 'wuxie'],

            ["heart", 4, "sha", "fire"],
            ["heart", 7, "sha", "fire"],
            ["heart", 10, "sha", "fire"],
            ["diamond", 4, "sha", "fire"],
            ["diamond", 5, "sha", "fire"],
            ["spade", 4, "sha", "thunder"],
            ["spade", 5, "sha", "thunder"],
            ["spade", 6, "sha", "thunder"],
            ["spade", 7, "sha", "thunder"],
            ["spade", 8, "sha", "thunder"],
            ["club", 5, "sha", "thunder"],
            ["club", 6, "sha", "thunder"],
            ["club", 7, "sha", "thunder"],
            ["club", 8, "sha", "thunder"],
            ["heart", 8, "shan"],
            ["heart", 9, "shan"],
            ["heart", 11, "shan"],
            ["heart", 12, "shan"],
            ["diamond", 6, "shan"],
            ["diamond", 7, "shan"],
            ["diamond", 8, "shan"],
            ["diamond", 10, "shan"],
            ["diamond", 11, "shan"],
            ["heart", 5, "tao"],
            ["heart", 6, "tao"],
            ["diamond", 2, "tao"],
            ["diamond", 3, "tao"],
            ["diamond", 9, "jiu"],
            ["spade", 3, "jiu"],
            ["spade", 9, "jiu"],
            ["club", 3, "jiu"],
            ["club", 9, "jiu"],

            ["diamond", 13, "hualiu"],
            ["club", 1, "baiyin"],
            ["spade", 2, "tengjia", 'fire'],
            ["club", 2, "tengjia", 'fire'],
            ["spade", 1, "guding"],
            ["diamond", 1, "zhuque", 'fire'],

            ["heart", 2, "huogong", "fire"],
            ["heart", 3, "huogong", "fire"],
            ["diamond", 12, "huogong", "fire"],
            ["spade", 11, "tiesuo"],
            ["spade", 12, "tiesuo"],
            ["club", 10, "tiesuo"],
            ["club", 11, "tiesuo"],
            ["club", 12, "tiesuo"],
            ["club", 13, "tiesuo"],
            ["heart", 13, "wuxie"],
            ["heart", 13, "wuxie"],
            ["spade", 13, "wuxie"],
            ["spade", 10, "bingliang"],
            ["club", 4, "bingliang"],

            ['heart', 9, 'yuanjiao'],
            // ['club', 3, 'zhibi'],
            // ['club', 4, 'zhibi'],
            ['diamond', 4, 'yiyi'],
            ['heart', 11, 'yiyi'],
            ['diamond', 6, 'wuliu'],
            ['diamond', 12, 'sanjian'],
            ['heart', 3, 'jingfanma'],
            ["spade", 4, 'shunshou'],
            ["spade", 12, 'guohe'],
            ["spade", 11, 'wuxie'],
            ['spade', 3, 'huoshaolianying', 'fire'],
            ['club', 11, 'huoshaolianying', 'fire'],
            ['heart', 12, 'huoshaolianying', 'fire'],
            ['club', 2, 'huxinjing'],
            ['heart', 2, 'diaohulishan'],
            ['diamond', 10, 'diaohulishan'],
            ['heart', 1, 'lianjunshengyan'],
            ['club', 3, 'chiling'],
            ['spade', 12, 'lulitongxin'],
            ['club', 10, 'lulitongxin'],
            ['club', 12, 'shuiyanqijunx'],
            ['heart', 13, 'shuiyanqijunx'],
            ['spade', 1, 'xietianzi'],
            ['diamond', 1, 'xietianzi'],
            ['diamond', 4, 'xietianzi'],
            ['club', 1, 'yuxi'],
            ['heart', 3, 'taipingyaoshu'],

            //附加游戏卡牌
            ['diamond', 2, 'yingyuanbang'],
            ['spade', 2, 'antyvote'],
            ['club', 12, 'yongqizhichui'],
            ['heart', 12, 'baozuo'],
        ],
        element: {
            content: {
                chooseJunlingFor: function () {
                    'step 0'
                    var list = ['junling1', 'junling2', 'junling3', 'junling4', 'junling5', 'junling6'];
                    list = list.randomGets(2).sort();
                    for (var i = 0; i < list.length; i++) list[i] = ['军令', '', list[i]];
                    var prompt = event.prompt || '选择一张军令牌';
                    if (target != undefined && !event.prompt) {
                        var str = target == player ? '（你）' : '';
                        prompt += '，令' + get.translation(target) + str + '选择是否执行';
                    }
                    player.chooseButton([prompt, [list, 'vcard']], true).set('ai', function (button) {
                        return get.junlingEffect(player, button.link[2], target, [], player);
                    });
                    'step 1'
                    event.result = {
                        junling: result.links[0][2],
                        targets: [],
                    };
                    if (result.links[0][2] == 'junling1') player.chooseTarget('选择一名角色，做为若该军令被执行，受到伤害的角色', true).set('ai', function (_target) {
                        return get.damageEffect(_target, target, player);
                    });
                    'step 2'
                    if (result.targets.length) {
                        player.line(result.targets, 'green');
                        event.result.targets = result.targets;
                    }
                },
                chooseJunlingControl: function () {
                    'step 0'
                    var dialog = [];
                    var str1 = source == player ? '（你）' : '';
                    var str2 = event.targets ? '（被指定的角色为' + get.translation(event.targets) + '）' : '';
                    if (!event.prompt) dialog.add(get.translation(event.source) + str1 + '选择的军令' + str2 + '为');
                    else {
                        dialog.add(event.prompt);
                        dialog.add(get.translation(event.source) + str1 + '选择的军令' + str2 + '为');
                    }
                    dialog.add([
                        [event.junling], 'vcard'
                    ]);
                    var controls = [];
                    if (event.choiceList) {
                        for (var i = 0; i < event.choiceList.length; i++) {
                            dialog.add('<div class="popup text" style="width:calc(100% - 10px);display:inline-block">选项' + get.cnNumber(i + 1, true) + '：' + event.choiceList[i] + '</div>');
                            controls.push('选项' + get.cnNumber(i + 1, true));
                        }
                    } else if (event.controls) controls = event.controls;
                    else controls = ['执行该军令', '不执行该军令'];
                    if (!event.ai) event.ai = function () {
                        return Math.floor(controls.length * Math.random())
                    };
                    player.chooseControl(controls).set('dialog', dialog).set('ai', event.ai);
                    'step 1'
                    event.result = {
                        index: result.index,
                        control: result.control,
                    };
                },
                carryOutJunling: function () {
                    'step 0'
                    switch (event.junling) {
                        case 'junling1': {
                            if (targets[0].isAlive()) {
                                player.line(targets, 'green');
                                targets[0].damage(player);
                            }
                            break;
                        }
                        case 'junling2':
                            player.draw();
                            event.num = 1;
                            break;
                        case 'junling3':
                            player.loseHp();
                            break;
                        case 'junling4':
                            player.addTempSkill('junling4_eff');
                            player.addTempSkill('fengyin_vice');
                            player.addTempSkill('fengyin_main');
                            break;
                        case 'junling5':
                            player.turnOver();
                            player.addTempSkill('junling5_eff');
                            break;
                    }
                    'step 1'
                    if (event.junling == 'junling2' && source != player && player.countCards('he') > 0) {
                        player.chooseCard('交给' + get.translation(source) + '第' + get.cnNumber(event.num) + '张牌（共两张）', 'he', true);
                        event.ing = true;
                    }
                    if (event.junling == 'junling6') {
                        var position = '',
                            num0 = 0;
                        if (player.countCards('h')) {
                            position += 'h';
                            num0++;
                        }
                        if (player.countCards('e')) {
                            position += 'e';
                            num0++;
                        }
                        player.chooseCard('选择一张手牌和一张装备区内牌（若有），然后弃置其余的牌', position, num0, function (card) {
                            if (ui.selected.cards.length) return get.position(card) != get.position(ui.selected.cards[0]);
                            return true;
                        }, true).set('complexCard', true).set('ai', function (card) {
                            return get.value(card)
                        });
                    }
                    'step 2'
                    if (event.junling == 'junling2' && source != player) {
                        if (result.cards.length && event.ing) {
                            source.gain(result.cards, player);
                            player.$give(1, source);
                        }
                        event.num++;
                        if (event.num < 3) {
                            event.ing = false;
                            event.goto(1);
                        }
                    }
                    if (event.junling == 'junling6') {
                        var cards = player.getCards('he');
                        for (var i = 0; i < result.cards.length; i++) cards.remove(result.cards[i]);
                        player.discard(cards);
                    }
                },
                showCharacter: function () {
                    'step 0'
                    event.trigger('showCharacterEnd');
                    'step 1'
                    event.trigger('showCharacterAfter');
                },
                removeCharacter: function () {
                    player.$removeCharacter(event.num);
                },
                doubleDraw: function () {
                    game.log(player, '获得了', '#g【阴阳鱼】', '标记');
                    player.addSkill('yinyang_skill');
                },
                changeVice: function () {
                    'step 0'
                    //if(!player.hasViceCharacter()) event.finish();
                    //else{
                    var group = lib.character[player.name1][1];
                    _status.characterlist.randomSort();
                    event.tochange = []
                    for (var i = 0; i < _status.characterlist.length; i++) {
                        if (lib.character[_status.characterlist[i]][1] == group) event.tochange.push(_status.characterlist[i]);
                        if (event.tochange.length == 3) break;
                    }
                    if (!event.tochange.length) event.finish();
                    else {
                        player.chooseButton(true, ['选择要变更的武将牌', [event.tochange, 'character']]).ai = function (button) {
                            return get.guozhanRank(button.link);
                        };
                    }
                    //}
                    'step 1'
                    var name = result.links[0];
                    _status.characterlist.remove(name);
                    if (player.hasViceCharacter()) _status.characterlist.add(player.name2);
                    game.log(player, '将副将变更为', '#g' + get.translation(name));
                    player.viceChanged = true;
                    if (player.isUnseen(1)) {
                        player.showCharacter(1, false);
                    }
                    player.reinit(player.name2, name, false);
                },
                /*----分界线----*/
                mayChangeVice: function () {
                    'step 0'
                    player.chooseBool('是否变更副将？').set('ai', function () {
                        var name = player.name2;
                        var skills = lib.character[name][3].slice(0);
                        for (var i = 0; i < skills.length; i++) {
                            if (lib.skill[skills[i]].limited && player.awakenedSkills.contains(skills[i])) return true;
                        }
                        return get.guozhanRank(name) <= 3;
                    });
                    'step 1'
                    if (result.bool) {
                        if (!event.repeat) _status.changedSkills.add(event.skill)
                        player.changeVice();
                    }
                },
                zhulian: function () {
                    player.popup('珠联璧合');
                    game.log(player, '获得了', '#g【珠联璧合】', '标记');
                    player.addSkill('zhulianbihe_skill');
                },
            },
            player: {
                chooseJunlingFor: function (target) {
                    var next = game.createEvent('chooseJunlingFor');
                    next.player = this;
                    next.target = target;
                    next.setContent('chooseJunlingFor');
                    return next;
                },
                chooseJunlingControl: function (source, junling, targets) {
                    var next = game.createEvent('chooseJunlingControl');
                    next.player = this;
                    next.source = source;
                    next.junling = junling;
                    if (targets.length) next.targets = targets;
                    next.setContent('chooseJunlingControl');
                    return next;
                },
                carryOutJunling: function (source, junling, targets) {
                    var next = game.createEvent('carryOutJunling');
                    next.source = source;
                    next.player = this;
                    if (targets.length) next.targets = targets;
                    next.junling = junling;
                    next.setContent('carryOutJunling');
                    return next;
                },
                /**/
                mayChangeVice: function (repeat) {
                    if (!_status.changedSkills) _status.changedSkills = [];
                    var skill = _status.event.name;
                    if (repeat || !_status.changedSkills.contains(skill)) {
                        var next = game.createEvent('mayChangeVice');
                        next.setContent('mayChangeVice');
                        next.player = this;
                        next.skill = skill;
                        if (repeat) next.repeat = true;
                        return next;
                    }
                },
                differentIdentityFrom: function (target, self) {
                    if (this == target) return false;
                    if (self) {
                        if (target.identity == 'unknown') return false;
                        if (target.identity == 'ye' || this.identity == 'ye') return true;
                        if (this.identity == 'unknown') {
                            var identity = lib.character[this.name1][1];
                            if (this.wontYe()) return identity != target.identity;
                            return true;
                        }
                    } else {
                        if (this.identity == 'unknown' || target.identity == 'unknown') return false;
                        if (this.identity == 'ye' || target.identity == 'ye') return true;
                    }
                    return this.identity != target.identity;
                },
                sameIdentityAs: function (target, shown) {
                    if (shown) {
                        if (this.identity == 'ye' || this.identity == 'unknown') return false;
                    } else {
                        if (this == target) return true;
                        if (target.identity == 'unknown' || target.identity == 'ye' || this.identity == 'ye') return false;
                        if (this.identity == 'unknown') {
                            var identity = lib.character[this.name1][1];
                            if (this.wontYe()) return identity == target.identity;
                            return false;
                        }
                    }
                    return this.identity == target.identity;
                },
                getModeState: function () {
                    return {
                        unseen: this.isUnseen(0),
                        unseen2: this.isUnseen(1),
                    }
                },
                setModeState: function (info) {
                    if (info.mode.unseen) this.classList.add('unseen');
                    if (info.mode.unseen2) this.classList.add('unseen2');
                    if (!info.name) return;
                    // if(info.name.indexOf('unknown')==0){
                    // 	if(this==game.me){
                    // 		lib.translate[info.name]+='（你）';
                    // 	}
                    // }
                    this.init(info.name1, info.name2, false);
                    this.name1 = info.name1;
                    this.name = info.name;
                    this.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[this.name].slice(0, 3)), this);
                    if (info.identityShown) {
                        this.setIdentity(info.identity);
                        this.node.identity.classList.remove('guessing');
                    } else if (this != game.me) {
                        this.node.identity.firstChild.innerHTML = '猜';
                        this.node.identity.dataset.color = 'unknown';
                        this.node.identity.classList.add('guessing');
                    }
                },
                dieAfter2: function (source) {
                    if (source && source.shijun) {
                        source.discard(source.getCards('he'));
                        delete source.shijun;
                    } else if (source && source.identity != 'unknown') {
                        if (source.identity == 'ye') source.draw(3);
                        else if (this.identity == 'ye') source.draw(1);
                        else if (this.identity != source.identity) source.draw(get.population(this.identity) + 1);
                        else source.discard(source.getCards('he'));
                    }
                },
                dieAfter: function (source) {
                    this.showCharacter(2);
                    if (get.is.jun(this.name1)) {
                        if (source && source.identity == this.identity) source.shijun = true;
                        var yelist = [];
                        for (var i = 0; i < game.players.length; i++) {
                            if (game.players[i].identity == this.identity) {
                                yelist.push(game.players[i]);
                            }
                        }
                        game.broadcastAll(function (list) {
                            for (var i = 0; i < list.length; i++) {
                                list[i].identity = 'guan';
                                list[i].setIdentity();
                            }
                        }, yelist);
                        _status.yeidentity.add(this.identity);
                    }
                    game.tryResult();
                },
                viewCharacter: function (target, num) {
                    if (num != 0 && num != 1) {
                        num = 2;
                    }
                    if (!target.isUnseen(num)) {
                        return;
                    }
                    var next = game.createEvent('viewCharacter');
                    next.player = this;
                    next.target = target;
                    next.num = num;
                    next.setContent(function () {
                        var content, str = get.translation(target) + '的';
                        if (event.num == 0 || !target.isUnseen(1)) {
                            content = [str + '主将', [
                                [target.name1], 'character'
                            ]];
                            game.log(player, '观看了', target, '的主将');
                        } else if (event.num == 1 || !target.isUnseen(0)) {
                            content = [str + '副将', [
                                [target.name2], 'character'
                            ]];
                            game.log(player, '观看了', target, '的副将');
                        } else {
                            content = [str + '主将和副将', [
                                [target.name1, target.name2], 'character'
                            ]];
                            game.log(player, '观看了', target, '的主将和副将');
                        }
                        player.chooseControl('ok').set('dialog', content);
                    })
                },
                checkViceSkill: function (skill, disable) {
                    if (game.expandSkills(lib.character[this.name2][3].slice(0)).contains(skill)) {
                        return true;
                    } else {
                        if (disable !== false) {
                            this.awakenSkill(skill);
                        }
                        return false;
                    }
                },
                checkMainSkill: function (skill, disable) {
                    if (game.expandSkills(lib.character[this.name1][3].slice(0)).contains(skill)) {
                        return true;
                    } else {
                        if (disable !== false) {
                            this.awakenSkill(skill);
                        }
                        return false;
                    }
                },
                removeMaxHp: function () {
                    if (game.online) return;
                    if (typeof this.singleHp == 'boolean') {
                        if (this.singleHp) {
                            this.singleHp = false;
                        } else {
                            this.singleHp = true;
                            this.maxHp--;
                        }
                    } else {
                        this.maxHp--;
                    }
                    this.update();
                },
                hideCharacter: function (num, log) {
                    if (this.isUnseen(2)) {
                        return;
                    }
                    game.addVideo('hideCharacter', this, num);
                    var skills;
                    switch (num) {
                        case 0:
                            if (log !== false) game.log(this, '暗置了主将' + get.translation(this.name1));
                            skills = lib.character[this.name][3];
                            this.name = this.name2;
                            this.sex = lib.character[this.name2][0];
                            this.classList.add('unseen');
                            break;
                        case 1:
                            if (log !== false) game.log(this, '暗置了副将' + get.translation(this.name2));
                            skills = lib.character[this.name2][3];
                            this.classList.add('unseen2');
                            break;
                    }
                    game.broadcast(function (player, name, sex, num, skills) {
                        player.name = name;
                        player.sex = sex;
                        switch (num) {
                            case 0:
                                player.classList.add('unseen');
                                break;
                            case 1:
                                player.classList.add('unseen2');
                                break;
                        }
                        for (var i = 0; i < skills.length; i++) {
                            if (!player.skills.contains(skills[i])) continue;
                            player.hiddenSkills.add(skills[i]);
                            player.skills.remove(skills[i]);
                        }
                    }, this, this.name, this.sex, num, skills);
                    for (var i = 0; i < skills.length; i++) {
                        if (!this.skills.contains(skills[i])) continue;
                        this.hiddenSkills.add(skills[i]);
                        var info = get.info(skills[i]);
                        if (info.ondisable && info.onremove) {
                            info.onremove(this);
                        }
                        this.skills.remove(skills[i]);
                    }
                    this.checkConflict();
                },
                removeCharacter: function (num) {
                    var name = this['name' + (num + 1)];
                    var next = game.createEvent('removeCharacter');
                    next.player = this;
                    next.toRemove = name;
                    next.num = num;
                    next.setContent('removeCharacter');
                    return next;
                },
                $removeCharacter: function (num) {
                    var name = this['name' + (num + 1)];
                    var info = lib.character[name];
                    if (!info) return;
                    var to = 'gz_shibing' + (info[0] == 'male' ? 1 : 2) + info[1];
                    game.log(this, '移除了' + (num ? '副将' : '主将'), '#b' + name);
                    this.reinit(name, to, false);
                    this.showCharacter(num, false);
                    _status.characterlist.add(name);
                },
                changeVice: function () {
                    var next = game.createEvent('changeVice');
                    next.player = this;
                    next.setContent('changeVice');
                    return next;
                },
                hasMainCharacter: function () {
                    return this.name1.indexOf('gz_shibing') != 0;
                },
                hasViceCharacter: function () {
                    return this.name2.indexOf('gz_shibing') != 0;
                },
                showCharacter: function (num, log) {
                    var toShow = [];
                    if ((num == 0 || num == 2) && this.isUnseen(0)) toShow.add(this.name1);
                    if ((num == 1 || num == 2) && this.isUnseen(1)) toShow.add(this.name2);
                    if (!toShow.length) return;
                    lib.element.player.$showCharacter.apply(this, arguments);
                    var next = game.createEvent('showCharacter', false);
                    next.player = this;
                    next.num = num;
                    next.toShow = toShow;
                    next._args = arguments;
                    next.setContent('showCharacter');
                    return next;
                },
                $showCharacter: function (num, log) {
                    if (num == 0 && !this.isUnseen(0)) {
                        return;
                    }
                    if (num == 1 && !this.isUnseen(1)) {
                        return;
                    }
                    if (!this.isUnseen(2)) {
                        return;
                    }
                    game.addVideo('showCharacter', this, num);
                    if (this.identity == 'unknown') {
                        this.group = lib.character[this.name1][1];
                        if (get.is.jun(this.name1) && this.isAlive()) {
                            this.identity = this.group;
                            var yelist = [];
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].identity == 'guan' && game.players[i]._group == this.group) {
                                    yelist.push(game.players[i]);
                                }
                            }
                            game.broadcastAll(function (list, group) {
                                for (var i = 0; i < list.length; i++) {
                                    list[i].identity = group;
                                    list[i].setIdentity();
                                }
                            }, yelist, this.group);
                        } else if (this.wontYe()) {
                            this.identity = this.group;
                        } else {
                            this.identity = 'guan';
                        }
                        this.setIdentity(this.identity);
                        this.ai.shown = 1;
                        this.node.identity.classList.remove('guessing');

                        if (_status.clickingidentity && _status.clickingidentity[0] == this) {
                            for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                                _status.clickingidentity[1][i].delete();
                                _status.clickingidentity[1][i].style.transform = '';
                            }
                            delete _status.clickingidentity;
                        }
                        game.addVideo('setIdentity', this, this.identity);
                    }
                    var skills;
                    switch (num) {
                        case 0:
                            if (log !== false) game.log(this, '展示了主将', '#b' + this.name1);
                            this.name = this.name1;
                            skills = lib.character[this.name][3];
                            this.sex = lib.character[this.name][0];
                            this.classList.remove('unseen');
                            break;
                        case 1:
                            if (log !== false) game.log(this, '展示了副将', '#b' + this.name2);
                            skills = lib.character[this.name2][3];
                            if (this.sex == 'unknown') this.sex = lib.character[this.name2][0];
                            if (this.name.indexOf('unknown') == 0) this.name = this.name2;
                            this.classList.remove('unseen2');
                            break;
                        case 2:
                            if (log !== false) game.log(this, '展示了主将', '#b' + this.name1, '、副将', '#b' + this.name2);
                            this.name = this.name1;
                            skills = lib.character[this.name][3].concat(lib.character[this.name2][3]);
                            this.sex = lib.character[this.name][0];
                            this.classList.remove('unseen');
                            this.classList.remove('unseen2');
                            break;
                    }
                    game.broadcast(function (player, name, sex, num, identity) {
                        player.identityShown = true;
                        player.name = name;
                        player.sex = sex;
                        player.node.identity.classList.remove('guessing');
                        switch (num) {
                            case 0:
                                player.classList.remove('unseen');
                                break;
                            case 1:
                                player.classList.remove('unseen2');
                                break;
                            case 2:
                                player.classList.remove('unseen');
                                player.classList.remove('unseen2');
                                break;
                        }
                        player.ai.shown = 1;
                        player.identity = identity;
                        player.setIdentity(identity);
                        if (_status.clickingidentity && _status.clickingidentity[0] == player) {
                            for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                                _status.clickingidentity[1][i].delete();
                                _status.clickingidentity[1][i].style.transform = '';
                            }
                            delete _status.clickingidentity;
                        }
                    }, this, this.name, this.sex, num, this.identity);
                    this.identityShown = true;
                    for (var i = 0; i < skills.length; i++) {
                        this.hiddenSkills.remove(skills[i]);
                        this.addSkill(skills[i]);
                    }
                    this.checkConflict();
                    if (!this.viceChanged) {
                        var initdraw = get.config('initshow_draw');
                        if (_status.connectMode) initdraw = lib.configOL.initshow_draw;
                        if (!_status.initshown && !_status.overing && initdraw != 'off' && this.isAlive() && _status.mode != 'mingjiang') {
                            this.popup('首亮');
                            if (initdraw == 'draw') {
                                game.log(this, '首先明置武将，得到奖励');
                                game.log(this, '摸了两张牌');
                                this.draw(2).log = false;
                            } else {
                                this.addSkill('xianqu_skill');
                                game.log(this, '获得了', '#g【先驱】', '标记');
                            }
                            _status.initshown = true;
                        }
                        if (!this.isUnseen(2) && !this._mingzhied) {
                            this._mingzhied = true;
                            if (this.singleHp) {
                                this.doubleDraw();
                            }
                            if (this.perfectPair()) {
                                var next = game.createEvent('guozhanDraw');
                                next.player = this;
                                next.setContent('zhulian');
                            }
                        }
                    }
                },
                wontYe: function () {
                    var group = lib.character[this.name1][1];
                    if (_status.yeidentity && _status.yeidentity.contains(group)) return false;
                    if (get.zhu(this, null, true)) return true;
                    return get.totalPopulation(group) + 1 <= get.population() / 2;
                },
                perfectPair: function () {
                    if (_status.connectMode) {
                        if (!lib.configOL.zhulian) return false;
                    } else {
                        if (!get.config('zhulian')) return false;
                    }
                    var name1 = this.name1;
                    var name2 = this.name2;
                    if (name1.indexOf('gz_shibing') == 0) return false;
                    if (name2.indexOf('gz_shibing') == 0) return false;
                    if (lib.character[name1][1] != lib.character[name2][1]) return false;
                    if (get.is.jun(this.name1)) return true;
                    var list = ['re', 'diy', 'sp', 'jsp', 'shen', 'jg', 'xin', 'old', 'gz', 'ol'];
                    for (var i = 0; i < list.length; i++) {
                        if (name1.indexOf(list[i] + '_') == 0) {
                            name1 = name1.slice(list[i].length + 1);
                        }
                        if (name2.indexOf(list[i] + '_') == 0) {
                            name2 = name2.slice(list[i].length + 1);
                        }
                    }
                    if (lib.perfectPair[name1] && lib.perfectPair[name1].contains(name2)) {
                        return true;
                    }
                    if (lib.perfectPair[name2] && lib.perfectPair[name2].contains(name1)) {
                        return true;
                    }
                    return false;
                },
                siege: function (player) {
                    if (this.identity == 'unknown' || this.identity == 'guan' || this.hasSkill('undist')) return false;
                    if (!player) {
                        var next = this.getNext();
                        if (next && next.sieged()) return true;
                        var previous = this.getPrevious();
                        if (previous && previous.sieged()) return true;
                        return false;
                    } else {
                        return player.sieged() && (player.getNext() == this || player.getPrevious() == this);
                    }
                },
                sieged: function (player) {
                    if (this.identity == 'unknown') return false;
                    if (player) {
                        return player.siege(this);
                    } else {
                        var next = this.getNext();
                        var previous = this.getPrevious();
                        if (next && previous && next != previous) {
                            if (next.identity == 'unknown' || next.identity == 'guan' || next.identity == this.identity) return false;
                            return next.identity == previous.identity;
                        }
                        return false;
                    }
                },
                inline: function () {
                    if (this.identity == 'unknown' || this.identity == 'guan' || this.hasSkill('undist')) return false;
                    var next = this,
                        previous = this;
                    var list = [];
                    for (var i = 0; next || previous; i++) {
                        if (next) {
                            next = next.getNext();
                            if (next.identity != this.identity || next == this) {
                                next = null;
                            } else {
                                list.add(next);
                            }
                        }
                        if (previous) {
                            previous = previous.getPrevious();
                            if (previous.identity != this.identity || previous == this) {
                                previous = null;
                            } else {
                                list.add(previous);
                            }
                        }
                    }
                    if (!list.length) return false;
                    for (var i = 0; i < arguments.length; i++) {
                        if (!list.contains(arguments[i]) && arguments[i] != this) return false;
                    }
                    return true;
                },
                isMajor: function () {
                    if (this.identity == 'ye') {
                        return this.getEquip('yuxi') != undefined || this.hasSkill('gzyongsi') && !game.hasPlayer(function (current) {
                            return current.getEquip('yuxi');
                        });
                    }
                    if (!lib.group.contains(this.identity)) return false;
                    var list = [];
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].getEquip('yuxi') || game.players[i].hasSkill('gzyongsi') && !game.hasPlayer(function (current) {
                                return current.getEquip('yuxi');
                            })) {
                            if (game.players[i].identity != 'unknown') {
                                list.add(game.players[i].identity);
                            }
                        }
                    }
                    if (list.length) {
                        if (list.contains('ye')) return false;
                        return list.contains(this.identity);
                    }
                    var max = 0;
                    for (var i = 0; i < lib.group.length; i++) {
                        max = Math.max(max, get.population(lib.group[i]));
                    }
                    if (max <= 1) return false;
                    return get.population(this.identity) == max;
                },
                isNotMajor: function () {
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].isMajor()) {
                            return !this.isMajor();
                        }
                    }
                    return false;
                },
                isMinor: function (nomajor) {
                    if (this.identity == 'unknown' || this.isMajor()) return false;
                    if (!nomajor && !game.hasPlayer(function (current) {
                            return current.isMajor();
                        })) {
                        return false;
                    }
                    if (!lib.group.contains(this.identity)) return true;
                    var min = game.players.length;
                    if (game.hasPlayer(function (current) {
                            return current.identity == 'guan';
                        })) {
                        min = 1;
                    } else {
                        for (var i = 0; i < lib.group.length; i++) {
                            var num = get.population(lib.group[i]);
                            if (num > 0) {
                                min = Math.min(min, num);
                            }
                        }
                    }
                    return get.population(this.identity) == min;
                },
                logAi: function (targets, card) {
                    if (this.ai.shown == 1 || this.isMad()) return;
                    if (typeof targets == 'number') {
                        this.ai.shown += targets;
                    } else {
                        var effect = 0,
                            c, shown;
                        var info = get.info(card);
                        if (info.ai && info.ai.expose) {
                            if (_status.event.name == '_wuxie') {
                                if (_status.event.source && _status.event.source.ai.shown) {
                                    this.ai.shown += 0.2;
                                }
                            } else {
                                this.ai.shown += info.ai.expose;
                            }
                        }
                        if (targets.length > 0) {
                            for (var i = 0; i < targets.length; i++) {
                                shown = Math.abs(targets[i].ai.shown);
                                if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                                else if (shown < 0.4) c = 0.5;
                                else if (shown < 0.6) c = 0.8;
                                else c = 1;
                                effect += get.effect(targets[i], card, this) * c;
                            }
                        }
                        if (effect > 0) {
                            if (effect < 1) c = 0.5;
                            else c = 1;
                            if (targets.length == 1 && targets[0] == this);
                            else if (targets.length == 1) this.ai.shown += 0.2 * c;
                            else this.ai.shown += 0.1 * c;
                        }
                    }
                    if (this.ai.shown > 0.95) this.ai.shown = 0.95;
                    if (this.ai.shown < -0.5) this.ai.shown = -0.5;
                },
            }
        },
        get: {
            guozhanReverse: function (name1, name2) {
                if (['gz_xunyou', 'gz_lvfan'].contains(name2)) return true;
                if (name2 == 'gz_dengai') return lib.character[name1][2] % 2 == 1;
                if (['gz_sunce', 'gz_jiangwei'].contains(name1)) return name2 == 'gz_zhoutai' || lib.character[name2][2] % 2 == 1;
                return false;
            },
            guozhanRank: function (name) {
                if (name.indexOf('gz_shibing') == 0) return -1;
                if (name.indexOf('gz_jun_') == 0) return 7;
                if (_status._aozhan) {
                    for (var i in lib.aozhanRank) {
                        if (lib.aozhanRank[i].contains(name)) return parseInt(i);
                    }
                }
                for (var i in lib.guozhanRank) {
                    if (lib.guozhanRank[i].contains(name)) return parseInt(i);
                }
                return 0;
            },
            junlingEffect: function (source, junling, performer, targets, viewer) {
                var att1 = get.attitude(viewer, source),
                    att2 = get.attitude(viewer, performer);
                var eff1 = 0,
                    eff2 = 0;
                switch (junling) {
                    case 'junling1':
                        if (!targets.length && game.countPlayer(function (current) {
                                return get.damageEffect(viewer, current, viewer) > 0
                            })) eff1 = 2;
                        else {
                            if (get.damageEffect(targets[0], performer, source) >= 0) eff1 = 2;
                            else eff1 = -2;
                            if (get.damageEffect(targets[0], source, performer) >= 0) eff2 = 2;
                            else eff2 = -2;
                        }
                        break;
                    case 'junling2':
                        if (performer.countCards('he')) {
                            eff1 = 1;
                            eff2 = 0;
                        } else {
                            eff1 = 2;
                            eff2 = -1;
                        }
                        break;
                    case 'junling3':
                        if (performer.hp == 1 && !performer.countCards(function (card) {
                                return get.tag(card, save)
                            }) && !player.hasSkillTag('save', true)) eff2 = -5;
                        else {
                            if (performer == viewer) {
                                if (performer.hasSkillTag('maihp', true)) eff2 = 3;
                                else eff2 = -2;
                            } else {
                                if (performer.hasSkillTag('maihp', false)) eff2 = 3;
                                else eff2 = -2;
                            }
                        }
                        break;
                    case 'junling4':
                        eff1 = 0;
                        eff2 = -2;
                        break;
                    case 'junling5':
                        var td = performer.isTurnedOver();
                        if (td) {
                            if (performer == viewer) {
                                if (_status.currentPhase == performer && performer.hasSkill('jushou')) eff2 = -3;
                                else eff2 = 3;
                            } else eff2 = 3;
                        } else {
                            if (performer == viewer) {
                                if (performer.hasSkillTag('noturn', true)) eff2 = 0;
                                else eff2 = -3;
                            } else {
                                if (performer.hasSkillTag('noturn', false)) eff2 = 0;
                                else eff2 = -3;
                            }
                        }
                        break;
                    case 'junling6':
                        if (performer.countCards('h') > 1) eff2 += 1 - performer.countCards('h');
                        if (performer.countCards('e') > 1) eff2 += 1 - performer.countCards('e');
                        break;
                }
                return Math.sign(att1) * eff1 + Math.sign(att2) * eff2;
            },
            realAttitude: function (from, toidentity, difficulty) {
                if (from.identity == toidentity && toidentity != 'guan') {
                    return 4 + difficulty;
                }
                if (from.identity == 'unknown' && lib.character[from.name1][1] == toidentity) {
                    if (from.wontYe()) return 4 + difficulty;
                }
                var groups = [];
                for (var i = 0; i < lib.group.length; i++) {
                    groups.push(get.population(lib.group[i]));
                }
                var max = Math.max.apply(this, groups);
                if (max <= 1) return -3;
                var from_p = get.population(from.identity != 'unknown' ? from.identity : lib.character[from.name1][1]);
                var to_p = get.population(toidentity);
                if (from.identity == 'guan') from_p = 1;
                if (toidentity == 'guan') to_p = 1;

                if (to_p == max) return -5;
                if (from_p == max) return -2 - get.population(toidentity);
                if (max >= game.players.length / 2) {
                    if (to_p <= from_p) {
                        return 0.5;
                    }
                    return 0;
                }
                if (to_p < max - 1) return 0;
                return -0.5;
            },
            rawAttitude: function (from, to) {
                if (to.identity == 'unknown' && game.players.length == 2) return -5;
                if (_status.currentPhase == from && from.ai.tempIgnore &&
                    from.ai.tempIgnore.contains(to) && to.identity == 'unknown' &&
                    (!from.storage.zhibi || !from.storage.zhibi.contains(to))) return 0;
                var difficulty = 0;
                if (to == game.me) difficulty = (2 - get.difficulty()) * 1.5;
                if (from == to) return 5 + difficulty;
                if (from.identity == to.identity && from.identity != 'unknown' && from.identity != 'guan') return 5 + difficulty;
                if (from.identity == 'unknown' && lib.character[from.name1][1] == to.identity) {
                    if (from.wontYe()) return 4 + difficulty;
                }
                var toidentity = to.identity;
                if (toidentity == 'unknown') {
                    toidentity = lib.character[to.name1][1];
                    if (get.population(toidentity) >= get.population() - 2) {
                        toidentity = 'guan';
                    }
                }
                var att = get.realAttitude(from, toidentity, difficulty);
                if (from.storage.zhibi && from.storage.zhibi.contains(to)) {
                    return att;
                }
                if (to.ai.shown >= 0.5) return att * to.ai.shown;

                var nshown = 0;
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i] != from && game.players[i].identity == 'unknown') {
                        nshown++;
                    }
                }
                if (to.ai.shown == 0) {
                    if (nshown >= game.players.length / 2 && att >= 0) {
                        return 0;
                    }
                    return Math.min(0, Math.random() - 0.5) + difficulty;
                }
                if (to.ai.shown >= 0.2) {
                    if (att > 2) {
                        return Math.max(0, Math.random() - 0.5) + difficulty;
                    }
                    if (att >= 0) {
                        return 0;
                    }
                    return Math.min(0, Math.random() - 0.7) + difficulty;
                }
                if (att > 2) {
                    return Math.max(0, Math.random() - 0.7) + difficulty;
                }
                if (att >= 0) {
                    return Math.min(0, Math.random() - 0.3) + difficulty;
                }
                return Math.min(0, Math.random() - 0.5) + difficulty;
            },
        }
    };
});