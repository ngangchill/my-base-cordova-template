<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                    <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
            <div class="center">Vue-OnsenUI App</div>
            <div class="right">
                <v-ons-search-input placeholder="Search something"></v-ons-search-input>
            </div>
        </v-ons-toolbar>

        <v-ons-card>
            <div class="title">Hola</div>
            <div class="content">
                <v-ons-list>
                    <v-ons-list-header>Bindings</v-ons-list-header>
                    <v-ons-list-item>Vue</v-ons-list-item>
                    <v-ons-list-item>Angular</v-ons-list-item>
                    <v-ons-list-item>React</v-ons-list-item>
                </v-ons-list>
            </div>

        </v-ons-card>

        <v-ons-row>
            <v-ons-col width="25%">
                <v-ons-card @click="push">
                    <div class="title">Search</div>
                    <div class="content">Cordova Template</div>
                </v-ons-card>
            </v-ons-col>
            <v-ons-col width="25%">
                <v-ons-card @click="push">
                    <div class="title">Add</div>
                    <div class="content">Cordova Template</div>
                </v-ons-card>
            </v-ons-col>
            <v-ons-col width="25%">
                <v-ons-card @click="push">
                    <div class="title">Run</div>
                    <div class="content">Cordova Template</div>
                </v-ons-card>
            </v-ons-col>
            <v-ons-col width="25%">
                <v-ons-card @click="push">
                    <div class="title">fun</div>
                    <div class="content">Cordova Template</div>
                </v-ons-card>
            </v-ons-col>
        </v-ons-row>
        <v-ons-card>
            
      <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style="width: 100%">
      <div class="title">
        Awesome framework
      </div>
      <div class="content">
        <div>
          <v-ons-button><v-ons-icon icon="ion-thumbsup"></v-ons-icon></v-ons-button>
          <v-ons-button><v-ons-icon icon="ion-share"></v-ons-icon></v-ons-button>
        </div>
        <v-ons-list>
          <v-ons-list-header><v-ons-icon icon="fa-file"></v-ons-icon>Bindings</v-ons-list-header>
          <v-ons-list-item>Vue</v-ons-list-item>
          <v-ons-list-item>Angular</v-ons-list-item>
          <v-ons-list-item>React</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>

        <p class="lks-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo alias porro officia, odio temporibus sit voluptate eveniet excepturi quis nobis ab voluptas sequi, ducimus at atque animi? Labore, odio, iure.
        </p>
        <v-ons-card @click="push">
            <div class="title">About</div>
            <div class="content">Cordova Template</div>
        </v-ons-card>
        <v-ons-button modifier="large--quiet" @click="$store.commit('splitter/toggle')">Open left menu</v-ons-button>
    

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
    </v-ons-page>
</template>
<script>
import About from './About.vue';
export default{
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
    },
    methods: {
        push(page){
            this.$store.commit('navigator/push', About);
        },
        hola(data){
            
        }

    }
}
</script>
<style scoped>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>