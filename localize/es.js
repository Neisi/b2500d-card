export default {
  "errors": {
    "both": "Especifica 'device' o 'entities', no ambos.",
    "missing": "Debes proporcionar 'device' o 'entities'.",
    "entities_invalid" : "Solo se permiten [p1_power + p2_power] o [p1_power + p2_power + p3_power + p4_power].",
  },
  "labels": {
    "last_update": "Última actualización",
    "simul_charge": "Carga/descarga simultánea",
    "full_then_discharge": "Cargar completamente y luego descargar",
    "charging_mode": "Modo de carga",
    "discharge_mode": "Modo de descarga automático",
    "surplus": "Excedente"
  },
  "card": {
    "solar": "Energía solar",
    "output": "Salida",
    "realtime": "Potencia en tiempo real",
    "battery": "Batería",
    "production": "Producción",
    "today": "Hoy",
    "settings": "Ajustes"
  },
  "editor": {
    "name": "Nombre de la tarjeta",
    "device": "ID del dispositivo (ej. b2500d)",
    "entities": "Entidades alternativas (objeto)",
    "compact": "Vista compacta",
    "icon": "Mostrar icono de almacenamiento",
    "solar": "Mostrar solar",
    "output": "Mostrar salida",
    "battery": "Mostrar batería",
    "production": "Mostrar producción",
    "settings": "Mostrar ajustes",
    "max_input_power": "Potencia máxima de entrada (W)",
    "custom_settings": "Ajustes personalizados",
  },
  "helpers": {
    "device": "Introduce el nombre corto del dispositivo (solo UNO: device O entities).",
    "entities": "Alternativa: objeto con entidades (ej. { \"solar_power\": \"sensor.x\" })",
    "compact": "Muestra una versión más compacta de la tarjeta",
    "icon": "Ocultar icono de almacenamiento",
    "settings": "Solo se muestra si se utiliza la ID del dispositivo",
    "max_input_power": "Potencia de entrada máxima cadena 1",
    "max_input_power2": "Potencia de entrada máxima cadena 2",
    "max_input_power3": "Potencia de entrada máxima cadena 3",
    "max_input_power4": "Potencia de entrada máxima cadena 4",
    "custom_settings": "Agrega tus ajustes personalizados aquí (solo modo entidades)",
  }
};
