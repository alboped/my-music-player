<template>
	<div class="re-mv">
		<p class="re-item-title no-select">
			推荐MV
			<router-link to="/" class="right recommend-detail-link">
				更多>
			</router-link>
		</p>
		<ul class="re-mv-list">
			<li class="re-mv-item" v-for="mv in mvList">
				<router-link to="/">
					<img :src="mv.img" class="re-mv-img" alt="">
				</router-link>
				<p class="re-mv-item-title">
					{{ mv.mvname }}
				</p>
				<p class="re-mv-item-singer">
					{{ mv.sname }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mvList: []
			}
		},
		created() {
			this.$api('remvlist').then(({body}) => {
				this.mvList = body;
			});
		}
	}
</script>