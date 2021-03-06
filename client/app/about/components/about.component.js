const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageUrl = "/images/winterPineTrees.jpg";
        ctrl.title = "ABOUT US";

        ctrl.$onInit = function () {};
    },
    template:   `
        <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
            <div class="container" style="position: absolute; background-color: black; height: 50vh; width: 100vw;">
                <span class="text">
                    Seitan tattooed occupy kinfolk raw denim brunch, vinyl photo booth pork belly. Austin vegan before they sold out edison bulb next level cronut unicorn ugh. Tousled XOXO gochujang edison bulb thundercats disrupt. Chillwave cloud bread everyday carry venmo distillery. Poutine yr schlitz artisan. Try-hard truffaut craft beer raclette blog marfa keffiyeh kombucha poutine YOLO retro celiac hell of banh mi. Man braid bushwick ramps meh hoodie. Gluten-free art party gentrify hot chicken. Activated charcoal intelligentsia ennui meditation. Single-origin coffee blue bottle XOXO, helvetica fixie four loko jean shorts small batch. Taxidermy brooklyn man bun kitsch franzen vaporware.
                </span>
                <span class="image"></span>
            </div>
    `
};

angular.module('portfolio-site.about')
    .component('about', about);

about.$inject = [];
