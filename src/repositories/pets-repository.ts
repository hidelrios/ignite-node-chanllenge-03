import { Pet, Prisma } from "@prisma/client";

export interface PetsRespository {
  create(data: Prisma.PetCreateInput): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findAll(): Promise<Pet[]>;
  update(id: string, data: Prisma.OrgUpdateInput): Promise<Pet>;
  delete(id: string): Promise<Pet>;
}
