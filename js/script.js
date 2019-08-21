(function() {
    if(document.querySelector('#hamburger')){
        let hamburger = document.querySelector('#hamburger');
        let nav = document.querySelector('#nav');
        let navUl = document.querySelector('#nav-ul');

        const displayMenu = function(e){
            e.preventDefault();
            this.classList.toggle('active');
            nav.classList.toggle('nav-is-active');
            navUl.classList.toggle('list-is-active');
        }
        hamburger.addEventListener('click', displayMenu);
    
        let menuItems = document.querySelectorAll('#nav-ul a');
        menuItems.forEach(function(item){
            item.addEventListener('click', function(){
                nav.classList.remove('nav-is-active');
                navUl.classList.remove('list-is-active');
                hamburger.classList.remove('active');
            });
        });
    }
})();