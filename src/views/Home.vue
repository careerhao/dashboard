<template>
    <div class="home">
		<div class="home__nav">
        	<top-nav />
		</div>
		<div class="home__content">
			<router-view></router-view>
		</div>
    </div>
</template>

<script>
import TopNav from '@/components/nav/TopNav'

export default {
  name: 'home',
  components: {
    TopNav,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.home {
	height: 100vh;
  	display: flex;
	flex-direction: column;

	&__nav {
		height: $nav-height;
	}

	&__content {
		display: flex;

		flex: 1;
		height: calc(100vh - 4rem);
	}
}
</style>

