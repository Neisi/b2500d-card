import { LitElement, html, css } from "https://unpkg.com/lit-element/lit-element.js?module";

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
        border: 1px solid var(--ha-card-background, var(--card-background-color, #fff));
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
        justify-content:center;
      }

        .card {
          position: relative; 
          background: var(--ha-card-background,var(--card-background-color,#fff));
          border-radius: var(--radius);
          padding:12px;
          box-sizing:border-box;
        }
        
        .icon {
          position: absolute;
          bottom: 14px;   
          right: 14px;   
          font-size: 22px; 
          color: white; 
          font-weight: 700;
        }
        
        ha-icon[icon="mdi:battery-high"] {
          transform: rotate(90deg);
          transform-origin: center;
          backface-visibility: hidden;
          will-change: transform;
          display: inline-block;
        }
        
      .card.flat{ box-shadow:none; padding:0; overflow:hidden }

      .title {
        display:flex; align-items: baseline; gap:1px;
        font-weight:600; color:var(--text);
        font-size: var(--ha-font-size-l)
      }

      .right-big {
        margin-left:auto; font-weight:400; font-size:24px; color: white;
      }

      .big-num{ font-size:24px; color: white; font-weight:400; }
      .muted{ color:var(--muted) }
      .subtitle{ color:var(--muted); font-size:13px; margin-top:15px }
      
      .big-num-unit{
          font-size:14px;
          font-weight:400;
          margin-left: 1px;
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
        background: rgb(84, 158, 164);
      }
      .barlabels{ display:flex; justify-content:space-between; margin-top:8px; font-weight:400; color: #549EA4; }
      .barlabels .hint{ color: #549EA4; font-weight:400; font-size:12px; margin-top:2px }

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
        
        @keyframes pulseGreen {
          0%,100% { opacity:0.6; transform: scale(0.95); }
          50%     { opacity:1;   transform: scale(1.05); }
        }

      .kwh{ font-size:28px; font-weight:400; color: white; }
      .percent{ color:var(--muted); margin-top:2px; font-weight:400; font-size: var(--ha-font-size-l) }

      .row{
        display:flex; align-items:center; justify-content:space-between; gap:10px;
        padding:18px; 
        background: var(--ha-card-background,var(--card-background-color,#fff));
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
        color: white;
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
    if (!config.device) {
      throw new Error("You need to define a device!");
    }
    this.config = {
      output: true,
      battery: true,
      production: true,
      settings: true,
      solar: true,
      compact: false,
      ...config
    };
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.config) return;

    const device = this.config.device;
    const getState = (entity) => hass.states[entity]?.state || 0;

    this._solarPower = getState(`sensor.${device}_total_input_power`);
    this._p1 = getState(`sensor.${device}_input_1_power`);
    this._p2 = getState(`sensor.${device}_input_2_power`);
    this._outputPower = getState(`sensor.${device}_total_output_power`);
    this._batteryPercent = getState(`sensor.${device}_battery_percentage`);
    this._batteryKwh = getState(`sensor.${device}_battery_capacity`) / 1000;
    this._productionToday = getState(`sensor.${device}_daily_pv_charging`) / 1000;

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

  _toggleSwitch(entityId, checked) {
    this._hass.callService("switch", checked ? "turn_on" : "turn_off", {
      entity_id: entityId
    });
  }

  _formatLastUpdate(isoString) {
    if (!isoString) return '';
    
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Monate 0-11
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    
    const formatted = `${year}-${month}-${day} ${hour}:${minute}`;
    return formatted;
  }

  render() {
    const solar = Number(this._solarPower);
    const output = Number(this._outputPower);

    const batteryClass = solar > output && this._batteryPercent < 100 
         ? 'charging' 
        : output > solar && this._batteryPercent > 0 
        ? 'discharging' 
        : '';
        
    if (this.config.compact) {
        const percent = this._batteryPercent ?? 0;

        // Farbe bestimmen
        let color = "green";
        if (percent <= 19) {
          color = "red";
        } else if (percent <= 59) {
          color = "orange";
        }
        // Icon abhängig vom Prozentwert wählen (auf nächste 10 abrunden)
        let level = Math.ceil(percent / 10) * 10;
        let icon = "";
        // Sonderfälle
        if (level > 100) level = 100;
        if (percent === 100) {
          // Für 100% gibt es das Icon ohne Zahl
          icon = "mdi:battery";
        } else {
          icon = `mdi:battery-${level}`;
        }
      return html`
        <div class="compact">
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
    
    
    const p1Pct = Math.round((this._p1 / 400) * 100);
    const p2Pct = Math.round((this._p2 / 400) * 100);

    const selectEntity = this._hass.states[`select.${this.config.device}_charging_mode`];
    const switchEntity = this._hass.states[`switch.${this.config.device}_adaptive_mode`];

    const translations = {
      "Simultaneous Charging/Discharging": "Gleichzeitiges Laden/Entladen",
      "Fully Charge Then Discharge": "Vollständig Laden, dann Entladen"
    };


    return html`
      <div class="container">
        <div class="device">
          <!-- Header -->
          <div style="display:grid; justify-content:space-between; width:100%; padding:0 12px; margin-bottom:6px;">
            <div style="font-weight:600; color:var(--text); font-size:20px">
              ${this.config.name || this.config.device}
            </div>
            <div style="font-size:10px; color:var(--muted);">
              Aktualisierung: ${this._formatLastUpdate(this._hass.states[`sensor.${this.config.device}_last_update`]?.state)}
            </div>
          </div>

          <!-- Unit mit Akku-Balken -->
          <div class="unit">
            <div class="battery-bar">
              <div class="battery-fill ${batteryClass}" style="height:${Math.min(this._batteryPercent, 98)}%"></div>
            </div>
          </div>
        </div>

        <section class="grid">
          <!-- Solar -->
           ${this.config.solar ? html`
          <article class="card solar">
            <div class="title">
              Solarenergie
              <div class="right-big">${this._solarPower}</div><div class="big-num-unit">W</div>
            </div>
            <div style="width: 85%;">
            <div class="barlabels">
              <div>${this._p1} W</div>
              <div>${this._p2} W</div>
            </div>
            <div class="barwrap">
              <div class="bar p1"><div class="fill" style="width:${p1Pct}%"></div></div>
              <div class="bar p2 r"><div class="fill" style="width:${p2Pct}%"></div></div>
            </div>
            <div class="barlabels">
              <div class="hint">P1</div>
              <div class="hint">P2</div>
            </div>
            </div>
            <div class="icon"><ha-icon icon="mdi:solar-power-variant-outline"></ha-icon>︎</div>
          </article>` : ''}

          <!-- Output -->
          ${this.config.output ? html`
          <article class="card">
              <div class="title">Ausgang</div>
              <div class="subtitle">Echtzeitleistung</div>
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
              <div class="title">Batterie</div>
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
                     @click=${() => this._handleMoreInfo(`sensor.${this.config.device}_battery_percentage`)}>
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
                          <div class="big-num-unit">kWh</div>
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
          <article class="card">
            <div class="title">Stromerzeugung</div>
            <div class="subtitle">Heute</div>
           <div class="flex-wrapper"><div class="big-num">${Number(this._productionToday).toFixed(2)}</div><div class="big-num-unit">kWh</div></div>
            <div class="icon"><ha-icon icon="mdi:chart-bar"></ha-icon>︎</div>
          </article>` : ''}

          <!-- Settings -->
          ${this.config.settings ? html`
          <div class="card flat" style="grid-column:1 / -1">
            <div class="row">
              <div class="left"><ha-icon icon="mdi:cog"></ha-icon><div style="font-weight:600">Lademodus</div></div>
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
                            ${translations[opt] || opt}
                          </mwc-list-item>`
                        )}
                      </ha-select>
                    `
                  : html`<span>-</span>`}
              </div>
            </div>
            <div class="divider"></div>
            <div class="row">
              <div class="left"><ha-icon icon="mdi:power-plug-battery"></ha-icon><div style="font-weight:600">Entlademodus automatisch</div></div>
              <div class="right">
                ${switchEntity
                  ? html`
                      <ha-switch
                        .checked=${switchEntity.state === "on"}
                        @change=${(e) => {
                          const service = e.target.checked ? "turn_on" : "turn_off";
                          this._hass.callService("switch", service, {
                            entity_id: switchEntity.entity_id
                          });
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
                <div style="font-weight:600">Überschuss</div>
              </div>
              <div class="right">
                <ha-switch
                  style="margin-left:auto"
                  .checked=${this._hass.states[`switch.${this.config.device}_surplus_feed_in`]?.state === "on"}
                  @change=${(e) => this._toggleSwitch(`switch.${this.config.device}_surplus_feed_in`, e.target.checked)}>
                </ha-switch>
              </div>
            </div>
          </div>` : ''}
        </section>
      </div>
    `;
  }

  getCardSize() { return 3; }
}


customElements.define("b2500d-card", B2500DCard);
