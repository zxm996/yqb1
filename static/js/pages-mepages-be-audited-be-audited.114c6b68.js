(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mepages-be-audited-be-audited"],{"062f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{newlist:[{examine:"申请加入球队",imgUrl:"../../../static/images/user.jpg",time:"2分钟前",name:"小马",remark:"想加入球队，谢谢"},{examine:"申请加入球队",imgUrl:"../../../static/images/user.jpg",time:"2分钟前",name:"小马",remark:"想加入球队，谢谢"},{examine:"申请加入球队",imgUrl:"../../../static/images/user.jpg",time:"2分钟前",name:"小马",remark:"想加入球队，谢谢想加入球队，谢谢想加入球队，谢谢"}]}},onNavigationBarButtonTap:function(){uni.switchTab({url:"/pages/index/index"})},methods:{newlistbtn:function(){uni.navigateTo({url:"/pages/mepages/be-audited_details/be-audited_details"})},agree:function(t){this.newlist.splice(t,1),uni.showToast({icon:"none",title:"同意成功",duration:1200})},refuse:function(t){this.newlist.splice(t,1),uni.showToast({icon:"none",title:"拒绝成功",duration:1200})}}};i.default=n},"393e":function(t,i,e){"use strict";var n=e("8a00"),a=e.n(n);a.a},"408d":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.newlist[data-v-3bac3ad9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff}.newlist[data-v-3bac3ad9]:last-child{border-bottom:none}.newlist .newlist-left .list-icon[data-v-3bac3ad9]{width:%?86?%;height:%?86?%;border-radius:50%;margin:%?24?% %?26?%}.newlist .newlist-right[data-v-3bac3ad9]{width:calc(100% - %?164?%);padding:%?24?% 0;padding-right:%?26?%;border-bottom:%?1?% solid #ececec}.newlist .newlist-right .listone[data-v-3bac3ad9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.newlist .newlist-right .listone .user_name[data-v-3bac3ad9]{width:70%;font-size:%?30?%;color:#333;letter-spacing:%?1?%}.newlist .newlist-right .listone .time[data-v-3bac3ad9]{width:30%;text-align:right;font-size:%?26?%;color:#999}.newlist .newlist-right .down_box[data-v-3bac3ad9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:%?4?%}.newlist .newlist-right .down_box .listtwo[data-v-3bac3ad9]{width:60%;font-size:%?26?%;color:#7a7a7a;letter-spacing:%?1?%;margin-top:%?6?%}.newlist .newlist-right .down_box .listtwo .label[data-v-3bac3ad9]{margin-right:%?14?%}.newlist .newlist-right .down_box .editbtn[data-v-3bac3ad9]{width:37%;margin-left:3%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:%?6?%}.newlist .newlist-right .down_box .editbtn .btn1[data-v-3bac3ad9]{width:50%;height:%?40?%;line-height:%?40?%;font-size:%?22?%;color:#fff;background-color:#4481e2;margin:0;letter-spacing:%?1?%}.newlist .newlist-right .down_box .editbtn .btn2[data-v-3bac3ad9]{background-color:#dd524d}',""])},6371:function(t,i,e){"use strict";e.r(i);var n=e("8d97"),a=e("7e76");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("393e");var l=e("2877"),o=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"3bac3ad9",null);i["default"]=o.exports},"7e76":function(t,i,e){"use strict";e.r(i);var n=e("062f"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"8a00":function(t,i,e){var n=e("408d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7ac77710",n,!0,{sourceMap:!1,shadowMode:!1})},"8d97":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._l(t.newlist,function(i,n){return e("v-uni-view",{key:n,staticClass:"newlist",on:{click:function(i){i=t.$handleEvent(i),t.newlistbtn(i)}}},[e("v-uni-view",{staticClass:"newlist-left"},[e("v-uni-image",{staticClass:"list-icon",attrs:{src:i.imgUrl,mode:""}})],1),e("v-uni-view",{staticClass:"newlist-right"},[e("v-uni-view",{staticClass:"listone"},[e("v-uni-view",{staticClass:"user_name a_line"},[t._v(t._s(i.examine))]),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.time))])],1),e("v-uni-view",{staticClass:"down_box"},[e("v-uni-view",{staticClass:"listtwo a_line"},[e("v-uni-text",{staticClass:"label"},[t._v("["+t._s(i.name)+"]")]),t._v(t._s(i.remark))],1),e("v-uni-view",{staticClass:"editbtn"},[e("v-uni-button",{staticClass:"btn1",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.agree(n)}}},[t._v("同意")]),e("v-uni-button",{staticClass:"btn1 btn2",staticStyle:{"margin-left":"10upx"},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.refuse(n)}}},[t._v("拒绝")])],1)],1)],1)],1)}),t.newlist.length?t._e():e("v-uni-view",{staticClass:"none_data"},[e("v-uni-image",{staticClass:"none_img",attrs:{src:"/static/images/icon/nonedate.png",mode:""}}),e("v-uni-view",{staticClass:"none_label"},[t._v("暂无审核信息")])],1)],2)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})}}]);