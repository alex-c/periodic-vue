<template>
    <div id="sidebar">
        <div id="header">
            <div id="logo-backdrop">
                <icon name="flask" scale="7"></icon>
            </div>
            <div id="title">periodic-vue</div>
            <icon name="vue" scale="1"></icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return({});
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#sidebar {
    width: 300px;
    height: 100%;
    float: left;
    border-right: 1px solid black;
    background-color: #3C3C3C;
    color: white;
    -webkit-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 0px 10px 0px rgba(0,0,0,0.75);
}

#header {
    text-align: center;
    padding: 10px;
}

#title {
    font-size: 32px;
    text-shadow: 0px 2px 2px black;
}

#logo-backdrop {
    width: 140px;
    height: 140px;
    margin: auto;
    border-radius: 70px;
    padding: 10px;
    background-color: $periodic-bg-color;
}
</style>
