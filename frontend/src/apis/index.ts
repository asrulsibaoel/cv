import { get, post } from "@/request";
import axios from "axios";
import type { SignUp, Login } from "./model";

/** 注册 */
export const userSignUp = (data: SignUp): Promise<any> => post("/user/signup", { ...data });

/** 登录 */
export const userLogin = (data: Login): Promise<any> => post("/user/login", { ...data });

/** 登出 */
export const userLogout = (): Promise<any> => post("/user/logout");


/** 得到菜单 */
export const getMenus = (): Promise<any> => get("/user/menu");

/** 得到所有用户 */
export const getUsers = (): Promise<any> => get("/user/users");

/**
 * 仓库获取语言详情
 */
export const getLangList = async (): Promise<any> => {
  // https://api.github.com/repos/zxiaosi/Vue3-FastAPI/commits?sha=master&since=2022-07-01T07:06:23Z
  return await axios.get("https://api.github.com/repos/zxiaosi/Vue3-FastAPI/commits?per_page=100");
};