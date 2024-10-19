const container = document.querySelector(".container")
const hover = document.querySelector(".gridcell")
const btnInput = document.querySelector(".input")

btnInput.addEventListener("click",function (){
    const value = prompt("Enter the number for grid size (max 100)")
    if(value>=100 || value<1 ){
        alert("Keep the number under 100 and greater than 1")
        return
    }
    const oldGrid = document.querySelector(".masterContainer")
    if(oldGrid){
        container.removeChild(oldGrid)
    }
    const masterContainer = document.createElement("div")
    masterContainer.setAttribute("class","masterContainer")
    container.appendChild(masterContainer)
    
    function cellCreation() {
        const gridContainer = document.createElement("div")
        gridContainer.setAttribute("class", "gridContainer")
        for (let i = 1; i <= value; i++) {
            const gridCell = document.createElement("div");
            gridCell.addEventListener("mouseover", function (){
                gridCell.style.backgroundColor ="grey"
            }) 
            gridCell.setAttribute("class", "gridCell"); 
            gridContainer.appendChild(gridCell)
        }
        masterContainer.appendChild(gridContainer);
    }
    for(let i=1; i<=value;i++){
        cellCreation()
    }
})
