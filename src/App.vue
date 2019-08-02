<template>
  <v-app>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">Favorites</md-button>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">My App name</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <md-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Favorites</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">Abbey Christansen</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Alex Nelson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Mary Johnson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon>chat_bubble</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-drawer>
      <v-content transition="slide-x-transition">
        <v-container>
          <router-view />
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      drawer: true,
      items: [
        { title: 'Quadrinhos', icon: 'mdi-book-open' },
        { title: 'Personagens', icon: 'mdi-human' },
        { title: 'Criadores', icon: 'mdi-human-male-female' },
        { title: 'Eventos', icon: 'mdi-calendar-multiple' },
        { title: 'Series', icon: 'mdi-book-multiple-variant' },
        { title: 'Histórias', icon: 'mdi-book-multiple' }
      ],
      right: true,
      expandOnHover: true,
      showNavigation: false,
      showSidepanel: false
    };
  }
};
</script>
