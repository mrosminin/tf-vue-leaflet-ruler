# tf-vue-leaflet-ruler

vue2 component for tf-leaflet-ruler

## Install

```
npm install tf-vue-leaflet-ruler
```

## Usage

```
import LRuler from "tf-vue-leaflet-ruler"
```

```
<l-ruler :options="rulerOptions" :map="$parent.mapObject"/>
```

```
components: { LRuler },
data() {
    return {
        rulerOptions: {
            position: "topleft",
            circleMarker: {
              color: "#F0284E",
              radius: 2
            },
            lineStyle: {
              color: "#9B51E0",
              dashArray: "1,6"
            },
            polyStyle: {
              stroke: false,
              fillColor: "#9B51E0",
              fillOpacity: 0.05
            }
        },
    }
}
```
