<template>
  <v-container id="take-notes-space">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-sheet shaped>
          <v-text-field
            hide-details
            label="Solo"
            :placeholder="placeholder"
            solo
            single-line
            v-model="note.title"
            @focus="visible='block'"
          ></v-text-field>
          <v-sheet shaped :style="{display:visible}">
            <v-textarea
              auto-grow
              placeholder="Take a note..."
              solo
              v-model="note.content"
            ></v-textarea>
            <v-btn text small @click="handleClose">Close</v-btn>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>

    <div class="notes-list">
      <div class="notes-card" v-for="(note, i) in notes" :key="i">
        <div class="notes notes-title" contenteditable="false" aria-multiline="true" role="textbox" dir="ltr">{{note.title}}</div>
        <div class="notes notes-content" contenteditable="false" aria-multiline="true" role="textbox" dir="ltr">
          {{note.content}}
        </div>
        <div class="toolbar-pad">
          <v-toolbar dense flat class="toolbar">
            <v-spacer></v-spacer>
            <v-menu offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list dense>
                <v-list-item
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title @click="deleteNote(i)">Delete Note</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Notes',
  data: () => ({
    visible: 'none',
    note: {
      title: '',
      content: ''
    },
    notes: [
      {
        title: 'Hey there',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Hello there mate',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna. Libero nunc consequat interdum varius. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Urna duis convallis convallis tellus id interdum velit laoreet id. Maecenas volutpat blandit aliquam etiam erat velit. Sed tempus urna et pharetra pharetra massa massa. Auctor augue mauris augue neque gravida in fermentum. Accumsan sit amet nulla facilisi morbi tempus. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Mattis aliquam faucibus purus in. Et netus et malesuada fames ac turpis egestas sed tempus. Donec adipiscing tristique risus nec feugiat. Ut tristique et egestas quis ipsum suspendisse. Gravida rutrum quisque non tellus orci ac auctor. Diam maecenas sed enim ut sem viverra aliquet eget sit. Faucibus purus in massa tempor. Dolor sit amet consectetur adipiscing elit.'
      },
      {
        title: 'Hello there mate',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna. Libero nunc consequat interdum varius. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Urna duis convallis convallis tellus id interdum velit laoreet id. Maecenas volutpat blandit aliquam etiam erat velit. Sed tempus urna et pharetra pharetra massa massa.'
      },
      {
        title: 'Hello there mate',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Hello there mate',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum posuere urna. Libero nunc consequat interdum varius. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Urna duis convallis convallis tellus id interdum velit laoreet id. Maecenas volutpat blandit aliquam etiam erat velit. Sed tempus urna et pharetra pharetra massa massa. Auctor augue mauris augue neque gravida in fermentum. Accumsan sit amet nulla facilisi morbi tempus. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Mattis aliquam faucibus purus in. Et netus et malesuada fames ac turpis egestas sed tempus. Donec adipiscing tristique risus nec feugiat. Ut tristique et egestas quis ipsum suspendisse. Gravida rutrum quisque non tellus orci ac auctor. Diam maecenas sed enim ut sem viverra aliquet eget sit. Faucibus purus in massa tempor. Dolor sit amet consectetur adipiscing elit.'
      }
    ]
  }),
  methods: {
    handleClose () {
      if (this.note.title.length !== 0 || this.note.content.length !== 0) {
        const data = {
          title: this.note.title,
          content: this.note.content
        }
        this.notes.unshift(data)
        this.note.title = ''
        this.note.content = ''
      }
      this.visible = 'none'
    },
    deleteNote (index) {
      this.notes.splice(index, 1)
    }
  },
  computed: {
    placeholder () {
      return this.visible !== 'block' ? 'Take a note...' : 'Title'
    }
  },
  watch: {
    'note.content': function (val) {
      if (val.length > 0) {
        console.log(val)
      }
    }
  }
}
</script>

<style scoped>
.notes-list {
  column-width: 240px;
  column-gap: 15px;
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
}

.notes-list > .notes-card {
  border: 1px solid #000;
  border-radius: 8px;
  padding: 10px 10px 10px 10px;
  display: inline-block;
  margin: 0 2px 15px;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
}

.notes-card:hover{
  cursor: default;
}

.notes-card > .toolbar-pad {
  opacity: 0;
  transition-duration: .218s;
  transition-property: opacity;
}

.notes-card:hover > .toolbar-pad {
  opacity: 1;
}

@media screen and (max-width: 750px) {
  .notes-list { column-gap: 0px; }
  .notes-list > .notes-card >  figure { width: 100%; }
}
</style>