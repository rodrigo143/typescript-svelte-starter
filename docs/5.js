(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(t,e,n){"use strict";n.r(e),n.d(e,"fielddata",function(){return o}),n.d(e,"columndata",function(){return a}),n.d(e,"actionColumn",function(){return i}),n.d(e,"initialData",function(){return d}),n.d(e,"department",function(){return r});var o=[{label:"ID",field:"id",component:"text",readOnly:!0,row:0,col:"md-6"},{label:"Name",field:"name",component:"text",required:!0,row:1,col:"md-6"},{label:"Group Name",field:"groupName",component:"text",row:2,col:"md-6"}],a=o.map(function(t){return Object.assign({},t)}),i={label:"Edit",field:"field",component:"action",className:"secondary"};a.push(i);var d={list:[],showModal:!1,selectedItem:null,path:"department",title:"Departments",fielddata:o,columndata:a},r={oncreate:function(t){i.action=function(e){return t.edit(e)},t.getList()}}}}]);