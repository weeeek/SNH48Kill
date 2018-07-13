'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48G',
        connect: true,
        card: {
            //zhangba: {
            //    fullskin: true,
            //    type: 'equip',
            //    subtype: 'equip1',
            //    distance: { attackFrom: -2 },
            //    ai: {
            //        equipValue: function (card, player) {
            //            var num = 2.5 + player.countCards('h') / 3;
            //            return Math.min(num, 4);
            //        },
            //        basic: {
            //            equipValue: 3.5
            //        }
            //    },
            //    skills: ['zhangba_skill']
            //},
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
                //装备时：给角色添加技能
                onEquip: function () {
                    player.markSkill('yingyuanbang_skill');
                },
                //掉落时：给角色移除技能
                onLose: function () {
                    player.unmarkSkill('yingyuanbang_skill');
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

                //    audio: 2,
                //    enable: 'chooseToUse',
                //    filter: function (event, player) {
                //        return _status.currentPhase != player;
                //    },
                //    selectCard: 2,
                //    filterCard: function (card) {
                //        return get.color(card) == 'red';
                //    },
                //    filterTarget: function (card, player, target) {
                //        if (target.hp >= target.maxHp)
                //            return false;
                //        if (target.sex == 'male')
                //            return false;
                //        if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                //            return true;
                //        else
                //            return false;
                //    },
                //    position: 'he',
                //    viewAs: { name: 'tao' },
                //    prompt: '当有角色濒死时，你可以弃置两张红色手牌令所有SNH48女性角色回复一点体力',
                //    check: function (card) { return 15 - get.value(card) },
                //    //装备时：给角色添加技能
                //    onEquip: function () {
                //        player.markSkill('yingyuan');
                //    },
                //    //掉落时：给角色移除技能
                //    onLose: function() {
                //        player.unmarkSkill('yingyuan');
                //    },
                //    ai: {
                //        skillTagFilter: function (player) {
                //            return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                //        },
                //        threaten: 1.5,
                //        save: true,
                //        respondTao: true,
                //    }
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
        },
        list: [
            //游戏卡包，具体模式可额外加入
            //heart: "♥︎",
            //diamond: "♦︎",
            //spade: "♠︎",
            //club: "♣︎",
			['heart', 2, 'yingyuanbang'],
			['spade', 2, 'antyvote'],
        ],
    }
});
