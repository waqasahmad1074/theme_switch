
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
   document.body.classList.add("dark");
   themeBtn.innerHTML = "Light Mode";
}
themeBtn.addEventListener("click", function() {
   document.body.classList.toggle("dark");
   if (document.body.classList.contains("dark")) {
       localStorage.setItem("theme", "dark");
       themeBtn.innerHTML = "Light Mode";
 } 
 else 
    {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "Dark Mode";
    }

});
