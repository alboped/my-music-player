<template>
	<div class="left-menu">
		<p @click="toggleList" 
			v-bind:class="{'left-menu-title': true, 'left-menu-title-hover': menuToggle}">
			{{ menuTitle }}
			<template v-if="menuToggle">
				<icon :icon-href="showList ? 'angle-down' : 'jiantou'" 
					class="right left-menu-title-icon">
				</icon>
			</template>
		</p>
		<ul class="left-menu-list" v-show="showList">
			<li v-for="item in menuList" 
				class="left-list-item clearfix">
				<router-link :to="item.link" active-class="active" 
					class="left-item-link theme-border-a">
					<icon class="left-list-icon left" :icon-href="item.icon"></icon>
					<span class="left-menu-text left text-hidden">{{ item.name }}</span>
				</router-view>
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from 'components/common/icon';

	export default {
		props: [
			'menuTitle',
			'menuList',
			'menuToggle'
		],
		data() {
			return {
				showList: true
			}
		},
		methods: {
			toggleList() {
				if(this.menuToggle){
					this.showList = !this.showList;
				}
			}
		},
		components: {
			icon
		}
	}
</script>