'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'xinghuoliaoyuan',
		connect:true,
		character:{
			wangcan:["male","qun",3,["xinfu_sanwen","xinfu_qiai","xinfu_denglou"],[]],
			sp_taishici:["male","qun",4,["xinfu_jixu"],[]],
			re_jsp_pangtong:["male","wu",3,["xinfu_guolun","xinfu_songsang"],[]],
			lvdai:["male","wu",4,["xinfu_qinguo"],[]],
			re_zhangliang:["male","qun",4,["xinfu_jijun","xinfu_fangtong"],[]],
			lvqian:["male","wei",4,["xinfu_weilu","xinfu_zengdao"],[]],
			panjun:["male","wu",3,["xinfu_guanwei","xinfu_gongqing"],[]],
			duji:["male","wei",3,["xinfu_andong","xinfu_yingshi"],[]],
			zhoufang:["male","wu",3,["xinfu_duanfa","xinfu_youdi"],[]],
			yanjun:["male","wu",3,["xinfu_guanchao","xinfu_xunxian"],[]],
			liuyao:["male","qun",4,["xinfu_kannan"],[]],
			liuyan:["male","qun",3,["xinfu_tushe","xinfu_limu"],[]],
		},
		characterIntro:{
			wangcan:"王粲（177年－217年2月17日），字仲宣。山阳郡高平县（今山东微山两城镇）人。东汉末年文学家，“建安七子”之一，太尉王龚曾孙、司空王畅之孙。",
			re_jsp_pangtong:"庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
			lvdai:"吕岱（161年－256年），字定公，广陵海陵（今江苏如皋）人。三国时期吴国重臣、将领。吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年（256年），吕岱去世，年九十六。",
			lvqian:"吕虔（生卒年不详），字子恪。任城国（今山东济宁东南）人。汉末至三国曹魏时期将领。 吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。被推举为秀才，加任骑都尉，仍管辖泰山郡。 曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。再升任徐州刺史，加任威虏将军。任用王祥为别驾，将民政事务都委托于他，为世人所称赞。曹叡继位后，改封万年亭侯。吕虔死后，其子吕翻世袭万年亭侯。",
			panjun:"潘濬（一作潘浚）（？－239年），字承明。武陵郡汉寿县（今湖南汉寿）人。三国时期吴国重臣，蜀汉大司马蒋琬的表弟。 潘濬为人聪察，对问有机理，拜大儒宋忠为师，得到“建安七子”之一的王粲赏识。不到三十，即被荆州牧刘表任命为江夏从事，因按杀贪污的沙羡长而闻名。建安十六年（211年），被刘备任命为荆州治中从事，与守臣关羽不睦。建安二十四年（219年），孙权得荆州，拜潘濬为辅军中郎将。又迁奋威将军，封常迁亭侯。孙权称帝后，拜少府，进封刘阳侯，又改太常。黄龙三年（231年），授假节，与吕岱率军五万平五溪蛮夷叛乱，经三年而斩获数万，使得一方宁静。潘濬为人刚正不阿，在吕壹弄权时，屡请孙权将其诛杀。甚至想亲手击杀吕壹，使吕壹对他非常畏惧。 赤乌二年（239年），潘濬去世。",
			duji:"杜畿 （jī）（163年—224年），字伯侯，京兆杜陵（今陕西西安东南）人。东汉末及三国时曹魏官吏及将领。西汉御史大夫杜延年的后代。历官郡功曹、守郑县令，善于断案。荀彧将他举荐给曹操，曹操任命他为司空司直，调任护羌校尉，使持节领西平太守。 曹丕受禅登基后，封杜畿为丰乐亭侯。官至尚书仆射。后在陶河试航时遇上大风沉没，杜畿淹死，死时六十二岁，曹丕为之涕泣，追赠其为太仆，谥戴侯。",
			zhoufang:"周鲂（生卒年不详），字子鱼。吴郡阳羡县（今江苏宜兴）人。三国时期吴国将领。周鲂年少时好学，被举为孝廉。历任宁国县长、怀安县长、钱塘侯相，一月之内，便斩杀作乱的彭式及其党羽，因而升任丹阳西部都尉。彭绮率数万人反叛时，周鲂被任命为鄱阳太守，与胡综共同将其生擒，因功加职昭义校尉。后诈降曹休，诱其率军接应，使曹休在石亭之战中一败涂地，战后因功被加职为裨将军，封关内侯。贼帅董嗣凭险骚扰豫章等郡，周鲂派间谍将其诱杀，不费兵卒即安定数郡。周鲂在鄱阳赏罚分明、恩威并施，于任职十三年后去世。",
			yanjun:"严畯（生卒年不详），字曼才，彭城（治今江苏徐州）人，三国时期孙吴官员、学者。性情忠厚，待人以诚。少好学，精通《诗》、《书》、《三礼》，又好《说文》。避乱江东，与诸葛瑾、步骘是好朋友，被张昭推荐给孙权作骑都尉、从事中郎。建安二十二年（217年），横江将军鲁肃去世，孙权打算让严畯接替其位。严畯很有自知之明，知道自己没有能力对抗在荆州的关羽和北面的曹魏，便坚决不接受此任命。后来担任尚书令。严畯享年七十八岁。著有《孝经传》、《潮水论》。",
			liuyao:"刘繇（yáo，一读yóu）（156年－197年），字正礼。东莱牟平（今山东牟平）人。东汉末年宗室、大臣，汉末群雄之一，齐悼惠王刘肥之后，太尉刘宠之侄。<br>刘繇最初被推举为孝廉，授郎中。任下邑县长时，因拒郡守请托而弃官。后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。兴平元年（194年），被任命为扬州刺史。他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。此后，刘繇又击破反叛的笮融，旋即病逝，年四十二。",
			liuyan:"刘焉（？－194年），字君郎（《华阳国志》又作君朗）。江夏郡竟陵县（今湖北省天门市）人。东汉末年宗室、军阀，汉末群雄之一，西汉鲁恭王刘余之后。<br>刘焉初以汉朝宗室身份，拜为中郎，历任雒阳令、冀州刺史、南阳太守、宗正、太常等官。因益州刺史郄俭在益州大肆聚敛，贪婪成风，加上当时天下大乱。刘焉欲取得一安身立命之所，割据一方，于是向朝廷求为益州牧，封阳城侯，前往益州整饬吏治。郄俭为黄巾军所杀，刘焉进入益州，派张鲁盘踞汉中，张鲁截断交通，斩杀汉使，从此益州与中央道路不通。刘焉进一步对内打击地方豪强，巩固自身势力，益州因而处于半独立的状态。兴平元年（194年），刘焉因背疮迸发而逝世，其子刘璋继领益州牧。",
		},
		characterTitle:{},
		perfectPair:{
			lijue:['guosi','jiaxu'],
			zhangji:['zhangxiu','drlt_zhangxiu','zoushi'],
			xf_sufei:['ganning'],
			//baosanniang:['guansuo'],
			simahui:['pangdegong'],
			zhangqiying:['zhanglu'],
			pangtong:['zhugejin'],
			taishici:['liuyao','kongrong'],
			//zhaotongzhaoguang:['zhaoyun','mayunlu'],
		},
		skill:{
			"xinfu_guolun":{
				audio:2,
				enable:"phaseUse",
				usable:1,
				filter:function (event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function (card,player,target){
					return target!=player&&target.countCards('h');
				},
				content:function (){
					'step 0'
					event.cardt=target.getCards('h').randomGet();
					target.showCards(event.cardt);
					player.chooseCard('he').ai=function(card){
						var numt=event.cardt.number;
						var att=get.attitude(player,target);
						var value=get.value(event.cardt);
						if(card.number<numt||att>2) return value+6-get.value(card);
						else if(card.number==numt) return value-get.value(card);
						return -1;
					};
					'step 1'
					if(!result.bool) event.finish();
					else{
						player.showCards(result.cards);
						event.cardp=result.cards;
					}
					'step 2'
					player.$giveAuto(event.cardp,target);
					target.gain(event.cardp,player);
					target.give(event.cardt,player);
					'step 3'
					var nump=event.cardp[0].number;
					var numt=event.cardt.number;
					if(nump<numt){
						player.draw();
					}
					else if(nump>numt){
						target.draw();
					}
				},
				ai:{
					threaten:1.5,
					order:8,
					result:{
						player:function (player,target){
							if(get.attitude(player,target)>0) return 1.5;
							return 0.5;
						},
					},
				},
			},
			"xinfu_zhanji":{
				audio:2,
				trigger:{
					player:"gainAfter",
				},
				forced:true,
				filter:function (event,player){
					if(!player.isPhaseUsing()) return false;
					return event.getParent().name=='draw'&&event.getParent(2).name!='xinfu_zhanji';
				},
				content:function (){
					player.draw('nodelay');
				},
			},
			"xinfu_songsang":{
				limited:true,
				unique:true,
				init:function (player){
					player.storage.xinfu_songsang=false;
				},
				skillAnimation:true,
				animationColor:'wood',
				audio:2,
				derivation:"xinfu_zhanji",
				trigger:{
					global:"dieAfter",
				},
				filter:function (event,player){
					if(player.storage.xinfu_songsang==true) return false;
					return true;
				},
				content:function (){
					player.awakenSkill('xinfu_songsang');
					if(player.isDamaged()){
						player.recover();
					}
					else player.gainMaxHp();
					player.addSkill('xinfu_zhanji');
					player.storage.xinfu_songsang=true;
				},
				mark:true,
				intro:{
					content:"limited",
				},
			},
			"xinfu_jixu":{
				audio:2,
				enable:"phaseUse",
				usable:1,
				filter:function (event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function (card,player,target){
					if(player==target) return false;
					if(ui.selected.targets.length){
						return target.hp==ui.selected.targets[0].hp;
					}
					return true;
				},
				selectTarget:[1,Infinity],
				multitarget:true,
				multiline:true,
				content:function (){
					"step 0"
					targets.sort(lib.sort.seat);
					"step 1"
					if(!event.num) event.num=0;
					if(!event.caicuolist) event.caicuolist=[];
					targets[event.num].chooseBool("是否押杀？").ai=function(event,player){
						var evt=_status.event.getParent();
						if(get.attitude(targets[event.num],evt.player)>0) return evt.player.countCards('h','sha')?false:true;
						return Math.random()<0.5;
					};
					"step 2"
					if(result.bool){
						targets[event.num].chat('有杀');
						game.log(targets[event.num],'认为',player,'#g有杀');
						if(!player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
					}else{
						targets[event.num].chat('没杀');
						game.log(targets[event.num],'认为',player,'#y没有杀');
						if(player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
					}
					event.num++;
					game.delay();
					if(event.num<targets.length) event.goto(1);
					"step 3"
					player.popup(player.countCards('h','sha')?"有杀":"没杀");
					game.log(player,player.countCards('h','sha')?"有杀":"没杀");
					if(event.caicuolist.length==0){
						var evt=_status.event.getParent('phaseUse');
						if(evt&&evt.name=='phaseUse'){
							evt.skipped=true;
							event.finish();
						}
					}
					else{
						player.draw(event.caicuolist.length)
						if(player.countCards('h','sha')){
							player.addTempSkill('jixu_sha');
							player.storage.jixu_sha=event.caicuolist;
							event.finish();
						}
						else event.num=0;
					}
					"step 4"
					if(event.num<event.caicuolist.length){
						var target=event.caicuolist[event.num];
						player.discardPlayerCard(true,'he',target);
						event.num++;
						event.redo();
					}
				},
				ai:{
					order:function (){
						return get.order({name:'sha'})+0.1;
					},
					result:{
						target:function (player,target){
							var raweffect=function(player,target){
								if(player.countCards('h','sha')){
									return get.effect(target,{name:'sha'},player,target);
								}
								else{
									var att=get.attitude(player,target);
									var nh=target.countCards('h');
									if(att>0){
										if(target.getEquip('baiyin')&&target.isDamaged()&&
											get.recoverEffect(target,player,player)>0){
											if(target.hp==1&&!target.hujia) return 1.6;
											if(target.hp==2) return 0.01;
											return 0;
										}
									}
									var es=target.getCards('e');
									var noe=(es.length==0||target.hasSkillTag('noe'));
									var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
									var noh=(nh==0||target.hasSkillTag('noh'));
									if(noh&&(noe||noe2)) return 0;
									if(att<=0&&!target.countCards('he')) return 1.5;
									return -1.5;
								}
							}
							var num=game.countPlayer(function(current){
								return current!=player&&current.hp==target.hp&&(raweffect(player,current)*get.attitude(player,current))>0
							});
							return raweffect(player,target)*Math.max(0,num-1);
						},
					},
					expose:0.4,
				},
			},
			"jixu_sha":{
				audio:"xinfu_jixu",
				trigger:{
					player:"useCard",
				},
				onremove:function (player){
					delete player.storage.jixu_sha;
				},
				filter:function (event,player){
					if(event.card.name=='sha'){
						return game.hasPlayer(function(current){
							return current!=player&&player.storage.jixu_sha.contains(current)&&!event.targets.contains(current);
						});
					}
					return false;
				},
				forced:true,
				silent:true,
				popup:false,
				content:function (){
					player.logSkill("xinfu_jixu");
					for(var i=0;i<player.storage.jixu_sha.length;i++){
						if(!trigger.targets.contains(player.storage.jixu_sha[i])&&player.canUse('sha',player.storage.jixu_sha[i],false)){
							player.line(player.storage.jixu_sha[i],trigger.card.nature);
							trigger.targets.push(player.storage.jixu_sha[i]);
						}
					}
				},
			},
			"xinfu_sanwen":{
				audio:2,
				usable:1,
				trigger:{
					player:"gainAfter",
				},
				filter:function (event,player){
					var namelist=[];
					var namedlist=[];
					for(var i=0;i<event.cards.length;i++){
						namelist.add(get.name(event.cards[i]));
					}
					var hs=player.getCards('h');
					for(var j=0;j<hs.length;j++){
						if(namelist.contains(get.name(hs[j]))&&!event.cards.contains(hs[j])) return true;
					}
					return false;
				},
				content:function (){
					'step 0'
					var namelist=[];
					var namedlist=[];
					var nameddlist=[];
					var namedddlist=[];
					for(var i=0;i<trigger.cards.length;i++){
						namelist.add(get.name(trigger.cards[i]));
					}
					var hs=player.getCards('h');
					for(var j=0;j<hs.length;j++){
						if(namelist.contains(get.name(hs[j]))&&!trigger.cards.contains(hs[j])){
							namedlist.push(hs[j]);
							namedddlist.add(get.name(hs[j]));
						}
					}
					for(var k=0;k<trigger.cards.length;k++){
						if(namedddlist.contains(get.name(trigger.cards[k]))) nameddlist.push(trigger.cards[k]);
					}
					var showlist=namedlist.concat(nameddlist);
					player.showCards(showlist);
					player.discard(nameddlist);
					player.draw(2*nameddlist.length);
				},
			},
			"xinfu_qiai":{
				unique:true,
				init:function (player){
					player.storage.xinfu_qiai=false;
				},
				filter:function (event,player){
					return player.storage.xinfu_qiai==false;
				},
				skillAnimation:true,
				animationColor:'gray',
				trigger:{
					player:"dying",
				},
				limited:true,
				marktext:"哀",
				mark:true,
				intro:{
					content:"limited",
				},
				//priority:6,
				audio:2,
				content:function (){
					"step 0"
					player.awakenSkill('xinfu_qiai');
					player.storage.xinfu_qiai=true;
					event.current=player.next;
					"step 1"
					if(!event.current.countCards('he')) event.goto(3);
					else event.current.chooseCard('交给'+get.translation(player)+'一张牌','he',true).set('ai',function(card){
						var evt=_status.event.getParent();
						if(get.attitude(_status.event.player,evt.player)>2){
							if(card.name=='jiu') return 120;
							if(card.name=='tao') return 110;
						}
						return 100-get.value(card);
					});
					"step 2"
					if(result.bool&&result.cards&&result.cards.length){
						player.gain(result.cards,event.current,'giveAuto');
					}
					"step 3"
					event.current=event.current.next;
					if(event.current!=player) event.goto(1);
				},
			},
			"xinfu_denglou":{
				unique:true,
				audio:2,
				trigger:{
					player:"phaseJieshuBegin",
				},
				limited:true,
				init:function (player){
					player.storage.xinfu_denglou=false;
				},
				filter:function (event,player){
					if(player.countCards('h')) return false;
					return player.storage.xinfu_denglou==false;
				},
				skillAnimation:true,
				animationColor:'gray',
				marktext:"登",
				mark:true,
				intro:{
					content:"limited",
				},
				content:function (){
					"step 0"
					player.awakenSkill('xinfu_denglou');
					player.storage.xinfu_denglou=true;
					event.cards=get.cards(4);
					event.gains=[]
					event.discards=[]
					var content=['牌堆顶的四张牌',event.cards];
					game.log(player,'观看了','#y牌堆顶的四张牌');
					player.chooseControl('ok').set('dialog',content);
					"step 1"
					if(get.type(event.cards[0])!="basic"){
						event.gains.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					}
					else{
						var bool=game.hasPlayer(function(current){
							return player.canUse(event.cards[0],current);
						});
						if(bool){
							player.chooseUseTarget(event.cards[0],true,false);
						}
						else event.discards.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					}
					"step 2"
					if(event.cards.length) event.goto(1);
					else{
						if(event.gains.length) player.gain(event.gains,'gain2');
						if(event.discards.length){
							player.$throw(event.discards);
							game.cardsDiscard(event.discards);
						}
					}
				},
			},
			qinguo_use:{audio:2},
			"xinfu_qinguo":{
				group:"xinfu_qinguo_recover",
				audio:'qinguo_use',
				subfrequent:['recover'],
				trigger:{
					player:"useCardEnd",
				},
				filter:function (event,player){
					return get.type(event.card)=='equip';
				},
				direct:true,
				content:function(){
					player.chooseUseTarget({name:'sha'},get.prompt('xinfu_qinguo'),'视为使用一张【杀】',false).logSkill='xinfu_qinguo';
				},
				subSkill:{
					recover:{
						audio:'qinguo_use',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter'],
						},
						prompt:'是否发动【勤国】回复1点体力？',
						filter:function (event,player){
							if(player.isHealthy()||player.countCards('e')!=player.hp) return false;
							var evt=event.getl(player);
							if(event.name=='equip'&&event.player==player) return !evt||evt.cards.length!=1;
							return evt&&evt.es.length;
						},
						frequent:true,
						content:function(){
							player.recover();
						},
					},
				},
			},
			"xinfu_jijun":{
				ai:{
					reverseEquip:true,
					effect:{
						target:function (card,player,target,current){
							if(get.type(card)=='equip'&&player==target&&player==_status.currentPhase&&get.subtype(card)=='equip1') return [1,3];
						},
					},
				},
				audio:2,
				trigger:{
					player:"useCardToPlayered",
				},
				frequent:true,
				filter:function (event,player){
					if(player!=_status.currentPhase) return false;
					if(event.getParent().triggeredTargets3.length>1) return false;
					if(get.type(event.card)=='equip'&&get.subtype(event.card)!='equip1') return false;
					if(event.targets.contains(player)) return true;
					return false;
				},
				callback:function(){
						game.cardsGotoSpecial(card);
						player.storage.xinfu_jijun.push(card);
						var node=event.judgeResult.node;
						node.moveDelete(player);
						game.broadcast(function(cardid,player){
							var node=lib.cardOL[cardid];
							if(node){
								node.moveDelete(player);
							}
						},node.cardid,player);
						game.addVideo('gain2',player,get.cardsInfo([node]));
						player.markSkill('xinfu_jijun');
						game.addVideo('storage',player,['xinfu_jijun',get.cardsInfo(player.storage.xinfu_jijun),'cards']);
						//event.trigger("addCardToStorage");
				},
				content:function (){
					player.judge(function(card){
						return 1;
					}).callback=lib.skill.xinfu_jijun.callback;
				},
				init:function (player){
					if(!player.storage.xinfu_jijun) player.storage.xinfu_jijun=[];
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
						 storage.length=0;
						}
					},
					mark:function (dialog,content,player){
						if(content&&content.length){
							dialog.addAuto(content);
							if(player==game.me||player.isUnderControl()){
								var list=lib.skill.xinfu_fangtong.getAuto(player);
								if(list.length>0){
									dialog.addText('<li>推荐方案：'+get.translation(list));
								}
							}
						}
					},
				},
				marktext:"方",
			},
			"xinfu_fangtong":{
				getAuto:function (player){
					var hs=player.getCards('he');
					var ss=player.storage.xinfu_jijun;
					var bool=false;
					for(var i=0;i<hs.length;i++){
						var num=36-hs[i].number;
						for(var j=0;j<ss.length;j++){
							if(ss[j]==num){var k=-1;bool=true;break}
							for(var k=j+1;k<ss.length;k++){
								if(ss[j].number+ss[k].number==num){var l=-1;bool=true;break}
								for(var l=k+1;l<ss.length;l++){
									if(ss[j].number+ss[k].number+ss[l].number==num){var m=-1;bool=true;break}
									for(var m=l+1;m<ss.length;m++){
										if(ss[j].number+ss[k].number+ss[l].number+ss[m].number==num){var n=-1;bool=true;break}
										for(var n=m+1;n<ss.length;n++){
											if(ss[j].number+ss[k].number+ss[l].number+ss[m].number+ss[n].number==num){var o=-1;bool=true;break}
											for(var o=n+1;o<ss.length;o++){
												if(ss[j].number+ss[k].number+ss[l].number+ss[m].number+ss[n].number+ss[o].number==num){var p=-1;bool=true;break}
												for(var p=o+1;p<ss.length;p++){
													if(ss[j].number+ss[k].number+ss[l].number+ss[m].number+ss[n].number+ss[o].number+ss[p].number==num){bool=true;break}
												}
												if(bool) break;
											}
											if(bool) break;
										}
										if(bool) break;
									}
									if(bool) break;
								}
								if(bool) break;
							}
							if(bool) break;
						}
						if(bool) break;
					}
					if(!bool) return [];
					var list=[i,j,k,l,m,n,o,p];
					for(var q=0;q<list.length;q++){
						if(list[q]==-1){
							list=list.slice(0,q);
							break;
						}
						else if(q==0){
							list[q]=hs[i];
						}
						else list[q]=ss[list[q]];
					}
					return list;
				},
				audio:2,
				trigger:{
					player:"phaseJieshuBegin",
				},
				filter:function (event,player){
					return player.countCards('he')&&player.storage.xinfu_jijun.length;
				},
				direct:true,
				skillAnimation:true,
				animationColor:'metal',
				content:function (){
					'step 0'
					var info=['是否发动【方统】？'];
					if(player.storage.xinfu_jijun){
						info.push('<div class="text center">'+get.translation(player)+'的“方”</div>');
						info.push(player.storage.xinfu_jijun);
					}
					if(player.countCards('h')){
						info.push('<div class="text center">'+get.translation(player)+'的手牌区</div>');
						info.push(player.getCards('h'));
					}
					if(player.countCards('e')){
						info.push('<div class="text center">'+get.translation(player)+'的装备区</div>');
						info.push(player.getCards('e'));
					}
					var next=player.chooseButton();
					next.set('createDialog',info);
					next.set('selectButton',function (){
						var num=0;
						for(var i=0;i<ui.selected.buttons.length;i++){
							num+=get.number(ui.selected.buttons[i]);
						}
						if(num==36) return ui.selected.buttons.length;
						return ui.selected.buttons.length+2;
					});
					next.set('filterButton',function(button){
						var player=_status.event.player;
						if(ui.selected.buttons.length){
							if(!player.storage.xinfu_jijun.contains(button.link)) return false;
						}
						else if(player.storage.xinfu_jijun.contains(button.link)) return false;
						var num=0;
						for(var i=0;i<ui.selected.buttons.length;i++){
							num+=get.number(ui.selected.buttons[i]);
						}
						return get.number(button.link)+num<=36;
					});
					next.set('autolist',lib.skill.xinfu_fangtong.getAuto(player));
					next.set('processAI',function(){
						if(_status.event.autolist&&_status.event.autolist.length>0){
							return {
								bool:true,
								links:_status.event.autolist,
							}
						}
					});
					next.set('complexSelect',true);
					'step 1'
					if(result.bool){
						player.logSkill('xinfu_fangtong');
						var tothrow=[];
						var cards=result.links.slice(0);
						for(var i=0;i<cards.length;i++){
							if(player.storage.xinfu_jijun.contains(cards[i])){
								player.storage.xinfu_jijun.remove(cards[i]);
								tothrow.push(cards[i]);
							}else{
								player.discard(cards[i]);
							}
						}
						player.$throw(tothrow);
						player.chooseTarget('选择一个目标并对其造成3点雷电伤害',true,function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
						});
					}
					else{
						event.finish();
					}
					'step 2'
					var target=result.targets[0];
					player.line(target,'thunder');
					target.damage(3,'thunder');
				},
			},
			"xinfu_weilu":{
				audio:2,
				trigger:{
					player:"damageEnd",
				},
				filter:function (event,player){
					return (event.source!=undefined&&!event.source.hasSkill('weilu_effect'));
				},
				check:function (event,player){
					return (get.attitude(player,event.source)<=0);
				},
				forced:true,
				logTarget:"source",
				content:function (){
					trigger.source.storage.weilu_effect=player;
					trigger.source.addTempSkill('weilu_effect',{player:"dieAfter",});
					trigger.source.addTempSkill('weilu_effect_phase');
				},
				ai:{
					"maixie_defend":true,
					threaten:0.7,
					effect:{
						target:function (card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						},
					},
				},
			},
			"weilu_effect":{
				group:["weilu_effect_clear"],
				subSkill:{
					clear:{
						sub:true,
						trigger:{
							global:"phaseAfter",
						},
						filter:function (event,player){
							if(player.hasSkill('weilu_effect_phase')) return false;
							return event.player.hasSkill('xinfu_weilu');
						},
						silent:true,
						forced:true,
						popup:false,
						content:function (){
							player.removeSkill('weilu_effect');
						},
					},
					phase:{
						sub:true,
					},
				},
				mark:"character",
				onremove:true,
				intro:{
					content:"$的下个回合的出牌阶段开始时，失去体力至1点。",
				},
				trigger:{
					global:"phaseUseBegin",
				},
				filter:function (event,player){
					if(player.hasSkill('weilu_effect_phase')) return false;
					return event.player==player.storage.weilu_effect;
				},
				silent:true,
				forced:true,
				popup:false,
				content:function (){
					if(player.hp>1){
						trigger.player.logSkill('xinfu_weilu');
						trigger.player.line(player);
						var num=player.hp-1;
						player.storage.weilu_hp=num;
						player.loseHp(num);
						player.addSkill('weilu_effect2');
					}
					player.removeSkill('weilu_effect');
				},
			},
			"weilu_effect2":{
				trigger:{
					global:"phaseUseEnd",
				},
				silent:true,
				forced:true,
				popup:false,
				content:function (){
					if(player.storage.weilu_hp){
						trigger.player.logSkill('xinfu_weilu');
						trigger.player.line(player);
						player.recover(player.storage.weilu_hp);
					}
					player.removeSkill('weilu_effect2');
				},
			},
			"xinfu_zengdao":{
				audio:2,
				init:function (player){
					player.storage.xinfu_zengdao=false;
				},
				limited:true,
				unique:true,
				enable:"phaseUse",
				usable:1,
				filterTarget:function (card,player,target){
					return player!=target;
				},
				filter:function (event,player){
					if(player.storage.xinfu_zengdao==true) return false;
					return player.countCards('e')>0;
				},
				skillAnimation:true,
				animationColor:'thunder',
				position:"e",
				filterCard:true,
				selectCard:[1,Infinity],
				discard:false,
				lose:true,
				content:function (){
					player.awakenSkill('xinfu_zengdao');
					player.$give(cards,target,false);
					target.storage.xinfu_zengdao2=cards.slice(0);
					target.addSkill('xinfu_zengdao2');
				},
				ai:{
					order:1,
					result:{
						target:0,
					},
				},
				mark:true,
				intro:{
					content:"limited",
				},
			},
			"xinfu_zengdao2":{
				trigger:{
					source:"damageBegin1",
				},
				audio:"xinfu_zengdao",
				forced:true,
				charlotte:true,
				content:function (){
					'step 0'
					player.chooseCardButton('将一张“刀”置入弃牌堆',player.storage.xinfu_zengdao2,true);
					'step 1'
					if(result.bool){
						player.$throw(result.links);
						var card=result.links[0];
						game.cardsDiscard(card);
						player.storage.xinfu_zengdao2.remove(card);
						player.syncStorage('xinfu_zengdao2');
						player.updateMarks('xinfu_zengdao2');
					}
					if(player.storage.xinfu_zengdao2.length==0){
						player.removeSkill('xinfu_zengdao2');
					}
					trigger.num++;
				},
				mark:true,
				marktext:"刀",
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
						 storage.length=0;
						}
					},
				},
			},
			"xinfu_guanwei":{
				audio:2,
				usable:1,
				trigger:{
					global:"phaseUseEnd",
				},
				filter:function (event,player){
					var history=event.player.getHistory('useCard',function(evt){
						return evt.getParent('phaseUse')==event;
					});
					var num=0;
					var suit=false;
					for(var i=0;i<history.length;i++){
						var suit2=get.suit(history[i].card);
						if(!suit2) continue;
						if(suit&&suit!=suit2) return false;
						suit=suit2;
						num++;
					}
					return num>1;
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseToDiscard('he',get.prompt('xinfu_guanwei',trigger.player),'弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。').set('ai',function(card){
						if(get.attitude(_status.event.player,_status.currentPhase)<1) return 0;
						return 9-get.value(card);
					}).set('logSkill','xinfu_guanwei');
					'step 1'
					if(result.bool){
						player.line(trigger.player,'green');
						trigger.player.draw(2);
					}else{
						event.finish();
					}
					'step 2'
					var next=trigger.player.phaseUse();
					event.next.remove(next);
					trigger.getParent('phase').next.push(next);
				},
				ai:{
					expose:0.5,
				},
			},
			"xinfu_gongqing":{
				audio:true,
				trigger:{
					player:["damageBegin3","damageBegin4"],
				},
				forced:true,
				filter:function (event,player,name){
					if(!event.source) return false;
					var range=event.source.getAttackRange();
					if(name=='damageBegin3') return range>3;
					return event.num>1&&range<3;
				},
				//priority:-9.5,
				content:function (){
					trigger.num=event.triggername=='damageBegin4'?1:trigger.num+1;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.player){
							if(arg.player.hasSkillTag('jueqing',false,player)) return false;
							if(arg.player.getAttackRange()<3) return true;
						}
						return false;
					}
				},
			},
			"xinfu_andong":{
				subSkill:{
					add:{
						sub:true,
						mod:{
							ignoredHandcard:function (card,player){
								if(get.suit(card)=='heart'){
									return true;
								}
							},
							cardDiscardable:function (card,player,name){
								if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
							},
						},
					},
				},
				audio:2,
				trigger:{
					player:"damageBegin4",
				},
				filter:function (event,player){
					return get.itemtype(event.source)=='player';
				},
				logTarget:"source",
				content:function (){
					"step 0"
					if(!trigger.source.countCards('h')) event._result={index:1};
					else trigger.source.chooseControlList(
						['令'+get.translation(player)+'观看你的手牌，并获得其中所有的红桃牌。',
						'防止即将对'+get.translation(player)+'造成的伤害，并使自己本回合内的红桃手牌不计入手牌上限。'],
						true).set('ai',function(event,player){
						var target=_status.event.getParent().player;
						var player=_status.event.player;
						if(get.attitude(player,target)>0) return 1;
						return 0;
					});
					"step 1"
					if(result.index==1){
						trigger.cancel();
						trigger.source.addTempSkill('xinfu_andong_add');
						event.finish();
					}else{
						player.viewHandcards(trigger.source);
					}
					"step 2"
					var cards=trigger.source.getCards('h');
					var togain=[]
					for(var i=0;i<cards.length;i++){
						if(get.suit(cards[i])=='heart') togain.push(cards[i]);
					}
					if(togain.length) trigger.source.give(togain,player);
				},
			},
			"xinfu_yingshi":{
				audio:2,
				group:["yingshi_die"],
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				filter:function (event,player){
					return player.countCards('he',{suit:'heart'})>0&&!game.hasPlayer(function(current){
						return current.hasSkill('yingshi_heart');
					});
				},
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt2('xinfu_yingshi'),function(card,player,target){
						return target!=player;
					}).set('ai',function(){
						return -1;
					});
					'step 1'
					if(result.bool){
						var cards=player.getCards('he');
						var togain=[]
						for(var i=0;i<cards.length;i++){
							if(get.suit(cards[i])=='heart') togain.push(cards[i]);
						}
						player.logSkill('xinfu_yingshi',result.targets);
						player.lose(togain,ui.special,'toStorage');
						player.$give(togain,result.targets[0],false);
						result.targets[0].storage.yingshi_heart=togain;
						result.targets[0].addSkill('yingshi_heart');
					}
					else{
						event.finish();
					}
				},
			},
			"yingshi_heart":{
				marktext:"酬",
				trigger:{
					player:"damageEnd",
				},
				filter:function (event,player){
					return event.source!=undefined&&event.card&&event.card.name=='sha';
				},
				forced:true,
				content:function (){
					'step 0'
					trigger.source.chooseCardButton('选择要获得的牌',player.storage.yingshi_heart,true);
					'step 1'
					if(result.bool){
						player.$give(result.links,trigger.source);
						trigger.source.gain(result.links,'fromStorage');
						player.storage.yingshi_heart.remove(result.links[0]);
						player.syncStorage('yingshi_heart');
						player.updateMarks('yingshi_heart');
					}
					if(player.storage.yingshi_heart.length==0){
						delete player.storage.yingshi_heart;
						player.removeSkill('yingshi_heart');
					}
				},
				mark:true,
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
						 storage.length=0;
						}
					},
				},
			},
			"yingshi_die":{
				forced:true,
				silent:true,
				popup:false,
				trigger:{
					global:"dieBegin",
				},
				filter:function (event,player){
					return event.player.storage.yingshi_heart&&event.player.storage.yingshi_heart.length;
				},
				content:function (){
					player.logSkill('xinfu_yingshi');
					trigger.player.$give(trigger.player.storage.yingshi_heart,player);
					player.gain(trigger.player.storage.yingshi_heart);
					delete trigger.player.storage.yingshi_heart;
					trigger.player.removeSkill('yingshi_heart');
				},
			},
			"xinfu_duanfa":{
				init:function (player){
					player.storage.xinfu_duanfa=0;
				},
				audio:2,
				enable:"phaseUse",
				position:"he",
				filter:function (card,player){
					return player.storage.xinfu_duanfa<player.maxHp;
				},
				filterCard:function (card){
					return get.color(card)=='black';
				},
				selectCard:function (){
					var player=_status.event.player;
					return [1,player.maxHp-player.storage.xinfu_duanfa];
				},
				check:function (card){
					return 6-get.value(card)
				},
				delay:false,
				content:function (){
					player.draw(cards.length);
					player.storage.xinfu_duanfa+=cards.length;
				},
				group:"xinfu_duanfa_clear",
				subSkill:{
					clear:{
						trigger:{
							player:"phaseBefore",
						},
						forced:true,
						silent:true,
						popup:false,
						content:function (){
							player.storage.xinfu_duanfa=0;
						},
						sub:true,
					},
				},
				ai:{
					order:1,
					result:{
						player:1,
					},
				},
			},
			"xinfu_youdi":{
				audio:2,
				trigger:{
					player:"phaseJieshuBegin",
				},
				direct:true,
				filter:function (event,player){
					return player.countCards('h')>0;
				},
				content:function (){
					"step 0"
					player.chooseTarget(get.prompt2('xinfu_youdi'),function(card,player,target){
						return player!=target;
					}).set('ai',function(target){
						var player=_status.event.player;
						if(player.countCards('h','sha')>player.countCards('h')/3&&player.countCards('h',{color:'red'})>player.countCards('h')/2) return 0;
						if(target.countCards('he')==0) return 0.1;
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						game.delay();
						player.logSkill('xinfu_youdi',result.targets);
						event.target=result.targets[0];
						event.target.discardPlayerCard(player,'h',true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(get.color(result.links[0])!='black') player.draw('nodelay');
					if(result.links[0].name!='sha'&&event.target.countCards('he')){
						player.gainPlayerCard('he',event.target,true);
					}
				},
				ai:{
					expose:0.3,
					threaten:1.4,
				},
			},
			"xinfu_guanchao":{
				subSkill:{
					dizeng:{
						mark:true,
						marktext:"增",
						intro:{
							content:"单调递增",
						},
						trigger:{
							player:"useCard",
						},
						audio:"xinfu_guanchao",
						forced:true,
						mod:{
							aiOrder:function(player,card,num){
								if(typeof card.number!='number') return;
								var history=player.getHistory('useCard',function(evt){
									return evt.isPhaseUsing();
								});
								if(history.length==0) return num+10*(14-card.number);
								var num=get.number(history[0].card);
								if(!num) return;
								for(var i=1;i<history.length;i++){
									var num2=get.number(history[i].card);
									if(!num2||num2<=num) return;
									num=num2;
								}
								if(card.number>num) return num+10*(14-card.number);
							},
						},
						filter:function (event,player){
							var history=player.getHistory('useCard',function(evt){
								return evt.isPhaseUsing();
							});
							if(history.length<2) return false;
							var num=get.number(history[0].card);
							if(!num) return false;
							for(var i=1;i<history.length;i++){
								var num2=get.number(history[i].card);
								if(!num2||num2<=num) return false;
								num=num2;
							}
							return true;
						},
						content:function (){
							player.draw();
						},
						sub:true,
					},
					dijian:{
						mark:true,
						marktext:"减",
						intro:{
							content:"单调递减",
						},
						init:function (player){
							player.storage.guanchao=0;
						},
						onremove:function (player){
							delete player.storage.guanchao;
						},
						trigger:{
							player:"useCard",
						},
						audio:"xinfu_guanchao",
						forced:true,
						mod:{
							aiOrder:function(player,card,num){
								if(typeof card.number!='number') return;
								var history=player.getHistory('useCard',function(evt){
									return evt.isPhaseUsing();
								});
								if(history.length==0) return num+10*card.number;
								var num=get.number(history[0].card);
								if(!num) return;
								for(var i=1;i<history.length;i++){
									var num2=get.number(history[i].card);
									if(!num2||num2>=num) return;
									num=num2;
								}
								if(card.number<num) return num+10*card.number;
							},
						},
						filter:function (event,player){
							var history=player.getHistory('useCard',function(evt){
								return evt.isPhaseUsing();
							});
							if(history.length<2) return false;
							var num=get.number(history[0].card);
							if(!num) return false;
							for(var i=1;i<history.length;i++){
								var num2=get.number(history[i].card);
								if(!num2||num2>=num) return false;
								num=num2;
							}
							return true;
						},
						content:function (){
							player.draw();
						},
						sub:true,
					},
				},
				audio:2,
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				content:function (){
					'step 0'
					var list=['递增','递减','取消'];
					player.chooseControl(list).set('prompt',get.prompt2('xinfu_guanchao')).set('ai',function(){
						return [0,1].randomGet();
					});
					'step 1'
					switch(result.control){
						case '递增':{
							player.logSkill('xinfu_guanchao');
							player.addTempSkill('xinfu_guanchao_dizeng','phaseUseEnd');
							break;
						}
						case '递减':{
							player.logSkill('xinfu_guanchao');
							player.addTempSkill('xinfu_guanchao_dijian','phaseUseEnd');
							break;
						}
						case '取消':{
							break;
						}
					}
				},
			},
			"xinfu_xunxian":{
				usable:1,
				audio:2,
				trigger:{
					player:["useCardAfter","respond"],
				},
				filter:function (event,player){
					if(get.itemtype(event.cards)!='cards'||player==_status.currentPhase) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].isInPile()){
							return true;
						}
					}
					return false;
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt2('xinfu_xunxian'),function(card,player,target){
						return target!=player&&target.countCards('h')>player.countCards('h');
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att<3) return 0;
						if(target.hasJudge('lebu')){
							att/=5;
						}
						if(target.hasSha()&&_status.event.sha){
							att/=5;
						}
						if(_status.event.wuxie&&target.needsToDiscard(1)){
							att/=5;
						}
						return att/(1+get.distance(player,target,'absolute'));
					}).set('sha',trigger.cards[0].name=='sha').set('wuxie',trigger.cards[0].name=='wuxie');
					'step 1'
					if(result.bool){
						var list=[];
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].isInPile()){
								list.push(trigger.cards[i]);
							}
						}
						player.logSkill('xinfu_xunxian',result.targets[0]);
						result.targets[0].gain(list,'gain2');
					}
				},
				ai:{
					expose:0.3,
				},
			},
			"xinfu_kannan":{
				audio:true,
				subSkill:{
					phase:{
						sub:true,
					},
				},
				enable:"phaseUse",
				filter:function (event,player){
					if(player.hasSkill('xinfu_kannan_phase')) return false;
					if(player.getStat().skill.xinfu_kannan>=player.hp) return false;
					return player.countCards('h')>0;
				},
				filterTarget:function (card,player,target){
					if(target.hasSkill('xinfu_kannan_phase')) return false;
					return player.canCompare(target);
				},
				ai:{
					order:function (){
						return get.order({name:'sha'})+0.4;
					},
					result:{
						target:function (player,target){
							if(player.hasCard(function(card){
								if(get.position(card)!="h") return false;
								var val=get.value(card);
								if(val<0) return true;
								if(val<=5){
									return card.number>=12;
								}
								if(val<=6){
									return card.number>=13;
								}
								return false;
							})) return -1;
							return 0;
						},
					},
				},
				content:function (){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						player.addTempSkill('xinfu_kannan_phase');
						if(!player.hasSkill('kannan_eff')){
							player.addSkill('kannan_eff');
						}else{
							if(!player.storage.kannan_eff) player.storage.kannan_eff=0;
						}
						player.storage.kannan_eff++;
						player.markSkill('kannan_eff');
					}
					else{
						target.addTempSkill('xinfu_kannan_phase');
						if(!target.hasSkill('kannan_eff')){
							target.addSkill('kannan_eff');
						}
						else{
							if(!target.storage.kannan_eff) player.storage.kannan_eff=0;
							//target.storage.kannan_eff++;
							//target.markSkill('kannan_eff');
						}
						target.storage.kannan_eff++;
						target.markSkill('kannan_eff');
					}
				},
			},
			"kannan_eff":{
				mark:true,
				intro:{
					content:"下一张杀的伤害基数+#",
				},
				trigger:{
					player:"useCard",
				},
				filter:function (event){
					return event.card&&event.card.name=='sha';
				},
				forced:true,
				content:function (){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.kannan_eff;
					player.removeSkill('kannan_eff');
				},
				init:function (player){
					player.storage.kannan_eff=0;
				},
				onremove:function (player){
					delete player.storage.kannan_eff;
				},
				ai:{
					damageBonus:true,
				},
			},
			"xinfu_tushe":{
				audio:2,
				trigger:{
					player:"useCardToPlayered",
				},
				frequent:true,
				filter:function (event,player){
					if(get.type(event.card)=='equip') return false;
					if(event.getParent().triggeredTargets3.length>1) return false;
					return event.targets.length>0&&!player.countCards('h',{type:'basic',});
				},
				content:function (){
					player.draw(trigger.targets.length);
				},
				ai:{
					presha:true,
					pretao:true,
					threaten:1.8,
				},
			},
			"xinfu_limu":{
				mod:{
					targetInRange:function (card,player,target){
						if(player.countCards('j')&&player.inRange(target)){
							return true;
						}
					},
					cardUsableTarget:function(card,player,target){
						if(player.countCards('j')&&player.inRange(target)) return true;
					},
					aiValue:function(player,card,num){
						if(card.name=='zhangba') return 15;
						if(player.getEquip('zhangba')&&player.countCards('h')>1&&['shan','tao'].contains(card.name)) return 0;
						if(card.name=='shan'||card.name=='tao') return num/2;
					},
				},
				locked:false,
				audio:2,
				enable:"phaseUse",
				discard:false,
				filter:function (event,player){
					if(player.hasJudge('lebu')) return false;
					return player.countCards('he',{suit:'diamond'})>0;
				},
				viewAs:{name:'lebu'},
				//prepare:"throw",
				position:"he",
				filterCard:function(card,player,event){
					return get.suit(card)=='diamond'&&player.canAddJudge({name:'lebu',cards:[card]});
				},
				selectTarget:-1,
				filterTarget:function (card,player,target){
					return player==target;
				},
				check:function(card){
					var player=_status.event.player;
					if(!player.getEquip('zhangba')&&player.countCards('h','sha')<2){
						if(player.countCards('h',function(cardx){
							return cardx!=card&&cardx.name=='shan';
						})>0) return 0;
						var damaged=player.maxHp-player.hp-1;
						var ts=player.countCards('h',function(cardx){
							return cardx!=card&&cardx.name=='tao';
						});
						if(ts>0&&ts>damaged) return 0;
					}
					if(card.name=='shan') return 15;
					if(card.name=='tao') return 10;
					return 9-get.value(card);
				},
				onuse:function (links,player){
					var next=game.createEvent('limu_recover',false,_status.event.getParent());
					next.player=player;
					next.setContent(function(){player.recover()});
				},
				ai:{
					result:{
						target:1,
					},
					order:12,
				},
			},
		},
		translate:{
			xinghuoliaoyuan:'星火燎原',
			
			"sp_taishici":"SP太史慈",
			wangcan:"王粲",
			"re_jsp_pangtong":"SP庞统",
			lvdai:"吕岱",
			"re_zhangliang":"张梁",
			lvqian:"吕虔",
			panjun:"潘濬",
			duji:"杜畿",
			zhoufang:"周鲂",
			yanjun:"严畯",
			liuyao:"刘繇",
			liuyan:"刘焉",
			"xinfu_guolun":"过论",
			"xinfu_guolun_info":"出牌阶段限一次，你可以展示一名其他角色的手牌，然后展示你的一张牌。你与其交换这两张牌，然后展示的牌点数较小的角色摸一张牌。",
			"xinfu_zhanji":"展骥",
			"xinfu_zhanji_info":"锁定技，你的出牌阶段内，当你因摸牌且不是因为此技能效果而获得牌时，你额外摸一张牌。",
			"xinfu_songsang":"送丧",
			"xinfu_songsang_info":"限定技，其他角色死亡时，你可以回复一点体力（若你未受伤，则改为加一点体力上限）；然后获得技能〖展骥〗。",
			"xinfu_jixu":"击虚",
			"xinfu_jixu_info":"出牌阶段限一次，若你有手牌，你可以令任意名体力值相等的其他角色猜测你的手牌中是否有【杀】。然后，你摸X张牌（X为猜错的角色数）。若你有【杀】，则你本回合内使用【杀】时，所有这些角色均成为【杀】的目标；若你没有【杀】，则你弃置所有这些角色的各一张牌。若X为零，你结束出牌阶段。",
			"jixu_sha":"击虚",
			"jixu_sha_info":"",
			"xinfu_sanwen":"散文",
			"xinfu_sanwen_info":"每回合限一次。当你获得牌后，若你的原手牌中有与这些牌名称相同的牌，则你可以展示这些牌，弃置新得到的同名牌并摸两倍的牌。",
			"xinfu_qiai":"七哀",
			"xinfu_qiai_info":"限定技，当你进入濒死状态时，你可以令所有其他角色依次交给你一张牌。",
			"xinfu_denglou":"登楼",
			"xinfu_denglou_info":"限定技，结束阶段，若你没有手牌，则你可以观看牌堆顶的四张牌，依次使用其中的所有基本牌（不能使用则弃置），然后获得其余的牌。",
			"qinguo_use":"勤国",
			"qinguo_use_info":"",
			"xinfu_qinguo":"勤国",
			"xinfu_qinguo_info":"当你使用的装备牌结算完成时，你可以视为使用一张【杀】；当你因使用或失去装备牌导致装备区内牌的数量发生变化后，若你装备区内牌的数量等于你的体力值，则你回复1点体力。",
			"qinguo_lose":"勤国",
			"qinguo_lose_info":"",
			"xinfu_jijun":"集军",
			"xinfu_jijun_info":"当你于回合内使用非装备牌或武器牌指定目标后，若你是此牌的目标，你可以进行一次判定。然后，你将判定牌置于自己的武将牌上，称之为「方」。",
			"xinfu_fangtong":"方统",
			"xinfu_fangtong_info":"结束阶段，你可以弃置总点数之和为36的一张牌与任意张「方」，并对一名其他角色造成3点雷电伤害。",
			"xinfu_weilu":"威虏",
			"xinfu_weilu_info":"锁定技，当你受到伤害后，伤害来源获得一枚「虏」。你的下个出牌阶段开始时，所有有「虏」的角色将体力失去至1点。此阶段结束后，这些角色回复以此法失去的体力。",
			"weilu_effect":"威虏",
			"weilu_effect_info":"",
			"weilu_effect2":"威虏",
			"weilu_effect2_info":"",
			"xinfu_zengdao":"赠刀",
			"xinfu_zengdao_info":"限定技，出牌阶段，你可以将装备牌内的任意张牌置于一名其他角色的武将牌旁，称之为「刀」。该角色造成伤害时，其须移去一张「刀」，然后此伤害+1。",
			"xinfu_zengdao2":"赠刀",
			"xinfu_zengdao2_info":"",
			"xinfu_guanwei":"观微",
			"xinfu_guanwei_info":"每回合限一次。一名角色的出牌阶段结束时，若其于出牌阶段内使用过两张以上的牌且花色均相同，则你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。",
			"xinfu_gongqing":"公清",
			"xinfu_gongqing_info":"锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
			"xinfu_andong":"安东",
			"xinfu_andong_info":"当你受到伤害时，你可以令伤害来源选择一项：1.令你观看其的手牌并获得其中的所有红桃牌；2.防止此伤害，然后其本回合内的红桃手牌不计入手牌上限。",
			"xinfu_yingshi":"应势",
			"xinfu_yingshi_info":"出牌阶段开始时，若场上的所有角色均没有「酬」，则你可以将所有的红桃牌置于一名其他角色的武将牌旁，称之为「酬」。有「酬」的角色受到「杀」的伤害/死亡时，伤害来源/你获得其中的一张/所有的「酬」。",
			"yingshi_heart":"应势",
			"yingshi_heart_info":"",
			"yingshi_die":"应势",
			"yingshi_die_info":"",
			"xinfu_duanfa":"断发",
			"xinfu_duanfa_info":"出牌阶段，你可以弃置任意张黑色牌，然后摸等量的牌。（每回合内限X张，X为你的体力上限）",
			"xinfu_youdi":"诱敌",
			"xinfu_youdi_info":"结束阶段开始时，你可以令一名其他角色弃置你的一张手牌，若此牌：不为黑色，你摸一张牌。不为【杀】，你获得该角色的一张牌。",
			"xinfu_guanchao":"观潮",
			"xinfu_guanchao_info":"出牌阶段开始时，你可以选择获得一项效果直到回合结束：1.当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌；2.当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌。",
			"xinfu_xunxian":"逊贤",
			"xinfu_xunxian_info":"每名其他角色的回合限一次，当你使用或打出的牌结算完成后，你可以将其对应的所有实体牌交给一名手牌数大于你的角色。",
			"xinfu_kannan":"戡难",
			"xinfu_kannan_info":"出牌阶段限X次，你可以与一名本回合内未成为过〖戡难〗目标的角色拼点。若你赢，你使用的下一张【杀】的伤害值基数+1，且你本回合内不能再发动〖戡难〗。若你没赢，其使用的下一张【杀】的伤害值基数+1。（X为你的体力值）。",
			"kannan_eff":"戡难",
			"kannan_eff_info":"",
			"xinfu_tushe":"图射",
			"xinfu_tushe_info":"当你使用非装备牌指定目标后，若你没有基本牌，则你可以摸X张牌。（X为此牌指定的目标数）",
			"xinfu_limu":"立牧",
			"xinfu_limu_info":"出牌阶段限一次，你可以将一张♦牌当做【乐不思蜀】对自己使用，然后回复1点体力。只要你的判定区内有牌，你对攻击范围内的其他角色使用牌便没有次数和距离限制。",
		},
	};
});
