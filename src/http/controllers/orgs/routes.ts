import { FastifyInstance } from "fastify";
import { create } from "./create-org-controller";
import { authenticateOrgController } from "./authentication-org-controller";

export async function orgsRoutes(app: FastifyInstance){
    app.post('/orgs', create);
    app.post('/authentication', authenticateOrgController);
}