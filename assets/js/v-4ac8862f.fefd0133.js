"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[56572],{71613:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-4ac8862f",path:"/devices/PP-WHT-US.html",title:"Securifi PP-WHT-US control via MQTT",lang:"en-US",frontmatter:{title:"Securifi PP-WHT-US control via MQTT",description:"Integrate your Securifi PP-WHT-US via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power measurements",slug:"power-measurements",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PP-WHT-US.md",git:{updatedTime:1638555404e3}}},15792:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const o=(0,a.uE)('<h1 id="securifi-pp-wht-us" tabindex="-1"><a class="header-anchor" href="#securifi-pp-wht-us" aria-hidden="true">#</a> Securifi PP-WHT-US</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PP-WHT-US</td></tr><tr><td>Vendor</td><td>Securifi</td></tr><tr><td>Description</td><td>Peanut Smart Plug</td></tr><tr><td>Exposes</td><td>switch (state), power, current, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PP-WHT-US.jpg" alt="Securifi PP-WHT-US"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Additional steps are required because the Peanut Smart Plug does not provide a <code>modelId</code> in its database entry, and thus Zigbee2MQTT cannot identify the product or how to handle it.</p><p>Reset the device and initiate pairing mode by holding the pairing button (the small button next to the on/off button) for ten seconds, releasing the button, and unplugging the device. When plugged back in, the front LED will be blinking red and ready to receive a pairing request. When paired successfully, the red LED on the plug will stop blinking.</p><p>After pairing, you must stop Zigbee2MQTT and manually edit the Zigbee2MQTT <code>database.db</code> file with a text editor (note that the file may be owned by root). Find each line where the Peanut Smart Plug is listed (look for &quot;SecuriFi Ltd.&quot; in the <code>ManufName</code> field) and <strong>add</strong> <code>&quot;modelId&quot;:&quot;PP-WHT-US&quot;,</code> between two existing fields.</p><p><em>For example,</em> change <code>...&quot;manufId&quot;:4098,&quot;manufName&quot;:&quot;Securifi Ltd....</code> to <code>...&quot;manufId&quot;:4098,&quot;modelId&quot;:&quot;PP-WHT-US&quot;,&quot;manufName&quot;:&quot;Securifi Ltd....</code> on each line for the device.</p><p>Save the file and restart Zigbee2MQTT.</p><h3 id="power-measurements" tabindex="-1"><a class="header-anchor" href="#power-measurements" aria-hidden="true">#</a> Power measurements</h3><p>This device only support power measurements with an up-to-date firmware on the plug which can only be done via the original hub. In case of an older firmware you will only see 0 values in the measurements. Discussion: https://github.com/Koenkk/zigbee2mqtt/issues/809</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',12),r=(0,a.Uk)("This device supports OTA updates, for more information see "),d=(0,a.Uk)("OTA updates"),n=(0,a.Uk)("."),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),s={},c=(0,i(83744).Z)(s,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[r,(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[d])),_:1}),n]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);