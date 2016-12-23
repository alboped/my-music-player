<template>
	<svg class="icon">
		<use :xlink:href="'#icon-' + iconHref"></use>
	</svg>
</template>

<script>
	/* 阿里图标文件 */
	require('../../../icon-font/iconfont');

	export default {
		props: ['iconHref']
	}
</script>