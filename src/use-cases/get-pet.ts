import { Pet } from "@prisma/client";
import { PetsRespository } from "../repositories/pets-repository";
import { PetNotFoundError } from "./erros/pet-not-found.error";

interface GetPetUseCaseRequest {
  id: string;
}
interface GetPetUseCaseResponse {
  pet: Pet | null;
}

export class GetPetUseCase {
  constructor(private petRepository: PetsRespository) {}

  async execute({ id }: GetPetUseCaseRequest): Promise<GetPetUseCaseResponse> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new PetNotFoundError();
    }
    return { pet };
  }
}
