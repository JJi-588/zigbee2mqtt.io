"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97728],{6295:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r={key:"v-bf4120e8",path:"/devices/CP180335E-01.html",title:"Current Products Corp CP180335E-01 control via MQTT",lang:"en-US",frontmatter:{title:"Current Products Corp CP180335E-01 control via MQTT",description:"Integrate your Current Products Corp CP180335E-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/CP180335E-01.md",git:{updatedTime:1638555404e3}}},41303:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var r=o(66252);const i=(0,r.uE)('<h1 id="current-products-corp-cp180335e-01" tabindex="-1"><a class="header-anchor" href="#current-products-corp-cp180335e-01" aria-hidden="true">#</a> Current Products Corp CP180335E-01</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>CP180335E-01</td></tr><tr><td>Vendor</td><td>Current Products Corp</td></tr><tr><td>Description</td><td>Gen. 2 hybrid E-Wand</td></tr><tr><td>Exposes</td><td>battery, cover (state, tilt), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/CP180335E-01.jpg" alt="Current Products Corp CP180335E-01"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),d=(0,r.Uk)("How to use device type specific configuration"),a=(0,r.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),c={},s=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[d])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,r]of t)e[o]=r;return e}}}]);