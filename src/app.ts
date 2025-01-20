import fastify from "fastify";
import { orgsRoutes } from "./http/controllers/orgs/routes";
import { petsRoutes } from "./http/controllers/pets/routes";
import fastifyJwt from "@fastify/jwt";

export const app = fastify();

app.register(fastifyJwt, {
    secret: 'my-secret-key', // Replace with your own secret key
})

app.register(orgsRoutes);
app.register(petsRoutes);

