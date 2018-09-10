## hotWater 说明



### js埋点处理

> 原理：

> 在需要获取用户动作行为的地方,采用前端向后端发送数据统计请求埋点，log 内容以参数形式发送到 “空 gif” 请求里

##### 例子代码

```js
    <!-- 基于小程序的埋点 -->
    wx.request({
        url: 'https://log.mobike.com/log/x.gif',
        data: {
            log: '{startTime: 1530179125563, endTime: 1530179138793, ...}'
        }
    })
```

- 参考埋点链接[腾讯埋点](http://developer.qq.com/wiki_v2/mta/mta-html5jie-ru.html)
