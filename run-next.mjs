import next from "next";
import polka from "polka";
import sirv from "sirv";

const { PORT = 3000, NODE_ENV } = process.env;
const serve = sirv("out");

const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  polka()
    .use(serve)
    .get("*", handle)
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
});
