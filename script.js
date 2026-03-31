function toggleDarkMode() {
  var element = document.body
  element.classList.toggle("dark-mode")

  var toggle = document.getElementById("toggle")
  toggle.setAttribute(
    "aria-pressed",
    element.classList.contains("dark-mode").toString(),
  )
}

function toggleDrawer() {
  var nav = document.getElementById("nav-drawer")
  var backdrop = document.getElementById("nav-backdrop")
  var toggle = document.getElementById("nav-toggle")
  var isOpen = nav.classList.contains("open")

  nav.classList.toggle("open")
  backdrop.classList.toggle("visible")
  document.body.classList.toggle("drawer-open", !isOpen)
  toggle.setAttribute("aria-expanded", (!isOpen).toString())
  toggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  )
}

function closeDrawer() {
  var nav = document.getElementById("nav-drawer")
  var backdrop = document.getElementById("nav-backdrop")
  var toggle = document.getElementById("nav-toggle")

  nav.classList.remove("open")
  backdrop.classList.remove("visible")
  document.body.classList.remove("drawer-open")
  toggle.setAttribute("aria-expanded", "false")
  toggle.setAttribute("aria-label", "Open navigation")
}

// Change to addEventListener instead of inline onclick
document.getElementById("toggle").addEventListener("click", toggleDarkMode)
document.getElementById("nav-toggle").addEventListener("click", toggleDrawer)
document.getElementById("nav-backdrop").addEventListener("click", closeDrawer)

document.getElementById("btn-open-ar").addEventListener("click", function () {
  document.getElementById("modalAr").showModal()
})
document.getElementById("btn-close-ar").addEventListener("click", function () {
  document.getElementById("modalAr").close()
})

document
  .getElementById("btn-open-jitters")
  .addEventListener("click", function () {
    document.getElementById("modalJitters").showModal()
  })
document
  .getElementById("btn-close-jitters")
  .addEventListener("click", function () {
    document.getElementById("modalJitters").close()
  })

document
  .getElementById("btn-open-madsci")
  .addEventListener("click", function () {
    document.getElementById("modalMadSci").showModal()
  })
document
  .getElementById("btn-close-madsci")
  .addEventListener("click", function () {
    document.getElementById("modalMadSci").close()
  })

document.getElementById("btn-open-dog").addEventListener("click", function () {
  document.getElementById("modalDog").showModal()
})
document.getElementById("btn-close-dog").addEventListener("click", function () {
  document.getElementById("modalDog").close()
})

// Close drawer when nav links are clicked
document.querySelectorAll("#nav-drawer a").forEach(function (link) {
  link.addEventListener("click", closeDrawer)
})

// Update aria-current on nav links as sections scroll into view
var navLinks = document.querySelectorAll("nav a[href^='#']")

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.removeAttribute("aria-current")
          link.classList.remove("active")
        })
        var activeLink = document.querySelector(
          "nav a[href='#" + entry.target.id + "']",
        )
        if (activeLink) {
          activeLink.setAttribute("aria-current", "location")
          activeLink.classList.add("active")
        }
      }
    })
  },
  { threshold: 0.3 },
)

navLinks.forEach(function (link) {
  var targetId = link.getAttribute("href").slice(1)
  var target = document.getElementById(targetId)
  if (target) observer.observe(target)
})
