import{j as o}from"./index-c2aacc94.js";import{d as i,C as d}from"./ckeditor-6362088b.js";const g=a=>o.jsx(o.Fragment,{children:o.jsx(i.CKEditor,{editor:d,config:{toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote","insertTable","undo","redo"]},data:a.data,onReady:e=>{e.editing.view.change(t=>{t.setStyle("height","200px",e.editing.view.document.getRoot())})},onChange:(e,t)=>{const n=t.getData();a.onChange(n)},onBlur:(e,t)=>{const n=t.getData();a.onChange(n)},onFocus:(e,t)=>{const n=t.getData();a.onChange(n)}})});export{g as C};
