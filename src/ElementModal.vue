<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop>
                    <div class="modal-header">
                        <div class="modal-element" :class="'e-'+element.groupBlock.replace(new RegExp(' ', 'g'), '-')">
                            <div class="modal-element-symbol">{{element.symbol}}</div>
                            <span class="modal-element-number">{{element.atomicNumber}}</span>
                        </div>
                        <div class="modal-header-inner">
                            <span class="modal-element-name">{{element.name}}</span><br />
                            <span class="modal-element-group">{{element.groupBlock}}</span>
                        </div>
                        <span @click="$emit('close')"><icon class="modal-icon-close" name="times" scale="1.3"></icon></span>
                    </div>
                    <div class="modal-body">
                        Properties:
                        <table class="table is-narrow">
                            <tbody>
                                <tr>
                                    <td>Atomic mass:</td>
                                    <td>{{element.atomicMass}}</td>
                                    <td>Electronic configuration:</td>
                                    <td>{{element.electronicConfiguration}}</td>
                                </tr>
                                <tr>
                                    <td>Electronegativity</td>
                                    <td>{{element.electronegativity}}</td>
                                    <td>Atomic radius:</td>
                                    <td>{{element.atomicRadius}}</td>
                                </tr>
                                <tr>
                                    <td>Ion radius:</td>
                                    <td>{{element.ionRadius}}</td>
                                    <td>Van der Waals radius:</td>
                                    <td>{{element.vanDelWaalsRadius}}</td>
                                </tr>
                                <tr>
                                    <td>Ionization energy:</td>
                                    <td>{{element.ionizationEnergy}}</td>
                                    <td>Electron affinity:</td>
                                    <td>{{element.electronAffinity}}</td>
                                </tr>
                                <tr>
                                    <td>Oxidation states:</td>
                                    <td>{{element.oxidationStates}}</td>
                                    <td>Standard state:</td>
                                    <td>{{element.standardState}}</td>
                                </tr>
                                <tr>
                                    <td>Bonding type:</td>
                                    <td>{{element.bondingType}}</td>
                                    <td>Melting point:</td>
                                    <td>{{element.meltingPoint}}</td>
                                </tr>
                                <tr>
                                    <td>Boiling point:</td>
                                    <td>{{element.boilingPoint}}</td>
                                    <td>Density:</td>
                                    <td>{{element.density}}</td>
                                </tr>
                                <tr>
                                    <td>Discovered:</td>
                                    <td>{{element.yearDiscovered}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <div class="modal-tag" :class="'e-'+element.groupBlock.replace(new RegExp(' ', 'g'), '-')">
                            <a :href="'https://en.wikipedia.org/wiki/'+element.name" target="_blank">
                                <icon class="modal-tag-icon" name="wikipedia-w" scale="1"></icon>
                                {{element.name}} on Wikipedia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'element-modal',
    props: ['element'],
    data () {
        return ({});
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  background-color: #2C2C2C;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
}

.modal-header {
    position: relative;
    padding: 12px;
    border-radius: 6px 6px 0px 0px;
    background-color: #3C3C3C;
    color: white;
    text-align: left;
    overflow: auto;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
}

.modal-element {
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    color: #2C2C2C;
    text-align: center;
}

.modal-element-symbol {
    height: 40px;
    margin-top: 6px;
    margin-bottom: 4px;
    font-size: 40px;
}

.modal-header-inner {
    position: absolute;
    bottom: 20px;
    margin-left: 100px;
}

.modal-element-name{
    font-size: 24px;
}

.modal-element-group {
    color: #AAAAAA;
}

.modal-icon-close {
    float: right;
}

.modal-icon-close:hover {
    cursor: pointer;
}

.modal-body {
    padding: 8px;
    color: white;
    text-align: left;
}

.table {
    margin-bottom: 0px;
}

.modal-footer {
    padding: 8px;
    border-radius: 0px 0px 6px 6px;
    background-color: #3C3C3C;
    color: white;
    text-align: right;
    overflow: auto;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
}

.modal-footer a{
    color: #2C2C2C;
}

.modal-tag {
    padding-right: 8px;
    border-radius: 18px;
    float: right;
}

.modal-tag-icon {
    float: left;
    margin: 6px;
}

/* Element groups */
.e-nonmetal {background-color: $eg-nonmetal;}
.e-noble-gas {background-color: $eg-noble-gas;}
.e-alkali-metal {background-color: $eg-alkali-metal;}
.e-alkaline-earth-metal {background-color: $eg-alkaline-earth-metal;}
.e-metalloid {background-color: $eg-metalloid}
.e-halogen {background-color: $eg-halogen}
.e-metal {background-color: $eg-metal}
.e-transition-metal {background-color: $eg-transition-metal}
.e-lanthanoid {background-color: $eg-lanthanoid}
.e-actinoid {background-color: $eg-actinoid}
.e-post-transition-metal {background-color: $eg-post-transition-metal}

/* Transiton: modal */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
