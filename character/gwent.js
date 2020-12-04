'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'gwent',
		character:{
			gw_huoge:['male','qun',3,['gwjinli']],
			gw_aisinie:['female','wu',3,['huihun']],
			gw_enxier:['male','wei',4,['gwbaquan']],

			gw_kaerweite:['male','shu',4,['gwjiquan']],
			gw_falanxisika:['female','wu',3,['shewu']],
			gw_haluo:['male','qun',4,['nuhou']],

			gw_airuiting:['male','wei',4,['kuanglie']],
			gw_laduoweide:['male','wei',4,['gwxiaoshou']],
			gw_dagong:['male','qun',4,['gwtianbian']],

			gw_bulanwang:['male','qun',4,['bolang']],
			gw_kuite:['male','qun',4,['gwxuezhan']],
			gw_fuertaisite:['male','wei',3,['zhengjun']],
			gw_hengsaite:['male','wei',3,['jielue']],
			gw_fulisi:['male','qun',3,['lanquan']],
			gw_gaier:['male','shu',3,['hunmo']],

			gw_jieluote:['male','qun',6,['fayin']],
			gw_yenaifa:['female','qun',3,['xuezhou']],
			gw_telisi:['female','wei',3,['huandie']],
			gw_xili:['female','wu',3,['fengjian']],
			gw_luoqi:['male','wei',4,['gwzhanjiang']],
			// gw_yioufeisi:['male','wu',4,['gwchuanxin']],

			gw_aigeleisi:['female','wu',3,['gwshenyu']],
			gw_aokeweisite:['male','qun',4,['yunhuo']],
			gw_kaxier:['male','shu',4,['gwfengchi']],
			gw_luobo:['male','qun',3,['junchi']],
			gw_mieren:['male','shu',3,['lingji']],
			gw_sanhanya:['male','shu',3,['gwjinyan']],
			gw_shanhu:['female','qun',3,['shuijian']],
			gw_zhangyujushou:['male','wu',4,['gwjushi']],
			gw_zhuoertan:['male','wu',3,['hupeng']],

			gw_meizi:['female','wei',3,['gwjieyin']],
			gw_aimin:['female','wu',3,['huanshu']],
			gw_puxila:['female','qun',3,['gwqinwu']],

			gw_xigedelifa:['female','qun',3,['gwfusheng']],
			gw_laomaotou:['male','qun',4,['gwchenshui']],
			gw_qigaiwang:['male','qun',4,['julian']],

			gw_bierna:['female','qun',3,['gwfengshi']],
			gw_haizhiyezhu:['male','qun',4,['yangfan']],
			gw_nitelila:['male','wei',4,['shuangxi']],

			gw_linjing:['male','wu',4,['gwyewu']],
			gw_kanbi:['male','qun',1,['gwfutian']],
			gw_nvyemo:['female','shu',3,['gwgouhun']],

			gw_kairuisi:['female','qun',3,['gwweitu']],
			gw_oudimu:['male','shu',3,['gwjingshi']],
			gw_shasixiwusi:['male','qun',4,['gwjingtian']],

			gw_yioufeisisp:['male','wu',3,['gwminxiang']],
			gw_lanbote:['male','qun',4,['gwlangshi']],
			gw_fenghuang:['male','shu',4,['gwliaotian']],
			gw_diandian:['male','wu',3,['gwhuanbi']],
			gw_yisilinni:['female','wu',3,['gwhuanshuang']],
			gw_feilafanruide:['male','wei',3,['yinzhang']],

			gw_saqiya:['female','shu',4,['sqlongwu']]
		},
		characterIntro:{
			gw_huoge:'那个老年痴呆?不知道他是活着还是已经被制成标本了!',
			gw_aisinie:'树精皇后有着熔银做成的眼睛，冰冷铸钢的心脏。',
			gw_gaier:'画作应该要传达情绪，而不是字句。',
			gw_enxier:'我可没什么耐心，最好小心点，否则脑袋不保',

			gw_yenaifa:'魔法是艺术、混沌与科学的结合。因为魔法的确是一门技艺也是一种诅咒。',
			gw_telisi:'我可以照顾我自己，相信我。',
			gw_jieluote:'如果要付出这种代价才能拯救世界，那最好还是让世界消逝吧。',
			gw_xili:'我想去哪，就去哪。',
			gw_luoqi:'是个爱国者…还是个货真价实的王八蛋。',
			gw_yioufeisi:'国王还是乞丐，两者有何区别，人类少一个算一个',
		},
		skill:{
			sqlongyin:{
				trigger:{player:'phaseBeginStart'},
				forced:true,
				check:function(){
					return false;
				},
				init:function(player){
					player.storage.sqlongyin='sqlongwu';
				},
				content:function(){
					var list=['sqlongnu','sqlonghuo','sqlongwu'];
					var map={
						sqlongwu:'gw_saqiya',
						sqlongnu:'gw_saqiya1',
						sqlonghuo:'gw_saqiya2'
					}
					list.remove(player.storage.sqlongyin);
					if(list.length==2){
						var name=list.randomGet();
						player.removeSkill(player.storage.sqlongyin);
						player.addSkill(name);
						player.storage.sqlongyin=name;
						player.setAvatar('gw_saqiya',map[name]);
					}
				}
			},
			sqlongnu:{
				group:'sqlongyin',
				trigger:{player:'phaseBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.discoverCard(ui.cardPile.childNodes,function(button){
						var card=button.link;
						var player=_status.event.player;
						var value=get.value(card,player);
						if(player.countCards('h',card.name)){
							value=Math.max(value,9);
						}
						return value;
					},'nogain');
					'step 1'
					if(player.countCards('h',function(card){
						return card!=result.card&&card.name==result.card.name;
					})){
						event.current=result.card;
						player.chooseTarget('是否改为对一名角色造成一点火属性伤害？').set('ai',function(target){
							return get.damageEffect(target,null,player,player,'fire');
						});
					}
					else{
						player.gain(result.card,'draw');
						event.finish();
					}
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						target.damage('fire','nocard');
						// player.discoverCard(ui.cardPile.childNodes);
					}
					else{
						player.gain(event.current,'draw');
					}
				},
			},
			sqlonghuo:{
				group:'sqlongyin',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h');
				},
				delay:false,
				content:function(){
					'step 0'
					var hs=player.getCards('h');
					player.discard(hs).set('delay',false);
					event.hs=hs;
					'step 1'
					player.draw(event.hs.length);
					'step 2'
					var enemies=player.getEnemies();
					for(var i=0;i<enemies.length;i++){
						var hs=enemies[i].getCards('h');
						var same=[];
						for(var j=0;j<hs.length;j++){
							for(var k=0;k<event.hs.length;k++){
								if(hs[j].name==event.hs[k].name){
									same.push(hs[j]);
									break;
								}
							}
						}
						if(same.length){
							enemies[i].discard(same.randomGet()).set('delay',false);
							event.discarded=true;
							player.line(enemies[i],'green');
						}
					}
					'step 3'
					if(event.discarded){
						game.delay();
					}
				},
				ai:{
					order:5,
					result:{
						player:1
					}
				}
			},
			sqlongwu:{
				group:'sqlongyin',
				trigger:{player:'phaseEnd'},
				frequent:true,
				filter:function(event,player){
					return player.countCards('h');
				},
				content:function(){
					'step 0'
					var max=1;
					var map={};
					var hs=player.getCards('h');
					for(var i=0;i<hs.length;i++){
						var name=hs[i].name;
						if(!map[name]){
							map[name]=1;
						}
						else{
							map[name]++;
							if(map[name]>max){
								max=map[name];
							}
						}
					}
					player.draw(max);
					'step 1'
					player.chooseToUse();
				}
			},
			jielue:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					var list=player.getFriends();
					for(var i=0;i<list.length;i++){
						var hs=list[i].getCards('h');
						for(var j=0;j<hs.length;j++){
							if(player.hasUseTarget(hs[j])){
								return true;
							}
						}
					}
					return false;
				},
				forced:true,
				content:function(){
					'step 0'
					var list=player.getFriends();
					var cards=[];
					for(var i=0;i<list.length;i++){
						var hs=list[i].getCards('h');
						var usables=[];
						for(var j=0;j<hs.length;j++){
							if(player.hasUseTarget(hs[j])){
								usables.push(hs[j]);
							}
						}
						if(usables.length){
							cards.push(usables);
						}
					}
					var touse=[];
					var owners=[];
					for(var i=0;i<2;i++){
						if(cards.length){
							var card=cards.randomRemove().randomRemove();
							var owner=get.owner(card);
							owner.lose(card,ui.special);
							owner.$give(card,player);
							player.line(owner,'green');
							touse.push(card);
							owners.push(owner);
						}
					}
					event.touse=touse;
					event.owners=owners;
					'step 1'
					game.delayx(1.5);
					'step 2'
					if(event.touse.length){
						player.chooseUseTarget(true,event.touse.shift(),null,false);
						event.redo();
					}
					'step 3'
					game.asyncDraw(event.owners);
					'step 4'
					game.delay();
				},
				ai:{
					threaten:1.5
				}
			},
			gwmaoxian_hengsaite_sha:{
				trigger:{global:'damageAfter'},
				silent:true,
				filter:function(event){
					return event.getParent(3).name=='gwmaoxian_hengsaite';
				},
				content:function(){
					var card=game.createCard('sha');
					player.gain(card);
					player.$draw(card);
				}
			},
			gwhuanshuang:{
				trigger:{player:['phaseBegin','phaseEnd']},
				direct:true,
				filter:function(event,player){
					return !player.hasSkill('gwhuanshuang_disable');
				},
				content:function(){
					'step 0'
					var list=[];
					for(var i in lib.card){
						if(lib.card[i].subtype=='spell_bronze') list.push(i);
					}
					for(var i=0;i<list.length;i++){
						if(!player.hasUseTarget(list[i])){
							list.splice(i--,1);
						}
					}
					if(!list.length){
						event.finish();
						return;
					}
					var rand=get.rand();
					var aozu=game.hasPlayer(function(current){
						return player.canUse('gw_aozuzhilei',current)&&current.hp<=3&&get.effect(current,{name:'gw_aozuzhilei'},player,player)>0;
					});
					var aozu2=game.hasPlayer(function(current){
						return player.canUse('gw_aozuzhilei',current)&&current.hp<=2&&get.effect(current,{name:'gw_aozuzhilei'},player,player)>0;
					});
					var aozu3=game.hasPlayer(function(current){
						return player.canUse('gw_aozuzhilei',current)&&get.effect(current,{name:'gw_aozuzhilei'},player,player)>0;
					});
					var baoxue=game.hasPlayer(function(current){
						return player.canUse('gw_baoxueyaoshui',current)&&get.attitude(player,current)<0&&[2,3].contains(current.countCards('h'))&&!current.hasSkillTag('noh');
					});
					var baoxue2=game.hasPlayer(function(current){
						return player.canUse('gw_baoxueyaoshui',current)&&get.attitude(player,current)<0&&[2].contains(current.countCards('h'))&&!current.hasSkillTag('noh');
					});
					var baoxue3=game.hasPlayer(function(current){
						return player.canUse('gw_baoxueyaoshui',current)&&get.attitude(player,current)<0&&current.countCards('h')>=2&&!current.hasSkillTag('noh');
					});
					var nongwu=game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&(get.attitude(player,current.getNext())<0||get.attitude(player,current.getPrevious())<0);
					});
					var nongwu2=game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&get.attitude(player,current.getNext())<0&&get.attitude(player,current.getPrevious())<0;
					});
					var yanzi=game.hasPlayer(function(current){
						return get.attitude(player,current)>0&&current.isMinHandcard();
					});
					player.chooseVCardButton(get.prompt('gwhuanshuang'),list.randomGets(3),'notype').ai=function(button){
						var name=button.link[2];
						switch(name){
							case 'gw_ciguhanshuang':
								if(nongwu2) return 3;
								if(nongwu) return 1;
								return 0;
							case 'gw_baoxueyaoshui':
								if(baoxue2) return 2;
								if(baoxue) return 1.5;
								if(baoxue3) return 0.5;
								return 0;
							case 'gw_aozuzhilei':
								if(aozu2) return 2.5;
								if(aozu) return 1.2;
								if(aozu3) return 0.2;
								return 0;
							case 'gw_yanziyaoshui':
								if(yanzi) return 2;
								return 0.6;
						}
						if(game.hasPlayer(function(current){
							return player.canUse(name,current)&&get.effect(current,{name:name},player,player)>0;
						})){
							return Math.random();
						}
						return 0;
					};
					'step 1'
					if(result.bool){
						player.logSkill('gwhuanshuang');
						event.cardname=result.links[0][2];
						player.chooseUseTarget(true,event.cardname);
						player.addTempSkill('gwhuanshuang_disable');
					}
					'step 2'
					if(event.cardname&&player.hasUseTarget(event.cardname)){
						player.chooseUseTarget(true,event.cardname);
					}
				},
				ai:{
					threaten:1.6
				},
				subSkill:{
					disable:{}
				}
			},
			gw_xianzumaijiu:{
				trigger:{source:'damageEnd'},
				filter:function(event){
					return (event.card&&(event.card.name=='sha'));
				},
				forced:true,
				temp:true,
				vanish:true,
				onremove:function(player){
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
				},
				content:function(){
					var list=player.getFriends();
					list.add(player);
					game.asyncDraw(list);
					player.removeSkill('gw_xianzumaijiu');
				},
				ai:{
					damageBonus:true
				}
			},
			gwjinli:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				filterTarget:function(card,player,target){
					return !target.hasSkill('gwjinli_jiu');
				},
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					target.addSkill('gwjinli_jiu');
				},
				subSkill:{
					jiu:{
						init:function(player){
							player.storage.gwjinli_jiu=2;
						},
						onremove:true,
						mark:'image',
						intro:{
							content:'结束阶段，随机获得一个正面效果；&个回合后将先祖麦酒收入手牌'
						},
						trigger:{player:'phaseEnd'},
						forced:true,
						content:function(){
							'step 0'
							player.getBuff();
							'step 1'
							player.storage.gwjinli_jiu--;
							if(player.storage.gwjinli_jiu<=0){
								player.removeSkill('gwjinli_jiu');
								player.gain(game.createCard('gw_xianzumaijiu'),'gain2');
							}
							else{
								player.updateMark('gwjinli_jiu',true);
							}
						}
					}
				},
				ai:{
					threaten:1.5,
					order:2,
					result:{
						target:function(player,target){
							return 1/(1+target.hp)/Math.sqrt(1+target.countCards('h'));
						}
					}
				}
			},
			gwliaotian:{
				enable:'phaseUse',
				delay:0,
				usable:2,
				filter:function(event,player){
					var hs=player.getCards('h');
					if(hs.length<2) return false;
					var color=get.color(hs[0]);
					for(var i=1;i<hs.length;i++){
						if(get.color(hs[i])!=color) return false;
					}
					return true;
				},
				content:function(){
					'step 0'
					var hs=player.getCards('h');
					event.num=hs.length;
					player.lose(hs,ui.discardPile);
					'step 1'
					player.draw(event.num,'nodelay');
					'step 2'
					var targets=player.getEnemies();
					if(targets.length){
						player.useCard({name:'sha'},targets.randomGet(),false);
					}
				},
				ai:{
					order:9,
					result:{
						player:1
					}
				}
			},
			gwhuanbi:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.chooseVCardButton(get.typeCard('gwmaoxian').randomGets(3),true,'选择一张冒险牌');
					'step 1'
					if(result.bool){
						event.card=game.createCard(result.links[0][2]);
						player.gain(event.card,'gain2');
					}
					else{
						event.finish();
					}
					'step 2'
					var list=game.filterPlayer(function(current){
						return current!=player&&current.countCards('h');
					});
					if(list.length){
						event.target=list.randomGet();
						event.target.chooseCard('h','是否交给'+get.translation(event.player)+'一张手牌并获得冒险牌？').set('ai',function(card){
							if(get.attitude(event.target,player)>0){
								return 11-get.value(card);
							}
							return 7-get.value(card);
						}).set('promptx',[event.card]);
					}
					else{
						event.finish();
					}
					'step 3'
					if(result.bool){
						event.target.line(player,'green');
						event.target.give(result.cards,player);
						event.target.gain(game.createCard(event.card),'gain2');
					}
				},
				ai:{
					order:8,
					result:{
						player:1
					}
				}
			},
			gwmaoxian_old:{
				trigger:{global:'gameStart',player:['enterGame','phaseBefore']},
				forced:true,
				filter:function(event,player){
					return !player.storage.gwmaoxian;
				},
				content:function(){
					player.storage.gwmaoxian=10;
					player.storage.gwmaoxian_skill=[];
					event.insert(lib.skill.gwmaoxian.learn,{player:player});
				},
				learn:function(){
					var list={
						draw:{
							bronze:[1,'准备阶段，你获得一张随机铜卡法术'],
							basic:[1,'准备阶段，你从牌堆中获得一张杀'],
							silver:[2,'结束阶段，你获得一张随机银卡法术'],
							trick:[3,'结束阶段，你发现一张普通锦囊牌'],
							gold:[3,'出牌阶段开始时，你获得一张随机金卡法术'],
							equip:[3,'出牌阶段开始时，你在装备区内的空余位置装备一件随机装备'],
						},
						attack:{
							sha:[1,'你可以将一张手牌当作杀使用'],
							huogong:[1,'你可以将一张手牌当作火攻使用'],
							aoe:[2,'出牌阶段限一次，你可以弃置两张牌，视为使用一张南蛮入侵'],
							shas:[2,'每当你使用一张杀，你可以追加一名无视距离的目标'],

						},
						defend:{

						},
						assist:{

						},
						control:{

						}
					}
				}
			},
			gwminxiang_old:{
				group:['gwminxiang_count','gwminxiang_clear','gwminxiang_use'],
				subSkill:{
					count:{
						trigger:{player:'phaseBegin'},
						silent:true,
						content:function(){
							player.storage.gwminxiang=[];
						}
					},
					clear:{
						trigger:{player:'phaseAfter'},
						silent:true,
						content:function(){
							delete player.storage.gwminxiang;
						}
					},
					use:{
						trigger:{player:'useCardAfter'},
						silent:true,
						filter:function(event,player){
							if(_status.currentPhase!=player) return false;
							var type=get.type(event.card);
							if(type!='trick'&&type!='basic') return false;
							if(get.info(event.card).multitarget) return false;
							if(!player.storage.gwminxiang) return false;
							return true;
						},
						content:function(){
							player.storage.gwminxiang.add(trigger.card);
						}
					}
				},
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					if(player.storage.gwminxiang){
						for(var i=0;i<player.storage.gwminxiang.length;i++){
							var card=player.storage.gwminxiang[i];
							if(game.countPlayer(function(current){
								return current!=player&&lib.filter.targetEnabled3(card,player,current);
							})>1){
								return true;
							}
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<player.storage.gwminxiang.length;i++){
						var card=player.storage.gwminxiang[i];
						if(game.countPlayer(function(current){
							return current!=player&&lib.filter.targetEnabled3(card,player,current);
						})>1){
							list.push(card);
						}
					}
					var skip=['shunshou','huogong','shandianjian','jiu'];
					player.chooseCardButton(get.prompt('gwminxiang'),list).set('ai',function(button){
						if(skip.contains(button.link.name)) return 0;
						var val=get.value(button.link);
						if(get.tag(button.link,'damage')){
							val+=3;
						}
						return val;
					});
					'step 1'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						player.chooseTarget('选择两个目标互相使用'+get.translation(event.card),2,function(cardx,player,target){
							return target!=player&&lib.filter.targetEnabled3(card,player,target);
						}).set('ai',function(target){
							if(ui.selected.targets.length){
								return get.effect(target,card,ui.selected.targets[0],player);
							}
							return get.effect(target,card,target,player);
						}).set('targetprompt',['先出牌','后出牌']);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.$throw(event.card);
						player.logSkill('gwminxiang',result.targets);
						event.target1=result.targets[0];
						event.target2=result.targets[1];
						game.delay();
					}
					else{
						event.finish();
					}
					'step 3'
					event.target1.useCard(event.card,event.target2,'noai');
					'step 4'
					if(event.target1.isIn()&&event.target2.isIn()){
						event.target2.useCard(event.card,event.target1,'noai');
					}
				},
				ai:{
					expose:0.4,
					threaten:1.6
				}
			},
			gwminxiang:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var hs=player.getCards('h');
					var names=[];
					for(var i=0;i<hs.length;i++){
						if(['basic','trick'].contains(get.type(hs[i]))&&!get.info(hs[i]).multitarget){
							names.add(hs[i].name);
						}
					}
					for(var i=0;i<names.length;i++){
						if(game.countPlayer(function(current){
							return current!=player&&lib.filter.targetEnabled3({name:names[i]},player,current);
						})>1){
							return true;
						}
					}
					return false;
				},
				check:function(card){
					if(['shunshou','huogong','shandianjian','jiu','tianxianjiu'].contains(card.name)) return 0;
					if(get.tag(card,'damage')){
						return get.value(card)+2;
					}
					return get.value(card);
				},
				filterCard:function(card,player){
					if(!['basic','trick'].contains(get.type(card))) return false;
					return game.countPlayer(function(current){
						return current!=player&&lib.filter.targetEnabled3({name:card.name},player,current);
					})>1;
				},
				filterTarget:function(card,player,target){
					if(player==target||!ui.selected.cards.length) return false;
					return lib.filter.targetEnabled3({name:ui.selected.cards[0].name},player,target);
				},
				targetprompt:['先出牌','后出牌'],
				selectTarget:2,
				multitarget:true,
				delay:0,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					targets[0].useCard({name:cards[0].name},targets[1],'noai');
					'step 2'
					if(targets[0].isIn()&&targets[1].isIn()){
						targets[1].useCard({name:cards[0].name},targets[0],'noai');
					}
				},
				// group:'gwminxiang_draw',
				multiline:true,
				// subSkill:{
				// 	draw:{
				// 		trigger:{global:'damageAfter'},
				// 		silent:true,
				// 		filter:function(event,player){
				// 			var evt=event.getParent(3);
				// 			return evt.name=='gwminxiang'&&evt.player==player;
				// 		},
				// 		content:function(){
				// 			trigger.getParent(3).draw+=trigger.num;
				// 		}
				// 	}
				// },
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(!ui.selected.cards.length) return 0;
							return get.effect(target,{name:ui.selected.cards[0].name},target,target);
						}
					},
					expose:0.4,
					threaten:1.6,
				}
			},
			gwlangshi:{
				trigger:{source:'damageEnd'},
				direct:true,
				filter:function(event,player){
					if(event.parent.name=='gwlangshi') return false;
					return game.hasPlayer(function(current){
						return current!=event.player&&current!=player&&current.hp>=event.player.hp;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('gwlangshi'),function(card,player,target){
						return target!=trigger.player&&target!=player&&target.hp>=trigger.player.hp;
					}).set('ai',function(target){
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						player.logSkill('gwlangshi',result.targets);
						result.targets[0].damage(player);
					}
				},
				ai:{
					threaten:1.5
				}
			},
			gwjingtian:{
				clickable:function(player){
					player.addTempSkill('gwjingtian2');
					player.directgain(get.cards());
					player.$draw();
					player.storage.gwjingtian--;
					player.updateMark('gwjingtian',true);
					player.logSkill('gwjingtian');
					if(_status.imchoosing){
						delete _status.event._cardChoice;
						delete _status.event._targetChoice;
						game.check();
					}
				},
				clickableFilter:function(player){
					return player.storage.gwjingtian>0&&!player.hasSkill('gwjingtian2');
				},
				init:function(player){
					player.storage.gwjingtian=0;
				},
				trigger:{player:'phaseDrawBefore'},
				forced:true,
				content:function(){
					trigger.cancel();
					player.storage.gwjingtian+=3;
					player.updateMark('gwjingtian',true);
				},
				group:'gwjingtian_ai',
				mark:true,
				intro:{
					mark:function(dialog,content,player){
						if(player.isUnderControl(true)){
							if(_status.gameStarted&&player.storage.gwjingtian>0&&!player.hasSkill('gwjingtian2')){
								dialog.add(ui.create.div('.menubutton.pointerdiv','点击发动',function(){
									if(!this.disabled){
										this.disabled=true;
										this.classList.add('disabled');
										this.style.opacity=0.5;
										lib.skill.gwjingtian.clickable(player);
									}
								}));
							}
							var list=[];
							var num=Math.min(9,ui.cardPile.childElementCount);
							for(var i=0;i<num;i++){
								list.push(ui.cardPile.childNodes[i]);
							}
							dialog.addSmall(list);
						}
						else{
							dialog.addText('剩余'+content+'次');
						}
					},
					content:function(content,player){
						if(player.isUnderControl(true)){
							var list=[];
							var num=Math.min(9,ui.cardPile.childElementCount);
							for(var i=0;i<num;i++){
								list.push(ui.cardPile.childNodes[i]);
							}
							return get.translation(list);
						}
						else{
							return '剩余'+content+'次';
						}
					}
				},
				subSkill:{
					ai:{
						trigger:{global:'drawAfter'},
						filter:function(event,player){
							return (_status.auto||!player.isUnderControl(true))&&player.storage.gwjingtian>0&&!player.hasSkill('gwjingtian2');
						},
						popup:false,
						check:function(event,player){
							var value=0,card=ui.cardPile.firstChild;
							if(card){
								value=get.value(card);
							}
							if(value>=6) return true;
							if(value>=5&&get.type(card)!='equip'&&player.storage.gwjingtian>=3) return true;
							if(player.storage.gwjingtian>3&&value>3) return true;
							return false;
						},
						content:function(){
							lib.skill.gwjingtian.clickable(player);
						}
					}
				}
			},
			gwjingtian2:{},
			gwjingshi:{
				enable:'phaseUse',
				usable:1,
				direct:true,
				delay:0,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('h');
					})
				},
				content:function(){
					'step 0'
					var targets=game.filterPlayer(function(current){
						return current.countCards('h');
					});
					var num=targets.length;
					for(var i=0;i<targets.length;i++){
						targets[i]=[targets[i],targets[i].countCards('h',{color:'black'})];
					}
					targets.sort(function(a,b){
						return b[1]-a[1];
					});
					for(var i=1;i<targets.length;i++){
						if(targets[i][1]<targets[0][1]){
							targets.splice(i);break;
						}
					}
					for(var i=0;i<targets.length;i++){
						targets[i]=targets[i][0];
					}
					event.targets=targets;
					var rand=Math.random();
					var choice=targets.randomGet();
					player.chooseTarget('猜测手牌中黑色牌最多的角色',true,function(card,player,target){
						return target.countCards('h');
					}).set('ai',function(target){
						if(rand<0.6||player==game.me){
							return target.isMaxHandcard()?1:0;
						}
						else if(rand<0.8){
							return target==choice?1:0;
						}
						else{
							return Math.random();
						}
					});
					'step 1'
					if(event.targets.contains(result.targets[0])){
						player.popup('成功');
						game.log(player,'发动','【镜师】','成功');
						var dialog=ui.create.dialog('hidden');
						dialog.add('获得任意一名角色的一张手牌');
						var list=game.filterPlayer(function(current){
							return current!=player&&current.countCards('h');
						}).sortBySeat();
						for(var i=0;i<list.length;i++){
							dialog.addText(get.translation(list[i]));
							dialog.add(list[i].getCards('h'));
						}
						player.chooseButton(dialog,true).set('ai',function(button){
							if(get.attitude(player,get.owner(button.link))>0) return -1;
							return get.value(button.link);
						});
					}
					else{
						player.popup('失败');
						game.log(player,'发动','【镜师】','失败');
						event.finish();
					}
					'step 2'
					if(result.bool&&result.links&&result.links.length){
						var owner=get.owner(result.links[0]);
						if(owner){
							owner.give(result.links,player);
							player.line(owner);
						}
						else{
							player.gain(result.links,'gain2');
						}
					}
				},
				ai:{
					order:10,
					result:{
						player:10
					}
				}
			},
			gwweitu:{
				trigger:{player:'discardAfter'},
				forced:true,
				filter:function(event,player){
					return player.hujia<3;
				},
				content:function(){
					player.changeHujia();
					// var num=Math.min(trigger.cards.length,3-player.hujia);
					// if(num>0){
					// 	player.changeHujia();
					// }
				},
				init:function(player){
					player.storage.gwweitu=0;
				},
				intro:{
					content:'护甲自上次计算起已抵挡#点伤害'
				},
				group:'gwweitu_gain',
				subSkill:{
					gain:{
						trigger:{player:'damageZero'},
						filter:function(event){
							return event.hujia;
						},
						forced:true,
						content:function(){
							player.storage.gwweitu++;
							if(player.storage.gwweitu>=3){
								player.storage.gwweitu-=3;
								player.unmarkSkill('gwweitu');
								var list=get.typeCard('spell_silver');
								if(list.length){
									player.gain(game.createCard(list.randomGet()),'draw');
								}
							}
							else{
								player.markSkill('gwweitu',true);
							}
						}
					}
				},
				ai:{
					threaten:0.7,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'discard')&&target.hujia<3&&
								target.countCards('he')&&current<0){
								return 0;
							}
						},
						player:function(card,player){
							if(player.hujia>=3) return;
							if(_status.event.name!='chooseToUse'||_status.event.player!=player) return;
							if(get.type(card)=='basic') return;
							if(get.tag(card,'gain')) return;
							if(get.value(card,player,'raw')>=7) return;
							if(player.needsToDiscard()>1) return;
							return 'zeroplayertarget';
						}
					}
				}
			},
			gwgouhun:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				discard:false,
				prepare:'give',
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				check:function(card){
					return 7-get.value(card);
				},
				content:function(){
					'step 0'
					target.gain(cards,player);
					event.card=cards[0];
					event.suit=get.suit(cards[0]);
					'step 1'
					var hs=target.getCards('h');
					var num1=0;
					var num2=0;
					for(var i=0;i<hs.length;i++){
						if(get.suit(hs[i])==event.suit){
							num1++;
						}
						else{
							num2++;
						}
					}
					event.num1=num1;
					event.num2=num2;
					var list=[
						'将手牌中的'+get.translation(event.suit)+'牌交给'+get.translation(player),
						'弃置手牌中的非'+get.translation(event.suit)+'牌',
						'进入混乱状态直到下一回合结束'
					];
					if(num1&&num2){
						target.chooseControlList(list,true,function(){
							if(num1>2&&num2>3){
								return 2;
							}
							if(num1>num2/2){
								return 1;
							}
							else if(num1<num2/2){
								return 0;
							}
							return get.rand(2);
						});
					}
					else if(num1){
						list.splice(1,1);
						target.chooseControlList(list,true,function(){
							if(num1>2) return 1;
							return 0;
						});
					}
					else if(num2){
						list.splice(0,1);
						target.chooseControlList(list,true,function(){
							if(num2>3) return 1;
							return 0;
						});
					}
					else{
						target.goMad({player:'phaseAfter'});
						event.finish();
					}
					'step 2'
					var index=result.index;
					var cards1=target.getCards('h',function(card){
						return get.suit(card)==event.suit;
					});
					var cards2=target.getCards('h',function(card){
						return get.suit(card)!=event.suit;
					});
					if(typeof index=='number'){
						if(event.num1&&event.num2){
							if(index==0){
								target.give(cards1,player);
							}
							else if(index==1){
								target.discard(cards2);
							}
							else{
								target.goMad({player:'phaseAfter'});
							}
						}
						else{
							if(index==1){
								target.goMad({player:'phaseAfter'});
							}
							else if(event.num1){
								target.give(cards1,player);
							}
							else{
								target.discard(cards2);
							}
						}
					}
				},
				ai:{
					threaten:1.5,
					order:9,
					result:{
						target:function(player,target){
							return -Math.sqrt(target.countCards('h'));
						}
					}
				}
			},
			gwfutian:{
				trigger:{player:'damageBefore'},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')) return [0,0];
						}
					},
				},
				init:function(player){
					player.storage.gwfutian=0;
				},
				intro:{
					content:'弃置的牌总点数：#'
				},
				unique:true,
				onremove:true,
				group:'gwfutian_discard',
				subSkill:{
					discard:{
						trigger:{player:'phaseBegin'},
						forced:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current!=player&&current.countCards('h');
							});
						},
						content:function(){
							'step 0'
							player.chooseTarget('覆天：弃置一名角色的一张手牌',function(card,player,target){
								return target!=player&&target.countCards('h');
							}).set('ai',function(target){
								if(target.hasSkillTag('noh')) return 0;
								return -get.attitude(player,target)/Math.sqrt(target.countCards('h'));
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.discardPlayerCard(target,'h',true);
								player.line(target,'green');
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool&&result.cards&&result.cards.length){
								player.storage.gwfutian+=get.number(result.cards[0]);
								player.markSkill('gwfutian',true);
							}
							'step 3'
							if(player.storage.gwfutian>=24){
								player.$skill('覆天','legend','metal');
								player.removeSkill('gwfutian');
								player.addSkill('gwzhongmo');
								player.setAvatar('gw_kanbi','gw_hanmuduoer');
								player.maxHp+=4;
								player.hp=player.maxHp;
								player.update();
							}
						}
					}
				}
			},
			gwzhongmo:{
				trigger:{player:'phaseDrawBefore'},
				forced:true,
				content:function(){
					trigger.cancel();
					var list=['bronze','silver','gold'];
					list.randomRemove();
					var cards=[];
					for(var i=0;i<list.length;i++){
						var list2=get.typeCard('spell_'+list[i]);
						if(list2.length){
							cards.push(game.createCard(list2.randomGet()));
						}
					}
					if(cards.length){
						player.gain(cards,'draw2');
					}
				}
			},
			gwyewu:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					if(!player.countCards('he')) return false;
					var targets=player.getEnemies();
					for(var i=0;i<targets.length;i++){
						if(targets[i].countCards('he')) return true;
					}
					return false;
				},
				filterCard:true,
				position:'h',
				check:function(card){
					return 8-get.value(card);
				},
				global:'g_gw_yewu',
				content:function(){
					'step 0'
					event.targets=player.getEnemies();
					event.color=get.color(cards[0]);
					event.nh=0;
					event.ne=0;
					'step 1'
					event.repeat=false;
					var list=game.filterPlayer(function(current){
						return event.targets.contains(current)&&current.countCards('he');
					});
					if(list.length){
						var target=list.randomGet();
						var card=target.randomDiscard()[0];
						player.line(target,'green');
						if(get.position(card)=='e'){
							event.ne++;
						}
						else{
							event.nh++;
						}
						if(card&&get.color(card)==event.color){
							event.redo();
						}
					}
					'step 2'
					var togain=[];
					for(var i=0;i<event.nh;i++){
						togain.push(game.createCard('gw_wuyao'));
					}
					for(var i=0;i<event.ne;i++){
						togain.push(game.createCard('gw_lang'));
					}
					player.gain(togain,'gain2');
				},
				ai:{
					order:8,
					result:{
						player:1
					}
				}
			},
			g_gw_yewu:{
				trigger:{player:'phaseAfter'},
				silent:true,
				content:function(){
					var cards=player.getCards('h','gw_wuyao').concat(player.getCards('h','gw_lang'));
					if(cards.length){
						player.lose(cards).position=null;
					}
				}
			},
			shuangxi:{
				enable:'phaseUse',
				round:2,
				filterTarget:function(card,player,target){
					if(player.getStat('damage')){
						return player.canUse('gw_baishuang',target);
					}
					else{
						return player.canUse('gw_ciguhanshuang',target);
					}
				},
				// changeTarget:function(player,targets){
				// 	if(!player.getStat('damage')){
				// 		game.filterPlayer(function(current){
				//             return get.distance(targets[0],current,'pure')==1;
				//         },targets);
				// 	}
				// },
				selectTarget:function(){
					if(_status.event.player.getStat('damage')){
						return [1,3];
					}
					else{
						return 1;
					}
				},
				delay:0,
				multitarget:true,
				multiline:true,
				prompt:function(){
					if(_status.event.player.getStat('damage')){
						return '视为使用一张【白霜】';
					}
					else{
						return '视为使用一张【刺骨寒霜】';
					}
				},
				content:function(){
					if(player.getStat('damage')){
						player.useCard({name:'gw_baishuang'},targets);
					}
					else{
						player.useCard({name:'gw_ciguhanshuang'},targets);
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							if(player.getStat('damage')){
								return get.effect(target,{name:'gw_baishuang'},player,player);
							}
							else{
								return get.effect(target,{name:'gw_ciguhanshuang'},player,player);
							}
						}
					}
				}
			},
			yangfan:{
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return get.type(event.card)!='equip'&&player.countCards('h',{color:get.color(event.card)})>0;
				},
				content:function(){
					'step 0'
					var cards=player.getCards('h',{suit:get.suit(trigger.card)});
					if(!cards.length){
						cards=player.getCards('h',{color:get.color(trigger.card)});
					}
					if(!cards.length){
						event.finish();
						return;
					}
					event.chosen=cards.randomGet();
					game.delay(0.5)
					'step 1'
					var card=event.chosen;
					player.lose(card,ui.discardPile);
					player.$throw(card,1000);
					game.delay(0.5);
					game.log(player,'重铸了',card);
					'step 2'
					player.draw().log=false;
				},
				ai:{
					pretao:true
				}
			},
			gwfengshi:{
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseControlList(get.prompt('gwfengshi'),['为自己施加一个随机负面效果，并对两名随机敌人施加一个随机负面效果','为自己施加两个随机正面效果，并对一名随机敌人施加一个随机正面效果'],function(){
						if(player.getEnemies().length<2) return 1;
						if(player.hp<=1) return 1;
						if(player.hp==2&&Math.random()<0.5) return 1;
						return 0;
					});
					'step 1'
					if(result.index!=2){
						player.logSkill('gwfengshi');
						if(result.index==0){
							event.debuff=[player].addArray(player.getEnemies().randomGets(2));
						}
						else{
							event.buff=[player,player,player.getEnemies().randomGet()];
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.debuff&&event.debuff.length){
						player.line(event.debuff.shift().getDebuff(false).addExpose(0.1),'green');
						event.redo();
					}
					'step 3'
					if(event.buff&&event.buff.length){
						player.line(event.buff.shift().getBuff(false).addExpose(0.1),'green');
						event.redo();
					}
					'step 4'
					game.delay();
				}
			},
			gwchenshui:{
				trigger:{player:'damageBefore',source:'damageBefore'},
				forced:true,
				init:function(player){
					player.storage.gwchenshui=0;
				},
				mark:true,
				intro:{
					content:function(storage){
						if(!storage){
							return '未发动过沉睡效果';
						}
						else{
							return '累计发动过'+storage+'次沉睡效果';
						}
					}
				},
				logTarget:function(event,player){
					if(player==event.source) return event.player;
					return event.source;
				},
				content:function(){
					trigger.cancel();
					player.storage.gwchenshui++;
					player.updateMarks();
					if(trigger.source!=trigger.player&&trigger.source.isIn()&&trigger.player.isIn()){
						var cards=trigger.player.getCards('he');
						if(cards.length){
							trigger.player.give(cards.randomGet(),trigger.source);
						}
					}
				},
				onremove:true,
				group:'gwchenshui_juexing',
				subSkill:{
					juexing:{
						trigger:{player:'phaseEnd'},
						filter:function(event,player){
							return player.storage.gwchenshui>=3;
						},
						skillAnimation:true,
						animationStr:'觉醒',
						forced:true,
						content:function(){
							'step 0'
							player.removeSkill('gwchenshui');
							player.setAvatar('gw_laomaotou','gw_laomaotou2');
							event.list=player.getEnemies().sortBySeat();
							'step 1'
							if(event.list.length){
								var target=event.list.shift();
								player.line(target,'green');
								target.damage();
								event.redo();
							}
							'step 2'
							player.addSkill('gwliedi');
						}
					}
				},
				ai:{
					threaten:0.6,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return;
								if(!target.countCards('he')) return 'zeroplayertarget';
							}
						}
					}
				}
			},
			gwliedi:{
				trigger:{source:'damageBegin'},
				forced:true,
				filter:function(event,player){
					return event.player!=player&&player.distanceTo(event.player)>=2;
				},
				content:function(){
					trigger.num+=Math.floor(Math.max(1,player.distanceTo(trigger.player))/2);
				},
				group:['gwliedi_sleep','gwliedi_damage'],
				onremove:true,
				subSkill:{
					damage:{
						trigger:{source:'damageEnd'},
						silent:true,
						filter:function(event,player){
							return event.player!=player;
						},
						content:function(){
							player.storage.gwliedi=-1;
						},
					},
					sleep:{
						trigger:{player:'phaseEnd'},
						silent:true,
						content:function(){
							if(player.storage.gwliedi!=1){
								if(player.storage.gwliedi==-1){
									player.storage.gwliedi=0;
								}
								else{
									player.storage.gwliedi=1;
								}
							}
							else{
								player.logSkill('gwliedi');
								player.addSkill('gwchenshui');
								player.removeSkill('gwliedi');
								player.setAvatar('gw_laomaotou','gw_laomaotou');
							}
						}
					}
				}
			},
			julian:{
				trigger:{player:'phaseUseBegin'},
				frequent:true,
				filter:function(event,player){
					return !player.isMaxHandcard();
				},
				content:function(){
					var num=0;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player){
							num=Math.max(num,game.players[i].countCards('h'));
						}
					}
					var dh=num-player.countCards('h');
					if(dh>0){
						player.draw(dh);
					}
				}
			},
			gwfusheng:{
				enable:'chooseToUse',
				filter:function(event,player){
					return event.type=='dying'&&event.dying&&!event.dying.isTurnedOver();
				},
				filterTarget:function(card,player,target){
					return target==_status.event.dying;
				},
				selectTarget:-1,
				content:function(){
					target.turnOver();
					target.recover();
					if(player!=target){
						game.asyncDraw([player,target]);
					}
					else{
						player.draw(2);
					}
				},
				ai:{
					order:0.1,
					skillTagFilter:function(player){
						if(!_status.event.dying||_status.event.dying.isTurnedOver()) return false;
					},
					save:true,
					result:{
						target:3
					},
					threaten:1.6
				},
			},
			gwqinwu:{
				trigger:{player:'useCard'},
				usable:1,
				filter:function(event,player){
					return get.type(event.card)=='basic';
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('gwqinwu')).ai=function(target){
						var att=get.attitude(player,target);
						if(att<=0) return 0;
						if(att<3) return att;
						att=10-get.distance(player,target,'absolute')/game.players.length;
						if(target.hasSkill('gwqinwu')){
							att/=1.5;
						}
						if(target.hasJudge('lebu')||target.skipList.contains('phaseUse')){
							att/=2;
						}
						return att;
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('gwqinwu',target);
						target.draw();
						if(!target.hasSkill('gwqinwu')){
							target.addTempSkill('gwqinwu',{player:'phaseAfter'});
							target.addTempSkill('gwqinwu2',{player:'phaseAfter'});
						}
					}
				},
				ai:{
					threaten:1.5
				}
			},
			gwqinwu2:{
				mark:true,
				intro:{
					content:'获得【琴舞】直到下一回合结束'
				}
			},
			huanshu:{
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('huangshu2');
				},
				content:function(){
					"step 0"
					player.chooseCard(get.prompt2('huanshu')).ai=function(card){
						return 6-get.value(card);
					};
					"step 1"
					if(result.bool){
						player.$give(result.cards,player);
						player.logSkill('huanshu');
						player.storage.huanshu2=result.cards[0];
						player.lose(result.cards,ui.special);
						player.addSkill('huanshu2');
					}
				},
				ai:{
					threaten:1.4
				},
			},
			huanshu2:{
				intro:{
					content:function(storage,player){
						if(player.isUnderControl(true)){
							return '当一名敌方角色使用'+get.translation(get.color(storage))+'锦囊牌时，移去'+get.translation(storage)+'，取消锦囊的效果，并摸两张牌';
						}
						else{
							return '当一名敌方角色使用与“幻术”牌颜色相同的锦囊牌时，移去“幻术”牌，取消锦囊的效果，并摸两张牌';
						}
					},
					onunmark:function(storage,player){
						if(storage){
							storage.discard();
							delete player.storage.huanshu2;
						}
					}
				},
				trigger:{global:'useCard'},
				forced:true,
				filter:function(event,player){
					return player.getEnemies().contains(event.player)&&
						get.type(event.card,'trick')=='trick'&&get.color(event.card)==get.color(player.storage.huanshu2);
				},
				mark:true,
				content:function(){
					'step 0'
					game.delayx();
					player.addExpose(0.1);
					trigger.player.addExpose(0.1);
					'step 1'
					player.showCards(player.storage.huanshu2,get.translation(player)+'发动了【幻术】');
					'step 2'
					player.removeSkill('huanshu2');
					trigger.cancel();
					player.draw(2);
				},
				group:'huanshu3'
			},
			huanshu3:{
				trigger:{player:'phaseBegin'},
				forced:true,
				content:function(){
					player.$throw(player.storage.huanshu2);
					game.log(player,'弃置了',player.storage.huanshu2);
					player.removeSkill('huanshu2');
				}
			},
			gwjieyin:{
				group:'gwjieyin_reset',
				init:function(player){
					player.storage.gwjieyin=[];
				},
				enable:'phaseUse',
				filter:function(event,player){
					return player.storage.gwjieyin.length<3;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('结印',[[['','','gw_wenyi'],['','','gw_yanziyaoshui'],['','','gw_kunenfayin']],'vcard'],'hidden');
					},
					filter:function(button,player){
						if(player.storage.gwjieyin.contains(button.link[2])){
							return false;
						}
						return true;
					},
					check:function(button){
						var player=_status.event.player;
						if(button.link[2]=='gw_yanziyaoshui'){
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)>1&&current.isMinHandcard();
							})){
								return 3;
							}
							else if((game.roundNumber-player.storage.gwjieyin_round)%2==0){
								return 0;
							}
							else{
								return 0.5;
							}
						}
						else if(button.link[2]=='gw_wenyi'){
							if(game.countPlayer(function(current){
								if(current.isMinHp()){
									if(!current.countCards('h')){
										return -2*get.sgn(get.attitude(player,current));
									}
									else{
										return -get.sgn(get.attitude(player,current));
									}
								}
							})>0){
								return 2;
							}
							else{
								return 0;
							}
						}
						else{
							return 1;
						}
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:{name:links[0][2]},
							popname:true,
							onuse:function(result,player){
								player.logSkill('gwjieyin');
								player.storage.gwjieyin.add(result.card.name);
							}
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][2])+'的目标';
					}
				},
				subSkill:{
					reset:{
						trigger:{player:'phaseBegin'},
						silent:true,
						content:function(){
							if(typeof player.storage.gwjieyin_round=='number'){
								var num=game.roundNumber-player.storage.gwjieyin_round;
								if(num&&num%2==0){
									player.storage.gwjieyin.length=0;
									player.storage.gwjieyin_round=game.roundNumber;
								}
							}
							else{
								player.storage.gwjieyin_round=game.roundNumber;
							}
						}
					}
				},
				ai:{
					order:6,
					result:{
						player:1
					}
				}
			},
			zhengjun:{
				init:function(player){
					player.storage.zhengjun=[];
					player.storage.zhengjun_one=[];
				},
				trigger:{player:'zhengjun'},
				forced:true,
				intro:{
					content:'已经使用或打出过至少两张同名牌的牌有：$'
				},
				content:function(){
					'step 0'
					player.markSkill('zhengjun');
					player.gainMaxHp();
					'step 1'
					player.recover();
				},
				group:['zhengjun_one','zhengjun_draw'],
				subSkill:{
					one:{
						trigger:{player:['useCard','respondAfter']},
						silent:true,
						content:function(){
							if(player.storage.zhengjun_one.contains(trigger.card.name)){
								if(!player.storage.zhengjun.contains(trigger.card.name)){
									player.storage.zhengjun.add(trigger.card.name);
									event.trigger('zhengjun');
								}
							}
							else{
								player.storage.zhengjun_one.add(trigger.card.name);
							}
						}
					},
					draw:{
						trigger:{player:'phaseEnd'},
						frequent:true,
						filter:function(event,player){
							return player.storage.zhengjun.length>=1;
						},
						content:function(){
							'step 0'
							if(player.storage.zhengjun.length==1){
								player.draw();
								event.finish();
								return;
							}
							event.cards=get.cards(player.storage.zhengjun.length);
							player.chooseCardButton('整军：获得其中一张牌',true,event.cards).set('ai',function(button){
								return get.useful(button.link);
							});
							'step 1'
							if(result.bool){
								var card=result.links[0];
								card.fix();
								player.gain(card,'draw');
								event.cards.remove(card);
							}
							'step 2'
							while(event.cards.length){
								ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
							}
						}
					}
				}
			},
			gwxuezhan:{
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.isMinHandcard();
				},
				frequent:true,
				content:function(){
					player.gain(game.createCard('gw_shizizhaohuan'),'gain2');
				}
			},
			jielue_old:{
				trigger:{player:'useCard'},
				frequent:true,
				oncancel:function(event,player){
					player.addTempSkill('jielue2');
				},
				usable:1,
				filter:function(event,player){
					if(event.card.isCard){
						return !player.hasSkill('jielue2')&&get.type(event.card)=='basic'&&!event.card.storage.jielue;
					}
					return false;
				},
				check:function(event,player){
					return get.value(event.card)>3;
				},
				content:function(){
					var card1=game.createCard(trigger.card);
					var card2=game.createCard(trigger.card);
					card1.storage.jielue=true;
					card2.storage.jielue=true;
					player.gain([card1,card2],'gain2');
				},
				ai:{
					pretao:true
				}
			},
			jielue2:{},
			bolang:{
				trigger:{player:'phaseBegin'},
				frequent:true,
				init:function(player){
					player.storage.bolang=[];
				},
				content:function(){
					'step 0'
					var cards=[];
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						cards.push(ui.cardPile.childNodes[i]);
					}
					player.chooseCardButton('搏浪：将至多3张牌移至弃牌堆',[1,3],cards.slice(0,6)).ai=function(button){
						if(button.link==cards[0]||button.link==cards[1]){
							return get.value(button.link)-5;
						}
						else if(button.link==cards[4]||button.link==cards[5]){
							return get.value(button.link)/5;
						}
					};
					'step 1'
					if(result.bool){
						for(var i=0;i<player.storage.bolang.length;i++){
							if(!player.storage.bolang[i].vanishtag.contains('bolang')){
								player.storage.bolang.splice(i--,1);
							}
						}
						player.storage.bolang.addArray(result.links);
						for(var i=0;i<result.links.length;i++){
							result.links[i].vanishtag.add('bolang');
							result.links[i].discard();
						}
					}
				},
				group:'bolang_gain',
				subSkill:{
					gain:{
						trigger:{source:'damageEnd'},
						direct:true,
						usable:1,
						filter:function(event,player){
							for(var i=0;i<player.storage.bolang.length;i++){
								if(player.storage.bolang[i].vanishtag.contains('bolang')){
									return true;
								}
							}
						},
						content:function(){
							'step 0'
							var list=[];
							for(var i=0;i<player.storage.bolang.length;i++){
								if(player.storage.bolang[i].vanishtag.contains('bolang')){
									list.push(player.storage.bolang[i]);
								}
							}
							player.chooseCardButton(true,list,get.prompt('bolang'));
							'step 1'
							if(result.bool){
								player.logSkill('bolang');
								player.gain(result.links,'gain2');
							}
						}
					}
				}
			},
			gwjushi:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.hasSkill('gwjushi2');
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target)<=1&&target.countCards('he');
				},
				content:function(){
					var hs=target.getCards('he');
					if(hs.length){
						var card=hs.randomGet();
						target.$give(card,player);
						player.storage.gwjushi2=card;
						player.storage.gwjushi3=target;
						player.storage.gwjushi4=get.position(card);
						target.lose(card,ui.special);
						player.addSkill('gwjushi2');
					}
				},
				ai:{
					order:8,
					result:{
						target:-1
					}
				}
			},
			gwjushi2:{
				mark:'card',
				intro:{
					content:'受到伤害时，令此牌回归原位；准备阶段，你获得此牌'
				},
				trigger:{player:['phaseBegin','damageEnd']},
				forced:true,
				content:function(){
					var card=player.storage.gwjushi2;
					var target=player.storage.gwjushi3;
					if(trigger.name=='damage'){
						if(target.isIn()){
							if(player.storage.gwjushi4=='e'&&get.type(card)=='equip'){
								target.equip(card);
								player.$give(card,target);
								game.delay();
							}
							else{
								player.give(card,target);
							}
						}
						else{
							card.discard();
						}
					}
					else{
						player.gain(card,'gain2');
					}
					player.removeSkill('gwjushi2');
				},
				onremove:['gwjushi2','gwjushi3','gwjushi4'],
				ai:{
					threaten:1.5
				}
			},
			gwfengchi:{
				trigger:{player:'phaseUseBegin'},
				forced:true,
				content:function(){
					'step 0'
					var list=get.gainableSkills(function(info){
						if(typeof info.enable=='string') return info.enable=='phaseUse';
						if(Array.isArray(info.enable)) return info.enable.contains('phaseUse');
					},player);
					list.remove(player.getSkills());
					list=list.randomGets(3);
					event.skillai=function(){
						return get.max(list,get.skillRank,'item');
					};
					if(event.isMine()){
						var dialog=ui.create.dialog('forcebutton');
						dialog.add('风驰：选择获得一项技能');
						var clickItem=function(){
							_status.event._result=this.link;
							dialog.close();
							game.resume();
						};
						for(var i=0;i<list.length;i++){
							if(lib.translate[list[i]+'_info']){
								var translation=get.translation(list[i]);
								if(translation[0]=='新'&&translation.length==3){
									translation=translation.slice(1,3);
								}
								else{
									translation=translation.slice(0,2);
								}
								var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
								translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
								item.firstChild.addEventListener('click',clickItem);
								item.firstChild.link=list[i];
							}
						}
						dialog.add(ui.create.div('.placeholder'));
						event.switchToAuto=function(){
							event._result=event.skillai();
							dialog.close();
							game.resume();
						};
						_status.imchoosing=true;
						game.pause();
					}
					else{
						event._result=event.skillai();
					}
					'step 1'
					_status.imchoosing=false;
					var link=result;
					player.addTempSkill(link,'phaseUseAfter');
					player.popup(link);
					player.flashAvatar('gwfengchi',link);
					game.log(player,'获得了技能','【'+get.translation(link)+'】');
					game.delay();
				}
			},
			lingji:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					player.chooseToDiscard('he',2,true).ai=function(card){
						var val=-get.value(card);
						if(ui.selected.cards.length){
							if(get.suit(card)==get.suit(ui.selected.cards[0])) val++;
							if(get.number(card)==get.number(ui.selected.cards[0])) val+=3;
						}
						return val;
					}
					'step 2'
					if(result.cards.length==2){
						var list=[];
						if(get.suit(result.cards[0])==get.suit(result.cards[1])){
							var list1=get.typeCard('spell_bronze');
							if(list1.length){
								list.push(game.createCard(list1.randomGet()));
							}
						}
						if(get.number(result.cards[0])==get.number(result.cards[1])){
							var list2=get.typeCard('spell_silver');
							if(list2.length){
								list.push(game.createCard(list2.randomGet()));
							}
						}
						if(list.length){
							player.gain(list,'gain2');
						}
					}
				},
				ai:{
					order:8,
					result:{
						player:1
					}
				}
			},
			gwjinyan:{
				trigger:{player:['damageBefore']},
				forced:true,
				mark:true,
				filter:function(event,player){
					return game.roundNumber%3!=0;
				},
				content:function(){
					trigger.cancel();
				},
				group:['gwjinyan_gain'],
				subSkill:{
					gain:{
						trigger:{player:'phaseBegin'},
						frequent:true,
						filter:function(){
							return game.roundNumber%3==0;
						},
						content:function(){
							var list=get.typeCard('spell_gold');
							if(list.length){
								player.gain(game.createCard(list.randomGet()),'gain2');
							}
						}
					}
				},
				ai:{
					threaten:function(){
						if(game.roundNumber%3==0) return 1.6;
						return 0.8;
					},
					nofire:true,
					nothunder:true,
					nodamage:true,
					skillTagFilter:function(){
						if(game.roundNumber%3==0) return false;
					},
					effect:{
						target:function(card,player,target){
							if(game.roundNumber%3!=0&&get.tag(card,'damage')){
								return [0,0];
							}
						}
					}
				}
			},
			gwshenyu:{
				trigger:{player:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					if(game.hasPlayer(function(current){
						return current.isDamaged();
					})){
						return true;
					}
					for(var i=0;i<ui.discardPile.childElementCount;i++){
						var card=ui.discardPile.childNodes[i];
						if(card.vanishtag.contains('_gwshenyu')) continue;
						if(get.type(card)=='spell'&&get.subtype(card)!='spell_gold'){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<ui.discardPile.childElementCount;i++){
						var card=ui.discardPile.childNodes[i];
						if(card.vanishtag.contains('_gwshenyu')) continue;
						if(get.type(card)=='spell'&&get.subtype(card)!='spell_gold'){
							list.push(card);
						}
					}
					event.list=list;
					player.chooseTarget(get.prompt('gwshenyu'),function(card,player,target){
						return list.length||target.isDamaged();
					}).ai=function(target){
						var att=get.attitude(player,target);
						if(att<=0) return 0;
						var num=1;
						if(player==target){
							num+=1;
						}
						if(target.hp==1){
							num+=2;
						}
						return num*att;
					};
					'step 1'
					if(result.bool){
						player.logSkill('gwshenyu',result.targets);
						event.target=result.targets[0];
						if(!event.list.length){
							event.target.recover();
							event.finish();
						}
						else if(event.target.isHealthy()){
							event.directbool=true;
						}
						else{
							event.target.chooseControl(function(event,player){
								if(player.hp>=3&&!player.needsToDiscard()) return 1;
								if(player.hp==2&&player.hasShan()&&player.countCards('h')<=1) return 1;
								return 0;
							}).set('choiceList',[
								'回复一点体力','从弃牌堆中获得一张非金法术'
							]);
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(!event.directbool&&result.index==0){
						event.target.recover();
						event.finish();
					}
					'step 3'
					var list=event.list;
					if(list.length){
						event.target.chooseCardButton('选择一张法术牌',list,true).ai=function(button){
							return get.value(button.link);
						};
					}
					else{
						event.finish();
					}
					'step 4'
					if(result.bool){
						result.links[0].vanishtag.add('_gwshenyu');
						event.target.gain(result.links,'gain2','log');
					}
				},
				ai:{
					threaten:2,
					expose:0.2
				}
			},
			junchi:{
				trigger:{global:'shaAfter'},
				direct:true,
				usable:1,
				filter:function(event,player){
					return event.player!=player&&event.target!=player&&event.target.isIn()&&player.hasCard(function(card){
						return player.canUse(card,event.target,false)&&!get.info(card).multitarget;
					});
				},
				content:function(){
					var next=player.chooseToUse(get.prompt('junchi'),trigger.target,-1).set('targetRequired',true);
					next.prompt2='对'+get.translation(trigger.target)+'使用一张牌，并摸一张牌';
					next.filterCard=function(card){
						return player.canUse(card,trigger.target,false)&&!get.info(card).multitarget;
					};
					next.oncard=function(){
						player.draw();
					};
					next.logSkill='junchi';
				},
				subSkill:{
					gold:{
						trigger:{global:'useCardAfter'},
						frequent:true,
						filter:function(event,player){
							return event.player!=player&get.subtype(event.card)=='spell_gold';
						},
						content:function(){
							player.insertPhase();
						}
					}
				},
				// group:'junchi_gold'
			},
			junchi_old:{
				trigger:{global:'shaAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.player!=player&&event.target!=player&&event.player.isIn()&&event.player.countCards('he');
				},
				content:function(){
					'step 0'
					var att=get.attitude(trigger.player,player);
					trigger.player.chooseCard('he','是否交给'+get.translation(player)+'一张牌？').ai=function(card){
						if(att>1){
							if(trigger.target.isIn()){
								return 9-get.value(card);
							}
							return 4-get.value(card);
						}
						return 0;
					}
					'step 1'
					if(result.bool){
						player.logSkill('junchi');
						player.gain(result.cards,trigger.player);
						if(get.position(result.cards[0])=='h'){
							trigger.player.$giveAuto(result.cards,player);
						}
						else{
							trigger.player.$give(result.cards,player);
						}
						trigger.player.addExpose(0.2);
						trigger.player.line(player,'green');
					}
					else{
						event.finish();
					}
					'step 2'
					if(trigger.target.isIn()){
						var next=player.chooseToUse('是否对'+get.translation(trigger.target)+'使用一张牌？',trigger.target,-1).set('targetRequired',true);
						next.filterCard=function(card){
							return player.canUse(card,trigger.target,false)&&!get.info(card).multitarget;
						};
						next.oncard=function(){
							player.recover();
							trigger.player.draw();
						}
					}
				}
			},
			hupeng:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				filterCard:true,
				check:function(card){
					return 7-get.value(card);
				},
				filterTarget:true,
				content:function(){
					'step 0'
					var att=get.attitude(player,target);
					player.chooseVCardButton('选择令'+get.translation(target)+'获得的牌',['gw_dudayuanshuai1','gw_dudayuanshuai2'],true).ai=function(button){
						if(att>0){
							return button.link[2]=='gw_dudayuanshuai1'?1:-1;
						}
						else{
							return button.link[2]=='gw_dudayuanshuai2'?1:-1;
						}
					}
					'step 1'
					if(result.bool){
						target.gain(game.createCard(result.links[0][2]),'gain2');
					}
				},
				ai:{
					threaten:1.5,
					order:6,
					result:{
						target:function(player,target){
							var nh=target.countCards('h');
							if(get.attitude(player,target)>0){
								if(!nh) return 3;
								if(!target.needsToDiscard(1)){
									if(nh==1) return 2.5;
									return 2;
								}
								if(!target.needsToDiscard()) return 1;
								return 0.1;
							}
							else{
								if(!nh) return -0.05;
								if(target.hp==1) return -1;
								if(target.hp==2) return -2.5;
								if(target.hp==3) return -2;
								return -0.5;
							}
						}
					}
				},
				global:['hupeng2','hupeng3','hupeng4']
			},
			hupeng2:{
				mod:{
					cardDiscardable:function(card,player){
						if(card.name=='gw_dudayuanshuai2') return false;
					},
					cardEnabled:function(card,player){
						if(card.name=='gw_dudayuanshuai2') return false;
					},
					cardUsable:function(card,player){
						if(card.name=='gw_dudayuanshuai2') return false;
					},
					cardRespondable:function(card,player){
						if(card.name=='gw_dudayuanshuai2') return false;
					},
					cardSavable:function(card,player){
						if(card.name=='gw_dudayuanshuai2') return false;
					},
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.countCards('h','gw_dudayuanshuai1')&&get.attitude(player,target)<0){
								return 0.4;
							}
						}
					}
				}
			},
			hupeng3:{
				trigger:{player:'phaseEnd'},
				silent:true,
				filter:function(event,player){
					return player.countCards('h','gw_dudayuanshuai2');
				},
				content:function(){
					var hs=player.getCards('h');
					var hs2=player.getCards('h','gw_dudayuanshuai2');
					hs.remove(hs2);
					if(hs.length){
						hs2.addArray(hs.randomGets(hs2.length));
					}
					player.discard(hs2);
				}
			},
			hupeng4:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(event.player==player) return false;
					var num=player.countCards('h','gw_dudayuanshuai1');
					return num>0;
				},
				content:function(){
					'step 0'
					player.chooseToUse({name:'gw_dudayuanshuai1'},'是否对'+get.translation(trigger.card)+'使用【杜达元帅】？').set('ai1',function(card){
						return _status.event.bool;
					}).set('bool',-get.effect(player,trigger.card,trigger.player,player));
					trigger.gw_dudayuanshuai1=true;
					'step 1'
					delete trigger.gw_dudayuanshuai1;
				}
			},
			hunmo:{
				enable:'phaseUse',
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return lib.skill.hunmo.filterTarget(null,player,current);
					});
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(target.hasSkill('hunmo2')) return false;
					var nh=player.countCards('h');
					var nh2=target.countCards('h');
					if(nh<2) return nh2<2;
					return nh2>=2&&target.countDiscardableCards(player,'h');
				},
				prompt:function(event){
					var nh=event.player.countCards('h');
					if(nh<2) return '选择一名手牌数小于2的其他角色，观看牌堆顶的两张牌，你获得一张并交给其另一张';
					return '选择一名手牌数大于2的其他角色，你弃置一张手牌，然后观看并弃置其一张手牌';
				},
				content:function(){
					'step 0'
					target.addTempSkill('hunmo2');
					var nh=player.countCards('h');
					if(nh<2){
						event.cards=get.cards(2);
						player.chooseCardButton(event.cards,'获得一张牌并交给'+get.translation(target)+'另一张牌',true);
					}
					else{
						player.chooseToDiscard('h',true).delay=false;
						event.discard=true;
					}
					'step 1'
					if(event.discard){
						player.discardPlayerCard(target,'h',true,'visible');

					}
					else{
						if(result.links&&result.links.length){
							player.gain(result.links,false);
							event.cards.remove(result.links[0]);
							target.gain(event.cards,false);
							player.$drawAuto(result.links);
							target.$drawAuto(event.cards);
						}
					}
					'step 2'
					game.delay();
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						if(player.countCards('h')<2) return 11;
						return 6;
					},
					threaten:1.2,
					result:{
						target:function(player,target){
							if(player.countCards('h')<2) return 1;
							if(player.hasCard(function(card){
								return get.value(card)<=5
							})){
								return -1;
							}
						}
					}
				},
				// group:'hunmo_draw',
				subSkill:{
					draw:{
						trigger:{player:'phaseEnd'},
						filter:function(event,player){
							return player.getStat('skill').hunmo>=3;
						},
						frequent:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('魂墨：造成一点伤害')).ai=function(target){
								return get.damageEffect(target,player,player);
							}
							'step 1'
							if(result.bool){
								player.logSkill('hunmo_draw',result.targets);
								result.targets[0].damage();
							}
						}
					},
				}
			},
			hunmo2:{},
			hunmo3:{},
			shuijian:{
				trigger:{player:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var targets=player.getEnemies();
					var num=0;
					for(var i=0;i<targets.length;i++){
						num+=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
					}
					event.targets=targets;
					player.chooseToDiscard(get.prompt('shuijian')).set('ai',function(card){
						if(num>=3) return 10-get.value(card);
						if(num>=2) return 9-get.value(card);
						if(num>=1) return 7-get.value(card);
						return 0;
					}).logSkill='shuijian';
					'step 1'
					if(result.bool){
						for(var i=0;i<event.targets.length;i++){
							event.targets[i].addExpose(0.1);
						}
						player.useCard({name:'wanjian'},event.targets);
					}
				},
				ai:{
					threaten:1.6
				}
			},
			yunhuo:{
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return game.roundNumber%4==0&&event.skill!='yunhuo';
				},
				forced:true,
				content:function(){
					'step 0'
					player.insertPhase();
					event.list=player.getEnemies().sortBySeat();
					'step 1'
					if(event.list.length){
						var target=event.list.shift();
						player.line(target,'fire');
						if(target.countCards('h')){
							target.randomDiscard('h',false);
						}
						else{
							target.damage('fire');
						}
						event.redo();
					}
					'step 2'
					game.delayx();
				}
			},
			yinzhang:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				check:function(card){
					return 8-get.value(card)
				},
				content:function(){
					'step 0'
					var list=get.typeCard('spell_silver').randomGets(3);
					if(!list.length){
						event.finish();
						return;
					}
					var dialog=ui.create.dialog('选择一张加入你的手牌',[list,'vcard'],'hidden');
					player.chooseButton(dialog,true);
					'step 1'
					player.gain(game.createCard(result.links[0][2]),'draw');
				},
				ai:{
					order:8,
					threaten:1.3,
					result:{
						player:1
					},
				}
			},
			gwtianbian:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					var num1=0,num2=0;
					var choice;
					if(player.hasUnknown(2)){
						if(game.dead.length==0){
							choice='选项二';
						}
						else{
							choice='cancel2';
						}
					}
					else{
						game.countPlayer(function(current){
							var att=get.attitude(player,current);
							if(att>0){
								num1++;
							}
							else if(att<0){
								num2++;
							}
						});
						choice=(num1>num2)?'选项一':'选项二';
					}
					player.chooseControl('选项一','选项二','cancel2',function(){
						return choice;
					}).set('prompt',get.prompt('gwtianbian')).set('choiceList',['随机使用一张对全场有正面效果的牌','随机使用一张对全场有负面效果的牌']);
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('gwtianbian');
						var list=[];
						for(var i in lib.card){
							if(lib.inpile.contains(i)&&
							lib.card[i].selectTarget==-1&&
							lib.card[i].type!='equip'&&
							lib.card[i].ai&&lib.card[i].ai.tag&&
							lib.card[i].ai.tag.multitarget){
								if(lib.card[i].ai.tag.multineg){
									if(result.control=='选项二'){
										list.push(i);
									}
								}
								else{
									if(result.control=='选项一'){
										list.push(i);
									}
								}
							}
						}
						var name=null;
						while(list.length){
							name=list.randomRemove();
							if(game.hasPlayer(function(current){
								return player.canUse(name,current)
							})){
								break;
							}
							else{
								name=null;
							}
						}
						if(name){
							var targets=game.filterPlayer(function(current){
								return player.canUse(name,current);
							});
							targets.sortBySeat();
							player.useCard({name:name},targets);
						}
					}
				}
			},
			gwxiaoshou:{
				enable:'phaseUse',
				usable:2,
				filterTarget:function(card,player,target){
					return target.isMaxHp();
				},
				check:function(card){return 7-get.value(card);},
				position:'he',
				filterCard:true,
				content:function(){
					target.damage();
				},
				ai:{
					result:{
						target:function(player,target){
							return get.damageEffect(target,player);
						},
					},
					order:7
				}
			},
			kuanglie:{
				trigger:{player:'useCardToBegin'},
				filter:function(event,player){
					return event.target&&event.target!=player&&event.target.countCards('he')&&get.color(event.card)=='black';
				},
				init:function(player){
					player.storage.kuanglie=0;
				},
				forced:true,
				content:function(){
					trigger.target.randomDiscard();
					player.storage.kuanglie++;
					if(player.storage.kuanglie%2==0){
						player.draw();
					}
				}
			},
			kuanglie2:{},
			gwjiquan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he');
				},
				selectTarget:[1,Infinity],
				content:function(){
					'step 0'
					player.gainPlayerCard(target,'he',true);
					'step 1'
					target.useCard({name:'sha'},player);
				},
				ai:{
					threaten:1.4,
					order:7,
					result:{
						target:function(player,target){
							if(player.getEquip('tengjia')||player.getEquip('bagua')) return -1;
							if(get.effect(player,{name:'sha'},target,player)>=0) return -1;
							if(!player.hasShan()){
								if(ui.selected.targets.length) return 0;
								if(player.hp>=4) return -1;
								if(player.hp>=3&&target.hp==1) return -1;
								return 0;
							}
							var num=player.countCards('h','shan');
							if(num<1){
								num=1;
							}
							if(ui.selected.targets.length>=num){
								return 0;
							}
							return -1;
						}
					}
				}
			},
			nuhou_old:{
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:true,
				check:function(card){
					return 7-get.value(card)
				},
				content:function(){
					'step 0'
					var list=player.getEnemies();
					list.sortBySeat();
					event.list=list;
					'step 1'
					if(event.list.length){
						var current=event.list.shift();
						var he=current.getCards('he');
						player.line(current,'green');
						if(he.length){
							current.discard(he.randomGet());
							current.addExpose(0.2);
						}
						event.redo();
					}
				},
				ai:{
					order:8.5,
					result:{
						player:1
					},
				},
			},
			nuhou:{
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('nuhou'),'he').set('ai',function(card){
						return 8-get.useful(card);
					}).set('logSkill','nuhou');
					'step 1'
					if(result.bool){
						var targets=player.getEnemies();
						if(targets.length){
							var target=targets.randomGet();
							player.line(target,'green');
							target.damage();
							target.randomDiscard();
						}
					}
				},
				ai:{
					threaten:0.8,
					maixie:true,
					maixie_hp:true,
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								var nh=target.countCards('he');
								if(player.hasSkillTag('jueqing',false,target)||nh==0) return [1,-2];
								if(!target.hasFriend()||nh<=1) return;
								if(target.hp>=2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
			shewu:{
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:true,
				selectCard:[1,3],
				check:function(card){
					if(!ui.selected.cards.length){
						return 8-get.value(card)
					}
					var player=_status.event.player;
					if(player.isDamaged()){
						var hs=player.getCards('h');
						var num=0;
						for(var i=0;i<hs.length;i++){
							if(get.value(hs[i])<6){
								num++;
							}
						}
						if(num>=3){
							return 6-get.value(card);
						}
					}
					return 0;
				},
				content:function(){
					player.draw(3);
					if(cards.length>=2){
						player.addTempSkill('shewu_dist');
					}
					if(cards.length==3){
						player.recover();
					}
				},
				ai:{
					order:4,
					result:{
						player:1
					},
					threaten:1.6
				},
				subSkill:{
					dist:{
						mod:{
							targetInRange:function(){
								return true;
							}
						}
					}
				}
			},
			gwzhanjiang:{
				trigger:{global:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return !player.hasSkill('gwzhanjiang2')&&event.player!=player;
				},
				content:function(){
					'step 0'
					var bool=(get.effect(trigger.player,{name:'sha'},player,player)>0&&
						Math.abs(get.attitude(player,trigger.player))>1&&
						game.hasPlayer(function(current){
						return get.attitude(current,player)>0&&current.hasSha();
					}));
					var next=player.chooseToDiscard(get.prompt('gwzhanjiang',trigger.player),'he');
					next.ai=function(card){
						if(bool) return 7-get.value(card);
						return 0;
					};
					next.logSkill=['gwzhanjiang',trigger.player];
					'step 1'
					if(result.bool){
						player.addTempSkill('gwzhanjiang2',{player:'phaseBegin'});
						event.targets=game.filterPlayer(function(current){
							return current!=trigger.player;
						});
						event.targets.sortBySeat(trigger.player);
						event.num=0;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets.length){
						event.current=event.targets.shift();
						if(event.current.hasSha()){
							event.current.chooseToUse({name:'sha'},'是否对'+get.translation(trigger.player)+'使用一张杀？',trigger.player,-1).oncard=function(card,player){
								player.draw();
							};
						}
						else{
							event.redo();
						}
					}
					else{
						event.finish();
					}
					'step 3'
					if(result.bool){
						event.num++;
						if(event.num>=2){
							return;
						}
					}
					event.goto(2);
				},
				ai:{
					expose:0.2,
					threaten:1.4
				},
			},
			gwzhanjiang2:{},
			gwzhanjiang3:{
				trigger:{player:'useCard'},
				filter:function(event){
					return event.card.name=='sha'&&event.getParent(2).name=='gwzhanjiang';
				},
				forced:true,
				popup:false,
				content:function(){
					player.draw();
				}
			},
			gwchuanxin_old:{
				trigger:{player:'shaAfter'},
				filter:function(event,player){
					if(player.storage.gwchuanxin&&player.storage.gwchuanxin.length>=4) return false;
					return event.target.isAlive();
				},
				check:function(event,player){
					return get.effect(event.target,{name:'sha'},player,player)>0
				},
				logTarget:'target',
				logLine:false,
				content:function(){
					'step 0'
					event.card=get.cards()[0];
					player.showCards(event.card,get.translation(player)+'对'+get.translation(trigger.player)+'发动了【穿心】');
					'step 1'
					if(player.storage.gwchuanxin&&!player.storage.gwchuanxin.contains(get.suit(event.card))){
						player.useCard({name:'sha'},[event.card],trigger.target,false);
					}
				},
				group:['gwchuanxin_count1','gwchuanxin_count2'],
				subSkill:{
					count1:{
						trigger:{global:'phaseBegin'},
						silent:true,
						content:function(){
							player.storage.gwchuanxin=[];
						}
					},
					count2:{
						trigger:{player:'useCard'},
						silent:true,
						// filter:function(event){
						// 	return event.card&&event.card.name=='sha';
						// },
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								player.storage.gwchuanxin.add(get.suit(trigger.cards[i]));
							}
						}
					}
				},
				ai:{
					presha:true,
				}
			},
			gwchuanxin:{
				trigger:{player:'shaAfter'},
				filter:function(event,player){
					return event.target.isAlive();
				},
				check:function(event,player){
					return get.effect(event.target,{name:'sha'},player,player)>0
				},
				logTarget:'target',
				// logLine:false,
				content:function(){
					'step 0'
					var cards=get.cards();
					player.showCards(cards,get.translation(player)+'发动了【穿心】');
					event.bool=(get.color(cards[0])=='black');
					'step 1'
					if(event.bool){
						player.useCard({name:'sha'},trigger.target,false).animate=false;
					}
				},
				mod:{
					attackFrom:function(from,to,distance){
						return distance-from.hp+1;
					}
				}
			},
			fengjian:{
				trigger:{player:'useCard'},
				direct:true,
				filter:function(event,player){
					var type=get.type(event.card,'trick');
					return type=='trick'&&game.hasPlayer(function(current){
						return player.canUse('sha',current,false)&&!event.targets.contains(current);
					});
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('fengjian'),function(card,player,target){
						return player.canUse('sha',target,false)&&!trigger.targets.contains(target);
					}).ai=function(target){
						return get.effect(target,{name:'sha',nature:'thunder'},player,player);
					}
					"step 1"
					if(result.bool){
						player.logSkill('fengjian');
						if(!event.isMine()){
							game.delay();
						}
						player.useCard({name:'sha',nature:'thunder'},result.targets,false);
						player.tempHide();
					}
				},
				ai:{
					expose:0.2,
					threaten:1.5,
					noautowuxie:true,
				},
				// group:'fengjian_hide',
				// subSkill:{
				// 	hide:{
				// 		trigger:{source:'damageEnd'},
				// 		forced:true,
				// 		popup:false,
				// 		filter:function(event,player){
				// 			return event.getParent(3).name=='fengjian';
				// 		},
				// 		content:function(){
				// 			player.tempHide();
				// 		}
				// 	}
				// }
			},
			huandie:{
				trigger:{player:'phaseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('huandie'),[0,game.countPlayer()],function(card,player,target){
						return target!=player;
					}).ai=function(target){
						return get.attitude(player,target);
					}
					'step 1'
					if(result.bool){
						result.targets.sortBySeat();
						result.targets.unshift(player);
						player.logSkill('huandie',result.targets);
						game.asyncDrawAuto(result.targets,function(current){
							return current==player?1:2;
						});
						player.addTempSkill('huandie_discard');
					}
				},
				ai:{
					threaten:1.5
				},
				subSkill:{
					discard:{
						trigger:{player:'phaseEnd'},
						forced:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current.countCards('h')>current.hp;
							});
						},
						logTarget:function(){
							return game.filterPlayer(function(current){
								return current.countCards('h')>current.hp;
							}).sortBySeat();
						},
						content:function(){
							'step 0'
							var list=game.filterPlayer(function(current){
								return current.countCards('h')>current.hp;
							}).sortBySeat();
							event.list=list;
							'step 1'
							if(event.list.length){
								event.list.shift().chooseToDiscard('h',true,2);
								event.redo();
							}
						}
					}
				}
			},
			xuezhou:{
				trigger:{player:'phaseBegin'},
				direct:true,
				unique:true,
				forceunique:true,
				intro:{
					content:function(storage,player){
						var name=get.translation(player);
						if(storage==1){
							return '每当一名角色（'+name+'除外）受到一次伤害，该角色失去一点体力，'+name+'回复一点体力';
						}
						else if(storage==2){
							return '每当一名角色（'+name+'除外）造成一次伤害，该角色失去一点体力，'+name+'（若不是受伤害角色）回复一点体力';
						}
						else{
							return '未发动';
						}
					}
				},
				content:function(){
					'step 0'
					var next=player.chooseControl('选项一','选项二','cancel2',function(){
						if(Math.random()<0.65) return 0;
						return 1;
					});
					next.prompt=get.prompt('xuezhou');
					next.choiceList=[
						'每当一名其他角色在一个回合中首次受到伤害，该角色失去一点体力，你回复一点体力',
						'每当一名其他角色在一个回合中首次造成伤害，该角色失去一点体力，你（若不是受伤害角色）回复一点体力'
					];
					'step 1'
					if(result.control=='cancel2'){
						player.unmarkSkill('xuezhou');
						delete _status.xuezhou;
					}
					else{
						player.logSkill('xuezhou');
						player.storage.xuezhou=result.index+1;
						player.syncStorage('xuezhou');
						player.markSkill('xuezhou');
						_status.xuezhou=player;
					}
				},
				ai:{
					threaten:2.5
				},
				global:'xuezhou_hp'
			},
			xuezhou_hp:{
				trigger:{source:'damageEnd',player:'damageEnd'},
				filter:function(event,player){
					if(!_status.xuezhou) return false;
					if(player==_status.xuezhou) return false;
					if(!player.isIn()||!_status.xuezhou.isIn()) return false;
					if(_status.currentPhase.hasSkill('xuezhou_hp2')) return false;
					switch(_status.xuezhou.storage.xuezhou){
						case 1:return player==event.player;
						case 2:return player==event.source;
						default:return false;
					}
				},
				silent:true,
				content:function(){
					'step 0'
					game.delayx();
					_status.currentPhase.addTempSkill('xuezhou_hp2');
					'step 1'
					_status.xuezhou.logSkill('xuezhou',player);
					player.loseHp();
					if(_status.xuezhou!=trigger.player){
						_status.xuezhou.recover();
					}
				}
			},
			xuezhou_hp2:{},
			fayin:{
				trigger:{player:'shaBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var target=trigger.target;
					var bool=get.attitude(player,target)<0;
					var next=player.chooseToDiscard('he',get.prompt('fayin',target));
					next.ai=function(card){
						if(bool) return 7-get.value(card);
						return 0;
					};
					next.logSkill=['fayin',target];
					'step 1'
					if(result.bool){
						var target=trigger.target;
						var num=5;
						if(target.isMad()){
							num=4;
						}
						switch(Math.floor(Math.random()*num)){
							case 0:target.randomDiscard(2);break;
							case 1:target.damage('fire');break;
							case 2:player.changeHujia();break;
							case 3:target.turnOver();target.draw();break;
							case 4:target.goMad({player:'phaseBegin'});break;
						}
					}
				}
			},
			gwbaquan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var hs=target.getCards('h');
					player.gain(hs,target);
					target.$giveAuto(hs,player);
					event.hs=hs;
					'step 1'
					var damage=(target.hp>=player.hp&&get.damageEffect(target,player,player)>0);
					var hs=event.hs;
					if(damage&&target.hp>1){
						for(var i=0;i<hs.length;i++){
							if(get.value(hs[i],player,'raw')>=8){
								damage=false;break;
							}
						}
					}
					player.chooseCard(hs.length,true,'选择还给'+get.translation(target)+'的牌').ai=function(card){
						if(damage){
							return hs.contains(card)?1:0;
						}
						else{
							return -get.value(card,player,'raw');
						}
					}
					if(!event.isMine()) game.delay();
					'step 2'
					target.gain(result.cards,player);
					player.$giveAuto(result.cards,target);
					event.hs2=result.cards;
					if(player.hp>target.hp){
						event.finish();
					}
					'step 3'
					for(var i=0;i<event.hs2.length;i++){
						if(!event.hs.contains(event.hs2[i])) return;
					}
					player.line(target);
					target.damage();
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							return -Math.sqrt(target.countCards('h'));
						}
					}
				}
			},
			hunmo_old:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.countCards('h')!=Math.min(3,player.hp);
				},
				selectTarget:[1,3],
				content:function(){
					var dh=Math.min(3,player.hp)-target.countCards('h');
					if(dh>0){
						target.draw(dh,false);
						target.$draw(dh);
						game.delay(0.5);
					}
					else if(dh<0){
						target.chooseToDiscard(-dh,true);
						if(player!=target) player.useCard({name:'sha'},target,false);
					}
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							var dh=Math.min(3,player.hp)-target.countCards('h');
							if(dh<0){
								dh+=get.sgn(get.effect(target,{name:'sha'},player,target));
							}
							return dh;
						}
					}
				}
			},
			hunmo_old2:{
				trigger:{player:['phaseBegin','phaseEnd']},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('hunmo'),[1,game.countPlayer()],function(card,player,target){
						return target.countCards('h')!=Math.min(3,target.hp);
					}).ai=function(target){
						return get.attitude(player,target)*(Math.min(3,target.hp)-target.countCards('h'));
					}
					'step 1'
					if(result.bool){
						player.logSkill('hunmo',result.targets);
						event.targets=result.targets.slice(0);
						event.targets.sortBySeat();
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets.length){
						var target=event.targets.shift();
						var dh=Math.min(3,target.hp)-target.countCards('h');
						if(dh>0){
							target.draw(dh,false);
							target.$draw(dh);
						}
						else if(dh<0){
							target.chooseToDiscard(-dh,true).delay=false;
						}
						game.delay(0.5);
						event.redo();
					}
				}
			},
			huihun:{
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					if(!player.storage.huihun) return false;
					for(var i=0;i<player.storage.huihun.length;i++){
						if(get.position(player.storage.huihun[i])=='d') return true;
					}
					return false;
				},
				frequent:true,
				content:function(){
					var list=[];
					for(var i=0;i<player.storage.huihun.length;i++){
						if(get.position(player.storage.huihun[i])=='d'){
							list.push(player.storage.huihun[i]);
							if(list.length>=2) break;
						}
					}
					player.gain(list,'gain2','log');
				},
				ai:{
					threaten:1.8,
				},
				group:['huihun_count','huihun_count2'],
				subSkill:{
					count:{
						trigger:{player:'useCard'},
						silent:true,
						filter:function(event,player){
							return _status.currentPhase==player;
						},
						content:function(){
							if(!player.storage.huihun){
								player.storage.huihun=[];
							}
							for(var i=0;i<trigger.cards.length;i++){
								if(get.color(trigger.cards[i])=='red'){
									player.storage.huihun.add(trigger.cards[i]);
								}
							}
						}
					},
					count2:{
						trigger:{player:'phaseAfter'},
						silent:true,
						content:function(){
							delete player.storage.huihun;
						}
					}
				}
			},
			lanquan:{
				enable:'phaseUse',
				usable:1,
				onChooseToUse:function(event){
					var cards=[];
					var num=6;
					if(ui.cardPile.childNodes.length<num){
						var discardcards=get.cards(num);
						for(var i=0;i<discardcards.length;i++){
							discardcards[i].discard();
						}
					}
					for(var i=0;i<num;i++){
						cards.push(ui.cardPile.childNodes[i]);
					}
					event.set('lanquancards',cards);
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('选择一张牌使用',event.lanquancards);
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						if(evt&&evt.filterCard){
							var type=get.type(button.link,'trick');
							return evt.filterCard(button.link,player,evt);
						}
						return false;
					},
					check:function(button){
						return get.value(button.link);
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:links[0],
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links)+'的目标';
					}
				},
				ai:{
					order:12,
					result:{
						player:1
					},
					threaten:1.5
				}
			},
		},
		card:{
			gwjinli_jiu:{
				fullimage:true,
				gainable:false,
				image:'card/gw_xianzumaijiu'
			},
			gw_xianzumaijiu:{
				type:'special',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_huoge',
				toself:true,
				enable:function(event,player){
					return !player.hasSkill('gw_xianzumaijiu');
				},
				savable:function(card,player,dying){
					return dying==player;
				},
				usable:1,
				selectTarget:-1,
				logv:false,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					"step 0"
					if(target.isDying()) target.recover();
					else{
						target.addTempSkill('gw_xianzumaijiu',['phaseAfter','shaAfter']);
						if(cards&&cards.length){
							card=cards[0];
						}
						if(target==targets[0]&&card.clone&&(card.clone.parentNode==player.parentNode||card.clone.parentNode==ui.arena)){
							card.clone.moveDelete(target);
							game.addVideo('gain2',target,get.cardsInfo([card]));
						}
						if(!target.node.jiu&&lib.config.jiu_effect){
							target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
							target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
						}
					}
				},
				ai:{
					basic:{
						useful:function(card,i){
							if(_status.event.player.hp>1){
								if(i==0) return 5;
								return 1;
							}
							if(i==0) return 7.3;
							return 4;
						},
						value:function(card,player,i){
							if(player.hp>1){
								if(i==0) return 5;
								return 1;
							}
							if(i==0) return 7.3;
							return 4;
						},
					},
					order:function(){
						return get.order({name:'sha'})+0.2;
					},
					result:{
						target:function(player,target){
							if(target&&target.isDying()) return 2;
							if(lib.config.mode=='stone'&&!player.isMin()){
								if(player.getActCount()+1>=player.actcount) return false;
							}
							var shas=player.getCards('h','sha');
							if(shas.length>1&&player.getCardUsable('sha')>1){
								return 0;
							}
							var card;
							if(shas.length){
								for(var i=0;i<shas.length;i++){
									if(lib.filter.filterCard(shas[i],target)){
										card=shas[i];break;
									}
								}
							}
							else if(player.hasSha()){
								card={name:'sha'};
							}
							if(card){
								if(game.hasPlayer(function(current){
									return (!current.hujia&&
										get.attitude(target,current)<0&&
										target.canUse(card,current,true,true)&&
										get.effect(current,card,target)>0);
								})){
									return 1;
								}
							}
							return 0;
						},
					},
				}
			},
			gwmaoxian_yioufeisi:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_yioufeisisp',
				enable:function(){
					return game.countPlayer()>2;
				},
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:2,
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					targets[0].useCard({name:'sha'},targets[1],'noai');
					'step 1'
					if(targets[0].isIn()&&targets[1].isIn()){
						targets[1].useCard({name:'sha'},targets[0],'noai');
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							return get.effect(target,{name:'sha'},target,target);
						}
					}
				}
			},
			gwmaoxian_luoqi:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_luoqi',
				enable:true,
				filterTarget:function(card,player,target){
					return player.canUse('sha',target,false);
				},
				content:function(){
					'step 0'
					player.useCard({name:'sha'},target,false).animate=false;
					'step 1'
					event.targets=game.filterPlayer(function(current){
						return current.canUse('sha',target,false)&&current!=player;
					});
					event.targets.sortBySeat();
					'step 2'
					if(event.targets.length&&target.isIn()){
						event.current=event.targets.shift();
						if(event.current.hasSha()){
							event.current.chooseToUse({name:'sha'},'是否对'+get.translation(target)+'使用一张杀？',target,-1);
						}
						event.redo();
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							return get.effect(target,{name:'sha'},player,target);
						}
					}
				}
			},
			gwmaoxian_jieluote:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_jieluote',
				enable:true,
				filterTarget:true,
				content:function(){
					if(target.isMaxHp()&&target.hp>2){
						target.damage(2);
					}
					else{
						target.damage();
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					tag:{
						damage:1
					},
					result:{
						player:function(player,target){
							var eff=get.damageEffect(target,player,player);
							if(eff>0){
								eff=Math.sqrt(eff);
								if(target.isMaxHp()&&target.hp>2){
									if(get.attitude(player,target)>0) return 0;
									switch(target.hp){
										case 3:return eff*2;
										case 4:return eff*1.5;
										default:return eff*1.1;
									}
								}
								else{
									switch(target.hp){
										case 1:return eff*1.6;
										case 2:return eff*1.1;
										default:return eff;
									}
								}
							}
							return 0;
						}
					}
				}
			},
			gwmaoxian_yenaifa:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_yenaifa',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					event.targets=player.getEnemies().randomGets(3).sortBySeat();
					'step 1'
					if(event.targets.length){
						player.line(event.targets.shift().getDebuff(false).addExpose(0.1));
						event.redo();
					}
					'step 2'
					game.delay();
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:1
					}
				}
			},
			gwmaoxian_telisi:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_telisi',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					event.targets=player.getFriends().randomGets(3);
					event.targets.add(player);
					event.targets.sortBySeat();
					'step 1'
					if(event.targets.length){
						player.line(event.targets.shift().getBuff(false).addExpose(0.1));
						event.redo();
					}
					'step 2'
					game.delay();
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:1
					}
				}
			},
			gwmaoxian_hengsaite:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_hengsaite',
				enable:true,
				notarget:true,
				content:function(){
					var targets=game.filterPlayer(function(current){
						return player.canUse('wanjian',current);
					}).sortBySeat();
					if(targets.length){
						player.addTempSkill('gwmaoxian_hengsaite_sha');
						player.useCard({name:'wanjian'},targets);
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:function(player,target){
							var targets=game.filterPlayer(function(current){
								return player.canUse('wanjian',current);
							});
							var eff=0;
							for(var i=0;i<targets.length;i++){
								eff+=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player))/Math.sqrt(targets[i].hp+1);
							}
							return get.sgn(eff);
						}
					}
				}
			},
			gwmaoxian_fuertaisite:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_fuertaisite',
				enable:true,
				filterTarget:true,
				selectTarget:[1,2],
				content:function(){
					target.changeHujia();
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							var num=1/Math.sqrt(target.hp+1);
							if(target.hasSkillTag('maixie_hp')){
								num*=0.7;
							}
							if(target.hp==1){
								num*=1.5;
							}
							return num;
						}
					}
				}
			},
			gwmaoxian_laduoweide:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_laduoweide',
				enable:true,
				filterTarget:true,
				content:function(){
					target.addTempSkill('fengyin',{player:'phaseAfter'});
					target.damage();
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							var num=1/Math.sqrt(target.hp+1);
							if(target.hasSkillTag('maixie_hp')){
								num*=1.5;
							}
							return -num;
						}
					}
				}
			},
			gwmaoxian_enxier:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_enxier',
				enable:true,
				filterTarget:function(card,player,target){
					return Math.abs(target.countCards('h')-player.countCards('h'))<=1;
				},
				content:function(){
					player.swapHandcards(target);
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							var dh=target.countCards('h')-player.countCards('h');
							if(dh>0) return -1;
							if(dh==0&&player.needsToDiscard()) return -0.5;
							return 0;
						}
					}
				}
			},
			gwmaoxian_fulisi:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_fulisi',
				enable:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				selectTarget:[1,3],
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					var dialog=ui.create.dialog('弃置至多2张手牌','hidden');
					for(var i=0;i<targets.length;i++){
						var hs=targets[i].getCards('h');
						if(hs.length){
							dialog.addText(get.translation(targets[i]));
							dialog.add(hs);
						}
					}
					player.chooseButton(dialog,[1,2]).ai=function(button){
						return get.value(button.link,get.owner(button.link));
					};
					'step 1'
					if(result.bool){
						var owner1=get.owner(result.links[0]);
						var owner2=get.owner(result.links[1]);
						if(owner1==owner2){
							owner1.discard(result.links.slice(0));
						}
						else{
							owner1.discard(result.links[0]).delay=false;
							owner2.discard(result.links[1]);
						}
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:-1
					}
				}
			},
			gwmaoxian_kaerweite:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_kaerweite',
				enable:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				selectTarget:[1,2],
				multitarget:true,
				multiline:true,
				content:function(){
					player.gainMultiple(targets);
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nolose')||target.hasSkillTag('noh')){
								return 0;
							}
							return -1/Math.sqrt(1+target.countCards('h'));
						}
					}
				}
			},
			gwmaoxian_bulanwang:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_bulanwang',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					player.chooseToDiscard('he',[1,2],'弃置至多2张牌并摸弃牌数2倍的牌').set('ai',function(card){
						return 9-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.draw(2*result.cards.length);
					}
					player.skip('phaseDiscard');
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:function(player,target){
							if(player.hasCard('he',function(card){
								return get.value(card)<9;
							})){
								return 1;
							}
							return 0;
						}
					}
				}
			},
			gwmaoxian_kuite:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_kuite',
				enable:true,
				filterTarget:function(card,player,target){
					return target.countCards('h')>=player.countCards('h')&&player.canUse('juedou',target);
				},
				content:function(){
					'step 0'
					player.useCard({name:'juedou'},target).animate=false;
					'step 1'
					if(player.isIn()&&target.isIn()){
						player.useCard({name:'juedou'},target);
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							return get.effect(target,{name:'juedou'},player,target);
						}
					}
				}
			},
			gwmaoxian_haluo:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_haluo',
				enable:true,
				filterTarget:function(card,player,target){
					return target.isMinHp();
				},
				selectTarget:-1,
				content:function(){
					target.damage();
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:-1.5
					},
					tag:{
						damage:1
					}
				}
			},
			gwmaoxian_dagong:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_dagong',
				enable:true,
				content:function(){
					target.addSkill('gw_ciguhanshuang');
					target.addSkill('gw_birinongwu');
					target.addSkill('gw_qinpendayu');
				},
				filterTarget:function(card,player,target){
					return !target.hasSkill('gw_ciguhanshuang')||
						!target.hasSkill('gw_qinpendayu')||
						!target.hasSkill('gw_birinongwu');
				},
				changeTarget:function(player,targets){
					game.filterPlayer(function(current){
						return get.distance(targets[0],current,'pure')==1;
					},targets);
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							return get.effect(target,{name:'gw_ciguhanshuang'},player,target);
						}
					}
				}
			},
			gwmaoxian_gaier:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_gaier',
				enable:true,
				filterTarget:true,
				content:function(){
					'step 0'
					var str1='令'+get.translation(target);
					var str2='一点体力和体力上限'
					player.chooseControlList([str1+'增加'+str2,str1+'减少'+str2],function(){
						if(get.attitude(player,target)>0) return 0;
						return 1;
					});
					'step 1'
					if(result.index==0){
						target.gainMaxHp(true);
						target.recover();
					}
					else{
						target.loseHp();
						target.loseMaxHp(true);
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:function(player,target){
							var num=1;
							if(target.hasSkillTag('maixie_hp')){
								num=1.5;
							}
							return num/Math.sqrt(target.hp+1);
						}
					}
				}
			},
			gwmaoxian_airuiting:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_airuiting',
				enable:true,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:-1,
				content:function(){
					'step 0'
					target.chooseToUse({name:'sha'},'使用一张杀，或失去一点体力');
					'step 1'
					if(!result.bool){
						target.loseHp();
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						target:function(player,target){
							if(target.hasSha()){
								if(Math.random()<0.5) return 1;
								return 0;
							}
							if(target.countCards('h')>=2){
								return 0;
							}
							else{
								return -1;
							}
						}
					}
				}
			},
			gwmaoxian_aisinie:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_aisinie',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					player.recover();
					'step 1'
					var list=get.typeCard('spell_silver');
					if(list.length){
						player.chooseVCardButton('获得一张银卡法术',list,true);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.gain(game.createCard(result.links[0][2]),'gain2');
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:1
					}
				}
			},
			gwmaoxian_falanxisika:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_falanxisika',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					var list=get.typeCard('spell_gold');
					list.remove('gw_huangjiashenpan');
					if(list.length){
						player.chooseVCardButton('使用一张金卡法术',list.randomGets(3),true).ai=function(button){
							var info=get.info(button.link[2]);
							if(info&&info.ai&&info.ai.result&&info.ai.result.player){
								return info.ai.result.player(player,player);
							}
							return 0;
						};
					}
					else{
						event.finish();
					}
					'step 1'
					if(result.bool){
						player.useCard(game.createCard(result.links[0][2]));
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:1
					}
				}
			},
			gwmaoxian_huoge:{
				type:'gwmaoxian',
				fullborder:'gold',
				vanish:true,
				derivation:'gw_diandian',
				image:'character:gw_huoge',
				enable:true,
				notarget:true,
				content:function(){
					'step 0'
					event.cards=get.cards(6);
					player.chooseCardButton(event.cards,[1,2],'选择至多两牌依次使用之').set('filterButton',function(button){
						return game.hasPlayer(function(current){
							return player.canUse(button.link,current);
						});
					}).set('ai',function(button){
						return get.value(button.link);
					});
					'step 1'
					if(result.bool){
						event.list=result.links.slice(0);
						for(var i=0;i<event.cards.length;i++){
							if(!event.list.contains(event.cards[i])){
								event.cards[i].discard();
							}
						}
					}
					'step 2'
					if(event.list.length){
						player.chooseUseTarget(true,event.list.shift());
						event.redo();
					}
				},
				contentAfter:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				},
				ai:{
					value:10,
					order:1,
					result:{
						player:1
					}
				}
			},
			gw_wuyao:{
				type:'special',
				fullimage:true,
				derivation:'gw_linjing',
				vanish:true,
				addinfo:'杀',
				autoViewAs:'sha',
				ai:{
					order:function(){
						return lib.card.sha.ai.order()+0.5;
					}
				}
			},
			gw_lang:{
				type:'special',
				fullimage:true,
				derivation:'gw_linjing',
				vanish:true,
				addinfo:'酒',
				autoViewAs:'jiu',
				ai:{
					order:function(){
						return lib.card.jiu.ai.order()+0.5;
					}
				}
			},
			gw_dudayuanshuai1:{
				type:'special',
				fullimage:true,
				derivation:'gw_zhuoertan',
				vanish:true,
				addinfo:'小伙伴',
				notarget:true,
				content:function(){
					var evt=event.getParent(3)._trigger;
					if(evt.gw_dudayuanshuai1){
						evt.cancel();
					}
					if(evt.cards){
						player.gain(evt.cards,'gain2');
					}
				},
				ai:{
					value:10,
					useful:9,
					result:{
						player:1
					},
				}
			},
			gw_dudayuanshuai2:{
				type:'special',
				fullimage:true,
				derivation:'gw_zhuoertan',
				vanish:true,
				addinfo:'捣蛋鬼',
				ai:{
					value:-1
				}
			},
		},
		cardType:{
			gwmaoxian:0.5
		},
		translate:{
			gw_huoge:'霍格',
			gw_aisinie:'埃丝涅',
			gw_gaier:'盖尔',
			gw_enxier:'恩希尔',
			gw_kuite:'奎特',
			gw_dagong:'达贡',
			gw_airuiting:'艾瑞汀',
			gw_fuertaisite:'弗尔泰斯特',
			gw_falanxisika:'法兰茜斯卡',
			gw_haluo:'哈洛',
			gw_hengsaite:'亨赛特',
			gw_kaerweite:'卡尔维特',
			gw_bulanwang:'布兰王',
			gw_fulisi:'符里斯',
			gw_laduoweide:'拉多维德',

			gw_jieluote:'杰洛特',
			gw_yenaifa:'叶奈法',
			gw_telisi:'特莉斯',
			gw_xili:'希里',
			gw_luoqi:'罗契',
			gw_yioufeisi:'伊欧菲斯',

			gw_aigeleisi:'艾格蕾斯',
			gw_aokeweisite:'奥克维斯特',
			gw_kaxier:'卡西尔',
			gw_luobo:'萝卜',
			gw_mieren:'尔米恩',
			gw_sanhanya:'三寒鸦',
			gw_shanhu:'珊瑚',
			gw_zhangyujushou:'章鱼巨兽',
			gw_zhuoertan:'卓尔坦',
			gw_meizi:'梅兹',
			gw_aimin:'艾敏',
			gw_puxila:'普希拉',

			gw_xigedelifa:'希格德莉法',
			gw_laomaotou:'毛矛头',
			gw_laomaotou2:'毛矛头',
			gw_qigaiwang:'乞丐王',

			gw_bierna:'碧尔娜',
			gw_haizhiyezhu:'海之野猪',
			gw_nitelila:'尼斯里拉',

			gw_linjing:'林精',
			gw_nvyemo:'女夜魔',
			gw_mierjiata:'米尔加塔',
			gw_kanbi:'坎毕',
			gw_hanmuduoer:'汉姆多尔',
			gw_kairuisi:'凯瑞斯',
			gw_oudimu:'欧迪姆',
			gw_shasixiwusi:'沙斯西乌斯',

			gw_yioufeisisp:'伊欧菲斯',
			gw_diandian:'店店',
			gw_feilafanruide:'菲拉凡德苪',
			gw_fenghuang:'凤凰',
			gw_yisilinni:'伊斯琳妮',
			gw_lanbote:'兰伯特',

			gw_saqiya:'萨琪亚',

			// sqlongyin:'龙影',
			// sqlongyin_info:'',
			sqlongnu:'龙怒',
			sqlongnu_info:'准备阶段，你可以发现一张牌堆中的牌，若你手牌中有同名牌，你可以改为造成一点火属性伤害锁定技。准备阶段开始时，你随机切换至一种形态',
			sqlonghuo:'龙火',
			sqlonghuo_info:'出牌阶段限一次，你可以弃置所有手牌并摸等量的牌，若敌方角色手牌中与你弃置的牌同名的牌，则随机弃置其中一张。准备阶段开始时，你随机切换至一种形态',
			sqlongwu:'龙舞',
			sqlongwu_info:'结束阶段，你可以摸X张牌，然后可以使用一张牌，X为手牌中同名牌数最多的牌的数量。准备阶段开始时，你随机切换至一种形态',
			kuanglie:'狂猎',
			kuanglie_info:'锁定技，每当你使用黑色牌指定其他角色为目标后，目标随机弃置一张牌；每当你以此法累计弃置2张牌后，你摸一张牌',
			// kuanglie_info:'锁定技，每当一名敌方角色成为你的黑色牌的目标，你视为对其使用【刺骨寒霜】；在一名角色受到【刺骨寒霜】的影响后，你随机获得一张【狂猎】牌',
			lingshuang:'凛霜',
			lingshuang_info:'每当你失去最后一张基本牌，你可以视为对距离2以内的所有敌方角色使用【刺骨寒霜】；在一名角色受到【刺骨寒霜】影响时，你可以弃置一张手牌将其效果改为“摸牌数-2”',
			gwshuangwu:'霜舞',
			gwshuangwu_info:'锁定技，每当你造成一次伤害，你视为对目标使用刺骨寒霜；你对处于刺骨寒霜的角色造成的伤害+1',
			gwhuanshuang:'幻霜',
			gwhuanshuang_info:'准备或结束阶段，你可以发现一张铜卡法术并使用之，此牌结算两次',
			gwjinli:'金醴',
			gwjinli_jiu:'先祖麦酒',
			gwjinli_info:'出牌阶段限一次，你可以弃置一张手牌，并将一张先祖麦酒置于一名角色的武将牌上',
			gw_xianzumaijiu:'先祖麦酒',
			gw_xianzumaijiu_info:'出牌阶段对自己使用，你使用下一张杀造成伤害后，令所有友方角色摸一张牌；濒死阶段，对自己使用，回复1点体力',
			gwliaotian:'燎天',
			gwliaotian_info:'出牌阶段限2次，若你有至少两张手牌且颜色均相同，你可以重铸你的全部手牌，并视为对一名随机敌方角色使用一张不计入出杀次数的杀',
			gwmaoxian_yioufeisi:'伊欧菲斯',
			gwmaoxian_yioufeisi_info:'选择两名角色，令目标依次视为对对方使用一张杀，然后结束出牌阶段',
			gwmaoxian_luoqi:'罗契',
			gwmaoxian_luoqi_info:'选择一名角色视为对其使用一张不计入出杀次数的杀，然后所有其他角色可以对目标使用一张杀，然后结束出牌阶段',
			gwmaoxian_jieluote:'杰洛特',
			gwmaoxian_jieluote_info:'对一名角色造成一点伤害，若目标体力值大于2且为全场最多，改为造成2点伤害，然后结束出牌阶段',
			gwmaoxian_yenaifa:'叶奈法',
			gwmaoxian_yenaifa_info:'对至多3名随机敌方角色施加一个随机负面效果，然后结束出牌阶段',
			gwmaoxian_telisi:'特丽斯',
			gwmaoxian_telisi_info:'对至多3名随机友方角色施加一个随机正面效果，然后结束出牌阶段',
			gwmaoxian_hengsaite:'亨赛特',
			gwmaoxian_hengsaite_info:'视为使用一张万箭齐发，每当有一名角色因此受到伤害，你获得一张杀，然后结束出牌阶段',
			gwmaoxian_fuertaisite:'弗尔泰斯特',
			gwmaoxian_fuertaisite_info:'令至多两名角色各获得一点护甲，然后结束出牌阶段',
			gwmaoxian_laduoweide:'拉多维德',
			gwmaoxian_laduoweide_info:'令一名角色的非锁定技失效直到其下一回合结束，并对其造成一点伤害，然后结束出牌阶段',
			gwmaoxian_enxier:'恩希尔',
			gwmaoxian_enxier_info:'与一名手牌并不超过1的其他角色交换手牌，然后结束出牌阶段',
			gwmaoxian_fulisi:'符里斯',
			gwmaoxian_fulisi_info:'选择至多三名角色，观看目标的手牌并可以弃置其中1~2张，然后结束出牌阶段',
			gwmaoxian_kaerweite:'卡尔维特',
			gwmaoxian_kaerweite_info:'获得至多两名角色各一张手牌，然后结束出牌阶段',
			gwmaoxian_bulanwang:'布兰王',
			gwmaoxian_bulanwang_info:'弃置至多2张牌并摸数量等于弃牌数2倍的牌，跳过弃牌阶段，然后结束出牌阶段',
			gwmaoxian_kuite:'奎特',
			gwmaoxian_kuite_info:'视为对一名手牌数不小于你的角色连续使用2张决斗，然后结束出牌阶段',
			gwmaoxian_haluo:'哈洛',
			gwmaoxian_haluo_info:'对所有体力值全场最少的角色造成一点伤害，然后结束出牌阶段',
			gwmaoxian_dagong:'达贡',
			gwmaoxian_dagong_info:'视为同时使用刺骨寒霜、蔽日浓雾和倾盆大雨，然后结束出牌阶段',
			gwmaoxian_gaier:'盖尔',
			gwmaoxian_gaier_info:'令一名角色增加或减少一点体力和体力上限，然后结束出牌阶段',
			gwmaoxian_airuiting:'艾瑞汀',
			gwmaoxian_airuiting_info:'令所有其他角色选择一项：使用一张杀，或失去一点体力，然后结束出牌阶段',
			gwmaoxian_aisinie:'埃丝涅',
			gwmaoxian_aisinie_info:'回复一点体力并获得任意一张银卡法术，然后结束出牌阶段',
			gwmaoxian_falanxisika:'法兰茜斯卡',
			gwmaoxian_falanxisika_info:'随机观看3张金卡法术并使用其中一张，然后结束出牌阶段',
			gwmaoxian_huoge:'霍格',
			gwmaoxian_huoge_info:'观看牌堆顶的6张牌，使用至多2张，然后弃掉其余的牌，然后结束出牌阶段',
			gwmaoxian:'冒险',
			gwhuanbi:'幻笔',
			gwhuanbi_info:'出牌阶段限一次，你可以弃置一张牌，并创造一张冒险牌，然后随机选择一名有手牌的角色，被选中的角色可以交给你一张手牌并获得一张该牌的复制',
			gwminxiang:'冥想',
			gwminxiang_old_info:'结束阶段，你可以选择一张本回合使用过的基本牌或普通锦囊牌并选择两名其他角色，令目标分别视为对对方使用一张此牌的复制',
			gwminxiang_info:'出牌阶段限一次，你可以弃置一张基本牌或普通锦囊牌并摸一张牌，然后选择其他两名角色，令目标分别视为对对方使用一张你弃置的牌的同名牌',
			gwlangshi:'狼噬',
			gwlangshi_info:'每当你造成一次伤害，你可以对一名体力值不小于受伤害角色的其他角色造一点伤害',
			gwjingshi:'血契',
			gwjingshi_info:'出牌阶段限一次，你可以猜测手牌中黑色牌最多的角色是谁，若猜对，你可以观看所有其他角色的手牌并获得任意一张',
			gwjingtian:'经天',
			gwjingtian_info:'锁定技，牌堆顶的9张牌对你始终可见；你始终跳过摸牌阶段，改为获得3枚“经天”标记；每名角色的回合限一次，你可以在任意时间点移去一枚“经天”标记，然后获得牌堆顶的一张牌',
			gwweitu:'卫土',
			gwweitu_info:'锁定技，每当你弃置牌，若你的护甲数小于3，你获得一点护甲；每当你的护甲为你累计抵消3次伤害，你获得一张随机银卡法术',
			gwzhongmo:'终末',
			gwzhongmo_info:'锁定技，你跳过摸牌阶段，改为获得两张随机的稀有度不同的法术牌',
			gwfutian:'覆天',
			gwfutian_info:'锁定技，你防止一切伤害；准备阶段，你须弃置一名其他角色的一张手牌；若你以此法累计弃置弃置的总点数达到了24，你变身为汉姆多尔',
			gwgouhun:'勾魂',
			gwgouhun_info:'出牌阶段限一次，你可以交给一名有手牌的其他角色一张手牌，然后令其选择一项：1. 将手牌中与此牌花色相同的牌（至少一张）交给你；2. 弃置手牌中与此牌花色不同的牌（至少一张）；3. 进入混乱状态直到下一回合结束',
			gw_wuyao:'雾妖',
			gw_wuyao_info:'在你行动时可当作杀使用；回合结束后，从手牌中消失',
			gw_lang:'狼',
			gw_lang_info:'在你行动时可当作酒使用；回合结束后，从手牌中消失',
			gwyewu:'叶舞',
			gwyewu_info:'出牌阶段限一次，你可以弃置一张手牌，并弃置一名随机敌人的一张随机牌；若目标弃置的牌与你弃置的牌颜色相同，则重复发动；每以此法弃置一张敌方角色的手牌，你获得一张【雾妖】；每以此法弃置一张敌方角色的手牌，你获得一张【狼】',
			shuangxi:'霜袭',
			shuangxi_info:'每两轮限一次，出牌阶段，你可以视为使用一张【刺骨寒霜】；若你在本回合造成过伤害，改为使用【白霜】',
			gwfengshi:'风蚀',
			gwfengshi_info:'结束阶段，你可以选择一项：1. 为自己施加一个随机负面效果，并对两名随机敌人施加一个随机负面效果；2. 为自己施加两个随机正面效果，并对一名随机敌人施加一个随机正面效果',
			yangfan:'扬帆',
			yangfan_info:'锁定技，每当你使用一张非装备牌，你随机重铸一张与其花色相同的手牌；若没有花色相同的手牌，改为随机重铸一张与其颜色相同的手牌',
			gwchenshui:'沉睡',
			gwchenshui_bg:'睡',
			gwchenshui_info:'锁定技，你防止即将造成或受到的伤害，改为令伤害来随机源获得对方一张牌；结束阶段，若你自上次沉睡起累计发动了至少3次沉睡效果，你解除沉睡状态，对所有敌方角色造成一点伤害，然后切换至觉醒状态',
			gwliedi:'裂地',
			gwliedi_info:'锁定技，你造成的伤害+X，X为你到该角色距离的一半，向下取整；结束阶段，若你连续两轮未造成伤害，你切换至沉睡状态',
			julian:'巨敛',
			julian_info:'出牌阶段开始时，你可以摸若干张牌直到你的手牌数为全场最多或之一',
			gwfusheng:'复生',
			gwfusheng_info:'当一名未翻面的角色进入濒死状态时，你可以令其翻面并回复一点体力，然后你与其各摸一张牌',
			gwqinwu:'琴舞',
			gwqinwu2:'琴舞',
			gwqinwu_info:'出牌阶段限一次，每当你使用一张基本牌，你可以令一名角色摸一张牌并获得技能【琴舞】直到其下一回合结束',
			huanshu:'幻术',
			huanshu2:'幻术',
			huanshu3:'幻术',
			huanshu_info:'结束阶段，你可以将一张手牌背面朝上置于你的武将牌上；当一名敌方角色使用一张与之颜色相同的锦囊牌时，你展示并移去此牌，取消锦囊的效果，然后摸两张牌；准备阶段，你移去武将牌上的“幻术”牌',
			gwjieyin:'结印',
			gwjieyin_info:'出牌阶段，你可以视为使用瘟疫、燕子药水或昆恩法印（不能重复使用同一法术），技能两轮重置一次',
			zhengjun:'整军',
			zhengjun_info:'锁定技，每当你使用或打出一张卡牌，若这是你在本局游戏中使用或打出的第二张与之同名的牌，你增加一点体力和体力上限；结束阶段，你可以观看牌堆顶的X张牌并获得其中一张，X为你以此法增加的体力上限数',
			gwxuezhan:'血战',
			gwxuezhan_info:'准备阶段，若你的手牌数为全场最少或之一，你可以获得一张十字召唤',
			jielue:'劫掠',
			jielue_info:'锁定技，出牌阶段开始时，你从两个随机队友处各获得一张可使用的牌并依次使用之，然后被拿牌的队友摸一张牌',
			jielue_old_info:'当你于回合内首次使用基本牌时，你可以获得两张该牌的复制（使用复制的牌时不触发此技能）',
			gwfengchi:'风驰',
			gwfengchi_info:'锁定技，出牌阶段开始时，你随机观看3个可以在出牌阶段使用的技能，并获得其中一个技能直到此阶段结束',
			gwjushi:'巨噬',
			gwjushi2:'巨噬',
			gwjushi_info:'出牌阶段限一次，你可以将一名距离1以内的其他角色的一张随机牌置于你的武将牌上；当你受到伤害后，令“巨噬”牌回到原来的位置；准备阶段，你获得武将牌上的“巨噬”牌',
			bolang:'搏浪',
			bolang_info:'准备阶段，你可以观看牌堆顶的6张牌，然后将其中至多3张移入弃牌堆；每当你造成一次伤害，你可以从弃牌堆中获得一张以此法移入弃牌堆的牌（每回合限发动一次）',
			lingji:'灵计',
			lingji_info:'出牌阶段限一次，你可以摸两张牌并弃置两张牌，若弃置的牌花色相同，你获得一张随机铜卡并展示；若弃置的牌点数相同，你获得一张随机银卡并展示',
			gwjinyan:'金焰',
			gwjinyan_info:'锁定技，准备阶段，若游戏轮数为3的倍数，你获得一张随机金卡；当游戏轮数不是3的倍数时，你防止所有伤害',
			gwshenyu:'神愈',
			gwshenyu_info:'准备阶段，你可以令一名角色选择一项：回复一点体力，或从弃牌堆中获得一张非金法术牌（直到洗牌入牌堆前该牌不能再以此法获得）',
			junchi:'骏驰',
			junchi_info:'每当一名其他角色使用一张杀，若目标不是你，你可以对杀的目标使用一张牌，并摸一张牌，每回合限一次',
			junchi_old_info:'当一名其他角色使用杀对一个目标结算后，该角色可以交给你一张牌，然后你可以对杀的目标使用一张牌，若如此做，你回复一点体力，杀的使用者摸一张牌',
			gw_dudayuanshuai1:'杜达元帅',
			gw_dudayuanshuai1_info:'当你成为其他角色使用牌的目标时，你可以使用此牌取消之，然后获得对你使用的牌',
			gw_dudayuanshuai2:'杜达元帅',
			gw_dudayuanshuai2_info:'你不能使用、打出或弃置此牌；结束阶段，若此牌在你手牌中，你弃置之并随机弃置一张手牌',
			hupeng:'呼朋',
			hupeng_info:'出牌阶段限一次，你可以弃置一张牌并将一张杜达元帅置入一名角色的手牌',
			shuijian:'水箭',
			shuijian_info:'准备阶段，你可以弃置一张手牌视为对所有敌方角色使用一张万箭齐发',
			yunhuo:'陨火',
			yunhuo_info:'锁定技，准备阶段，若游戏轮数为4的倍数，你令所有敌方角色随机弃置一张手牌（若没有手牌改为受到一点火焰伤害），然后在此回合结束后获得一个额外回合',
			yinzhang:'银杖',
			yinzhang_info:'出牌阶段限一次，你可以弃置一张牌，然后发现一张银卡法术',
			gwtianbian:'天变',
			gwtianbian_info:'出牌阶段开始时，你可以选择一项：随机使用一张对全场有正面效果的牌；或随机使用一张对全场有负面效果的牌',
			gwxiaoshou:'枭首',
			gwxiaoshou_info:'出牌阶段限两次，你可以弃置一张牌对场上体力值最高（或之一）的一名角色造成一点伤害',
			gwjiquan:'集权',
			gwjiquan_info:'出牌阶段限一次，你可以从任意名角色处各获得一张牌，每拿一张牌，被拿牌的角色视为对你使用一张杀',
			nuhou:'怒吼',
			nuhou_info:'每当你受到一次伤害，你可以弃置一张牌，然后对一名随机敌人造成一点伤害并随机弃置其一张牌',
			shewu:'蛇舞',
			shewu_info:'出牌阶段限一次，你可以弃置1至3张牌然后摸3张牌；若你弃置了至少2张牌，你本回合使用卡牌无视距离；若你弃置了3张牌，你回复一点体力',
			gwzhanjiang:'斩将',
			gwzhanjiang_info:'每轮限一次，在一名角色的准备阶段，你可以弃置一张牌，然后所有角色可以对该角色使用一张杀，出杀的角色在响应时摸一张牌，当有至少两名角色响应后终止结算',
			gwchuanxin:'穿心',
			gwchuanxin_info:'你的攻击范围基数为你当前体力值；每当你对一名角色使用杀结算完毕后，你可以亮出牌堆顶的一张牌，若为黑色，视为对目标再使用一张杀',
			fengjian:'风剑',
			fengjian_info:'每当你使用一张锦囊牌，你可以视为对一名不是此牌目标的角色使用一张雷杀，若如此做，你获得潜行直到下一回合开始',
			huandie:'幻蝶',
			huandie_info:'准备阶段，你可以摸一张牌，并令任意名其他角色摸两张牌，若如此做，此回合结束时，所有手牌数大于体力值的角色需弃置两张手牌',
			xuezhou:'血咒',
			xuezhou_info:'准备阶段，你可以选择一项效果直到下一回合开始：1. 每当一名其他角色在一个回合中首次受到伤害，该角色失去一点体力，你回复一点体力；2. 每当一名其他角色在一个回合中首次造成伤害，该角色失去一点体力，你（若不是受伤害角色）回复一点体力',
			fayin:'法印',
			fayin_info:'每当你使用一张杀，你可以弃置一张牌并获得一个随机法印效果：1. 目标随机弃置两张牌；2. 目标进入混乱状态直到下一回合开始；3. 对目标造成一点火属性伤害；4. 获得一点护甲；5. 令目标翻面并摸一张牌',
			gwbaquan:'霸权',
			gwbaquan_info:'出牌阶段限一次，你可以获得一名其他角色的所有牌，然后还给其等量的牌，若你归还的牌均为你获得的牌且该角色体力值不小于你，你对其造成一点伤害',
			hunmo:'魂墨',
			hunmo_info:'出牌阶段，若你手牌数少于2，你可以选择一名手牌数小于2的其他角色，观看牌堆顶的两张牌，你获得一张并交给其另一张；若你手牌数不少2，你可以选择一名手牌数不少于2的其他角色，你弃置一张手牌，然后观看并弃置其一张手牌。每回合对同一名角色最多发动一次',
			huihun:'回魂',
			huihun_info:'结束阶段，你可以从弃牌堆中获得本回合使用的前两张红色牌',
			lanquan:'远略',
			lanquan_backup:'远略',
			lanquan_info:'出牌阶段限一次，你可以观看牌堆顶的6张牌，并选择一张使用',

			chaoyong:'潮涌',
			chaoyong_info:'准备阶段，你可以弃置一张牌，视为对所有敌方角色使用一张南蛮入侵或万箭齐发',
		}
	};
});
