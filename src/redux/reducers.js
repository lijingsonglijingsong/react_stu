

//本质就是本质就是方法

//服务store   并为store 初始化状态值
//帮助store 修改state
// 需要action 得到数据源
//修改完数据教给store 的state

//action 有 type  data 两个东西，type是修改
function counterReducer(state = 0, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'increment':
            return state + action.data;
        case 'decrement':
            return state - action.data;
        default:
            return state;
    }


}

export default counterReducer;
