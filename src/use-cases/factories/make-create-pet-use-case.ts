import { PrismaOrgsRepository } from "../../repositories/prisma/prisma-orgs-repository";
import { PrismaPetsRepository, } from "../../repositories/prisma/prisma-pets-repository";
import { CreatePetUseCase } from "../create-pets";

export function makeCreatePetUseCase() {
  const petRepository = new PrismaPetsRepository();
  const orgRepository = new PrismaOrgsRepository();
  const useCase = new CreatePetUseCase(petRepository, orgRepository);

  return useCase;
}
 