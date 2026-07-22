
const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")
// slickPrev

$(document).ready(function(){
    $('#slider-m-wrapper').slick({
        dots: true,
        prevArrow: $('.slick-prev'),
        appendDots: $("#dots-wrapper"),
        nextArrow: $('.slick-next'),
        responsive: [
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            // },
            // {
            // breakpoint: 600,
            // settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            // }
            // },
            // {
            // breakpoint: 480,
            // settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            // }
        }]
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


// tabbing functional
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




// // slider function

// // batch
// const firstBatch = document.getElementById("first-batch");
// const secondBatch = document.getElementById("second-batch");

// let currentStep = 0

// const dots = document.querySelectorAll("#dots-wrapper .dot");


// nextButton.addEventListener("click", (e) => {

//     let step = -1250

//     // -3750, "2500px", step, -1250
//     let breakpointFirstBatch = -3750
//     let resetPosFirstBatch = "2500px"
//     let resetStepFirstBatch = -1250

//     // -7500, "-1250px", step, -1250
//     let breakpointSecondBatch = -7500
//     let resetPosSecondBatch = "-1250px"
//     let resetStepSecondBatch = -1250
    
//     if (window.matchMedia("(max-width: 900px)").matches) {
//         // resetToInitialPos(firstBatch, -625, "2500px", step, 625, "next")
//         // resetToInitialPos(secondBatch, -1875, "1250px", step, 625, "next")

//         step = -625

//         breakpointFirstBatch = -625
//         resetPosFirstBatch = "2500px"
//         resetStepFirstBatch = 625


//         breakpointSecondBatch = -1875
//         resetPosSecondBatch = "1250px"
//         resetStepSecondBatch = 625        

//     }

//     currentStep = currentStep += 1

//     if(currentStep > 2) currentStep = 0

//     resetToInitialPos(firstBatch, breakpointFirstBatch, resetPosFirstBatch, step, resetStepFirstBatch, "next")
//     resetToInitialPos(secondBatch, breakpointSecondBatch, resetPosSecondBatch, step, resetStepSecondBatch, "next")

//     // resetToInitialPos(firstBatch, -3750, "2500px", step, -1250, "next")
//     // resetToInitialPos(secondBatch, -7500, "-1250px", step, -1250, "next")

//     setDotsIndicator(currentStep)
// })
// prevButton.addEventListener("click", (e) => {
//     let step = 1250;

//     currentStep = currentStep -= 1

//     if(currentStep < 0) currentStep = 2

//     // resetToInitialPos(firstBatch, 3750, "-2500px", step, 1250, "prev")
//     // resetToInitialPos(secondBatch, 0, "-6250px", step, 1250, "prev")

//     // 3750, "-2500px", step, 1250
//     let breakpointFirstBatch = 3750
//     let resetPosFirstBatch = "-2500px"
//     let resetStepFirstBatch = 1250

//     // 0, "-6250px", step, 1250
//     let breakpointSecondBatch = 0
//     let resetPosSecondBatch = "-6250px"
//     let resetStepSecondBatch = 1250
    
//     if (window.matchMedia("(max-width: 900px)").matches) {

//         // resetToInitialPos(firstBatch, 3125, "0px", step, 625, "prev")
//         // resetToInitialPos(secondBatch, 1250, "-1875px", step, 625, "prev")
//         step = 625

//         // 3125, "0px", step, 625
//         breakpointFirstBatch = 3125
//         resetPosFirstBatch = "0px"
//         resetStepFirstBatch = 625

//         // 1250, "-1875px", step, 625
//         breakpointSecondBatch = 1250
//         resetPosSecondBatch = "-1875px"
//         resetStepSecondBatch = 625       

//     }

//     resetToInitialPos(firstBatch, breakpointFirstBatch, resetPosFirstBatch, step, resetStepFirstBatch, "prev")
//     resetToInitialPos(secondBatch, breakpointSecondBatch, resetPosSecondBatch, step, resetStepSecondBatch, "prev")

//     setDotsIndicator(currentStep)
// })


// function setDotsIndicator(currentStep) {
//     dots.forEach((dot, idx) => {
    
//         dot.classList.remove("dot-active")

//         if(idx == currentStep){
//             dot.classList.add("dot-active")
//         }
//     })
// }

// function resetToInitialPos(elements, breakpoint, resetPos, step, resetStep, type) {

//     let condition = null
//     let currentPosition = elements.style.translate || 0;
    
//     if(currentPosition != 0){
//         step += Number(currentPosition.split("px")[0])
//     }
    
//     elements.style.transition = "all .5s ease-in-out";
//     elements.style.translate = `${step}px`


//     if(type == "prev"){
//         if(step > breakpoint) {
//             elements.style.transition = "none";
//             elements.style.translate = resetPos
//         }
//     } 
    
//     if(type == "next"){
//         if(step < breakpoint) {
//             elements.style.transition = "none";
//             elements.style.translate = resetPos
//         }
    
//     } 
        
//     step = resetStep
// }