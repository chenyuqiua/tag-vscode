import icons from "@varlet/icons";
import {
  languages,
  Range,
  CompletionItem,
  CompletionItemKind,
  TextDocument,
  Position,
  MarkdownString,
  type ExtensionContext,
  type CompletionItemProvider,
} from "vscode";
import { componentsMap, tagMap, type ComponentDescriptor } from "./config";
import { bigCamelize, isString, kebabCase } from "@varlet/shared";
import { ATTR_RE, LANGUAGE_IDS, PROP_NAME_RE } from "./constant";
import { bigPreifx, prefix, prefixLength } from "./config";
import { getWebTypesTags, envs } from "./env";

/** 判断是否需要禁用, 主要检测当前输入位置是否在vue文件的template标签中的标签内, 如果在需要禁用 */
export function shouldDisableProvide(
  document: TextDocument,
  position: Position
) {
  // 如果不是在vue文件中, 直接返回无需进行判断
  if (document.languageId !== "vue") {
    return false;
  }

  // 根据当前输入的位置获取从文档的开头到输入位置的偏移量
  const offset = document.offsetAt(position);
  // 使用substring方法, 根据偏移量截取输入位置到文本内容末尾的文档内容
  const lastText = document.getText().substring(offset);

  // 根据代码字符串, 判断当前输入位置是否在元素中
  const inAttrRange = lastText.indexOf(">") < lastText.indexOf("<");
  // 根据代码字符串, 判断当前输入位置是否在模板中
  const inTemplate = lastText.includes("</template>");

  // 如果当前输入位置即在元素中又在模板中，则禁用提供
  return inAttrRange && inTemplate;
}

export interface AttrProviderOptions {
  props: boolean;
  events: boolean;
}

export function registerCompletions(context: ExtensionContext) {
  const componentsProvider: CompletionItemProvider = {
    /**
     * 提供补全项, 当输入componentsMap中的key时, 触发提示
     * @param document 当前输入的文本内容(在这里是获取输入位置所在文件的代码字符串)
     * @param position 当前输入的位置
     * @returns 补全项数组
     */
    provideCompletionItems(document: TextDocument, position: Position) {
      if (shouldDisableProvide(document, position)) {
        return null;
      }

      // 最终返回的补全项数组
      const completionItems: CompletionItem[] = [];

      // 遍历componentsMap中的所有键，并为每个键生成两个补全项, name以及将name转为大驼峰命名后的name
      Object.keys(componentsMap).forEach((key) => {
        const name = `${prefix}${key}`;

        // CompletionItemKind.Field表示类型为字段
        completionItems.push(
          new CompletionItem(name, CompletionItemKind.Field),
          new CompletionItem(bigCamelize(name), CompletionItemKind.Field)
        );
      });

      return completionItems;
    },

    /**
     * 在用户选择了补全项后, 对补全项进行详细的处理或者增强
     * @param item
     * @returns 返回一个包含补全项详细信息的对象
     */
    resolveCompletionItem(item: CompletionItem) {
      // 将大驼峰转为 - 连接的字符串, 若有前缀并去除前缀, 例如: YqAppBar -> app-bar
      const name = kebabCase(item.label as string).slice(prefixLength);
      // 根据key从componentsMap获取value
      const descriptor: ComponentDescriptor = componentsMap[name];

      // 属性文本 检测是否有默认属性
      const attrText = descriptor.attrs ? " " + descriptor.attrs.join(" ") : "";
      // 元素后缀文本 判断是单标签还是双标签
      const tagSuffix = descriptor.closeSelf ? "" : `</${item.label}>`;
      // 计算光标移动的位置
      const characterDelta =
        -tagSuffix.length + (descriptor.characterDelta ?? 0);

      // 根据descriptor.closeSelf判断是否为单标签, 并合并 设置插入文本的内容
      item.insertText = `<${item.label}${attrText}`;
      item.insertText += descriptor.closeSelf ? "/>" : `>${tagSuffix}`;
      // 选择补全项后, 执行命令移动光标
      item.command = {
        title: "varlet.move-cursor",
        command: "varlet.move-cursor",
        arguments: [characterDelta],
      };

      return item;
    },
  };

  //   const iconsProvider: CompletionItemProvider = {
  //     provideCompletionItems(document, position) {
  //       const line = document.getText(
  //         new Range(
  //           new Position(position.line, 0),
  //           new Position(position.line, position.character)
  //         )
  //       );

  //       if (!PROP_NAME_RE.test(line)) {
  //         return null;
  //       }

  //       const completionItems: CompletionItem[] = icons.map(
  //         (icon: string) => new CompletionItem(icon, CompletionItemKind.Field)
  //       );

  //       return completionItems;
  //     },

  //     resolveCompletionItem(completionItem: CompletionItem) {
  //       const id = completionItem.label;
  //       const url = `${envs().iconsStatic}/${id}.png?t=${Date.now()}`;
  //       const markdownString = new MarkdownString(`[icon: ${id}](${envs().t(
  //         "documentation"
  //       )}/icon)
  // <p align="center"><img height="80" src="${url}"></p>
  // <br>
  // `);

  //       markdownString.supportHtml = true;

  //       return {
  //         ...completionItem,
  //         documentation: markdownString,
  //       };
  //     },
  //   };

  const attrProvider: CompletionItemProvider = {
    provideCompletionItems(document: TextDocument, position: Position) {
      // 获取从开头到用户输入位置的文档内容
      const text = document.getText(
        // Range对象表示了文档中的一个范围, 它由起始位置和结束位置组成
        new Range(
          new Position(0, 0), // 表示文档开头
          new Position(position.line, position.character) // 当前用户输入的行列号
        )
      );
      // 根据当前输入的位置获取从文档的开头到输入位置的偏移量
      const offset = document.offsetAt(position);
      // 使用substring方法, 根据偏移量截取输入位置到文本内容末尾的文档内容
      const lastText = document.getText().substring(offset);
      // 获取lastText中第一个字符(输入位置的下一个字符)
      const nextCharacter = lastText.charAt(0);

      if (
        nextCharacter !== " " &&
        nextCharacter !== "\n" &&
        nextCharacter !== "/" &&
        nextCharacter !== ">"
      ) {
        return null;
      }

      // 验证文档中是否有满足ATTR_RE正则的标签, 如果没有则禁用
      if (!Array.from(text.matchAll(ATTR_RE)).length) {
        return null;
      }

      let name: string; // 标签名
      let lastValue: string; // 标签值
      let startIndex: number = 0; // 标签开始位置
      // 遍历匹配的标签, 找到并记录最后一个满足匹配的标签名, 标签值和标签开始位置
      // eslint-disable-next-line no-restricted-syntax
      for (const matched of text.matchAll(ATTR_RE)) {
        name = kebabCase(matched[1] ?? matched[2]);
        lastValue = matched[0];
        startIndex = matched.index!;
      }

      const currentIndex = text.length; // 当前用户输入所在的位置
      const endIndex = startIndex! + lastValue!.length; // 最后一个满足匹配标签值的结束位置

      // 判断当前用户输入所在的位置, 是否在最后一个满足匹配的标签之间
      if (currentIndex > endIndex || currentIndex < startIndex!) {
        return null;
      }

      // 获取标签所有标签信息列表
      const tags = tagMap;

      // 找到当前标签的信息
      const tag = tags.find((tag) => tag.name === name);

      // 如果当前标签不存在, 则禁用
      if (!tag) {
        return null;
      }

      // // 记录是否输入的 @
      // const hasAt = text.endsWith("@");
      // // 记录是否输入的 :
      // const hasColon = text.endsWith(":");
      // 获取当前标签到用户输入位置的字符串, 用空格分隔
      const curString = document
        .getText()
        .substring(startIndex, endIndex)
        .split(" ");
      // 获取用户当前输入的字符片段
      const curSubString = curString[curString.length - 1];
      // 记录是否输入的 @
      const hasAt = curSubString.startsWith("@");
      // 记录是否输入的 :
      const hasColon = curSubString.startsWith(":");

      // 遍历当前标签的事件, 为每个事件创建补全项
      const events = tag.events.map((event) => {
        const item = new CompletionItem(
          {
            label: `@${event.name}`,
            description: event.description, // 补全项的描述
          },
          CompletionItemKind.Event
        );

        /**
         * 在匹配补全项时过滤文本内容, 按照event.name进行匹配, 而不是`@${event.name}`
         * 解决用户输入'@se'无法匹配到'@select'类似的问题
         */
        item.filterText = event.name;
        // 补全项的文档信息, 额外的说明或帮助文档
        item.documentation = new MarkdownString(`\
  **Event**: ${event.name}

  **Description**: ${event.description}`);
        // 判断用户是否输入了@符号, 如果没有则事件补全项插入文本时需要添加上@符号
        item.insertText = hasAt ? event.name : `@${event.name}`;

        return item;
      });

      // 遍历当前标签的属性, 为每个属性创建补全项
      const props = tag.attributes.map((attr) => {
        const item = new CompletionItem(
          {
            label: attr.name,
            description: attr.description,
          },
          CompletionItemKind.Value
        );

        // 指定属性补全项在列表中的排列顺序, 通过设置为0将当前属性的补全项排列顺序都提到前面显示
        item.sortText = "0";

        // 补全项的文档信息, 额外的说明或帮助文档
        item.documentation = new MarkdownString(`\
  **Prop**: ${attr.name}

  **Description**: ${attr.description}

  **Type**: ${attr.value.type}

  **Default**: ${attr.default}`);

        item.insertText = attr.name;

        return item;
      });

      // 如果没有输入:和@符号, 则将属性补全项和事件补全项进行合并
      // 其中如果用户输入了@符号, 表示期望提示的是事件补全项, 属性补全项无需合并
      // 反之如果用户输入了:符号, 表示期望提示的是属性补全项, 事件补全项无需合并
      return [...(hasAt ? [] : props), ...(hasColon ? [] : events)];
    },
    resolveCompletionItem(item: CompletionItem) {
      if (!isString(item.label)) {
        // 选择补全项后, 执行命令移动光标, 将光标向前移动一个
        item.command = {
          title: "varlet.move-cursor",
          command: "varlet.move-cursor",
          arguments: [-1],
        };
        // 设置补全项的文本内容, 拼接上=""
        item.insertText = `${item.insertText}=""`;
      }

      return item;
    },
  };

  // 使用componentsProvider触发自动补全
  context.subscriptions.push(
    languages.registerCompletionItemProvider(LANGUAGE_IDS, componentsProvider)
  );
  // context.subscriptions.push(
  //   languages.registerCompletionItemProvider(
  //     LANGUAGE_IDS,
  //     iconsProvider,
  //     '"',
  //     "'"
  //   )
  // );

  // 使用attrProvider当输入字符 " ", "@" 或 ":"时, 触发自动补全
  context.subscriptions.push(
    languages.registerCompletionItemProvider(
      LANGUAGE_IDS,
      attrProvider,
      " ",
      "@",
      ":"
    )
  );
}
