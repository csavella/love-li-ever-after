<template>
<div class="ourstory">
    <div class="container">
        <!-- ***THE FOLLOWING CODE IS COMMENTED OUT BECAUSE IT'S BEST USED WITH HIGH QUALITY PHOTOS.
            ***I WANT TO IMPLEMENT IT AFTER WE GET OUR ENGAGEMENT PHOTOS LATER THIS YEAR.
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
        -->
        <div class="gallery" id="gallery">
            <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src="@/assets/ourstory1.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory2.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory3.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src="@/assets/ourstory4.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src="@/assets/ourstory5.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory6.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory7.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <h3>How we met...</h3>
                <p>One day during lunch, Chasity saw a friend walking with Kevin and stopped 
                    to chat with her. Kevin introduced himself and they exchanged a few words 
                    before going their separate ways. After lunch, they got back to their desks 
                    and IMed each other at the same time. They grabbed tea later that day and 
                    quickly became close friends. Despite the suspicion going around their 
                    friend group, Chasity and Kevin really were just friends for 3 months 
                    before they went on their first date.</p>
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory8.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory9.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory10.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory11.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory12.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory13.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory14.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory15.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory16.jpg" alt="Card image cap">
            </div>
            <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src="@/assets/ourstory17.jpg" alt="Card image cap">
            </div>
        </div>
    </div>
</div>
</template>

<style>
/*.ourphoto {
    width: 100%;
    max-height: 20%;
}
.carousel {
    width: 100%;
}*/

.gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%; 
    padding-top: 25px;
}
.gallery .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease; 
}
.gallery .animation {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1); 
}
.ourstory {
    width: 80vw;
    padding: 10px;
    margin: auto;
}
@media (max-width: 450px) {
    .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
    }
}
</style>