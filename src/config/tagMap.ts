import { prefix } from "./config";

export interface tagDescriptor {
  name: string; // 标签名称
  attributes: attributesDescriptor[]; // 补全标签的属性
  events: Record<string, string>[]; // 补全标签的事件
  slots: Record<string, string>[]; // 标签的插槽提示
}

export interface attributesDescriptor {
  name: string; // 属性名称
  description: string; // 属性描述
  default: string; // 默认值
  value: Record<string, string>; // 属性值的描述
}

export const tagMap: tagDescriptor[] = [
  {
    name: `${prefix}action-sheet`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示动作面板",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "actions",
        description: "选项列表",
        default: "[]",
        value: {
          type: "Actions",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "动作面板标题",
        default: "请选择",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "overlay",
        description: "是否显示遮罩层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "overlay-class",
        description: "自定义遮罩层的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "overlay-style",
        description: "自定义遮罩层的 style",
        default: "-",
        value: {
          type: "object",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-action",
        description: "是否点击选项时关闭动作面板",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-overlay",
        description: "是否点击遮罩层关闭动作面板",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭动作面板",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "动作面板挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "select",
        description: "选择选项时触发",
      },
      {
        name: "open",
        description: "打开动作面板时触发",
      },
      {
        name: "opened",
        description: "打开动作面板动画结束时触发",
      },
      {
        name: "close",
        description: "关闭动作面板时触发",
      },
      {
        name: "closed",
        description: "关闭动作面板动画结束时触发",
      },
      {
        name: "click-overlay",
        description: "点击遮罩层时触发",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "actions",
        description: "选项列表",
      },
      {
        name: "title",
        description: "动作面板标题",
      },
    ],
  },
  {
    name: `${prefix}app-bar`,
    attributes: [
      {
        name: "color",
        description: "背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "标题",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title-position",
        description: "标题位置，可选值为 `left` `center` `right`",
        default: "left",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "fixed",
        description: "是否固定到顶部",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "元素 z-index",
        default: "1",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "round",
        description: "是否使用圆角",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "image",
        description: "背景图片",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "image-linear-gradient",
        description: "背景图片渐变色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "safe-area-top",
        description: "是否开启顶部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "自定义标题内容，会覆盖 `title` 的内容",
      },
      {
        name: "left",
        description: "插入至导航栏左侧的内容",
      },
      {
        name: "right",
        description: "插入至导航栏右侧的内容",
      },
      {
        name: "content",
        description: "扩展内容",
      },
    ],
  },
  {
    name: `${prefix}avatar`,
    attributes: [
      {
        name: "round",
        description: "头像是否为圆形",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "头像的尺寸，可选值为 `mini small normal large`",
        default: "normal",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "头像的背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "src",
        description: "头像的地址",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "alt",
        description: "替代文本，和 `img` 标签原生属性一致",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fit",
        description:
          "头像图片的填充模式，可选值 `fill contain cover none scale-down`",
        default: "cover",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "bordered",
        description: "头像是否带边框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "border-color",
        description: "头像边框颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading",
        description: "当开启懒加载时, 加载中显示的图片",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "error",
        description: "当开启懒加载时, 加载失败显示的图片",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "lazy",
        description: "是否开启懒加载",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "hoverable",
        description: "是否开启悬停效果",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击头像时触发",
      },
      {
        name: "load",
        description:
          "头像图片成功加载时触发（懒加载模式下失败时会多次尝试加载头像图片，只会在成功加载时触发）",
      },
      {
        name: "error",
        description:
          "头像图片失败加载时触发（懒加载模式下失败时会多次尝试加载头像图片，只会在尝试次数结束时触发）",
      },
    ],
    slots: [
      {
        name: "default",
        description: "头像内容",
      },
    ],
  },
  {
    name: `${prefix}avatar-group`,
    attributes: [
      {
        name: "offset",
        description: "组内头像的头像偏移量",
        default: "-",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "vertical",
        description: "组内头像是否垂直排列",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "头像组内容",
      },
    ],
  },
  {
    name: `${prefix}back-top`,
    attributes: [
      {
        name: "target",
        description:
          "触发滚动的对象，如果为 `undefined` 会监听距离最近的一个可滚动的祖先节点",
        default: "-",
        value: {
          type: "string | HTMLElement",
          kind: "expression",
        },
      },
      {
        name: "visibility-height",
        description: "滚动高度达到此参数值才出现",
        default: "200",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "bottom",
        description: "`BackTop` 距离页面底部的距离",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "right",
        description: "`BackTop` 距离页面右侧的距离",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "duration",
        description: "回到顶部所需时间（ms）",
        default: "300",
        value: {
          type: "number",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击按钮触发的事件",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义按钮内容",
      },
    ],
  },
  {
    name: `${prefix}badge`,
    attributes: [
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "hidden",
        description: "是否隐藏徽标",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "dot",
        description: "徽标是否为小圆点",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "value",
        description: "徽标中显示的值（当 `dot` 为 `false` 时生效）",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "max-value",
        description:
          "徽标中显示的最大值，当 `value` 大于 `max-value` 时会显示 `max-value+` (当 `value` 与 `max-value` 都存在时生效)",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "position",
        description:
          "徽标标签中有其他标签时定义徽标在其他标签上的位置，可选值 `right-top` `right-bottom` `left-top` `left-bottom`",
        default: "right-top",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "offset-x",
        description: "徽标的水平偏移量",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "徽标的垂直偏移量",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "自定义徽标颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "icon",
        description: "自定义徽标中图标的内容（优先级高于 `value`）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description: "自定义徽标中图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "徽标内容",
      },
      {
        name: "value",
        description: "徽标中显示的值",
      },
    ],
  },
  {
    name: `${prefix}bottom-navigation`,
    attributes: [
      {
        name: "v-model:active",
        description: "选中标签的名称或者索引值",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "fixed",
        description: "是否固定在底部",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "border",
        description: "是否显示外边框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "元素 z-index",
        default: "1",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "active-color",
        description: "选中标签的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-color",
        description: "未选中标签的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fab-props",
        description: "悬浮按钮属性",
        default: "{ type: 'primary' }",
        value: {
          type: "ButtonProps",
          kind: "expression",
        },
      },
      {
        name: "variant",
        description: "变体模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "before-change",
        description:
          "切换标签前的回调函数，返回假值可阻止切换，支持返回 Promise",
      },
      {
        name: "change",
        description: "切换标签时触发",
      },
      {
        name: "fab-click",
        description: "悬浮按钮点击时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "底部导航栏内容",
      },
      {
        name: "fab",
        description: "支持在组件中插入一个自定义的 fab 按钮",
      },
    ],
  },
  {
    name: `${prefix}bottom-navigation-item`,
    attributes: [
      {
        name: "name",
        description: "标签名称，作为匹配的标识符",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "icon",
        description: "图标名称，等同于 Icon 组件的 [name 属性](/#/zh-CN/icon)",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "label",
        description: "标签文字内容",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description:
          "图标的命名空间, 可扩展自定义图标库，等同于 Icon 组件的 [namespace 属性](/#/zh-CN/icon)",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "badge",
        description: "图标右上角徽标",
        default: "false",
        value: {
          type: "boolean | BadgeProps",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义标签文字内容，会覆盖 `label` 的内容",
      },
      {
        name: "icon",
        description: "自定义图标",
      },
    ],
  },
  {
    name: `${prefix}breadcrumb`,
    attributes: [
      {
        name: "separator",
        description: "分隔符",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击面包屑时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义默认内容",
      },
      {
        name: "separator",
        description: "自定义分隔符内容",
      },
    ],
  },
  {
    name: `${prefix}breadcrumbs`,
    attributes: [
      {
        name: "separator",
        description: "分隔符",
        default: "/",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击面包屑时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义默认内容",
      },
    ],
  },
  {
    name: `${prefix}button`,
    attributes: [
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "native-type",
        description: "原生类型，可选值为 `button` `submit` `reset`",
        default: "button",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "尺寸，可选值为 `normal` `mini` `small` `large`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading",
        description: "加载状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loading-radius",
        description: 'loading 的半径，只作用于 `loading-type="circle"` 时',
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "loading-type",
        description:
          "loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear`",
        default: "circle",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-size",
        description: "loading 的尺寸，可选值为 `large` `normal` `small` `mini`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-color",
        description: "loading 的颜色",
        default: "currentColor",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "auto-loading",
        description: "自动 loading 模式，方便处理异步任务",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "round",
        description: "是否是圆形按钮",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "block",
        description: "是否是块级元素",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "text",
        description: "是否是文字按钮",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "icon-container",
        description: "是否作为图标容器",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "outline",
        description: "是否使用外边框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "禁用状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否使用水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description:
          "点击按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发",
      },
      {
        name: "touchstart",
        description:
          "触摸手指压下按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "按钮内容",
      },
    ],
  },
  {
    name: `${prefix}button-group`,
    attributes: [
      {
        name: "type",
        description:
          "按钮组类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "按钮组尺寸，可选值为 `normal` `mini` `small` `large`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "mode",
        description: "按钮组模式，可选值为 `normal` `text` `outline`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "vertical",
        description: "按钮组是否竖直排列",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "按钮组海拔高度，可选值为 `true`、`false` 和`0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "按钮组背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "按钮组文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "按钮组内容",
      },
    ],
  },
  {
    name: `${prefix}card`,
    attributes: [
      {
        name: "title",
        description: "卡片标题",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "subtitle",
        description: "卡片副标题",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "description",
        description: "卡片描述",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "src",
        description: "图片地址",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "layout",
        description: "排列方式，可选值为 `row` `column`",
        default: "column",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fit",
        description:
          "填充模式，可选值为 `fill` `contain` `cover` `none` `scale-down`",
        default: "cover",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "outline",
        description: "是否使用外边框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "alt",
        description: "替代文本，和 img 标签原生属性一致",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "image-height",
        description: "图片高度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "image-width",
        description: "图片宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "floating",
        description: "是否开启全屏",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "floating-duration",
        description: "开关全屏所需时间（ms）",
        default: "250",
        value: {
          type: "number",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击卡片时触发",
      },
    ],
    slots: [
      {
        name: "image",
        description: "自定义图片",
      },
      {
        name: "title",
        description: "自定义标题",
      },
      {
        name: "subtitle",
        description: "自定义副标题",
      },
      {
        name: "description",
        description: "自定义描述",
      },
      {
        name: "floating-content",
        description: "漂浮时显示的正文内容",
      },
      {
        name: "extra",
        description: "自定义底部内容",
      },
      {
        name: "close-button",
        description: "自定义关闭按钮",
      },
    ],
  },
  {
    name: `${prefix}cell`,
    attributes: [
      {
        name: "title",
        description: "单元格标题",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "icon",
        description: "左侧图标名称",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description: "左侧图标命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "description",
        description: "单元格描述",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "border",
        description: "是否显示边框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "border-offset",
        description: "边框偏移量",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "icon-class",
        description: "图标额外类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title-class",
        description: "标题额外类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "description-class",
        description: "描述额外类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "extra-class",
        description: "右侧内容额外类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否启用水波效果",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "cell 的内容",
      },
      {
        name: "icon",
        description: "自定义左侧 icon 区域",
      },
      {
        name: "description",
        description: "描述的内容",
      },
      {
        name: "extra",
        description: "自定义右侧区域内容",
      },
    ],
  },
  {
    name: `${prefix}checkbox`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "checked-value",
        description: "选中状态的值",
        default: "true",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "unchecked-value",
        description: "未选中状态的值",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "checked-color",
        description: "选中状态的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "unchecked-color",
        description: "未选中状态的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "icon-size",
        description: "图标尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "indeterminate",
        description: "是否为不确定状态（样式优先级最高）",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(value: any) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击时触发",
      },
      {
        name: "change",
        description: "状态变更时触发",
      },
    ],
    slots: [
      {
        name: "checked-icon",
        description: "选中图标",
      },
      {
        name: "unchecked-icon",
        description: "未选中图标",
      },
      {
        name: "indeterminate-icon",
        description: "不确定状态图标",
      },
      {
        name: "default",
        description: "显示的文本",
      },
    ],
  },
  {
    name: `${prefix}checkbox-group`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "[]",
        value: {
          type: "any[]",
          kind: "expression",
        },
      },
      {
        name: "max",
        description: "最大选择的数量",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "布局方向，可选值为 `horizontal` `vertical`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(value: any[]) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "变更时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "复选框组的内容",
      },
    ],
  },
  {
    name: `${prefix}chip`,
    attributes: [
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "尺寸，可选值为 `normal` `mini` `small` `large`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "plain",
        description: "是否为空心样式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "round",
        description: "是否为圆角样式",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "block",
        description: "是否为块级样式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "closeable",
        description: "是否为可关闭纸片",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "icon-name",
        description:
          "自定义可关闭纸片的图标，必须在 `closeable` 为 `true` 的条件下才能用",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description: "自定义可关闭纸片的图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "纸片颜色",
        default: "_",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文本颜色，优先级高于 `color` 属性",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "close",
        description: "点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用",
      },
    ],
    slots: [
      {
        name: "default",
        description: "纸片内容",
      },
      {
        name: "left",
        description: "插入至纸片左侧的内容",
      },
      {
        name: "right",
        description: "插入至纸片右侧的内容",
      },
    ],
  },
  {
    name: `${prefix}col`,
    attributes: [
      {
        name: "span",
        description: "列占据的栅格数",
        default: "24",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "offset",
        description: "列偏移的栅格数",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "布局方向 可选值为 row column",
        default: "row",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "justify",
        description:
          "主轴排列方式 可选值为 `flex-start` `flex-end` `center` `space-around` `space-between`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "align",
        description:
          "交叉轴排列方式 可选值为 `stretch` `center` `flex-start` `flex-end` `baseline`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "xs",
        description: "`<768px` 响应式栅格数或者栅格属性对象",
        default: "-",
        value: {
          type: "string | number | { span?: number | string, offset?: number | string }",
          kind: "expression",
        },
      },
      {
        name: "sm",
        description: "`≥768px` 响应式栅格数或者栅格属性对象",
        default: "-",
        value: {
          type: "string | number | { span?: number | string, offset?: number | string }",
          kind: "expression",
        },
      },
      {
        name: "md",
        description: "`≥992px` 响应式栅格数或者栅格属性对象",
        default: "-",
        value: {
          type: "string | number | { span?: number | string, offset?: number | string }",
          kind: "expression",
        },
      },
      {
        name: "lg",
        description: "`≥1200px` 响应式栅格数或者栅格属性对象",
        default: "-",
        value: {
          type: "string | number | { span?: number | string, offset?: number | string }",
          kind: "expression",
        },
      },
      {
        name: "xl",
        description: "`≥1920px` 响应式栅格数或者栅格属性对象",
        default: "-",
        value: {
          type: "string | number | { span?: number | string, offset?: number | string }",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击 Col 时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "Col 内容",
      },
    ],
  },
  {
    name: `${prefix}collapse`,
    attributes: [
      {
        name: "v-model",
        description: "当前展开面板的 name",
        default: "-",
        value: {
          type: "手风琴模式： string | number<br> 非手风琴模式：string[] | number[]",
          kind: "expression",
        },
      },
      {
        name: "accordion",
        description: "是否开启手风琴模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "offset",
        description: "是否显示边距",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "divider",
        description: "是否显示分割线",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "切换面板时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "折叠面板的内容",
      },
    ],
  },
  {
    name: `${prefix}collapse-item`,
    attributes: [
      {
        name: "name",
        description: "唯一标识符，默认为索引值",
        default: "index",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "面板标题",
        default: "-",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "icon",
        description: "icon的名称",
        default: "chevron-down",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用面板",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "面板的内容",
      },
      {
        name: "title",
        description: "面板的标题",
      },
      {
        name: "icon",
        description: "自定义右侧icon",
      },
    ],
  },
  {
    name: `${prefix}collapse-transition`,
    attributes: [
      {
        name: "expand",
        description: "折叠或展开内容",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "折叠或展开的内容",
      },
    ],
  },
  {
    name: `${prefix}countdown`,
    attributes: [
      {
        name: "time",
        description: "倒计时时长（ms）",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "format",
        description: "时间格式",
        default: "HH : mm : ss",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "auto-start",
        description: "是否自动开始倒计时",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "end",
        description: "倒计时结束时触发",
      },
      {
        name: "change",
        description: "倒计时变化时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义内容",
      },
    ],
  },
  {
    name: `${prefix}counter`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "min",
        description: "最小值",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "max",
        description: "最大值",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "step",
        description: "步长",
        default: "1",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "decimal-length",
        description: "保留小数位数",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "input-width",
        description: "输入框的宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "input-text-size",
        description: "输入框的文字大小",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "button-size",
        description: "按钮大小",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description:
          "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级, 不为简单模式时生效",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disable-increment",
        description: "是否禁用增加",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disable-decrement",
        description: "是否禁用减少",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disable-input",
        description: "是否禁用输入",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "increment-button",
        description: "是否显示增加按钮",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "decrement-button",
        description: "是否显示减少按钮",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "press",
        description: "是否开启按钮长按",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "lazy-change",
        description: "是否阻止组件本身的绑定值更新操作",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "validate-trigger",
        description:
          "触发验证的时机，可选值为 `onInputChange` `onLazyChange` `onIncrement` `onDecrement`",
        default:
          "['onIncrement', 'onDecrement', 'onInputChange', 'onLazyChange']",
        value: {
          type: "ValidateTriggers[]",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(value: number) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "before-change",
        description: "变更之前(仅限 lazy-change 模式)触发",
      },
      {
        name: "change",
        description: "变更时触发",
      },
      {
        name: "increment",
        description: "增加时触发",
      },
      {
        name: "decrement",
        description: "减少时触发",
      },
    ],
    slots: [],
  },
  {
    name: `${prefix}date-picker`,
    attributes: [
      {
        name: "v-model",
        description: "被选择的日期（ISO 8601 格式，`YYYY-MM-DD` 或 `YYYY-MM`）",
        default: "undefined",
        value: {
          type: "string[] | string",
          kind: "expression",
        },
      },
      {
        name: "type",
        description: "选择器类型，可选值为 `date month year`",
        default: "date",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "allowed-dates",
        description: "限制可以选择的日期",
        default: "-",
        value: {
          type: "function",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "选择器的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title-color",
        description: "标题背景色。如果未指定，将使用 `color` 属性或默认颜色。",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "hint",
        description: "选择器提示语",
        default: "选择日期",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "false",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "button-elevation",
        description: "Button 的海拔高度",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "first-day-of-week",
        description: "设置一周的第一天，从周日的 0 开始。",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "min",
        description: "允许的最小日期/月份（ISO 8601格式）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "max",
        description: "允许的最大日期/月份（ISO 8601格式）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "show-current",
        description: "是否显示当前日期",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "multiple",
        description: "是否支持选择多个日期",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "range",
        description: "是否支持选择一个范围",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "touchable",
        description: "是否支持拖动切换面板",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "preview",
        description: "日期切换时触发",
      },
      {
        name: "change",
        description: "日期改变时触发",
      },
    ],
    slots: [
      {
        name: "year",
        description: "自定义标题中的年",
      },
      {
        name: "month",
        description: "自定义标题中的月",
      },
      {
        name: "date",
        description: "自定义标题中的日期",
      },
      {
        name: "range",
        description: "自定义标题中的范围",
      },
      {
        name: "multiple",
        description: "自定义标题中的多选",
      },
      {
        name: "actions",
        description: "自定义操作面板",
      },
    ],
  },
  {
    name: `${prefix}dialog`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示对话框",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "对话框标题",
        default: "提示",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "width",
        description: "对话框宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "message",
        description: "对话框内容",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "message-align",
        description: "对话框内容文字对齐方式，可选值 `center` `left` `right`",
        default: "left",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "confirm-button",
        description: "是否显示确认按钮",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "cancel-button",
        description: "是否显示取消按钮",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "confirm-button-text",
        description: "确认按钮文字",
        default: "确认",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "cancel-button-text",
        description: "取消按钮文字",
        default: "取消",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "confirm-button-text-color",
        description: "确认按钮文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "cancel-button-text-color",
        description: "取消按钮文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "confirm-button-color",
        description: "确认按钮背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "cancel-button-color",
        description: "取消按钮背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "dialog-class",
        description: "对话框主体区域的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "dialog-style",
        description: "对话框主体区域的 style",
        default: "-",
        value: {
          type: "object",
          kind: "expression",
        },
      },
      {
        name: "overlay",
        description: "是否显示遮罩层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "overlay-class",
        description: "自定义遮罩层的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "overlay-style",
        description: "自定义遮罩层的 style",
        default: "-",
        value: {
          type: "object",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-overlay",
        description: "是否点击遮罩层关闭弹出层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭弹窗",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "弹出层挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开对话框时触发",
      },
      {
        name: "opened",
        description: "打开对话框动画结束时触发",
      },
      {
        name: "before-close",
        description: "对话框关闭前触发，会阻止关闭",
      },
      {
        name: "close",
        description: "关闭对话框时触发",
      },
      {
        name: "closed",
        description: "关闭对话框动画结束时触发",
      },
      {
        name: "confirm",
        description: "确认时触发",
      },
      {
        name: "cancel",
        description: "取消时触发",
      },
      {
        name: "click-overlay",
        description: "点击遮罩层时触发",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "对话框主要内容",
      },
      {
        name: "title",
        description: "对话框标题",
      },
    ],
  },
  {
    name: `${prefix}divider`,
    attributes: [
      {
        name: "inset",
        description:
          "设置缩进距离，正负号可控制缩进方向，当传递 `true` 时默认缩进为 `72px`（仅限水平模式）",
        default: "false",
        value: {
          type: "boolean | number | string",
          kind: "expression",
        },
      },
      {
        name: "vertical",
        description: "是否垂直",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "dashed",
        description: "虚线",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "hairline",
        description: "0.5px 的分割线",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "description",
        description: "分割线的文字描述（仅限水平模式）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "margin",
        description: "设置分割线样式的 `margin` 属性",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "自定义分割线文字描述内容（仅限水平模式）",
      },
    ],
  },
  {
    name: `${prefix}drag`,
    attributes: [
      {
        name: "direction",
        description: "拖拽方向，可选值 `x`, `y`, `xy`",
        default: "xy",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "attraction",
        description: "吸附方向，可选值 `x`, `y`, `xy`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "boundary",
        description: "拖拽范围",
        default: "{ top: 0, bottom: 0, left: 0, right: 0 }",
        value: {
          type: "{ top?: number | string, bottom?: number | string, left?: number | string, right?: number | string }",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "拖拽元素的层级",
        default: "90",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "拖拽元素挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击组件时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "拖拽元素的内容",
      },
    ],
  },
  {
    name: `${prefix}ellipsis`,
    attributes: [
      {
        name: "v-model:expand",
        description: "是否展开",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "expand-trigger",
        description: "展开触发方式，可选值 `click`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "line-clamp",
        description:
          "最大显示行数，兼容性见 [line-clamp](https://caniuse.com/?search=line-clamp)",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "tooltip",
        description:
          "Tooltip 组件配置，用于深度定制。为了更方便使用，`sameWidth` 在这里默认为 `true`",
        default: "true",
        value: {
          type: "boolean | TooltipProps",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "文字内容",
      },
      {
        name: "tooltip-content",
        description: "Tooltip 的内容",
      },
    ],
  },
  {
    name: `${prefix}fab`,
    attributes: [
      {
        name: "v-model:active",
        description: "是否激活动作菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "show",
        description: "是否显示触发器",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "drag",
        description:
          "Drag 组件配置，用于深度定制（支持 `direction` `attraction` `boundary`）",
        default: "false",
        value: {
          type: "boolean | DragProps",
          kind: "expression",
        },
      },
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "primary",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "position",
        description:
          "触发器位置，可选值为 `left-top` `right-top` `left-bottom` `right-bottom`",
        default: "right-bottom",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "动作菜单弹出方向，可选值为 `top` `bottom` `left` `right`",
        default: "top",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "trigger",
        description: "触发方式 `click` `hover`",
        default: "click",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "触发器颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-icon",
        description: "未激活时触发器图标",
        default: "plus",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-icon",
        description: "激活时触发器图标",
        default: "window-close",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-icon-size",
        description: "未激活时触发器图标尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "active-icon-size",
        description: "激活时触发器图标尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "inactive-icon-namespace",
        description: "未激活时触发器图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-icon-namespace",
        description: "激活时触发器图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fixed",
        description:
          "是否使用固定定位，设置为 `false` 可开启绝对定位（绝对定位无法使用拖拽）",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "同 css z-index，用于自定义触发器层级",
        default: "90",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "top",
        description: "同 css top，用于自定义触发器位置",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "bottom",
        description: "同 css bottom，用于自定义触发器位置",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "left",
        description: "同 css left，用于自定义触发器位置",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "right",
        description: "同 css right，用于自定义触发器位置",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "组件挂载的元素",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击触发器时触发，在 `disabled` 状态为 `true` 时不触发",
      },
      {
        name: "open",
        description: "在激活并打开动作菜单时触发",
      },
      {
        name: "opened",
        description: "在激活并打开动作菜单的动画结束时触发",
      },
      {
        name: "close",
        description: "在失活并关闭动作菜单时触发",
      },
      {
        name: "closed",
        description: "在失活并关闭动作菜单的动画结束时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "动作菜单",
      },
      {
        name: "trigger",
        description: "触发器",
      },
    ],
  },
  {
    name: `${prefix}floating-panel`,
    attributes: [
      {
        name: "v-model:anchor",
        description: "面板初始显示锚点，如果不传则为 `anchors` 属性的第一个值",
        default: "-",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "anchors",
        description: "自定义锚点，单位为 `px`",
        default: "[100, window.innerHeight * 0.6]",
        value: {
          type: "number[]",
          kind: "expression",
        },
      },
      {
        name: "content-draggable",
        description: "是否允许拖拽面板内容",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "duration",
        description: "动画时长，单位为 `ms`",
        default: "300",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "弹出层挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "anchor-change",
        description: "移动到某个锚点后触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "自定义面板内容",
      },
    ],
  },
  {
    name: `${prefix}form`,
    attributes: [
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "scroll-to-error",
        description:
          "是否在效验不通过时滚动到不通过的表单项，可选值为 `start` `end`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "scroll-to-error-offset-y",
        description: "滚动到校验不通过的表单项的位置偏移量",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "submit",
        description: "表单提交时触发",
      },
      {
        name: "reset",
        description: "表单清空时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "表单内容",
      },
    ],
  },
  {
    name: `${prefix}form-details`,
    attributes: [
      {
        name: "error-message",
        description: "错误信息",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "extra-message",
        description: "附加信息",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "extra-message",
        description: "附加信息",
      },
    ],
  },
  {
    name: `${prefix}hover`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}icon`,
    attributes: [
      {
        name: "name",
        description: "图标名称",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "图标颜色, 只适用于字体图标",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description: "图标的命名空间, 可扩展自定义图标库",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "animation-class",
        description: "过渡动画类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "transition",
        description: "过渡动画时间（ms）",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击图标时触发",
      },
    ],
    slots: [],
  },
  {
    name: `${prefix}image`,
    attributes: [
      {
        name: "src",
        description: "图片地址",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fit",
        description: "填充模式, 可选值为 `fill contain cover none scale-down`",
        default: "fill",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "alt",
        description: "替代文本，和 `img` 标签原生属性一致",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "图片描述性文字，和 `img` 标签原生属性一致",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "referrerpolicy",
        description:
          "指示在获取资源时使用的来源地址。该属性需注意浏览器兼容性，参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "width",
        description: "图片宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "height",
        description: "图片高度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "radius",
        description: "图片圆角",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "lazy",
        description: "是否开启懒加载",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loading",
        description: "当开启懒加载时, 加载中显示的图片",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "error",
        description: "当开启懒加载时, 加载失败显示的图片",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "block",
        description: "是否是块级元素",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击图片时触发",
      },
      {
        name: "load",
        description:
          "图片成功加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在成功加载时触发)",
      },
      {
        name: "error",
        description:
          "图片失败加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在尝试次数结束时触发)",
      },
    ],
    slots: [
      {
        name: "error",
        description: "加载失败插槽",
      },
    ],
  },
  {
    name: `${prefix}image-preview`,
    attributes: [
      {
        name: "show",
        description: "是否显示",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "images",
        description: "需要预览的图片 URL 数组",
        default: "[]",
        value: {
          type: "string[]",
          kind: "expression",
        },
      },
      {
        name: "initial-index",
        description: "图片预览起始的索引",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "zoom",
        description: "双击放大倍数",
        default: "2",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "closeable",
        description: "是否显示关闭按钮",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 图片预览",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loop",
        description: "是否开启循环播放",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "indicator",
        description: "是否显示分页",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "锁定滚动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "弹出层挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "image-prevent-default",
        description: "是否禁止图片默认行为",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "切换图片时的回调函数，回调参数为当前索引",
      },
      {
        name: "open",
        description: "打开 image-preview 时触发",
      },
      {
        name: "opened",
        description: "打开 image-preview 动画结束时触发",
      },
      {
        name: "close",
        description: "关闭 image-preview 时触发",
      },
      {
        name: "closed",
        description: "关闭 image-preview 动画结束时触发",
      },
      {
        name: "long-press",
        description: "长按图片时的回调函数，回调参数为当前索引",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "indicator",
        description: "分页指示器",
      },
      {
        name: "close-icon",
        description: "关闭按钮",
      },
      {
        name: "extra",
        description: "额外插槽",
      },
    ],
  },
  {
    name: `${prefix}index-anchor`,
    attributes: [
      {
        name: "index",
        description: "索引字符",
        default: "-",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "自定义索引字符",
      },
    ],
  },
  {
    name: `${prefix}index-bar`,
    attributes: [
      {
        name: "sticky",
        description: "是否开启锚点吸顶",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "sticky-offset-top",
        description: "锚点吸顶时与顶部的距离",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "hide-list",
        description: "是否隐藏锚点列表",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "sticky-css-mode",
        description: "开启原生 `css sticky` 模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "z-index 层级",
        default: "1",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "highlight-color",
        description: "索引字符高亮颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "duration",
        description: "动画持续时间",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击索引栏的字符时触发",
      },
      {
        name: "change",
        description: "当前高亮的索引字符变化时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "索引栏内容",
      },
    ],
  },
  {
    name: `${prefix}input`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "placeholder",
        description: "占位符",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "type",
        description: "输入框类型, 可选值为 `text` `password` `number` `tel`",
        default: "text",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "输入框尺寸，可选值 `normal` `small`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "variant",
        description: "输入框风格, 可选值为 `standard` `outlined`",
        default: "standard",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "maxlength",
        description: "最大长度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "textarea",
        description: "是否是文本域",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "rows",
        description: "文本域的显示行数",
        default: "8",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "line",
        description: "是否显示分割线",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "hint",
        description: "是否使用占位符作为提示",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "focus-color",
        description: "聚焦时的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "blur-color",
        description: "失焦时的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "clearable",
        description: "是否可清除",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "resize",
        description: "文本域是否可以拖动调整尺寸",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "autofocus",
        description: "是否自动聚焦",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "validate-trigger",
        description:
          "触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput`",
        default: "['onInput', 'onClear']",
        value: {
          type: "ValidateTriggers[]",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(v: string) => any>",
          kind: "expression",
        },
      },
      {
        name: "enterkeyhint",
        description:
          "定制回车键样式，参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "focus",
        description: "聚焦时触发",
      },
      {
        name: "blur",
        description: "失焦时触发",
      },
      {
        name: "click",
        description: "点击时触发",
      },
      {
        name: "clear",
        description: "清除时触发",
      },
      {
        name: "input",
        description: "输入时触发",
      },
      {
        name: "change",
        description: "更新时触发",
      },
    ],
    slots: [
      {
        name: "prepend-icon",
        description: "前置图标",
      },
      {
        name: "append-icon",
        description: "后置图标",
      },
      {
        name: "clear-icon",
        description: "清除图标",
      },
      {
        name: "extra-message",
        description: "附加信息",
      },
    ],
  },
  {
    name: `${prefix}lazy`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}link`,
    attributes: [
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "underline",
        description: "下划线状态，可选值为 `always` `hover` `none`",
        default: "always",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "禁用状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "text-size",
        description: "文字尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "href",
        description: "原生 `href` 属性，优先级高于 `to`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "rel",
        description: "原生 `rel` 属性",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "target",
        description: "原生 `target` 属性",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "to",
        description: "`router-link` `to` 属性，将会渲染为 `<router-link />`",
        default: "-",
        value: {
          type: "string | object",
          kind: "expression",
        },
      },
      {
        name: "replace",
        description: "`router-link` `replace` 属性",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击链接时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "链接内容",
      },
    ],
  },
  {
    name: `${prefix}list`,
    attributes: [
      {
        name: "v-model:loading",
        description: "加载状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "v-model:error",
        description: "错误状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "immediate-check",
        description: "是否在组件初始化时立刻检测位置",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "finished",
        description: "是否加载完毕",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "offset",
        description: "距离底部的触发距离",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "loading-text",
        description: "加载状态文字",
        default: "加载中",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "finished-text",
        description: "加载完毕文字",
        default: "没有更多了",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "error-text",
        description: "加载失败文字",
        default: "加载失败",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "load",
        description: "触底时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "列表内容",
      },
      {
        name: "loading",
        description: "加载中内容",
      },
      {
        name: "error",
        description: "加载失败内容",
      },
      {
        name: "finished",
        description: "加载完毕内容",
      },
    ],
  },
  {
    name: `${prefix}loading`,
    attributes: [
      {
        name: "color",
        description: "loading 的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "type",
        description:
          "loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear`",
        default: "circle",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "loading 的大小，可选值为 `large` `normal` `small` `mini`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "description",
        description: "loading 的描述文字",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading",
        description: "存在内容时 loading 是否显示",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "radius",
        description: "loading 的类型为 `circle` 时，可设置其半径大小",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "`loading` 包裹着的内容",
      },
      {
        name: "description",
        description: "`loading` 的描述文字",
      },
    ],
  },
  {
    name: `${prefix}loading-bar`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}locale`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}menu`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "placement",
        description: "菜单弹出位置",
        default: "cover-top-start",
        value: {
          type: "Placement",
          kind: "expression",
        },
      },
      {
        name: "strategy",
        description: "菜单定位方式，可选值为 `absolute` `fixed`",
        default: "absolute",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "offset-x",
        description: "x 轴偏移量， 相对于菜单对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "y 轴偏移量， 相对于菜单对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "菜单挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "trigger",
        description:
          "菜单触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发",
        default: "click",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "reference",
        description:
          "菜单关联的触发元素选择器，用于指定菜单的特定子元素为触发元素",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "same-width",
        description: "是否与触发元素同宽",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "default-style",
        description: "是否启用默认样式",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "popover-class",
        description: "弹出层的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-reference",
        description: "是否在点击菜单触发元素后关闭菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 菜单",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开菜单时触发",
      },
      {
        name: "opened",
        description: "打开菜单动画结束时触发",
      },
      {
        name: "close",
        description: "关闭菜单时触发",
      },
      {
        name: "closed",
        description: "关闭菜单动画结束时触发",
      },
      {
        name: "click-outside",
        description: "点击菜单外部时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "菜单关联的触发元素",
      },
      {
        name: "menu",
        description: "菜单内容",
      },
    ],
  },
  {
    name: `${prefix}menu-option`,
    attributes: [
      {
        name: "label",
        description: "选项显示的文本",
        default: "-",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "value",
        description: "选项绑定的值",
        default: "-",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "选项显示的内容",
      },
    ],
  },
  {
    name: `${prefix}menu-select`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "-",
        value: {
          type: "any | any[]",
          kind: "expression",
        },
      },
      {
        name: "v-model:show",
        description: "是否显示菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "菜单尺寸，可选值 `normal` `mini` `small` `large`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "multiple",
        description: "是否多选",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "scrollable",
        description: "是否可滚动",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-select",
        description: "选中时是否关闭菜单(多选模式下选中选项始终不关闭菜单)",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "placement",
        description: "菜单弹出位置",
        default: "cover-top-start",
        value: {
          type: "Placement",
          kind: "expression",
        },
      },
      {
        name: "strategy",
        description: "菜单定位方式，可选值为 `absolute` `fixed`",
        default: "absolute",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "offset-x",
        description: "x 轴偏移量， 相对于菜单对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "y 轴偏移量， 相对于菜单对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "菜单挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "trigger",
        description:
          "菜单触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发",
        default: "click",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "reference",
        description:
          "菜单关联的触发元素选择器，用于指定菜单的特定子元素为触发元素",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "same-width",
        description: "是否与触发元素同宽",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "popover-class",
        description: "弹出层的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-reference",
        description: "是否在点击菜单触发元素后关闭菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开菜单时触发",
      },
      {
        name: "opened",
        description: "打开菜单动画结束时触发",
      },
      {
        name: "close",
        description: "关闭菜单时触发",
      },
      {
        name: "closed",
        description: "关闭菜单动画结束时触发",
      },
      {
        name: "click-outside",
        description: "点击菜单外部时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "菜单关联的触发元素",
      },
      {
        name: "options",
        description: "菜单选项内容",
      },
    ],
  },
  {
    name: `${prefix}option`,
    attributes: [
      {
        name: "label",
        description: "选项显示的文本",
        default: "-",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "value",
        description: "选项绑定的值",
        default: "-",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "选项显示的内容",
      },
    ],
  },
  {
    name: `${prefix}overlay`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示遮罩层",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "是否禁止滚动穿透，禁止时滚动遮罩层不会引发 body 的滚动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "遮罩层挂载的位置",
        default: "-",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭遮罩层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击遮罩层时触发",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "遮罩层内容",
      },
    ],
  },
  {
    name: `${prefix}pagination`,
    attributes: [
      {
        name: "v-model:current",
        description: "当前页数",
        default: "1",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "v-model:size",
        description: "每页条数",
        default: "10",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "total",
        description: "总条数",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "simple",
        description: "是否为简单模式",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description:
          "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级, 不为简单模式时生效",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "禁用分页",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "show-size-changer",
        description: "是否显示 `size` 切换器",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "show-quick-jumper",
        description: "是否可以快速跳转至某页",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "max-pager-count",
        description: "省略号间显示的按钮数量",
        default: "3",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "size-option",
        description: "指定每页可以显示多少条",
        default: "[10, 20, 50, 100]",
        value: {
          type: "number[]",
          kind: "expression",
        },
      },
      {
        name: "show-total",
        description: "用于显示数据总量和当前数据顺序",
        default: "-",
        value: {
          type: "function(total, range)",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "`current` 或 `size` 改变后的回调",
      },
    ],
    slots: [
      {
        name: "prev",
        description: "上一页按钮内容",
      },
      {
        name: "next",
        description: "下一页按钮内容",
      },
    ],
  },
  {
    name: `${prefix}paper`,
    attributes: [
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级",
        default: "false",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否启用水波效果",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "radius",
        description: "纸张圆角",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "width",
        description: "纸张宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "height",
        description: "纸张高度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "round",
        description: "是否启用圆形纸张",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "inline",
        description: "是否使用行内纸张",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击纸张时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "纸张内容",
      },
    ],
  },
  {
    name: `${prefix}picker`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "[]",
        value: {
          type: "(string | number)[]",
          kind: "expression",
        },
      },
      {
        name: "columns",
        description: "列内容",
        default: "[]",
        value: {
          type: "PickerColumnOption[] | PickerColumnOption[][]",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "标题",
        default: "请选择",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "text-key",
        description: "文本的属性 key",
        default: "text",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "value-key",
        description: "值的属性 key",
        default: "value",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "children-key",
        description: "级联子列表 key",
        default: "children",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "toolbar",
        description: "是否显示上方工具栏",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "cascade",
        description: "是否开启级联模式",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "option-height",
        description: "选项的高度(px rem)",
        default: "44",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "option-count",
        description: "可见的选项个数",
        default: "6",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "confirm-button-text",
        description: "确认按钮文字",
        default: "确认",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "cancel-button-text",
        description: "取消按钮文字",
        default: "取消",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "confirm-button-text-color",
        description: "确认按钮文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "cancel-button-text-color",
        description: "取消按钮文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭选择器",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "选择内容变化时触发",
      },
      {
        name: "cancel",
        description: "点击取消按钮时触发",
      },
      {
        name: "confirm",
        description: "点击确认按钮时触发",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "title",
        description: "标题内容",
      },
      {
        name: "cancel",
        description: "取消按钮内容",
      },
      {
        name: "confirm",
        description: "确认按钮内容",
      },
    ],
  },
  {
    name: `${prefix}popup`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示弹出层",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "position",
        description:
          "弹出位置，可选值为 `top` `bottom` `right` `left` `center`",
        default: "center",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "overlay",
        description: "是否显示遮罩层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "overlay-class",
        description: "自定义遮罩层的 class",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "overlay-style",
        description: "自定义遮罩层的 style",
        default: "-",
        value: {
          type: "object",
          kind: "expression",
        },
      },
      {
        name: "default-style",
        description: "是否启用默认样式",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "transition",
        description: "过渡动画的名称",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-overlay",
        description: "是否点击遮罩层关闭弹出层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭弹出层",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "弹出层挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "safe-area-top",
        description: "是否开启顶部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开弹出层时触发",
      },
      {
        name: "opened",
        description: "打开弹出层动画结束时触发",
      },
      {
        name: "close",
        description: "关闭弹出层时触发",
      },
      {
        name: "closed",
        description: "关闭弹出层动画结束时触发",
      },
      {
        name: "click-overlay",
        description: "点击遮罩层时触发",
      },
      {
        name: "key-escape",
        description: "点击键盘 ESC 时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "弹出层内容",
      },
    ],
  },
  {
    name: `${prefix}progress`,
    attributes: [
      {
        name: "mode",
        description: "`progress` 的模式，可选值为 `linear, circle`",
        default: "linear",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "primary",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "value",
        description: "`progress` 的进度",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "line-width",
        description: "`progress` 的线宽",
        default: "4",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "color",
        description:
          "`progress` 的颜色 (环形进度条设置渐变色请使用object, 渐变同svg的linearGradient元素)",
        default: "-",
        value: {
          type: "string | object",
          kind: "expression",
        },
      },
      {
        name: "track-color",
        description: "`progress` 轨道的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "label",
        description: "是否显示 `label`",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "label-class",
        description: "自定义 `label` 的类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "track",
        description: "是否显示 `progress` 的轨道",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "indeterminate",
        description: "是否显示不间断动画",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "`progress` 的尺寸（仅支持环形进度条）",
        default: "40",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "rotate",
        description: "`progress` 的原点（仅支持环形进度条）",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "自定义 label",
      },
    ],
  },
  {
    name: `${prefix}pull-refresh`,
    attributes: [
      {
        name: "v-model",
        description: "是否处于加载中状态",
        default: "-",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用下拉刷新",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "target",
        description:
          "触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点",
        default: "-",
        value: {
          type: "string | HTMLElement",
          kind: "expression",
        },
      },
      {
        name: "animation-duration",
        description: "加载结束后回到初始位置的动画时长（ms）",
        default: "300",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "success-duration",
        description: "成功提示展示时长（ms）",
        default: "2000",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "bg-color",
        description: "control 的背景颜色",
        default: "#005CAF",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "control 的颜色",
        default: "#ffffff",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "success-bg-color",
        description: "成功状态下 control 的背景颜色",
        default: "#4CAF50",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "success-color",
        description: "成功状态下 control 的颜色",
        default: "ffffff",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "refresh",
        description: "下拉刷新时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "默认插槽",
      },
    ],
  },
  {
    name: `${prefix}radio`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "checked-value",
        description: "选中状态的值",
        default: "true",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "unchecked-value",
        description: "未选中状态的值",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "checked-color",
        description: "选中状态的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "unchecked-color",
        description: "未选中状态的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "icon-size",
        description: "图标尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(value: any) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击时触发",
      },
      {
        name: "change",
        description: "状态变更时触发",
      },
    ],
    slots: [
      {
        name: "checked-icon",
        description: "选中图标",
      },
      {
        name: "unchecked-icon",
        description: "未选中图标",
      },
      {
        name: "default",
        description: "显示的文本",
      },
    ],
  },
  {
    name: `${prefix}radio-group`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "-",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "布局方向，可选值为 `horizontal` `vertical`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(value: any) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "变更时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "单选框组的内容",
      },
    ],
  },
  {
    name: `${prefix}rate`,
    attributes: [
      {
        name: "v-model",
        description: "当前分数",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "count",
        description: "评分总数",
        default: "5",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "选中时图标的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "icon",
        description: "选中整个图标时的图标样式",
        default: "star",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "empty-color",
        description: "未选中时图标的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "empty-icon",
        description: "未选中时图标的样式",
        default: "star-outline",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "图标大小，默认单位为 `px`",
        default: "-",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "gap",
        description: "图标间隔，默认单位为 `px`",
        default: "-",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "half",
        description: "是否允许半选",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "half-icon",
        description: "半选时图标的样式，只有在 `half` 为 `true` 时才有效",
        default: "star-half-full",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "namespace",
        description: "图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "empty-icon-namespace",
        description: "未选中时图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "half-icon-namespace",
        description: "半选时图标的命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁止评分",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled-color",
        description:
          "禁止评分时图标的颜色，只有在 `disabled` 为 `true` 时才有效，优先级高于 `color`、`empty-color`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否为只读状态，只读状态下无法修改评分",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "clearable",
        description: "是否允许清空",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否使用水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(v: number) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "评分改变时触发",
      },
    ],
    slots: [],
  },
  {
    name: `${prefix}result`,
    attributes: [
      {
        name: "type",
        description:
          "结果状态，可选值为 `info` `success` `warning` `error` `question` `empty`",
        default: "success",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "标题",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "description",
        description: "描述",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "image-size",
        description: "图片尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "animation",
        description: "是否开启动画，仅对 `success` 状态有效",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "image",
        description: "自定义图标",
      },
      {
        name: "title",
        description: "自定义标题",
      },
      {
        name: "description",
        description: "自定义描述",
      },
      {
        name: "footer",
        description: "自定义底部内容",
      },
    ],
  },
  {
    name: `${prefix}ripple`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}row`,
    attributes: [
      {
        name: "gutter",
        description:
          "列间距，默认为水平间距。可设置为 [垂直间距, 水平间距] (支持长度单位)",
        default: "0",
        value: {
          type: "string | number | [string | number, string | number]",
          kind: "expression",
        },
      },
      {
        name: "justify",
        description:
          "主轴对齐方式, 可选值为 `flex-start` `flex-end` `center` `space-between` `space-around`",
        default: "flex-start",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "align",
        description:
          "交叉轴对齐方式, 可选值为 `flex-start` `flex-end` `center`",
        default: "flex-start",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击 Row 时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "Row 内容",
      },
    ],
  },
  {
    name: `${prefix}select`,
    attributes: [
      {
        name: "v-model",
        description: "绑定的值",
        default: "-",
        value: {
          type: "any | any[]",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "选择框尺寸，可选值 `normal` `small`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "variant",
        description: "选择框风格, 可选值为 `standard` `outlined`",
        default: "standard",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "placeholder",
        description: "占位符",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "multiple",
        description: "是否开启多选",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "下拉菜单的垂直偏移量",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "chip",
        description: "是否使用纸片风格(仅限多选)",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "line",
        description: "是否显示分割线",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "hint",
        description: "是否使用占位符作为提示",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "text-color",
        description: "文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "focus-color",
        description: "聚焦时的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "blur-color",
        description: "失焦时的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "clearable",
        description: "是否可清除",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "validate-trigger",
        description:
          "触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose`",
        default: "['onChange', 'onClear', 'onClose']",
        value: {
          type: "ValidateTriggers[]",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(v: any | any[]) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "focus",
        description: "聚焦时触发",
      },
      {
        name: "blur",
        description: "失焦时触发",
      },
      {
        name: "click",
        description: "点击时触发",
      },
      {
        name: "clear",
        description: "清除时触发",
      },
      {
        name: "close",
        description: "关闭时触发",
      },
      {
        name: "change",
        description: "更新时触发",
      },
    ],
    slots: [
      {
        name: "selected",
        description: "选择区域的内容",
      },
      {
        name: "prepend-icon",
        description: "前置图标",
      },
      {
        name: "clear-icon",
        description: "清除图标",
      },
      {
        name: "append-icon",
        description: "后置图标",
      },
      {
        name: "arrow-icon",
        description: "箭头图标",
      },
    ],
  },
  {
    name: `${prefix}skeleton`,
    attributes: [
      {
        name: "loading",
        description: "加载状态，设置为 `true` 开启骨架屏",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "title",
        description: "是否显示标题",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "card",
        description: "是否显示卡片",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "avatar",
        description: "是否显示头像",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "fullscreen",
        description: "是否开启全屏模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "fullscreen-z-index",
        description: "全屏模式的层级",
        default: "100",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "title-width",
        description: "标题宽度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "card-height",
        description: "卡片高度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "avatar-size",
        description: "头像尺寸",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "rows",
        description: "段落行数",
        default: "3",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "rows-width",
        description: "段落每一行的宽度",
        default: "[]",
        value: {
          type: "number[] | string[]",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "非加载状态下的内容",
      },
    ],
  },
  {
    name: `${prefix}slider`,
    attributes: [
      {
        name: "v-model",
        description: "当前进度值",
        default: "0",
        value: {
          type: "number | [number, number]",
          kind: "expression",
        },
      },
      {
        name: "step",
        description: "步长，取值必须大于 0",
        default: "1",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "range",
        description: "是否启用双滑块",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "max",
        description: "最大值",
        default: "100",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "min",
        description: "最小值",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "label-visible",
        description: "是否显示标签，可选值为 `always normal never`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "label-text-color",
        description: "标签文字颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "label-color",
        description: "标签颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-color",
        description: "已激活的轨道背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "track-color",
        description: "轨道背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "track-height",
        description: "轨道的高度",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "thumb-size",
        description: "滑块的大小",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "thumb-color",
        description: "滑块的背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "显示方向，可选值为 `vertical horizontal`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description: "校验规则",
        default: "-",
        value: {
          type: "Array<(v: number | number[]) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "值改变时触发",
      },
      {
        name: "start",
        description: "开始拖动时触发",
      },
      {
        name: "end",
        description: "结束拖动时触发",
      },
    ],
    slots: [
      {
        name: "button",
        description: "自定义滑动按钮",
      },
    ],
  },
  {
    name: `${prefix}snackbar`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示 `Snackbar`",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "type",
        description:
          "`Snackbar` 类型，可选值为 `success warning info error loading`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "position",
        description: "`Snackbar`  位置，可选值为 `top center bottom`",
        default: "top",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "duration",
        description: "显示时长",
        default: "3000",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "content",
        description: "自定义内容",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "content-class",
        description: "自定义内容的类名",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "vertical",
        description: "是否启用竖直排列方式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loading-type",
        description: "Loading类型(见 `Loading` 组件)",
        default: "circle",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-size",
        description: "Loading大小(见 `Loading` 组件)",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-color",
        description: "loading颜色(见 `loading`组件)",
        default: "currentColor",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-radius",
        description: "Loading半径大小(见 `Loading` 组件)",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "lock-scroll",
        description: "是否禁止滚动穿透",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "forbid-click",
        description: "是否禁止穿透点击",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "弹出层挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开 `Snackbar` 时触发",
      },
      {
        name: "opened",
        description: "打开 `Snackbar` 动画结束时触发",
      },
      {
        name: "close",
        description: "关闭 `Snackbar` 时触发",
      },
      {
        name: "closed",
        description: "关闭 `Snackbar` 动画结束时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "`Snackbar` 内容",
      },
      {
        name: "icon",
        description: "`Snackbar` 图标",
      },
      {
        name: "action",
        description: "`Snackbar` 右边动作区",
      },
    ],
  },
  {
    name: `${prefix}space`,
    attributes: [
      {
        name: "direction",
        description: "布局方向 可选值为 `row` `column`",
        default: "row",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "justify",
        description:
          "主轴排列方式 可选值为 `flex-start` `flex-end` `center` `space-around` `space-between`",
        default: "flex-start",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "align",
        description:
          "交叉轴排列方式 可选值为 `stretch` `center` `flex-start` `flex-end` `baseline`",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description:
          "间距，可选值为 `mini` `small` `normal` `large` 或 `[垂直间距, 水平间距]` (支持长度单位)",
        default: "normal",
        value: {
          type: "string | number | [string | number, string | number]",
          kind: "expression",
        },
      },
      {
        name: "wrap",
        description: "是否超出换行",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "inline",
        description: "是否为行内元素",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "Space 内容",
      },
    ],
  },
  {
    name: `${prefix}step`,
    attributes: [
      {
        name: "active-icon",
        description: "激活状态图标",
        default: "check",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "current-icon",
        description: "当前步骤时的图标",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-icon",
        description: "未激活状态图标",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-icon-namespace",
        description: "激活状态图标命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "current-icon-namespace",
        description: "当前步骤时的图标命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-icon-namespace",
        description: "未激活状态图标命名空间",
        default: "var-icon",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "step 的内容",
      },
    ],
  },
  {
    name: `${prefix}steps`,
    attributes: [
      {
        name: "active",
        description: "当前步骤",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "direction",
        description: "显示方向，可选值为 `vertical`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-color",
        description: "激活状态颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-color",
        description: "未激活状态颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click-step",
        description: "点击步骤的标题或图标时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "steps 的内容",
      },
    ],
  },
  {
    name: `${prefix}sticky`,
    attributes: [
      {
        name: "offset-top",
        description: "吸顶距离",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "吸顶时的层级",
        default: "10",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "css-mode",
        description: "开启原生 `css sticky` 模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "禁用吸顶, 设置为 `true` 时, 元素会回到文档流中",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "scroll",
        description: "当滚动容器滚动时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "粘性布局的内容",
      },
    ],
  },
  {
    name: `${prefix}style-provider`,
    attributes: [
      {
        name: "style-vars",
        description: "CSS 变量",
        default: "{}",
        value: {
          type: "Record<string, string>",
          kind: "expression",
        },
      },
      {
        name: "tag",
        description: "自定义标签名",
        default: "div",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "组件内容",
      },
    ],
  },
  {
    name: `${prefix}styles`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}swipe`,
    attributes: [
      {
        name: "loop",
        description: "是否开启循环轮播",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "autoplay",
        description: "自动播放间隔时间 (ms)",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "duration",
        description: "切换过渡时间 (ms)",
        default: "300",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "initial-index",
        description: "初始化显示的索引",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "indicator",
        description: "是否显示指示器",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "indicator-color",
        description: "指示器颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "vertical",
        description: "是否开启垂直轮播",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "touchable",
        description: "是否可以拖动",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "navigation",
        description: "是否显示导航箭头",
        default: "false",
        value: {
          type: "boolean | string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "切换轮播时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "轮播内容",
      },
      {
        name: "prev",
        description: "上一页按钮",
      },
      {
        name: "next",
        description: "下一页按钮",
      },
      {
        name: "indicator",
        description: "指示器内容",
      },
    ],
  },
  {
    name: `${prefix}swipe-item`,
    attributes: [],
    events: [],
    slots: [
      {
        name: "default",
        description: "轮播项内容",
      },
    ],
  },
  {
    name: `${prefix}switch`,
    attributes: [
      {
        name: "v-model",
        description: "开关选中状态",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "active-value",
        description: "开关打开时的值",
        default: "true",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "inactive-value",
        description: "开关关闭时的值",
        default: "false",
        value: {
          type: "any",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loading",
        description: "是否为加载状态",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否启用水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "打开状态下的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "loading-color",
        description: "加载图标的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "close-color",
        description: "关闭状态下的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "size",
        description: "switch 的大小",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description: "校验规则",
        default: "-",
        value: {
          type: "Array<(value: any) => any>",
          kind: "expression",
        },
      },
      {
        name: "lazy-change",
        description: "是否允许触发 `before-change` 事件",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "validate-trigger",
        description: "触发验证的时机，可选值为 `onChange` `onLazyChange`",
        default: "['onChange', 'onLazyChange']",
        value: {
          type: "ValidateTriggers[]",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击时触发",
      },
      {
        name: "change",
        description: "开关状态切换时触发",
      },
      {
        name: "before-change",
        description: "变更之前(仅限 `lazy-change` 模式)触发",
      },
    ],
    slots: [],
  },
  {
    name: `${prefix}tab`,
    attributes: [
      {
        name: "name",
        description: "选项卡的名字",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用选项卡",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否启用水波效果",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description: "点击选项卡时触发, 在 `disabled` 状态为 `true` 时不触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "选项卡内容",
      },
    ],
  },
  {
    name: `${prefix}tab-item`,
    attributes: [
      {
        name: "name",
        description: "视图的名字",
        default: "number_",
        value: {
          type: "string \\",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "视图的内容",
      },
    ],
  },
  {
    name: `${prefix}table`,
    attributes: [
      {
        name: "full-width",
        description: "`table` 的宽度(包含可滚动部分)",
        default: "100%",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "scroller-height",
        description: "滚动容器高度，可用于实现纵向局部滚动，固定表头等功能",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "Table的内容",
      },
      {
        name: "footer",
        description: "Table尾部内容",
      },
    ],
  },
  {
    name: `${prefix}tabs`,
    attributes: [
      {
        name: "v-model:active",
        description: "激活的选项卡标识, 优先匹配 name，其次是 index",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "layout-direction",
        description: "选项卡组的布局方向，可选值为 `horizontal` `vertical`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "item-direction",
        description: "选项卡的布局方向，可选值为 `horizontal` `vertical`",
        default: "horizontal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "fixed-bottom",
        description: "是否固定在窗口底部, 可用做底部导航",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "选项卡的背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "active-color",
        description: "选项卡激活的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "inactive-color",
        description: "选项卡未激活的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "disabled-color",
        description: "选项卡禁用时的主要颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "indicator-color",
        description: "选项卡激活指示器的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "indicator-size",
        description: "选项卡激活指示器的尺寸",
        default: "2px",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "false",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "sticky",
        description: "是否启用粘性布局",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "sticky-css-mode",
        description: "是否启用粘性布局的原生 css sticky 模式",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "sticky-z-index",
        description: "粘性布局的层级",
        default: "10",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "safe-area",
        description: "是否开启底部安全区适配",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "offset-top",
        description: "吸顶距离",
        default: "0",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "scrollable",
        description: "是否开启滚动，可选值为 `auto` `always`",
        default: "auto",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "indicator-position",
        description: "选项卡激活指示器的位置，可选值为 `normal` `reverse`",
        default: "normal",
        value: {
          type: "string",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "click",
        description:
          "点击选项卡时触发, 在选项卡 `disabled` 状态为 `true` 时不触发",
      },
      {
        name: "change",
        description: "切换选项卡时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "选项卡组的内容",
      },
    ],
  },
  {
    name: `${prefix}tabs-items`,
    attributes: [
      {
        name: "v-model:active",
        description: "激活的选项卡的名字",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "can-swipe",
        description: "是否允许滑动切换",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "loop",
        description: "是否允许循环切换",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "default",
        description: "视图组的内容",
      },
    ],
  },
  {
    name: `${prefix}themes`,
    attributes: [],
    events: [],
    slots: [],
  },
  {
    name: `${prefix}time-picker`,
    attributes: [
      {
        name: "v-model",
        description: "被选择的时间（ISO 8601 格式，`HH:mm` 或 `HH:mm:ss`）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "format",
        description: "选择器时间格式，可选值为 `ampm 24hr`",
        default: "ampm",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "选择器的颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "title-color",
        description:
          "选择器标题栏背景色，如果未指定，将使用 `color` 属性或默认颜色。",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "hint",
        description: "选择器提示语",
        default: "选择时间",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description: "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级",
        default: "false",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "min",
        description: "允许的最小时间（ISO 8601格式）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "max",
        description: "允许的最大时间（ISO 8601格式）",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "allowed-time",
        description: "限制可以选择的时间",
        default: "-",
        value: {
          type: "AllowedTime",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "use-seconds",
        description: "是否显示秒",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "change",
        description: "时间变化时触发",
      },
    ],
    slots: [
      {
        name: "actions",
        description: "自定义操作面板",
      },
    ],
  },
  {
    name: `${prefix}tooltip`,
    attributes: [
      {
        name: "v-model:show",
        description: "是否显示",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "content",
        description: "显示的内容",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "color",
        description: "背景颜色",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "type",
        description:
          "类型，可选值为 `default` `primary` `info` `success` `warning` `danger`",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "placement",
        description: "弹出位置",
        default: "bottom",
        value: {
          type: "Placement",
          kind: "expression",
        },
      },
      {
        name: "strategy",
        description: "定位方式，可选值为 `absolute` `fixed`",
        default: "absolute",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "offset-x",
        description: "x 轴偏移量， 相对于 `Tooltip` 对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "y 轴偏移量， 相对于 `Tooltip` 对齐后的位置",
        default: "0",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "teleport",
        description: "挂载的位置",
        default: "body",
        value: {
          type: "TeleportProps['to'] | false",
          kind: "expression",
        },
      },
      {
        name: "same-width",
        description: "是否与触发元素同宽",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用 Tooltip",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "trigger",
        description:
          "触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发",
        default: "hover",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "reference",
        description: "关联的触发元素选择器，用于指定特定子元素为触发元素",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "close-on-click-reference",
        description: "是否在点击菜单触发元素后关闭菜单",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "close-on-key-escape",
        description: "是否支持键盘 ESC 关闭提示",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "open",
        description: "打开 `Tooltip` 时触发",
      },
      {
        name: "opened",
        description: "打开 `Tooltip` 动画结束时触发",
      },
      {
        name: "close",
        description: "关闭 `Tooltip` 时触发",
      },
      {
        name: "closed",
        description: "关闭 `Tooltip` 动画结束时触发",
      },
      {
        name: "click-outside",
        description: "点击菜单外部时触发",
      },
    ],
    slots: [
      {
        name: "default",
        description: "`Tooltip` 关联的触发元素",
      },
      {
        name: "content",
        description: "`Tooltip` 内容",
      },
    ],
  },
  {
    name: `${prefix}uploader`,
    attributes: [
      {
        name: "v-model",
        description: "文件列表",
        default: "[]",
        value: {
          type: "VarFile[]",
          kind: "expression",
        },
      },
      {
        name: "accept",
        description: "接受的文件类型，与原生属性一致",
        default: "image/*",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "capture",
        description: "获取文件方式，与原生属性一致",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "multiple",
        description: "是否多选文件",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "readonly",
        description: "是否只读",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "disabled",
        description: "是否禁用",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "elevation",
        description:
          "海拔高度，可选值为 `true` `false` 和 `0-24` 的等级, 不为简单模式时生效",
        default: "true",
        value: {
          type: "string | number | boolean",
          kind: "expression",
        },
      },
      {
        name: "removable",
        description: "是否可以删除",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "maxlength",
        description: "最大文件个数",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "maxsize",
        description: "最大文件大小，单位为 `byte`",
        default: "-",
        value: {
          type: "string | number",
          kind: "expression",
        },
      },
      {
        name: "previewed",
        description: "是否允许预览",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "prevent-default-preview",
        description: "阻止默认预览行为",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "ripple",
        description: "是否开启水波纹",
        default: "true",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "hide-list",
        description: "是否隐藏文件列表",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "resolve-type",
        description:
          "文件预处理类型，可选值为 `default` `file` `data-url`（`default`，图片文件包含 dataURL 编码和 File 对象，其他类型仅包含 File 对象。`file`，仅包含 File 对象。`data-url`，所有文件类型都包含 dataURL 编码和 File 对象）",
        default: "default",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "validate-trigger",
        description: "触发验证的时机， 可选值为 `onChange` `onRemove`",
        default: "['onChange', 'onRemove']",
        value: {
          type: "ValidateTriggers[]",
          kind: "expression",
        },
      },
      {
        name: "rules",
        description:
          "验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示",
        default: "-",
        value: {
          type: "Array<(v: VarFile, u: VarFileUtils) => any>",
          kind: "expression",
        },
      },
    ],
    events: [
      {
        name: "before-filter",
        description: "`before-read` 前触发，对文件列表进行过滤",
      },
      {
        name: "before-read",
        description: "文件读取前触发，返回假值阻止文件读取(支持 promise)",
      },
      {
        name: "after-read",
        description: "文件读取后触发",
      },
      {
        name: "oversize",
        description: "文件超过限制大小时触发",
      },
      {
        name: "before-remove",
        description: "文件删除前触发，返回假值阻止文件删除(支持 promise)",
      },
      {
        name: "remove",
        description: "文件删除时触发",
      },
      {
        name: "preview",
        description: "文件预览时触发",
      },
      {
        name: "click-action",
        description: "拦截上传按钮的点击行为",
      },
    ],
    slots: [
      {
        name: "default",
        description: "上传按钮内容",
      },
      {
        name: "extra-message",
        description: "附加信息",
      },
    ],
  },
  {
    name: `${prefix}watermark`,
    attributes: [
      {
        name: "width",
        description: "水印的宽度",
        default: "100",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "height",
        description: "水印的高度",
        default: "100",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "content",
        description: "文字水印的内容",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "image",
        description: "图片水印的路径，优先级比 `content` 高",
        default: "-",
        value: {
          type: "string",
          kind: "expression",
        },
      },
      {
        name: "rotate",
        description: "水印的旋转角度",
        default: "-22",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "offset-x",
        description: "水印距离容器x轴的偏移量",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "offset-y",
        description: "水印距离容器y轴的偏移量",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "gap-x",
        description: "水印水平方向的间距",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "gap-y",
        description: "水印垂直方向的间距",
        default: "0",
        value: {
          type: "number",
          kind: "expression",
        },
      },
      {
        name: "z-index",
        description: "水印的z-index",
        default: "10",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "opacity",
        description: "水印的透明度",
        default: "0.5",
        value: {
          type: "number | string",
          kind: "expression",
        },
      },
      {
        name: "fullscreen",
        description: "水印是否全屏显示",
        default: "false",
        value: {
          type: "boolean",
          kind: "expression",
        },
      },
      {
        name: "font",
        description: "文字水印的字体样式",
        default: "WatermarkFont",
        value: {
          type: "WatermarkFont",
          kind: "expression",
        },
      },
    ],
    events: [],
    slots: [
      {
        name: "content",
        description:
          "`Watermark` 内容，仅支持行内样式，不支持传入自闭合标签，优先级高于 `content` 或 `image` 属性",
      },
    ],
  },
];
