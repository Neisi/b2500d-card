export default {
  "errors": {
    "both": "Please specify either 'device' or 'entities', not both.",
    "missing": "You must provide either 'device' or 'entities'.",
    "entities_invalid" : "Only [p1_power + p2_power] or [p1_power + p2_power + p3_power + p4_power] are allowed",
  },
  "labels": {
    "last_update": "Last Update",
    "simul_charge": "Simultaneous Charging/Discharging",
    "full_then_discharge": "Fully Charge Then Discharge",
    "charging_mode": "Charging Mode",
    "discharge_mode": "Automatic Discharge Mode",
    "surplus": "Surplus"
  },
  "card": {
    "solar": "Solar Power",
    "output": "Output",
    "realtime": "Realtime Power",
    "battery": "Battery",
    "production": "Production",
    "today": "Today",
    "settings": "Settings"
  },
  "editor": {
    "name": "Card Name",
    "device": "Device ID (e.g. b2500d)",
    "entities": "Alternative Entities (object)",
    "compact": "Compact View",
    "icon": "Show storage icon",
    "solar": "Show Solar",
    "output": "Show Output",
    "battery": "Show Battery",
    "production": "Show Production",
    "settings": "Show Settings",
    "max_input_power": "Maximum Input Power (W)",
    "custom_settings": "Custom Settings",
  },
  "helpers": {
    "device": "Enter the device short name (only ONE: either device OR entities).",
    "entities": "Alternative: object with entities (e.g. { \"solar_power\": \"sensor.x\" })",
    "compact": "Shows a more compact version of the card",
    "icon": "Hide the storage icon",
    "settings": "Only shown if device ID is used",
    "max_input_power": "Maximum input power string 1",
    "max_input_power2": "Maximum input power string 2",
    "max_input_power3": "Maximum input power string 3",
    "max_input_power4": "Maximum input power string 4",
    "custom_settings": "Add your custom settings here (entities mode only)",
  }
};

