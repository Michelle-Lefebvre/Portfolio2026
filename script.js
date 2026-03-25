function toggleDarkMode() {
  var element = document.body
  element.classList.toggle("dark-mode")
}

// Modal
const showButtons = document.querySelectorAll(".show")
const closeButtons = document.querySelectorAll(".close")

showButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the dialog immediately following this button
    const modal = btn.nextElementSibling
    modal.showModal()
  })
})

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the closest parent dialog
    btn.closest("dialog").close()
  })
})
