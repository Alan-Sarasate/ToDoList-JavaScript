const textInput = document.querySelector("#input-text")
const addBtn = document.querySelector("#btn")
const elementsDiv = document.querySelector("#elementos")

function criarElemento (texto){
    if(texto){
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const check = document.createElement("input")
        const removeBtn = document.createElement("button")
        const img = document.createElement("img")
        div.classList.add("elemento")
        check.type = "checkbox"
        check.classList.add("checkbox")
        removeBtn.classList.add("btn-excluir")
        img.src = "src/removeIcon.png"
        img.alt = "remover"
        img.classList.add("remove-img")

        removeBtn.addEventListener("click", ()=>{
            div.remove()
        })

        check.addEventListener("click", ()=>{
            if(check.checked){
                div2.style.color = "#bbb"
                div2.style.textDecoration = "line-through"
            }else{
                div2.style.color = "#000"
                div2.style.textDecoration = "none"
            }
        })

        removeBtn.append(img)
        div2.append(check, texto)
        div.append(div2, removeBtn)

        elementsDiv.append(div)
    }
}

addBtn.addEventListener("click", ()=>{
    const text = textInput.value
    criarElemento(text)

    textInput.value = ""

})



