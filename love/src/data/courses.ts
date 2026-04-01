/**
 * Course data
 * WordPress equivalent: Custom Post Type "course" with ACF fields
 * Each course would be a post with custom fields for emoji, tag, details[], etc.
 */

export interface CourseSummary {
  name: string;
  emoji: string;
  desc: string;
}

export interface CourseDetail extends CourseSummary {
  tag: string;
  details: string[];
}

/** Used on the homepage for the course grid */
export const courseSummaries: CourseSummary[] = [
  { name: "鋼琴班", emoji: "🎹", desc: "古典鋼琴、流行鋼琴，適合初學至演奏級" },
  { name: "小提琴", emoji: "🎻", desc: "從基礎弓法到高級演奏技巧" },
  { name: "流行鼓", emoji: "🥁", desc: "學習過百種節拍技巧，探索不同音樂風格" },
  { name: "長笛", emoji: "🎶", desc: "培養氣息控制與音色表現" },
  { name: "結他", emoji: "🎸", desc: "古典與流行結他課程" },
  { name: "聲樂", emoji: "🎤", desc: "發聲技巧與歌唱訓練" },
];

/** Used on the /courses page with full details */
export const courseDetails: CourseDetail[] = [
  {
    name: "鋼琴班",
    emoji: "🎹",
    desc: "古典鋼琴、流行鋼琴，適合初學至演奏級",
    tag: "皇牌課程",
    details: [
      "鋼琴結構及姿勢介紹",
      "左右手配合，手指靈活及耐力訓練",
      "音階、琶音訓練及不同的伴奏形式",
      "多種指法、和弦理論及和弦的彈奏要訣",
      "認識及學習不同時期的古典音樂",
      "樂理知識、閱譜訓練",
      "演奏與應試技巧",
      "安排報考英國皇家音樂學院、聖三一音樂學院考試",
    ],
  },
  {
    name: "小提琴",
    emoji: "🎻",
    desc: "從基礎弓法到高級演奏技巧",
    tag: "常規課程",
    details: [
      "小提琴結構及姿勢介紹",
      "如何選擇合適的提琴",
      "左右手配合、手指靈活及耐力訓練",
      "學習全、中和上半弓技法",
      "音色及音準訓練",
      "研究古典音樂各時期作品",
      "樂理知識、閱譜訓練",
      "小提琴保養知識",
    ],
  },
  {
    name: "流行鼓",
    emoji: "🥁",
    desc: "學習過百種節拍技巧，探索不同音樂風格",
    tag: "常規課程",
    details: [
      "流行鼓結構及姿勢介紹",
      "手部、腳部靈活及耐力訓練",
      "學習過百種節拍技巧",
      "多種複雜拍子認識",
      "深入研究藍調、搖滾、爵士等風格",
      "多種節奏感練習",
      "流行鼓保養知識",
    ],
  },
  {
    name: "長笛",
    emoji: "🎶",
    desc: "培養氣息控制與音色表現",
    tag: "常規課程",
    details: ["氣息控制訓練", "音色及音準訓練", "古典及現代作品演奏", "樂理知識", "考級準備"],
  },
  {
    name: "結他",
    emoji: "🎸",
    desc: "古典與流行結他課程",
    tag: "常規課程",
    details: ["古典結他技巧", "流行歌曲彈奏", "和弦理論", "指法訓練", "演奏技巧提升"],
  },
  {
    name: "聲樂",
    emoji: "🎤",
    desc: "發聲技巧與歌唱訓練",
    tag: "常規課程",
    details: ["發聲技巧", "呼吸控制", "歌曲演繹", "聲音保養", "舞台表演技巧"],
  },
];

/** Extra course features shown at bottom of /courses page */
export const courseFeatures = [
  {
    title: "個人化課程",
    desc: "個人學習檔案：定立長遠目標及記錄學習進程。每堂小總結：讓家長/學員和老師鼓勵同行。",
  },
  {
    title: "定期表演比賽及分享會",
    desc: "以表演及分享作為練習動力，建立表演及分享文化，互相切磋觀摩，結識志同道合的夥伴。",
  },
  {
    title: "考試合格保證",
    desc: "學員達到相應級別的能力後會獲得老師推薦保送參與考試。如最終不合格，考試報名費保留作下次考試之用。",
  },
];
