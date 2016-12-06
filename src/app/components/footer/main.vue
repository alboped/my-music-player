<template>
	<div class="footer">
		<div class="player-btn-bar">
			<a href="javascript:;" class="player-prev">
				<icon icon-href="zhutishangyiqu" class="theme-fcolor"></icon>
			</a>
			<a href="javascript:;" class="player-start">
				<icon :icon-href="playState" class="theme-fcolor"></icon>
			</a>
			<a href="javascript:;" class="player-next">
				<icon icon-href="zhutixiayiqu" class="theme-fcolor"></icon>
			</a>
		</div>
		<div class="music-plan-bar">
			<span class="player-now-time"></span>
			<div class="plan-bar">
				<audio :src="music.showLink" autoplay="autoplay" id="music-player">
					<source :src="music.showLink" type="audio/mpeg">
				</audio>
			</div>
			<span class="player-all-time"></span>
		</div>
		<player-list :music-list="musicList"></player-list>
	</div>
</template>

<script>
	import $ from 'jquery';
	import icon from '../common/icon.vue';
	import EventVue from '../common/events.js';
	import player from './player.vue';
	import playerList from './player-list.vue';

	export default {
		data() {
			return {
				title: 'footer',
				playState: 'bofang1',
				music: {},
				musicList: [],
				audio: new Audio()
			}
		},
		methods: {
			changeMusicList(musicData) {
				this.musicList = musicData.data.songList;
				this.playerStart(this.musicList[0]);
			},
			playerStart(music) {
				this.music = music;
			}
		},
		components: {
			icon,
			player,
			playerList
		},
		created() {
			EventVue.$on('musicplayer', this.changeMusicList);
		}
	}
</script>