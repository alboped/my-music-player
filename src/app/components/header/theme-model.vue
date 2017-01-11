<template>
	<div class="theme-style-model" @click.stop>
		<ul class="theme-tab clearfix">
			<li class="theme-tab-item left" 
				v-bind:class="{ active: onThemeTab == 1 }" 
				@click="teggleTab(1)">
				<a href="javascript:;">主题</a>
			</li>
			<li class="theme-tab-item left" 
				v-bind:class="{ active: onThemeTab == 2 }" 
				@click="teggleTab(2)">
				<a href="javascript:;">纯色</a>
			</li>
		</ul>
		<div class="theme-box" v-show="onThemeTab == 1">
			<ul class="theme-ul">
				<li class="theme-item" v-for="theme in themeList">
					<a href="javascript:;" class="theme-toggle-link" 
						v-bind:style="{ borderColor: theme.color }">
						<div class="theme-item-box" v-bind:style="{ backgroundColor: theme.color }">
							<span class="theme-name">{{ theme.name }}</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="theme-box" v-show="onThemeTab == 2">
			<iframe src="../../../../src/app/player.html" frameborder="0"></iframe>	
		</div>
		<i class="model-front"></i>
	</div>
</template>

<script>
	import icon from 'components/common/icon'; /* 图标 */

	export default {
		data() {
			return {
				onThemeTab: 1,
				themeList: [{
					name: '酷炫黑',
					imgPath: '',
					color: '#555'
				}, {
					name: '官方红',
					imgPath: '',
					color: 'rgb(198, 47, 47)'
				}, {
					name: '可爱粉',
					imgPath: '',
					color: 'rgb(248, 134, 175)'
				}, {
					name: '天际蓝',
					imgPath: '',
					color: 'rgb(68, 170, 248)'
				}, {
					name: '清新绿',
					imgPath: '',
					color: 'rgb(70, 191, 122)'
				}, {
					name: '土豪金',
					imgPath: '',
					color: 'rgb(216, 159, 85)'
				}]
			}
		},
		methods: {
			teggleTab(type) {
				this.onThemeTab = type;
			}
		},
		components: {
			icon  
		}
	}
</script>