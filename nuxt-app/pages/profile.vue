<template>
    <v-container>
      <v-row>
        <v-col cols="4">
        <v-card outlined class="pa-4 text-center">
          <v-avatar size="150" class="mb-2">
            <v-img src="https://via.placeholder.com/300" contain class="mx-auto"></v-img>
          </v-avatar>
          <div class="d-flex align-items-center">
            <v-icon color="primary">mdi-account</v-icon>
            <div class="ml-2 mb-1">本週課數:</div>
          </div>
          <div class="d-flex align-items-center"> 
            <v-icon color="primary">mdi-account</v-icon>
            <div class="ml-2">學生回饋:</div>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="mb-1">身份:  {{ user.role }} </div>
          <v-btn block color="primary" class="mt-4" @click="createIntroduce()">新增自介</v-btn>
        </v-card>
      </v-col>
        <v-col cols="8">
          <v-card outlined class="px-6 py-4">
            <v-row>
              <v-col cols="12">
                <h2>{{ user.name }}</h2>
              </v-col>
              <v-col cols="12">
                <strong>Birthday:</strong> {{ user.birthday }}
              </v-col>
              <v-col cols="12">
                <strong>Gender:</strong> {{ user.gender }}
              </v-col>
              <v-col cols="12">
                <strong>Email:</strong> {{ user.email }}
              </v-col>
              <v-col cols="12">
                <strong>Phone:</strong> {{ user.phone }}
              </v-col>
              <v-col cols="12">
                <strong>School:</strong> {{ user.school }}
              </v-col>
              <v-col cols="12">
                <strong>City:</strong> {{ user.city }}
              </v-col>
              <v-row>
                <v-col cols="6">
                  <v-btn block color="primary" @click="modify()">修改</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block color="secondary" @click="edit()">儲存</v-btn>
                </v-col>
              </v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default {
  data() {
    return {
      user: {
        name: '凱莉',
        birthday: '2022/01/01',
        gender: '女',
        email: 'tester@gmail.com',
        phone: '+886 911-222-123',
        school: '台灣師範大學',
        city: '台北市',
        avatar: 'https://via.placeholder.com/150',
        role: '教師'
      }
    }
  },
  methods: {
    createIntroduce() {
      // handle create introduce button click
    },
    modify() {
      // handle modify button click
    },
    edit() {
      // handle edit button click
    }
  }
}
</script>