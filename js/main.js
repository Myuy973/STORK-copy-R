(function () {
    'use strict';
    
    const vm = new Vue({
        el: '#header-contents',
        data: {
            isSearch_before: false,
            isSearch_after: false,

            isMenu_before: false,
            isMenu_after: false,
        },
        mounted() {
            let header_btn = document.getElementById('header-btn');
            let header_btn_getBCR = document.getElementById('header-btn').getBoundingClientRect();
            let header_h1 = document.querySelector('#header-text h1');
            let header_h1_getBCR = document.querySelector('#header-text h1').getBoundingClientRect();
            let header_p = document.querySelector('#header-text p');
            let header_p_getBCR = document.querySelector('#header-text p').getBoundingClientRect();
            let w_scrollY = window.pageYOffset;
            let w_scroll_top = window.scrollY;
            let return_btn = document.getElementById('return_top');

            return_btn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            })

            header_change();
            return_change();

            window.onscroll = () => {
                setTimeout(() => {
                    w_scroll_top = window.scrollY
                    let w_height = window.innerHeight;
                    let w_bottom = w_scroll_top + w_height;
    
                    //header
                    header_change()
    
                    //footer
                    const footer = document.querySelector('footer');  
                    if (w_bottom >= footer.offsetTop) {
                        footer.style.opacity = '1';
                    }
                    
                    //return btn
                    return_change();
                    
                }, 250);
            }

            function header_change() {
                if (w_scroll_top <= (header_btn_getBCR.top + w_scrollY)) {
                    header_btn.classList.add('header-text-move');
                }
                if (w_scroll_top <= (header_h1_getBCR.top + w_scrollY)) {
                    header_h1.classList.add('header-text-move');
                }
                if (w_scroll_top <= (header_p_getBCR.top + w_scrollY)) {
                    header_p.classList.add('header-text-move');
                }

            }

            function return_change() {
                if (w_scroll_top <= 386) {
                    return_btn.style.transform = 'translateY(70px)';
                } else if (w_scroll_top > 386) {
                    return_btn.style.transform = 'translateY(0)';
                }
            }
        },
        methods: {
            open_modal_search: function() {
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('body').style.marginRight = '15px';
                this.isSearch_before = true;
                console.log(`before: ${this.isSearch_before}, after: ${this.isSearch_after}`);
            },
            close_modal_search: function() {
                document.querySelector('body').style.overflow = 'visible';
                document.querySelector('body').style.marginRight = '0';
                this.isSearch_before = false;
                this.isSearch_after = true;
                setTimeout(() => {
                    this.isSearch_after = false;
                }, 500); 
            },

            open_modal_menu: function() {
                document.querySelector('body').style.overflow = 'hidden';
                this.isMenu_before = true;
                console.log(`before: ${this.isMenu_before}, after: ${this.isMenu_after}`);
            },
            close_modal_menu: function() {
                document.querySelector('body').style.overflow = 'visible';
                this.isMenu_before = false;
                this.isMenu_after = true;
                setTimeout(() => {
                    this.isMenu_after = false;
                }, 500);
            },

        }
    });

    // const vm_2 = new Vue({
    //     el: 'header',
    //     data: {
    //         // modal_menu_type: false,
    //         isMenu_before: false,
    //         isMenu_after: false,
    //     },
    //     methods: {
    //         open_modal_menu: function() {
    //             this.modal_menu_type = true;
    //             document.querySelector('body').style.overflow = 'hidden';
    //             this.isMenu_after = false;
    //             this.isMenu_before = true;
    //             console.log(`before: ${this.isMenu_before}, after: ${this.isMenu_after}`);
    //         },
    //         close_modal_menu: function() {
    //             this.modal_menu_type = false;
    //             document.querySelector('body').style.overflow = 'visible';
    //             this.isMenu_before = false;
    //             this.isMenu_after = true;
    //             setTimeout(() => {
    //                 this.isMenu_after = false;
    //             }, 500);
                
    //         },
    //     },
    // })

})(); 