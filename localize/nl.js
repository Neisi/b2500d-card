export default {
  "errors": {
    "both": "Specificeer ofwel een 'device' of 'entities', niet beide.",
    "missing": "Je moet ofwel een 'device' of 'entities' opgeven.",
    "entities_invalid" : "Enkel [p1_power + p2_power] of [p1_power + p2_power + p3_power + p4_power] zijn toegestaan",
  },
  "labels": {
    "last_update": "Laatste update",
    "simul_charge": "Gelijktijdig laden/ontladen",
    "full_then_discharge": "Volledig laden en dan ontladen",
    "charging_mode": "Laadmodus",
    "discharge_mode": "Automatische ontlaadmodus",
    "surplus": "Overschot"
  },
  "card": {
    "solar": "Zonne-energie",
    "output": "Uitvoer",
    "realtime": "Realtime vermogen",
    "battery": "Batterij",
    "production": "Productie",
    "today": "Vandaag",
    "settings": "Instellingen"
  },
  "editor": {
    "name": "Kaartnaam",
    "device": "Device ID (bv. b2500d)",
    "entities": "Alternatieve entiteiten (object)",
    "compact": "Compacte weergave",
    "solar": "Toon zonne-energie",
    "output": "Toon uitvoer",
    "battery": "Toon batterij",
    "production": "Toon productie",
    "settings": "Toon instellingen",
    "max_input_power": "Maximaal invoervermogen (W)",
    "custom_settings": "Aangepaste instellingen",
  },
  "helpers": {
    "device": "Voer de korte naam van het apparaat in (slechts ÉÉN: of device OF entities).",
    "entities": "Alternatief: object met entiteiten (bv. { \"solar_power\": \"sensor.x\" })",
    "compact": "Toont een compactere versie van de kaart",
    "settings": "Alleen zichtbaar als een Device ID wordt gebruikt",
    "max_input_power": "Maximaal invoervermogen per ingang van het opslagsysteem",
    "custom_settings": "Voeg hier je aangepaste instellingen toe (alleen in entities-modus)",
  }
};
