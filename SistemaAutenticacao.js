/*
Ser autenticável significa ter o método autenticar

duck typing - o que interessa é se o objeto tem a propriedade e/ou método que se quer usar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}