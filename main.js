// Jednoduchá ukázka, jak zachytit odeslání formuláře na frontendu
// Backend zatím není řešen, takže zpráva se reálně nikam neodesílá.

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Získání hodnot z formuláře
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Sem by se poslal request na server (pokud by byl backend).
      // My jen zobrazíme v konzoli a vyresetujeme formulář.
      console.log("Formulář odeslán. E-mail:", email);
      console.log("Zpráva:", message);
  
      // Třeba zobrazíme uživateli alert:
      alert("Zpráva byla úspěšně odeslána (zatím jen na oko).");
  
      // Reset formuláře
      contactForm.reset();
    });
  });
  
  console.log("Vítejte na stránkách Ovocnářství Holub!"); 