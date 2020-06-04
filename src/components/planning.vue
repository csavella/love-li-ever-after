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
                        <font-awesome-icon :icon="['fas', 'lightbulb']" size="2x"/>
                        <h5 class="black-text mb-0">Pinspiration</h5>
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
    <section id="deadlines">
        <v-img src="https://i.imgur.com/x7iOvan.png" class="pinspiration" alt="themes" max-width="1200" aspect-ratio="1.7" contain></v-img>
        <v-img src="https://i.imgur.com/DnwpklI.png" class="pinspiration" alt="decor" max-width="1200" aspect-ratio="1.7" contain></v-img>
    </section>
    <hr><br><br>
    <section id="tasks">
        <v-data-table :headers="taskheaders" :items="tasks" sort-by="duedate" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>To do list</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="taskdialog" max-width="500px">
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
                                            <v-text-field v-model="editedTask.todo" label="Task"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedTask.owner" label="Owner"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedTask.duedate" label="Due date"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedTask.prio" label="Priority"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedTask.notes" label="Notes"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeTask">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="saveTask">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editTask(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteTask(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <button class="btn btn-info" @click="newTab(tasksheeturl)">Click to edit in Google Sheets</button>
    </section>
    <hr><br><br>
    <section id="guests">
        <v-data-table :headers="guestheaders" :items="guests" sort-by="lastname" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Guest list</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="guestdialog" max-width="500px">
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
                                            <v-text-field v-model="editedGuest.number" label="Number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.lastname" label="Last Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.firstname" label="First name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.email" label="Email"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.confirmed" label="Confirmed"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.type" label="Guest Type"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedGuest.diet" label="Dietary Restrictions"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeGuest">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="saveGuest">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editGuest(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteGuest(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <button class="btn btn-info" @click="newTab(guestsheeturl)">Click to edit in Google Sheets</button>
    </section>
    <hr><br><br>
    <section id="budget">
        <v-data-table :headers="budgetheaders" :items="bitems" sort-by="actualcost" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Budget</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="budgetdialog" max-width="500px">
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
                                            <v-text-field v-model="editedBitem.name" label="Item"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedBitem.projectedcost" label="Projected Cost"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedBitem.actualcost" label="Actual Cost"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedBitem.booked" label="Booked/Bought"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedBitem.notes" label="Notes"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeBitem">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="saveBitem">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editBitem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteBitem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <button class="btn btn-info" @click="newTab(budgetsheeturl)">Click to edit in Google Sheets</button>
    </section>
    <hr><br><br>
    <section id="vendors">
        <v-data-table :headers="vendorheaders" :items="vendors" sort-by="name" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Vendors</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="vendordialog" max-width="500px">
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
                                            <v-text-field v-model="editedVendor.name" label="Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedVendor.category" label="Category"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedVendor.cost" label="Cost"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedVendor.booked" label="Booked"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedVendor.notes" label="Notes"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeVendor">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="saveVendor">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editVendor(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteVendor(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <button class="btn btn-info" @click="newTab(vendorsheeturl)">Click to edit in Google Sheets</button>
    </section>
    <hr><br><br>
    <section id="partysection">
        <v-data-table :headers="partyheaders" :items="partyppl" sort-by="role" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Wedding Party</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="partydialog" max-width="500px">
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
                                            <v-text-field v-model="editedPerson.lastname" label="Last Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedPerson.firstname" label="First Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedPerson.role" label="Role"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closePerson">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="savePerson">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editPerson(item)">mdi-pencil</v-icon>
                <v-icon small @click="deletePerson(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <button class="btn btn-info" @click="newTab(partysheeturl)">Click to edit in Google Sheets</button>
    </section>
</div>
</template>

<script>
export default {
  name: 'planning',
  props: {
      bitems: { type: Array },
      partyppl: { type: Array },
      vendors: { type: Array },
      tasks: { type: Array },
      guests: { type: Array }
  },
    data: () => ({

      /*tasks for todo list*/
      tasksheeturl: "https://docs.google.com/spreadsheets/d/1Oe7CQ2btK8q0GZOS_P34EaMe83vt6lUvfA8J_AEMw6k/edit#gid=0",
      taskdialog: false,
      taskheaders: [
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
      editedTask: { todo: '', owner: '', duedate: '', prio: 0, notes: '', },
      defaultTask: { todo: '', owner: '', duedate: '', prio: 0, notes: '', },
      
      /*guest section*/
      guestsheeturl: "https://docs.google.com/spreadsheets/d/1IOUaHB8wW971VsEd2lrSN-rsuqhVMnurU38XFZFWakg/edit#gid=0",
      guestdialog: false,
      guestheaders: [
        {
          text: 'Number',
          align: 'start',
          sortable: true,
          value: 'number',
        },
        { text: 'Last Name', value: 'lastname' },
        { text: 'First Name', value: 'firstname' },
        { text: 'Email', value: 'email' },
        { text: 'Confirmed', value: 'confirmed' },
        { text: 'Guest Type', value: 'type' },
        { text: 'Dietary Restrictions', value: 'diet', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedGuest: { number: 0, lastname: '', firstname: '', email: '', confirmed: false, type: '', diet: '' },
      defaultGuest: { number: 0, lastname: '', firstname: '', email: '', confirmed: false, type: '', diet: '' },

      /*budget section*/
      budgetsheeturl: "https://docs.google.com/spreadsheets/d/1eoV8G5XFaQVjuLVnenA1ZxmhuMHRHjl0lUNNifiOcvs/edit#gid=0",
      budgetdialog: false,
      budgetheaders: [
        {
          text: 'Item',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Projected Cost', value: 'projectedcost' },
        { text: 'Actual Cost', value: 'actualcost' },
        { text: 'Booked/Bought', value: 'booked' },
        { text: 'Notes', value: 'notes', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedBitem: { name: '', projectedcost: '', actualcost: '', booked: false, notes: '' },
      defaultBitem: { name: '', projectedcost: '', actualcost: '', booked: false, notes: '' },

      /*vendor section*/
      vendorsheeturl: "https://docs.google.com/spreadsheets/d/1tTMz69WH7hiM1fXKWWZwu42C8uHrSKmpn-NxvTmkYDg/edit#gid=0",
      vendordialog: false,
      vendorheaders: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Category', value: 'category' },
        { text: 'Cost', value: 'cost' },
        { text: 'Booked', value: 'booked' },
        { text: 'Notes', value: 'notes', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedVendor: { name: '', category: '', cost: '', booked: false, notes: '' },
      defaultVendor: { name: '', category: '', cost: '', booked: false, notes: '' },

      /*partay section*/
      partysheeturl: "https://docs.google.com/spreadsheets/d/1lhdtEqxjbJppjwmtN0CG7L6zn02UqJ8Y13dtB09iAhI/edit#gid=0",
      partydialog: false,
      partyheaders: [
        {
          text: 'Last Name',
          align: 'start',
          sortable: true,
          value: 'lastname',
        },
        { text: 'First name', value: 'firstname' },
        { text: 'Role', value: 'role' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedPerson: { lastname: '', firstname: '', role: '' },
      defaultPerson: { lastname: '', firstname: '', role: '' },

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      taskdialog (val) {
        val || this.closeTask()
      },
      guestdialog (val) {
        val || this.closeGuest()
      },
      budgetdialog (val) {
        val || this.closeBitem()
      },
      vendordialog (val) {
        val || this.closeVendor()
      },
      partydialog (val) {
        val || this.closePerson()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
      },
      newTab(url) {
        window.open(url, "_blank");
      },

    /*task actions*/
      addTaskInSheet(task) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/971084032f1d' })
        client.create({
          todo: task.todo,
          owner: task.owner,
          duedate: task.duedate,
          prio: task.prio,
          notes: task.notes
        }).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      editTaskInSheet(oldtask, newtask) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/971084032f1d' })
        client.update(
            "todo",          // column name
            oldtask.todo,         // value to search for
            { 
              todo: newtask.todo, // hash with updates
              owner: newtask.owner,
              duedate: newtask.duedate,
              prio: newtask.prio,
              notes: newtask.notes
            } 
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      deleteTaskInSheet(task) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/971084032f1d' })
        client.delete(
            "todo",          // column name
            task.todo        // value to search for
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },

      editTask (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedTask = Object.assign({}, item)
        this.taskdialog = true
      },

      deleteTask (item) {
        const index = this.tasks.indexOf(item)
        var deletetask = confirm('Are you sure you want to delete this item?')
        if (deletetask) {
            this.deleteTaskInSheet(this.tasks[index])
            this.tasks.splice(index, 1)
        }
      },

      closeTask () {
        this.taskdialog = false
        this.$nextTick(() => {
          this.editedTask = Object.assign({}, this.defaultTask)
          this.editedIndex = -1
        })
      },

      saveTask () {
        //edit existing task
        if (this.editedIndex > -1) {
          this.editTaskInSheet(this.tasks[this.editedIndex], this.editedTask)
          Object.assign(this.tasks[this.editedIndex], this.editedTask)
        } else { //add task to table
          this.addTaskInSheet(this.editedTask)
          this.tasks.push(this.editedTask)
        }
        this.closeTask()
      },

      /*guest actions*/
      addGuestInSheet(guest) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/33fd43026ba4' })
        client.create({
          number: guest.number,
          lastname: guest.lastname,
          firstname: guest.firstname,
          email: guest.email,
          confirmed: guest.confirmed,
          type: guest.type,
          diet: guest.diet
        }).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      editGuestInSheet(oldguest, newguest) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/33fd43026ba4' })
        client.update(
            "number",          // column name
            oldguest.number,         // value to search for
            { 
              lastname: newguest.lastname, // hash with updates
              firstname: newguest.firstname,
              email: newguest.email,
              confirmed: newguest.confirmed,
              type: newguest.type,
              diet: newguest.diet
            } 
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      deleteGuestInSheet(guest) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/33fd43026ba4' })
        client.delete(
            "number",          // column name
            guest.number        // value to search for
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      editGuest (item) {
        this.editedIndex = this.guests.indexOf(item)
        this.editedGuest = Object.assign({}, item)
        this.guestdialog = true
      },

      deleteGuest (item) {
        const index = this.guests.indexOf(item)
        var deleteguest = confirm('Are you sure you want to delete this item?')
        if (deleteguest) {
            this.deleteGuestInSheet(this.guests[index])
            this.guests.splice(index, 1)
        }
      },

      closeGuest () {
        this.guestdialog = false
        this.$nextTick(() => {
          this.editedGuest = Object.assign({}, this.defaultGuest)
          this.editedIndex = -1
        })
      },

      saveGuest () {
        if (this.editedIndex > -1) {
          this.editGuestInSheet(this.guests[this.editedIndex], this.editedGuest)
          Object.assign(this.guests[this.editedIndex], this.editedGuest)
        } else {
          this.addGuestInSheet(this.editedGuest)
          this.guests.push(this.editedGuest)
        }
        this.closeGuest()
      },

      /*budget actions*/
      addBitemInSheet(bitem) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/de90e9842a02' })
        client.create({
          name: bitem.name,
          projectedcost: bitem.projectedcost,
          actualcost: bitem.actualcost,
          booked: bitem.booked,
          notes: bitem.notes
        }).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      editBitemInSheet(oldbitem, newbitem) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/de90e9842a02' })
        client.update(
            "name",          // column name
            oldbitem.name,         // value to search for
            { 
              name: newbitem.name, // hash with updates
              projectedcost: newbitem.projectedcost,
              actualcost: newbitem.actualcost,
              booked: newbitem.booked,
              notes: newbitem.notes
            } 
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      deleteBitemInSheet(bitem) {
        var sheetsu = require('sheetsu-node')
        var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/de90e9842a02' })
        client.delete(
            "name",          // column name
            bitem.name        // value to search for
        ).then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });
      },
      editBitem (item) {
        this.editedIndex = this.bitems.indexOf(item)
        this.editedBitem = Object.assign({}, item)
        this.budgetdialog = true
      },

      deleteBitem (item) {
        const index = this.bitems.indexOf(item)
        var deletebitem = confirm('Are you sure you want to delete this item?')
        if (deletebitem) {
            this.deleteBitemInSheet(this.bitems[index])
            this.bitems.splice(index, 1)
        }
      },

      closeBitem () {
        this.budgetdialog = false
        this.$nextTick(() => {
          this.editedBitem = Object.assign({}, this.defaultBitem)
          this.editedIndex = -1
        })
      },

      saveBitem () {
        if (this.editedIndex > -1) {
          this.editBitemInSheet(this.bitems[this.editedIndex], this.editedBitem)
          Object.assign(this.bitems[this.editedIndex], this.editedBitem)
        } else {
          this.addBitemInSheet(this.editedBitem)
          this.bitems.push(this.editedBitem)
        }
        this.closeBitem()
      },

      /*vendor actions*/
      editVendor (item) {
        this.editedIndex = this.vendors.indexOf(item)
        this.editedVendor = Object.assign({}, item)
        this.vendordialog = true
      },

      deleteVendor (item) {
        const index = this.vendors.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.vendors.splice(index, 1)
      },

      closeVendor () {
        this.vendordialog = false
        this.$nextTick(() => {
          this.editedVendor = Object.assign({}, this.defaultVendor)
          this.editedIndex = -1
        })
      },

      saveVendor () {
        if (this.editedIndex > -1) {
          Object.assign(this.vendors[this.editedIndex], this.editedVendor)
        } else {
          this.vendors.push(this.editedVendor)
        }
        this.closeVendor()
      },

      
      /*party actions*/
      editPerson (item) {
        this.editedIndex = this.partyppl.indexOf(item)
        this.editedPerson = Object.assign({}, item)
        this.partydialog = true
      },

      deletePerson (item) {
        const index = this.partyppl.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.partyppl.splice(index, 1)
      },

      closePerson () {
        this.partydialog = false
        this.$nextTick(() => {
          this.editedPerson = Object.assign({}, this.defaultPerson)
          this.editedIndex = -1
        })
      },

      savePerson () {
        if (this.editedIndex > -1) {
          Object.assign(this.partyppl[this.editedIndex], this.editedPerson)
        } else {
          this.partyppl.push(this.editedPerson)
        }
        this.closePerson()
      },
    },
  }
</script>

<style>
.planningtopic1, .planningtopic2, .planningtopic3, .planningtopic4 {
    color: maroon;
}
.pt, .pinspiration {
    padding: 10px;
    margin: auto;
}
#deadlines {
    height: 200vh;
}

#tasks, #guests, #budget, #vendors, #partysection, .planningintro {
    height: 120%;
    width: 90vw;
    margin: auto;
    padding: 5px;
}
.page-item {
    padding: 0;
}
.modtask {
    padding: 2px;
}
</style>