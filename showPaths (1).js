
function showPaths() {
  const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
  const section = document.getElementById("pathsSection");
  section.innerHTML = "";

  const paths = {
    smartfon: {
      title: "Smartfon od podstaw",
      description: "Poznaj swój telefon i używaj go z pewnością siebie."
    },
    komunikacja: {
      title: "Komunikacja i media społecznościowe",
      description: "Pozostań w kontakcie z rodziną i znajomymi online."
    },
    ezdrowie: {
      title: "E-zdrowie i e-obywatel",
      description: "Załatwiaj sprawy urzędowe i zdrowotne przez internet."
    },
    zakupy: {
      title: "Zakupy i bankowość",
      description: "Bezpieczne zakupy i zarządzanie finansami online."
    },
    fotografia: {
      title: "Fotografia i grafika",
      description: "Rób zdjęcia, kolaże i dziel się nimi z innymi."
    },
    bezpieczenstwo: {
      title: "Bezpieczeństwo i prywatność",
      description: "Chroń swoje dane i urządzenia przed zagrożeniami."
    },
    informacje: {
      title: "Informacja i jej wiarygodność",
      description: "Rozpoznawaj fake newsy i sprawdzaj źródła."
    },
    dostepnosc: {
      title: "Ułatwienia dostępu",
      description: "Dostosuj technologię do swoich potrzeb."
    },
    codziennosc: {
      title: "Narzędzia codzienności",
      description: "Aplikacje i triki na co dzień – pogoda, przypomnienia, notatki."
    },
    rozrywka: {
      title: "Rozrywka i hobby",
      description: "Oglądaj, słuchaj, graj i rozwijaj swoje pasje online."
    }
  };

  const keywordsMap = {
    "Włączyć i wyciszyć telefon": "smartfon",
    "Połączyć się z Wi-Fi": "smartfon",
    "Znaleźć coś w internecie": "smartfon",
    "Rozmowy wideo": "komunikacja",
    "Założyć konto na Facebooku": "komunikacja",
    "Napisać komentarz": "komunikacja",
    "Zamówić e-receptę": "ezdrowie",
    "Zalogować się do mObywatela": "ezdrowie",
    "Złożyć PIT online": "ezdrowie",
    "Zapłacić blikiem": "zakupy",
    "Zrobić zakupy przez internet": "zakupy",
    "Zalogować się do banku": "zakupy",
    "Zrobić zdjęcie": "fotografia",
    "Zrobić kolaż": "fotografia",
    "Obrobić zdjęcie": "fotografia",
    "Zabezpieczyć konto": "bezpieczenstwo",
    "Sprawdzić uprawnienia aplikacji": "bezpieczenstwo",
    "Włączyć tryb prywatny": "bezpieczenstwo",
    "Rozpoznać fake newsy": "informacje",
    "Sprawdzić źródło informacji": "informacje",
    "Zgłosić nadużycie": "informacje",
    "Powiększyć tekst": "dostepnosc",
    "Włączyć czytnik ekranu": "dostepnosc",
    "Dostosować kontrast": "dostepnosc",
    "Sprawdzić pogodę": "codziennosc",
    "Ustawić przypomnienie": "codziennosc",
    "Znaleźć przepis": "codziennosc",
    "Słuchać podcastów": "rozrywka",
    "Oglądać YouTube": "rozrywka",
    "Zainstalować aplikację z grami": "rozrywka"
  };

  const matchedTags = new Set();

  selected.forEach(label => {
    if (keywordsMap[label]) {
      matchedTags.add(keywordsMap[label]);
    }
  });

  if (matchedTags.size === 0) {
    section.innerHTML = "<p>Nie zaznaczono niczego, co pasowałoby do ścieżki rozwoju.</p>";
    return;
  }

  matchedTags.forEach(tag => {
    const path = paths[tag];
    if (path) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${path.title}</h3><p>${path.description}</p>`;
      section.appendChild(card);
    }
  });
}
