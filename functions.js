/**
 * 
 * @param {'td'|'th'} celltag 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createTableElement(celltag, innerHTML, parentElement){
    const cell = document.createElement(celltag)
    cell.innerHTML = innerHTML
    parentElement.appendChild(cell)
    return cell
}


function createHTMLElement(tag, id, parent){
    const elem = document.createElement(tag)
    elem.id = id;
    parent.appendChild(elem)
}


function createHTMLElementWithParentId(tag, id, parentid){
    const parent = document.getElementById(parentid)
    if(parent != undefined)
        createHTMLElement(tag, id, parent)
}


function renderTableHeader(tr){
    const parent = document.getElementById(tr)
    createTableElement('th', 'Vezetéknév', parent)
    const keresztnev = createTableElement('th', 'Keresztnév', parent)
    keresztnev.colSpan = 2
    createTableElement('th', 'házas', parent)
    createTableElement('th', 'állat', parent)
}


function RenderTable(personlist){
    const tableBody = document.getElementById("persontbody")
    tableBody.innerHTML = ''

    for(const person of personlist){
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
        
        const td = document.createElement("td")
        td.innerHTML = person.lastname
        tr.appendChild(td)


        
        if(person.firstname2 === undefined)
        {
            const td2 = document.createElement("td")
            td2.innerHTML = person.firstname1
            tr.appendChild(td2)
            td2.colSpan = 2
        }
        else
        {
            const td2 = document.createElement("td")
            td2.innerHTML = person.firstname1
            tr.appendChild(td2)
            const tdmasodik = document.createElement("td")
            tdmasodik.innerHTML = person.firstname2
            tr.appendChild(tdmasodik)
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

        tableBody.appendChild(tr)
    }    
}
