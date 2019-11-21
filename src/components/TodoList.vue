<template>
  <div class="todo-list">
    <ol>
      <el-input type="text" v-model="add" style="width: 50%"></el-input><br>
      <el-button type="primary" icon="el-icon-plus" @click="getAdd()"></el-button>
      <br>
      <hr>
      <br>
      <li v-for="(item,index) in dataSource":key="index" @click="changeClick(item)">
        <del v-if="item.done" class="">{{item.text}}</del>
        <span v-else>{{item.text}}</span>
      </li>
      <li v-for="item in list" @click="changeClick(item)">
        <del v-if="item.done">{{item.title}}</del>
        <span v-else>{{item.title}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data (){
      return {
        add: '',
        list:[]
      }
    },
    props: {
      dataSource: Array,
    },
    methods: {
      changeClick(item) {
        item.done = !item.done;
      },
      getAdd() {
        this.list.push({
          title: this.add,
          done: false,
        });
        this.add='';
      }
    }
  };
</script>
<!--作用域scoped-->
<style scoped lang = "less">
  li{
    list-style: none;
    cursor: pointer;
  }
</style>
