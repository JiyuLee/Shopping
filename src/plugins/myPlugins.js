//Vue插件一定暴露一个对象
let myPlugins = {};

myPlugins.install = function(Vue,options){
    // console.log('调用');
    // Vue.prototype.$bus:任何组件都可以使用
    // Vue.direction
    // Vue.component
    // Vue.filter...
    
}

export default myPlugins;