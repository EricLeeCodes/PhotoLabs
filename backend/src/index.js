const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

app.get("/api/photos", (req, res) => {
  res.json(data);
});

app.get("/api/topics", (req, res) => {
  res.json(data);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

