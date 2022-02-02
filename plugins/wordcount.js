// import path from "path";

export default function plugin({ content, page }) {
  const words = content.replace(/#+/g, "").split(/\s+/g).filter(Boolean);
  const wordCount = words.filter((word) => /[a-z]/i.test(word)).length;
  return { wordCount };
}
