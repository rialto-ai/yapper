import { en, type Translations } from "./en";

export const zh: Translations = {
  ...en,
  nav: {
    home: "首页",
    learn: "学习福音",
    signLanguage: "手语",
    scripture: "经文",
    printable: "可打印资源",
    teach: "教导",
    about: "关于我们",
    contact: "联系我们",
  },
  home: {
    ...en.home,
    headline:
      "耶稣基督的福音，以手语清晰地教导。",
    subheadline:
      "一个为聋人社区、教会、家庭和宣教士打造的简单多语言教学平台。",
    cta: {
      startLearning: "开始学习",
      downloadSheets: "下载教学资料",
      share: "分享此资源",
    },
  },
  common: {
    ...en.common,
    language: "语言",
    download: "下载",
    share: "分享",
    print: "打印",
    next: "下一步",
    previous: "上一步",
    completed: "已完成",
    inProgress: "进行中",
    notStarted: "未开始",
    loading: "加载中...",
    error: "发生错误",
    tryAgain: "重试",
    close: "关闭",
    open: "打开",
    save: "保存",
    cancel: "取消",
    search: "搜索",
    filter: "筛选",
    reset: "重置",
    back: "返回",
    continue: "继续",
    yes: "是",
    no: "否",
  },
};
