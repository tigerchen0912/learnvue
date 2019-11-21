<template>
  <div class="home">
    <el-input v-model="from.username" placeholder="请输入用户名" style="width:200px"></el-input><br>
    <el-input v-model="from.password" placeholder="请输入密码"  show-password style="width:200px"></el-input><br>
    <el-button type="primary" icon="el-icon-edit" @click="handleClick">登录</el-button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {},
    data() {
      return {
        from: {
          username: '',
          password: ''
        },
        list: []
      };
    },
    created() {
    },
    methods: {
      handleClick() {
        if (this.from.username === '' || this.from.password === '') {
          this.$message.warning('用户名或密码不能为空！');
        } else if (this.from.username !== 'tiger' || this.from.password !== '123456') {
          this.$message.warning('账号或密码错误！');
        } else {
          this.$router.push({path: '/'});
        }
      }
    }
  };

</script>
<style>
  .text-item{
    list-style: none;
    cursor: pointer;
    width: 50%;
    margin-left: 25%;

  }
</style>
