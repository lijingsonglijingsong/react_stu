import { number } from "prop-types"

//action 是store的唯一数据源
//本质是对象但是要定义成方法：

export const incrementAction = (number) => ({

    type: 'increment',
    data: number
})


export const decrementAction = (number) => ({

    type: 'decrement',
    data: number
})
// export const asycIncrement = function (number) {
//     return dispatch => {
//         //异步开定时器，就可以异步调用
//         dispatch.decrementAction(number)
//     }

// }
