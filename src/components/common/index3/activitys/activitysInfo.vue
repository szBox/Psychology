<template>

	<div class="activitysInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1 >{{userInfo.name}}</h1>
			<!--<h1>{{shenheList}}</h1>-->
		</header>
		<div class="b-content">
			<div class="activi-li">
				<div class="faqi-img">
					<img :src="userInfo.headPic" alt="" />
					<div>
						<p>{{userInfo.nickName}}</p>
						<h6>{{userInfo.insertTime | niceDate}}</h6>
					</div>
				</div>
				<p class="activi-type" :style="{color:TypesName_color}">
					{{userInfo.type | TypesName}}
				</p>
			</div>
			<div class="bgg"></div>
			<div class="activi-li">
				<p style="border: none;font-size: 0.8rem;">
					<span style="font-size: 0.7rem;">活动详情：</span>
					{{userInfo.content}}
				</p>
			</div>
			<div class="bgg"></div>
			<div class="activi-li">
				<p>
					<span>报名时间：</span>
					{{userInfo.signupStartTime | niceDate}} ~{{userInfo.signupEndTime | niceDate}}
				</p>
				<p>
					<span>联系方式：</span>
					{{userInfo.contactMethod}}
				</p>
				<p>
					<span>人均消费：</span>
					<em>{{userInfo.payPer}}元</em>
				</p>
			</div>
			<div class="BGG"></div>
			<div class="activi-li">
				<p>
					<span>集合时间：</span>
					{{userInfo.gatherStartTime | niceDate}}
				</p>
				<p>
					<span>集合地点：</span>
					{{userInfo.gatherAddress}}
				</p>
			</div>
			<div class="bgg"></div>
			<!----    管理员  老师  发起---->
			<div class="baoming-ul"  v-if='userInfo.type=="1"'>
				<div class="h-faqi">
					<h1 @click="typeToggle(1),getList1()" :class="{'baoming-active':toggleNav==1}" class="baoming-type">
						<span>已报名&nbsp;&nbsp;({{userInfo.count}})</span>
						<em></em>
					</h1>
					<h1  @click="typeToggle(2),getList2()":class="{'baoming-active':toggleNav==2}" class="baoming-type">
						<span>待审核&nbsp;&nbsp;</span>
						<em></em>
					</h1>
				</div>
				
				<ul v-if='toggleNav==1'>
					
					<li v-for='(item,index) in baominList'>
						<!--{{item}}-->
						
						<p>
							<img :src="item.headPic" alt="" />
							<span v-if='item.type==1'>{{item.nickName}}</span>
							<span v-if='item.type==2'>{{item.name}}</span>
						</p>
						<div>
							<p v-if='item.type==1'>{{item.userPhone}}</p>
							<p v-if='item.type==2'>{{item.phone}}</p>
							<h4>{{item.className}}</h4>
						</div>
					</li>
					<p  class="more-btn" :class="{'nodata' : nodata1==true}" @click="next1 && more1() ">{{next1_text}}</p>
				</ul>
				
				<ul v-if='toggleNav==2'>
					<li v-for='(item2,index) in shenheList'>

						<p>
							<img :src='item2.headPic'/>
							<span v-if='item2.type==1'>{{item2.nickName}}</span>
							<span v-if='item2.type==2'>{{item2.name}}</span>
						</p>
						<div>
							<p v-if='item2.type==1'>{{item2.userPhone}}</p>
							<p v-if='item2.type==2'>{{item2.phone}}</p>
							<h4>{{item2.className}}</h4>
							
						</div>
						<h6>
							<!--<i @click="shenheGo(item2.id,2)">通过</i>
							<i @click="shenheGo(item2.id,3)">不通过</i>-->
							<i @click="conshowFn(item2.id,2,'通过')">通过</i>
							<i @click="conshowFn(item2.id,3,'驳回')">驳回</i>
							
						</h6>
					</li>
					<p  class="more-btn" :class="{'nodata' : nodata2==true}" @click="next2 && more2() ">{{next2_text}}</p>
					
				</ul>
				
			</div>
			
			
			<!------------------------>
			<div class="baoming-ul"  v-if='userInfo.type!="1"'>
				<div class="h-init">
					<span>已报名&nbsp;&nbsp;({{userInfo.count}})</span>
					<i><span>{{userInfo.count}}/</span>{{userInfo.total}}</i>
				</div>
				
				<ul>
					<li v-for='(item,index) in baominList'>
						<!--{{item}}-->
						<p>
							<img :src="item.headPic" alt="" />
							<span v-if='item.type==1'>{{item.nickName}}</span>
							<span v-if='item.type==2'>{{item.name}}</span>
						</p>
						<div>
							<p v-if='item.type==1'>{{item.userPhone}}</p>
							<p v-if='item.type==2'>{{item.phone}}</p>
							<h4>{{item.className}}</h4>
						</div>
					</li>
				</ul>
				<p  class="more-btn" :class="{'nodata' : nodata1==true}"  @click="next1 && more1() ">{{next1_text}}</p>
			</div>
			
			<!--<myalert :alertProps='alertType' :type='type'></myalert>-->
			<div class="bgg" v-if="maxNum"></div>
			<div v-if='maxNum' class="huifu-div" style="margin-bottom: 2rem;">
				<h2>信息回复</h2>
				<p>当前报名人员已满,请下次再来</p>
			</div>
			<div class="btn-box" v-if='!helpShow'>
				<div v-show='userInfo.type==2||userInfo.type==3||userInfo.type==4||
					userInfo.type==5||userInfo.type==6||userInfo.type==7'
					 :style="{background:TypesBtn_bgcolor}" 
					 class="btn-init" @click='baomin()'>{{TypesBtn}}</div>
					<div class="btn-init" v-show='btnTimeType' style="background: #D7D5D6;">
						{{btnTime}}
					</div>
			</div>
			<div class="Ecs-help" v-if="helpShow">
				<p @click='baomin()' :style="{background:TypesBtn_bgcolor}" >{{TypesBtn}}</p>
				<p @click="helpCoverShow()">其他人退出活动</p>
			</div>
		</div>
		<!--添加报名--fixed-->
		<div class='add-fixed' v-if="userInfo.type==3&&userInfo.type!=5" @click="addFn()">
			<img src="../../../../assets/img/icontext1.png" alt="" />
			<span>添加报名</span>
		</div>
		<!--我要报名-->
		<div class="alert-bg" v-if="mybao">
			<div class="alert-box">
				<h1>添加报名信息</h1>
				<img @click="closeAlert()" src="../../../../assets/img/closebig.png" alt="" />
				<div class="alert-inp">
					<p>
						<span>姓名:</span>
						<input v-model="myname" type="text" :placeholder="errname"/>
					</p>
					<!--<p>
						<span>班级:</span>
						<input v-model="myclass" :placeholder="errclass" type="text" />
					</p>-->
					<p>
						<span>联系电话:</span>
						<input maxlength="11" v-model="mytel" :placeholder="errtel" class="alert-phone" type="text" />
					</p>
					<div class="form-btn" @click="myadd()">确定</div>
				</div>
				
			</div>
		</div>
		<div class="alert-bg" v-if="helpCover">
			<div class="alert-box">
				<h1>退出活动</h1>
				<img @click="closeAlert()" src="../../../../assets/img/closebig.png" alt="" />
				
				<div>
					<ul class="help-list">
					<li v-for="(help,index) in helpList">
						<span>{{help.name}}</span>
						<p>{{help.phone}}</p>
						<div @click="helpEsc(help.id)">退出</div>
					</li>
				</ul>
				</div>
				
			</div>
		</div>
		<div class="alert-bg" v-if='baoYes' @click="coverYes()">
			<div class="baoming-yes">
				<p>{{baoYesStr}}</p>
				请等待审核
			</div>
		</div>
		<div class="alert-bg" v-if='baoEsc'>
			<div class="baoming-no">
				<img src="../../../../assets/img/closebig.png" @click="Esccover()" alt="" />
				<p>你确定要退出活动吗?</p>
				<div class="Esc-btn"  @click="myEsc()">确定</div>
			</div>
		</div>
	      <confirm v-model="conShow"
			title='操作提示'
	      @on-cancel="onCancel"
	      @on-confirm="onConfirm">
	        <p style="text-align:center;">是否确认{{ConfirmStr}}?</p>
	      </confirm>
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import myalert from '../../alert'
	import { Toast, Confirm } from 'vux'
	
	import filter from '@/assets/js/filters'
	export default({
		data(){
			return{
				TypesName_color:'',	//头部状态 样式
				TypesBtn_bgcolor:'',  //报名 按钮 样式
				userInfo:"",      //发起作者 信息+
				TypesBtn:'',  //报名按钮名字
				TypesMan:'', //人数已满
				maxNum:false,
				baominList:[],	//报名记录  返回数据
				shenheList:[],	//待审核记录  返回数据
				toggleNav:1,	//我发起状态  切换nav
				alertType:false,	//弹窗 
				myEscId:'',   //自己退出 需要的记录id
				page1:1,	page2:1,		//当前页1
				pageHelp:1,
				helpShow:false,   //（退出， 帮别人退出）
				helpCover:false,   //帮别人退出 弹窗
				helpList:'',
				next1_text:'',	next2_text:'',	
				next1:true,	next2:true,	//加载更多 状态
				mybao:false,    //我要报名  弹窗
				baoYes:false,   //报名成功 弹窗
				baoEsc:false,  //退出活动 弹窗
				baoYesStr:'',
				myname:'',myclass:'',mytel:'', 
				errname:'',errclass:'',errtel:'', //错误提示
				nodata1:false,  //'暂无数据的样式'
				nodata2:false,
				conShow:false,   //二次提示 
				ConfirmId:'',  //提示 id
				ConfirmState:'',  //提示  通过/驳回的状态 传给提示框
				ConfirmStr:'', //提示  通过/驳回的内容  传给提示框
				btnTime:'',btnTimeType:false
			}
		},
		components:{
			Toast,
			Confirm
		},
		created(){
			this.getUser()
			this.getList1()
			this.getHelp()//帮别人报名列表
			this.getMy() //查看自己报名 列表
		},
		
		mounted(){
			var self=this;
			
		},
		computed:{
			colorFn(val){
				if(val==6){
					
				}
			}
		},
		filters: {
			...filter,
			TypesName(val){
				 if(val==1){
					return '我发起'
				}
				else if(val==2){
					return '审核中'
				}
				else if(val==3){
					return '已参与'
				}
				else if(val==4){
					return '驳回'
				}
				else if(val==5){
					return	'已满'
				}
				else if(val==6){
//					return	'不在报名时间内'
					return '未开始'
				}
				else if(val==7){
					return '未参与'
//					return ''
				}
				else if(val==8){
					return '已过期'
//					return ''
				}
			},
			TypesBtn(val){
				
				if(val ==3||val==4||val==5||val==6||val==7){
					return	'我要报名'
				}else if(val==2){
					return '审核中'
				}
			},
	   },
		methods: {
			back() {
				this.$router.go(-1);
			},
			typeToggle(i){
				var self=this;
				self.toggleNav=i;
			},
			getUser(){
				var self=this;
					var url1=int.activityListInfo+self.$route.params.id;
					var params1={
						
					}
				ajax.get_data(url1, params1, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('发起作者信息',d);
					if(d.code==0){
						self.userInfo=d.data;
						if(d.data.type==2){ 
							self.TypesBtn='审核中'

							self.TypesBtn_bgcolor='#32C4FF'
						}
						else if(d.data.type==3){  //已参与
							self.TypesBtn='退出活动'
							self.TypesBtn_bgcolor='#FE6637'
						}
						else if(d.data.type==5){ //报名人数已满,
							self.TypesBtn_bgcolor='#D7D5D6'
							self.TypesBtn='我要报名'
							self.TypesMan='人数已满'
							
						}
						else if(d.data.type==4){ //报名人数已满,
							self.TypesBtn_bgcolor='#D7D5D6'
							self.TypesBtn='报名失败'
							
						}
						else if(d.data.type==7){ //未参与
							self.TypesBtn='我要报名'
							if(d.data.count==d.data.total){
								self.maxNum=true
								self.TypesName_color='#666'
								self.TypesBtn_bgcolor='#D7D5D6'
							}else{
								self.maxNum=false;
								
								self.TypesBtn_bgcolor='#32C4FF'
							}
						}
						
						else if(d.data.type==6){  //已参与
							self.TypesBtn='活动结束'
							self.TypesBtn_bgcolor='#D7D5D6'
							self.TypesName_color='#666'
						}
						
						var nowT=new Date().getTime()
						if(nowT<d.data.signupStartTime){
							self.btnTime='不在报名时间内';
							self.btnTimeType=true
						}
						
					}
				
	             
	
	          	});
			},
			
			getPage1(){
				var self=this;
          		//查看 详情的 报名记录列表
	          	var url2=int.activityInfoBaoming;
	          	var params2={
					activityId:self.$route.params.id,
					current:self.page1,
					size:10,
					state:2,
					
				} 
	          	ajax.post_data(url2, params2, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('报名记录',d);
					if(d.code==0){
						for(var i = 0; i < d.data.records.length; i++) {
							self.baominList.push(d.data.records[i]);
							}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无数据'
							self.nodata1=true;
						}
						else{
							self.next1=true;
							self.nodata1=false;
							self.next1_text='加载更多'
						}
						if(d.data.current>=d.data.pages){
							self.next1=false;
							self.nodata1=false;
							self.next1_text='没有更多了'
						}
						
					}
	             
	
	          	});
          	},
					
	
			getList1(){
				var self=this;
          		//查看 详情的 报名记录列表
	          	var url2=int.activityInfoBaoming;
	          	var params2={
					activityId:self.$route.params.id,
					current:self.page1,
					size:10,
					state:2,
					
				} 
	          	ajax.post_data(url2, params2, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('报名记录',d);
					if(d.code==0){
						self.baominList=d.data.records;
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无数据'
							self.nodata1=true;
						}
						else{
							self.next1=true;
							self.nodata1=false;
							self.next1_text='加载更多'
						}
						if(d.data.current==d.data.pages){
							self.next1=false;
							self.nodata1=false;
							self.next1_text='没有更多了'
						}
						
					}
	             
	
	          	});
          	},
          	getPage2(){
				var self=this;
          		//查看 详情的 未审核记录列表
	          	var url2=int.activityInfoBaoming;
	          	var params2={
					activityId:self.$route.params.id,
					current:self.page2,
					size:10,
					state:1,
					
				} 
	          	ajax.post_data(url2, params2, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('待审核',d);
					if(d.code==0){
						for(var i = 0; i < d.data.records.length; i++) {
							self.shenheList.push(d.data.records[i]);
							}
						if(d.data.total==0){
							self.next2=false;
							self.next2_text='暂无数据'
							self.nodata2=true;
						}
						else{
							self.next2=true;
							self.nodata2=false;
							self.next2_text='加载更多'
						}
						if(d.data.current>=d.data.pages){
							self.next2=false;
							self.nodata2=false;
							self.next2_text='没有更多了'
						}
						
					}
				
	             
	
	          	});
          	},
          	getList2(){
				var self=this;
          		//查看 详情的 未审核记录列表
	          	var url2=int.activityInfoBaoming;
	          	var params2={
					activityId:self.$route.params.id,
					current:self.page2,
					size:10,
					state:1,
					
				} 
	          	ajax.post_data(url2, params2, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('待审核',d);
					if(d.code==0){
						self.shenheList=d.data.records;
							
						if(d.data.total==0){
							self.next2=false;
							self.next2_text='暂无数据'
							self.nodata2=true;
						}
						else{
							self.next2=true;
							self.nodata2=false;
							self.next2_text='加载更多'
						}
						if(d.data.current==d.data.pages){
							self.next2=false;
							self.nodata2=false;
							self.next2_text='没有更多了'
						}
						
					}
				
	             
	
	          	});
          	},
          	getMy(){
				var self=this;
          		//查看 详情的 报名记录列表
	          	var url2=int.activityInfoBaoming;
	          	var params2={
					activityId:self.$route.params.id,
					current:self.page1,
					size:10,
					state:2,
					type:1
					
				} 
	          	ajax.post_data(url2, params2, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('自己报名记录',d);
					if(d.code==0){
						if(d.data.records.length){
							self.myEscId=d.data.records[0].id
						}
						
					}
	             
	
	          	});
          	},
          	getHelp(){
				var self=this;
				var mainUrl = int.activityInfoBaoming;
	         	 var params = {
	         	 	activityId:self.$route.params.id,
	           		current: self.pageHelp, //当前页
					size: 99999,  //每页展示 几条
					state: 2, //状态
					type: 2
	          	};
	          ajax.post_data(mainUrl, params, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
				if(d.code==0){
					console.log('帮别人报名列表',d);
					if(d.data.total>0){//帮别人报过名
						self.helpShow=true;
					}else{
						self.helpShow=false;
						self.helpCover=false
					}
					
					self.helpList=d.data.records;
				
					
				}
	            

	          });
			},
			more1(){
				//加载更多
				var vm = this;
				vm.page1++;
				vm.getPage1();

			},
			more2(){
				//加载更多
				var vm = this;
				vm.page2++;
				vm.getPage2();

			},
			addFn(){
				//打开 添加报名窗口
				var self=this;
				self.mybao=true
			},
			closeAlert(){
				//关闭弹窗
				var self=this;
				self.mybao=false
				self.helpCover=false
			},
			coverYes(){
				//关闭   报名成功弹窗
				var self=this;
				self.baoYes=false;
				self.baoYesStr='';
			},
			Esccover(){
				//关闭  退出活动弹窗
				var self=this;
				self.baoEsc=false
				
			},
			helpCoverShow(){
				//其他人退出活动 弹窗
				var self=this;
				self.helpCover=true
			},
			baomin(){
				//自己报名
				var self=this;
				var loginName=localStorage.getItem('loginName');
				var sid=localStorage.getItem('sid');
				if(self.maxNum==false){
					if(self.userInfo.type==7){//未参与  点击就是报名
//					self.mybao=true //开启报名弹窗
					var url=int.activityInfoBao;
					var params={
						activityId:self.$route.params.id,
						nickName:loginName,
						sid:sid,
						type:1,
					} 
					ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
			            console.log('报名成功了',d);
						if(d.code==0){
							self.baoYesStr='当前用户已报名'
							self.baoYes=true;
							self.getUser();
							
						}
		          	});
					}else if(self.userInfo.type==3){//退出活动
						self.baoEsc=true;
					}
				}
				
			},
			myEsc(){
				//自己退出活动
				 var self=this;
			     //	调ajax  通过传2, 驳回传3
					var url=int.activityCaozuo;
					var params={
						state:4,
						id:self.myEscId
					}
					ajax.put_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
			            console.log('操作',d);
			            if(d.code==0){
			            	self.$vux.toast.show({
							type: 'text',
							text: '操作成功',
							position: 'bottom'
							})
			            	self.baoEsc=false;
			            	self.getUser();
			            	self.getList1();
							

			            }
		          	});
			},
			helpEsc(id){
				//帮别人 退出活动
				 var self=this;
			     //	调ajax  通过传2, 驳回传3
					var url=int.activityCaozuo;
					var params={
						state:4,
						id:id
					}
					ajax.put_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
			            console.log('操作',d);
			            if(d.code==0){
			            	self.$vux.toast.show({
							type: 'text',
							text: '操作成功',
							position: 'bottom'
							})
			            	self.getHelp();
			            	self.getList1();
			            	self.getUser();
			            	
			            }
		          	});
			},
			myadd(){
				//添加报名
				var self=this;
				var url2=int.activityInfoBao;
				var sid=localStorage.getItem('sid');
				if(!self.myname){
					self.errname='请输入姓名'
				}
//						else if(!self.myclass){
//							self.errclass='请输入班级'
//						}
				else if(!self.mytel){
					self.errtel='请输入联系电话'
				}
				else{
					var params={
						activityId:self.$route.params.id,
						name:self.myname,
						phone:self.mytel,
						type:2,
						sid:sid
					} 
					ajax.post_data(url2, params, function(d) {
						//        	_this.$root.eventHub.$emit('Vloading',false)
						if(d.code==0){
							self.mybao=false;
			            	setTimeout(function(){
			            		self.baoYes=true;
			            		self.baoYesStr='添加报名信息成功'
			            		self.myname='';
			            		self.mytel='';
			            		self.getUser();
			            	},500)
			            	
			            	
			            		
			            	
			            	
			            }
          			});
				}
			},
			conshowFn(id,state,str){
//				审核报名再次确认提示框
				this.conShow=true
				this.ConfirmId=id;
				this.ConfirmState=state;
				this.ConfirmStr=str;

			},

		 	onCancel () {
		      
		    },
		    onConfirm () {
		     var self=this;
		     console.log(self.ConfirmId+'////'+self.ConfirmState+'////'+self.ConfirmStr)
		     //	调ajax  通过传2, 驳回传3
				var url=int.activityCaozuo;
				var params={
					state:self.ConfirmState,
					id:self.ConfirmId
				}
				ajax.put_data(url, params, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('操作',d);
		            if(d.code==0){
		            	self.$vux.toast.show({
						type: 'text',
						text: '操作成功',
						position: 'bottom'
						})
		            	self.getUser();
		            	self.getList1();
		            	self.getList2();
		            }
	          	});
		    },
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
		border: none;
	}
	.activitysInfo{
		/*background: #f4f4f4;*/
	}
	.bgg{
		height: 0.3rem;
	}
	.activi-li{
		padding:0 0.75rem;
		margin-bottom: 0.3rem;
		background: #fff;
		overflow: hidden;
		>.faqi-img{
			float: left;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				width: 2rem;
				border-radius: 50%;
				float: left;
				margin-right: 0.5rem;
			}
			>div{
				float: left;
				>p{
					color: #000;
					font-size: 0.75rem;
				}
				>h6{
					color: #B4B4B4;
					font-size: 0.6rem;
				}
			}
		}
		>p.activi-type{
			padding: 0.5rem 0;
			float: right;
			color: #25BEFF;
			border: none;
		}
		>p{
			border-bottom: 1px solid #F2F2F2;
			padding: 0.5rem 0;
			>span{
				color: #999;
			}
			>em{
				color: #E06E0C;
			}
		}
		>p:last-child{
			border-bottom: none;
		}
	}
	.baoming-ul{
		padding:0 0.75rem;
		background: #fff;
		margin-bottom: 3rem;
		>div{
			border-bottom: 1px solid #F2F2F2;
			overflow: hidden;
			>h1{
			padding: 0.5rem 0 0;
			float: left;
			margin-right: 1.5rem;
			color: #999;
			span{
				
				
			}
			em{
			
				
			}
		}
		>h1.baoming-active{
			color: #3991F4;
			em{
			
				
				display: block;
				height: 0.15rem;
				border-radius: 1rem;
				width: 1.5rem;
				margin: 0.3rem auto 0;
				background: #3991F4;
			}
		}
		}
		
		>ul{
			clear: both;
			/*min-height: 5rem;*/
		}
		>ul:first-child{
			padding-top: 50px;
		}
		ul>li{
			overflow: hidden;
			position: relative;
			padding: 0.5rem;
			>p{
				float: left;
				text-align: center;
				width: 3rem;
				img{
					width: 2rem;
					border-radius: 50%;
				}
				>span{
					display: block;
					color: #999;
				}
			}
			>div{
				width: 60%;
				float: left;
				height: 3.1rem;
				margin-left: 10%;
				>p{
					line-height: 1.55rem;
				}
				>h4{
					line-height: 1.55rem;
				}
				
			}
			>h6{
					position: absolute;
					top: 50%;
					right: 0%;
					-webkit-transform: translateY(-50%);
					-moz-transform: translateY(-50%);
					-ms-transform: translateY(-50%);
					-o-transform: translateY(-50%);
					transform: translateY(-50%);
					i{
						display: inline-block;
						width: 3rem;
						height:1.4rem;
						line-height: 1.4rem;
						color: #fff;
						text-align: center;
						background: #32C4FF;
						margin-left: 0.5rem;
						border-radius: 1rem;
					}
					i:last-child{
						background: #FE6637;
					}
				}
		}
		
	}
	.baoming-box{

	}
	.btn-box{
		
		background: #fff;
		/*padding: 2.5rem 0 1.5rem;*/
		.btn-init{
			position: fixed;
			bottom: 0.5rem;
			left: 50%;
			-webkit-transform: translateX(-50%);
			-moz-transform: translateX(-50%);
			-ms-transform: translateX(-50%);
			-o-transform: translateX(-50%);
			transform: translateX(-50%);
			background: #32C4FF;
			border-radius: 1rem;
			color: #fff;
			line-height: 2rem;
			width: 60%;
			margin: 0 auto;
		}
	
	}
	.h-init{
		overflow: hidden;
		    padding: 0.5rem 0 ;
		>span{
			float: left;
		}
		i{
			float: right;
			span{
				color: #EA2722;
			}
		}
	}
	.huifu-div{
		margin-top: 0.3rem;
		
		background: #fff;
		h2{
			padding: 0.5rem 0.75rem;
			border-bottom: 1px solid #F7F7F7;
		}
		p{
			font-size: 0.75rem;
			padding: 0.3rem 1.5rem 2rem;
		}
	}
	.more-btn{
		color: #666;
		text-align: center;
		/*border: 0.05rem solid;*/
		width: 5rem;
		height: 1.5rem;line-height: 1.5rem;
		margin: 0 auto;
	
	}
	.add-fixed{
		position: fixed;
		right: 0;
		bottom: 5rem;
		border-radius:1rem 0 0 1rem;
		background: #32C4FF;
		line-height: 1.4rem;
		color: #fff;
		padding: 0 0.2rem;
		font-size: 0.6rem;
		>img{
			width: 0.7rem;
			margin: 0 0.2rem;
		}
	}
	.nodata{
		margin-top: 2rem;
	}
	/*弹窗背景*/
	.alert-bg{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.5);
	}
	.alert-box{
		width: 13rem;
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%,-50%);
		-moz-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		border-radius: 0.75rem;
		
		h1{
			color: #fff;
			padding-top: 0.5rem;
			height: 4rem;
			text-align: center;
			background: url(../../../../assets/img/activity_img.png);
			background-size: 100% 100%;
		}
		>img{
			width: 1.2rem;
			height: 1.2rem;
			position: absolute;
			right: -0.6rem;
			top: -0.6rem;
		}
		.alert-inp{
			background: #fff;
			padding:0.2rem  0.5rem;
			border-radius: 0 0 0.5rem 0.5rem;
			p{
				overflow: hidden;
				border-bottom: 1px solid #F9F9F9;
				padding: 0.3rem 0;
				margin: 0.4rem 0;
				span{
					float: left;
					line-height: 1.5rem;
				}
				input{
					float: left;
					width: 80%;
					line-height: 1.5rem;
					border: none;
				}
				.alert-phone{
					width: 70%;
				}
			}
			.form-btn{
				text-align: center;
				background: #32C4FF;
				border-radius: 1rem;
				color: #fff;
				width: 8rem;
				margin: 0.5rem auto;
				height: 1.5rem;
				line-height: 1.5rem;
			}
		}
		>div{
			overflow-x: hidden;
			overflow-y: scroll;
			border-radius:0 0 0.75rem 0.75rem;
			
		}
		ul.help-list{
			width: 13.5rem;
			overflow-x: hidden;
			background: #fff;
			/*min-height: 10rem;*/
			height: 10rem;
			overflow-y: scroll;
			
			>li{
				padding-right: 0.5rem;
				display: flex;
				flex-flow: wrap;
				justify-content:space-around;
				line-height: 1.2rem;
				margin: 1rem 0;
				>div{
					background: #FE6637;
					color: #fff;
					line-height: 1.2rem;
					padding:0 1rem;
					border-radius: 1rem;
				}
			}
		}
	}
	.baoming-yes{
		position: fixed;
		top: 50%;
		left: 50%;
		width: 10rem;
		height: 10rem;
		text-align: center;
		/*color: #fff;*/
		padding-top: 5.8rem;
		-webkit-transform: translate(-50%,-50%);
		-moz-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		background: url(../../../../assets/img/baominYes.png);
		background-size: 100% 100%;
		>img{
			width: 1.2rem;
			height: 1.2rem;
			position: absolute;
			right: -0.6rem;
			top: 1.4rem;
		}
		
	}
	.baoming-no{
		position: fixed;
		top: 50%;
		left: 50%;
		width: 10rem;
		height: 10rem;
		text-align: center;
		/*color: #fff;*/
		padding-top: 6rem;
		-webkit-transform: translate(-50%,-50%);
		-moz-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		background: url(../../../../assets/img/escNo.png);
		background-size: 100% 100%;
		>img{
			width: 1.2rem;
			height: 1.2rem;
			position: absolute;
			right: -0.6rem;
			top: 1.4rem;
		}
		
	}
	.Esc-btn{
		background: #32C4FF;
		color: #fff;
		margin:0.5rem 2.5rem;
		line-height: 1.5rem;
		border-radius: 1rem;
		
	}
	.Ecs-help{
		position: fixed;
		>p{
			position: fixed;
		    bottom: 0.5rem;
		    border-radius: 1rem;
		    color: #fff;
		    line-height: 2rem;
		    width: 45%;
		    text-align: center;
		    margin: 0 0.75rem;
		}
		>p:first-child{
			left: 0;
		}
		>p:last-child{
			right: 0;
			background: #fba825;
		}
	}
</style>