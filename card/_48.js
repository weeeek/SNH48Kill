'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'_48',
		connect:true,
		card: {
		    yingyuanbang: {
		        lianheng: true,
		        fullskin: true,
		        type: "equip",
		        subtype: "equip2",
		        skills: ['yingyuanbang'],
		        ai: {
		            basic: {
		                equipValue: 6
		            },
		        },
		    },
		},
		skill: {
		    yingyuanbang: {
		        trigger: { player: 'damageBegin' },
		        priority: 10,
		        forced: true,
		        filter: function (event) {
		            if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
		            return event.num > 0;
		        },
		        content: function () {
		            trigger.num--;
		            player.addSkill('yingyuanbang2');
		        }
		    },
		    yingyuanbang2: {
		        trigger: { player: ['damageEnd', 'damageZero'] },
		        priority: 10,
		        forced: true,
		        popup: false,
		        content: function () {
		            var card = player.getEquip('yingyuanbang');
		            if (card) {
		                player.discard(card);
		            }
		            player.removeSkill('yingyuanbang2');
		        }
		    },
		},
		translate:{
		    yingyuanbang_bg: '镜',
		    yingyuanbang: '护心镜',
		    yingyuanbang_info: '抵消一点伤害',
		},
		list:[
			['heart', 2, 'yingyuanbang'],
		],
	}
});
