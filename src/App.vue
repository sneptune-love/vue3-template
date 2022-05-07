<template>
  <XfHeader :title="$route.name" />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import routes from '@/router/list'
export default defineComponent({
  setup () {
    return {
      title: 'homeView',
      list: routes
    }
  },
  methods: {
    goPath (path: string) {
      this.$router.push({
        path
      })
    }
  }
})
</script>

<style lang="less">

</style>
