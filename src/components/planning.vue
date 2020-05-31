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
import axios from "axios";

export default {
  name: 'planning',
    data: () => ({
      partypplAPIdata: [],
      budgetAPIdata: [],
      guestsAPIdata: [],
      tasksAPIdata: [],
      vendorsAPIdata: [],

      /*tasks for todo list*/
      tasksheeturl: "https://docs.google.com/spreadsheets/d/1Oe7CQ2btK8q0GZOS_P34EaMe83vt6lUvfA8J_AEMw6k/edit#gid=0",
      tasks: [],
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
      guests: [],
      guestdialog: false,
      guestheaders: [
        {
          text: 'Last Name',
          align: 'start',
          sortable: true,
          value: 'lastname',
        },
        { text: 'First Name', value: 'firstname' },
        { text: 'Email', value: 'email' },
        { text: 'Confirmed', value: 'confirmed' },
        { text: 'Guest Type', value: 'type' },
        { text: 'Dietary Restrictions', value: 'diet', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedGuest: { lastname: '', firstname: '', email: '', confirmed: false, type: '', diet: '' },
      defaultGuest: { lastname: '', firstname: '', email: '', confirmed: false, type: '', diet: '' },

      /*budget section*/
      budgetsheeturl: "https://docs.google.com/spreadsheets/d/1eoV8G5XFaQVjuLVnenA1ZxmhuMHRHjl0lUNNifiOcvs/edit#gid=0",
      bitems: [],
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
      vendors: [],
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
      partyppl: [],
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

    mounted() {
        let sheetsuParty = "https://sheetsu.com/apis/v1.0su/eded8760576f"
        let sheetsuBudget = "https://sheetsu.com/apis/v1.0su/de90e9842a02"
        let sheetsuGuests = "https://sheetsu.com/apis/v1.0su/33fd43026ba4"
        let sheetsuTasks = "https://sheetsu.com/apis/v1.0su/94ecf0a90f73"
        let sheetsuVendors = "https://sheetsu.com/apis/v1.0su/02e39cefb1c3"

        const requestParty = axios.get(sheetsuParty);
        const requestBudget = axios.get(sheetsuBudget);
        const requestGuests = axios.get(sheetsuGuests);
        const requestTasks = axios.get(sheetsuTasks);
        const requestVendors = axios.get(sheetsuVendors);

        axios.all([requestParty,requestBudget,requestGuests,requestTasks,requestVendors
        ]).then(axios.spread((...responses) => {

            const responseParty = responses[0].data
            const responseBudget = responses[1].data
            const responseGuests = responses[2].data
            const responseTasks = responses[3].data
            const responseVendors = responses[4].data

            this.partypplAPIdata = responseParty;
            this.addparty();

            this.budgetAPIdata = responseBudget;
            this.addbudget();

            this.guestAPIdata = responseGuests;
            this.addguests();

            this.tasksAPIdata = responseTasks;
            this.addtasks();

            this.vendorsAPIdata = responseVendors;
            this.addvendors();

        })).catch(errors => {
            console.log('Request failed', errors);
        })
    },

    methods: {
      initialize () {
      },
      newTab(url) {
        window.open(url, "_blank");
      },

      addbudget() {
        for (var i = 0; i < this.budgetAPIdata.length; i++) {
              this.bitems.push({
                  name: this.budgetAPIdata[i].name,
                  projectedcost: this.budgetAPIdata[i].projectedcost,
                  actualcost: this.budgetAPIdata[i].actualcost,
                  booked: this.budgetAPIdata[i].booked,
                  notes: this.budgetAPIdata[i].notes
              })
          }
      },

      addparty() {
          for (var i = 0; i < this.partypplAPIdata.length; i++) {
              this.partyppl.push({
                  lastname: this.partypplAPIdata[i].lastname,
                  firstname: this.partypplAPIdata[i].firstname,
                  role: this.partypplAPIdata[i].role
              })
          }
      },

      addguests() {
          for (var i = 0; i < this.guestAPIdata.length; i++) {
              this.guests.push({
                  lastname: this.guestAPIdata[i].lastname,
                  firstname: this.guestAPIdata[i].firstname,
                  email: this.guestAPIdata[i].email,
                  confirmed: this.guestAPIdata[i].confirmed,
                  type: this.guestAPIdata[i].type,
                  diet: this.guestAPIdata[i].diet
              })
          }
      },

      addtasks() {
          for (var i = 0; i < this.tasksAPIdata.length; i++) {
              this.tasks.push({
                  todo: this.tasksAPIdata[i].todo,
                  owner: this.tasksAPIdata[i].owner,
                  duedate: this.tasksAPIdata[i].duedate,
                  prio: this.tasksAPIdata[i].prio,
                  notes: this.tasksAPIdata[i].notes
              })
          }
      },

      addvendors() {
          for (var i = 0; i < this.vendorsAPIdata.length; i++) {
              this.vendors.push({
                  name: this.vendorsAPIdata[i].name,
                  category: this.vendorsAPIdata[i].category,
                  cost: this.vendorsAPIdata[i].cost,
                  booked: this.vendorsAPIdata[i].booked,
                  notes: this.vendorsAPIdata[i].notes
              })
          }
      },
      

    /*task actions*/
      editTask (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedTask = Object.assign({}, item)
        this.taskdialog = true
      },

      deleteTask (item) {
        const index = this.tasks.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tasks.splice(index, 1)
      },

      closeTask () {
        this.taskdialog = false
        this.$nextTick(() => {
          this.editedTask = Object.assign({}, this.defaultTask)
          this.editedIndex = -1
        })
      },

      saveTask () {
        if (this.editedIndex > -1) {
          Object.assign(this.tasks[this.editedIndex], this.editedTask)
        } else {
          this.tasks.push(this.editedTask)
        }
        this.closeTask()
      },

      /*guest actions*/
      editGuest (item) {
        this.editedIndex = this.guests.indexOf(item)
        this.editedGuest = Object.assign({}, item)
        this.guestdialog = true
      },

      deleteGuest (item) {
        const index = this.guests.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.guests.splice(index, 1)
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
          Object.assign(this.guests[this.editedIndex], this.editedGuest)
        } else {
          this.guests.push(this.editedGuest)
        }
        this.closeGuest()
      },

      /*budget actions*/
      editBitem (item) {
        this.editedIndex = this.bitems.indexOf(item)
        this.editedBitem = Object.assign({}, item)
        this.budgetdialog = true
      },

      deleteBitem (item) {
        const index = this.bitems.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.bitems.splice(index, 1)
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
          Object.assign(this.bitems[this.editedIndex], this.editedBitem)
        } else {
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