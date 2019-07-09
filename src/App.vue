<template>
  <div id="app">
    <v-app dark>
      <Sidebar />
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar.vue';

@Component({
  components: {
    Sidebar
  }
})
export default class App extends Vue {}
</script>

<style></style>
