const menuDropdown = document.getElementById("menuDropdown")

const hasClass = menuDropdown.classList

const dropdown = () => {
    if(hasClass.contains("hide")){
        hasClass.remove("hide")
    }else{
        hasClass.add("hide")
    }
}