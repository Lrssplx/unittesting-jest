//classe filtros

const filtro = require('./filtro')
const contatos = [{"nome":"Larissa", "sobrenome": "Pereira", "nome": "Caio", "sobrenome": "Pereira"}]
const encontrado = {"nome":"Larissa", "sobrenome": "Pereira"}

describe('Filtro', ()=> {
    test('Pesquisar nome ', ()=> {
        expect(filtro(contatos,"Larissa")).toEqual(encontrado)
    })
    test('Pesquisar nome que nao existe na base', ()=> {
        expect(filtro(contatos, "xpto")).toBeUndefined()
    });
});