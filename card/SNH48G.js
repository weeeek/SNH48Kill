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
            }
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
                        player.markSkill('luandance');
                    }
                    else {
                        player.loseHp();
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
            luandance: {
                audio: 2,
                unique: true,
                enable: 'phaseUse',
                skillAnimation: 'epic',
                animationColor: 'thunder',
                filterTarget: function (card, player, target) {
                    return target != player;
                },
                position: 'he',
                selectCard:1,
                selectTarget: -1,
                multitarget: true,
                multiline: true,
                content: function () {
                    "step 0"
                    player.unmarkSkill('luandance');
                    event.current = player.next;
                    "step 1"
                    event.current.animate('target');
                    event.current.chooseToUse('乱舞：使用一张杀或受到一点伤害', { name: 'sha' }, function (card, player, target) {
                        if (player == target) return false;
                        if (!player.canUse('sha', target)) return false;
                        //距离为1者
                        //if (get.distance(player, target) <= 1) return true;
                        if (game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) < get.distance(player, target);
                        })) {
                            return false;
                        }
                        return true;
                    });
                    "step 2"
                    if (result.bool == false) event.current.damage();
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
            }
        },
        translate: {
            yingyuanbang: '应援棒',
            yingyuanbang_bg: '棒',
            yingyuanbang_skill: '打Call',
            yingyuanbang_info: '出牌阶段，你可以弃置一张红色牌，对一名SNH48G女性角色使用，使其回复一点体力。一回合限一次',
            antyvote: 'Anty票',
            antyvote_bg: '票',
            antyvote_skill: 'Anty',
            antyvote_info: '出牌阶段，你可以弃置三张黑色牌视为对所有SNH48女性角色打出“万箭齐发”，每回合限一次',

            yongqizhichui: '勇气之锤',
            yongqizhichui_bg: '锤',
            yongqizhichui_skill: '求锤',
            yongqizhichui_info: '选择一个角色进行拼点，你获得"乱舞"直到回合结束：令除你外的所有角色依次对另一名角色使用一张【杀】，无法如此做者受到1点伤害。，若你没赢，失去一点体力。每回合限一次。',


            luandance: '乱舞',
            luandance_bg: '锤',
            luandance_skill: '乱舞',
            luandance_info: '出牌阶段，你可以弃置一张牌，令除你外的所有角色依次对另一名角色使用一张【杀】，无法如此做者受到1点伤害。'
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
