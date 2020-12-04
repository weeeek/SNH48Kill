'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'sp',
		connect:true,
		card:{
			jinchan:{
				audio:true,
				fullskin:true,
				wuxieable:true,
				type:'trick',
				notarget:true,
				global:['g_jinchan','g_jinchan2'],
				content:function(){
					var evt=event.getParent(3)._trigger;
					if(evt.jinchan){
						var type=get.type(evt.card,'trick');
						if(type=='basic'||type=='trick'){
							evt.cancel();
						}
					}
					player.draw(2);
				},
				ai:{
					useful:function(){
						var player=_status.event.player;
						var nj=player.countCards('h','jinchan');
						var num=player.getHandcardLimit();
						if(nj>=num){
							return 10;
						}
						if(nj==num-1){
							return 6;
						}
						return 1;
					},
					result:{
						player:1
					},
					value:5
				}
			},
			qijia:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(target.getEquip(5)){
						return target.countCards('e')>1;
					}
					else{
						return target.countCards('e')>0;
					}
				},
				content:function(){
					'step 0'
					var e1=[],e2=[];
					var he=target.getCards('he');
					for(var i=0;i<he.length;i++){
						if(get.type(he[i])=='equip'){
							var subtype=get.subtype(he[i]);
							if(subtype=='equip1'||subtype=='equip4'){
								e1.push(he[i]);
							}
							else if(subtype=='equip2'||subtype=='equip3'){
								e2.push(he[i]);
							}
						}
					}
					if(e1.length&&e2.length){
						var choice=0;
						if(e1.length>e2.length||(target.hp>=3&&Math.random()<0.3)){
							choice=1;
						}
						event.e1=e1;
						event.e2=e2;
						target.chooseControl(choice).set('choiceList',['弃置'+get.translation(e1),'弃置'+get.translation(e2)]);
					}
					else{
						if(e1.length){
							target.discard(e1);
						}
						else if(e2.length){
							target.discard(e2);
						}
						event.finish();
					}
					'step 1'
					if(result.index==0){
						target.discard(event.e1);
					}
					else{
						target.discard(event.e2);
					}
				},
				ai:{
					order:9.01,
					useful:1,
					value:5,
					result:{
						target:function(player,target){
							var num1=0,num2=0;
							for(var i=1;i<=4;i++){
								var card=target.getEquip(i);
								if(card){
									if(i==1||i==4){
										num1+=get.equipValue(card);
									}
									else{
										num2+=get.equipValue(card);
									}
								}
							}
							var num;
							if(num1==0){
								num=num2;
							}
							else if(num2==0){
								num=num1;
							}
							else{
								num=Math.min(num1,num2);
							}
							if(num>0){
								return -0.8-num/10;
							}
							else{
								return 0;
							}
						}
					},
					tag:{
						loseCard:1,
						discard:1
					}
				}
			},
			fulei:{
				audio:true,
				fullskin:true,
				type:'delay',
				cardnature:'thunder',
				modTarget:function(card,player,target){
					return lib.filter.judge(card,player,target);
				},
				enable:function(card,player){
					return player.canAddJudge(card);
				},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player==target);
				},
				selectTarget:[-1,-1],
				judge:function(card){
					if(get.suit(card)=='spade') return -6;
					return 0;
				},
				effect:function(){
					'step 0'
					if(result.bool==false){
						if(!card.storage.fulei){
							card.storage.fulei=1;
						}
						else{
							card.storage.fulei++;
						}
						player.damage(card.storage.fulei,'thunder','nosource');
					}
					'step 1'
					player.addJudgeNext(card);
				},
				cancel:function(){
					player.addJudgeNext(card);
				},
				ai:{
					basic:{
						order:1,
						useful:0,
						value:0,
					},
					result:{
						target:function(player,target){
							return lib.card.shandian.ai.result.target(player,target);
						}
					},
				}
			},
			qibaodao:{
				audio:true,
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				skills:['qibaodao','qibaodao2'],
				distance:{attackFrom:-1},
				ai:{
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return player.canUse('sha',current)&&current.isHealthy()&&get.attitude(player,current)<0;
						})){
							return 5;
						}
						return 3;
					},
					basic:{
						equipValue:5
					}
				},
			},
			zhungangshuo:{
				audio:true,
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				skills:['zhungangshuo'],
				distance:{attackFrom:-2},
				ai:{
					equipValue:4
				},
			},
			lanyinjia:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				skills:['lanyinjia','lanyinjia2'],
				ai:{
					equipValue:6
				}
			},
			yinyueqiang:{
				audio:true,
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['yinyueqiang']
			},
			
			du:{
				type:'basic',
				fullskin:true,
				toself:true,
				ai:{
					value:-5,
					useful:6,
					result:{
						player:function(player,target){
							if(player.hasSkillTag('usedu')) return 5;
							return -1;
						}
					},
					order:7.5
				},
				enable:true,
				modTarget:true,
				global:'g_du',
				filterTarget:function(card,player,target){
					return target==player;
				},
				delay:false,
				content:function(){},
				selectTarget:-1
			},
			shengdong:{
				audio:true,
				fullskin:true,
				enable:function(){
					return game.countPlayer()>2;
				},
				chongzhu:function(){
					return game.countPlayer()<=2;
				},
				singleCard:true,
				type:'trick',
				selectTarget:2,
				complexTarget:true,
				multitarget:true,
				targetprompt:['给一张牌','得两张牌'],
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					'step 0'
					if(!player.countCards('h')){
						event.finish();
					}
					else{
						event.target1=target;
						event.target2=event.addedTarget;
						player.chooseCard('h','将一张手牌交给'+get.translation(event.target1),true);
					}
					'step 1'
					player.$giveAuto(result.cards,event.target1);
					event.target1.gain(result.cards,player);
					'step 2'
					if(!event.target1.countCards('h')){
						event.finish();
					}
					else{
						var he=event.target1.getCards('he');
						if(he.length<=2){
							event.directresult=he;
						}
						else{
							event.target1.chooseCard('he','将两张牌交给'+get.translation(event.target2),2,true);
						}
					}
					'step 3'
					if(!event.directresult){
						event.directresult=result.cards;
					}
					event.target1.$giveAuto(event.directresult,event.target2);
					event.target2.gain(event.directresult,event.target1);
				},
				ai:{
					order:2.5,
					value:[4,1],
					useful:1,
					wuxie:function(){
						return 0;
					},
					result:{
						target:function(player,target){
							var ok=false;
							var hs=player.getCards('h');
							if(hs.length<=1) return 0;
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=5){
									ok=true;
									break;
								}
							}
							if(!ok) return 0;
							if(ui.selected.targets.length==1){
								if(target.hasSkillTag('nogain')) return 0;
								return 2;
							}
							if(target.countCards('he')==0) return 0;
							if(player.hasFriend()) return -1;
							return 0;
						}
					}
				}
			},
			zengbin:{
				audio:true,
				fullskin:true,
				enable:true,
				type:'trick',
				filterTarget:true,
				content:function(){
					'step 0'
					target.draw(3);
					'step 1'
					if(target.countCards('he',{type:'basic'})<target.countCards('he')){
						target.chooseToDiscard('增兵减灶','he',function(card){
							return get.type(card)!='basic';
						}).set('ai',function(card){
							if(_status.event.goon) return 8-get.value(card);
							return 11-get.value(card);
						}).set('goon',target.countCards('h',function(card){
							return get.value(card,target,'raw')<8;
						})>1).set('prompt2','弃置一张非基本牌，或取消并弃置两张牌');
						event.more=true;
					}
					else{
						target.chooseToDiscard('he',2,true).set('ai',get.disvalue2);
					}
					'step 2'
					if(event.more&&!result.bool){
						target.chooseToDiscard('he',2,true).set('ai',get.disvalue2);
					}
				},
				ai:{
					order:7,
					useful:4,
					value:10,
					tag:{
						draw:2
					},
					result:{
						target:function(player,target){
							if(target.hasJudge('lebu')) return 0;
							return Math.max(1,2-target.countCards('h')/10);
						}
					}
				}
			},
			caomu:{
				audio:true,
				fullskin:true,
				enable:true,
				type:'delay',
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='club') return 0;
					return -3;
				},
				effect:function(){
					if(result.bool==false){
						player.addTempSkill('caomu_skill');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:4.5,
					},
					result:{
						player:function(player,target){
							return game.countPlayer(function(current){
								if(get.distance(target,current)<=1&&current!=target){
									var att=get.attitude(player,current);
									if(att>3){
										return 1.1;
									}
									else if(att>0){
										return 1;
									}
									else if(att<-3){
										return -1.1;
									}
									else if(att<0){
										return -1;
									}
								}
							});
						},
						target:function(player,target){
							if(target.hasJudge('bingliang')) return 0;
							return -1.5/Math.sqrt(target.countCards('h')+1);
						}
					},
				}
			}
		},
		skill:{
			lanyinjia:{
				equipSkill:true,
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('h')) return false;
				},
				prompt:'将一张手牌当闪使用或打出',
				check:function(card){
					return 6-get.value(card);
				},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('h')) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0&&target.countCards('h')) return 0.59
						}
					},
					order:4,
					useful:-0.5,
					value:-0.5
				}
			},
			lanyinjia2:{
				equipSkill:true,
				trigger:{player:'damageBegin4'},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.getEquip('lanyinjia');
				},
				content:function(){
					var card=player.getEquip('lanyinjia');
					if(card){
						player.discard(card);
					}
				},
			},
			zhungangshuo:{
				equipSkill:true,
				trigger:{player:'useCardToPlayered'},
				logTarget:'target',
				filter:function(event,player){
					return event.card.name=='sha'&&(event.player.countCards('h')||player.countCards('h'));
				},
				check:function(event,player){
					var target=event.target;
					if(get.attitude(player,target)>=0) return false;
					if(player.hasCard(function(card){
						return get.value(card)>=8;
					})){
						return false;
					}
					var n1=event.target.countCards('h');
					return n1>0&&n1<=player.countCards('h');
				},
				content:function(){
					'step 0'
					game.delayx();
					'step 1'
					trigger.target.discardPlayerCard('h',player,true);
					'step 2'
					player.discardPlayerCard('h',trigger.target,true);
				}
			},
			qibaodao:{
				equipSkill:true,
				trigger:{source:'damageBegin1'},
				forced:true,
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.player.isHealthy();
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(card.name=='sha'&&target.isHealthy()&&get.attitude(player,target)>0){
								return [1,-2];
							}
						}
					}
				}
			},
			qibaodao2:{
				inherit:'qinggang_skill',
			},
			g_jinchan:{
				cardSkill:true,
				trigger:{target:'useCardToBefore'},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(event.player==player) return false;
					if(event.getParent().directHit.contains(player)) return false;
					var num=player.countCards('h','jinchan');
					return num&&num==player.countCards('h');
				},
				content:function(){
					'step 0'
					player.chooseToUse('是否对'+get.translation(trigger.card)+'使用【金蝉脱壳】？').set('ai1',function(card){
						return _status.event.bool;
					}).set('bool',-get.effect(player,trigger.card,trigger.player,player)).set('respondTo',[trigger.player,trigger.card]).set('filterCard',function(card,player){
						if(get.name(card)!='jinchan') return false;
						return lib.filter.cardEnabled(card,player,'forceEnable');
					});
					trigger.jinchan=true;
					'step 1'
					delete trigger.jinchan;
				}
			},
			g_jinchan2:{
				trigger:{player:'discardAfter'},
				forced:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].name=='jinchan') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].name=='jinchan') num++;
					}
					if(num){
						player.draw(num);
					}
				}
			},
			yinyueqiang:{
				equipSkill:true,
				trigger:{player:['useCard','respondAfter']},
				direct:true,
				filter:function(event,player){
					if(_status.currentPhase==player) return false;
					if(!event.cards) return false;
					if(event.cards.length!=1) return false;
					if(lib.filter.autoRespondSha.call({player:player})) return false;
					return get.color(event.cards[0])=='black';
				},
				content:function(){
					'step 0'
					var next=player.chooseToUse(get.prompt('yinyueqiang'),{name:'sha'});
					next.aidelay=true;
					next.logSkill='yinyueqiang';
					next.noButton=true;
					'step 1'
					if(result.bool){
						game.delay();
					}
				}
			},
			g_du:{
				cardSkill:true,
				trigger:{player:'loseEnd'},
				popup:false,
				forced:true,
				filter:function(event,player){
					if(!event.visible) return false;
					if(player.hasSkillTag('nodu')) return false;
					if(event.hs){
						for(var i=0;i<event.hs.length;i++){
							if(get.name(event.hs[i],player)=='du') return true;
						}
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.hs.length;i++){
						if(get.name(trigger.hs[i],player)=='du') num++;
					}
					if(trigger.getParent().name!='useCard'||trigger.getParent().card.name!='du') player.popup('毒','wood');
					player.loseHp(num).type='du';
				},
			},
			caomu_skill:{
				cardSkill:true,
				unique:true,
				trigger:{player:'phaseDrawBegin'},
				silent:true,
				content:function(){
					trigger.num--;
				},
				group:'caomu_skill2'
			},
			caomu_skill2:{
				trigger:{player:'phaseDrawAfter'},
				silent:true,
				content:function(){
					var targets=game.filterPlayer(function(current){
						return get.distance(player,current)<=1&&player!=current;
					});
					if(targets.length){
						game.asyncDraw(targets);
					}
				}
			}
		},
		translate:{
			qijia:'弃甲曳兵',
			qijia_info:'出牌阶段，对一名装备区里有牌的其他角色使用。该角色选择一项：1.弃置手牌区和装备区里所有的武器和-1坐骑；2.弃置手牌区和装备区里所有的防具和+1坐骑。',
			jinchan:'金蝉脱壳',
			g_jinchan2:'金蝉脱壳',
			g_jinchan2_info:'当你因弃置而失去【金蝉脱壳】时，你摸一张牌',
			jinchan_info:'当你成为其他角色使用牌的目标时，若你的手牌里只有【金蝉脱壳】，使目标锦囊牌或基本牌对你无效，你摸两张牌。当你因弃置而失去【金蝉脱壳】时，你摸一张牌。',
			fulei:'浮雷',
			fulei_info:'出牌阶段，对你使用。将【浮雷】放置于你的判定区里，若判定结果为黑桃，则目标角色受到X点雷电伤害（X为此锦囊判定结果为黑桃的次数）。判定完成后，将此牌移动到下家的判定区里。',
			qibaodao:'七宝刀',
			qibaodao_info:'攻击范围2；锁定技，你使用【杀】无视目标防具，若目标角色未损失体力值，此【杀】伤害+1',
			qibaodao2:'七宝刀',
			zhungangshuo:'衠钢槊',
			zhungangshuo_info:'当你使用【杀】指定一名角色为目标后，你可令该角色弃置你的一张手牌，然后你弃置其一张手牌',
			lanyinjia:'烂银甲',
			lanyinjia_info:'你可以将一张手牌当做【闪】使用或打出。锁定技，【烂银甲】不会无效化；当你受到【杀】造成的伤害时，弃置【烂银甲】。',
			yinyueqiang:'银月枪',
			yinyueqiang_info:'你的回合外，每当你使用或打出了一张黑色手牌（若为使用则在它结算之前），你可以立即对你攻击范围内的任意一名角色使用一张【杀】',
			du:'毒',
			du_info:'当此牌正面朝上离开你的手牌区时，你失去一点体力',
			shengdong:'声东击西',
			shengdong_info:'出牌阶段，对一名其他角色使用。你交给目标角色一张手牌，若如此做，其将两张牌交给另一名由你选择的其他角色（不足则全给，存活角色不超过2时可重铸）',
			zengbin:'增兵减灶',
			zengbin_info:'出牌阶段，对一名角色使用。目标角色摸三张牌，然后选择一项：1.弃置一张非基本牌；2.弃置两张牌',
			caomu:'草木皆兵',
			caomu_info:'出牌阶段，对一名其他角色使用。将【草木皆兵】放置于该角色的判定区里，若判定结果不为梅花：摸牌阶段，目标角色少摸一张牌；摸牌阶段结束时，与其距离为1的角色各摸一张牌',
		},
		list:[
			['spade',1,'caomu'],
			['club',3,'caomu'],
			['heart',12,'shengdong'],
			['club',9,'shengdong'],
			['spade',9,'shengdong'],
			['diamond',4,'zengbin'],
			['heart',6,'zengbin'],
			['spade',7,'zengbin'],
			['spade',3,'du'],
			['spade',9,'du'],
			['club',3,'du'],
			['club',9,'du'],
			['diamond',5,'du'],
			['diamond',9,'du'],
			['diamond',12,'yinyueqiang'],
			["spade",11,'jinchan'],
			["club",12,'jinchan'],
			["club",13,'jinchan'],
			["club",12,'qijia'],
			["club",13,'qijia'],
			["spade",1,'fulei'],
			["spade",6,'qibaodao'],
			["spade",5,'zhungangshuo'],
			["spade",2,'lanyinjia'],
			["club",2,'lanyinjia'],
		],
	};
});
