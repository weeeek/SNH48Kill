//48武将扩展包，适用于身份场
'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        character: {
            //S
            SNH48Gchenguanhui: ['female', 'S', 4, ['biyue', 'guidao']],
            SNH48Gchengjue: ['female', 'S', 4, ['biyue', 'guidao']],
            SNH48Gchensi: ['female', 'S', 4, ['jingwu', 'tianyin']],
            SNH48Gdaimeng: ['female', 'S', 4, ['dandang', 'jianyi', 'lingjun'], ['zhu']],
            SNH48Gjiangyun: ['female', 'S', 3, ['leiji', 'guidao']],
            SNH48Gkongxiaoyin: ['female', 'S', 4, ['shenhun', 'diandao', 'xinggan']],
            SNH48Glvyi: ['female', 'S', 3, ['mingce', 'longdan']],
            SNH48Gliyuqi: ['female', 'S', 3, ['zhanwu', 'quanneng']],
            SNH48Gliuzengyan: ['female', 'S', 3, ['mingce', 'longdan']],
            SNH48Gmohan: ['female', 'S', 3, ['shiyu', 'yuyan', 'ziqiang'], ['zhu']],
            SNH48Gqianbeiting: ['female', 'S', 4, ['chongzhen', 'longdan']],
            SNH48Gqiuxinyi: ['female', 'S', 4, ['chongzhen', 'longdan']],
            SNH48Gsunrui: ['female', 'S', 4, ['gaoshi', 'letian']],
            SNH48Gshaoxuecong: ['female', 'S', 4, ['tiaoxin', 'tiandu']],
            SNH48Gwenjingjie: ['female', 'S', 4, ['zaiqi']],
            SNH48Gwuzhehan: ['female', 'S', 3, ['qianxun', 'qixi']],
            SNH48Gxuchenchen: ['female', 'S', 3, ['tianlai', 'kuaihuo']],
            SNH48Gxujiaqi: ['female', 'S', 3, ['luoshen', 'biyue']],
            SNH48Gxuyiren: ['female', 'S', 3, ['luoshen', 'biyue']],
            SNH48Gxuzixuan: ['female', 'S', 4, ['jianxiong']],
            SNH48Gyuandanni: ['female', 'S', 4, ['guicai', 'yiji']],
            SNH48Gyuanyuzhen: ['female', 'S', 4, ['duanliang']],
            SNH48Gzhangyuge: ['female', 'S', 4, ['duanchang', 'weimu']],

            SNH48Gzhaojiamin: ['female', 'S', 3, ['fankui', 'tiandu']],

            //N
            SNH48Gchenjiaying: ['female', 'N', 3, ['zhiheng']],
            SNH48Gchenwenyan: ['female', 'N', 3, ['zhiheng']],
            SNH48Gfengxinduo: ['female', 'N', 3, ['zhiheng']],
            SNH48Gguoqianyun: ['female', 'N', 3, ['zhiheng']],
            SNH48Ghuangtingting: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Ghaowanqing: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Ghexiaoyu: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gjinyingyue: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gjiangzhenyi: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gliujuzi: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gliupeixin: ['female', 'N', 3, ['rende', 'yingzi']],
            SNH48Gluting: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gtaoboer: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gxieni: ['female', 'N', 3, ['biyue', 'neidou']],
            SNH48Gyijiaai: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhaoyue: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhangyi: ['female', 'N', 3, ['duwu', 'mashu']],
            SNH48Gzhangyuxin: ['female', 'N', 3, ['duwu', 'mashu']],

            SNH48Gjujingyi: ['female', 'N', 3, ['liuli', 'lianying']],

            //H
            SNH48Gfeiqinyuan: ['female', 'H', 4, ['yuanqi', 'fengfa']],
            SNH48Ghongpeiyun: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Gjiangshan: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Gjiangshuting: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Glijiaen: ['female', 'H', 4, ['jiang', 'luanji']],
            SNH48Glinnan: ['female', 'H', 4, ['jiang', 'biyue']],
            SNH48Glinsiyi: ['female', 'H', 3, ['luoshen', 'qingguo']],
            SNH48Gliyitong: ['female', 'H', 3, ['kurou', 'neidou']],
            SNH48Gqiyuzhu: ['female', 'H', 3, ['kurou', 'biyue']],
            SNH48Gshenmengyao: ['female', 'H', 3, ['luoshen', 'qingguo']],
            SNH48Gsongyushan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gsunzhenni: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gwanlina: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gwangyi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxuhan: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxiongqinxian: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gxuyangyuzhuo: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyanghuiting: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyujiayi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gyuanyiqi: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gzhangxin: ['female', 'H', 3, ['paoxiao', 'longdan']],
            SNH48Gzengxiaowen: ['female', 'H', 3, ['paoxiao', 'longdan']],

            SNH48Gliujiongran: ['female', 'H', 3, ['luoshen', 'biyue']],
            //X
            SNH48Gchenlin: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gchenyunling: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gfengxiaofei: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Glizhao: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gpanyingqi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gqijing: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gsongxinran: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gsunxinwen: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangjialing: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangshu: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gwangxiaojia: ['female', 'X', 4, ['zhanbu', 'yezhan']],
            SNH48Gxushiqi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gxietianyi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gyangbingyi: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gyangyunyu: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gzhangdansan: ['female', 'X', 4, ['wushuang', 'mashu']],
            SNH48Gzhangjiayu: ['female', 'X', 4, ['wushuang', 'mashu']],

            SNH48Glijing: ['female', 'X', 4, ['guanxing', 'danlao']],

            SNH48Gwangzijie: ['male', 'ye', 2, ['longdan', 'chongzhen', 'paoxiao', 'jiang', 'linglong']],
            SNH48Gaji: ['male', 'ye', 2, ['buqu', 'yingzi', 'kuaihuo', 'yiji', 'jizhi']],
            SNH48Gyegou: ['male', 'ye', 2, ['zhiheng', 'paoxiao', 'wansha', 'weimu', 'luanwu']],
            SNH48Gmulaosi: ['female', 'ye', 2, ['biyue', 'tiaoxin', 'xiaoji', 'liuli', 'ziqiang']],
            SNH48Gpiggyrae: ['female', 'ye', 2, ['luoshen', 'luandance', 'qingguo', 'fankui', 'leiji']],


            shibing1wei: ['male', 'S', 0, [], ['unseen']],
            shibing2wei: ['female', 'S', 0, [], ['unseen']],
            shibing1shu: ['male', 'H', 0, [], ['unseen']],
            shibing2shu: ['female', 'H', 0, [], ['unseen']],
            shibing1wu: ['male', 'X', 0, [], ['unseen']],
            shibing2wu: ['female', 'X', 0, [], ['unseen']],
            shibing1qun: ['male', 'qun', 0, [], ['unseen']],
            shibing2qun: ['female', 'qun', 0, [], ['unseen']],
            shibing1ye: ['male', 'N', 0, [], ['unseen']],
            shibing2ye: ['female', 'N', 0, [], ['unseen']],
        },
        characterIntro: {
            //S
            SNH48Gchenguanhui: 'SNH48 Team SII 成员，SNH48一期生。很少有人知道如今的人妻艾在当初也曾是S队的标准男役担当。温婉是一个标准的纯防御技能，体现着小艾不欲与人争锋的性格特点。而偶尔腹黑的一面，不仅能跟队友形成微妙的联动，还能有力的回击来自外界的恶意',
            SNH48Gchengjue: 'SNH48 Team SII 预备成员，SNH48六期生',
            SNH48Gchensi: 'SNH48 Team SII 成员，SNH48一期生。教练是早期的最强者，也是队内的小天使。在面对有恶意的人时，教练会以强大的武力回击来保护自己的队友。同时，即使自身的经历并不美好，教练仍然对这个世界抱有期待，在各种不被人注意的时候总能看到其暖心的一面。',
            SNH48Gdaimeng: 'SNH48 Team SII 队长，SNH48一期生。全队的领军人物，也是队里的家长般的存在。作为主公坚毅提供了一定的防护能力，担当虽然属性上更适合忠臣，但是能够体恤忠臣的付出更显王道本色，领军意味着只要队友不死，就能依靠队友的支持一次次重新站起，体现出了TEAM SII的诚挚团结之意。',
            SNH48Gjiangyun: 'SNH48 Team SII 成员，古风大佬，SNH48二期生',
            SNH48Gkongxiaoyin: 'SNH48 Team SII 性感成员，SNH48一期生。小孔是一个十分有趣的人，既是全团最拽也是队内总欺，温柔大方的她所在之处一定不会缺少欢乐。神魂颠倒是小孔的成名曲，神魂也是小孔的精髓所在，提高手牌上限能加强蓄爆能力，而颠倒则赋予了回合外的反制能力以及加快音符数的累积。音符是小孔家粉丝的昵称，觉醒后的小孔会跟自己的粉丝共同进退，赢得最终的胜利',
            SNH48Glvyi: 'SNH48 Team SII 成员，SNH48七期生',
            SNH48Gliyuqi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gliuzengyan: 'SNH48 Team SII 成员，SNH48五期生',
            SNH48Gmohan: 'SNH48 Team SII 副队长，SNH48一期生。莫寒是一个表面无害实则刚强的人，回合内依靠食欲进行续航与爆发，回合外以预言保证手牌量不会过低，也会让敌人因为判定牌而随时改变战术。觉醒后的大魔王更加强大，不仅血量增加还拥有了回合外的强输出能力，凸显了于危难中接任队长时莫莫的魄力和强势。',
            SNH48Gqianbeiting: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gqiuxinyi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gsunrui: 'SNH48 Team SII 成员，生日公演专用“男”嘉宾，SNH48二期生',
            SNH48Gshaoxuecong: 'SNH48 Team SII 成员，SNH48四期生',
            SNH48Gwenjingjie: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gwuzhehan: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxuchenchen: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxujiaqi: 'SNH48 Team SII 成员，SNH48一期生',
            SNH48Gxuyiren: 'SNH48 Team SII 成员，SNH48三期生',
            SNH48Gxuzixuan: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gyuandanni: 'SNH48 Team SII 成员，SNH48三期生',
            SNH48Gyuanyuzhen: 'SNH48 Team SII 成员，SNH48二期生',
            SNH48Gzhangyuge: 'SNH48 Team SII 成员，SNH48一期生',

            SNH48Gzhaojiamin: 'SNH48 Team SII 成员，SNH48一期生',

            //N
            SNH48Gchenjiaying: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gchenwenyan: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gfengxinduo: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gguoqianyun: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Ghuangtingting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Ghaowanqing: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Ghexiaoyu: 'SNH48 Team NII 副队长，SNH48二期生',
            SNH48Gjinyingyue: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gjiangzhenyi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliujuzi: 'SNH48 Team NII 成员，SNH48七期生',
            SNH48Gliupeixin: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gluting: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gtaoboer: 'SNH48 Team NII 成员，SNH48八期生',
            SNH48Gxieni: 'SNH48 Team NII 成员，SNH48三期生',
            SNH48Gyijiaai: 'SNH48 Team NII 队长，SNH48二期生',
            SNH48Gzhaoyue: 'SNH48 Team NII 成员，SNH48二期生',
            SNH48Gzhangyi: 'SNH48 Team NII 成员，SNH48五期生',
            SNH48Gzhangyuxin: 'SNH48 Team NII 成员，SNH48三期生',

            SNH48Gjujingyi: '明星殿堂 成员，SNH48二期生',

            //H
            SNH48Gfeiqinyuan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Ghongpeiyun: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gjiangshuting: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Glijiaen: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Glinnan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Glinsiyi: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gliyitong: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gqiyuzhu: 'SNH48 Team HII 成员，SNH48十期生',
            SNH48Gshenmengyao: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gsongyushan: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gsunzhenni: 'SNH48 Team HII 成员，SNH48六期生',
            SNH48Gwanlina: 'SNH48 Team HII 成员，SNH48二期生',
            SNH48Gwangyi: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuhan: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gxiongqinxian: 'SNH48 Team HII 成员，SNH48八期生',
            SNH48Gxuyangyuzhuo: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyanghuiting: 'SNH48 Team HII 成员，SNH48三期生',
            SNH48Gyujiayi: 'SNH48 Team HII 成员，SNH48五期生',
            SNH48Gyuanyiqi: 'SNH48 Team HII 成员，SNH48七期生',
            SNH48Gzhangxin: 'SNH48 Team HII 副队长，SNH48三期生',
            SNH48Gzengxiaowen: 'SNH48 Team HII 成员，SNH48七期生',

            SNH48Gliujiongran: '现CKG48 Team K 成员，SNH48三期生',

            //X
            SNH48Gchenlin: 'Team X 成员，SNH48四期生',
            SNH48Gchenyunling: 'Team X 成员，SNH48五期生',
            SNH48Gfengxiaofei: 'SNH48 Team X 成员，SNH48四期生，曾经是著名SNH48黑，OLD48法人',
            SNH48Glizhao: 'Team X 队长，SNH48四期生',
            SNH48Gpanyingqi: 'Team X 成员，SNH48五期生',
            SNH48Gqijing: 'Team X 成员，SNH48七期生',
            SNH48Gsongxinran: 'Team X 成员，SNH48四期生',
            SNH48Gsunxinwen: 'Team X 成员，SNH48四期生',
            SNH48Gwangjialing: 'Team X 成员，SNH48四期生',
            SNH48Gwangshu: 'Team X 成员，SNH48四期生',
            SNH48Gwangxiaojia: 'Team X 成员，SNH48四期生',
            SNH48Gxushiqi: 'Team X 成员，SNH48七期生',
            SNH48Gxietianyi: 'Team X 成员，SNH48四期生',
            SNH48Gyangbingyi: 'Team X 副队长，SNH48四期生',
            SNH48Gyangyunyu: 'Team X 成员，SNH48四期生',
            SNH48Gzhangdansan: 'Team X 成员，SNH48四期生',
            SNH48Gzhangjiayu: 'Team X 成员，SNH48七期生',

            SNH48Glijing: 'Team X 前队长，SNH48四期生',

            SNH48Gwangzijie: '王靖，上海丝芭文化传媒集团有限公司董事长。',
            SNH48Gaji: '张竞，前SNH48剧场发言人。',
            SNH48Gyegou: '叶盛，上海丝芭文化传媒集团有限公司“艺术总监”。',
            SNH48Gmulaosi: '棒槌女郎，上海丝芭文化传媒集团有限公司舞蹈总监。',
            SNH48Gpiggyrae: '朱小希，SNH48G Team SII的舞蹈老师'
        },
        characterFilter: {
            SNH48G: function (mode) {
                return mode != 'SNH48G';
            }
        },
        skill: {
            shaDisabled: { mod: { cardEnabled: function (card) { return card.name != 'sha' } } },
            shanDisabled: { mod: { cardEnabled: function (card) { return card.name != 'shan' } } },
            basicDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'basic' } } },
            triggerDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'trigger' } } },
            equipDisabled: { mod: { cardEnabled: function (card) { return get.type(card) != 'equip'; } } },
            fengfa: {
                audio: 2,
                enable: 'phaseUse',
                viewAs: { name: 'wanjian' },
                filterCard: function (card, player) {
                    if (ui.selected.cards.length) {
                        return get.suit(card) == get.suit(ui.selected.cards[0]);
                    }
                    var cards = player.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (card != cards[i]) {
                            if (get.suit(card) == get.suit(cards[i])) return true;
                        }
                    }
                    return false;
                },
                selectCard: 2,
                complexCard: true,
                check: function (card) {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return player.canUse('wanjian', current);
                    });
                    var num = 0;
                    for (var i = 0; i < targets.length; i++) {
                        var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                        if (targets[i].hp == 1) {
                            eff *= 1.5;
                        }
                        num += eff;
                    }
                    if (!player.needsToDiscard(-1)) {
                        if (targets.length >= 7) {
                            if (num < 2) return 0;
                        }
                        else if (targets.length >= 5) {
                            if (num < 1.5) return 0;
                        }
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    basic: {
                        order: 10
                    }
                }
            },
            gaoshi: {
                audio: 4,
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                },
                content: function () {
                    "step 0"
                    target.chooseToUse({ name: 'sha' }, player, -1, '挑衅：对' + get.translation(player) + '使用一张杀，或令其弃置你的一张牌').set('targetRequired', true);
                    "step 1"
                    if (result.bool == false && target.countCards('he') > 0) {
                        player.discardPlayerCard(target, 'he', true);
                    }
                    else {
                        event.finish();
                    }
                },
                ai: {
                    order: 4,
                    expose: 0.2,
                    result: {
                        target: -1,
                        player: function (player, target) {
                            if (target.countCards('h') == 0) return 0;
                            if (target.countCards('h') == 1) return -0.1;
                            if (player.hp <= 2) return -2;
                            if (player.countCards('h', 'shan') == 0) return -1;
                            return -0.5;
                        }
                    },
                    threaten: 1.1
                }
            },
            modi: {
                mod: {
                    globalTo: function (from, to, distance) {
                        return distance + 1;
                    }
                }
            },
            zhanwu: {
                enable: 'phaseUse',
                usable: 1,
                audio: 2,
                position: 'he',
                filterCard: function (card) {
                    return card.name == 'sha' || get.type(card) == 'equip';
                },
                filter: function (event, player) {
                    return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
                },
                check: function (card) { return 8 - get.value(card) },
                selectTarget: 2,
                multitarget: true,
                discard: false,
                targetprompt: ['得到牌', '出杀目标'],
                prepare: 'give',
                filterTarget: function (card, player, target) {
                    if (ui.selected.targets.length == 0) {
                        return player != target;
                    }
                    else {
                        return lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
                    }
                },
                content: function () {
                    "step 0"
                    targets[0].gain(cards, player);
                    "step 1"
                    targets[0].chooseControl('draw_card', '出杀', function () {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                            return 1;
                        }
                        return 0;
                    }).set('target', targets[1]).set('prompt', '对' + get.translation(targets[1]) + '使用一张杀，或摸一张牌');
                    "step 2"
                    if (result.control == 'draw_card') {
                        targets[0].draw();
                    }
                    else {
                        targets[0].useCard({ name: 'sha' }, targets[1]);
                    }
                },
                ai: {
                    result: {
                        player: function (player) {
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                        target: function (player, target) {
                            if (ui.selected.targets.length) {
                                return -0.1;
                            }
                            return 1;
                        }
                    },
                    order: 8.5,
                    expose: 0.2
                }
            },
            kuaihuo: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                direct: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'h') return true;
                    }
                    return false;
                },
                content: function () {
                    "step 0"
                    var num = 0;
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if (trigger.cards[i].original == 'h') num++;
                    }
                    player.chooseTarget('选择发动连营的目标', [1, num]).ai = function (target) {
                        var player = _status.event.player;
                        if (player == target) return get.attitude(player, target) + 10;
                        return get.attitude(player, target);
                    }
                    "step 1"
                    if (result.bool) {
                        player.logSkill('relianying', result.targets);
                        game.asyncDraw(result.targets);
                    }
                },
                ai: {
                    threaten: 0.8,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                        }
                    },
                    noh: true,
                }
            },
            letian: {
                audio: 2,
                trigger: { player: 'judgeEnd' },
                frequent: function (event) {
                    if (event.result.card.name == 'du') return false;
                    if (get.mode() == 'guozhan') return false;
                    return true;
                },
                check: function (event) {
                    if (event.result.card.name == 'du') return false;
                    return true;
                },
                filter: function (event, player) {
                    if (get.owner(event.result.card)) {
                        return false;
                    }
                    if (event.nogain && event.nogain(event.result.card)) {
                        return false;
                    }
                    return true;
                },
                content: function () {
                    player.gain(trigger.result.card);
                    player.$gain2(trigger.result.card);
                }
            },
            quanneng: {
                group: ['longdan_sha', 'longdan_shan', 'longdan_draw'],
                subSkill: {
                    draw: {
                        trigger: { player: ['useCard', 'respond'] },
                        forced: true,
                        popup: false,
                        filter: function (event, player) {
                            if (!get.zhu(player, 'shouyue')) return false;
                            return event.skill == 'longdan_sha' || event.skill == 'longdan_shan';
                        },
                        content: function () {
                            player.draw();
                            player.storage.fanghun2++;
                        }
                    },
                    sha: {
                        audio: 2,
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard: { name: 'shan' },
                        viewAs: { name: 'sha' },
                        viewAsFilter: function (player) {
                            if (!player.countCards('h', 'shan')) return false;
                        },
                        prompt: '将一张闪当杀使用或打出',
                        check: function () { return 1 },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                }
                            },
                            respondSha: true,
                            skillTagFilter: function (player) {
                                if (!player.countCards('h', 'shan')) return false;
                            },
                            order: function () {
                                return get.order({ name: 'sha' }) + 0.1;
                            },
                            useful: -1,
                            value: -1
                        }
                    },
                    shan: {
                        audio: 2,
                        enable: ['chooseToRespond'],
                        filterCard: { name: 'sha' },
                        viewAs: { name: 'shan' },
                        prompt: '将一张杀当闪打出',
                        check: function () { return 1 },
                        viewAsFilter: function (player) {
                            if (!player.countCards('h', 'sha')) return false;
                        },
                        ai: {
                            respondShan: true,
                            skillTagFilter: function (player) {
                                if (!player.countCards('h', 'sha')) return false;
                            },
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                }
                            },
                            order: 4,
                            useful: -1,
                            value: -1
                        }
                    }
                }
            },
            tianlai: {
                audio: 2,
                audioname: ['boss_qinglong'],
                trigger: { player: 'respond' },
                filter: function (event, player) {
                    return event.card.name == 'shan';
                },
                direct: true,
                content: function () {
                    "step 0";
                    player.chooseTarget(get.prompt('tianlai')).ai = function (target) {
                        if (target.hasSkill('hongyan')) return 0;
                        return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                    };
                    "step 1"
                    if (result.bool) {
                        player.logSkill('tianlai', result.targets, 'thunder');
                        event.target = result.targets[0];
                        event.target.judge(function (card) {
                            var suit = get.suit(card);
                            if (suit == 'spade') return -4;
                            if (suit == 'club') return -2;
                            return 0;
                        });
                    }
                    else {
                        event.finish();
                    }
                    "step 2"
                    if (result.suit == 'club') {
                        event.target.damage('thunder');
                        player.recover();
                    }
                    else if (result.suit == 'spade') {
                        event.target.damage(2, 'thunder');
                    }
                },
                ai: {
                    useShan: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan')) {
                                var hastarget = game.hasPlayer(function (current) {
                                    return get.attitude(target, current) < 0;
                                });
                                var be = target.countCards('e', { color: 'black' });
                                if (target.countCards('h', 'shan') && be) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                    if (!target.hasSkill('guidao')) return 0;
                                    return [0, hastarget ? target.countCards('h') / 4 : 0];
                                }
                                if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                    return [0, 0];
                                }
                                if (target.countCards('h') == 0) {
                                    return [1.5, 0];
                                }
                                if (target.countCards('h') == 1 && !be) {
                                    return [1.2, 0];
                                }
                                if (!target.hasSkill('guidao')) return [1, 0.05];
                                return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                            }
                        }
                    }
                }
            },
            yezhan: {
                priority: 9,
                audio: 2,
                filter: function (event, player) {
                    return event.player != player && get.type(event.card) == 'trick' && event.targets && event.targets.length > 1;
                },
                check: function (event, player) {
                    return get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                trigger: { target: 'useCardToBefore' },
                content: function () {
                    trigger.cancel();
                    player.draw();
                },
                ai: {
                    effect: {
                        target: function (card) {
                            if (get.type(card) != 'trick') return;
                            if (card.name == 'tiesuo') return [0, 0];
                            if (card.name == 'yihuajiemu') return [0, 1];
                            if (get.tag(card, 'multineg')) return [0, 2];
                        }
                    }
                }
            },
            yuanqi: {
                audio: 2,
                trigger: { player: ['shaBefore', 'juedouBefore'], target: ['shaBefore', 'juedouBefore'] },
                filter: function (event, player) {
                    if (event.card.name == 'juedou') return true;
                    return get.color(event.card) == 'red';
                },
                frequent: true,
                content: function () {
                    player.draw();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                        },
                        player: function (card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                        }
                    }
                }
            },
            zhanbu: {
                audio: 2,
                audioname: ['jiangwei'],
                trigger: { player: 'phaseBegin' },
                frequent: true,
                content: function () {
                    'step 0'
                    event.num = Math.min(5, game.countPlayer());
                    event.cards = get.cards(event.num);
                    event.chosen = [];
                    'step 1'
                    var js = player.getCards('j');
                    var pos;
                    var choice = -1;
                    var getval = function (card, pos) {
                        if (js[pos]) {
                            return (get.judge(js[pos]))(card);
                        }
                        else {
                            return get.value(card);
                        }
                    };
                    for (pos = 0; pos < Math.min(event.cards.length, js.length + 2) ; pos++) {
                        var max = getval(event.cards[pos], pos);
                        for (var j = pos + 1; j < event.cards.length; j++) {
                            var current = getval(event.cards[j], pos);
                            if (current > max) {
                                choice = j;
                                max = current;
                            }
                        }
                        if (choice != -1) {
                            break;
                        }
                    }
                    player.chooseCardButton('观星：选择要移动的牌', event.cards).set('filterButton', function (button) {
                        return !_status.event.chosen.contains(button.link);
                    }).set('chosen', event.chosen).set('ai', function (button) {
                        return button.link == _status.event.choice ? 1 : 0;
                    }).set('choice', event.cards[choice]);
                    event.pos = pos;
                    'step 2'
                    if (result.bool) {
                        var card = result.links[0];
                        var index = event.cards.indexOf(card);
                        event.card = card;
                        event.chosen.push(card);
                        event.cards.remove(event.card);
                        var buttons = event.cards.slice(0);
                        player.chooseControl(function () {
                            return _status.event.controlai;
                        }).set('controlai', event.pos || 0).set('sortcard', buttons).set('tosort', card);
                    }
                    else {
                        event.goto(4);
                    }
                    'step 3'
                    if (typeof result.index == 'number') {
                        if (result.index > event.cards.length) {
                            ui.cardPile.appendChild(event.card);
                        }
                        else {
                            event.cards.splice(result.index, 0, event.card);
                        }
                        event.num--;
                        if (event.num > 0) {
                            event.goto(1);
                        }
                    }
                    'step 4'
                    while (event.cards.length) {
                        ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                    }
                    var js = player.getCards('j');
                    if (js.length == 1) {
                        if ((get.judge(js[0]))(ui.cardPile.firstChild) < 0) {
                            player.addTempSkill('guanxing_fail');
                        }
                    }
                },
                ai: {
                    guanxing: true
                }
            },
            luandance: {
                audio: 2,
                unique: true,
                enable: 'phaseUse',
                filterTarget: function (card, player, target) {
                    if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return true;
                    else
                        return false;
                },
                filter: function (event, player) {
                    return !player.storage.luandance;
                },
                init: function (player) {
                    player.storage.luandance = false;
                },
                mark: true,
                intro: {
                    content: 'limited'
                },
                skillAnimation: 'epic',
                animationColor: 'thunder',
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                content: function () {
                    "step 0"
                    player.unmarkSkill('luandance');
                    player.storage.luandance = true;
                    event.current = player.next;
                    "step 1"
                    event.current.animate('target');
                    event.current.chooseToUse('乱舞：使用一张杀或受到一点伤害', { name: 'sha' }, function (card, player, target) {
                        if (player == target) return false;
                        if (!player.canUse('sha', target)) return false;
                        if (get.distance(player, target) <= 1) return true;
                        if (game.hasPlayer(function (current) {
                            return current != player && get.distance(player, current) < get.distance(player, target);
                        })) {
                            return false;
                        }
                        return true;
                    });
                    "step 2"
                    if (result.bool == false)
                        event.current.damage(player);
                    if (event.current.next != player) {
                        event.current = event.current.next;
                        game.delay(0.5);
                        event.goto(1);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: function (player) {
                            if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                            }
                            var num = 0;
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                var att = get.attitude(player, players[i]);
                                if (att > 0) att = 1;
                                if (att < 0) att = -1;
                                if (players[i] != player && players[i].hp <= 3) {
                                    if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                    else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                    else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                }
                                if (players[i].hp == 1) num += att * 1.5;
                            }
                            if (player.hp == 1) {
                                return -num;
                            }
                            if (player.hp == 2) {
                                return -game.players.length / 4 - num;
                            }
                            return -game.players.length / 3 - num;
                        }
                    }
                }
            },

            //北极瑞风HZYQ   定义的技能
            //戴萌
            dandang: {
                trigger: { global: 'useCardToBefore' },
                direct: true,
                priority: 5,
                prompt: '弃一张牌并将该杀的目标转移至你身上',
                //触发时机
                filter: function (event, player) {
                    //你不是来源，且不是目标
                    if (player == event.target || player == event.player) return false;
                    //有手牌
                    if (!player.countCards('he')) return false;
                    //目标是唯一目标
                    if (event.targets.length > 1) return false;
                    //有目标
                    if (!event.target) return false;

                    //目标在你的攻击距离内
                    var inRange = function () {
                        return get.distance(player, event.target, 'attack') <= 1;
                    }
                    var card = event.card;

                    //杀
                    if (card.name == 'sha') return inRange();
                    //黑色锦囊
                    //if (get.color(card) == 'black' && get.type(card) == 'trick') return inRange();
                    return false;
                },
                content: function () {
                    "step 0"
                    var save = false;
                    if (get.attitude(player, trigger.target) > 2) {
                        if (trigger.card.name == 'sha') {
                            if (player.countCards('h', 'shan') || player.getEquip(2) ||
                                trigger.target.hp == 1 || player.hp > trigger.target.hp + 1) {
                                if (!trigger.target.countCards('h', 'shan') || trigger.target.countCards('h') < player.countCards('h')) {
                                    save = true;
                                }
                            }
                        }
                    }
                    var next = player.chooseToDiscard('he', get.prompt('dandang'));

                    next.logSkill = ['dandang', trigger.target];
                    next.set('ai', function (card) {
                        if (_status.event.aisave) {
                            return 7 - get.value(card);
                        }
                        return 0;
                    });
                    next.set('aisave', save);
                    "step 1"
                    if (result.bool) {
                        //转移目标
                        trigger.target = player;
                        trigger.targets.length = 0;
                        trigger.targets.push(player);
                        trigger.untrigger();
                        trigger.trigger('useCardToBefore');
                        trigger.trigger(trigger.card.name + 'Before');
                        trigger.player.line(player);
                    }
                    game.delay();
                },
                ai: {
                    threaten: 1.1
                }
            },
            jianyi: {
                audio: true,
                trigger: { player: 'damageBegin' },
                direct: true,
                prompt: '弃置一张手牌，否则伤害-1',
                filter: function (event, player) {
                    //有伤害来源，且不是自己，才能触发这个技能
                    return (event.source && event.source != player);
                },
                content: function (event) {
                    "step 0"
                    if (trigger.source) {
                        trigger.source.chooseToDiscard('he', '弃置一张牌，否则造成伤害-1').set('ai', function (card) {
                            //忠主互相造成的伤害直接触发不弃牌，造成伤害-1
                            //反与反互相造成的伤害直接触发不弃牌，造成伤害-1
                            if (trigger.source.identity == 'zhong' && player.identity == 'zhu' ||
                                trigger.source.identity == 'mingzhong' && player.identity == 'mingzhu' ||
                                trigger.source.identity == 'zhu' && player.identity == 'zhong' ||
                                trigger.source.identity == 'mingzhu' && player.identity == 'mingzhong' ||
                                trigger.source.identity == 'fan' && player.identity == 'fan' ||
                                trigger.source.identity == 'mingfan' && player.identity == 'mingfan'
                            )
                                return 0;

                            else
                                return 7 - get.value(card);
                        });
                    }
                    "step 1"
                    if (!result.bool) {
                        trigger.num--;
                    }
                },
                ai: {
                    expose: 0.2,
                    threaten: 1.5
                }
            },
            lingjun: {
                //救援的代码
                audio: 2,
                unique: true,
                trigger: { target: 'taoBegin' },
                zhuSkill: true,
                forced: true,
                filter: function (event, player) {
                    //自己对自己不触发
                    if (event.player == player) return false;
                    //没有领军主公技不触发
                    if (!player.hasZhuSkill('lingjun')) return false;
                    //主公体力大于0不触发
                    if (player.hp > 0) return false;
                    //当前势力不是主公势力不触发
                    if (event.player.group != player.group) return false;
                    return true;
                },
                content: function (event, target) {
                    player.recover();
                    trigger.player.draw();
                }
            },
            //莫寒
            shiyu: {
                audio: 2,
                trigger: { source: 'damageEnd' },
                filter: function (event, player) {
                    if (event._notrigger.contains(event.player)) return false;
                    return (event.card && event.card.name == 'sha' &&
                        event.player.classList.contains('dead') == false &&
                        event.player.countCards('h') && player.countCards('h')) && event.player != player;
                },
                check: function (event, player) {
                    return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
                },
                priority: 5,
                content: function () {
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if (result.bool && trigger.player.countCards('he')) {
                        player.gainPlayerCard(trigger.player, true, 'he');
                        player.draw();
                    }
                },
            },
            yuyan: {
                audio: 2,
                trigger: { player: 'loseEnd' },
                frequent: true,
                filter: function (event, player) {
                    if (player == _status.currentPhase) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original && event.cards[i].original != 'j') return true;
                    }
                    return false;
                },
                content: function () {
                    "step 0"
                    player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                        switch (Math.floor(Math.random() * 6)) {
                            case 0: return 'heart2';
                            case 1:
                            case 4:
                            case 5: return 'diamond2';
                            case 2: return 'club2';
                            case 3: return 'spade2';
                        }
                    });
                    "step 1"
                    game.log(player, '选择了' + get.translation(result.control));
                    "step 2"
                    player.judge(function (card) {
                        //猜中
                        if ((get.suit(card) + '2') == result.control)
                            return 1;
                        return -1;
                    })
                    "step 3"
                    if (result.bool) {
                        //摸一张牌
                        //player.draw();
                        //获得判定牌
                        player.gain(result.card);
                        player.$gain2(result.card);
                    }
                },
                ai: {
                    threaten: function (player, target) {
                        if (target.countCards('h') == 0) return 2;
                        return 0.5;
                    },
                    nodiscard: true,
                    nolose: true
                }
            },
            ziqiang: {
                skillAnimation: true,
                audio: 2,
                unique: true,
                zhuSkill: true,
                keepSkill: true,
                derivation: 'mowang',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasZhuSkill('ziqiang')) return false;
                    if (player.storage.ziqiang) return false;
                    return player.isMinHp();
                },
                content: function () {
                    player.storage.ziqiang = true;
                    player.maxHp++;
                    player.update();
                    player.recover();
                    if (player.hasSkill('ziqiang')) {
                        //失去技能“预言”
                        //player.unmarkSkill('yuyan');
                        player.addSkill('mowang');
                    }
                    else {
                        player.addAdditionalSkill('ziqiang', 'mowang');
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_ziqiang = ['mowang'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('ziqiang');
                }
            },
            mowang: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return (event.source != undefined);
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                logTarget: 'source',
                content: function () {
                    'step 0'
                    trigger.source.chooseCard('he', [0, player.maxHp - player.hp], '魔王：你将受到' + (player.maxHp - player.hp) + '点伤害，你可弃置0~' + (player.maxHp - player.hp) + '张牌，每弃置一张，减少1点伤害', true).set('ai', function (card) {
                        if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
                            return 7 - get.value(card);
                        }
                        return -get.value(card);
                    });

                    'step 1'
                    if (result.bool)
                        trigger.source.damage(player.maxHp - player.hp - result.cards.length);
                    else
                        trigger.source.damage(player.maxHp - player.hp);
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target: function (card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            return 0.8;
                            // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                        }
                    }
                }
            },
            //陈思
            jingwu: {
                audio: 2,
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('h') > 0;
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function () {
                    if (player.hp % 2 == 1) {
                        player.addTempSkill('jingwu2');
                    }
                    else {
                        //体力值为双数：无视防具且能弃置对方一张牌。
                        console.log(player.name + ' add skill jingwu3，体力值为双数，无视防具且可额外使用1个杀。')
                        player.addTempSkill('jingwu3');
                    }
                },
                ai: {
                    order: function (name, player) {
                        var cards = player.getCards('h');
                        if (player.countCards('h', 'sha') == 0) {
                            return 1;
                        }
                        for (var i = 0; i < cards.length; i++) {
                            if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
                                return 9;
                            }
                        }
                        return get.order({ name: 'sha' }) - 1;
                    },
                    result: {
                        player: function (player) {
                            if (player.countCards('h', 'sha') > 0) return 0;
                            var num = player.countCards('h');
                            if (num > player.hp) return 0;
                            if (num == 1) return -2;
                            if (num == 2) return -1;
                            return -0.7;
                        },
                        target: function (player, target) {
                            var num = target.countCards('h');
                            if (num == 1) return -1;
                            if (num == 2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten: 1.3
                }
            },
            jingwu2: {
                mod: {
                    //无视距离
                    targetInRange: function (card, player, target, now) {
                        return true;
                    },
                    //无限杀
                    //cardUsable: function (card, player, num) {
                    //    if (card.name == 'sha') return Infinity;
                    //}
                    //杀额外指定1个目标
                    selectTarget: function (card, player, range) {
                        if (card.name != 'sha') return;
                        if (range[1] == -1) return;
                        var cards = player.getCards('h');
                        //检查是否是最后一张手牌
                        //for (var i = 0; i < cards.length; i++) {
                        //    if (cards[i].classList.contains('selected') == false)
                        //        return;
                        //}
                        range[1] += 1;
                    }
                }
            },
            jingwu3: {
                mod: {
                    //额外使用1个杀
                    cardUsable: function (card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    }
                },
                ai: {
                    //无视防具
                    unequip: true
                }
            },
            tianyin: {
                audio: 2,
                trigger: { player: 'phaseDrawBegin' },
                filterCard: function (card) {
                    //使用红色牌
                    return get.color(card) == 'red';
                },
                filterTarget: function (card, player, target) {
                    //目标有损失体力
                    if (target.hp >= target.maxHp) return false;
                    return true;
                },
                content: function () {
                    'step 0'
                    player.chooseToDiscard(get.prompt('tianyin'), '弃置一张红色手牌，使一个角色回复1点体力', function (card) {
                        return get.color(card) == 'red';
                    }).set('ai', function (target) {
                        return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                    });
                    'step 1'
                    if (result.bool)
                        player.chooseTarget(get.prompt('tianyin'), '使其回复1点体力', function (card, player, target) {
                            return target.hp < target.maxHp;
                        }).set('ai', function (target) {
                            return target.hp < target.maxHp;
                        })
                    else
                        event.finish;
                    'step 2'
                    //回复一点体力

                    if (result.bool) {
                        player.line(result.targets[0], 'green');

                        result.targets[0].recover();
                        //添加不能使用杀的锁定技
                        player.addTempSkill('shaDisabled');
                    }
                    else
                        event.finish;
                },
                ai: {
                    order: 9,
                    result: {
                        target: function (player, target) {
                            if (target.hp == 1) return 5;
                            if (player == target && player.countCards('h') > player.hp) return 5;
                            return 2;
                        }
                    },
                    threaten: 2
                }
            },
            wenwan: {
                audio: 2,
                trigger: { player: 'respond' },
                filter: function (event, player) {
                    return event.card.name == 'shan';
                },
                direct: true,
                content: function (player, target, event) {
                    if (player.hp % 2 == 1) {
                        console.log("来源：" + event.source.name);

                        //体力值为单数：结算后可强制伤害来源结束出牌阶段；
                        //雷击代码
                        //"step 0";
                        //player.chooseTarget(get.prompt('leiji')).ai = function (target) {
                        //    if (target.hasSkill('hongyan')) return 0;
                        //    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                        //};
                        //"step 1"
                        //if (result.bool) {
                        //    player.logSkill('leiji', result.targets, 'thunder');
                        //    event.target = result.targets[0];
                        //    event.target.judge(function (card) {
                        //        if (get.suit(card) == 'spade') return -4;
                        //        return 0;
                        //    });
                        //}
                        //else {
                        //    event.finish();
                        //}
                        //"step 2"
                        //if (result.bool == false) {
                        //    event.target.damage(2, 'thunder');
                        //}
                    } else {
                        if (target.hasSkill('qianxun')) return 0;
                        //体力值为双数：该闪结算后，视为对伤害来源使用乐不思蜀
                        //event.card.viewAs('lebu');
                    }
                },
                ai: {
                    mingzhi: false,
                    useShan: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'respondShan')) {
                                var hastarget = game.hasPlayer(function (current) {
                                    return get.attitude(target, current) < 0;
                                });
                                if (target.countCards('h', 'shan') && target.countCards('e', { suit: 'spade' })) {
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan')) {
                                    return [1, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                return [1, target.countCards('h') / 4];
                            }
                        }
                    }
                }
            },
            fuhei: {
                audio: 2,
                trigger: { player: 'phaseUseBegin' },
                enable: 'phaseUse',
                usable: 1,
                selectCard: 1,
                selectTarget: 1,
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                content: function (player, event, target) {
                    //目标受到一点伤害
                    target.damage();
                    //获得一个标记
                    player.logSkill('fuhei', target);
                    target.addSkill('fuhei_mark');
                },
                check: function (card) {
                    return 10 - get.value(card);
                },
                position: 'he',
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        player: function (player, target) {
                            if (player.hp >= target.hp) return -0.9;
                            if (player.hp <= 2) return -10;
                            return -2;
                        },
                        target: function (player, target) {
                            if (!player.getEquip(1)) {
                                if (player.hp < 2) return 0;
                                if (player.hp == 2 && target.hp >= 2) return 0;
                                if (target.hp > player.hp) return 0;
                            }
                            return get.damageEffect(target, player);
                        }
                    }
                },
                threaten: 1.3
            },
            shenhun: {
                audio: 2,
                trigger: { player: 'judgeEnd' },
                filter: function (event, player) {
                    if (get.owner(event.result.card)) {
                        return false;
                    }
                    if (event.nogain && event.nogain(event.result.card)) {
                        return false;
                    }
                    return true;
                },
                content: function () {
                    if (player.storage.shenhun == undefined)
                        player.storage.shenhun = [];
                    console.log('音符数量：'+player.storage.shenhun.length);
                    player.storage.shenhun.push(event.card);
                    player.markSkill('shenhun');
                },
                mod: {
                    maxHandcard: function (player, num) {
                        if (player.storage.shenhun == undefined)
                            player.storage.shenhun = [];
                        return num + player.storage.shenhun.length;
                    }
                }
            },
            diandao: {
                audio: 2,
                trigger: { player: 'damageEnd' },
                filter: function (event, player) {
                    return (event.source != undefined);
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                logTarget: 'source',
                content: function () {
                    "step 0"
                    player.judge();
                    "step 1"
                    //你的回合外每受到一次伤害可进行一次判定，
                    switch (get.suit(result.card)) {
                        //若结果为黑桃，伤害来源翻面；
                        case 'spade': trigger.source.turnOver(); break;
                            //若结果为方块，你摸两张牌；
                        case 'diamond': player.draw(2); break;
                            //若结果为红桃，你回复一点体力；
                        case 'heart': player.recover(); break;
                            //若结果为梅花，伤害来源弃两张牌。
                        case 'club': trigger.source.chooseToDiscard('he', 2, true); break;
                    }
                },
                ai: {
                    expose: 0.3
                }
            },
            xinggan: {
                skillAnimation: true,
                audio: 2,
                unique: true,
                keepSkill: true,
                derivation: 'meiyan',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter: function (event, player) {
                    if (!player.storage.shenhun)
                        return false;
                    console.log(player.storage.shenhun.length);
                    return player.storage.shenhun.length > player.hp;
                },
                content: function () {
                    player.storage.meiyan = true;
                    player.maxHp--;
                    player.update();
                    player.recover();
                    if (player.hasSkill('xinggan')) {
                        //失去技能“预言”
                        //player.unmarkSkill('yuyan');
                        player.addSkill('meiyan');
                    }
                    else {
                        player.addAdditionalSkill('xinggan', 'meiyan');
                    }
                    if (!player.isZhu) {
                        player.storage.zhuSkill_xinggan = ['meiyan'];
                    }
                    else {
                        event.trigger('zhuUpdate');
                    }
                    player.awakenSkill('xinggan');
                }
            },
            meiyan: {
                audio: 2,
                enable: 'phaseUse',
                filter: function(event, player) {
                    return player.storage.shenhun.length > 0;
                },
                chooseButton: {
                    dialog: function(event, player) {
                        return ui.create.dialog('美艳', player.storage.shenhun, 'hidden');
                    },
                    backup: function(links, player) {
                        return {
                            filterCard: function() { return false },
                            selectCard: -1,
                            viewAs: { name: 'lebu' },
                            cards: links,
                            onuse: function(result, player) {
                                result.cards = lib.skill[result.skill].cards;
                                var card = result.cards[0];
                                player.storage.shenhun.remove(card);
                                player.syncStorage('shenhun');
                                if (!player.storage.shenhun.length) {
                                    player.unmarkSkill('shenhun');
                                } else {
                                    player.markSkill('shenhun');
                                }
                                player.logSkill('meiyan', result.targets);
                            }
                        }
                    },
                    prompt: function(links, player) {
                        return '选择目标';
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function(player) {
                            return player.storage.shenhun.length - 1;
                        }
                    }
                }
            }
        },
        translate: {
            //S
            SNH48Gchenguanhui: '陈观慧',
            SNH48Gchengjue: '成珏',
            SNH48Gchensi: '陈思',
            SNH48Gdaimeng: '戴萌',
            SNH48Gjiangyun: '蒋芸',
            SNH48Gkongxiaoyin: '孔肖吟',
            SNH48Glvyi: '吕一',
            SNH48Gliyuqi: '李宇琪',
            SNH48Gliuzengyan: '刘增艳',
            SNH48Gmohan: '莫寒',
            SNH48Gqianbeiting: '钱蓓婷',
            SNH48Gqiuxinyi: '邱欣怡',
            SNH48Gsunrui: '孙芮',
            SNH48Gshaoxuecong: '邵雪聪',
            SNH48Gwenjingjie: '温晶婕',
            SNH48Gwuzhehan: '吴哲晗',
            SNH48Gxuchenchen: '徐晨辰',
            SNH48Gxujiaqi: '许佳琪',
            SNH48Gxuyiren: '徐伊人',
            SNH48Gxuzixuan: '徐子轩',
            SNH48Gyuandanni: '袁丹妮',
            SNH48Gyuanyuzhen: '袁雨桢',
            SNH48Gzhangyuge: '张语格',

            SNH48Gzhaojiamin: '赵嘉敏',

            //N
            SNH48Gchenjiaying: '陈佳莹',
            SNH48Gchenwenyan: '陈问言',
            SNH48Gfengxinduo: '冯薪朵',
            SNH48Gguoqianyun: '郭倩云',
            SNH48Ghuangtingting: '黄婷婷',
            SNH48Ghaowanqing: '郝婉晴',
            SNH48Ghexiaoyu: '何晓玉',
            SNH48Gjinyingyue: '金莹玥',
            SNH48Gjiangzhenyi: '江真仪',
            SNH48Gliujuzi: '刘菊子',
            SNH48Gliupeixin: '刘佩鑫',
            SNH48Gluting: '陆婷',
            SNH48Gtaoboer: '陶波尔',
            SNH48Gxieni: '谢妮',
            SNH48Gyijiaai: '易嘉爱',
            SNH48Gzhaoyue: '赵粤',
            SNH48Gzhangyi: '张怡',
            SNH48Gzhangyuxin: '张雨鑫',

            SNH48Gjujingyi: '鞠婧祎',

            //H
            SNH48Gfeiqinyuan: '费沁源',
            SNH48Ghongpeiyun: '洪珮雲',
            SNH48Gjiangshan: '姜杉',
            SNH48Gjiangshuting: '蒋舒婷',
            SNH48Glijiaen: '李佳恩',
            SNH48Glinnan: '林楠',
            SNH48Glinsiyi: '林思意',
            SNH48Gliyitong: '李艺彤',
            SNH48Gqiyuzhu: '戚予珠',
            SNH48Gshenmengyao: '沈梦瑶',
            SNH48Gsongyushan: '宋雨珊',
            SNH48Gsunzhenni: '孙珍妮',
            SNH48Gwanlina: '万丽娜',
            SNH48Gwangyi: '王奕',
            SNH48Gxuhan: '徐晗',
            SNH48Gxiongqinxian: '熊沁娴',
            SNH48Gxuyangyuzhuo: '许杨玉琢',
            SNH48Gyanghuiting: '杨惠婷',
            SNH48Gyujiayi: '於佳怡',
            SNH48Gyuanyiqi: '袁一琦',
            SNH48Gzhangxin: '张盺',
            SNH48Gzengxiaowen: '曾晓雯',

            SNH48Gliujiongran: '刘炅然',

            //X
            SNH48Gchenlin: '陈琳',
            SNH48Gchenyunling: '陈韫凌',
            SNH48Gfengxiaofei: '冯晓菲',
            SNH48Glizhao: '李钊',
            SNH48Gpanyingqi: '潘瑛琦',
            SNH48Gqijing: '祁静',
            SNH48Gsongxinran: '宋昕冉',
            SNH48Gsunxinwen: '孙歆文',
            SNH48Gwangjialing: '汪佳翎',
            SNH48Gwangshu: '汪束',
            SNH48Gwangxiaojia: '王晓佳',
            SNH48Gxushiqi: '徐诗琪',
            SNH48Gxietianyi: '谢天依',
            SNH48Gyangbingyi: '杨冰怡',
            SNH48Gyangyunyu: '杨韫玉',
            SNH48Gzhangdansan: '张丹三',
            SNH48Gzhangjiayu: '张嘉予',

            SNH48Glijing: '李晶',

            SNH48Gwangzijie: '王子杰',
            SNH48Gaji: '阿吉',
            SNH48Gyegou: '叶盛',
            SNH48Gmulaosi: '马老师',
            SNH48Gpiggyrae: '朱老师',

            //技能显示名称，技能说明文字
            fengfa: '风发',
            fengfa_info: '出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用。',
            gaoshi: '搞事',
            gaoshi_info: '出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。',
            kuaihuo: '快活',
            kuaihuo_info: '当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。',
            letian: '乐天',
            letian_info: '你可以立即获得你的判定牌',
            modi: '魔笛',
            modi_info: '锁定技，你的防御距离+1',
            zhanwu: '战舞',
            zhanwu_info: '出牌阶段，你可以交给任一其他角色一张装备牌或【杀】，该角色进行二选一：1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】。2. 摸一张牌。每回合限一次。',
            tianlai: '天籁',
            tianlai_info: '每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，其受到一点雷电伤害，然后你回复一点体力；若结果为黑桃，其受到两点雷电伤害',
            quanneng: '全能',
            quanneng_info: '你可以将[杀]当[闪]，或[闪]当[杀]使用或打出',
            yezhan: '夜战',
            yezhan_info: '当你成为一张指定了多个目标的锦囊牌的目标时，你可以取消之，并摸一张牌。',
            yuanqi: '元气',
            yuanqi_info: '每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。',
            zhanbu: '占卜',
            zhanbu_info: '准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底，x为存活角色个数且不超过5',

            luandance: '乱舞',
            luandance_info: '令除你外的所有SNH48G非官方角色依次对另一名角色使用一张【杀】，无法如此做者受到1点伤害。',

            dandang: '担当',
            dandang_info: '当你攻击距离内的角色被杀指定为目标时，你可弃一张牌并将该杀的目标转移至你身上。（力所能及的范围内关心队友是身为队长的本能）',
            jianyi: '坚毅',
            jianyi_info: '当你受到伤害时，若你的伤害来源不弃一张牌，此次伤害-1。（严格的自我要求既是底线也是成功之处）',
            lingjun: '领军',
            lingjun_info: '主公技，当你陷入濒死状态时，与你同势力的角色对你使用的[桃]额外回复一点体力值。你以此法脱离濒死状态时，其可摸一张牌。（为队友付出必然能得到回应，每次陷入低谷再出发必将更进一步）',
            shiyu: '食欲',
            shiyu_info: '每当你使用杀对一名角色造成伤害时，你可与其拼点，若你赢，你获得对方的一张牌并且摸一张牌。（旺盛的食欲能在短时间内提供大量能量）',
            yuyan: '预言',
            yuyan_info: '回合外每失去一张牌，你选择一个颜色并进行一次判定，若结果相同，你获得该判定牌。（神奇的预言能力能让很多事情的走向变得不可捉摸）',
            mowang: '魔王',
            mowang_info: '你每受到一点伤害，你对伤害来源造成X点伤害（X为莫寒已损失体力值）。（统帅全军当断则断，强势的队长往往能带领队伍走向胜利）',
            ziqiang: '自强',
            ziqiang_info: '主公技，觉醒技, 准备阶段，若你的体力为全场最低（或之一），你增加一点体力上限并回复1点体力，获得技能“魔王”',
            jingwu: '精武',
            jingwu_info: '你的杀根据当前体力值获得如下效果。体力值为单数：无视距离且能额外指定一名角色；体力值为双数：无视防具且可额外使用1个杀。（强大的武力是保证队友不被伤害的根本）',
            tianyin: '甜音',
            tianyin_info: '摸牌阶段开始时，你可弃置一张红色手牌并指定一名角色，该角色回复1点体力，若如此做，本回合你不能出杀。（即使世界以痛吻我，我愿以爱回应世界）',

            wenwan: '温婉',
            wenwan_info: '你使用或打出的闪根据当前体力值获得如下效果：体力值为单数：结算后可强制伤害来源结束出牌阶段；体力值为双数：该闪结算后视为对伤害来源使用乐不思蜀。（无害的性格不愿与人发生冲突）',
            fuhei: '腹黑',
            fuhei_mark: '腹黑',
            fuhei_mark_bg: '腹',
            fuhei_info: '出牌阶段，你可弃置一张黑桃牌并选择一名角色，对其造成1点伤害，若如此做，下一个该角色的回合你需要两张闪来响应该角色的杀。（恶趣味的另一面会给所有人别样的“惊喜”）',


            shenhun: '神魂',
            shenhun_bg:'音符',
            shenhun_mark_bg:'音',
            shenhun_info: '你的判定牌生效时，你可将该判定牌置于你的武将牌上，称为"音符"。你的手牌上限+X（X为音符数）。（有趣的灵魂是成功的关键）',
            diandao: '颠倒',
            diandao_info: '你的回合外每受到一次伤害可进行一次判定，判定结果为：♥该角色回复1点体力；♦︎该角色摸两张牌；♣伤害来源弃两张牌；♠伤害来源将其武将牌翻面。（好看的皮囊与呆萌的性格堪称完美的结合）',
            xinggan: '性感',
            xinggan_info: '觉醒技，你的回合内若音符数大于你体力值，你体力上限-1，获得技能"美艳"。（勾人心弦的魅力无人可挡）',
            meiyan: '美艳',
            meiyan_info: '出牌阶段限一次，你可弃置一张武将牌最上面的“音符”并指定一名角色，视为对该角色使用乐不思蜀。'
        },
    };
});
