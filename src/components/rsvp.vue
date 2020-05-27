<template>
<div class="rsvp">
    <div class="row rsvpform">
        <div class="col">
            <div class="col-md-auto">
                <h2 class="formtitle">RSVP Form</h2>
                <div class="form-group fname">
                    <label for="firstname">First name</label>
                    <input id="firstname" name="firstname" class="form-control" v-model="firstname"/>
                </div>
                <div class="form-group lname">
                    <label for="lastname">Last name</label>
                    <input id="lastname" name="lastname" class="form-control" v-model="lastname"/>
                </div>
                <div class="form-group emailaddress">
                    <label for="emailaddress">Email address</label>
                    <input type="email" class="form-control" id="emailaddress" name="emailaddress" aria-describedby="emailHelp" v-model="email">
                </div>
                <div class="form-group">
                    <label class="response">Response:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optradio" id="accept" value="true" v-model="confirmed">
                        <label class="form-check-label" for="accept">Delightfully accepts</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optradio" id="decline" v-model="confirmed">
                        <label class="form-check-label" for="decline">Regretfully declines</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="response">Dietary Requirements:</label>
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
                <button type="submit" class="btn btn-dark rsvpsubmit" v-on:click="sendEmail(); addGuest(); alertSent();">Submit</button>
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
            </div>
        </div>
    </div>
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
            console.log(`Adding guest ${this.firstname} ${this.lastname} ${this.email} ${this.confirmed} ${this.allergies}`)
            let guest = {firstname: this.firstname, lastname: this.lastname, email: this.email, confirmed: this.confirmed, allergies: this.allergies}
            this.guests.push(guest)
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.confirmed = false
            this.allergies = []
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
        alertSent: function () {
            alert("Thank you! Your response has been recorded! XOXO, Kevin and Chas");
        }
    }
}
</script>

<style>
.rsvpform {
    width: 30%;
    background-color: lightgrey;
    padding-top: 20px;
    margin: auto;
    opacity: 0.95;
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
.response {
    font-size: 1.2em;
    padding-top: 5px;
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
