export default function get({ page, content }) {
  return { pres: (content.match(/```/g) || []).length / 2 };
}
