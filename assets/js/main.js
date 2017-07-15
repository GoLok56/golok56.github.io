var navbarDrawer = document.getElementById("navbar-drawer");
var navbarIsOpen = false;

navbarDrawer.addEventListener("click", function(){
    var navbar = document.getElementById("navbar");

    /* Semua element background yang akan diberikan efek blur */
    var backgroundElement = document.getElementsByClassName("background");

    if(!navbarIsOpen){
        var transform = "translate(320px, 0)";

        /* Menampilkan element navbar */
        navbarDrawer.style.transform = transform;
        navbar.style.transform = transform;

        /* Memberi efek blur pada background kecuali #navbar-drawer */
        for (var i = 0; i < backgroundElement.length; i++){
            var backgroundChild = backgroundElement[i].children;
            for (var j = 0; j < backgroundChild.length; j++) {
                if(!backgroundChild[j].classList.contains("navbar-drawer")){
                    backgroundChild[j].classList.add("blur");
                }
            }
        }
    } else {
        var transform = "translate(0, 0)";

        /* Menyembunyikan element navbar */
        navbarDrawer.style.transform = transform;
        navbar.style.transform = transform;

        /* Menghilangkan efek blur pada background */
        for (var i = 0; i < backgroundElement.length; i++){
            var backgroundChild = backgroundElement[i].children;
            for (var j = 0; j < backgroundChild.length; j++) {
                if(backgroundChild[j].classList.contains("blur")){
                    backgroundChild[j].classList.remove("blur");
                }
            }
        }
    }

    /* Switch boolean navbarIsOpen */
    navbarIsOpen = !navbarIsOpen;
});
