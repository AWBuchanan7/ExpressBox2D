var Box2D;
if (!Box2D) Box2D = (typeof Box2D !== 'undefined' ? Box2D : null) || Module;
window.onload = function() {
    using(Box2D, "b2.+")
    init();
    changeTest();
    animate();
};    