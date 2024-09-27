const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]


const table = document.createElement("table")
const tableHeader = document.createElement("thead")
const tableHeaderRow = document.createElement("tr")
const tableHeaderRowLastname = document.createElement("th")
tableHeaderRowLastname.innerHTML = "Vezetéknév"
const tableHeaderRowFirstname = document.createElement("th")
tableHeaderRowFirstname.innerHTML = "Keresztnév"
tableHeaderRowFirstname.colSpan = 2
const tableBody = document.createElement("tbody")


document.body.appendChild(table)
table.appendChild(tableHeader)
tableHeader.appendChild(tableHeaderRow)
tableHeaderRow.appendChild(tableHeaderRowLastname)
tableHeaderRow.appendChild(tableHeaderRowFirstname)
table.appendChild(tableBody)


for(const person of array){
    person.lastname
    const tr = document.createElement("tr")
    tr.innerHTML = person.lastname
    tableBody.appendChild(tr)

    const td = document.createElement("td")
    td.innerHTML = person.firstname1
    tr.appendChild(td)

    if(person.firstname2 === undefined)
    {
        td.colSpan = 2
    }
    else
    {
        const td2 = document.createElement("td2")
        td2.innerHTML = person.firstname2
        tr.append(td2)
    }
}


/*
for(const index in array) {
    array[index]
}
*/

/*
for(let i = 0; i< array.length; i++){

}
*/