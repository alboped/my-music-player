<template>
	<div class="music-info-bar">
		<div class="song-pic-box">
			<img class="song-pic-small" 
				:src="song.songInfo && song.songInfo.songPicSmall || pic_default" 
				:onerror="this.src=pic_default" alt="">
			<div class="song-pic-icon">
				<icon icon-href="quanping"></icon>
			</div>
		</div>
		<div class="song-bar-info">
			<p class="music-bar-song-name">
				<span class="song-name-text text-hidden" :title="song.songName">{{ song.songName }}</span>
				<a href="javascript:;" @click="addLike" v-show="song.songName">
					<icon icon-href="ego-heart" class="right music-bar-like-icon"></icon>
				</a>
			</p>
			<p class="music-bar-singer-name text-hidden" :title="song.artistName">{{ song.artistName }}</p>
		</div>
	</div>
</template>

<script>
	import icon from 'components/common/icon';

	export default {
		data() {
			return {
				name: 'asfs',
				pic_default: '../src/img/song-small-default.png'
			}
		},
		computed: {
			song() {
				return this.$store.state.song;
			}
		},
		methods: {
			/**
			 * 添加到“喜欢的音乐”
			 */
			addLike() {

			}
		},
		components: {
			icon
		}
	}
</script>