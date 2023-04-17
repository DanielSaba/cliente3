import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import  questionsRoutes  from "./routes/question.routes.js";
import clientRoutes from "./routes/client.routes.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);


const __dirname = path.dirname(__filename);


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
//app.use("/", indexRoutes);
app.use("/", questionsRoutes);
app.use("/", clientRoutes);
//app.use("/api", employeesRoutes);

//static files

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
