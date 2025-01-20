import { FastifyInstance } from "fastify";
import { create } from "./create-pet-controller";
import { getPetController } from "./get-pet-controller";
import { searchPetController } from "./search-pets-controller";
import { verifyJwt } from "../../middlewares/verify-jwt";

export async function petsRoutes(app: FastifyInstance){
    app.post('/pets', { onRequest: [verifyJwt] }, create);
    app.get('/pets/:id', getPetController);
    app.get('/pets', searchPetController);

    
}