import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import DataApi from './components/common/data-api';

import filters from './filters/number-filter';

import Main from './app.vue';
import MusicPage from './components/music-page/main.vue';
import SettingPage from './components/setting-page/main.vue';
import MusicMain from './components/music-page/music-main/main.vue';
import RadioPage from './components/music-page/radio.vue';
import MySongList from './components/music-page/my-song-list.vue';

import LocalMusic from './components/my-music/local-music.vue';
import DownloadManage from './components/my-music/download-manage.vue';
import MySinger from './components/my-music/my-singer.vue';

import Recommend from './components/music-page/music-main/recommend/main.vue';
import SongMenu from './components/music-page/music-main/song-menu.vue';
import AnchorRadio from './components/music-page/music-main/anchor-radio.vue';
import Ranking from './components/music-page/music-main/ranking.vue';
import Singer from './components/music-page/music-main/singer.vue';
import NewMusic from './components/music-page/music-main/new-music.vue';

require('./win');
require('../sass/main.scss');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(DataApi);

/* 音乐首页标签路由 */
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
	url: 'http://24234'
}).$mount('#app');