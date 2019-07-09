<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout column>
        <v-flex xs12>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="Profile name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  // components: {
  //   HelloWorld
  // }
})
export default class Profile extends Vue {}
</script>
