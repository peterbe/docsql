export default function sizePlugin({ content, rawContent }) {
  return { textLength: content.length, fileSize: rawContent.length };
}
