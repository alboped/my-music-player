<template>
	<div>
		<a href="javascript:;" class="left top-btn mini-btn">
			<icon icon-href="icsuoxiaotubiao"></icon>
		</a>
		<a href="javascript:;" class="left top-btn min-btn">
			<icon icon-href="jian"></icon>
		</a>
		<a href="javascript:;" class="left top-btn max-btn">
			<icon icon-href="fangkuang"></icon>
		</a>
		<a href="javascript:;" class="left top-btn close-btn"  @click="close_window">
			<icon icon-href="guanbi"></icon>
		</a>
	</div>
</template>

<script>
	import icon from 'components/common/icon';

	export default {
		methods: {
			close_window() {
				window.close();
			}
		},
		components: {
			icon
		}
	}
</script>