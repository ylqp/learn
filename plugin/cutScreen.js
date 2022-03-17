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
            // console.log(cutNum)
            console.log("考试期间不允许切换网页，超过3次将自动提交！")
        }
    }    
    var dealNum = function () {
        console.log(cutNum)
        if ( cutNum >= allowCut) {
            // console.log('自动提交');
            callback && callback()
            destoryCutScreen()
            return 
        }
        cutNum++;
    }
    var cutNum = 0;
    var isFrame = true;
    var screenOut = false;
    document.addEventListener("visibilitychange", function() {
        // if (document.visibilityState == 'hidden' && isFrame) {
        //     screenOut = true
        //     console.log('hiddddddddd')
        // }

        // if (document.visibilityState == 'visible' && screenOut) {
        //     console.log('提示')
        // }
        
        if (isFrame) {// 如果焦点在iframe上
            if (document.visibilityState == 'hidden') {
                console.log('切出去了')
            } else {
                console.log('提示')
            }
        }   
    });
    // document.body.addEventListener('blur', function () {

    // });
    document.body.onblur = function () {
        if (document.hasFocus()) {
            isFrame = true
            // document.body.onfocus()
        } else {
            console.log('切出去了')
        }
        
    }
    document.body.onfocus=function () {
        if (isFrame) {
            isFrame = false;
        } else {
            console.log('提示')
        }
    }

    // window.addEventListener('focus', function() {
    //     if (isFrame) {
    //         isFrame = false;
    //     } else {
    //         console.log('提示')
    //     }
        
    // })
    // window.addEventListener('blur', function() {
    //     if (document.hasFocus()) {
    //         isFrame = true
    //     } else {
    //         console.log('切出去了')
    //     }
        
    // })
}
function destoryCutScreen () {
    document.body.onblur = null
    document.body.onfocus = null
}
function callback () {
    console.log('回调成功')
}
cutScreen(3, callback)