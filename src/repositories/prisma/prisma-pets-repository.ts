import { prisma } from "../../lib/prisma";
import { Prisma, Org, Pet } from "@prisma/client";
import { PetsRespository } from "../pets-repository";

export class PrismaPetsRepository implements PetsRespository {
  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data: data,
    });

    return pet;
  }
  async findById(id: string): Promise<Pet | null> {
    const pet = await prisma.pet.findUnique({
      where: {
        id: id,
      },
    });
    return pet;
  }
  async findAll(): Promise<Pet[]> {
    const orgs = await prisma.pet.findMany();
    return orgs;
  }
  update(id: string, data: Prisma.PetUpdateInput): Promise<Pet> {
    const pet = prisma.pet.update({
      where: {
        id: id,
      },
      data: data,
    });

    return pet;
  }
  async delete(id: string): Promise<Pet> {
    return await prisma.pet.delete({
      where: {
        id: id,
      },
    });
  }
}
