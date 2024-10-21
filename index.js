const EstateMenu = [
    { text: "About", href: "/about" },
    { text: "Real Estate", href: "https://www.zillow.com/" },
    { text: "Contact", href: "/Contact" }
  ];

  const navMenu = document.getElementById('top-menu');

  // Loop through EstateMenu to create and append links
  EstateMenu.forEach(menuItem => {
    const link = document.createElement('a');
    link.href = menuItem.href;
    link.textContent = menuItem.text;
    link.style.marginRight = '10px'; // Add some spacing between links
    navMenu.appendChild(link);
  });

  const button = document.getElementById("button");
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around")

  //Light and Dark Mode options 
  button.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")){
            // Remove current dark mode and add light mode and vice versa
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            button.textContent = 'Dark Mode';
          } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            button.textContent = ' Light Mode';
          }
    }
);