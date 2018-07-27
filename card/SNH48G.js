'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        card: {
            yongqizhichui: {
                mode: ['SNH48G'],
                nomod: true,
                nopower: true,
                unique: true,
                lianheng: true,
                fullskin: true,
                type: "equip",
                subtype: 'equip1',
                distance: { attackFrom: -2 },
                skills: ['yongqizhichui_skill'],
                ai: {
                    basic: {
                        equipValue: 6
                    },
                },
            },
            yingyuanbang: {
                mode: ['SNH48G'],
                nomod: true,
                nopower: true,
                unique: true,
                lianheng: true,
                fullskin: true,
                type: "equip",
                subtype: 'equip5',
                skills: ['yingyuanbang_skill'],
                ai: {
                    basic: {
                        equipValue: 6
                    },
                },
            },
            antyvote: {
                mode: ['SNH48G'],
                nomod: true,
                nopower: true,
                unique: true,
                lianheng: true,
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                distance: { attackFrom: -4 },
                skills: ['antyvote_skill'],
                ai: {
                    basic: {
                        equipValue: 3
                    }
                },
            },
        },
        skill: {
            yongqizhichui_skill: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('h') > 0;
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function () {
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if (result.bool) {
                        target.damage(player);
                    }
                    else {                        
                        player.damage(target);                        
                    }
                    event.finish();
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
                            if (player.countCards('h', 'sha') > 0) return 0.6;
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
            yingyuanbang_skill: {
                //使用次数
                usable: 1,
                fullskin: true,
                enable: 'phaseUse',
                filterCard: function (card) {
                    return get.color(card) == 'red';
                },
                //选择1张牌
                selectCard: 1,
                //加上表示可以使用装备区的牌，不加默认手牌
                position: 'he',
                prompt: '出牌阶段，弃置一张红色牌，对一名SNH48G女性角色使用，使其回复一点体力。一回合限一次',
                filterTarget: function (card, player, target) {
                    if (target.hp >= target.maxHp)
                        return false;
                    //子杰殿下表示不用给他打Call，打了他也不会接的。
                    if (target.sex == 'male')
                        return false;
                    if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return target.hp < target.maxHp;
                    else
                        return false;
                },
                content: function () {
                    //使用效果
                    target.recover();
                },
                ai: {
                    basic: {
                        useful: [7, 2],
                        value: [7, 2],
                    },
                    order: 2.2,
                    result: {
                        target: 2
                    },
                    tag: {
                        recover: 1,
                    }
                }
            },
            antyvote_skill: {
                audio: 2,
                enable: 'phaseUse',
                //使用次数
                usable: 1,
                viewAs: { name: 'wanjian' },
                filterTarget: function (card, player, target) {
                    //不能以自己为目标
                    if (player == target)
                        return false;
                    //不能anty男的。子杰殿下，我只能帮你到这里了
                    if (target.sex == 'male')
                        return false;
                    if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return true;
                    else
                        return false;
                },
                filterCard: function (card) {
                    return get.color(card) == 'black';
                },
                //加上表示可以使用装备区的牌，不加默认手牌
                position: 'he',
                prompt: '弃置三张黑色牌以视为对所有SNH48女性角色打出“万箭齐发”，一回合限一次',
                //选择3张牌
                selectCard: 3,
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
        },
        translate: {
            yingyuanbang: '应援棒',
            yingyuanbang_bg: '棒',
            yingyuanbang_skill: '打Call',
            yingyuanbang_info: '出牌阶段，你可以弃置一张红色牌，对一名SNH48G女性角色使用，使其回复一点体力。一回合限一次',
            antyvote: 'Anty票',
            antyvote_bg: '票',
            antyvote_skill: 'Anty',
            antyvote_info: '出牌阶段，你可以弃置三张黑色牌视为对所有SNH48G女性角色打出“万箭齐发”，每回合限一次',

            yongqizhichui: '勇气之锤',
            yongqizhichui_bg: '锤',
            yongqizhichui_skill: '求锤',
            yongqizhichui_info: '选择一个角色进行拼点，若你赢，你对其造成一点伤害，若你没赢，其对你造成一点伤害。每回合限一次。',


        },
        list: [
            //游戏卡包，具体模式可额外加入
            //heart: "♥︎",
            //diamond: "♦︎",
            //spade: "♠︎",
            //club: "♣︎",
            ['heart', 2, 'yingyuanbang'],
            ['spade', 2, 'antyvote'],
            ['club', 2, 'yongqizhichui']
        ],
    }
});
