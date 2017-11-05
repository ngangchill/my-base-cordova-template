<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <section style="margin: 16px">
      <v-ons-segment style="width: 260px">
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </v-ons-segment>

      <br><br>

      <v-ons-button class="button-margin">Normal</v-ons-button>
      <v-ons-button modifier="quiet" class="button-margin">Quiet</v-ons-button>
      <v-ons-button modifier="outline" class="button-margin">Outline</v-ons-button>
      <v-ons-button modifier="cta" class="button-margin">Call to action</v-ons-button>
      <v-ons-button modifier="light" class="button-margin">Light</v-ons-button>
      <v-ons-button modifier="large" class="button-margin">Large</v-ons-button>
    </section>

    <section style="margin: 16px">
      <v-ons-segment disabled style="width: 260px">
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </v-ons-segment>

      <br><br>

      <v-ons-button class="button-margin" disabled>Normal</v-ons-button>
      <v-ons-button modifier="quiet" class="button-margin" disabled>Quiet</v-ons-button>
      <v-ons-button modifier="outline" class="button-margin" disabled>Outline</v-ons-button>
      <v-ons-button modifier="cta" class="button-margin" disabled>Call to action</v-ons-button>
      <v-ons-button modifier="light" class="button-margin" disabled>Light</v-ons-button>
      <v-ons-button modifier="large" class="button-margin" disabled>Large</v-ons-button>
    </section>

    <v-ons-fab position="top right">
      <v-ons-icon icon="md-face"></v-ons-icon>
    </v-ons-fab>

    <v-ons-fab position="bottom left">
      <v-ons-icon icon="md-car"></v-ons-icon>
    </v-ons-fab>

    <fab></fab>
  </v-ons-page>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.button-margin {
  margin: 6px 0;
}
</style>
