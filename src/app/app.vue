<template>
	<div v-bind:class="mainClass">
		<header-main></header-main>
		<div class="content">
			<router-view></router-view>
		</div>
		<footer-main></footer-main>
	</div>
</template>

<script>
	import HeaderMain from './components/header/main.vue';
	import FooterMain from './components/footer/main.vue';

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
			}
		},
		components: {
			HeaderMain,
			FooterMain
		}
	};
</script>