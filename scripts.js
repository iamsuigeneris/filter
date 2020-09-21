// var tabs = document.querySelectorAll(".tabs_wrap ul li")
// var males = document.querySelectorAll(".male")
// var females = document.querySelectorAll(".female")
// var all = document.querySelectorAll(".item_wrap")

// tabs.forEach((tab) => {
//     tab.addEventListener("click", ()=> {
//         tabs.forEach((tab) => {
//             tab.classList.remove('active')
//         })
//         tab.classList.add('active')

//         var tabval = tab.getAttribute("data-tabs")

//         all.forEach((item) => {
//             item.style.display  = "none"
//         })
        
//         if(tabval == "male"){
//             males.forEach((male) => {
//                 male.style.display  = "block"
//             })
//         }
//         else if(tabval == "female"){
//             females.forEach((female) => {
//                 female.style.display  = "block"
//             })
//         }
//         else{
//             all.forEach((item) => {
//                 item.style.display  = "block"
//             })
//         }
//     })
// })

let tabs = document.querySelectorAll('.tabs_wrap ul li')
let all = document.querySelectorAll('.item_wrap')
let males = document.querySelectorAll('.male')
let females = document.querySelectorAll('.female')

tabs.forEach((tab) => {
    tab.addEventListener('click',() => {
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
            tab.classList.add('active')

            let  tabval = tab.getAttribute('data-tabs')

            all.forEach((tab) => {
                tab.style.display = "none"
            })
            if(tabval == "male"){
                males.forEach((male) => {
                    male.style.display = "block"
                })
            }
            else if(tabval == "female"){
                females.forEach((female) => {
                    female.style.display = "block"
                })
            }
            else{
                all.forEach((item) => {
                    item.style.display = "block"
                })
            }
    })
})