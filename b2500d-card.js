
import { LitElement, html, css } from "https://unpkg.com/lit-element/lit-element.js?module";
import en from "./localize/en.js";
import de from "./localize/de.js";
import es from "./localize/es.js";
import fr from "./localize/fr.js";
import nl from "./localize/nl.js";

const languages = { en, de, es, fr, nl };


function _getLangCode(langInput) {
  const raw = (langInput || (typeof navigator !== "undefined" && navigator.language) || "en").toString().toLowerCase();
  return raw.split(/[_-]/)[0]; 
}

function localize(key, langInput) {
  const lang = _getLangCode(langInput);
  let result = languages[lang] || languages["en"];
  const parts = key.split(".");
  for (const p of parts) {
    result = result?.[p];
    if (!result) break;
  }
  return result || "";
}

class B2500DCard extends LitElement {
  static get styles() {
    return css`
      :host {
        --text:var(--primary-text-color);
        --muted:var(--primary-text-color);
        --cyan:#58d0ff;
        --cyan-soft:#3bbcf0;
        --divider: var(--entities-divider-color,var(--divider-color));
        --radius:22px;
        display:block;
      }

      .container {
        width:100%;
        max-width:600px;
        margin:0 auto;
        padding:18px 14px 26px;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        backdrop-filter: var(--ha-card-backdrop-filter, none);
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        color: var(--primary-text-color);
      }

      .device {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:14px;
        padding:6px 0 14px
      }

      .device .unit {
        width:80px;
        height:130px;
        border-radius:18px;
        background:#68686A;
        background:linear-gradient(135deg,#68686A 0%,#48484a 45%,#5a5a5c 100%);
        box-shadow: inset 0 2px 0 rgba(255,255,255,.05), inset 0 -8px 16px rgba(0,0,0,.45);
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
      }
    
      .unit .battery-bar {
        width: 10px;
        height: 80px;
        border-radius: 6px;
        border: 1px solid #000;
        background: rgb(28, 28, 28);
        position:relative;
        overflow:hidden;
        display:flex;
        justify-content:center;
      }
    
      .unit .battery-fill {
        position:absolute;
        bottom:2px;
        width:4px;      
        background:linear-gradient(#5be5bf, #2ae5a8);
        box-shadow:0 0 3px #5be5bf;
        border-radius:2px;
        height:0%;          
        transition:height .6s ease;
      }
    
      .unit .battery-fill.charging {
        background:linear-gradient(#5be5bf, #2ae5a8);
        box-shadow:0 0 6px #5be5bf;
        animation:pulseGreen 2.5s infinite ease-in-out;
      }
    
      @keyframes pulseGreen {
        0%,100% { opacity:0.6; transform:scaleY(0.95); }
        50%     { opacity:1;   transform:scaleY(1.05); }
      }
    
      .unit .battery-fill.discharging {
        background:linear-gradient(#ff9800, #ff5722);
        box-shadow:0 0 6px #ff9800;
        animation:pulseOrange 2.5s infinite ease-in-out;
      }
    
      @keyframes pulseOrange {
        0%,100% { opacity:0.6; transform:scaleY(0.95); }
        50%     { opacity:1;   transform:scaleY(1.05); }
      }

      .grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:14px;
      }

      .solar {
        grid-column: 1 / -1;
        padding:18px;
      }

      .battery-card {
        grid-row: span 2;
        display:flex;
        flex-direction:column;
      }

        .card {
          position: relative; 
          background: rgba(100,100,100, 0.15);
          border-radius: var(--radius);
          padding:12px;
          box-sizing:border-box;
        }
        
        .icon {
          position: absolute;
          bottom: 14px;   
          right: 14px;   
          font-size: 22px; 
          color:var(--text);
          font-weight: 700;
        }
        
        ha-icon[icon="mdi:battery-high"] {
          transform: rotate(90deg);
          transform-origin: center;
          backface-visibility: hidden;
          will-change: transform;
          display: inline-block;
        }
        
      .card.flat{ 
      box-shadow:none; 
      padding:0; 
      overflow: visible;
      }

      .title {
        display:flex; 
        align-items: 
        baseline; gap:1px;
        font-weight:600; 
        color:var(--text);
        font-size: var(--ha-font-size-l);
        margin-bottom: 10px;
      }

      .right-big {
        margin-left:auto; 
        font-weight:400; 
        font-size:24px; 
        color:var(--text);
      }

      .big-num{ font-size:24px; color:var(--text); font-weight:400; }
      .muted{ color:var(--muted) }
      .subtitle{ color:var(--muted); font-size:13px; margin-top:15px }
      
      .big-num-unit{
          font-size:14px;
          font-weight:400;
          margin-left: 1px;
          color: var(--primary-text-color);
      }
      .big-num-unit.white {
        color: white;
      }

      .flex-wrapper{
            display: flex;
            align-items: baseline;
      }

      .barwrap{ margin-top:8px; display:flex; gap:12px; align-items:center; }
      .bar{
        background: #1C1C1C; 
        border-radius:12px; height:3px; flex:1; position:relative; overflow:hidden;
      }
      .bar .fill{
        position:absolute; left:0; top:0; bottom:0; width:0%;
        background: rgb(84, 158, 164);
        border-radius:12px;
        transition: width .6s ease;
      }
      .bar.r .fill{
        right:0; left:auto;
        background: rgb(84, 158,164);
      }
      .barlabels{ display:flex; justify-content:space-around; margin-top:8px; font-weight:400; color: #549EA4; align-items: center; }
      .barlabels .hint{ color: #549EA4; font-weight:400; font-size:12px; margin-top:2px; }

      .battery{
        display:flex; align-items:center; justify-content:center; padding:10px 0 4px;
      }

        .ring {
          position: relative; 
          width:150px;
          height:150px;
          border-radius:50%;
          display:grid;
          place-items:center;
          padding: 6px; /* Ringdicke */
          box-sizing: border-box;
          overflow: visible; 
        }
        
        .ring::before {
          content: "";
          position: absolute;
          inset: -3px;             
          border-radius: 50%;
          background: inherit;     
          filter: blur(8px);      
          opacity: 0.6;           
          z-index: 0;
        }
        
        .ring > .inner {
          position: relative;
          z-index: 1; 
        }
        
        .inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(
            var(--ha-card-background-rgb, 28,28,28),
            1
          );
          display: grid;
          place-items: center;
        }
        
        .pulse-green {
          color: #5be5bf;
          scale: 0.8;
          animation: pulseGreen 2.5s infinite ease-in-out;
        }

     .kwh{ font-size:28px; font-weight:400; color: white; }

      .percent{ 
      color: white;
      margin-top:2px; 
      font-weight:400; 
      font-size: var(--ha-font-size-l) 
          
      }

      .row{
        display:flex; align-items:center; justify-content:space-between; gap:10px;
        padding:18px; 
      }
      .row .left{ display:flex; align-items:center; gap:12px; }
      .row .right{ color:var(--muted); font-weight:600; display:flex; align-items:center; }
      .chev{ width:10px; height:10px; border-right:2px solid var(--muted); border-top:2px solid var(--muted); transform:rotate(45deg); margin-left:6px; }

      .divider{ height:1px; background:var(--divider); margin:1px 0 0; }

      .row .right ha-select,
      .row .right ha-switch {
        min-width: 140px;
      }

      @media(max-width:700px){
        .grid{grid-template-columns:1fr}
        .battery-card{grid-row:auto}
      }
    
    
     /* Compact Card Styles */
      .compact {
        display: flex;
        align-items: center;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        backdrop-filter: var(--ha-card-backdrop-filter, none);
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        color: var(--primary-text-color);
      }

      .compact .unit {
        transform: scale(0.6);
        transform-origin: center;
      }
      
      .compact .device{
          margin-left: 3px;
          padding: 0 0 0 0;
      }

      .compact .right {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-left: 10px;
      }

      .compact .name {
        font-weight: 800;
        font-size: 16px;
        color: var(--text);
        margin-bottom: 4px;
      }

      .compact .val {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: var(--text);
        font-size: 12px;
      }

      .compact ha-icon[icon^="mdi:battery"] {
        transform: rotate(90deg);
      }
      
      .compact ha-icon {
        scale: 0.7;
        margin-right: 1px;
      }
      
      .compact .flex{
          display: flex;
          gap: 10px;
      }
      
      .compact p{
          color: gray;
          margin: 0;
      }
      
    `;
  }

  constructor() {
    super();
  }

  setConfig(config) {
    this.config = {
      output: true,
      battery: true,
      production: true,
      settings: true,
      solar: true,
      compact: false,
      icon: true,
      ...config
    };
    if (this._hass) {
      this._validateConfig(this.config);
    } else {
        this._delayedValidation = true;
    }
  }

    _validateConfig(config) {
      const lang = this._hass?.language || "en";
      const { device, entities } = config;
    
      if (device && entities) {
        this._configError = localize("errors.both", lang);
        return false;
      }
      if (!device && !entities) {
        this._configError = localize("errors.missing", lang);
        return false;
      }
    
      if (entities) {
        const powerKeys = ["p1_power","p2_power","p3_power","p4_power"].filter(k => entities[k] !== undefined);
        const valid2 = powerKeys.length === 2 && powerKeys.includes("p1_power") && powerKeys.includes("p2_power");
        const valid4 = powerKeys.length === 4 && ["p1_power","p2_power","p3_power","p4_power"].every(k => powerKeys.includes(k));
        if (!valid2 && !valid4) {
          this._configError = localize("errors.entities_invalid", lang);
          return false;
        }
      }
    
      this._configError = null;
      return true;
    }

  set hass(hass) {
    this._hass = hass;
    if (!this.config) return;

    if (this.config.device) {
      // Device-Modus
      const device = this.config.device;
      const getState = (entity) => hass.states[entity]?.state || 0;

      this._solarPower = getState(`sensor.${device}_total_input_power`);
      this._p1 = getState(`sensor.${device}_input_1_power`);
      this._p2 = getState(`sensor.${device}_input_2_power`);
      this._outputPower = getState(`sensor.${device}_total_output_power`);
      this._batteryPercent = getState(`sensor.${device}_battery_percentage`);
      this._batteryKwh = getState(`sensor.${device}_battery_capacity`) / 1000;
      this._productionToday = getState(`sensor.${device}_daily_pv_charging`) / 1000;
      this._lastUpdate = this._formatLastUpdate(this._hass.states[`sensor.${this.config.device}_last_update`]?.state) || "n/a";
      
    } else if (this.config.entities) {
      // Entities-Modus
      const e = this.config.entities;
    
      const getNumericValue = (entity) => {
        const stateObj = this._hass.states[entity];
        if (!stateObj) return 0;
    
        const value = Number(stateObj.state) || 0;
        const unit = stateObj.attributes?.unit_of_measurement;
    
        if (unit?.toLowerCase() === "kwh") {
          return value;
        }

        if (unit?.toLowerCase() === "wh") {
          return value / 1000;
        }

        return value;
      };
    
      this._solarPower = Number(this._hass.states[e.solar_power]?.state) || 0;
      this._p1 = Number(this._hass.states[e.p1_power]?.state) || 0;
      this._p2 = Number(this._hass.states[e.p2_power]?.state) || 0;
      this._p3 = this._hass.states[e.p3_power]?.state !== undefined
          ? Number(this._hass.states[e.p3_power].state)
          : null;
        
      this._p4 = this._hass.states[e.p4_power]?.state !== undefined
          ? Number(this._hass.states[e.p4_power].state)
          : null;
      this._outputPower = Number(this._hass.states[e.output_power]?.state) || 0;
      this._batteryPercent = Number(this._hass.states[e.battery_percentage]?.state) || 0;
    
      this._batteryKwh = e.battery_capacity ? getNumericValue(e.battery_capacity) : 0;
      this._productionToday = e.production_today ? getNumericValue(e.production_today) : 0;
      this._lastUpdate = this._formatLastUpdate(this._hass.states[e.last_update]?.state) || "n/a";


      if (this.config.custom_settings?.length) {
        this.config.settings = true;
      }else{
         this.config.settings = false;
      }
    }
    if (this._delayedValidation) {
        this._validateConfig(this.config);
        this._delayedValidation = false;
    }
    this.requestUpdate();
  }

  _handleMoreInfo(entityId) {
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId }
    });
    this.dispatchEvent(event);
  }

    _getEntity(type) {
      const mapping = {
        daily_pv_charging: "production_today",
        battery_percentage: "battery_percentage",
        battery_capacity: "battery_capacity",
        total_input_power: "solar_power",
        input_1_power: "p1_power",
        input_2_power: "p2_power",
        input_3_power: "p3_power",
        input_4_power: "p4_power",
        total_output_power: "output_power",
      };
    
      if (this.config.device) {
        return `sensor.${this.config.device}_${type}`;
      }
    
      const externalType = mapping[type] ?? type;
      return this.config.entities?.[externalType] || null;
    }

  _toggleSwitch(entityId, checked) {
    this._hass.callService("switch", checked ? "turn_on" : "turn_off", {
      entity_id: entityId
    });
  }

  _formatLastUpdate(isoString) {
    if (!isoString) return '';

    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const formatted = `${year}-${month}-${day} ${hour}:${minute}`;
    return formatted;
  }



//RENDER COMPACT
 _renderCompact(batteryClass){
     const percent = this._batteryPercent ?? 0;

      let color = "green";
      if (percent <= 19) {
        color = "red";
      } else if (percent <= 59) {
        color = "orange";
      }
      let icon = "";
      if (percent >= 100) {
        icon = "mdi:battery";
      } else if (percent < 10) {
        icon = "mdi:battery-outline";
      } else {
        let level = Math.floor(percent / 10) * 10;
        icon = `mdi:battery-${level}`;
      }
      return html`
        <div class="compact" @click=${() => this._handleMoreInfo(this._getEntity("battery_percentage"))}>
        <div class="device">
          <div class="unit">
            <div class="battery-bar">
              <div class="battery-fill ${batteryClass}" 
                   style="height:${Math.min(this._batteryPercent, 98)}%">
              </div>
            </div>
            </div>
          </div>

          <div class="right">
            <div class="name">${this.config.name || this.config.device}</div>
            <div class="flex">
            <div class="val">
              <ha-icon icon="mdi:solar-power"></ha-icon>
              <p>${this._solarPower}W</p>
            </div>
            <div class="val">
              <ha-icon icon="mdi:transmission-tower"></ha-icon>
              <p>${this._outputPower}W</p>
            </div>
            <div class="val">
               <ha-icon icon=${icon} style="color:${color}"></ha-icon>
              <p>${this._batteryPercent}%</p>
            </div>
          </div>
          </div>
        </div>
      `;
 }

//RENDER UNIT
_renderUnit(batteryClass){
  return html`  
  <div class="unit">
     <div class="battery-bar">
       <div class="battery-fill ${batteryClass}" style="height:${Math.min(this._batteryPercent, 98)}%"></div>
     </div>
  </div>
    `
}


/////////////////
// RENDER
/////////////////
  render() {
     if (this._configError) {
        return html`<ha-alert alert-type="error">${this._configError}</ha-alert>`;
     }

    const solar = Number(this._solarPower);
    const output = Number(this._outputPower);

    const lang = this._hass?.language || "en";
    const batteryClass = solar > output && this._batteryPercent < 100
      ? 'charging'
      : output > solar && this._batteryPercent > 0
        ? 'discharging'
        : '';

    if (this.config.compact) {
      return this._renderCompact(batteryClass);
    }

    // Fallback: 600 wenn nix übergeben (standard beim b2500d)
    const maxInputPower = this.config.max_input_power || 600;
    const maxInputPower2 = this.config.max_input_power2 || 600;
    const maxInputPower3 = this.config.max_input_power3 || 600;
    const maxInputPower4 = this.config.max_input_power4 || 600;
    
    const p1Pct = Math.round((this._p1 / maxInputPower) * 100);
    const p2Pct = Math.round((this._p2 / maxInputPower2) * 100);
    const p3Pct = Math.round((this._p3 / maxInputPower3) * 100);
    const p4Pct = Math.round((this._p4 / maxInputPower4) * 100);


    const selectEntity = this._hass.states[`select.${this.config.device}_charging_mode`];
    const switchEntity = this._hass.states[`switch.${this.config.device}_adaptive_mode`];


    return html`
      <div class="container">
        <div class="device">
          <!-- Header -->
          <div style="display:grid; justify-content:space-between; width:100%; padding:0 12px; margin-bottom:6px;">
            <div style="font-weight:600; color:var(--text); font-size:20px">
              ${this.config.name || this.config.device}
            </div>
            <div style="font-size:10px; color:var(--muted);">
              ${localize("labels.last_update", lang)}: ${this._lastUpdate}
            </div>
          </div>

          <!-- Unit mit Akku-Balken -->
           ${this.config.icon ? this._renderUnit(batteryClass):""}
        </div>

        <section class="grid">
          <!-- Solar -->
           ${this.config.solar ? html`
			<article class="card solar">
            <div class="title">
              ${localize("card.solar", lang)}
              <div class="right-big" @click=${() => this._handleMoreInfo(this._getEntity("total_input_power"))}>${this._solarPower}</div><div class="big-num-unit">W</div>
            </div>
            <div style="width: 85%;">
            <div class="barlabels">
              <div @click=${() => this._handleMoreInfo(this._getEntity("input_1_power"))}>${this._p1} W</div>
              <div @click=${() => this._handleMoreInfo(this._getEntity("input_2_power"))}>${this._p2} W</div>
              ${this._p3 != null ? html`<div @click=${() => this._handleMoreInfo(this._getEntity("input_3_power"))}>${this._p3} W</div>` : ""}
              ${this._p4 != null ? html`<div @click=${() => this._handleMoreInfo(this._getEntity("input_4_power"))}>${this._p4} W</div>` : ""}
            </div>
            <div class="barwrap">
              <div class="bar"><div class="fill" style="width:${p1Pct}%"></div></div>
              <div class="bar  ${this._p3 == null && this._p4 == null ? "r" : ""}"><div class="fill" style="width:${p2Pct}%"></div></div>
            ${this._p3 != null ? html`<div class="bar"><div class="fill" style="width:${p3Pct}%"></div></div>`
              : ""}
            ${this._p4 != null ? html`<div class="bar"><div class="fill" style="width:${p4Pct}%"></div></div>`
              : ""}
            </div>
            <div class="barlabels">
              <div class="hint">P1</div>
              <div class="hint">P2</div>
            ${this._p3 != null ? html`<div class="hint">P3</div>` : ""}
            ${this._p4 != null ? html`<div class="hint">P4</div>` : ""}
            </div>
            
            </div>
            <div class="icon"><ha-icon icon="mdi:solar-power-variant-outline"></ha-icon>︎</div>
          </article>` : ''}

          <!-- Output -->
          ${this.config.output ? html`
          <article class="card" @click=${() => this._handleMoreInfo(this._getEntity("total_output_power"))}>
              <div class="title">${localize("card.output", lang)}</div>
              <div class="subtitle">${localize("card.realtime", lang)}</div>
              <div class="flex-wrapper">
                <div class="big-num">${Number(this._outputPower).toFixed(1)}</div>
                <div class="big-num-unit">W</div>
              </div>
               <div class="icon"><ha-icon icon="mdi:transmission-tower"></ha-icon>︎</div>
            </article>
          ` : ''}

               <!-- Battery -->
            ${this.config.battery ? html`
            <article class="card battery-card">
              <div class="title">${localize("card.battery", lang)}</div>
              <div class="battery">
                <div class="ring"
                     style="
                      background: conic-gradient(
                          #FC2022 0 ${Math.min(this._batteryPercent, 15)}%, 
                          orange ${Math.min(this._batteryPercent, 50)}%, 
                          #58C3D3 ${Math.min(this._batteryPercent, 100)}%, 
                          rgb(13, 13, 13) ${this._batteryPercent}% 100%
                        );
                     "
                     @click=${() => this._handleMoreInfo(this._getEntity("battery_percentage"))}>
                  <div class="inner" style="position: relative;">
                      ${solar > output && this._batteryPercent < 100 ? html`
                        <ha-icon 
                          icon="mdi:lightning-bolt" 
                          class="pulse-green" 
                          style="
                            position:absolute; 
                            top:10px; 
                            transform: translateX(-50%); 
                          ">
                        </ha-icon>
                      ` : ''}
                    
                      <div style="
                           text-align:center; 
                           display:flex; 
                           flex-direction:column; 
                           align-items:center; 
                           justify-content:center; 
                           height:100%;
                           width:100%;
                        ">
                        <div class="flex-wrapper">
                          <div class="kwh">${Number(this._batteryKwh).toFixed(2)}</div>
                          <div class="big-num-unit white">kWh</div>
                        </div>
                        <div class="percent">${this._batteryPercent}%</div>
                      </div>
                    </div>
                    </div>
                <div class="icon"><ha-icon icon="mdi:battery-high"></ha-icon>︎</div>
              </div>
            </article>` : ''}

          <!-- Production -->
          ${this.config.production ? html`
          <article class="card"  @click=${() => this._handleMoreInfo(this._getEntity("daily_pv_charging"))}>
            <div class="title">${localize("card.production", lang)}</div>
            <div class="subtitle">${localize("card.today", lang)}</div>
           <div class="flex-wrapper"><div class="big-num">${Number(this._productionToday).toFixed(2)}</div><div class="big-num-unit">kWh</div></div>
            <div class="icon"><ha-icon icon="mdi:chart-bar"></ha-icon>︎</div>
          </article>` : ''}
       
       <!-- Settings Section -->
    ${this.config.settings || (this.config.custom_settings?.length && this._hass) ? html`
  <div class="card flat" style="grid-column:1 / -1">

    <!-- Device Settings (nur im Device-Mode, wie bisher) -->
    ${this.config.device && this.config.settings ? html`
      <div class="row">
        <div class="left"><ha-icon icon="mdi:cog"></ha-icon><div style="font-weight:600">${localize("labels.charging_mode", lang)}</div></div>
        <div class="right">
          ${selectEntity
            ? html`
              <ha-select
                .value=${selectEntity.state}
                @selected=${(e) => {
                  const val = e.target.value;
                  this._hass.callService("select", "select_option", {
                    entity_id: selectEntity.entity_id,
                    option: val
                  });
                }}
              >
                ${(selectEntity.attributes?.options || []).map(
                  (opt) => html`<mwc-list-item value=${opt}>
                    ${localize(opt === "Simultaneous Charging/Discharging" ? "labels.simul_charge" : "labels.full_then_discharge", lang)}
                  </mwc-list-item>`
                )}
              </ha-select>
            `
            : html`<span>-</span>`}
        </div>
      </div>
      <div class="divider"></div>

      <div class="row">
        <div class="left"><ha-icon icon="mdi:power-plug-battery"></ha-icon><div style="font-weight:600">${localize("labels.discharge_mode", lang)}</div></div>
        <div class="right">
          ${switchEntity
            ? html`
              <ha-switch
                .checked=${switchEntity.state === "on"}
                @change=${(e) => {
                  const service = e.target.checked ? "turn_on" : "turn_off";
                  this._hass.callService("switch", service, { entity_id: switchEntity.entity_id });
                }}
              ></ha-switch>
            `
            : html`<span>-</span>`}
        </div>
      </div>
      <div class="divider"></div>

      <div class="row">
        <div class="left">
          <ha-icon icon="mdi:transmission-tower-import"></ha-icon>
          <div style="font-weight:600">${localize("labels.surplus", lang)}</div>
        </div>
        <div class="right">
          <ha-switch
            style="margin-left:auto"
            .checked=${this._hass.states[`switch.${this.config.device}_surplus_feed_in`]?.state === "on"}
            @change=${(e) => this._toggleSwitch(`switch.${this.config.device}_surplus_feed_in`, e.target.checked)}>
          </ha-switch>
        </div>
      </div>
    ` : ''}

    <!-- Custom Settings -->
        ${this.config.custom_settings?.length && this._hass  ? html`
          ${this.config.custom_settings.map((item, index) => {
            const entity = this._hass.states[item.entity];
            if (!entity) return html``;
    
            const icon = item.icon || entity.attributes.icon;
            const name = item.name || entity.attributes.friendly_name || item.entity;
            const renderDivider = index < this.config.custom_settings.length - 1 
              ? html`<div class="divider"></div>` 
              : html``;
    
  
            if (entity.entity_id.startsWith("switch.")) {
              return html`
                <div class="row">
                  <div class="left">
                    ${icon ? html`<ha-icon icon="${icon}"></ha-icon>` : ""}
                    <div style="font-weight:600">${name}</div>
                  </div>
                  <div class="right">
                    <ha-switch
                      .checked=${entity.state === "on"}
                      @change=${(e) => {
                        const service = e.target.checked ? "turn_on" : "turn_off";
                        this._hass.callService("switch", service, { entity_id: entity.entity_id });
                      }}>
                    </ha-switch>
                  </div>
                </div>
                ${renderDivider}
              `;
            }
    
  
            if (entity.entity_id.startsWith("select.")) {
              return html`
                <div class="row">
                  <div class="left">
                    ${icon ? html`<ha-icon icon="${icon}"></ha-icon>` : ""}
                    <div style="font-weight:600">${name}</div>
                  </div>
                  <div class="right">
                    <ha-select
                      .value=${entity.state}
                      @selected=${(e) => {
                        const val = e.target.value;
                        this._hass.callService("select", "select_option", {
                          entity_id: entity.entity_id,
                          option: val
                        });
                      }}>
                      ${(entity.attributes?.options || []).map(
                        (opt) => html`<mwc-list-item value=${opt}>${opt}</mwc-list-item>`
                      )}
                    </ha-select>
                  </div>
                </div>
                ${renderDivider}
              `;
            }
    
            return html`
              <div class="row">
                <div class="left">
                  ${icon ? html`<ha-icon icon="${icon}"></ha-icon>` : ""}
                  <div style="font-weight:600">${name}</div>
                </div>
                <div class="right">${entity.state}</div>
              </div>
              ${renderDivider}
            `;
          })}
        ` : ''}
      </div>
    ` : ''}
        </section>
      </div>
    `;
  }


  static getConfigElement() {
    return document.createElement("b2500d-card-editor");
  }

  getCardSize() { return 3; }
}

customElements.define("b2500d-card", B2500DCard);


// -------------------------------------
// Config Editor
// -------------------------------------

class B2500DCardEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
    };
  }


  setConfig(config) {
    this._config = {
      output: true,
      battery: true,
      production: true,
      settings: true,
      solar: true,
      icon: true,
      compact: false,
      max_input_power: 600,
      max_input_power2: 600,
      max_input_power3: 600,
      max_input_power4: 600,
      entities: {
        battery_percentage: "",
        battery_capacity: "",
        solar_power: "",
        p1_power: "",
        p2_power: "",
        output_power: "",
        production_today: ""
      },
      ...config,
    };
  }
  


  set hass(hass) {
    this._hass = hass;
  }

  _valueChanged(ev) {
    if (!this._config || !this._hass) return;

    const newConfig = { ...ev.detail.value };

    if (newConfig.entities) {
      const isEmpty = Object.values(newConfig.entities).every(
        (v) => v === null || v === undefined || v === ""
      );
      if (isEmpty) {
        delete newConfig.entities;
      }
    }

    this._config = newConfig;

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true
      })
    );
  }

  _computeLabel(field) {
    const name = field?.name || field; 
    const lang = this._hass?.locale?.language || this._hass?.language || navigator?.language || "en";
    return localize(`editor.${name}`, lang);
  }

  _computeHelper(field) {
    const name = field?.name || field;
    const lang = this._hass?.locale?.language || this._hass?.language || navigator?.language || "en";
    return localize(`helpers.${name}`, lang);
  }

  render() {
    if (!this._config) return html``;

    const schema = [
      { name: "name", selector: { text: {} } },
      { name: "device", selector: { text: {} } },
      {
        name: "entities",
        selector: {
          object: {
            properties: {
              battery_percentage: { selector: { entity: {} } },
              battery_capacity: { selector: { entity: {} } },
              solar_power: { selector: { entity: {} } },
              p1_power: { selector: { entity: {} } },
              p2_power: { selector: { entity: {} } },
              output_power: { selector: { entity: {} } },
              production_today: { selector: { entity: {} } }
            }
          }
        }
      },
      {
          name: "custom_settings",
          selector: {
            object: {
              properties: {
                entity: { selector: { entity: {} } },
                name: { selector: { text: {} } },
                icon: { selector: { text: {} } }
              }
            }
          },
        },
      { name: "compact", selector: { boolean: {} } },
      { name: "icon", selector: { boolean: {} } },
      { name: "solar", selector: { boolean: {} } },
      { name: "output", selector: { boolean: {} } },
      { name: "battery", selector: { boolean: {} } },
      { name: "production", selector: { boolean: {} } },
      { name: "settings", selector: { boolean: {} } },
      { name: "max_input_power", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power2", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power3", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power4", selector: { number: { min: 100, max: 5000, step: 50 } }},
    ];

    return html`
      <ha-form
        .hass=${this._hass}
        .data=${this._config}
        .schema=${schema}
        .computeLabel=${(f) => this._computeLabel(f)}
        .computeHelper=${(f) => this._computeHelper(f)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}


customElements.define("b2500d-card-editor", B2500DCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
   type: "b2500d-card",
   name: "Solar Storage Card",
   preview: false,
   description: "Visualizing solar storage systems",

});