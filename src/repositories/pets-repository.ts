import { Pet, Prisma } from "@prisma/client";

export interface FindAllParams {
  city: string
  age?: string
  size?: string
  energy_level?: string
  environment?: string
}

export interface PetsRespository {
  create(data: Prisma.PetCreateInput): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findAll(params: FindAllParams): Promise<Pet[]>;
  update(id: string, data: Prisma.OrgUpdateInput): Promise<Pet>;
  delete(id: string): Promise<Pet>;
}
