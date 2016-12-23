export default {
	playerStart(state, song) {
		state.song = song;
	},
	initPlayerList(state, playerList) {
		state.playerList = playerList;
	}
}