<template>
	<ul>
		<li class="left setting-bar-item">
			<a href="javascript:;" class="left top-btn theme-btn" @click.stop="toggleShowThemeModel">
				<icon icon-href="yifu" class="top-btn-icon"></icon>
			</a>
			<theme-model v-show="showModel"></theme-model>
		</li>
		<li class="left setting-bar-item">
			<router-link to="/setting" class="left top-btn setting-btn">
				<icon icon-href="set" class="top-btn-icon"></icon>
			</router-link>
		</li>
	</ul>
</template>

<script>
	import icon from '../common/icon'; /* 图标 */
	import themeModel from './theme-model'; /* 主题弹框 */

	export default {
		data() {
			return {
				uName: '简单系'
			}
		},
		computed: {
			showModel() {
				return this.$store.state.headerStore.themeModelShow;
			}
		},
		methods: {
			toggleShowThemeModel() {
				this.$store.commit('toggleThemeModelShow', !this.showModel);
			}
		},
		components: {
			icon,
			themeModel
		}
	}
</script>