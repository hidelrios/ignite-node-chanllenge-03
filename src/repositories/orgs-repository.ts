import { Org, Prisma } from "@prisma/client";

export interface OrgsRespository {
  create(data: Prisma.OrgCreateInput): Promise<Org>;
  findById(id: string): Promise<Org | null>;
  findAll(): Promise<Org[]>;
  update(id: string, data: Prisma.OrgUpdateInput): Promise<Org>;
  delete(id: string): Promise<Org>;
}
