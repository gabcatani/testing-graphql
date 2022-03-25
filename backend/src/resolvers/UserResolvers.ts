import { stringify } from "querystring";
import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../models/User"
import crypto from "crypto";

// query : Buscar Dados
// mutation : criar, alterar ou deletar dados

@Resolver()
export class UserResolvers {

    private data = User[stringify()] = []  //Verificar erro de tipo

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('id') id: number,
        @Arg('name') name: string
    ) {
        const user = { id: crypto.randomUUID(), name}

        this.data.push(user)

        return user
    }
}



    // @Query(() => String)
    // async name() {
    //     return 'Gabriel'
    // }
    // @Query(() => Number)
    // async age() {
    //     return 20 + 1
    // }
    // @Query(() => String)
    // async address() {
    //     return 'Guaraciaba - SC'
    // }
