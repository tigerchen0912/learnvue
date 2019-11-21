<template>
  <div id="app" style="bgImg">
    <div id="nav" >
      <el-menu  class="el-menu-demo" mode="horizontal" id="menu">
        <el-menu-item index="1" >
          <router-link to="/" >
            <el-image style="width: 68px;height: 60px;padding: 0" :src="url"></el-image>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2" >
          <router-link to="/" >首页</router-link>
        </el-menu-item>
        <el-menu-item index="3" >
          <router-link to="/about" >关于</router-link>
        </el-menu-item>
        <el-menu-item index="4" >
          <router-link to="/todo" >Todo</router-link>
        </el-menu-item>
        <el-button type="primary">
          <router-link to="/login" >登录</router-link>
        </el-button>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        url: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=92a7cba0edcd7b89fd6132d16e4d29c2/1b4c510fd9f9d72a26f9db77df2a2834349bbb3f.jpg'
      }
    }
  };

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: grey;
    text-decoration: none;

    &.router-link-exact-active {
      color: black;
      text-align: center;
    }
  }
}
#menu {
    margin-left: 25%;
    width: 50%;
  }
</style>
