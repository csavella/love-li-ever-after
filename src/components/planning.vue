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
        <h4 class="font-weight-bold black-text mb-4 pb-2">Tasks</h4>
        <div class="row">
            <div class="col-12">
                <div class="card card-list">
                    <div class="card-header white d-flex justify-content-between align-items-center py-3">
                        <p class="h5-responsive font-weight-bold mb-0"><i class="fas fa-clipboard-list pr-2"></i>To Do List</p>
                        <nav aria-label="Page navigation example">
                        <ul class="pagination pg-blue mb-0">
                            <li class="page-item">
                            <a class="border page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="border page-link">1</a></li>
                            <li class="page-item"><a class="border page-link">2</a></li>
                            <li class="page-item"><a class="border page-link">3</a></li>
                            <li class="page-item">
                            <a class="border page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                        <li class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked2">
                                <label class="form-check-label" for="materialChecked2"></label>
                            </div>
                            <p class="mb-0"><span class="text">Design a nice theme</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked3">
                                <label class="form-check-label" for="materialChecked3"></label>
                            </div>
                            <p class="mb-0"><span class="text">Make the theme responsive</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked4">
                                <label class="form-check-label" for="materialChecked4"></label>
                            </div>
                            <p class="mb-0"><span class="text">Let theme shine like a star</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked5">
                                <label class="form-check-label" for="materialChecked5"></label>
                            </div>
                            <p class="mb-0"><span class="text">Let theme shine like a star</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked6">
                                <label class="form-check-label" for="materialChecked6"></label>
                            </div>
                            <p class="mb-0"><span class="text">Check your messages and notifications</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between align-items-center pt-2 pb-1">
                            <div class="d-inline-flex">
                            <div class="form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="materialChecked7">
                                <label class="form-check-label" for="materialChecked7"></label>
                            </div>
                            <p class="mb-0"><span class="text">Let theme shine like a star</span></p>
                            </div>
                            <div class="tools">
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'edit']"/></a>
                            <a class="modtask"><font-awesome-icon :icon="['fas', 'trash-alt']"/></a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div class="card-footer white py-3">
                        <div class="text-right">
                            <button class="btn btn-primary btn-md px-3 my-0 mr-0">Add item<i class="fas fa-plus pl-2"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
.page-item {
    padding: 0;
}
.modtask {
    padding: 2px;
}
</style>

