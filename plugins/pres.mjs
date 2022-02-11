export default function get({ content }) {
  return { pres: (content.match(/```/g) || []).length / 2 };
}
