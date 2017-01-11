import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import store from './store/store';

import filters from './filters/number-filter';

import Main from './app.vue';
import MusicPage from 'components/music-page/main';
import SettingPage from 'components/setting-page/main';
import MusicMain from 'components/music-page/music-main/main';
import RadioPage from 'components/music-page/radio';
import MySongList from 'components/music-page/my-song-list';

import LocalMusic from 'components/my-music/local-music';
import DownloadManage from 'components/my-music/download-manage';
import MySinger from 'components/my-music/my-singer';

import Recommend from 'components/music-page/music-main/recommend/main';
import SongMenu from 'components/music-page/music-main/song-menu';
import AnchorRadio from 'components/music-page/music-main/anchor-radio';
import Ranking from 'components/music-page/music-main/ranking';
import Singer from 'components/music-page/music-main/singer';
import NewMusic from 'components/music-page/music-main/new-music';

require('./win');
require('sass/main.scss');

Vue.use(VueRouter);

/* 推荐页面标签路由 */
const musicMainTabRouter = [
	{
		path: '/',
		redirect: 'recommend'
	}, {
		path: 'recommend',
		component: Recommend
	}, {
		path: 'song-menu',
		component: SongMenu
	}, {
		path: 'anchor-radio',
		component: AnchorRadio
	}, {
		path: 'ranking',
		component: Ranking
	}, {
		path: 'singer',
		component: Singer
	}, {
		path: 'new-music',
		component: NewMusic
	}
]

/* 音乐首页路由 */
const musicPageRouter = [
	{
		path: '/',
		redirect: 'music-main'
	}, {
		path: 'music-main',
		component: MusicMain,
		children: musicMainTabRouter
	}, {
		path: 'radio',
		component: RadioPage
	}, {
		path: 'song-list/:id',
		component: MySongList
	}, {
		path: 'local-music',
		component: LocalMusic
	}, {
		path: 'download-manage',
		component: DownloadManage
	}, {
		path: 'my-singer',
		component: MySinger
	}
];

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: '/',
					redirect: 'index',
					component: MusicPage,
					children: musicPageRouter
				}, {
					path: 'index',
					component: MusicPage,
					children: musicPageRouter
				}, {
					path: 'setting',
					component: SettingPage
				}
			]
		}
	]
});

/**
 * 遍历过滤器对象，设置全局过滤器
 */
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

new Vue({
	router,
	store
}).$mount('#app');