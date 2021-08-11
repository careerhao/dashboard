<template>
    <div class="home">
        <TopNav />
		<router-view></router-view>
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
