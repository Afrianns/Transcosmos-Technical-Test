// slider
$(document).ready(function(){
    $('#slider-m-wrapper').slick({
        dots: true,
        prevArrow: $('.slick-prev'),
        appendDots: $("#dots-wrapper"),
        nextArrow: $('.slick-next'),
    });
})

// toggle menu
// header version
const buttonDropdown = document.getElementById("toggle-dropdown-menu");
const menuDropdown = document.getElementById("menu-dropdown")

// footer version
const buttonDropdownFooter = document.getElementById("toggle-dropdown-menu-footer");
const menuDropdownFooter = document.getElementById("menu-dropdown-footer")

// header
buttonDropdown.addEventListener("click", () => {
    menuDropdown.classList.toggle('show-menu-dropdown')

    if(menuDropdown.classList.contains("show-menu-dropdown")){
        buttonDropdown.innerHTML = "Close"
    } else{
        buttonDropdown.innerHTML = "Menu"
    }
})

// footer 
buttonDropdownFooter.addEventListener("click", () => {
    menuDropdownFooter.classList.toggle('show-menu-dropdown')

    if(menuDropdownFooter.classList.contains("show-menu-dropdown")){
        buttonDropdownFooter.innerHTML = "Close"
    } else{
        buttonDropdownFooter.innerHTML = "Menu"
    }
})


// tabbing function
const brandingLink = document.getElementById("branding-link")
const designLink = document.getElementById("design-link")
const marketingLink =document.getElementById("marketing-link")

const brandingContent = document.getElementById("branding-content")
const designContent = document.getElementById("design-content")
const marketingContent =document.getElementById("marketing-content")


brandingLink.addEventListener("click", (e) => {
    handleChangeTab(brandingContent, brandingLink)
})

designLink.addEventListener("click", (e) => {
    handleChangeTab(designContent, designLink)
})

marketingLink.addEventListener("click", (e) => {
    handleChangeTab(marketingContent, marketingLink)
})


function handleChangeTab(content, link) {
    [brandingLink, designLink, marketingLink].forEach(el => {
        el.classList.remove("active-link")
    });

    [brandingContent, designContent, marketingContent].forEach(el => {
        el.classList.remove("show-component")
    });

    content.classList.add("show-component")
    link.classList.add("active-link")
}