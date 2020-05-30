<template>
<div data-app class="planning">
    <section class="dark-grey-text text-center planningintro">
        <h3 class="font-weight-bold black-text mb-4 pb-2">Planning Hub</h3>
        <hr class="w-header"/>
        <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">Time to get organized!</p>
        <div class="row">
            <div class="col-md-3 mb-4 pt">
                <a href="#deadlines" class="card hoverable planningtopic4">            
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'clock']" size="2x"/>
                        <h5 class="black-text mb-0">Deadlines</h5>
                    </div>
                </a>
            </div>
            <div class="col-md-3 mb-4 pt">
                <a href="#tasks" class="card hoverable">
                    <div class="card-body my-4 planningtopic1">
                        <font-awesome-icon :icon="['fas', 'tasks']" size="2x"/>
                        <h5 class="black-text mb-0">Tasks</h5>
                    </div>
                </a>
            </div>
            <div class="col-md-3 mb-4 pt">
                <a href="#guests" class="card hoverable planningtopic2">
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'users']" size="2x"/>
                        <h5 class="black-text mb-0">Guests</h5>
                    </div>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 mb-4 pt">
                <a href="#budget" class="card hoverable planningtopic3">
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'money-bill']" size="2x"/>
                        <h5 class="black-text mb-0">Budget</h5>            
                    </div>
                </a>
            </div>
            <div class="col-md-3 mb-4 pt">
                <a href="#vendors" class="card hoverable planningtopic4">            
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'utensils']" size="2x"/>
                        <h5 class="black-text mb-0">Vendors</h5>
                    </div>
                </a>
            </div>
            <div class="col-md-3 mb-4 pt">
                <a href="#partysection" class="card hoverable planningtopic4">            
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'glass-cheers']" size="2x"/>
                        <h5 class="black-text mb-0">Wedding Party</h5>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <hr><br><br>
    <section id="blank"></section> 
    <section id="deadlines">
        <h4 class="font-weight-bold black-text mb-4 pb-2">Deadlines</h4>
    </section>
    <section id="tasks">
        <v-data-table :headers="headers" :items="tasks" sort-by="duedate" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>To do list</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.todo" label="Task"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.owner" label="Owner"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.duedate" label="Due date"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.prio" label="Priority"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.notes" label="Notes"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </section>
    <section id="guests">
        <h4 class="font-weight-bold black-text mb-4 pb-2">Guests</h4>
    </section>
    <section id="budget">
        <h4 class="font-weight-bold black-text mb-4 pb-2">Budget</h4>
    </section>
    <section id="vendors">
        <h4 class="font-weight-bold black-text mb-4 pb-2">Vendors</h4>
    </section>
    <section id="partysection">
        <h4 class="font-weight-bold black-text mb-4 pb-2">Wedding Party</h4>
        <a class="partysheet" href="https://docs.google.com/spreadsheets/d/1lhdtEqxjbJppjwmtN0CG7L6zn02UqJ8Y13dtB09iAhI/edit#gid=0">Click to edit</a>
        <p>{{partyppl}}</p>
    </section>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'planning',
    data: () => ({
      partyppl: [],
      tasks: [],
      dialog: false,
      headers: [
        {
          text: 'Task',
          align: 'start',
          sortable: false,
          value: 'todo',
        },
        { text: 'Owner', value: 'owner' },
        { text: 'Due Date (YY/MM/DD)', value: 'duedate' },
        { text: 'Priority', value: 'prio' },
        { text: 'Notes', value: 'notes' , sortable:false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        todo: '',
        owner: '',
        duedate: '',
        prio: 0,
        notes: '',
      },
      defaultItem: {
        todo: '',
        owner: '',
        duedate: '',
        prio: 0,
        notes: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    mounted() {
    axios
      .get("https://sheetsu.com/apis/v1.0su/eded8760576f")
      .then(response => {
          this.partyppl = response.data;
      })
      .catch(error => {
          console.log('Request failed', error);
      });
    },

    methods: {
      initialize () {
        this.tasks = [
          {
            todo: 'Insure ring',
            owner: 'Kevin',
            duedate: '20/06/01',
            prio: 5,
            notes: '',
          },
          {
            todo: 'Create website',
            owner: 'Chasity',
            duedate: '20/09/18',
            prio: 3,
            notes: 'need database or google doc to keep track of rsvp\'d guests',
          },
          {
            todo: 'Block out hotel rooms for guests',
            owner: 'Chasity',
            duedate: '21/01/30',
            prio: 2,
            notes: 'Contact Lori about vacation rentals',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.tasks.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tasks.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.tasks[this.editedIndex], this.editedItem)
        } else {
          this.tasks.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
.planningtopic1, .planningtopic2, .planningtopic3, .planningtopic4 {
    color: maroon;
}
.pt {
    padding: 10px;
    margin: auto;
}
#blank, #deadlines, #tasks, #guests, #budget, #vendors, #partysection, .planningintro {
    height: 100vh;
    width: 100vw;
}
.page-item {
    padding: 0;
}
.modtask {
    padding: 2px;
}
</style>

