<template>
	<div class="carousel">
		<div class="carousel-img">
			<ul class="carousel-img-list">
				<li v-for="(img, index) in carouselList" 
					v-bind:class="{'carousel-item': true, 
						'carousel-current': index == showImgIndex.current, 
						'carousel-current-prev': index == showImgIndex.prev, 
						'carousel-current-next': index == showImgIndex.next
					}">
					<a href="javascript:;" :title="img.title">
						<img :src="img.path" alt="" class="carousel-item-img">
					</a>
				</li>
			</ul>
			<a href="javascript:;" class="carousel-prev" @click="imgToggle(true)">
				<icon icon-href="jiantou-copy"></icon>
			</a>
			<a href="javascript:;" class="carousel-next" @click="imgToggle(false)">
				<icon icon-href="arrow2-right"></icon>
			</a>
		</div>
		<ul class="carousel-page">
			<li v-for="(info, index) in carouselList" 
				v-bind:class="{
					'carousel-page-item': true, 
					'carousel-page-current': index == showImgIndex.current
				}" 
				@mouseenter="imgChange(index)">
				<a href="javascript:;" class="carousel-page-link"></a>
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from '../../../common/icon';

	export default {
		data() {
			return {
				showImgIndex: {
					prev: 0,
					current: 1,
					next: 2
				}
			}
		},
		computed: {
			carouselList() {
				return this.$store.state.reStore.mainPage.carousel;
			}
		},
		methods: {
			indexModified(type, name) {
				let current = this.showImgIndex.current,
					len = this.carouselList.length;

				if(type){
					current <= 0
					? this.showImgIndex[name] = len - 1 
					: this.showImgIndex[name] = current - 1;
				} else {
					current >= len - 1 
					? this.showImgIndex[name] = 0 
					: this.showImgIndex[name] = current + 1;
				}
			},
			setPrevNext() {
				this.indexModified(true, 'prev');
				this.indexModified(false, 'next');
			},
			/**
			 * 切换轮播图
			 * type: true 向左；false 向右
			 */
			imgToggle(type) {
				this.indexModified(type, 'current');
				this.setPrevNext();
			},
			imgChange(index) {
				this.showImgIndex.current = index;
				this.setPrevNext();
			}
		},
		components: {
			icon
		},
		created() {
			setInterval(() => {
				this.imgToggle(false);
			}, 5000);
		}
	}
</script>