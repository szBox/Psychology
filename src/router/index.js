import Vue from 'vue'
import Router from 'vue-router'
/* 公共组件 */
import footBar from '@/components/common/footBar'
import login from '@/components/common/login'
import forget from '@/components/common/mimaForget'
import chat from '@/components/common/chat' //聊天 (公共的)
import myalert from '@/components/common/alert' //弹窗 (公共的)
import indexA1 from '@/components/common/index1/index1'		//心灵阅读 (公共的)
import yueduInfo from '@/components/common/index1/yueduInfo'		//心灵阅读 > 详情 (公共的)
import newsInfo from '@/components/common/newsInfo'		//弹幕 > 详情 (公共的)
import index2 from '@/components/common/index2/index2'		//咨询预约  (老师和学生 通用的)
import index3 from '@/components/common/index3/index3'		//互动   (公共的)
import index4 from '@/components/common/index4/index4'		//我的    (管理员-老师 公共的)
import setting from '@/components/common/index4/setting/setting'		//我的 > 设置 (公共的)
import changeMima from '@/components/common/index4/setting/changeMima'		//我的  >设置 >修改密码 (公共的)
import ziliao from '@/components/common/index4/ziliao/ziliao'		//我的  >详细资料  (公共的)

/*index3 互动  (公共的)*/
import speakList from '@/components/common/index3/speak/speakList'		//互动 > 留言板list
import speakListA from '@/components/student/index3/speak/speakList'		//互动 > 留言板list  (学生的)
import speakWrite from '@/components/common/index3/speak/speakWrite'		//互动 > 留言板list >发表话题
import speakInfo from '@/components/common/index3/speak/speakInfo'		//互动 > 留言板list >话题详情

import mp3List from '@/components/common/index3/mp3/mp3List'		//互动 > 点歌台list
import mp3Choose from '@/components/common/index3/mp3/mp3Choose' //互动 > 点歌台list >我要点歌

import booksList from '@/components/common/index3/books/booksList'		//互动 > 图书漂流list
import booksWrite from '@/components/common/index3/books/booksWrite'		//互动 > 图书漂流list >发起漂流

import activitysList from '@/components/common/index3/activitys/activitysList'		//互动 > 组团活动list
import activitysNav1 from '@/components/common/index3/activitys/activitysNav1'		//互动 > 组团活动list 所有活动
import activitysNav2 from '@/components/common/index3/activitys/activitysNav2'		//互动 > 组团活动list 我的参与
import activitysInfo from '@/components/common/index3/activitys/activitysInfo'		//互动 > 组团活动list 活动详情  发起的
import activitysInfo2 from '@/components/common/index3/activitys/activitysInfo2'		//互动 > 组团活动list 活动详情  参与的
import activitysInfo3 from '@/components/common/index3/activitys/activitysInfo3'		//互动 > 组团活动list 活动详情   还没报名的
import activitysWrite from '@/components/common/index3/activitys/activitysWrite'		//互动 > 组团活动list 发起组团

import gamesList from '@/components/common/index3/games/gamesList'		//互动 > 游戏擂台list

import shenhe from '@/components/common/index4/shenhe/shenhe'		//我的> 我的审核
import shenheNav1 from '@/components/common/index4/shenhe/shenheNav1'		//我的> 我的审核 话题审核
import shenheNav2 from '@/components/common/index4/shenhe/shenheNav2'		//我的> 我的审核 组团审核
import shoucang from '@/components/common/index4/shoucang/shoucangList'		//我的  >我的收藏
/* template */

import indexA2 from '@/components/student/index2/index2'		//咨询预约

import indexA4 from '@/components/student/index4/index4'		//我的


import indexB2 from '@/components/teacher/index2/index2'		//咨询预约



//学生端
/*index1心灵阅读里面的详情*/
///




/*index2 里面的教师信息*/
import teacherInfo from '@/components/student/index2/teacherInfo'		//咨询预约 > 教师信息
import yuyueJilu from '@/components/student/index2/yuyueJilu'		//咨询预约 > 预约记录




/*index4 我的*/




import zixunList from '@/components/student/index4/zixun/zixunList'		//我的  >我的咨询 





//教师端
//indexB2
import yuyueName from '@/components/teacher/index2/yuyueName'		//咨询预约 > 预约名单
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
    	path: '/chat',
      name: 'chat',
      component: chat
    },
     {
    	path: '/alert',
      name: 'myalert',
      component: myalert
    },
    {
			path:'/newsInfo/:id',
   		name:	'newsInfo',			// 弹幕 > 详情
   		component: newsInfo,
		},
    /* 公共的footBar */
   	{
   		path:'/home',
   		name:	'footBar',
   		component: footBar,
   		redirect: '/home/index1',
   		children:[
   			{
   				path:'/index1',						
		   		name:	'indexA1',			//心灵阅读 (公共的)
		   		component: indexA1,
		   		meta: { keepAlive: true },
   			},
   			{
   				path:'/index2', 
		   		name:	'index2',			//咨询预约 (老师  学生 通用的)
		   		component: index2,
   			},
   			{
   				path:'/index3',		
		   		name:	'index3',			//互动  (公共的)
		   		component: index3,
   			},
   			{
   				path:'/index4',
		   		name:	'index4',			//我的  (管理员-教师 公共的)
		   		component: index4,
   			},
   			{
   				path:'/student/index4',
		   		name:	'indexA4',			//我的
		   		component: indexA4,
   			},
   		
   			
   			
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
	   		name:	'yuyueJilu',			// index2 > 预约记录    (学生端)
	   		component: yuyueJilu,
		},
		{
				path:'/index2/yuyueName',
	   		name:	'yuyueName',			// index2 > 预约名单   (教师端)
	   		component: yuyueName,
		},
		
		{
				path:'/index3/speakList',
	   		name:	'speakList',			// 互动 > 留言板list
	   		component: speakList,
		},
		{
				path:'/index3/speakListA',
	   		name:	'speakListA',			// 互动 > 留言板list (学生的)
	   		component: speakListA,
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
				path:'/activitysList/activitysInfo2/:id',
	   		name:	'activitysInfo2',			// 互动 > 组团活动list 活动详情
	   		component: activitysInfo2,
		},
		{
				path:'/activitysList/activitysInfo3/:id',
	   		name:	'activitysInfo3',			// 互动 > 组团活动list 活动详情
	   		component: activitysInfo3,
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
		},
		{
				path:'/index4/shenhe',
	   		name:	'shenhe',			///我的  >我的审核 
	   		component: shenhe,
	   		children:[
	   			{
							path:'/index4/shenhe/',
				   		name:	'shenheNav1',			// 我的 > 我的审核 话题审核
				   		component: shenheNav1,
					},
					{
							path:'/index4/shenhe/shenheNav2',
				   		name:	'shenheNav2',			// 我的 > 我的审核 组团审核
				   		component: shenheNav2,
					}
	   		]
		}
  ],
   scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
