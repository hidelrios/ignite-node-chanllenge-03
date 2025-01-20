import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetPetUseCase } from "../../../use-cases/factories/make-get-pet-use-case";
import { PetNotFoundError } from "../../../use-cases/erros/pet-not-found.error";

const routeSchema = z.object({
  id: z.string(),
});

export async function getPetController(
  request: FastifyRequest,
  response: FastifyReply
) {
  const { id } = routeSchema.parse(request.params);

  const getPetUseCase = makeGetPetUseCase();
  try {
    const { pet } = await getPetUseCase.execute({ id });

    return response.code(200).send(pet);
  } catch (error) {
    if (error instanceof PetNotFoundError) {
      return response.code(404).send({ message: error.message });
    }
    return response.code(500).send({ message: "Internal server error" });
  }
}
