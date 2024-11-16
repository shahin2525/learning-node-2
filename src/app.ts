import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  Router,
} from "express";
const app = express();

app.use(express.json());
app.use(express.text());
const userRouter = express.Router();
const courseRouter = Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

const logger: RequestHandler = (req, res, next) => {
  console.log(req.url, req.method, req.hostname);
  next();
};
courseRouter.post("/create-course", (req, res, next) => {
  try {
    const data = req.body;
    // res.json({
    //   success: true,
    //   message: "course created successfully",
    //   data: data,
    // });
    res.send(somthing);
  } catch (error) {
    next(error);
  }
});
userRouter.post("/create-user", (req, res, next) => {
  try {
    const data = req.body;
    res.json({
      success: true,
      message: "user created successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/", logger, (req, res) => {
  // console.log(req.query.name);
  res.send("Hello World! 22");
});

app.post("/", logger, (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "user created successfully",
  });
});
app.all("*", (req, res) => {
  res.json({
    success: false,
    message: "not found route",
  });
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
export default app;
