<template>
  <v-container>
    <v-layout row>
      <v-flex xs8>
        <v-select v-model="selectedMidiDevice" :items="midiDevices" label="Select Midi Device..." dense solo flat></v-select>
      </v-flex>
      <v-flex xs2>
        <v-btn outline fab small @click="loadMidiDevices">
          <v-icon>refresh</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebMidi, { IMidiChannel, Input } from 'webmidi';

@Component
export default class GeneralSettings extends Vue {
  private midiDevices: Array<Input> = [];
  private selectedMidiDevice: Input | undefined = undefined;

  public mounted(): void {
    this.loadMidiDevices();
  }

  private loadMidiDevices(): void {
    WebMidi.enable(err => {
      if (err) {
        console.log('WebMidi could not be enabled.', err);
      } else {
        console.log('WebMidi enabled!');
        for (let input of WebMidi.inputs) {
          midiDevices.push({ text: input.name, value: })
        }
      }
    });
  }
}
</script>
