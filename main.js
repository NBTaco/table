let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]




const table = document.createElement("table")
const tableHeader = document.createElement("thead")
const tableHeaderRow = document.createElement("tr")

/* Fejléc sorok létrehozása */
const tableHeaderRowLastname = document.createElement("th")
tableHeaderRowLastname.innerHTML = "Vezetéknév"

const tableHeaderRowFirstname = document.createElement("th")
tableHeaderRowFirstname.innerHTML = "Keresztnév"

const tableHeaderRowMarried = document.createElement("th")
tableHeaderRowMarried.innerHTML = "Házas"

const tableHeaderRowAnimal = document.createElement("th")
tableHeaderRowAnimal.innerHTML = "Állat"
/**/ 

tableHeaderRowFirstname.colSpan = 2
const tableBody = document.createElement("tbody")


document.body.appendChild(table)

table.appendChild(tableHeader)

tableHeader.appendChild(tableHeaderRow)

/* Fejléc sorok hozzáadása */
tableHeaderRow.appendChild(tableHeaderRowLastname)

tableHeaderRow.appendChild(tableHeaderRowFirstname)

tableHeaderRow.appendChild(tableHeaderRowMarried)

tableHeaderRow.appendChild(tableHeaderRowAnimal)
/***/

table.appendChild(tableBody)


for(const person of array){
    person.lastname
    const tr = document.createElement("tr")

    tr.addEventListener('click', function(e){
        console.log('click') 
        const selectedrow = tableBody.querySelector('.selected')
        if(selectedrow != undefined)
        {
            selectedrow.classList.remove('selected')
        }
        e.currentTarget.classList.add('selected')
    })

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
        const td2 = document.createElement("td")
        td2.innerHTML = person.firstname2
        tr.appendChild(td2)
    }

    
    const td3 = document.createElement("td")
    td3.innerHTML = person.married


    if(td3.innerHTML == "false")
    {
        td3.innerHTML = "Nem"
        tr.appendChild(td3)
    }
    else
    {
        td3.innerHTML = "Igen"
        tr.appendChild(td3)
    }


    const td4 = document.createElement("td")
    td4.innerHTML = person.pet
    tr.appendChild(td4)


}

const form = document.getElementById("form")
form.addEventListener('submit', function(e){
        e.preventDefault()
        const lastname = document.getElementById('lastname')
        const firstname1 = document.getElementById('firstname1')
        const firstname2 = document.getElementById('firstname2')
        const married = document.getElementById('married')
        const pet = document.getElementById('pet')

        const lastnameValue = lastname.value
        const firstname1Value = firstname1.value
        const firstname2Value = firstname2.value
        const marriedChecked = married.checked
        const petValue = pet.value

        array.push({
            lastname: lastnameValue,
            firstname1: firstname1Value,
            firstname2: firstname2Value,
            married: marriedChecked,
            pet: petValue,
        })

        console.log(array)




})



/*
for(const index in array) {
    array[index]
}
*/

/*
for(let i = 0; i< array.length; i++){

}
*/

