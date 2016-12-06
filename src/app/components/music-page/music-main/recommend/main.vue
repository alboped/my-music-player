<template>
	<div>
		<carousel :img-list="carousel"></carousel>
		<song-menu></song-menu>
		<new-music :music-list="newMusic"></new-music>
		<mv></mv>
	</div>
</template>

<script>
	import carousel from './carousel.vue';
	import SongMenu from './song-menu.vue';
	import NewMusic from './new-music.vue';
	import Mv from './mv.vue';

	export default {
		data() {
			return {
				title: '推荐',
				carousel: [],
				newMusic: []
			}
		},
		components: {
			carousel,
			SongMenu,
			NewMusic,
			Mv
		},
		created() {
			// api('mainPageData', data => {
			// 	this.carousel = data.carousel;
			// 	this.newMusic = data.newMusic;
			// });
			// this.$http.get('http://localhost:9900/mainPageData').then(({body}) => {
			// 	({ carousel: this.carousel, newMusic: this.newMusic } = body);
			// });

			this.$api('mainPageData').then(({body}) => {
				({ carousel: this.carousel, newMusic: this.newMusic } = body);
			});
		}
	}
</script>