import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./modules/routes.js";
// import AssignmentRoutes from './assignments/routes.js';
// import "dotenv/config";


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

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
// AssignmentRoutes(app);
Lab5(app);
Hello(app);
//app.listen(process.env.PORT ||4000);
app.listen(4000);