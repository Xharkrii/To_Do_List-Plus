// SELECTING ELEMENTS

const input = document.getElementById("content")
const submitBtn = document.getElementById("submit")
const section = document.getElementById("container")
const form = document.getElementById("form")
const plusIcon = document.getElementById("plus")

function toggleForm() {
    form.classList.add('show')
    plusIcon.style.display = 'none'
}

function addTask(e) {
    // Prevent default behaviour
    e.preventDefault()

    // Get the input value
    const formInput = input.value


    // To prevent submit if input is empty
    if (formInput === '') {
        return
    } else{
        // Creating elements
        const div = document.createElement('div')
        const para = document.createElement('p')
        const paraTwo = document.createElement('p')
        const span = document.createElement('span')
        const spanTwo = document.createElement('span')

        para.innerHTML = formInput
        paraTwo.appendChild(span)
        paraTwo.appendChild(spanTwo)

        span.innerHTML = '<i class="fa-solid fa-trash"></i>'
        spanTwo.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

        span.classList.add('delete-btn')
        spanTwo.classList.add('edit-btn')

        // Adding element(s) to parent element(s)
        div.appendChild(para)
        div.appendChild(paraTwo)

        // Adding a class to an element
        para.classList.add('text')
        div.classList.add('task')

        section.appendChild(div)

        // To clear input field
        input.value = '' 


        span.addEventListener('click', function(e){
            const task = e.target.closest('.task')
            task.remove()
            
        })
        spanTwo.addEventListener('click', function(e) {
            // To get the parent element
            const task = e.target.closest('.task')

            // to get the child element inside a parent element and its content
            const paraText = task.querySelector('.text').textContent

            //Adding it to the input
            input.value = paraText
            task.remove()
        })
    }   
}

// Add event listeners
plusIcon.addEventListener('click', toggleForm)
submitBtn.addEventListener('click', addTask)
