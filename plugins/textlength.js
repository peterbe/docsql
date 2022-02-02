export default function plugin({ content }) {
  return { textLength: content.length };
}
