<template>
  <div class="home">
    <div class="nav-list">
      <div class="nav-item" v-for="(item, index) in list" :key="index" @click="goPath(item.path)">
        <img src="https://img1.baidu.com/it/u=3889343928,1020388913&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <p class="name">{{item.name}}</p>
      </div>
      <van-button>1234</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import routes from '@/router/list'

export default defineComponent({
  setup () {
    return {
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

<style lang="less" scoped>
.nav-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 0 10px;
  .nav-item {
    width: 60px;
    margin-right: 10px;
    img {
      width: 60px;
      border-radius: 4px;
    }
  }
}
</style>
