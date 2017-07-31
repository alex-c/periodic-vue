<template>
    <div id="sidebar">
        <div id="sidebar-control" v-show="!sidebarToggled">
            <a class="button is-dark is-small" @click="sidebarToggled = true"><icon name="chevron-left"></icon> Hide</a>
        </div>
        <div id="sidebar-control-toggled" v-show="sidebarToggled">
            <span @click="sidebarToggled = false">
                <icon name="chevron-right"></icon>
            </span>
        </div>
        <div id="sidebar-inner" v-show="!sidebarToggled">
            <div id="header" v-show="!sidebarToggled">
                <div id="logo-backdrop">
                    <icon name="flask" scale="7"></icon>
                </div>
                <div id="title">periodic-vue</div>
            </div>
            <div id="sidebar-content">
                <div id="project-description">A simple periodic table, built as a learning project to get started with Vue! Visit the <a href="https://github.com/alex-c/periodic-vue" target="_blank">Github repository</a>.</div>
                <div>Built with:
                    <a href="https://www.vuejs.org" target="_blank">
                        <div class="sidebar-link">
                            <icon name="vue" scale="1"></icon> Vue
                        </div>
                    </a>
                    <a href="http://bulma.io/" target="_blank">
                        <div class="sidebar-link">
                            <icon name="bulma" scale="1"></icon> Bulma
                        </div>
                    </a>
                    <a href="http://fontawesome.io/" target="_blank">
                        <div class="sidebar-link">
                            <icon name="font-awesome" scale="1"></icon> Font Awesome
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return({
            sidebarToggled: false,
            sidebarEnterDone: true
        });
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#sidebar {
    height: 100%;
    float: left;
    border-right: 1px solid black;
    background-color: #3C3C3C;
    color: white;
    -webkit-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 0px 10px 0px rgba(0,0,0,0.75);
}

#sidebar-control {
    padding: 8px;
    text-align: right;
}

#sidebar-control .fa-icon {
    margin-right: 12px;
}

#sidebar-control-toggled {
    height: 100%;
    float: right;
}

#sidebar-control-toggled .fa-icon {
    margin: 8px;
}

#sidebar-control-toggled .fa-icon:hover {
    cursor: pointer;
}

#sidebar-inner {
    width: 300px;
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

#sidebar-content {
    text-align: left;
}

#sidebar-content > div {
    margin: 16px;
}

#project-description a:link {
    color: $periodic-bg-color;
}

#project-description a:hover {
    color: white;
}

.sidebar-link {
    width: 240px;
    margin: 4px auto;
    padding: 4px;
    padding-left: 8px;
    text-align: left;
    font-size: 12px;
    background-color: #4A4A4A;
    border-radius: 5px;
}

.sidebar-link:hover {
    cursor: pointer;
    font-style: italic;
    background-color: #5C5C5C;
}

.sidebar-link .fa-icon {
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 4px;
}
</style>
