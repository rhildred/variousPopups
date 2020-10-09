import "https://cdnjs.cloudflare.com/ajax/libs/framework7/5.7.12/js/framework7.bundle.min.js"

// here initialize the app
var myApp = new Framework7();

// If your using custom DOM library, then save it to $$ variable
var $$ = Dom7;

// Add the view
var mainView = myApp.views.create('.view-main', {

    // enable the dynamic navbar for this view:
    dynamicNavbar: true
});

$$("#addTodo").on("click", (evt) => {
    evt.preventDefault();
    $$("#todos").prepend(`
    <div class="card">
    <div class="card-header">${$$("#name").val()}</div>
    <div class="card-content">
        <!-- Card content -->
    </div>
    <div class="card-footer">Footer</div>
    </div>
    `);
});
