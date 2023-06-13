# Value Objects

## Definição

"Quando você se preocupa apenas com os atributos de um elemento de um
model, classifique isso como um Value Object"

"Trate o Value Object como imutável."

> Evans, Eric. Domain-Driven Design (p. 99). Pearson Education. Kindle Edtion.

Ou seja é um conjunto de atributos que se alterados perdem sentido de ser. Exemplo, o Endereço é um objeto que pode ser composto por Pais, Estado, Cidade, Rua, Número, CEP, etc. Caso um destes valores se alterem o objeto deixa de representar algo e passa a representar algo totalmente novo. Mesmo que se mude para uma casa na mesma rua você ,mudou de endereço e esse novo endereço deverá ser representado por um novo objeto.
