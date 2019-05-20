<template> </template>

<script>
    const ELEMENT_NAME = 'tour'

    export default {
        data() {
            return {}
        },
        methods: {
            tour(arr_tour) {
                var tour = new Tour({ 
                    storage: false,
                    template:   "<div class='popover tour' style='width:300px'> "+
                                "<div class='arrow'></div> "+      
                                "<h3 class='popover-title'>{{ tours.title }}</h3> "+
                                "<div class='popover-content'>{{ tours.content }}</div> "+
                                "<div class='popover-navigation'>  "+
                                "    <button class='btn btn-default' data-role='prev'>« Antes</button> "+
                                "    <span data-role='separator'>|</span> "+
                                "    <button class='btn btn-default' data-role='next'>Depois »</button> "+
                                "    <button class='btn btn-default' data-role='end'>Fim</button> "+
                                "</div>"+
                            "</div>"
                });
                
                var i = 0;
                while (i < arr_tour.length) {

                    tour.addSteps([{
                      element: arr_tour[i]['element'], // string (jQuery selector) - html element next to which the step popover should be shown
                      title: arr_tour[i]['title'], // string - title of the popover
                      content: arr_tour[i]['content'] // string - content of the popover                     

                    }]);
                    
                    i++;
                };

                // Initialize the tour
                tour.init();

                // Start the tour
                tour.start();

            },
        },
        created() {         

            const $el = document.createElement('div')
            $el.id = ELEMENT_NAME
            document.body.appendChild($el)
            this.$mount('#tour');
        }
    }

</script>
