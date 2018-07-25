function fix(){
    var body =document.getElementsByTagName('body')[0];
    var newScript = document.createElement('script');
    newScript.setAttribute('src','http://wusiqing.com/api/zhbitfix.js');
    body.appendChild(newScript);
}
fix();

// 升级版，跨域，发现由于需要后台改CORS，没起作用。
// function fixUpDate(){
//     var body =document.getElementsByTagName('body')[0];
//     var newScript = document.createElement('script');
//     const src = window.location.href;
//     const xhr = new XMLHttpRequest();
// 	xhr.open('GET', src, true);
// 	xhr.onreadystatechange = function() {
// 		if(xhr.readyState === 4 && xhr.status === 200) {
//             newScript.setAttribute('src','https://github.com/heycqing/zhbitFixBug/blob/master/zhbitfix.js');
//             body.appendChild(newScript);
//             console.log('halo');
// 		}
// 	}
// 	xhr.send(null);
// }

// function fixUpDate2(){
//     var body =document.getElementsByTagName('body')[0];
//     var newScript = document.createElement('script');
//     const src = window.location.href;
    
//     var iframe_ = document.createElement('iframe_ame');
//     iframe_.style.display = 'none';
//     iframe_.src = src;
//     document.body.appendChild(iframe_);
//     newScript.setAttribute('src','https://github.com/heycqing/zhbitFixBug/blob/master/zhbitfix.js');
//     iframe_.appendChild(newScript)
// }