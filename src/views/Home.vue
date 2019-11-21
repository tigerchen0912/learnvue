<template>
  <div class="home">

  <Cardlist></Cardlist>
  </div>
</template>

<script>

  import Cardlist from '@/components/Cardlist';

  export default {
    name: 'home',
    components: {
      Cardlist
    }

  }
</script>
<style>
  .text-item{
    list-style: none;
    cursor: pointer;
    margin-left: 25%;

  }
</style>
