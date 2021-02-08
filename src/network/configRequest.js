import { request } from "./request";

export function get(url, args) {
  return request({
    url: url + ".cgi",
    //method: "get",
    method: "post",
    //params: { args },
    data: args,
  });
}
export function post(url, args) {
  //var qs=require('qs');
  // console.log(args.example1.Value)
  //var dt=qs.stringify(args)
  return request({
    // headers: {'content-type': 'application/x-www-form-urlencoded'},
    url: url + ".cgi",
    method: "post",
    data: args,
  });
}

export function monitor(args) {
  return request({
    url: "monitor.cgi",
    //method: "get",
    method: "post",
    //params: { args },
    data: args,
  });
}
export function uploadFile(args) {
  return request({
    url: "fileUpload.cgi",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data", //请求头
    },
    data: args,
  });
}
export function downloadFile() {
  return request({
    url: "downloadFile.cgi",
    method: "post",
  });
}
