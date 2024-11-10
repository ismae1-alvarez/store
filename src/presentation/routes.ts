import { Router } from "express";
import { UserRouter } from "./users/users.routes";



export class AppRoutes {
    static get routes():Router{

        const routes = Router();

        routes.use("/api/v1/user", UserRouter.routes)

        return routes;

    };
};