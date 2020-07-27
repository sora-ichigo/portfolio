var submitted = false;

function onLoad() {
    $('form')[0].reset();
    if (submitted) {
        $('#success').show();
        $(".form").hide();
    }
    else {
        $('#success').hide();
    }
}

const form = new Vue({
    el: ".form",
    data: {
        name: "",
        e_mail: "",
        content: "",
    },
    methods: {
        isSubmit: function() {
            console.log("hello");
            if (this.e_mail && this.name && this.content) {
                return false;
            }
            else {
                return true;
            }
        }
    }
})
