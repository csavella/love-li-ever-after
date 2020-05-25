<template>
<div class="container ourstory">
    <div id="ourcarousel" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#ourcarousel" data-slide-to="0" class="active"></li>
            <li data-target="#ourcarousel" data-slide-to="1"></li>
            <li data-target="#ourcarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <div class="view">
                    <img class="d-block w-100 ourphoto" src="@/assets/ourstory4.jpg" alt="First slide">
                    <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                    <h3 class="h3-responsive">K + C</h3>
                </div>
            </div>
            <div class="carousel-item">
                <div class="view">
                    <img class="d-block w-100 ourphoto" src="@/assets/ourstory7.jpg" alt="Second slide">
                    <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                    <h3 class="h3-responsive">K + C</h3>
                </div>
            </div>
            <div class="carousel-item">
                <div class="view">
                    <img class="d-block w-100 ourphoto" src="@/assets/ourstory12.jpg" alt="Third slide">
                    <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                    <h3 class="h3-responsive">K + C</h3>
                </div>
            </div>
            <div class="carousel-item">
                <div class="view">
                    <img class="d-block w-100 ourphoto" src="@/assets/ourstory17.jpg" alt="Third slide">
                    <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                    <h3 class="h3-responsive">K + C</h3>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#ourcarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#ourcarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <section>
        <h2>How we met...</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum. 
    </section>
</div>
</template>

<style>
/*.ourphoto {
    width: 100%;
    max-height: 20%;
}*/
.carousel {
    width: 100%;
}
.ourstory {
    width: 100%;
}
</style>