import { bigCamelize } from "@varlet/shared";

export const prefix = "var-"; // 自定义组件前缀
export const bigPreifx = bigCamelize(prefix).slice(0, -1); // 大驼峰式自定义组件前缀
export const prefixLength = prefix.length; // 前缀长度
