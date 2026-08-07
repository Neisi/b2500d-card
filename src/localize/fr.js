export default {
  "errors": {
    "both": "Veuillez indiquer soit 'device' soit 'entities', pas les deux.",
    "missing": "Vous devez fournir soit 'device' soit 'entities'.",
    "entities_invalid" : "Seuls [p1_power + p2_power] ou [p1_power + p2_power + p3_power + p4_power] sont autorisés.",
  },
  "labels": {
    "last_update": "Dernière mise à jour",
    "simul_charge": "Charge/Décharge simultanée",
    "full_then_discharge": "Charger complètement puis décharger",
    "charging_mode": "Mode de charge",
    "discharge_mode": "Mode de décharge automatique",
    "surplus": "Excédent"
  },
  "card": {
    "solar": "Énergie solaire",
    "output": "Sortie",
    "realtime": "Puissance en temps réel",
    "battery": "Batterie",
    "production": "Production",
    "today": "Aujourd’hui",
    "settings": "Paramètres"
  },
  "editor": {
    "name": "Nom de la carte",
    "device": "ID de l’appareil (ex. b2500d)",
    "entities": "Entités alternatives (objet)",
    "compact": "Vue compacte",
    "icon": "Afficher l’icône de stockage",
    "solar": "Afficher solaire",
    "output": "Afficher sortie",
    "battery": "Afficher batterie",
    "production": "Afficher production",
    "settings": "Afficher paramètres",
    "max_input_power": "Puissance d’entrée maximale (W)",
    "custom_settings": "Paramètres personnalisés",
  },
  "helpers": {
    "device": "Indiquez le nom abrégé de l’appareil (un seul : device OU entities).",
    "entities": "Alternative : objet avec entités (ex. { \"solar_power\": \"sensor.x\" })",
    "compact": "Affiche une version plus compacte de la carte",
    "icon": "Masquer l’icône de stockage",
    "settings": "Uniquement affiché si un ID d’appareil est utilisé",
    "max_input_power": "Puissance d’entrée maximale chaîne 1",
    "max_input_power2": "Puissance d’entrée maximale chaîne 2",
    "max_input_power3": "Puissance d’entrée maximale chaîne 3",
    "max_input_power4": "Puissance d’entrée maximale chaîne 4",
    "custom_settings": "Ajoutez vos paramètres personnalisés ici (mode entités uniquement)",
  }
};
