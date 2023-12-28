const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal("#project h2",{delay:200,origin:"left"})
sr.reveal(".repository-container",{delay:100,origin:'top',interval:100})
sr.reveal("#about",{delay:100,origin:"top"})
sr.reveal(".skills",{delay:100,origin:"bottom"})
