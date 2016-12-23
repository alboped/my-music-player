<template>
	<div>
		<carousel></carousel>
		<song-menu></song-menu>
		<new-music></new-music>
		<mv></mv>
	</div>
</template>

<script>
	import carousel from './carousel';
	import SongMenu from './song-menu';
	import NewMusic from './new-music';
	import Mv from './mv';

	export default {
		data() {
			return {
				title: '推荐'
			}
		},
		components: {
			carousel,
			SongMenu,
			NewMusic,
			Mv
		},
		created() {
			/* 初始化首页数据 */
			this.$store.dispatch('getMainPageData');
		}
	}
</script>