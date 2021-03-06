/**
 * 
 * 包含了n个接口请求的函数的模块
 * 函数返回值为promise对象
 */
import ajax from './ajax';

//注册接口
export const reqRegister = (user)=>ajax('/register',user,'POST')

//登录接口
export const reqLogin = ({username,password}) =>ajax('/login',{username,password},'POST')

//完善用户信息接口
export const reqUpdateUser = (user)=>ajax('/update',user,'POST');

//获取用户信息接口
export const reqUser = ()=>ajax('/user');

//获取用户列表接口
export const reqUserList = (userType)=>ajax('/userlist',{type:userType},'POST');

//获取消息列表
export const reqChatList = ()=>ajax('/msglist');

//修改指定消息为已读
export const reqReadMsg = (from)=>ajax('/readMsg',{from},'POST')