import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateOrgUseCase } from "../../../use-cases/create-org";
import { makeCreateOrgUseCase } from "../../../use-cases/factories/make-create-org-use-case";

export async function create(request: FastifyRequest, response: FastifyReply) {
  const createOrgSchema = z.object({
    name: z.string(),
    author_name: z.string(),
    email: z.string().email(),
    whatsapp: z.string(),
    password: z.string(),
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90;
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180;
    }),
  });

  const data = createOrgSchema.parse(request.body);

  const createOrgUseCase = makeCreateOrgUseCase();

  await createOrgUseCase.execute(data);

  return response.code(201).send({ message: "Org created successfully" });
}
