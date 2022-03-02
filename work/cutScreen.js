/**
 * 页面切屏封装=== 试过jq 和 avalon 不好使  原生版
 * @params 
 * allowCut: num 允许切屏次数 num
 * callback: function 超过切屏后执行的函数 function
 */
function cutScreen(allowCut, callback, blurFn) {
    if (typeof allowCut !== 'number') throw new Error('cutScreen第一个参数必须为整数')
    if (callback && Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('cutScreen第二个参数必须为函数')
    if (blurFn && Object.prototype.toString.call(blurFn) !== '[object Function]') throw new Error('cutScreen第三个参数必须为函数')
    if (!blurFn) {
        var blurFn = function () {
            console.log(cutNum)
            console.log("考试期间不允许切换网页，超过3次将自动提交！")
        }
    }    
    var cutNum = 0;
    var screenOut = true;

    document.body.onblur = function () {
        console.log(document.hasFocus())
        //处理iframe触发blur事件
        if (document.hasFocus()) {
            screenOut = false;
            return
        }
        if ( cutNum >= allowCut) {
            // console.log('自动提交');
            callback && callback()
            destoryCutScreen()
            return 
        }
        cutNum++;
    }
    document.body.onfocus=function () {
        if(!screenOut){
            screenOut = true;
            return
        }
        //每次切屏回来提示
        blurFn()
    }
}
function destoryCutScreen () {
    document.body.onblur = null
    document.body.onfocus = null
}
function callback () {
    console.log('回调成功')
}
// cutScreen(3, callback)