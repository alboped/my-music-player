/**
 * 首页初始化数据
 */

import Api from 'components/common/data-api';

export default {
	state: {
		mainPage: {
			carousel: [],
			newMusicList: [],
			songlist: [],
			remvlist: []
		}
	},
	mutations: {
		
	},
	actions: {
		getMainPageData({ state }) {
			Api._api('mainPageData').then(body => {
				({ 
					carousel: state.mainPage.carousel, 
					newMusic: state.mainPage.newMusicList 
				} = body);
			});
		},
		getMainSongList({ state }) {
			Api._api('songlist?limit=10').then(songlist => {
				state.mainPage.songlist = songlist;
			});
		},
		getReMvList({ state }) {
			Api._api('remvlist').then(body => {
				state.mainPage.remvlist = body;
			});
		}
	}
}