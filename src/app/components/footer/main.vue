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
			<audio :src="song.showLink" autoplay="autoplay" id="music-player">
				<source :src="song.showLink" type="audio/mpeg">
			</audio>
			<div class="cur-time">
				{{ cur_time }}
			</div>
			<div class="song-progress">
				<div class="progress-bar theme-bg left" v-bind:style="{ width: songProgress + '%' }"></div>
				<a href="javascript:;" class="progress-corner theme-fcolor left"></a>
			</div>
			<div class="total-time">
				{{ total_time }}
			</div>
			<div class="song-control">
				<a href="javascript:;" class="volume-toggle">
					<icon icon-href="yinliangzhong"></icon>
				</a>
				<div class="volume-progress">
					<div class="volume-progress-val theme-bg left" 
						v-bind:style="{ width: volumeProgress + '%' }">
					</div>
					<a href="javascript:;" class="progress-corner theme-fcolor left"></a>
				</div>
				<a href="javascript:;" class="player-type-toggle" @click="playerTypeToggle">
					<icon :icon-href="playerType"></icon>
				</a>
				<a href="javascript:;" class="lyric-open">词</a>
			</div>
		</div>
		<player-list :music-list="musicList"></player-list>
	</div>
</template>

<script>
	import $ from 'jquery';
	import icon from 'components/common/icon';
	import player from './player';
	import playerList from './player-list';

	const playerTypeList = ['circulation', 
		'iconfontdanquxunhuan2eps', 
		'suijibofangzhongzuo', 
		'ttpodicon'
	];

	export default {
		data() {
			return {
				title: 'footer',
				playState: 'bofang1',
				music: {},
				musicList: [],
				songProgress: 50,
				volumeProgress: 30,
				playerType_index: 0,
				cur_time: '00:00',
				total_time: '00:00'
			}
		},
		computed: {
			song() { // 当前播放音乐
				return this.$store.state.song;
			},
			playerType() { // 播放模式
				return playerTypeList[this.playerType_index];
			}
		},
		methods: {
			/**
			 * 切换播放模式
			 */
			playerTypeToggle() {
				this.playerType_index >= playerTypeList.length - 1 
				? this.playerType_index = 0 
				: this.playerType_index += 1;
			}
		},
		components: {
			icon,
			player,
			playerList
		}
	}
</script>