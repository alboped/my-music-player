<template>
	<div>
		<a href="javascript:;" class="left top-btn theme-btn">
			<icon icon-href="yifu"></icon>
		</a>
		<router-link to="/setting" class="left top-btn setting-btn">
			<icon icon-href="set"></icon>
		</router-link>
	</div>
</template>

<script>
	import icon from '../common/icon.vue'; /* 图标 */

	export default {
		data() {
			return {
				uName: '简单系'
			}
		},
		components: {
			icon
		}
	}
</script>