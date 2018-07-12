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
                nomod:true,
                nopower:true,
                unique:true,
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
                skills: ['antivote_skill'],
                ai: {
                    basic: {
                        equipValue: 3
                    }
                },
            }
        },
        skill: {
            yingyuanbang_skill: {
                audio: 2,
                enable: 'chooseToUse',
                filter: function (event, player) {
                    return _status.currentPhase != player;
                },
                filterCard: function (card) {
                    return get.color(card) == 'red';
                },
                filterTarget: function (card, player, target) {
                    if (target.hp >= target.maxHp)
                        return false;
                    if (target.sex == 'male')
                        return false;
                    if (target.group == 'S' || target.group == 'N' || target.group == 'H' || target.group == 'X')
                        return true;
                    else
                        return false;
                },
                position: 'he',
                viewAs: { name: 'tao' },
                prompt: '弃置一张红色手牌令一名SNH48女性角色回复一点体力',
                check: function (card) { return 15 - get.value(card) },
                //装备时：给角色添加技能
                onEquip: function () {
                    player.markSkill('yingyuan');
                },
                //掉落时：给角色移除技能
                onLose: function() {
                    player.unmarkSkill('yingyuan');
                },
                ai: {
                    skillTagFilter: function (player) {
                        return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                    },
                    threaten: 1.5,
                    save: true,
                    respondTao: true,
                }
            },
            antyvote_skill: {
                audio: 2,
                enable: 'phaseUse',
                usable: 1,
                filterCard: function (card) {
                    //黑色牌
                    return get.color(card) == 'black';
                },
                selectCard: [0, 1],
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
                content: function () {
                    target.damage();
                },
                check: function (card) {
                    return 10 - get.value(card);
                },
                //装备时：给角色添加技能
                onEquip: function () {
                    player.markSkill('antyvote_skill');
                },
                //掉落时：给角色移除技能
                onLose: function () {
                    player.unmarkSkill('antyvote_skill');
                },
                position: 'he',
                prompt: '弃置一张黑色牌以视为对一名SNH48女性角色造成一点伤害',
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        player: function (player, target) {
                            if (player.getEquip(1)) return 0;
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
            }
        },
        translate: {
            yingyuanbang: '应援棒',
            yingyuanbang_bg: '棒',
            yingyuanbang_skill: '应援',
            yingyuanbang_info: '出牌阶段，你可以弃置一张红色手牌令一名SNH48女性角色回复一点体力，每阶段限一次',
            antyvote: 'Anty票',
            antyvote_bg: '票',
            antyvote_skill: 'Anty',
            antyvote_info: '出牌阶段，你可以弃置一张黑色手牌对一名SNH48女性角色造成一点伤害，每阶段限一次',
        },
        list: [
            //heart: "♥︎",
            //diamond: "♦︎",
            //spade: "♠︎",
            //club: "♣︎",
			['heart', 2, 'yingyuanbang'],
			['heart', 3, 'yingyuanbang'],
			['heart', 4, 'yingyuanbang'],
			['heart', 5, 'yingyuanbang'],
			['heart', 6, 'yingyuanbang'],
			['heart', 7, 'yingyuanbang'],
			['heart', 8, 'yingyuanbang'],
			['heart', 9, 'yingyuanbang'],
			['heart', 1, 'yingyuanbang'],
			//['spade', 2, 'antyvote'],
        ],
    }
});
