const regex = /💩/g;
export default function countCocoIceMentions({ data, content }) {
  const inTitle = (data.title.match(regex) || []).length;
  const inBody = (content.match(regex) || []).length;
  return {
    chocolateIcecreamMentions: inTitle + inBody,
  };
}
