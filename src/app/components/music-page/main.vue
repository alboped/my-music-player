<template>
	<div class="music-content">
		<div class="main-left-content" v-bind:style="{width: leftWidth}">
			<div class="left-drag-box">
				<div class="main-left-menu">
					<left-menu menu-title="推荐" :menu-list="dataList.pageList" :menu-toggle="false"></left-menu>
					<left-menu menu-title="我的音乐" :menu-list="dataList.myMusicList" :menu-toggle="false"></left-menu>
					<left-menu menu-title="创建的歌单" :menu-list="createList" :menu-toggle="true"></left-menu>
					<left-menu menu-title="收藏的歌单" :menu-list="collectList" :menu-toggle="true"></left-menu>
				</div>
				<div class="width-drag-bar" @mousedown="dragDown"></div>
			</div>
			<music-info-bar class="player-info"></music-info-bar>
		</div>
		<div class="main-info">
			<router-view class="music-main-info"></router-view>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import icon from 'components/common/icon';
	import leftMenu from './left-menu-ul';
	import MusicInfoBar from './music-info/music-info-bar';

	const left_init_width = '200px';

	export default {
		data() {
			return {
				leftWidth: left_init_width,
				dataList: require('../../data/left-menu.json'),
				collectList: require('../../data/collect-song-list.json'),
				createList: require('../../data/create-song-list.json'),
				hideList: [],
				toggleIcon: 'angle-down'
			}
		},
		methods: {
			dragDown() {
				/* 拖动鼠标修改左侧宽度 */
				$(document).bind('mousemove.drag', e => {
					let x = e.pageX,
						mainWidth = $('.main-info').css('min-width'),
						winWidth = $(window).width();

					/* 判断右侧内容区最小宽度 */
					if(parseInt(mainWidth) < parseInt(winWidth - x)){
						this.leftWidth = x + 'px';
					}
				}).bind('mouseup', () => {
					$(document).unbind('mousemove.drag');
				});
			}
		},
		components: {
			icon,
			leftMenu,
			MusicInfoBar
		}
	}
</script>