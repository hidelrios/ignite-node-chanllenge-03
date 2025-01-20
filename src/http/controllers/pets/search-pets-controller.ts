import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetAllPetsUseCase } from "../../../use-cases/factories/make-get-all-pets-use-case";

const querySchema = z.object({
    city: z.string().min(1),
    age: z.string().optional(),
    size: z.string().optional(),
    energy_level: z.string().optional(),
    environment: z.string().optional(),
  })
  
export async function searchPetController(
  request: FastifyRequest,
  response: FastifyReply
) {
  try {
    const { city, age, size, energy_level, environment } = querySchema.parse(request.query);

    const getPetUseCase = makeGetAllPetsUseCase();
    
    const { pets } = await getPetUseCase.execute({ city, age, size, energy_level, environment });

    return response.code(200).send(pets);
  } catch (error) {
    return response.code(500).send({ message: "Internal server error" });
  }
}