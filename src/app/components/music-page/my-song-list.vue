<template>
	<div class="song-list">
		<p>歌单{{ $route.params.id }}</p>
		<ul>
			<li v-for="song in songList">
				{{ song.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				songList: []
			}
		}
	}
</script>