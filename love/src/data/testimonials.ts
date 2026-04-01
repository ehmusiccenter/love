/**
 * Testimonials / Reviews
 * WordPress equivalent: Custom Post Type "testimonial" or ACF Repeater on homepage
 */

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "老師既教學好認真，有要求，不得過且過。呀仔其間不斷進步，多謝老師一直以來嘅教導同提點👍🏻已推薦給不同朋友，回饋都是好評~",
    name: "高先生",
    role: "家長",
  },
  {
    text: "十分欣賞老師的專業態度，而且耐心有禮，為我小朋友不同情況提供不同的建議，非常高質素，我們跨區來旺角上課也是值得！",
    name: "鄺先生",
    role: "家長",
  },
];
