<template>
<div class="planning">
    <section class="dark-grey-text text-center planningintro">
        <h3 class="font-weight-bold black-text mb-4 pb-2">Planning Hub</h3>
        <hr class="w-header"/>
        <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">Time to get organized!</p>
        <div class="row">
            <div class="col-md-3 mb-4 pt">
                <a href="#deadlines" class="card hoverable planningtopic4">            
                    <div class="card-body my-4">
                        <font-awesome-icon :icon="['fas', 'utensils']" size="2x"/>
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
                        <font-awesome-icon :icon="['fas', 'utensils']" size="2x"/>
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
        <h4 class="font-weight-bold black-text mb-4 pb-2">Tasks</h4>
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
    </section>
</div>
</template>

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
</style>

