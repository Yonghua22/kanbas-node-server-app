import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import mongoose from "mongoose";
// import AssignmentRoutes from './assignments/routes.js';
import session from "express-session";
import "dotenv/config";

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://a5--aesthetic-smakager-441fa4.netlify.app'];

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
}
app.use(express.json(sessionOptions));
CourseRoutes(app);
ModuleRoutes(app);
app.use(express.json());
// AssignmentRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
//app.listen(process.env.PORT ||4000);
app.listen(4000);
//app.listen(process.env.PORT ||4000);