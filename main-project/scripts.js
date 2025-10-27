let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById('tab-btn')

// save history even after reloading page
const leadsFromLocalStorage  = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) { // if leadsFromLocalStorage not empty
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    // active: true - tabs where we are now
    // currentWindow: true - if you have 2 windows of chrome - active one - will be used
    // function in chrome.tabs.query will be triggered after active: true, currentWindow: true
})

// add leads to function, myLeads equals to leads, we put it above
function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

// button for deleting all history
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads) // wrote render because myLeads is empty
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
