<template>
<div class="rsvp">
    <div class="row rsvpform z-depth-1">
        <div class="col">
            <div class="col-md-auto">
            <form>
                <h2 class="formtitle">Répondez s'il vous plaît</h2>
                <div class="form-group fname">
                    <input id="firstname" name="firstname" class="form-control" placeholder="First Name" required v-model="firstname"/>
                </div>
                <div class="form-group lname">
                    <input id="lastname" name="lastname" class="form-control" placeholder="Last Name" required v-model="lastname"/>
                </div>
                <div class="form-group emailaddress">
                    <input type="email" class="form-control" id="emailaddress" name="emailaddress" placeholder="Email" required aria-describedby="emailHelp" v-model="email">
                </div>
                <div class="form-group response">
                    <label class="acceptresponse">Response:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optradio" id="accept" value="true" required v-model="confirmed">
                        <label class="form-check-label" for="accept">Delightfully accepts</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optradio" id="decline" v-model="confirmed">
                        <label class="form-check-label" for="decline">Regretfully declines</label>
                    </div>
                </div>
                <div class="form-group diet">
                    <label class="dietresponse">Dietary Requirements:</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vegetarian" value="vegetarian" v-model="allergies">
                        <label class="form-check-label" for="vegetarian">Vegetarian</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vegan" value="Vegan" v-model="allergies">
                        <label class="form-check-label" for="vegan">Vegan</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="dairyFree" value="Dairy-Free" v-model="allergies">
                        <label class="form-check-label" for="dairyFree">Dairy-Free</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="glutenFree" value="Gluten-Free" v-model="allergies">
                        <label class="form-check-label" for="glutenFree">Gluten-Free</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-dark btn-block rsvpsubmit" v-on:click="addGuest">Submit</button>
                <!--used for debugging, output user input to table
                    <table class="table  table-striped mt-5">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">RSVP</th>
                            <th scope="col">Dietary Requirements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(guest, index) in guests" :key="index">
                            <td>{{ guest.firstname}}</td>
                            <td>{{ guest.lastname}}</td>
                            <td>{{ guest.confirmed }}</td>
                            <td>{{ guest.allergies }}</td>
                        </tr>
                    </tbody>
                </table>
                -->
            </form>
            </div>
        </div>
    </div>
    <!--<footer class="footer">
      <div class="container">
        <span class="text-muted">&#169;2021. Designed and coded by Chastity Savella.</span>
      </div>
    </footer>-->
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'rsvp',
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            guests: [],
            allergies: [],
            confirmed: false
        }
    },
    methods: {
        addGuest: function () {
            if(this.firstname && this.lastname && this.checkEmailAddress()) {
                this.sendEmail();
                //alert("Thank you! Your response has been recorded! XOXO, Kevin and Chas");
                console.log(`Adding guest ${this.firstname} ${this.lastname} ${this.email} ${this.confirmed} ${this.allergies}`);
                let guest = {firstname: this.firstname, lastname: this.lastname, email: this.email, confirmed: this.confirmed, allergies: this.allergies}
                this.guests.push(guest)
                this.firstname = ''
                this.lastname = ''
                this.email = ''
                this.confirmed = false
                this.allergies = []
                this.$router.push("/submitted");
            }
        },
        sendEmail: function() {
            let templateParams = {
                to_name: 'Chasity Savella',
                from_name: 'love-li-ever-after',
                first: this.firstname,
                last: this.lastname,
                email: this.email,
                confirmed: this.confirmed,
                allergies: this.allergies
            };
            emailjs.send('csgmail', 'template_466eiSBZ', templateParams, 'user_7mBuykiL1mjdR966UDCWz')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
        },
        checkEmailAddress: function() {
            var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if(this.email.match(email_regex)) {
                return true;
            }
            alert("Error: please enter a valid email address")
            return false;
        }
    }
}
</script>

<style>
.rsvpform {
    width: 30%;
    background-color: none;
    padding-top: 30px;
    margin: auto;
    border-radius: 5px;
}

.fname, .lname, .emailaddress {
    text-align: left;
}

.rsvpsubmit {
    background-color: maroon;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}
.acceptresponse, .dietresponse {
    font-size: 1.2em;
    padding-top: 5px;
}

.formtitle, .acceptresponse, .dietresponse, .response, .diet {
    color: white;
}

@media (max-width: 600px) {
    .rsvpform {
        width: 90%;
    }
}

@media (min-width: 601px) {
    .rsvpform {
        width: 85%;
    }
}

@media (min-width: 700px) {
    .rsvpform {
        width: 60%;
    }
}

@media (min-width: 768px) {
    .rsvpform {
        width: 40%;
    }
}

</style>
