const faders = document.querySelectorAll('.fade-in');
const appearOptions ={
    threshold: 0.4
};
// Intersection Observer Def :  primary purpose is to detect when an element enters or exits 
// the visible portion of the document (the viewport) or another specified parent element.
const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry =>{
    if (!entry.isIntersecting){
        return;
    } else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});