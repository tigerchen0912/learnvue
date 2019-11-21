<template>
  <div class="about">
    <el-tabs :tab-position="tabPosition" style="height: 280px;">
      <el-tab-pane label="v-text">
        <p v-text="'今天是'+year+'年'+month+'月'"></p>
      </el-tab-pane>
      <el-tab-pane label="v-html">
        <p v-html="html"></p>
      </el-tab-pane>
      <el-tab-pane label="v-if">
        <el-button v-on:click="done=!done">click me</el-button>
        <p v-if="done" class="">√</p>
        <p v-else>×</p>
      </el-tab-pane>
      <el-tab-pane label="v-for">
        <div id="app-4">
          <ol>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
          </ol>
        </div>
      </el-tab-pane>
      <el-tab-pane label="v-on">
        <el-button v-on:click="finish=!finish" >反转消息</el-button>
        <p v-if="finish">{{message1}}</p>
        <p v-else>{{message1.split('')
          .reverse()
          .join('')}}</p>
      </el-tab-pane>
      <el-tab-pane label="v-model">
        <el-input type="text" v-model="mtext" placeholder="请输入"></el-input>
        <p>{{mtext}}</p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'Aboutlist',
    data() {
      return {
        tabPosition: 'left',
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        html: 'hello world!',
        done: true,
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' },
        ],
        message1: 'Hello Vue.js!',
        finish: true,
        mtext: ''
      };
    }
  }
</script>

<style scoped>

</style>
