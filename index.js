const EstateMenu = [
    { text: "Home", href: "#" },
    { text: "Real Estate", href: "https://www.zillow.com/" },
    { text: "Sign Up", href: "SignIn.html" },
    { text: "Admin Page", href: "Info.html" }

  ];
  const navMenu = document.getElementById('top-menu');

  EstateMenu.forEach(menuItem => {
    const link = document.createElement('a');
    link.href = menuItem.href;
    link.textContent = menuItem.text;
    link.style.marginRight = '10px'; // Add some spacing between links
    navMenu.appendChild(link);
  });
  const button = document.querySelector("button");
  navMenu.classList.add("flex-around") 
  
  
  button.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")){
            // Remove current dark mode and add light mode and vice versa, Let Users see different navbar between 2 modes
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            navMenu.style.backgroundColor = "var(--bg-2)";
            button.textContent = 'Dark Mode';
          } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            navMenu.style.backgroundColor = "var(--top-menu-bg)";
            button.textContent = ' Light Mode';
          }
    }
);