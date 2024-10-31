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

