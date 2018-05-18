import Vue from 'vue'
import Router from 'vue-router'
/* 公共组件 */
import footBar from '@/components/common/footBar'


/* template */
import index1 from '@/components/template/index1/index1'		//心灵阅读
import index2 from '@/components/template/index2/index2'		//咨询预约
import index3 from '@/components/template/index3/index3'		//互动
import index4 from '@/components/template/index4/index4'		//我的


/*index1心灵阅读里面的详情*/
import yueduInfo from '@/components/template/index1/yueduInfo'		//心灵阅读 > 详情


/*index2 里面的教师信息*/
import teacherInfo from '@/components/template/index2/teacherInfo'		//咨询预约 > 教师信息
import yuyueJilu from '@/components/template/index2/yuyueJilu'		//咨询预约 > 预约记录

/*index3 互动*/
import speakList from '@/components/template/index3/speak/speakList'		//互动 > 留言板list
import speakWrite from '@/components/template/index3/speak/speakWrite'		//互动 > 留言板list >发表话题
import speakInfo from '@/components/template/index3/speak/speakInfo'		//互动 > 留言板list >话题详情

import mp3List from '@/components/template/index3/mp3/mp3List'		//互动 > 点歌台list
import mp3Choose from '@/components/template/index3/mp3/mp3Choose' //互动 > 点歌台list >我要点歌

import booksList from '@/components/template/index3/books/booksList'		//互动 > 图书漂流list
import booksWrite from '@/components/template/index3/books/booksWrite'		//互动 > 图书漂流list >发起漂流

import activitysList from '@/components/template/index3/activitys/activitysList'		//互动 > 组团活动list
import activitysNav1 from '@/components/template/index3/activitys/activitysNav1'		//互动 > 组团活动list 所有活动
import activitysNav2 from '@/components/template/index3/activitys/activitysNav2'		//互动 > 组团活动list 我的参与
import activitysInfo from '@/components/template/index3/activitys/activitysInfo'		//互动 > 组团活动list 活动详情
import activitysWrite from '@/components/template/index3/activitys/activitysWrite'		//互动 > 组团活动list 发起组团

import gamesList from '@/components/template/index3/games/gamesList'		//互动 > 游戏擂台list


/*index4 我的*/
import setting from '@/components/template/index4/setting/setting'		//我的 > 设置
import changeMima from '@/components/template/index4/setting/changeMima'		//我的  >设置 >修改密码

import ziliao from '@/components/template/index4/ziliao/ziliao'		//我的  >详细资料 

import zixunList from '@/components/template/index4/zixun/zixunList'		//我的  >我的咨询 

import shoucang from '@/components/template/index4/shoucang/shoucangList'		//我的  >我的收藏
Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
    /* 公共的footBar */
   	{
   		path:'/',
   		name:	'footBar',
   		component: footBar,
   		redirect: '/home/index1',
   		children:[
   			{
   				path:'/home/index1',						
		   		name:	'index1',			//心灵阅读
		   		component: index1,
   			},
   			{
   				path:'/home/index2',
		   		name:	'index2',			//咨询预约
		   		component: index2,
   			},
   			{
   				path:'/home/index3',		
		   		name:	'index3',			//互动
		   		component: index3,
   			},
   			{
   				path:'/home/index4',
		   		name:	'index4',			//我的
		   		component: index4,
   			}
   		]
   	},
   	{
				path:'/index1/yueduInfo/:id',
	   		name:	'yueduInfo',			// 心灵阅读 > 阅读详情
	   		component: yueduInfo,
		},
		{
				path:'/index2/teacherInfo',
	   		name:	'teacherInfo',			// index2 > 教师信息
	   		component: teacherInfo,
		},
		
		{
				path:'/index2/yuyueJilu',
	   		name:	'yuyueJilu',			// index2 > 预约记录
	   		component: yuyueJilu,
		},
		
		
		{
				path:'/index3/speakList',
	   		name:	'speakList',			// 互动 > 留言板list
	   		component: speakList,
		},
		{
				path:'/index3/speakWrite',
	   		name:	'speakWrite',			// 互动 > 留言板list> 发表话题
	   		component: speakWrite,
		},
		{
				path:'/index3/speakInfo/:id',
	   		name:	'speakInfo',			// 互动 > 留言板list> 话题详情
	   		component: speakInfo,
		},
		{
				path:'/index3/mp3List',
	   		name:	'mp3List',			// 互动 > 点歌台list
	   		component: mp3List,
		},
		{
				path:'/index3/mp3Choose',
	   		name:	'mp3Choose',			// 互动 > 点歌台list >我要点歌
	   		component: mp3Choose,
		},
		
		
		
		{
				path:'/index3/booksList',
	   		name:	'booksList',			// 互动 > 图书漂流list
	   		component: booksList,
		},
		{
				path:'/index3/booksWrite',
	   		name:	'booksWrite',			// 互动 > 图书漂流list > 发起漂流
	   		component: booksWrite,
		},
		
		
		
		{
				path:'/index3/activitysList',
	   		name:	'activitysList',			// 互动 > 组团活动list
	   		component: activitysList,
	   		children:[
	   			{
							path:'/index3/activitysList/',
				   		name:	'activitysNav1',			// 互动 > 组团活动list 所有活动
				   		component: activitysNav1,
					},
					{
							path:'/index3/activitysList/activitysNav2',
				   		name:	'activitysNav2',			// 互动 > 组团活动list 我的参与
				   		component: activitysNav2,
					}
	   		]
		},
		{
				path:'/activitysList/activitysInfo/:id',
	   		name:	'activitysInfo',			// 互动 > 组团活动list 活动详情
	   		component: activitysInfo,
		},
		{
				path:'/activitysList/activitysWrite',
	   		name:	'activitysWrite',			// 互动 > 组团活动list 发起组团
	   		component: activitysWrite,
		},
		
		{
				path:'/index3/gamesList',
	   		name:	'gamesList',			// 互动 > 游戏擂台list
	   		component: gamesList,
		},
		
		
		
		{
				path:'/index4/setting',
	   		name:	'setting',			//我的 > 设置
	   		component: setting,
		},
		{
				path:'/index4/changeMima',
	   		name:	'changeMima',			//我的  >设置 >修改密码
	   		component: changeMima,
		},
		{
				path:'/index4/ziliao',
	   		name:	'ziliao',			///我的  >详细资料 
	   		component: ziliao,
		},
		{
				path:'/index4/zixunList',
	   		name:	'zixunList',			///我的  >我的咨询 
	   		component: zixunList,
		},
		{
				path:'/index4/shoucang',
	   		name:	'shoucang',			///我的  >我的收藏 
	   		component: shoucang,
		}
  ]
})
