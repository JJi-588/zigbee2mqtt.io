"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80552],{74137:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-4f287331",path:"/devices/TV02-Zigbee.html",title:"TuYa TV02-Zigbee control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TV02-Zigbee control via MQTT",description:"Integrate your TuYa TV02-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Open_window (binary)",slug:"open-window-binary",children:[]},{level:3,title:"Open_window_temperature (numeric)",slug:"open-window-temperature-numeric",children:[]},{level:3,title:"Holiday_temperature (numeric)",slug:"holiday-temperature-numeric",children:[]},{level:3,title:"Comfort_temperature (numeric)",slug:"comfort-temperature-numeric",children:[]},{level:3,title:"Eco_temperature (numeric)",slug:"eco-temperature-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Boost_timeset_countdown (numeric)",slug:"boost-timeset-countdown-numeric",children:[]},{level:3,title:"Frost_protection (binary)",slug:"frost-protection-binary",children:[]},{level:3,title:"Heating_stop (binary)",slug:"heating-stop-binary",children:[]},{level:3,title:"Online (binary)",slug:"online-binary",children:[]},{level:3,title:"Holiday_mode_date (numeric)",slug:"holiday-mode-date-numeric",children:[]},{level:3,title:"Programming (composite)",slug:"programming-composite",children:[]},{level:3,title:"Error_status (numeric)",slug:"error-status-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TV02-Zigbee.md",git:{updatedTime:1638555404e3}}},261:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var i=o(66252);const a=(0,i.uE)('<h1 id="tuya-tv02-zigbee" tabindex="-1"><a class="header-anchor" href="#tuya-tv02-zigbee" aria-hidden="true">#</a> TuYa TV02-Zigbee</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TV02-Zigbee</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Thermostat radiator valve</td></tr><tr><td>Exposes</td><td>battery_low, lock (state), open_window, open_window_temperature, holiday_temperature, comfort_temperature, eco_temperature, climate (preset, local_temperature_calibration, local_temperature, current_heating_setpoint), boost_timeset_countdown, frost_protection, heating_stop, online, holiday_mode_date, programming, error_status, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TV02-Zigbee.jpg" alt="TuYa TV02-Zigbee"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,i.Uk)("This device supports OTA updates, for more information see "),r=(0,i.Uk)("OTA updates"),c=(0,i.Uk)("."),n=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="open-window-binary" tabindex="-1"><a class="header-anchor" href="#open-window-binary" aria-hidden="true">#</a> Open_window (binary)</h3><p>Enables/disables the status on the device. Value can be found in the published state on the <code>open_window</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open_window is ON, if <code>OFF</code> OFF.</p><h3 id="open-window-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-temperature-numeric" aria-hidden="true">#</a> Open_window_temperature (numeric)</h3><p>Open window temperature. Value can be found in the published state on the <code>open_window_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric" aria-hidden="true">#</a> Holiday_temperature (numeric)</h3><p>Holiday temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric" aria-hidden="true">#</a> Comfort_temperature (numeric)</h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric" aria-hidden="true">#</a> Eco_temperature (numeric)</h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>preset</code>, <code>local_temperature_calibration</code>, <code>local_temperature</code>, <code>current_heating_setpoint</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>0</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>holiday</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="boost-timeset-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-timeset-countdown-numeric" aria-hidden="true">#</a> Boost_timeset_countdown (numeric)</h3><p>Setting minimum 0 - maximum 465 seconds boost time. The boost (♨) function is activated. The remaining time for the function will be counted down in seconds ( 465 to 0 ).. Value can be found in the published state on the <code>boost_timeset_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_timeset_countdown&quot;: NEW_VALUE}</code>. The unit of this value is <code>second</code>.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary" aria-hidden="true">#</a> Frost_protection (binary)</h3><p>When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C ‚the device display &quot;AF&quot;.press the pair button to cancel.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost_protection is ON, if <code>OFF</code> OFF.</p><h3 id="heating-stop-binary" tabindex="-1"><a class="header-anchor" href="#heating-stop-binary" aria-hidden="true">#</a> Heating_stop (binary)</h3><p>Battery life can be prolonged by switching the heating off. To achieve this, the valve is closed fully. To activate the heating stop, the device display &quot;HS&quot; ‚press the pair button to cancel.. Value can be found in the published state on the <code>heating_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_stop&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> heating_stop is ON, if <code>OFF</code> OFF.</p><h3 id="online-binary" tabindex="-1"><a class="header-anchor" href="#online-binary" aria-hidden="true">#</a> Online (binary)</h3><p>Is the device online. Value can be found in the published state on the <code>online</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;online&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> online is ON, if <code>OFF</code> OFF.</p><h3 id="holiday-mode-date-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-mode-date-numeric" aria-hidden="true">#</a> Holiday_mode_date (numeric)</h3><p>The holiday mode( ⛱ ) will automatically start at the set time starting point and run the holiday temperature.. Value can be found in the published state on the <code>holiday_mode_date</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_mode_date&quot;: NEW_VALUE}</code>.</p><h3 id="programming-composite" tabindex="-1"><a class="header-anchor" href="#programming-composite" aria-hidden="true">#</a> Programming (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;undefined&quot;: {&quot;schedule_monday&quot;: VALUE, &quot;schedule_tuesday&quot;: VALUE, &quot;schedule_wednesday&quot;: VALUE, &quot;schedule_thursday&quot;: VALUE, &quot;schedule_friday&quot;: VALUE, &quot;schedule_saturday&quot;: VALUE, &quot;schedule_sunday&quot;: VALUE}}</code></p><ul><li><code>schedule_monday</code> (text): undefined.</li><li><code>schedule_tuesday</code> (text): undefined.</li><li><code>schedule_wednesday</code> (text): undefined.</li><li><code>schedule_thursday</code> (text): undefined.</li><li><code>schedule_friday</code> (text): undefined.</li><li><code>schedule_saturday</code> (text): undefined.</li><li><code>schedule_sunday</code> (text): undefined.</li></ul><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric" aria-hidden="true">#</a> Error_status (numeric)</h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35),s={},u=(0,o(83744).Z)(s,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[d,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[r])),_:1}),c]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);