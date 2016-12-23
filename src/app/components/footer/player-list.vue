<template>
	<div class="player-list">
		<a href="javascript:;" class="player-list-open" @click="playerListToggle">
			<span class="player-list-num">{{ playerList.length }}</span>
			<icon icon-href="yinle1" class="left player-list-icon"></icon>
		</a>
		<div class="player-list-dialog" v-show="is_show">
			<div class="f-top-bar">
				<span class="f-music-num">总{{ playerList.length }}</span>
			</div>
			<ul class="music-list">
				<li class="music-item" v-for="music in playerList" @dbclick="startPlayer(music)">
					<span class="f-music-name">{{ music.songName }}</span>
					<span class="f-music-singer">{{ music.artistName }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import icon from '../common/icon';

	export default {
		data() {
			return {
				is_show: false
			}
		},
		computed: {
			playerList() {
				return this.$store.state.playerList;
			}
		},
		methods: {
			startPlayer(info) {

			},
			playerListToggle() {
				this.is_show = !this.is_show;
			}
		},
		components: {
			icon
		}
	}
</script>