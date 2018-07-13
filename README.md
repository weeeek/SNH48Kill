# SNH48Kill
<a href="http://noname.pub/">无名杀官方</a>
<hr>
<a href="https://weeeek.github.io/SNH48Kill/">SNH48女团大战版-在线游玩</a>
<hr>
<a href="https://github.com/weeeek/SNH48Kill/archive/master.zip">Zip压缩包下载</a>
<hr>
<ol>
	<li>
		<div>
			<h4>在SNH48卡包中自制卡牌</h4>
			<ul>
				<li>在card/SNH48G.js中，在card对象里定义一个卡牌对象，以卡牌名称拼音命名，名称不可和其它卡牌重复</li>
				<li>在card/SNH48G.js中，在skill对象里定义一个技能对象，以技能名称拼音命名，名称不可和其它技能重复</li>
				<li>在card/SNH48G.js中，在translate对象里定义一组说明文字</li>
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
</ol>
