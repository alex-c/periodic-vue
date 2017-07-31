<template>
    <div id="app">
        <sidebar></sidebar>
        <periodic-table :elementsData="elementsData"></periodic-table>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import PeriodicTable from './PeriodicTable.vue';
import elementsData from './elements.js';
export default {
    name: 'app',
    components: {Sidebar, PeriodicTable},
    data () {
        return {
            elementsData: elementsData
        }
    }
}
</script>

<style>
@import '~bulma/css/bulma.css';
@import url('https://fonts.googleapis.com/css?family=Raleway');

#app {
    text-align: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    right: 0px;
    font-family: 'Raleway', sans-serif;
}

a:link {color: white;}
a:hover {color: white;}
a:active {color: white;}
a:visited {color: white;}
</style>
