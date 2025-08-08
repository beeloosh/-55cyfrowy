function showPaths() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.nextSibling.textContent.trim());
  const results = new Set();

  const keywords = {
"smartfon": "telefon.html",
"telefon": "telefon.html",
"Wi-Fi": "telefon.html",
"komputer": "codzienne-uzycie.html",
"myszka": "codzienne-uzycie.html",
"przeglądarka": "codzienne-uzycie.html",
"email": "codzienne-uzycie.html",
"pliki": "codzienne-uzycie.html",
"pendrive": "codzienne-uzycie.html",
"fałszywe": "bezpieczenstwo.html",
"phishing": "bezpieczenstwo.html",
"cookies": "bezpieczenstwo.html",
"fake news": "informacja.html",
"dane osobowe": "bezpieczenstwo.html",
"kamerka": "komunikacja.html",
"Facebook": "komunikacja.html",
"Instagram": "komunikacja.html",
"relacja": "komunikacja.html",
"komentarz": "komunikacja.html",
"e-recepta": "e-zdrowie.html",
"mObywatel": "e-zdrowie.html",
"ePUAP": "e-zdrowie.html",
"PIT": "e-zdrowie.html",
"zakupy": "zakupy.html",
"BLIK": "zakupy.html",
"konto bankowe": "zakupy.html",
"przelew": "zakupy.html",
"zdjęcie": "fotografia.html",
"filmik": "fotografia.html",
"kolaż": "fotografia.html",
"grafika": "tworzenie.html",
"blog": "tworzenie.html",
"nagrywanie": "tworzenie.html",
"podcast": "tworzenie.html",
"aplikacja": "aplikacje.html",
"leki": "aplikacje.html",
"kroki": "aplikacje.html",
"radio": "aplikacje.html",
"wydarzenia": "aplikacje.html"
  };

  selected.forEach(text => {
    for (let keyword in keywords) {
      if (text.toLowerCase().includes(keyword)) {
        results.add(keywords[keyword]);
      }
    }
  });

  const output = document.getElementById('pathsSection');
  output.innerHTML = '';

  if (results.size === 0) {
    output.innerHTML = '<p>Nie zaznaczono żadnych odpowiedzi, spróbuj ponownie.</p>';
    return;
  }

  results.forEach(link => {
    let name = link.replace('.html', '').replace('-', ' ');
    output.innerHTML += `
      <a href="${link}" class="card lightblue">
        <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p>Zobacz propozycje związane z tym tematem</p>
      </a>
    `;
  });
}