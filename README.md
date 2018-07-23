# SNH48Kill
**[无名杀官方](http://noname.pub/)**
-----------
**[SNH48女团大战版-在线游玩](https://weeeek.github.io/SNH48Kill/)**
-----------
**[Zip压缩包下载](https://github.com/weeeek/SNH48Kill/archive/master.zip)**
-----------
## 系统截图
<div align=center>
	<img width="1024" height="576" src="https://weeeek.github.io/SNH48Kill/image/screenshot/selectMode.jpg"/>
	<div>新增模式：SNH48国战</div>
	<img width="1024" height="576" src="https://weeeek.github.io/SNH48Kill/image/screenshot/identityMode.jpg"/>
	<div>身份模式：新增SNH48角色，自定义技能</div>
</div>
-----------
### 代码说明
<ol>
	<li>
		<div>
			<h4>在SNH48卡包中自制卡牌</h4>
			<ul>
				<li>
					在card/SNH48G.js中，在card对象里定义一个卡牌对象，以卡牌名称拼音命名，名称不可和其它卡牌重复
				</li>
				<li>
					在card/SNH48G.js中，在skill对象里定义一个技能对象，以技能名称拼音命名，名称不可和其它技能重复
				</li>
				<li>
					在card/SNH48G.js中，在translate对象里定义一组说明文字
				</li>
				<li>在card/SNH48G.js中，在list对象里定义卡牌点数与花色</li>
			</ul>
		</div>
	</li>
	<li>
		<div>
			<h4>在SNH48模式中加入自制卡牌</h4>
			<ul>
				<li>在mode/SNH48G.js中，复制card/SNH48G.js中的list对象里定义卡牌点数与花色，加入到mode/SNH48G.js的list对象里面</li>
			</ul>
		</div>
	</li>
	<li>
		<div>
			<h4>在SNH48卡包中自制武将、武将技能</h4>
			<ul>
				<li>
					在character/SNH48G.js中，在character对象中定义武将（性别，阵营，体力上限，技能组），以“SNH48G”+ 名成拼音命名，名称不可和其它卡牌重复					
					```
					SNH48Gjujingyi: ['female', 'N', 4, ['dufei', 'poisonousfog', 'jiedu', 'duzong']]
					```
				</li>
				<li>
					在character/SNH48G.js中，在characterIntro对象中定义武将的简介，名称同上面定义的武将名
					```
					SNH48Gjujingyi: '明星殿堂 成员，SNH48二期生'
					```
				</li>
				<li>
					在character/SNH48G.js中，在skill对象中定义技能名称，名称不可和其它技能重复					
					```
					poisonousfog: {
						audio: 2,
						enable: 'phaseUse',
						usable: 1,
						filterCard: function (card, player) {
							return card.name == 'du';
						},
						filter: function (card, player) {
							return player.countCards('h', { name: 'du' }) >= 2
						},
						selectCard: 2,
						selectTarget: -1,
						multitarget: true,
						multiline: true,
						skillAnimation: 'epic',
						animationColor: 'nature',
						filterTarget: function (card, player, target) {
							return target != player;
						},
						content: function () {
							for (var i = 0; i < event.targets.length; i++) {
								event.targets[i].loseHp();
							}
							if (player.hasSkill('xinxie'))
								player.draw(2);
						},
						ai: {
							basic: {
								order: 10
							}
						}
					}
					```
				</li>
				<li>
					在character/SNH48G.js中，在translate对象中定义技能显示名称，技能介绍（因“毒雾”拼音同“黩武”，故改为“poisonousfog”）
					```
					dufei: '毒妃',
					dufei_info: '锁定技：每当其他角色弃置、判定、拼点、使用后并进入弃牌堆的毒，你获得之。你每有一个“毒”，手牌上限+1。你使用毒时不会流失体力，反而会回复1点体力。',
					poisonousfog: '毒雾',
					poisonousfog_info: '出牌阶段限一次，你可以弃置两张“毒”，若如此做，除你之外的所有角色失去1点体力',
					jiedu: '解毒',
					jiedu_info: '其他角色失去体力濒死时，你可以弃置一张"毒"，使其回复至1点体力。然后你摸一张牌',
					duzong: '毒宗',
					duzong_info: '觉醒技：若你手中的“毒”大于等于两张，你体力上限-1并回复1点体力，永久获得技能“心血”',
					xinxie: '心血',
					xinxie_info: '你每次使用“毒”之后，摸1张牌；你的结束阶段，随机将一张手牌转化为毒。'
					```
				</li>
			</ul>
		</div>
	</li>
	<li>
		<div>
			<h4>技能代码说明</h4>
			<ul>
				<li>
					<h3>触发器trigger</h3>
					<div>针对角色：</div>
					<ol>
						<li>当前玩家（player）</li>
						<li>来源（source）</li>
						<li>全部角色（global）</li>
					</ol>
					<div>事件类型：</div>
					<ol>
						<li>回合开始（phaseBegin）</li>
						<li>判定阶段开始（judgeBegin）</li>
						<li>判定生效前（judge）</li>
						<li>摸牌阶段开始（phaseDrawBegin）</li>
						<li>摸牌阶段（phaseDraw）</li>
						<li>出牌阶段开始（phaseUseBegin）</li>
						<li>出牌阶段（phaseUse）</li>
						<li>弃牌阶段开始（phaseDiscardBegin）</li>
						<li>回合结束（phaseEnd）</li>
						<li>出杀时（shaBegin）</li>
						<li>造成伤害前（damageBegin）</li>
						<li>造成伤害后（damageEnd）</li>
						<li>杀被闪响应后（shaMiss）</li>
						<li>...</li>
					</ol>
				<li>
				<li>
					<h3>使用次数</h3>
					<div>usable:N+</div>
				</li>
				<li>
					<h3>被迫触发</h3>
					<div>forced:true</div>
				</li>
				<li>
					<h3>锁定技</h3>
					<div>mod:{}</div>
				</li>
				<li>
					<h3>技能效果</h3>
					<div>content:function(){}</div>
				</li>
				<li>
					<h3>触发条件</h3>
					<div>filter:function(){}</div>
				</li>
				<li>
					<h3>弃牌张数</h3>
					<div>selectCard:N+(-1为全弃)</div>
				</li>
				<li>
					<h3>弃牌限制</h3>
					<div>filterCard:function(card){}</div>
				</li>
				<li>
					<h3>目标个数</h3>
					<div>selectTarget:N+(-1为全部)</div>
				</li>
				<li>
					<h3>目标限制</h3>
					<div>filterTarget:function(target){}</div>
				</li>				
				<li>
					<h3>AI</h3>
					<div>ai:{}</div>
				</li>
			</ul>
		</div>		
	</li>
	<li>
		<div>
			<h4>技能效果代码说明</h4>
			<ul>
				<li>
					<h3>角色对象.countCards(type,filter)</h3>
					<div>type，类型：string</div>
					<ul>
						<li>'h':手牌（hand）</li>
						<li>'e':装备区的牌（equip）</li>
						<li>'j':判定区牌（judge）</li>
						<li>'he':手牌（hand） + 装备区的牌（equip）</li>
						<li>'hej':手牌（hand） + 装备区的牌（equip）+ 判定区牌（judge）</li>
					</ul>
					<div>filter，类型：object</div>
					<ul>
						<li>{name:'sha|shan|tao|jiu|wuzhong|wuxie|nanman...'}:杀|闪|桃|酒|无中生有|无懈可击|南蛮入侵...</li>
						<li>{type:'basic|trigger|equip|delay'}:基本牌（basic），锦囊牌（trigger），装备牌（equip），延迟锦囊（delay）</li>
						<li>{suit:'heart|diamond|club|spade'}:红桃牌（heart），方片牌（diamond），梅花牌（club），黑桃牌（spade）</li>
						<li>{color:'black|red'}:黑色牌（club+spade），红色牌（heart+diamond）</li>
					</ul>
					<div>返回结果：N</div>
				</li>
				<li>
					<h3>角色对象.draw(num)</h3>
					<div>num:N+，可不填，默认1</div>					
				</li>
			</ul>
		</div>
	</li>
</ol>
