<template>
	<div class="header theme-bg">
		<div class="logo left app-no-drag">
			<router-link to="/" class="logo-link">
				<icon icon-href="yy2" class="logo-icon"></icon>
				超级云音乐
			</router-link>
		</div>
		<div class="search-bar left app-no-drag">
			<a href="javascript:;" class="page-left left">
				<icon icon-href="jiantou-copy"></icon>
			</a>
			<a href="javascript:;" class="page-right left">
				<icon icon-href="arrow2-right"></icon>
			</a>
			<input type="text" class="search-text left" placeholder="搜索音乐，歌手，歌词，用户">
			<a href="javascript:;" class="search-icon left">
				<icon icon-href="sousuo"></icon>
			</a>
		</div>
		<win-bar class="window-bar right app-no-drag"></win-bar>
		<setting-bar class="setting-bar right app-no-drag"></setting-bar>
	</div>
</template>

<script>
	import icon from '../common/icon.vue'; /* 图标 */
	import winBar from './win-bar.vue'; /* 窗口操作栏 */
	import settingBar from './setting-bar.vue'; /* 设置栏 */

	export default {
		data() {
			return {
				title: 'logo'
			}
		},
		components: {
			icon,
			winBar,
			settingBar
		}
	}
</script>