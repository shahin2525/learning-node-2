import express, { RequestHandler } from "express";
const app = express();

app.use(express.json());
app.use(express.text());
const logger: RequestHandler = (req, res, next) => {
  console.log(req.url, req.method, req.hostname);
  next();
};
app.get("/", logger, (req, res) => {
  console.log(req.query.name);
  res.send("Hello World! 22");
});

app.post("/", logger, (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "user created successfully",
  });
});
export default app;
