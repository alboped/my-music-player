<template>
	<audio :src="musicSrc" controls="controls" id="music-player">
		<source src="song.ogg" type="audio/ogg">
		<source src="song.mp3" type="audio/mpeg">
	</audio>
</template>

<script>
	import $ from 'jquery';

	export default {
		props: [
			'musicSrc'
		]
	}
</script>