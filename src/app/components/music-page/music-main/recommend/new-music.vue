<template>
	<div class="re-new-music">
		<p class="re-item-title no-select">
			新碟首发
			<router-link to="/index/music-main/song-menu" class="right recommend-detail-link">
				更多>
			</router-link>
		</p>
		<ul class="re-new-music-list">
			<li class="re-new-music-item" v-for="(music, index) in musicList">
				<span class="re-new-music-index">{{ index + 1 | leftPolishing }}</span>
				<a href="javascript:;" class="re-music-pic">
					<img :src="music.img" alt="" class="re-music-img">
					<icon icon-href="bofang2" class="start-play-icon re-music-play-icon"></icon>
				</a>
				<div class="re-new-music-info">
					<p class="re-new-music-name">
						{{ music.mname }}
					</p>
					<p class="re-new-music-singer">
						{{ music.sname }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from '../../../common/icon.vue';

	export default {
		props: [
			'musicList'
		],
		components: {
			icon
		}
	}
</script>