import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateOrgUseCase } from "../../../use-cases/create-org";
import { makeCreateOrgUseCase } from "../../../use-cases/factories/make-create-org-use-case";
import { makeCreatePetUseCase } from "../../../use-cases/factories/make-create-pet-use-case";
import { OrgNotFoundError } from "../../../use-cases/erros/org-not-found.error";

export async function create(request: FastifyRequest, response: FastifyReply) {
  const createPetSchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.string(),
    size: z.string(),
    energy_level: z.string(),
    level_of_intelligence: z.string(),
    photo: z.string(),
  });

  const data = createPetSchema.parse(request.body);

  const createPetUseCase = makeCreatePetUseCase();
  try {
    const orgId = request.user.sub;
    const { pet } = await createPetUseCase.execute({ ...data, orgId });

    return response.code(201).send(pet);
  } catch (error) {
    if (error instanceof OrgNotFoundError) {
      return response.code(404).send({ message: error.message });
    }
    return response.code(500).send({ message: "Internal server error" });
  }
}
