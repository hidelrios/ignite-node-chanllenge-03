import { Pet } from "@prisma/client";
import { PetsRespository } from "../repositories/pets-repository";
import { PetNotFoundError } from "./erros/pet-not-found.error";

interface SearchPetsUseCaseRequest {
  city: string;
  age?: string;
  size?: string;
  energy_level?: string;
  environment?: string;
}

interface SearchPetsUseCaseResponse {
  pets: Pet[];
}
export class GetAllPetsUseCase {
  constructor(private petRepository: PetsRespository) {}

  async execute(
    params: SearchPetsUseCaseRequest
  ): Promise<SearchPetsUseCaseResponse> {
    const pets = await this.petRepository.findAll(params);
    return { pets };
  }
}
