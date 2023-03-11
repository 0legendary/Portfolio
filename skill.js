document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed-text', {
        strings: ['Web Designer','Web Developer','Freelancer','Artist','Python Developer','Web Designer'],
        typeSpeed: 100,
        showCursor: false,
        onComplete: function(self) {
            $(self.el).parent().find('.cursor').remove();
        }
    });
});
