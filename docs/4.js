(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(t,e,n){"use strict";n.r(e),n.d(e,"fielddata",function(){return i}),n.d(e,"columndata",function(){return o}),n.d(e,"actionColumn",function(){return u}),n.d(e,"initialData",function(){return a}),n.d(e,"employee",function(){return l});var r=n(17),i=[{label:"ID",field:"id",component:"text",readOnly:!0,row:0,col:"md-6"},{label:"Name",field:"name",component:"text",required:!0,row:1,col:"md-6"},{label:"Title",field:"title",component:"text",required:!0,row:2,col:"md-6"},{label:"Department",field:"departmentId",component:"select",row:3,col:"md-6"},{label:"Rate",field:"rate",component:"currency",required:!0,row:4,col:"md-6"}],o=i.map(function(t){return Object.assign({},t)}),u={label:"Edit",field:"field",component:"action",className:"secondary"};o.push(u);var a={list:[],showModal:!1,selectedItem:null,path:"employee",title:"Employees",fielddata:i,columndata:o},c=i.find(function(t){return"departmentId"==t.field}),s=o.find(function(t){return"departmentId"==t.field});s.component="";var l={oncreate:function(t){u.action=function(e){return t.edit(e)},t.getList()},getList:function(){var t=this;r.a.getList("department").then(function(e){t.set({departmentList:e}),c.optionList=e,s.field=function(e){var n=t.get().departmentList.find(function(t){return t.id==e.departmentId});return n?n.name:""},r.a.getList("employee").then(function(e){t.set({list:e})})})}}},17:function(t,e,n){"use strict";var r=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})},i=function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},o=function(){function t(){}return t.makeRequest=function(t,e,n,o){return r(this,void 0,void 0,function(){var r,u,a;return i(this,function(i){switch(i.label){case 0:return r={mode:"cors",method:e,headers:n},o&&(r.body=JSON.stringify(o)),[4,fetch(basePath+t,r)];case 1:return u=i.sent(),(a=u.headers.get("content-type"))&&-1!==a.indexOf("application/json")?[2,u.json()]:[2,u.text()]}})})},t.makeHeaders=function(){var t=new Headers;return t.append("Content-Type","application/json"),t},t.get=function(e){return r(this,void 0,void 0,function(){var n=this;return i(this,function(o){return[2,new Promise(function(o,u){return r(n,void 0,void 0,function(){var n,r,a;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=t.makeHeaders(),[4,t.makeRequest(e,"GET",n)];case 1:return r=i.sent(),o(r),[3,3];case 2:return a=i.sent(),u(a),[3,3];case 3:return[2]}})})})]})})},t.post=function(e,n){return r(this,void 0,void 0,function(){var o=this;return i(this,function(u){return[2,new Promise(function(u,a){return r(o,void 0,void 0,function(){var r,o,c;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),r=t.makeHeaders(),[4,t.makeRequest(e,"POST",r,n)];case 1:return o=i.sent(),u(o),[3,3];case 2:return c=i.sent(),a(c),[3,3];case 3:return[2]}})})})]})})},t.put=function(e,n){return r(this,void 0,void 0,function(){var o=this;return i(this,function(u){return[2,new Promise(function(u,a){return r(o,void 0,void 0,function(){var r,o,c;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),r=t.makeHeaders(),[4,t.makeRequest(e,"PUT",r,n)];case 1:return o=i.sent(),u(o),[3,3];case 2:return c=i.sent(),a(c),[3,3];case 3:return[2]}})})})]})})},t.delete=function(e,n){return r(this,void 0,void 0,function(){var o=this;return i(this,function(u){return[2,new Promise(function(u,a){return r(o,void 0,void 0,function(){var r,o,c;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),r=t.makeHeaders(),[4,t.makeRequest(e,"DELETE",r,n)];case 1:return o=i.sent(),u(o),[3,3];case 2:return c=i.sent(),a(c),[3,3];case 3:return[2]}})})})]})})},t}(),u=n(6),a=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})},c=function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=function(){function t(){}return t.getList=function(t){return a(this,void 0,void 0,function(){return c(this,function(e){return[2,o.get(u.a+"api/"+t)]})})},t.save=function(t,e,n){return a(this,void 0,void 0,function(){return c(this,function(r){return e.id?[2,o.put(u.a+"api/"+t,e).then(n)]:[2,o.post(u.a+"api/"+t,e).then(n)]})})},t}();e.a=s}}]);
//# sourceMappingURL=4.js.map