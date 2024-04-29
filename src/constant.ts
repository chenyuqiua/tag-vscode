import { prefix, bigPreifx } from "./config";

export const LANGUAGE_IDS = [
  "vue",
  "typescript",
  "javascript",
  "javascriptreact",
  "typescriptreact",
];
export const TAG_LINK_RE = /(?<=<var-)([\w-]+)/g;
export const TAG_BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g;
// https://regexr.com/77ppf
// export const ATTR_RE = /(?:<(var-[\w-]+)[^>/]*)|(?:<(Var[\w-]+)[^>/]*)/g
// 这个正则表达式用于匹配 HTML标签名称，是否以 prefix 或 bigPreifx 开头
export const ATTR_RE = new RegExp(
  `(?:<(${prefix}[\\w-]+)[^>/]*)|(?:<(${bigPreifx}[\\w-]+)[^>/]*)`,
  "g"
);
export const PROP_NAME_RE = /name=['"][\w-]*/;
