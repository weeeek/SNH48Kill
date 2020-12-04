(function(){
	var WebSocketServer=require('ws').Server;
	var wss=new WebSocketServer({port:8080});
	var bannedKeys=[];
	var bannedIps=[];

	var rooms=[{},{},{},{},{},{},{},{}];
	var systemEvent={
		content:'公告内容',
		avatar:'key_yuri',
		nickname:'系统管理员',
		title:'系统公告',
	};
	var events=[systemEvent];
	var clients={};
	var bannedKeyWords=['ghs','直肠','性交','做爱','http','吃奶','骚逼','哈巴狗','美眉','癌','屁眼','艹','傻逼','操你','做鸡','奸','姦','华为','屄','狗子','屎','同性恋','肖战','鸡巴','精液','粪水','挂月亮中','贱骨头','吃屁'];
	var messages={
		enter:function(index,nickname,avatar,config,mode){
			this.nickname=nickname;
			this.avatar=avatar;
			var room=rooms[index];
			if(!room){
				index=0;
				room=rooms[0];
			}
			this.room=room;
			delete this.status;
			if(room.owner){
				if(room.servermode&&!room.owner._onconfig&&config&&mode){
					room.owner.sendl('createroom',index,config,mode);
					room.owner._onconfig=this;
					room.owner.nickname=nickname;
					room.owner.avatar=avatar;
				}
				else if(!room.config){
					this.sendl('enterroomfailed');
				}
				else{
					this.owner=room.owner;
					this.owner.sendl('onconnection',this.wsid);
				}
				util.updaterooms();
			}
			else{
				room.owner=this;
				this.sendl('createroom',index);
			}
		},
		changeAvatar:function(nickname,avatar){
			this.nickname=nickname;
			this.avatar=avatar;
			util.updateclients();
		},
		server:function(cfg){
			if(cfg){
				this.servermode=true;
				var room=rooms[cfg[0]];
				if(!room||room.owner){
					this.sendl('reloadroom',true);
				}
				else{
					room.owner=this;
					this.room=room;
					this.nickname=cfg[1];
					this.avatar=cfg[2];
					this.sendl('createroom',cfg[0],{},'auto')
				}
			}
			else{
				for(var i=0;i<rooms.length;i++){
					if(!rooms[i].owner){
						rooms[i].owner=this;
						rooms[i].servermode=true;
						this.room=rooms[i];
						this.servermode=true;
						break;
					}
				}
				util.updaterooms();
			}
		},
		key:function(id){
			this.onlineKey=id;
			clearTimeout(this.keyCheck);
			delete this.keyCheck;
			if(typeof id!='string'||bannedKeys.indexOf(id)!=-1){
				bannedIps.push(this._socket.remoteAddress);
				console.log(id, this._socket.remoteAddress);
				this.close();
				return;
			}
		},
		events:function(cfg,id,type){
			if(bannedKeys.indexOf(id)!=-1||typeof id!='string'){
				bannedIps.push(this._socket.remoteAddress);
				console.log(id, this._socket.remoteAddress);
				this.close();
				return;
			}
			var changed=false;
			var time=(new Date()).getTime();
			if(cfg&&id){
				if(typeof cfg=='string'){
					for(var i=0;i<events.length;i++){
						if(events[i].id==cfg){
							if(type=='join'){
								if(events[i].members.indexOf(id)==-1){
									events[i].members.push(id);
								}
								changed=true;
							}
							else if(type=='leave'){
								var index=events[i].members.indexOf(id);
								if(index!=-1){
									events[i].members.splice(index,1);
									if(events[i].members.length==0){
										events.splice(i--,1);
									}
								}
								changed=true;
							}
						}
					}
				}
				else if(cfg.hasOwnProperty('utc')&&
						cfg.hasOwnProperty('day')&&
						cfg.hasOwnProperty('hour')&&
						cfg.hasOwnProperty('content')){
					if(events.length>=20){
						this.sendl('eventsdenied','total');
					}
					else if(cfg.utc<=time){
						this.sendl('eventsdenied','time');
					}
					else if(util.isBanned(cfg.content)){
						this.sendl('eventsdenied','ban');
					}
					else{
						cfg.nickname=cfg.nickname||'无名玩家';
						cfg.avatar=cfg.nickname||'caocao';
						cfg.creator=id;
						cfg.id=util.getid();
						cfg.members=[id];
						events.splice(0,1);
						events.unshift(cfg);
						events.unshift(systemEvent);
						changed=true;
					}
				}
			}
			if(changed){
				util.updateevents();
			}
		},
		config:function(config){
			var room=this.room;
			if(room&&room.owner==this){
				if(room.servermode){
					room.servermode=false;
					if(this._onconfig){
						if(clients[this._onconfig.wsid]){
							this._onconfig.owner=this;
							this.sendl('onconnection',this._onconfig.wsid);
						}
						delete this._onconfig;
					}
				}
				room.config=config;
			}
			util.updaterooms();
		},
		status:function(str){
			if(typeof str=='string'){
				this.status=str;
			}
			else{
				delete this.status;
			}
			util.updateclients();
		},
		send:function(id,message){
			if(clients[id]&&clients[id].owner==this){
				try{
					clients[id].send(message);
				}
				catch(e){
					clients[id].close();
				}
			}
		},
		close:function(id){
			if(clients[id]&&clients[id].owner==this){
				clients[id].close();
			}
		},
	};
	var util={
		isBanned:function(str){
			for(var i of bannedKeyWords){
				if(str.indexOf(i)!=-1) return true;
			}
			return false;
		},
		sendl:function(){
			var args=[];
			for(var i=0;i<arguments.length;i++){
				args.push(arguments[i]);
			}
			try{
				this.send(JSON.stringify(args));
			}
			catch(e){
				this.close();
			}
		},
		getid:function(){
			return (Math.floor(1000000000+9000000000*Math.random())).toString();
		},
		getroomlist:function(){
			var roomlist=[];
			for(var i=0;i<rooms.length;i++){
				rooms[i]._num=0;
			}
			for(var i in clients){
				if(clients[i].room&&!clients[i].servermode){
					clients[i].room._num++;
				}
			}
			for(var i=0;i<rooms.length;i++){
				if(rooms[i].servermode){
					roomlist[i]='server';
				}
				else if(rooms[i].owner&&rooms[i].config){
					if(rooms[i]._num==0){
						rooms[i].owner.sendl('reloadroom');
					}
					roomlist[i]=[rooms[i].owner.nickname,rooms[i].owner.avatar,
					rooms[i].config,rooms[i]._num];
				}
				else{
					roomlist[i]=null;
				}
				delete rooms[i]._num;
			}
			return roomlist;
		},
		getclientlist:function(){
			var clientlist=[];
			for(var i in clients){
				clientlist.push([clients[i].nickname,clients[i].avatar,!clients[i].room,clients[i].status,clients[i].wsid,clients[i].onlineKey]);
			}
			return clientlist;
		},
		updaterooms:function(){
			var roomlist=util.getroomlist();
			var clientlist=util.getclientlist();
			for(var i in clients){
				if(!clients[i].room){
					clients[i].sendl('updaterooms',roomlist,clientlist);
				}
			}
		},
		updateclients:function(){
			var clientlist=util.getclientlist();
			for(var i in clients){
				if(!clients[i].room){
					clients[i].sendl('updateclients',clientlist);
				}
			}
		},
		checkevents:function(){
			if(events.length){
				var time=(new Date()).getTime();
				for(var i=0;i<events.length;i++){
					if(events[i].utc<=time){
						events.splice(i--,1);
					}
				}
			}
			return events;
		},
		updateevents:function(){
			util.checkevents();
			for(var i in clients){
				if(!clients[i].room){
					clients[i].sendl('updateevents',events);
				}
			}
		}
	};
	wss.on('connection',function(ws){
		ws.sendl=util.sendl;
		if(bannedIps.indexOf(ws._socket.remoteAddress)!=-1){
			ws.sendl('denied','banned');
			setTimeout(function(){
				ws.close();
			},500);
			return;
		}
		ws.keyCheck=setTimeout(function(){
			ws.sendl('denied','key');
			setTimeout(function(){
				ws.close();
			},500);
		},2000);
		ws.wsid=util.getid();
		clients[ws.wsid]=ws;
		ws.sendl('roomlist',util.getroomlist(),util.checkevents(),util.getclientlist(ws),ws.wsid);
		ws.heartbeat=setInterval(function(){
			if(ws.beat){
				ws.close();
				clearInterval(ws.heartbeat);
			}
			else{
				ws.beat=true;
				try{
					ws.send('heartbeat');
				}
				catch(e){
					ws.close();
				}
			}
		},60000);
		ws.on('message',function(message){
			if(!clients[this.wsid]) return;
			if(message=='heartbeat'){
				this.beat=false;
			}
			else if(this.owner){
				this.owner.sendl('onmessage',this.wsid,message);
			}
			else{
				var arr;
				try{
					arr=JSON.parse(message);
					if(!Array.isArray(arr)){
						throw('err');
					}
				}
				catch(e){
					this.sendl('denied','banned');
					return;
				}
				if(arr.shift()=='server'){
					var type=arr.shift();
					if(messages[type]){
						messages[type].apply(this,arr);
					}
				}
			}
		});
		ws.on('close',function(){
			for(var i=0;i<rooms.length;i++){
				if(rooms[i].owner==this){
					rooms[i].owner=null;
					rooms[i].config=null;
					rooms[i].servermode=false;
					for(var j in clients){
						if(clients[j].room==rooms[i]&&clients[j]!=this){
							clients[j].sendl('selfclose');
							// clients[j].close();
							// delete clients[j];
						}
					}
				}
			}
			if(clients[this.wsid]){
				if(this.owner){
					this.owner.sendl('onclose',this.wsid);
				}
				delete clients[this.wsid];
			}
			if(this.room) util.updaterooms();
			else util.updateclients();
		});
	});
}());
