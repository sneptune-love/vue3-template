<template>
  <div class="header">
    <i class="iconfont back" @click="$router.go(-1)">&#xe600;</i>
    <span>{{title}}</span>
    <i class="iconfont refresh" @click="refreshPage">&#xe782;</i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'XF'
    }
  },
  methods: {
    refreshPage () {
      window.location.reload()
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #f4f4f4;
  font-size: 18px;
  .back {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
  .refresh {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
}
</style>
