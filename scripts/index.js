
let textbox_add_element = document.querySelector(".textbox-of-new-elements");
let add_button = document.querySelector(".add-element-button");
let item_container = document.querySelector(".item-container");


/* On-Click for the Add-Button */
add_button.onclick = function ()
{
    /*  Test if textbox is empty or not */
    console.log("ok");
    if(textbox_add_element.value == ""){
        // alert("You must first enter an Element in the Textbox field.\n");
        let error_message = document.getElementById("total-element");
        error_message.style.display = "block";
        error_message.style.color = "red";
        error_message.innerText = "First enter an element";
        return;
    }
    if(textbox_add_element.value != ""){

        /* New Element */
        let newElement = document.createElement("div");
        newElement.className = "todo-element"
        newElement.style.height = "50px";
        newElement.style.width = "100%";
        newElement.style.borderRadius = "4px";
        newElement.style.boxShadow = "2px 2px 12px rgba(0,0,0,0.3)";
        newElement.style.backgroundColor = "white";
        newElement.style.marginTop = "2%";
        newElement.style.fontFamily = "Calibri";
        newElement.style.fontSize = "18.5px";
        newElement.style.overflow = "auto";
        newElement.style.overflowY = "Hidden";
        newElement.style.overflowX = "auto";

        newElement.onmousedown = function Check_Uncheck()
        {
            let selectedItems = Array.from(document.getElementsByClassName("todo-element"));
            for(let i=0; i<selectedItems.length; i++){
                selectedItems[i].onclick = function (){
                    if(selectedItems[i].querySelector('p').style.textDecoration == "line-through"){

                        eval(selectedItems[i].querySelector('p').style.setProperty("text-decoration","none"))
                        selectedItems[i].style.setProperty("background-color","white");
                    }
                    if(selectedItems[i].querySelector('p').style.textDecoration != "line-through"){
                        selectedItems[i].querySelector('p').style.setProperty("text-decoration","line-through");
                        selectedItems[i].style.setProperty("background-color","#e0e0e0");
                    }
                }

            }
        };

        /* Element_Content */
        let content = document.createElement("p");
        content.innerText = textbox_add_element.value.toString();
        content.style.textAlign = "center";
        content.style.position = "relative";
        /*content.style.top = "50%";
        content.style.transform = "translateY(-50%)"; */
        content.style.paddingLeft = "5%";
        content.style.paddingRight = "5%"

        newElement.appendChild(content);
        item_container.appendChild(newElement);



        textbox_add_element.value = null;
        let added_elements = Array.from(document.getElementsByClassName("todo-element")).length;
        let total_element = document.getElementById("total-element");
        total_element.innerText =  added_elements == 1 ? added_elements.toString() + " Item" : added_elements.toString() + " Items";
        total_element.style.display = "block";
        total_element.style.color = "initial";

        document.getElementById("delete-items").style.display = "flex";
        document.getElementById("mark-items").style.display = "flex";
    }
}
document.getElementById("mark-items").onclick =  function ()
{
    let selectedItem = Array.from(document.getElementsByClassName("todo-element"));
    for(var s=0; s<selectedItem.length; s++){

        if(document.getElementById("mark-items").innerText == "Mark all")
        {
            selectedItem[s].querySelector('p').style.setProperty("text-decoration","line-through");
            selectedItem[s].style.setProperty("background-color","#e0e0e0");
            if(s == selectedItem.length - 1)
                document.getElementById("mark-items").innerText = "Unmark all";
        }
        else if(document.getElementById("mark-items").innerText != "Mark all")
        {
            selectedItem[s].querySelector('p').style.setProperty("text-decoration","none");
            selectedItem[s].style.setProperty("background-color","white");
            if(s == selectedItem.length - 1)
                document.getElementById("mark-items").innerText = "Mark all";
        }
    }
}
document.getElementById("delete-items").onclick = function ()
{
    let elements_to_de_deleted = Array.from(document.querySelectorAll(".item-container div"));
    for(var x=0; x<elements_to_de_deleted.length;x++)
        elements_to_de_deleted[x].remove();
    document.getElementById("total-element").innerText = "";
    document.getElementById("delete-items").style.display = "none";
    document.getElementById("mark-items").style.display = "none";
}




