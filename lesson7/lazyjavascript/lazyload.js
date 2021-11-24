let element = document.querySelectorAll("img[data-src]");

// Replaces the placeholder image with the real images as soon as each image is loaded from its source
function lazy1(image) {

    image.setAttribute("src", image.getAttribute('data-src'));

    // removes data-src attributte when the page is loaded
    image.onload = () => {
        image.removeAttribute('data-src')
    }; 
}


// element.forEach((image)=>{
//     loadimage(image)
// });



// images should load when a user scrolls down the screen as needed.
if ("IntersectionObserver" in window) {

    const observa = new IntersectionObserver((items,observer)=> {
        items.forEach(item => {
            if (item.isIntersecting){
                // calls the lazy1() if the image is within the intersection
                lazy1(item.target);     

                // deactivates lazy loading when returning 
                observa.unobserve(item.target);
            }
        })
    })

    // loops through each image and observes when it intersects or not
    element.forEach((image)=> {
        observa.observe(image);
    }) 

}

else{
    element.forEach(image=>{
        lazy1(image)
    })
    }

    
    