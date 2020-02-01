'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'SNH48',
        connect: true,
        card: {
            juedou2: {
                audio: true,
                fullskin: true,
                wuxieable: false,
                type: 'trick',
                enable: true,
                filterTarget: function (card, player, target) {
                    return target != player;
                },
                content: function () {
                    "step 0"
                    if (event.turn == undefined) event.turn = target;
                    "step 1"
                    event.trigger('juedou');
                    "step 2"
                    if (event.directHit) {
                        event._result = { bool: false };
                    }
                    else {
                        var next = event.turn.chooseToRespond({ name: 'sha' });
                        next.set('ai', function (card) {
                            var event = _status.event;
                            var player = event.splayer;
                            var target = event.starget;
                            if (player.hasSkillTag('notricksource')) return 0;
                            if (target.hasSkillTag('notrick')) return 0;
                            if (event.player == target) {
                                if (player.hasSkill('naman')) return -1;
                                if (get.attitude(target, player) < 0 || event.player.hp <= 1) {
                                    return get.unuseful2(card)
                                }
                                return -1;
                            }
                            else {
                                if (target.hasSkill('naman')) return -1;
                                if (get.attitude(player, target) < 0 || event.player.hp <= 1) {
                                    return get.unuseful2(card)
                                }
                                return -1;
                            }
                        });
                        next.set('splayer', player);
                        next.set('starget', target);
                        next.autochoose = lib.filter.autoRespondSha;
                        if (event.turn == target) {
                            next.source = player;
                        }
                        else {
                            next.source = target;
                        }
                    }
                    "step 3"
                    if (event.target.isDead() || event.player.isDead()) {
                        event.finish();
                    }
                    else {
                        if (result.bool) {
                            if (event.turn == target) event.turn = player;
                            else event.turn = target;
                            event.goto(1);
                        }
                        else {
                            if (event.turn == target) {
                                target.damage();
                            }
                            else {
                                player.damage(target);
                            }
                        }
                    }
                },
                ai: {
                    wuxie: function () {
                        return 0;
                    },
                    basic: {
                        order: 5,
                        useful: 1,
                        value: 5.5
                    },
                    result: {
                        target: -1.5,
                        player: function (player, target) {
                            if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                return 0;
                            }
                            var hs1 = target.getCards('h', 'sha');
                            var hs2 = player.getCards('h', 'sha');
                            if (hs1.length > hs2.length + 1) {
                                return -2;
                            }
                            var hsx = target.getCards('h');
                            if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                return -2;
                            }
                            if (hsx.length > 3 && hs2.length == 0) {
                                return -2;
                            }
                            if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                return -2;
                            }
                            return -0.5;
                        }
                    },
                    tag: {
                        respond: 2,
                        respondSha: 2,
                        damage: 1,
                    }
                }
            },
            yongqizhichui: {
                mode: ['SNH48'],
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
                mode: ['SNH48'],
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
                mode: ['SNH48'],
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
            baozuo: {
                mode: ['SNH48'],
                nomod: true,
                nopower: true,
                unique: true,
                lianheng: true,
                fullskin: true,
                type: "equip",
                subtype: 'equip5',
                skills: ['baozuo_skill', 'baozuo_special'],
				onLose:function(){
                    // 失去时弃掉所有手牌
					player.discard('h', player.getCards('h'));
                },
                filterLose:function(card,player){
                    // AI不主动去顶掉这个装备
					return player.countCards('h') > 0;
				},
                ai: {
                    equipValue:function(card,player){                        
						if(player.getEquip('yongqizhichui')) return 0;
						if(player.getEquip('antyvote')) return 0;
						return 10
					},
					basic:{
						equipValue:3
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
                        target.damage(player);
                    }
                    else {
                        player.damage(target);
                    }
                    event.finish();
                },
                ai: {
                    damage: true,
                    order: 8,
                    result: {
                        player: function (player, target) {
                            return get.damageEffect(player, target);
                        },
                        target: function (player, target) {
                            return get.damageEffect(target, player);
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
                prompt: '出牌阶段，弃置一张红色牌，对一名SNH48女性角色使用，使其回复一点体力。一回合限一次',
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
                    return ['S','N','H','X','B','E','J','G','N3','Z'].includes(target.group);
                },
                filterCard: function (card) {
                    return get.color(card) == 'black';
                },
                filter: function (event, player) {
                    return player.countCards('he', { color: 'black' }) > 2;
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
            baozuo_skill: {
                trigger: {
                    player: ["phaseEnd", "phaseBegin"],
                },
                audio: true,
                filter: function (event, player) {
                    return player.isAlive();
                },
                frequent: true,
                content: function () {
                    if (player.isDamaged()) {
                        player.recover();
                    }
                    player.draw(1);
                }
            },
            baozuo_special:{
                trigger: {
                    player: 'damageEnd'
                },
                audio: 1,
                frequent: true,
                filter: function(event) {
                    return (event.parent && ['yongqizhichui_skill', 'antyvote_skill'].includes(event.parent.name)) ||
                           (event.card && ['shandian', 'fulei'].includes(event.card.name))
                },
                content: function () {
                    player.loseHp(player.hp);
                }
            }
        },
        translate: {
            juedou2:'决斗',
            yingyuanbang: '应援棒',
            yingyuanbang_bg: '棒',
            yingyuanbang_skill: '打Call',
            yingyuanbang_info: '出牌阶段，你可以弃置一张红色牌，对一名SNH48女性角色使用，使其回复一点体力。一回合限一次',
            antyvote: 'Anty票',
            antyvote_bg: '票',
            antyvote_skill: 'Anty',
            antyvote_info: '出牌阶段，你可以弃置三张黑色牌视为对所有SNH48女性角色打出【万箭齐发】，每回合限一次',

            yongqizhichui: '勇气之锤',
            yongqizhichui_bg: '锤',
            yongqizhichui_skill: '求锤',
            yongqizhichui_info: '选择一个角色进行拼点，若你赢，你对其造成一点伤害，若你没赢，其对你造成一点伤害。每回合限一次。',

            baozuo: "宝座",
            baozuo_skill: "资源",
            baozuo_special: "被锤",
            baozuo_info: "登顶啦！锁定技：回合开始和结束时，你回复一点体力并摸两张牌。当你失去装备区里的【宝座】时，你弃掉所有手牌。受到【求锤】、【Anty】、【闪电】、【浮雷】造成的伤害结算后，失去当前体力，直接濒死。",

            // 未代码实现的技能
            // 神魂颠倒
            // shenhundiandao_info: "除你以外的所有角色依次进行一次判定，♥︎回复1点体力，♦︎摸两张牌，♠︎翻面，♣︎弃两张手牌",
            

        },
        list: [
            //游戏卡包，具体模式可额外加入
            //heart: "♥︎",
            //diamond: "♦︎",
            //spade: "♠︎",
            //club: "♣︎",
            ['heart', 2, 'yingyuanbang'],
            ['spade', 2, 'antyvote'],
            ['club', 2, 'yongqizhichui'],
            ['heart', 13, 'baozuo']
        ],
    }
})
