import { QUERYDATALIST } from './mutation-types';
import { queryTodoListData } from '../service/todoService';
import de from 'element-ui/src/locale/lang/de';

// model
export default {
  // namespace:true,
  state: {
    // 渲染的数据，返回给view层
    list: []
  },
  // 同步修改
  mutations: {
    // 第一个参数是state，第二个参数state的值等于什么
    [QUERYDATALIST](state, data) {
      // 函数体 执行复制操作
      state.list = data;
    }
  },
  // 异步commit提交
  actions: {
    // 到此为止， Vuex数据的修改已经完成
    // 数据从哪里来
    // 数据与服务器交互
    // 页面与数据交互
    async [QUERYDATALIST]({ commit }, payload) {
      const { data } = await queryTodoListData(payload.url);
      commit(QUERYDATALIST, data.List);// 预留的数据
    }
  }
};
