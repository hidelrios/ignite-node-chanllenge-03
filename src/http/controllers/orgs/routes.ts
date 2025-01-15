import { FastifyInstance } from "fastify";
import { create } from "./orgs-controller";

export async function orgsRoutes(app: FastifyInstance){
    app.post('/orgs', create);
}