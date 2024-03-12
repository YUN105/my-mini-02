//改成commomJS寫法
const express = require("express");
const resolve = require("path").resolve;
// const __dirname = import.meta.dirname;

const app = express();
app.use(express.static(resolve(__dirname, "public")));

app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);
app.use(
  "/fontawesome",
  express.static(
    resolve(__dirname, "node_modules/@fortawesome/fontawesome-free")
  )
);
app.use(
  "/jquery",
  express.static(resolve(__dirname, "node_modules/jquery/dist"))
);
app.get("/", (req, res) => {
  res.send("網站首頁");
});

app.listen(3000, () => {
  console.log("伺服器已啟動於 http://localhost:3000");
});
