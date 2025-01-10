import { prisma } from "../../lib/prisma";
import { Prisma, Org } from "@prisma/client";
import { OrgsRespository } from "../orgs-repository";

export class PrismaOrgsRepository implements OrgsRespository {
  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org = await prisma.org.create({
      data: data,
    });

    return org;
  }
  async findById(id: string): Promise<Org | null> {
    const org = await prisma.org.findUnique({
      where: {
        id: id,
      },
    });
    return org;
  }
  async findAll(): Promise<Org[]> {
    const orgs = await prisma.org.findMany();
    return orgs;
  }
  update(id: string, data: Prisma.OrgUpdateInput): Promise<Org> {
    const org = prisma.org.update({
      where: {
        id: id,
      },
      data: data,
    });

    return org;
  }
  async delete(id: string): Promise<Org> {
    return await prisma.org.delete({
        where: {
          id: id,
        },
      });
    
  }
}
