import { registerCompletions } from "./completions";
import { registerCommands } from "./commands";
// import { registerHover } from "./hover";
// import { registerStatusBarItems } from "./statusBarItems";
import { type ExtensionContext, window, commands } from "vscode";

export function activate(context: ExtensionContext) {
  registerCommands(context);
  registerCompletions(context);
  // registerHover(context);
  // registerStatusBarItems();
}

export function deactivate() {}
