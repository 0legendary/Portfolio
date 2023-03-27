document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed-text', {
        strings: ['Web Designer'], // Add an additional string with whitespace
        typeSpeed: 100,
        backSpeed: 50, // Add backSpeed to control how fast the text is erased
        showCursor: false,
        startDelay: 0,
        loop: true,
        onComplete: function(self) {
            $(self.el).parent().find('.cursor').remove();
        }
    });
});
