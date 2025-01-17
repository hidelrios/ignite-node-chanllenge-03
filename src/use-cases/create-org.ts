import { Org } from "@prisma/client";
import { OrgsRespository } from "../repositories/orgs-repository";

interface CreateOrgUseCaseRequest {
  name: string;
  author_name: string;
  email: string;
  whatsapp: string;
  password: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  latitude: number;
  longitude: number;
}

export class CreateOrgUseCase {
  constructor(private readonly orgsRepository: OrgsRespository) {}

  async execute(data: CreateOrgUseCaseRequest): Promise<Org> {
    const org = await this.orgsRepository.create(data);
    return org;
  }
}
