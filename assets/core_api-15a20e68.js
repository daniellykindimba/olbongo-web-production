import{g as r,_ as s,db as l,dc as i,d6 as c,dd as d,de as p,df as h,dg as g,dh as y}from"./index-d9f4923f.js";const S=async()=>{const{data:e}=await r.custom({url:"",method:"get",meta:{operation:"operationalSchool",fields:["school",{operatingTypes:l},{data:i}]}}).catch(()=>(s.error("Something Went Wrong ..."),{data:null})).then(t=>t);return e},v=async()=>{const{data:e}=await r.custom({url:"",method:"get",meta:{operation:"schoolAnalytic",fields:["analytics"]}}).catch(()=>(s.error("Something Went Wrong ..."),{data:null})).then(t=>t);return e},f=async e=>{const{data:t}=await r.custom({url:"",method:"get",meta:{operation:"regions",variables:{key:{value:e,type:"String",required:!1}},fields:["pages","total","page","hasNext","hasPrev",{results:h}]}});return t},I=async(e,t)=>{const{data:a}=await r.custom({url:"",method:"get",meta:{operation:"districts",variables:{key:{value:e,type:"String",required:!1},region:{value:t,type:"Int",required:!1}},fields:["pages","total","page","hasNext","hasPrev",{results:g}]}});return a},q=async(e,t)=>{const{data:a}=await r.custom({url:"",method:"get",meta:{operation:"wards",variables:{key:{value:e,type:"String",required:!1},district:{value:t,type:"Int",required:!1}},fields:["pages","total","page","hasNext","hasPrev",{results:y}]}});return a},b=async e=>{const{data:t}=await r.custom({url:"",method:"post",meta:{operation:"addSchoolSubject",variables:{subjectId:{value:parseInt(e.toString()),type:"Int",required:!0}},fields:["success","message",{schoolSubject:c}]}});return t},w=async(e,t="",a=25)=>{const{data:o}=await r.custom({url:"",method:"get",meta:{operation:"notSchoolSubjects",variables:{page:{value:e,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:d}]}}).catch(()=>(s.error("Something went wrong ..."),{data:null})).then(n=>n);return o},D=async e=>{const{data:t}=await r.custom({url:"",method:"post",meta:{operation:"deleteSchoolEducationLevelGroup",variables:{id:{value:parseInt(e.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(s.error("Something Went Wrong ..."),{data:null})).then(a=>a);return t},G=async(e,t="",a=20,o)=>{const{data:n}=await r.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelGroups",variables:{page:{value:e,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1},schoolEducationLevelId:{value:o,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:p}]}}).catch(()=>(s.error("Something Went Wrong ..."),{data:null})).then(u=>u);return n},W=async e=>{const{data:t}=await r.custom({url:"",method:"post",meta:{operation:"createStudentsByUploading",variables:{schoolEducationLevelId:{value:parseInt(e.school_education_level_id),type:"Int",required:!0},year:{value:e.year,type:"Int",required:!0},groupId:{value:e.groupId,type:"Int",required:!1},files:{value:e.files,type:"[Upload]",required:!0}},fields:["success","message"]}}).catch(()=>(s.error("Something Went Wrong ..."),{data:null})).then(a=>a);return t};export{b as A,D,S as G,W as U,G as a,I as b,f as c,q as d,w as e,v as f};
