import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../components/common/data-api';

import state from './state';
import actions from './actions';
import mutations from './mutations';

import reStore from './modules/re-store';
import playerStore from './modules/player-store';
import headerStore from './modules/header-store';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules: {
		reStore,
		playerStore,
		headerStore
	}
});