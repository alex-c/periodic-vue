<template>
    <div id="periodic-table">
        <div id="table-container">
            <div id="toolbar">
                Highlight:
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="nonmetal" class="button is-small b-nonmetal">Nonmetals</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="noble-gas" class="button is-small b-noble-gas">Noble gases</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="alkali-metal" class="button is-small b-alkali-metal">Alkali metals</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="alkaline-earth-metal" class="button is-small b-alkaline-earth-metal">Alkaline earth metals</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="metalloid" class="button is-small b-metalloid">Metalloids</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="halogen" class="button is-small b-halogen">Halogens</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="metal" class="button is-small b-metal">Metals</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="transition-metal" class="button is-small b-transition-metal">Transition metals</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="lanthanoid" class="button is-small b-lanthanoid">Lanthanoids</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="actinoid" class="button is-small b-actinoid">Actinoids</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-element-group="post-transition-metal" class="button is-small b-post-transition-metal">Post transition metals</div>
            </div>
            <container width="100%">
                <grid>
                    <grid-item size="1/18" v-for="element in elementsData" :key="element.atomicNumber" v-if="element.symbol && isOnMainTable(element)">
                        <chemical-element   :element="element"
                                            :highlightedElementGroup="highlightedElementGroup"
                                            :class="buildElementClasses(element)"
                                            @showModal="triggerModal">
                        </chemical-element>
                    </grid-item>
                    <grid-item size="16/18" v-else-if="element.placeholder && element.placeholder==16"></grid-item>
                    <grid-item size="10/18" v-else-if="element.placeholder && element.placeholder==10"></grid-item>
                </grid>
                <grid>
                    <grid-item size="3/18"></grid-item>
                    <grid-item size="1/18" v-for="element in elementsData" :key="element.atomicNumber" v-if="element.symbol && !isOnMainTable(element)">
                        <chemical-element   :element="element"
                                            :highlightedElementGroup="highlightedElementGroup"
                                            :class="buildElementClasses(element)"
                                            @showModal="triggerModal">
                        </chemical-element>
                    </grid-item>
                    <grid-item size="3/18" v-else-if="element.placeholder && element.placeholder==3"></grid-item>
                </grid>
            </container>
            <element-modal v-if="showModal" :element="modalElement" @close="showModal = false"></element-modal>
        </div>
    </div>
</template>

<script>
import ChemicalElement from './ChemicalElement.vue';
import ElementModal from './ElementModal.vue';
export default {
    name: 'periodic-table',
    props: ['elementsData'],
    components: {ChemicalElement, ElementModal},
    data () {
        return ({
            highlightedElementGroup: '',
            showModal: false,
            modalElement: {}
        });
    },
    methods: {
        highlight: function(event) {
            this.highlightedElementGroup = event.target.dataset.elementGroup;
        },
        reset: function(event) {
            this.highlightedElementGroup = '';
        },
        buildElementClasses: function(element) {
            var groupBlock = element.groupBlock.replace(new RegExp(' ', 'g'), '-');
            if(this.highlightedElementGroup == '') {
                return('e-'+groupBlock);
            } else {
                return('e-'+groupBlock+' '+(groupBlock != this.highlightedElementGroup ? 'element-muted ' : ''));
            }

        },
        placeholderSize: function(element) {
            return(element.placeholder+'/18')
        },
        isOnMainTable: function(element) {
            var n = element.atomicNumber;
            return(n<=57 || n>=104 || (n>=72 && n<=89));
        },
        triggerModal: function(element) {
            this.modalElement = element;
            this.showModal = true;
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#toolbar {
    margin: 4px;
    margin-bottom: 8px;
    color: white;
    text-align: left;
}

#periodic-table {
    height: 100%;
    background-color: #2C2C2C;
    background-image: url('./assets/bg.png');
}

#table-container {
    height: 100%;
    padding: 12px;
    overflow: auto;
}

.vfg-grid-item {
    margin-bottom: 8px;
}

/* Buttons */
.b-nonmetal {background-color: $eg-nonmetal;}
.b-noble-gas {background-color: $eg-noble-gas;}
.b-alkali-metal {background-color: $eg-alkali-metal;}
.b-alkaline-earth-metal {background-color: $eg-alkaline-earth-metal;}
.b-metalloid {background-color: $eg-metalloid}
.b-halogen {background-color: $eg-halogen}
.b-metal {background-color: $eg-metal}
.b-transition-metal {background-color: $eg-transition-metal}
.b-lanthanoid {background-color: $eg-lanthanoid}
.b-actinoid {background-color: $eg-actinoid}
.b-post-transition-metal {background-color: $eg-post-transition-metal}
.button {
    border: none;
}
</style>
