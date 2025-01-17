import { FastifyInstance } from "fastify";
import { create } from "./pets-controller";

export async function petsRoutes(app: FastifyInstance){
    app.post('/pets', create);
}