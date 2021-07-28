require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
