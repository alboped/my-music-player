<template>
	<div v-bind:class="mainClass" @click="globalClick">
		<header-main></header-main>
		<div class="content">
			<router-view></router-view>
		</div>
		<footer-main></footer-main>
	</div>
</template>

<script>
	import HeaderMain from 'components/header/main';
	import FooterMain from 'components/footer/main';

	const themeMap = ['blue', 'red']; // 主题类型

	export default {
		data() {
			return {
				mainTheme: 'blue'
			}
		},
		computed: {
			mainClass() {
				return {
					'main': true,
					'theme-red': this.mainTheme === 'red',
					'theme-blue': this.mainTheme === 'blue'
				}
			}
		},
		methods: {
			/**
			 * 修改主题
			 */
			changeTheme(themeName) {
				themeMap.includes(themeName) && (this.mainTheme = themeName);
			},
			/* 全局点击事件 */
			globalClick() {
				/* 隐藏主题设置窗口 */
				this.$store.commit('toggleThemeModelShow', false);
			}
		},
		components: {
			HeaderMain,
			FooterMain
		}
	};
</script>