import { PrismaOrgsRepository } from "../../repositories/prisma/prisma-orgs-repository";
import { AuthenticationOrgUseCase } from "../authentication-org-use-case";

export function makeAuthenticateOrgUseCase() {
    return new AuthenticationOrgUseCase(new PrismaOrgsRepository())
  }