import { Org, Pet } from "@prisma/client";
import { OrgsRespository } from "../repositories/orgs-repository";
import { PetsRespository } from "../repositories/pets-repository";
import { OrgNotFoundError } from "./erros/org-not-found.error";

interface CreatePetUseCaseRequest {
  name: string;
  about: string;
  age: string;
  size: string;
  energy_level: string;
  level_of_intelligence: string;
  photo: string;
  orgId: string;
}
interface CreatePetUseCaseResponse {
  pet: Pet;
}

export class CreatePetUseCase {
  constructor(
    private readonly petsRespository: PetsRespository,
    private readonly orgsRespository: OrgsRespository
  ) {}

  async execute(
    data: CreatePetUseCaseRequest
  ): Promise<CreatePetUseCaseResponse> {
    const org = await this.orgsRespository.findById(data.orgId);
    if (!org) {
      throw new OrgNotFoundError();
    }
    const pet = await this.petsRespository.create(data);
    return { pet };
  }
}
