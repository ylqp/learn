/**
 * 页面切屏封装=== 试过jq 和 avalon 不好使  原生版
 * @params 
 * allowCut: num 允许切屏次数 num
 * callback: function 超过切屏后执行的函数 function
 */
function cutScreen(allowCut, callback) {
    if (typeof allowCut !== 'number') throw new Error('cutScreen第一个参数必须为整数')
    if (callback && Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('cutScreen第二个参数必须为函数')
    var cutNum = 0;
    var screenOut = true;

    document.body.onblur = function () {
        //处理iframe触发blur事件
        if (document.hasFocus()) {
            return
        }
        if ( cutNum >= allowCut) {
            // console.log('自动提交');
            callback && callback()
            document.body.onblur = null
            document.body.onfocus = null
            return 
        }
        cutNum++;
        // data_arguments.screenOut = true;
        // console.log(data_arguments.cutNum);
        // console.log("jsjsjsjsjj");
    }
    document.body.onfocus=function () {
        if(!screenOut){
            return
        }
        //每次切屏回来提示
        console.log(cutNum)
        console.log("考试期间不允许切换网页，超过3次将自动提交！")
        // data_arguments.screenOut = false;
    }
}
//切屏控制(目前只有原生好使 jq和avalon都有毛病)
// document.body.onblur=function () {
//     if(!data_arguments.screenCuttingFlag || !data_arguments.screenBlurFlag){
//         return;
//     }
//     if (document.hasFocus()) {//处理iframe触发blur事件
//         return;
//     }
//     // var allowCut = 3;
//     if(data_arguments.cutNum>=data_arguments.allowCut){
//         //调用自动提交
//         StartAnsFn.submitParam(true);
//         data_arguments.screenBlurFlag = false;
//     }
//     data_arguments.cutNum++;
//     data_arguments.screenOut = true;
//     console.log(data_arguments.cutNum);
//     console.log("jsjsjsjsjj");
// }
// document.body.onfocus=function () {
//     if(!data_arguments.screenCuttingFlag || !data_arguments.screenBlurFlag){
//         return;
//     }
//     if(!data_arguments.screenOut){
//         return;
//     }
//     //每次切屏提示
//     publicFn.showFloatTipBox("考试期间不允许切换网页，超过3次将自动提交！");
//     data_arguments.screenOut = false;
//     console.log("fsfsfsfsfs");
// }
function callback () {
    console.log('回调成功')
}
cutScreen(3, callback)