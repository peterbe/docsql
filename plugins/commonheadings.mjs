// import path from "path";

export default function plugin({ page, content }) {
  const h2s = (content.match(/^##\s/gm) || []).length;
  const h3s = (content.match(/^###\s/gm) || []).length;
  return {
    h2s,
    h3s,
  };
}
