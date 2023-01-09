
#  <p align="center"> 🌈 ha-sci-icons </p>
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

What is ha-sci-icons? `ha-sci-icons` is to provide Scientific and more icons for home assistant dashboard.
 
## 🧐 Features 
 
- 😍 Scientific icons
- 🚀 Tech icons 
- 🖌 Brand icons

## 🛠️ Installation 

### > HACS (Recommended)

Add this repo via HACS as a plugin and install. 

### > Manual

- Copy the `dist/ha-sci-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).
- Go to Configuration -> Dashboards -> Resources -> Add Resource
- set url as `/local/ha-sci-icons.js` and Resource Type as `Javascript Module`.
- Add the following to your `configuration.yaml`
```yaml
frontend:
  extra_module_url:
    - /local/ha-sci-icons.js
```
- Save and restart Home Assistant.

## 🧑🏻‍💻 Utilisation

The icons uses the prefix `sci:`.

### Example

```
title: My Room
state_color: true
type: entities
entities:
  - entity: light.my_wall_light
    name: My Wall Light
    icon: sci:adguard
```

## 🍰 Icons

### > Scientific icons

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |

### > Brand icons

## Troubleshooting

## 🙇 Acknowledgements 
Thanks to [@thomasloven](https://github.com/thomasloven/hass-fontawesome), [@arallsopp](https://github.com/arallsopp/hass-hue-icons) and [@hulkhaugen](https://github.com/hulkhaugen/hass-bha-icons)...
                
## ➤ License
Distributed under...