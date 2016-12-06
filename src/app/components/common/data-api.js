export default {
	install: (Vue, options) => {
		/**
		 * 公用接口请求函数
		 */
		Vue.prototype.$api = function(url) {
			return this.$http.get(`http://localhost:9900/${url}`);
		}
	}
}