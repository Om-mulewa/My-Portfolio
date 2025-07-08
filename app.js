let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tab-content");

function openTab (tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right ="0";
}
function closeMenu() {
    sideMenu.style.right ="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyxcoAPobHxdGHGli7qRO6i0LtlVdYDiBKWNWSAgDcS6Xa0fKiKW-y2Qw8lLSOAFq-h/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent sucessfully!!"
        setTimeout(function() {
            msg.innerHTML= ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


