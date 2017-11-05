<template>
    <v-ons-speed-dial position="bottom right" direction="up"
      :open.sync="spdOpen"
    >
      <v-ons-fab>
        <v-ons-icon icon="md-plus"></v-ons-icon>
      </v-ons-fab>

      <v-ons-speed-dial-item v-for="(icon, name) in shareItems" :key="name"
        @click="$ons.notification.confirm(`Share on ${name}?`)"
      >
        <v-ons-icon :icon="icon"></v-ons-icon>
      </v-ons-speed-dial-item>

    </v-ons-speed-dial>
</template>

<script>
    export default {
        data(){
            return {
                spdOpen: false,
                shareItems: {
                    'Twitter': 'md-twitter',
                    'Facebook': 'md-facebook',
                    'Google+': 'md-google-plus',
                    'Github': 'md-github'
                }
            }
        }
    }
</script>
<style scoped>

</style>
