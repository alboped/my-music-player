<template>
	<div>
		<ul class="music-main-ul">
			<li v-for="tab in tabList" class="music-tab-item">
				<router-link :to="tab.link" 
					active-class="active" class="music-tab-link theme-fcolor-h-a theme-border-a">
					{{ tab.name }}
				</router-link>
			</li>
		</ul>
		<router-view class="music-body"></router-view>
	</div>
</template>

<script>
	import tabList from 'app/data/music-page-tab.json';

	export default {
		data() {
			return {
				tabList
			}
		}
	}
</script>