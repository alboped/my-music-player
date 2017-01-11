/**
 * 播放列表数据操作
 */

import Api from 'components/common/data-api';

export default {
	state: {
		
	},
	mutations: {
		
	},
	actions: {
		getSongListIds({ dispatch }, id) {
			Api._api(`songmusiclist?id=${id}`).then(body => {
				dispatch('changeMusicList', body.join(','));
			});
		},
		changeMusicList({ commit }, ids) { 
			Api._api(`songlink?ids=${ids}`, `songinfo?ids=${ids}`).then((songLink, songInfo) => {
				for(let i of songLink.data.songList.keys()){
					songLink.data.songList[i].songInfo = songInfo.data.songList[i];
				}
				commit('initPlayerList', songLink.data.songList);
				commit('playerStart', songLink.data.songList[0]);
			});
		}
	}
}