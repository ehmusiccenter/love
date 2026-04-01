/**
 * Homepage-specific content
 * WordPress equivalent: Front Page template (front-page.php) with ACF fields
 */

export const heroContent = {
  subtitle: "EH Music Center",
  title: "卓譽音樂中心",
  tagline: "讓指尖躍動的音符，奏出專屬於你的音樂旅程",
  ctaPrimary: { label: "分店資料", href: "/contact" },
  ctaSecondary: { label: "聯絡我們", href: "https://wa.me/85268193515", external: true },
};

export const featureItems = [
  { icon: "Users" as const, title: "一對一教學", desc: "專人教授，針對每位學員的進度量身定制課程" },
  { icon: "Award" as const, title: "專業導師團隊", desc: "持有英皇/央音/港澳台名校資歷的專業導師" },
  { icon: "Music" as const, title: "多元課程", desc: "鋼琴、小提琴、長笛、結他、爵士鼓等多款樂器" },
  { icon: "MapPin" as const, title: "旺角便利位置", desc: "旺角東站步行5分鐘，環境寬敞舒適" },
];

export const sectionHeadings = {
  features: { label: "關於我們", title: "一對一音樂課程", desc: "卓譽音樂中心位於香港旺角亞皆老街100號，專注為4歲以上兒童、青少年及成人提供多元化樂器課程。" },
  courses: { label: "課程概覽", title: "多款樂器，多樣課程", desc: "學琴永遠唔會遲，4歲至成人都可以" },
  testimonials: { label: "學生評價", title: "家長及學員的評價" },
  cta: { title: "了解試堂優惠！", desc: "留下你的聯絡方法，或直接 WhatsApp 我們！" },
};
