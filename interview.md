vue 双绑原理

初始化参数的时候 将data中的属性注入到vue实例中 变成getter 和 setter
然后监听data数据  getter的时候收集依赖。 setter的时候发布通知

观察者模式 

在指令解析的时候  需要获取数据的指令比如 v-text 就会创建观察者对象 被收集到数据的观察者数组中 