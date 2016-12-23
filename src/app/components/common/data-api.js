import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
	_api: (...urls) => {
		/**
		 * 公用接口请求函数
		 */
		let then_num = urls.length,
			httpGetList = [],
			bodyArray = [],
			errorArray = [];

		for(let url of urls){
			httpGetList.push(Vue.http.get(`http://localhost:9900/${url}`));
		}

		return {
			then(successCallback, errorCallback) {
				for(let i of httpGetList.keys()) {
					httpGetList[i].then(({body}) => {
						bodyArray[i] = body;
						then_num -= 1;
						if(then_num == 0){
							successCallback && successCallback(...bodyArray);
						}
					}, error => {
						errorArray.push(error);
					});
				}
				errorCallback && errorCallback(...errorArray);
			}
		}
	}
}