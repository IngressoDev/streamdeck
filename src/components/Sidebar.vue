<template>
  <v-navigation-drawer app permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Streamdeck</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list>
      <v-list-group prepend-icon="people_outline">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Profiles</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-for="(profile, i) in profiles" :key="i">
          <v-list-tile-action>
            <v-icon v-text="profile[1]"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="profile[0]"></v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="settings">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-for="(setting, i) in settings" :key="i" :to="setting[2]">
          <v-list-tile-action>
            <v-icon v-text="setting[1]"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="setting[0]"></v-list-tile-title>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  private profiles = [
    ['Profile 1', 'account_circle'],
    ['Profile 2', 'account_circle']
  ];
  private settings = [
    ['General', 'settings_applications', '/settings/general'],
    ['New Profile', 'add', '/settings/profile/new'],
    ['Edit Profile', 'edit', '/'],
    ['Delete', 'delete', '/']
  ];
}
</script>
