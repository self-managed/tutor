<template>
    <v-container>
        <v-card>
            <v-avatar size="80" >
            <v-img :src="avatarUrl"></v-img>
            </v-avatar>
            <div class="text-center mt-2">{{ name }}</div>
        </v-card>

        <v-card>
            <v-card-title>
              <div>教學背景</div>
              <v-btn icon @click="editMode = !editMode">
                <v-icon>{{ editMode ? 'mdi-check' : 'mdi-pencil' }}</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <template v-if="!editMode">
                {{ content }}
              </template>
              <template v-else>
                <v-textarea v-model="draftContent"></v-textarea>
              </template>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="editMode" @click="save">Save</v-btn>
                <v-btn v-if="editMode" @click="cancel">Cancel</v-btn>
            </v-card-actions>
        </v-card>

        <v-card>
            <v-card-title>
              <div>課程簡介</div>
              <v-btn icon @click="editMode = !editMode">
                <v-icon>{{ editMode ? 'mdi-check' : 'mdi-pencil' }}</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <template v-if="!editMode">
                {{ content }}
              </template>
              <template v-else>
                <v-textarea v-model="draftContent"></v-textarea>
              </template>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="editMode" @click="save">Save</v-btn>
                <v-btn v-if="editMode" @click="cancel">Cancel</v-btn>
            </v-card-actions>
        </v-card>

        <v-card>
            <v-card-title>
              <div>上課注意事項</div>
              <v-btn icon @click="editMode = !editMode">
                <v-icon>{{ editMode ? 'mdi-check' : 'mdi-pencil' }}</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <template v-if="!editMode">
                {{ content }}
              </template>
              <template v-else>
                <v-textarea v-model="draftContent"></v-textarea>
              </template>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="editMode" @click="save">Save</v-btn>
                <v-btn v-if="editMode" @click="cancel">Cancel</v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '凱莉',
        avatarUrl: 'https://via.placeholder.com/80',
        title: 'Editable Text Box',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus quis lectus sodales maximus a non dui.',
        draftContent: '',
        editMode: false
      }
    },
    methods: {
      save() {
        this.content = this.draftContent
        this.editMode = false
      },
      cancel() {
        this.draftContent = this.content
        this.editMode = false
      }
    }
  }
  </script>