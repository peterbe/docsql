export default function commonheadings({ content }) {
  const h2s = (content.match(/^##\s/gm) || []).length;
  const h3s = (content.match(/^###\s/gm) || []).length;
  return {
    h2s,
    h3s,
  };
}
