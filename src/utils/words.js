const words = [
  { word: "Hund", gender: "der" },
  { word: "Katze", gender: "die" },
  { word: "Haus", gender: "das" },
  { word: "Auto", gender: "das" },
  { word: "Baum", gender: "der" },
  { word: "Blume", gender: "die" },
  { word: "Buch", gender: "das" },
  { word: "Stuhl", gender: "der" },
  { word: "Tasche", gender: "die" },
  { word: "Fenster", gender: "das" },
  { word: "Apfel", gender: "der" },
  { word: "Banane", gender: "die" },
  { word: "Wasser", gender: "das" },
  { word: "Tisch", gender: "der" },
  { word: "Lampe", gender: "die" },
  { word: "Kind", gender: "das" },
  { word: "Vogel", gender: "der" },
  { word: "Sonne", gender: "die" },
  { word: "Brot", gender: "das" },
  { word: "Schrank", gender: "der" },

  { word: "A3-Papier", gender: "das" },
  { word: "A4-Papier", gender: "das" },
  { word: "Abflug", gender: "der" },
  { word: "Abitur", gender: "das" },
  { word: "Abrechnung", gender: "die" },
  { word: "Abschluss", gender: "der" },
  { word: "Abschlussprüfung", gender: "die" },
  { word: "Abstand", gender: "der" },
  { word: "Adressbuch", gender: "das" },
  { word: "Ahnung", gender: "die" },
  { word: "Alarm", gender: "der" },
  { word: "Alter", gender: "das" },
  { word: "Altstadt", gender: "die" },
  { word: "Anfang", gender: "der" },
  { word: "Anfrage", gender: "die" },
  { word: "Angst", gender: "die" },
  { word: "Anhang", gender: "der" },
  { word: "Anruf", gender: "der" },
  { word: "Anschrift", gender: "die" },
  { word: "Antwort", gender: "die" },
  { word: "App", gender: "die" },
  { word: "Arbeitgeberfrage", gender: "die" },
  { word: "Arbeitskollege", gender: "der" },
  { word: "Arbeitskollegin", gender: "die" },
  { word: "Arbeitslosenversicherung", gender: "die" },
  { word: "Arbeitsmarkt", gender: "der" },
  { word: "Arbeitspause", gender: "die" },
  { word: "Arbeitsplan", gender: "der" },
  { word: "Arbeitsplatz", gender: "der" },
  { word: "Arbeitssuche", gender: "die" },
  { word: "Arbeitsverhalten", gender: "das" },
  { word: "Arbeitsvertrag", gender: "der" },
  { word: "Arbeitszimmer", gender: "das" },
  { word: "Arztpraxis", gender: "die" },
  { word: "Arzttermin", gender: "der" },
  { word: "Aufenthalt", gender: "der" },
  { word: "Auftrag", gender: "der" },
  { word: "Ausbildung", gender: "die" },
  { word: "Ausbildungsangebot", gender: "das" },
  { word: "Ausbildungsjahr", gender: "das" },
  { word: "Ausbildungsplatz", gender: "der" },
  { word: "Ausflugsziel", gender: "das" },
  { word: "Ausgabe", gender: "die" },
  { word: "Aushilfe", gender: "die" },
  { word: "Auskunft", gender: "die" },
  { word: "Baby", gender: "das" },
  { word: "Babypause", gender: "die" },
  { word: "Babysitter", gender: "der" },
  { word: "Bahnsteig", gender: "der" },
  { word: "Batterie", gender: "die" },
  { word: "Baumarkt", gender: "der" },
  { word: "Bedingung", gender: "die" },
  { word: "Begegnung", gender: "die" },
  { word: "Behinderung", gender: "die" },
  { word: "Beipackzettel", gender: "der" },
  { word: "Bekanntenkreis", gender: "der" },
  { word: "Beratung", gender: "die" },
  { word: "Bereich", gender: "der" },
  { word: "Bericht", gender: "der" },
  { word: "Bewegung", gender: "die" },
  { word: "Bewerbung", gender: "die" },
  { word: "Bewerbungsfoto", gender: "das" },
  { word: "Bewerbungsgespräch", gender: "das" },
  { word: "Bewerbungsschreiben", gender: "das" },
  { word: "Bezahlung", gender: "die" },
  { word: "Bildung", gender: "die" },
  { word: "Biologie", gender: "die" },
  { word: "Blumenstrauß", gender: "der" },
  { word: "Blut", gender: "das" },
  { word: "Blutdruck", gender: "der" },
  { word: "Blutwert", gender: "der" },
  { word: "Boden", gender: "der" },
  { word: "Brandsäule", gender: "die" },
  { word: "Braut", gender: "die" },
  { word: "Bräutigam", gender: "der" },
  { word: "Brautkleid", gender: "das" },
  { word: "Breite", gender: "die" },
  { word: "Broschüre", gender: "die" },
  { word: "Buchhaltung", gender: "die" },
  { word: "Buchung", gender: "die" },
  { word: "Datei", gender: "die" },
  { word: "Dauer", gender: "die" },
  { word: "Dauerausftrag", gender: "der" },
  { word: "Decke", gender: "die" },
  { word: "Deutschkenntnisse", gender: "die" },
  { word: "Diplom", gender: "das" },
  { word: "Disco", gender: "die" },
  { word: "Dokumentarfilm", gender: "der" },
  { word: "Doppelstunde", gender: "die" },
  { word: "Ding", gender: "das" },
  { word: "Drucker", gender: "der" },
  { word: "Durchfall", gender: "der" },
  { word: "Einnahme", gender: "die" },
  { word: "Einstieg", gender: "der" },
  { word: "E-Mail", gender: "die" },
  { word: "Ende", gender: "das" },
  { word: "Energie", gender: "die" },
  { word: "Energieeffizienz", gender: "die" },
  { word: "Elternabend", gender: "der" },
  { word: "Esszimmer", gender: "das" },
  { word: "Existenz", gender: "die" },
  { word: "Existenzgründerkurs", gender: "der" },
  { word: "Fach", gender: "das" },
  { word: "Fachabitur", gender: "das" },
  { word: "Fachhochschule", gender: "die" },
  { word: "Fachrichtung", gender: "die" },
  { word: "Fähigkeit", gender: "die" },
  { word: "Fahrradstadt", gender: "die" },
  { word: "Fahrradweg", gender: "der" },
  { word: "Familienmitglied", gender: "das" },
  { word: "Familientag", gender: "der" },
  { word: "Familienwagen", gender: "der" },
  { word: "Fantasie", gender: "die" },
  { word: "Farbroller", gender: "der" },
  { word: "Fehler", gender: "der" },
  { word: "Feiertag", gender: "der" },
  { word: "Fernsehen", gender: "das" },
  { word: "Fliese", gender: "die" },
  { word: "Flug", gender: "der" },
  { word: "Flugticket", gender: "das" },
  { word: "Förderschule", gender: "die" },
  { word: "Förderung", gender: "die" },
  { word: "Fortbildung", gender: "die" },
  { word: "Fotografie", gender: "die" },
  { word: "Freitagvormittag", gender: "der" },
  { word: "Fremdsprache", gender: "die" },
  { word: "Freundschaft", gender: "die" },
  { word: "Fußballverein", gender: "der" },
  { word: "Gerät", gender: "das" },
  { word: "Gerechtigkeit", gender: "die" },
  { word: "Gericht", gender: "das" },
  { word: "Gesamtschule", gender: "die" },
  { word: "Geschenk", gender: "das" },
  { word: "Geschichte", gender: "die" },
  { word: "Geschirr", gender: "das" },
  { word: "Gesprächsthema", gender: "das" },
  { word: "Gewitter", gender: "das" },
  { word: "Girokonto", gender: "das" },
  { word: "Gitarre", gender: "die" },
  { word: "Glückwunsch", gender: "der" },
  { word: "Glückwunschkarte", gender: "die" },
  { word: "Grammatikerklärung", gender: "die" },
  { word: "Hauptschule", gender: "die" },
  { word: "Hauptspeise", gender: "die" },
  { word: "Hausaufgabenhilfe", gender: "die" },
  { word: "Haushalt", gender: "der" },
  { word: "Hausmüll", gender: "der" },
  { word: "Hausratversicherung", gender: "die" },
  { word: "Haustier", gender: "das" },
  { word: "Heim", gender: "das" },
  { word: "Heimatverein", gender: "der" },
  { word: "Heimwerker", gender: "der" },
  { word: "Hilfe", gender: "die" },
  { word: "Himmel", gender: "der" },
  { word: "Hochzeitsfeier", gender: "die" },
  { word: "Hochzeitstag", gender: "der" },
  { word: "Hütte", gender: "die" },
  { word: "Internetseite", gender: "die" },
  { word: "Internet", gender: "das" },
  { word: "Jugend", gender: "die" },
  { word: "Kaffeeautomat", gender: "der" },
  { word: "Kaffeekanne", gender: "die" },
  { word: "Kamera", gender: "die" },
  { word: "Kapazität", gender: "die" },
  { word: "Karnevalsverein", gender: "der" },
  { word: "Karteikarte", gender: "die" },
  { word: "Kartoffelsuppe", gender: "die" },
  { word: "Katalog", gender: "der" },
  { word: "Katze", gender: "die" },
  { word: "Kaution", gender: "die" },
  { word: "Kerze", gender: "die" },

  { word: "Kochidee", gender: "die" },
  { word: "Kochkurs", gender: "der" },
  { word: "Koffer", gender: "der" },
  { word: "Komma", gender: "das" },
  { word: "Konto", gender: "das" },
  { word: "Kontogebühr", gender: "die" },
  { word: "Kopie", gender: "die" },
  { word: "Körper", gender: "der" },
  { word: "Krankenversicherung", gender: "die" },
  { word: "Krankenwagen", gender: "der" },
  { word: "Krankheit", gender: "die" },
  { word: "Kreativität", gender: "die" },
  { word: "Kredit", gender: "der" },
  { word: "Kreditkarte", gender: "die" },
  { word: "Küchenhilfe", gender: "die" },
  { word: "Küchenstudio", gender: "das" },
  { word: "Kunst", gender: "die" },
  { word: "Kurs", gender: "der" },
  { word: "Kursangebot", gender: "das" },
  { word: "Küste", gender: "die" },
  { word: "Lernkarte", gender: "die" },
  { word: "Liebe", gender: "die" },
  { word: "Lied", gender: "das" },
  { word: "Löffel", gender: "der" },
  { word: "Lokal", gender: "das" },
  { word: "Luft", gender: "die" },
  { word: "Magen", gender: "der" },
  { word: "Männerfreundschaft", gender: "die" },
  { word: "Maschine", gender: "die" },
  { word: "Maß", gender: "das" },
  { word: "Massage", gender: "die" },
  { word: "Mathematik", gender: "die" },

  { word: "Möglichkeit", gender: "die" },
  { word: "Monatskarte", gender: "die" },
  { word: "Monatsmiete", gender: "die" },
  { word: "Museum", gender: "das" },
  { word: "Muskel", gender: "der" },
  { word: "Mut", gender: "der" },
  { word: "Nachhilfe", gender: "die" },
  { word: "Nachricht", gender: "die" },
  { word: "Nachspeise", gender: "die" },
  { word: "Nebenwirkung", gender: "die" },
  { word: "Netzwerk", gender: "das" },
  { word: "Nahrungsmittel", gender: "das" },
  { word: "Nagetier", gender: "das" },
  { word: "Nachbar", gender: "der" },
  { word: "Nachbarschaft", gender: "die" },
  { word: "Ohr", gender: "das" },
  { word: "Ohring", gender: "der" },
  { word: "Option", gender: "die" },
  { word: "Ordner", gender: "der" },
  { word: "Ordnung", gender: "die" },
  { word: "Online-Banking", gender: "das" },
  { word: "Pannendienst", gender: "der" },
  { word: "Parfüm", gender: "das" },
  { word: "Partei", gender: "die" },
  { word: "Passwort", gender: "das" },
  { word: "Pausenregel", gender: "die" },
  { word: "Pflaster", gender: "das" },
  { word: "Pflegedienst", gender: "der" },
  { word: "Physik", gender: "die" },
  { word: "PIN", gender: "die" },
  { word: "Pinsel-Set", gender: "das" },
  { word: "Pinzette", gender: "die" },

  { word: "Privatschule", gender: "die" },
  { word: "Projekt", gender: "das" },
  { word: "Prospekt", gender: "der" },
  { word: "Prozent", gender: "das" },
  { word: "Prüfung", gender: "die" },
  { word: "Quittung", gender: "die" },
  { word: "Rad", gender: "das" },
  { word: "Radweg", gender: "der" },
  { word: "Rasierapparat", gender: "der" },
  { word: "Raum", gender: "der" },
  { word: "Realschule", gender: "die" },
  { word: "Rechnung", gender: "die" },
  { word: "Rechtsberatung", gender: "die" },
  { word: "Reinigungsunternehmen", gender: "das" },
  { word: "Reisebus", gender: "der" },
  { word: "Reisedokument", gender: "das" },
  { word: "Ruhe", gender: "die" },
  { word: "Rundfunkbeitrag", gender: "der" },
  { word: "Rundgang", gender: "der" },
  { word: "Salbe", gender: "die" },
  { word: "Sand", gender: "der" },
  { word: "Satz", gender: "der" },
  { word: "Säule", gender: "die" },
  { word: "Schachtel", gender: "die" },
  { word: "Schaden", gender: "der" },
  { word: "Schalter", gender: "der" },
  { word: "Schere", gender: "die" },
  { word: "Schichtarbeit", gender: "die" },
  { word: "Schlafsack", gender: "der" },
  { word: "Schleier", gender: "der" },
  { word: "Schmerzmittel", gender: "das" },
  { word: "Schmuck", gender: "der" },
  { word: "Schnitzel", gender: "das" },
  { word: "Schraube", gender: "die" },
  { word: "Schritt", gender: "der" },
  { word: "Serie", gender: "die" },
  { word: "Service", gender: "der" },
  { word: "Serviette", gender: "die" },
  { word: "Sinn", gender: "der" },
  { word: "Skigebiet", gender: "das" },
  { word: "Software", gender: "die" },
  { word: "Softwareprogramm", gender: "das" },
  { word: "Solidarität", gender: "die" },
  { word: "Sorge", gender: "die" },
  { word: "Speisekarte", gender: "die" },
  { word: "Stau", gender: "der" },
  { word: "Staubsauger", gender: "der" },
  { word: "Stellenangebot", gender: "das" },
  { word: "Stimmung", gender: "die" },
  { word: "Störung", gender: "die" },
  { word: "Strafe", gender: "die" },
  { word: "Stromkabel", gender: "das" },
  { word: "Studienplatz", gender: "der" },
  { word: "Studium", gender: "das" },
  { word: "Stundenlohn", gender: "der" },
  { word: "Stundenplan", gender: "der" },
  { word: "Sturm", gender: "der" },
  { word: "Sympathie", gender: "die" },
  { word: "Tabelle", gender: "die" },
  { word: "Tabellenkalkulation", gender: "die" },
  { word: "Talkshow", gender: "die" },
  { word: "Tanzfläche", gender: "die" },
  { word: "Tanzkurs", gender: "der" },
  { word: "Tarif", gender: "der" },

  { word: "Ticket", gender: "das" },
  { word: "Tief", gender: "die" },
  { word: "Tierhaltung", gender: "die" },
  { word: "Tofu", gender: "der" },
  { word: "Tonaufnahme", gender: "die" },
  { word: "Topangebot", gender: "das" },
  { word: "Tourismus", gender: "der" },
  { word: "Tradition", gender: "die" },
  { word: "Traum", gender: "der" },
  { word: "Trauung", gender: "die" },
  { word: "Trinkgeld", gender: "das" },
  { word: "Typ", gender: "der" },
  { word: "Urin", gender: "der" },
  { word: "Urin-Untersuchung", gender: "die" },
  { word: "Urlaubsfoto", gender: "das" },
  { word: "Urlaubsreise", gender: "die" },
  { word: "Ursache", gender: "die" },
  { word: "Veranstaltung", gender: "die" },
  { word: "Verband", gender: "der" },
  { word: "Verein", gender: "der" },
  { word: "Verkehrsmeldung", gender: "die" },
  { word: "Verkehrsverbindung", gender: "der" },
  { word: "Überraschung", gender: "die" },
  { word: "Überstunde", gender: "die" },
  { word: "Übung", gender: "die" },
  { word: "Uhrzeit", gender: "die" },
  { word: "Umgebung", gender: "die" },
  { word: "Universität", gender: "die" },
  { word: "Unterkunft", gender: "die" },
  { word: "Unterricht", gender: "der" },
  { word: "Versicherung", gender: "die" },
  { word: "Versicherungsschutz", gender: "der" },
  { word: "Vitamin", gender: "das" },
  { word: "Vollzeit", gender: "die" },
  { word: "Voraussetzung", gender: "die" },
  { word: "Vorort", gender: "der" },
  { word: "Wohlbefinden", gender: "das" },
  { word: "Wohnungseinrichtung", gender: "die" },
  { word: "Wagen", gender: "der" },
  { word: "Wärme", gender: "die" },
  { word: "Weiterbildung", gender: "die" },
  { word: "Welt", gender: "die" },
  { word: "Werk", gender: "das" },
  { word: "Wetterbericht", gender: "der" },
  { word: "Wochenende", gender: "das" },
  { word: "Wochentag", gender: "der" },
  { word: "Zahlung", gender: "die" },
  { word: "Zahn", gender: "der" },
  { word: "Zahnbürste", gender: "die" },
  { word: "Zeitschrift", gender: "die" },
  { word: "Zelt", gender: "das" },
  { word: "Zentrum", gender: "das" },
  { word: "Zettel", gender: "der" },
  { word: "Zeugnis", gender: "das" },
  { word: "Zielgruppe", gender: "die" },
  { word: "Zwilling", gender: "der" },
];
const artiklundpronomen = [
  {
    text: "___ Buch liegt auf dem Tisch.",
    options: ["Das", "Der", "Die"],
    correct: "Das",
    explanation:
      "Das Substantiv 'Buch' ist neutral, daher benutzt man den Artikel 'Das'.",
  },
  {
    text: "Ich sehe ___ Mann im Park.",
    options: ["den", "die", "das"],
    correct: "den",
    explanation: "Im Akkusativ wird der Artikel für Maskulinum zu 'den'.",
  },
  {
    text: "___ Frau trinkt Kaffee.",
    options: ["Die", "Der", "Das"],
    correct: "Die",
    explanation:
      "Das Substantiv 'Frau' ist feminin, daher benutzt man den Artikel 'Die'.",
  },
  {
    text: "___ ist mein Bruder.",
    options: ["Sie", "Er", "Es"],
    correct: "Er",
    explanation: "Für Maskulinum im Nominativ benutzt man das Pronomen 'Er'.",
  },
  {
    text: "Ich gebe ___ das Buch.",
    options: ["ihm", "ihr", "es"],
    correct: "ihm",
    explanation: "Im Dativ benutzt man 'ihm' für Maskulinum oder Neutrum.",
  },
  {
    text: "___ geht in die Schule.",
    options: ["Sie", "Ich", "Du"],
    correct: "Sie",
    explanation: "Für Femininum im Nominativ benutzt man das Pronomen 'Sie'.",
  },
];

const adjektivdeklination = [
  {
    text: "Der ___ Hund ist sehr freundlich.",
    options: ["große", "großer", "großem"],
    correct: "große",
    explanation:
      "Im Nominativ hat das Adjektiv die Endung -e nach dem bestimmten Artikel 'der'.",
  },
  {
    text: "Ich habe einen ___ Mantel gekauft.",
    options: ["neuen", "neuer", "neuem"],
    correct: "neuen",
    explanation:
      "Im Akkusativ hat das Adjektiv die Endung -en nach dem bestimmten Artikel 'einen'.",
  },
  {
    text: "Wir helfen dem ___ Kind bei den Hausaufgaben.",
    options: ["kleine", "kleinen", "kleinem"],
    correct: "kleinen",
    explanation:
      "Im Dativ hat das Adjektiv die Endung -en nach dem bestimmten Artikel 'dem'.",
  },
  {
    text: "Die ___ Katze schläft auf dem Sofa.",
    options: ["schwarz", "schwarze", "schwarzen"],
    correct: "schwarze",
    explanation:
      "Im Nominativ hat das Adjektiv die Endung -e nach dem bestimmten Artikel 'die'.",
  },
  {
    text: "Ich sehe eine ___ Blume im Garten.",
    options: ["schöne", "schöner", "schönem"],
    correct: "schöne",
    explanation:
      "Im Akkusativ hat das Adjektiv die Endung -e nach dem bestimmten Artikel 'eine'.",
  },
  {
    text: "Wir danken unserem ___ Lehrer für die Hilfe.",
    options: ["netten", "nettem", "netter"],
    correct: "netten",
    explanation:
      "Im Dativ hat das Adjektiv die Endung -en nach dem Possessivartikel 'unserem'.",
  },
  {
    text: "Das ist ein ___ Auto.",
    options: ["schnelles", "schnellem", "schneller"],
    correct: "schnelles",
    explanation:
      "Im Nominativ hat das Adjektiv die Endung -es nach dem unbestimmten Artikel 'ein' für neutrale Substantive.",
  },
  {
    text: "Er hat ein ___ Buch gelesen.",
    options: ["interessantes", "interessantem", "interessanter"],
    correct: "interessantes",
    explanation:
      "Im Akkusativ hat das Adjektiv die Endung -es nach dem unbestimmten Artikel 'ein' für neutrale Substantive.",
  },
  {
    text: "Ich spreche mit einer ___ Frau.",
    options: ["klugen", "kluger", "kluge"],
    correct: "klugen",
    explanation:
      "Im Dativ hat das Adjektiv die Endung -en nach dem unbestimmten Artikel 'einer'.",
  },
  {
    text: "Die ___ Kinder spielen im Park.",
    options: ["fröhlich", "fröhliche", "fröhlichen"],
    correct: "fröhlichen",
    explanation:
      "Im Nominativ Plural hat das Adjektiv die Endung -en nach dem bestimmten Artikel 'die'.",
  },
  {
    text: "Ich sehe die ___ Bücher auf dem Tisch.",
    options: ["neue", "neuen", "neuem"],
    correct: "neuen",
    explanation:
      "Im Akkusativ Plural hat das Adjektiv die Endung -en nach dem bestimmten Artikel 'die'.",
  },
  {
    text: "Wir geben den ___ Schülern die Aufgaben.",
    options: ["fleißigen", "fleißiger", "fleißigem"],
    correct: "fleißigen",
    explanation:
      "Im Dativ Plural hat das Adjektiv die Endung -en nach dem bestimmten Artikel 'den'.",
  },
  {
    text: "Das ist eine ___ Entscheidung.",
    options: ["schwierige", "schwieriger", "schwierigem"],
    correct: "schwierige",
    explanation:
      "Im Nominativ hat das Adjektiv die Endung -e nach dem unbestimmten Artikel 'eine'.",
  },
  {
    text: "Er kauft ein ___ Hemd.",
    options: ["weißes", "weißem", "weißer"],
    correct: "weißes",
    explanation:
      "Im Akkusativ hat das Adjektiv die Endung -es nach dem unbestimmten Artikel 'ein' für neutrale Substantive.",
  },
  {
    text: "Ich schenke meinem ___ Freund ein Buch.",
    options: ["besten", "bester", "bestem"],
    correct: "besten",
    explanation:
      "Im Dativ hat das Adjektiv die Endung -en nach dem Possessivartikel 'meinem'.",
  },
];

const possessivartikel = [
  // Nominativ Beispiele
  {
    text: "Das ist ___ Auto.",
    options: ["meine", "mein", "meinen"],
    correct: "mein",
    explanation:
      "Im Nominativ steht 'mein' vor neutralen Substantiven wie 'Auto'.",
  },
  {
    text: "___ Vater ist sehr nett.",
    options: ["Deinen", "Deine", "Dein"],
    correct: "Dein",
    explanation:
      "Im Nominativ steht 'Dein' vor maskulinen Substantiven wie 'Vater'.",
  },
  {
    text: "___ Schwester studiert in Berlin.",
    options: ["Sein", "Seine", "Seinen"],
    correct: "Seine",
    explanation:
      "Im Nominativ steht 'Seine' vor femininen Substantiven wie 'Schwester'.",
  },

  // Akkusativ Beispiele
  {
    text: "Ich sehe ___ Freund im Kino.",
    options: ["meinen", "mein", "meine"],
    correct: "meinen",
    explanation:
      "Im Akkusativ wird 'mein' zu 'meinen' bei maskulinen Substantiven wie 'Freund'.",
  },
  {
    text: "Er hat ___ Buch vergessen.",
    options: ["sein", "seine", "seinen"],
    correct: "sein",
    explanation:
      "Im Akkusativ bleibt 'sein' unverändert bei neutralen Substantiven wie 'Buch'.",
  },
  {
    text: "Wir besuchen ___ Großeltern.",
    options: ["unsere", "unser", "unseren"],
    correct: "unsere",
    explanation:
      "Im Akkusativ bleibt 'unsere' unverändert bei Pluralformen wie 'Großeltern'.",
  },

  // Dativ Beispiele
  {
    text: "Ich gebe ___ Bruder das Buch.",
    options: ["meinem", "mein", "meinen"],
    correct: "meinem",
    explanation:
      "Im Dativ steht 'meinem' vor maskulinen Substantiven wie 'Bruder'.",
  },
  {
    text: "Er hilft ___ Schwester bei den Hausaufgaben.",
    options: ["seinem", "seiner", "seine"],
    correct: "seiner",
    explanation:
      "Im Dativ steht 'seiner' vor femininen Substantiven wie 'Schwester'.",
  },
  {
    text: "Wir sprechen mit ___ Freunden.",
    options: ["unseren", "unser", "unsere"],
    correct: "unseren",
    explanation: "Im Dativ steht 'unseren' vor Pluralformen wie 'Freunden'.",
  },
];

const kleidung = [
  {
    text: "Ich trage heute eine ___ Jacke.",
    options: ["roten", "rote", "rotem"],
    correct: "rote",
    explanation: "Die Jacke ist feminin, daher braucht man 'rote'.",
  },
  {
    text: "Er hat einen ___ Hut gekauft.",
    options: ["neuen", "neuer", "neuem"],
    correct: "neuen",
    explanation: "Der Hut ist maskulin und Akkusativ, daher 'neuen'.",
  },
  {
    text: "Die Schuhe passen zu seinem ___ Hemd.",
    options: ["blauen", "blauem", "blauer"],
    correct: "blauen",
    explanation: "Das Hemd ist neutral und Dativ, daher 'blauen'.",
  },
  {
    text: "Sie trägt eine ___ Bluse.",
    options: ["schöner", "schöne", "schönen"],
    correct: "schöne",
    explanation: "Die Bluse ist feminin, daher 'schöne'.",
  },
  {
    text: "Ich habe einen ___ Mantel an.",
    options: ["langen", "langer", "langem"],
    correct: "langen",
    explanation: "Der Mantel ist maskulin und Akkusativ, daher 'langen'.",
  },
  {
    text: "Das Kind trägt ein ___ T-Shirt.",
    options: ["grünes", "grüner", "grünem"],
    correct: "grünes",
    explanation: "Das T-Shirt ist neutral, daher 'grünes'.",
  },
  {
    text: "Die Hose ist zu ___ für mich.",
    options: ["eng", "enge", "engem"],
    correct: "eng",
    explanation: "Die Hose ist feminin, daher 'eng'.",
  },
  {
    text: "Ich kaufe mir einen ___ Schal.",
    options: ["warmen", "warmer", "warmem"],
    correct: "warmen",
    explanation: "Der Schal ist maskulin und Akkusativ, daher 'warmen'.",
  },
  {
    text: "Er trägt ein ___ Hemd zur Arbeit.",
    options: ["weißes", "weißer", "weißem"],
    correct: "weißes",
    explanation: "Das Hemd ist neutral, daher 'weißes'.",
  },
  {
    text: "Sie hat eine ___ Mütze gekauft.",
    options: ["neue", "neuen", "neuem"],
    correct: "neue",
    explanation: "Die Mütze ist feminin, daher 'neue'.",
  },
  {
    text: "Meine Mutter strickt einen ___ Pullover.",
    options: ["dicken", "dickem", "dicker"],
    correct: "dicken",
    explanation: "Der Pullover ist maskulin und Akkusativ, daher 'dicken'.",
  },
  {
    text: "Das Kleid sieht in ___ Farbe besser aus.",
    options: ["dieser", "diese", "diesem"],
    correct: "dieser",
    explanation: "Die Farbe ist feminin, daher 'dieser'.",
  },
  {
    text: "Ich brauche eine ___ Tasche für die Reise.",
    options: ["große", "großer", "großem"],
    correct: "große",
    explanation: "Die Tasche ist feminin, daher 'große'.",
  },
  {
    text: "Wir haben ein ___ Angebot für Schuhe gefunden.",
    options: ["tolles", "toller", "tollem"],
    correct: "tolles",
    explanation: "Das Angebot ist neutral, daher 'tolles'.",
  },
  {
    text: "Der Verkäufer hat einen ___ Anzug empfohlen.",
    options: ["schwarzen", "schwarzer", "schwarzem"],
    correct: "schwarzen",
    explanation: "Der Anzug ist maskulin und Akkusativ, daher 'schwarzen'.",
  },
  {
    text: "Die Handschuhe sind aus ___ Leder gefertigt.",
    options: ["feinem", "feiner", "feinen"],
    correct: "feinem",
    explanation: "Das Leder ist neutral und Dativ, daher 'feinem'.",
  },
  {
    text: "Sie trägt ___ Ohrringe aus Gold.",
    options: ["schöne", "schöner", "schönem"],
    correct: "schöne",
    explanation: "Die Ohrringe sind Plural, daher 'schöne'.",
  },
  {
    text: "Ich habe einen ___ Gürtel gekauft.",
    options: ["neuen", "neuer", "neuem"],
    correct: "neuen",
    explanation: "Der Gürtel ist maskulin und Akkusativ, daher 'neuen'.",
  },
  {
    text: "Die Bluse passt gut zu ihrem ___ Rock.",
    options: ["schwarzen", "schwarzer", "schwarzem"],
    correct: "schwarzen",
    explanation: "Der Rock ist maskulin i Dativ, zato koristimo 'schwarzen'.",
  },
  {
    text: "Für die Party wählte sie ein ___ Kleid.",
    options: ["rotes", "roter", "rotem"],
    correct: "rotes",
    explanation: "Kleid je neutralno, u akuzativu koristimo 'rotes'.",
  },
];
const kleidungWords = [
  { word: "Jacke", gender: "die" },
  { word: "Hut", gender: "der" },
  { word: "Hemd", gender: "das" },
  { word: "Bluse", gender: "die" },
  { word: "Mantel", gender: "der" },
  { word: "T-Shirt", gender: "das" },
  { word: "Hose", gender: "die" },
  { word: "Schal", gender: "der" },
  { word: "Schuhe", gender: "die" },
  { word: "Pullover", gender: "der" },
  { word: "Rock", gender: "der" },
  { word: "Kleid", gender: "das" },
  { word: "Stiefel", gender: "die" },
  { word: "Socken", gender: "die" },
  { word: "Mütze", gender: "die" },
  { word: "Handschuhe", gender: "die" },
  { word: "Gürtel", gender: "der" },
  { word: "Jeans", gender: "die" },
  { word: "Krawatte", gender: "die" },
  { word: "Weste", gender: "die" },
];

export {
  words,
  artiklundpronomen,
  possessivartikel,
  adjektivdeklination,
  kleidung,
  kleidungWords,
};
