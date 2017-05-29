<template>
    <div class="element" @click="$emit('showModal', element)">
        <div class="element-topbar">{{element.atomicNumber}}</div>
        <div class="element-body">{{element.symbol}}</div>
        <div class="element-footer">{{element.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'chemical-element',
    props: ['element', 'highlightedElementGroup'],
    data () {
        return ({});
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

.element {
    width: 100%;
    min-width: 64px;
    height: 84px;
    border-radius: 4px;
    text-align: center;
    opacity: 0.8;
}

.element:hover {
    opacity: 1.0;
    cursor: pointer;
}

.element-muted {
    opacity: 0.3;
}

.element-topbar {
    font-size: 14px;
    padding-right: 4px;
    text-align: right;
}

.element-body {
    font-size: 24px;
}

.element-footer {
    font-size: 12px;
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
</style>
