import{s as a}from"./request.6d5f8664.js";function e(t){return a({url:"./major/?skip=0&limit=100",method:"get",params:{major_id:t}})}function o(t){return a({url:"./major/",method:"post",data:t})}function d(t,r){return a({url:`./major/${t}`,method:"put",data:r})}function m(t){return a({url:`./major/${t}`,method:"delete"})}var n={read_datas:e,create_data:o,update_data:d,delete_data:m};export{n as m};