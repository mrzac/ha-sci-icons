const SCI_ICONS_MAP = {

  "frigateee":{
    path:"M21.6,8.8H2.4C1.6,8.8,1,9.7,1,10.7v1.9c0,1.1,0.7,1.6,1.4,1.6h6.9c0,0,0,0,0,0.1v0.4c0,0.6,0.5,1.1,1.1,1.1 h3.3c0.6,0,1.1-0.5,1.1-1.1v-0.4c0,0,0,0,0-0.1h6.9c0.7,0,1.4-0.5,1.4-1.6v-1.9C23,9.7,22.4,8.8,21.6,8.8z M21.6,13.2H2.4 c-0.1,0-0.4,0-0.4-0.6c0-0.5,0.3-0.9,0.4-0.9h19.1c0.2,0,0.4,0.3,0.4,0.9C22,13.2,21.7,13.2,21.6,13.2z", 
    keywords: ["bathroom","light","wall"]
  },
   "frigate":{
    path:"m 19.645057,2.0521406 c -0.05649,0.065901 -3.502181,1.1485654 -4.500115,1.4215846 -0.922618,0.2541907 -3.558668,1.261539 -3.935247,1.5063153 -0.12239,0.084731 -0.216533,0.2259471 -0.216533,0.3200917 0,0.094145 0.235361,0.5272104 0.517795,0.960276 0.640184,0.9791051 0.659013,1.2144665 0.178875,2.3442021 -0.470724,1.0920789 -0.762571,1.4404137 -1.525144,1.7981637 -0.3483349,0.160047 -0.7343285,0.395408 -0.866131,0.508381 -0.1318025,0.112974 -0.4707235,0.301264 -0.7531576,0.404823 -0.2824341,0.103559 -0.5272102,0.254191 -0.5460392,0.329506 -0.028244,0.122389 0.018829,0.122389 0.338921,0.01883 0.5083812,-0.178875 0.7719863,-0.09414 0.7719863,0.244776 0,0.301264 -0.3765787,0.564869 -1.3745124,0.979105 -2.391275,0.969691 -3.0879458,1.280368 -3.4080375,1.543973 -0.4895526,0.376579 -0.5554538,0.724914 -0.3012632,1.515729 0.103559,0.320092 0.1882893,0.687256 0.1882893,0.80023 0,0.197704 0.4989668,1.628704 1.2709536,3.662229 0.3106774,0.809644 0.9508611,1.929967 1.1109072,1.93938 0.047072,0 0.056486,-0.216534 0.01883,-0.480138 -0.056487,-0.423649 -0.1412171,-2.749022 -0.160046,-4.74489 -0.01883,-1.016761 0.1882893,-1.4969 0.9414468,-2.231229 0.7154996,-0.706086 1.7981635,-1.449827 2.7584397,-1.911137 0.640183,-0.301263 0.706084,-0.320092 1.440413,-0.263606 0.790815,0.05649 2.099426,-0.122387 2.814925,-0.376578 0.254192,-0.09415 0.489554,-0.103559 0.753159,-0.05649 0.508381,0.09415 3.737545,0.10356 3.737545,0.0094 0,-0.03766 -0.301264,-0.122388 -0.668428,-0.178874 -0.988519,-0.150632 -1.007348,-0.282435 -0.04706,-0.357751 1.562802,-0.131803 0.706085,-0.329506 -1.430999,-0.329506 -1.402756,0 -1.675776,-0.07532 -2.174741,-0.593112 -0.489553,-0.517795 -0.724916,-1.8734784 -0.470725,-2.7019522 0.05649,-0.178875 0.131803,-0.9414465 0.178874,-1.6946042 0.03765,-0.7531573 0.103561,-1.4404137 0.141219,-1.5345583 0.08473,-0.2165329 1.139151,-0.8284731 2.127669,-1.2332955 0.433066,-0.1788749 1.129736,-0.4707232 1.543973,-0.6495983 0.659013,-0.2824341 1.562802,-0.6684272 2.165328,-0.9132034 0.141216,-0.065902 0.103559,-0.084731 -0.197704,-0.084731 -0.207118,-0.00941 -0.404822,0.00941 -0.423651,0.028243 z", 
    keywords: ["light","table"]
  }
};

async function getIcon(name) {
  let new_name;

  if (!(name in SCI_ICONS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in SCI_ICONS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: SCI_ICONS_MAP[new_name].path};
    }
  }
  return {path: SCI_ICONS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(SCI_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["sci"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["sci"] = getIcon;


console.info(
    `%c HASS-HUE-ICONS %c Version 1.2.47 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
