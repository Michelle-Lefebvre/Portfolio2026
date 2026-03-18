function toggleDarkMode() {
  var element = document.body
  element.classList.toggle("dark-mode")
}

// Modal
const modal = document.getElementsByClassName("prj-modal")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")

// Open as a modal
openBtn.addEventListener("click", () => {
  modal.showModal()
})

// Close modal
closeBtn.addEventListener("click", () => {
  modal.close()
})

// Optional: Close when clicking the backdrop (outside the modal box)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close()
  }
})
