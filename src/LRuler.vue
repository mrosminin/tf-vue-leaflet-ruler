<!-- Плагин линейки для карты, на основе https://github.com/panbak/vue2-leaflet-ruler -->
<script>
import { OptionsMixin, ControlMixin, optionsMerger } from "vue2-leaflet"
import "tf-leaflet-ruler"
import L from "leaflet"

export default {
  name: "LRuler",
  mixins: [ControlMixin, OptionsMixin],
  props: {
    map: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const options = optionsMerger(
      {
        ...this.controlOptions,
        options: this.options
      },
      this
    )
    L.control.ruler(options).addTo(this.map)
  },
  render() {
    return null
  }
}
</script>

<style lang="scss">
.leaflet-control-ruler {
  background-color: white !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.leaflet-control-ruler:hover {
  background-color: #dfdfdf !important;
}

.leaflet-control-ruler__btn {
  height: 38px;
  width: 38px;
  border-radius: 4px;
  background: url("./assets/icon.svg") no-repeat center;
}

.leaflet-control-ruler__btn:hover {
  background-color: #f4f4f4;
}

.leaflet-control-ruler__btn.active {
  background-color: #f4f4f4;
}

.leaflet-ruler__result-tooltip {
  background-color: white;
  border-width: 1px;
  border-color: #1897F2;
}

.leaflet-ruler__result-area-tooltip {
  background-color: white;
  border-width: 1px;
  border-color: #da0000;
}

.leaflet-ruler__moving-tooltip {
  background-color: rgba(255, 255, 255, .7);
  background-clip: padding-box;
  opacity: 0.5;
  border-color: #1897F2;
  border-width: 1px;
}
</style>
