import{a as t}from"./axios.7aed06b8.js";const r=t.create({baseURL:"http://127.0.0.1:8000/api/",timeout:5e3});r.interceptors.request.use(e=>e,e=>(console.log(e),Promise.reject()));r.interceptors.response.use(e=>{if(e.status===200)return e.data;Promise.reject()},e=>(console.log(e),Promise.reject()));export{r as s};
