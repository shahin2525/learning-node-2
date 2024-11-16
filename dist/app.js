"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = (0, express_1.Router)();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
const logger = (req, res, next) => {
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
    }
    catch (error) {
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
    }
    catch (error) {
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
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
exports.default = app;
