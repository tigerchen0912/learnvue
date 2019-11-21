<template>
  <div class="about">
    <h1>指令</h1>
    <AboutLists></AboutLists>
  </div>
</template>

<script>

  import AboutLists from '@/components/Aboutlist.vue';

  export default {
    name: 'about',
    components:{
      AboutLists,
    },
    data() {
      return {
        tabPosition: 'left',
        activeName: 'second',
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
