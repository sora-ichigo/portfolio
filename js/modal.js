const VModal = window["vue-js-modal"].default
Vue.use(VModal);

const modal_app=new Vue({
    el:"#works",
    data:{
        
    },
    methods:{
        // vue-js-modal
        show: function(name) {
            this.$modal.show(name);
        },
        hide: function(name) {
            this.$modal.hide(name);
        },
    }
})
