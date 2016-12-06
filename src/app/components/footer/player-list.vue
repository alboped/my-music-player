<template>
	<div class="player-list">
		<div class="f-top-bar">
			<span class="f-music-num">总{{ musicList.length }}</span>
		</div>
		<ul class="music-list">
			<li class="music-item" v-for="music in musicList" @dbclick="startPlayer(music)">
				<span class="f-music-name">{{ music.songName }}</span>
				<span class="f-music-singer">{{ music.artistName }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from '../common/icon.vue';

	export default {
		props: [
			'musicList'
		],
		data() {
			return {

			}
		},
		methods: {
			startPlayer(info) {

			}
		}
	}
</script>