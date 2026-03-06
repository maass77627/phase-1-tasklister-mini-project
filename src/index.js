document.addEventListener("DOMContentLoaded", () => {


  let form = document.querySelector("form")
  
  let ul = document.getElementById("tasks")

  let select = document.querySelector("select")
  console.log(select)
  


  form.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log(e.target.elements["new-task-description"].value)
      let value = e.target.elements["new-task-description"].value
      const priority = e.target.elements["priority"].value
      let li = document.createElement("li")
      li.innerText = value
      let button = document.createElement("button")
      button.textContent = "delete"
      button.addEventListener("click", (e) => {
           e.target.parentNode.remove()
      })

      let edit = document.createElement("button")
      edit.textContent = "edit"
      edit.addEventListener("click", (e) => {
        let input = document.createElement("input")
        input.value = li.firstChild.textContent
        li.firstChild.replaceWith(input)
        editBtn.textContent = "save"
        editBtn.addEventListener("click", () => {
        li.firstChild.textContent = input.value
        })
      })

  
      switch (priority) {
       case "low":
        li.style.color = "green"
         break
       case "medium":
          li.style.color = "yellow"
        break 
        case "high":
           li.style.color = "red"
        break 
        }
      
      li.appendChild(edit)
      li.appendChild(button)

      ul.appendChild(li)

  })
  




});
