// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Lista de la compra con 5 elementos
const lista_compra = ["Champu", "Desodorante", "ComidaGato", "agua", "queso"]


//Añadiendo ¨Aceite de girasol a la lista¨
const masLista = lista_compra.push("Aceite de Girasol")
console.log(lista_compra)


//Borrando elemento de la lista
const borra = lista_compra.pop("Aceite de Girasol")
console.log(lista_compra)


//Lista de peliculas
const peliculas = [
    { titulo: "El club de la lucha", director: "No se", fecha: new Date('10-01-2011') },
    { titulo: "Harry Potter 1", director: "Tuma", fecha: new Date('02-11-2012') },
    { titulo: "Malditos Bastardos", director: "Tarantino", fecha: new Date('01-01-2001') }
]


//Obteniendo datos con filter(Fechas mayores)
const fechaMayores = peliculas.filter(obj => obj.fecha > new Date('01-01-2010'))
console.log(fechaMayores)


//Obteniendo lista de directores con map
const directores = peliculas.map(direc => direc.director)
console.log(directores)

//Obteniendo titulos con map
const titulos = peliculas.map(tit => tit.titulo)
console.log(titulos)

//Juntando lista directores y titulos con concat
const trysConcat = directores.concat(titulos)
console.log(trysConcat)

//Juntando lista directores y titulos con Spread
const propagación = [...directores, ...titulos]
console.log(propagación)