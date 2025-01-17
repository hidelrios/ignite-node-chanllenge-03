import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateOrgUseCase } from "../../../use-cases/create-org";
import { makeCreateOrgUseCase } from "../../../use-cases/factories/make-create-org-use-case";
import { makeCreatePetUseCase } from "../../../use-cases/factories/make-create-pet-use-case";

export async function create(request: FastifyRequest, response: FastifyReply) {
  const createPetSchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.string(),
    size: z.string(),
    energy_level: z.string(),
    level_of_intelligence: z.string(),
    photo: z.string(),
    orgId: z.string(),
  });

  const data = createPetSchema.parse(request.body);

  const createPetUseCase = makeCreatePetUseCase();

  await createPetUseCase.execute(data);

  return response.code(201).send({ message: "Pet created successfully" });
}
