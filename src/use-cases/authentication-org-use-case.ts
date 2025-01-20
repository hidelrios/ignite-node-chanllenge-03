import { compare } from "bcryptjs";
import { OrgsRespository } from "../repositories/orgs-repository";
import { InvalidCredentialsError } from "./erros/invalid-credentials.error";
import { Org } from "@prisma/client";

interface AuthenticateOrgUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateOrgUseCaseResponse {
  org: Org;
}

export class AuthenticationOrgUseCase {
  constructor(private readonly orgsRepository: OrgsRespository) {}

  async execute({
    email,
    password,
  }: AuthenticateOrgUseCaseRequest): Promise<AuthenticateOrgUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email);

    if (!org) {
      throw new InvalidCredentialsError();
    }
    const doestPasswordMatches = await compare(password, org.password);

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError();
    }

    return { org };
  }
}
