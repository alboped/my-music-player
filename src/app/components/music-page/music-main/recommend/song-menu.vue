<template>
	<div class="re-song-menu">
		<p class="re-item-title no-select">
			推荐歌单
			<router-link to="/index/music-main/song-menu" class="right recommend-detail-link">
				更多>
			</router-link>
		</p>
		<ul class="re-song-menu-list">
			<li v-for="song in songlist" class="re-song-menu-item">
				<router-link to="/" class="re-song-item-link">
					<img :src="song.img" alt="song.title" class="re-song-img">
					<a href="javascript:;" @click="startMusic(song.id)">
						<icon icon-href="bofang2" class="start-play-icon re-play-icon"></icon>
					</a>
				</router-link>
				<p class="re-song-title">
					<router-link to="/">
						{{ song.title }}
					</router-link>
				</p>
				<div class="re-song-num-bar">
					<icon icon-href="yy2" class="re-song-num-icon"></icon>
					<span class="re-song-num">{{ song.num }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from '../../../common/icon';

	export default {
		computed: {
			songlist() {
				return this.$store.state.reStore.mainPage.songlist;
			}
		},
		methods: {
			startMusic(id) {
				this.$store.dispatch('getSongListIds', id);
			}
		},
		components: {
			icon
		},
		created() {
			/* 初始化首页歌单列表 */
			this.$store.dispatch('getMainSongList');
		}
	}
</script>