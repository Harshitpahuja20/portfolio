const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

require("./routes/mail")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
