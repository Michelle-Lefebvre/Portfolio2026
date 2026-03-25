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
