import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { GetAllPetsUseCase } from "../search-pets";

export function makeGetAllPetsUseCase() {
  const petRepository = new PrismaPetsRepository();
  const useCase = new GetAllPetsUseCase(petRepository);

  return useCase;
}
