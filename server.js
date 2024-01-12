import serverConfig from "./config/server.config.js";
import env from "dotenv";
import fileUpload from 'express-fileupload';
import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes/index.js"
import path from "path";
import db from "./db/index.js";
env.config({
    path: serverConfig.dev ? serverConfig.devENV : serverConfig.prodENV,
});
const port = process.env.PORT;
(async () => {
    try {
        const app = express();
        app.use(cors());
        app.set('views', path.join(path.resolve(), 'views'));
        app.use(express.json({ limit: "300mb" }));
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(express.static(serverConfig.buildPath));
        app.use(fileUpload());
        app.use(express.static(path.join(path.resolve(), 'public')));
        app.use(routes);
        app.listen(port, () => console.log(`Server lisning at port : - ${port}`))
        await db()
    }
    catch (err) {
        console.warn('An error occure white running the app : -');
        console.error("err :-", err);
        process.exit(1);
    }
})()


