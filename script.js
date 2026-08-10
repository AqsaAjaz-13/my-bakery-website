gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {


    const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    heroTl.from(".js-hero-heading", {
        opacity: 0,
        y: 20,
        duration: 0.8
    })
        .from(".js-hero-sub", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.55")
        .from(".js-hero-btn", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.55")
        .from(".js-hero-img", {
            rotate: -50,
            duration: 1.4,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.6)"
        }, "-=0.85");


    gsap.from(".best-seller-heading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".best-seller-heading",
            start: "top 85%"
        }
    });

    gsap.from(".js-card", {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".best-sellers .row",
            start: "top 85%"
        }
    });


    const offerTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
            trigger: ".special-offer",
            start: "top 70%"
        }
    });

    offerTl.from(".js-offer-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    })
        .from(".js-offer-subtext", {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, "-=0.6")
        .from(".js-offer-btn", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.45")
        .from(".js-offer-img", {
            opacity: 0,
            x: 60,
            rotate: 15,
            scale: 0.85,
            duration: 1,
            ease: "back.out(1.4)"
        }, "-=0.85");


    gsap.utils.toArray(".testimonials .js-reveal").forEach((el) => {
        gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            }
        });
    });


    gsap.from(".footer .js-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%"
        }
    });


    const aboutTl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    aboutTl.from(".js-about-img", {
        opacity: 0,
        y: 40,
        duration: 1
    })
        .from(".js-about-heading", {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, "-=0.6")
        .from(".js-about-text", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5");


    const missionTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
            trigger: ".js-mission-heading",
            start: "top 80%"
        }
    });

    missionTl.from(".js-mission-heading, .js-mission-subtext", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15
    })
        .from(".js-mission-img", {
            opacity: 0,
            x: 60,
            scale: 0.2,
            duration: 1,
            rotate: 15,
            ease: "back.out(1.4)"
        }, "-=0.6");

    const promiseTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
            trigger: ".js-promise-heading",
            start: "top 80%"
        }
    });

    promiseTl.from(".js-promise-heading, .js-promise-subtext", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15
    })
        .from(".js-promise-img", {
            opacity: 0,
            x: 60,
            scale: 0.2,
            duration: 1,
            rotate: 15,
            ease: "back.out(1.4)"
        }, "-=0.6");


    const ctaTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
            trigger: ".js-cta-heading",
            start: "top 80%"
        }
    });

    ctaTl.from(".js-cta-heading", {
        opacity: 0,
        y: 30,
        duration: 0.9
    })
        .from(".js-cta-btn", {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.6,
            ease: "back.out(1.6)"
        }, "-=0.4");


    gsap.from(".js-discover-img", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".js-sidebar-link", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.utils.toArray(".js-category-heading").forEach((heading) => {
        gsap.from(heading, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 85%"
            }
        });
    });


    const cardsByRow = new Map();

    document.querySelectorAll(".js-product-card").forEach((card) => {
        const row = card.closest(".row");
        if (!row) return;
        if (!cardsByRow.has(row)) cardsByRow.set(row, []);
        cardsByRow.get(row).push(card);
    });

    cardsByRow.forEach((cards, row) => {
        gsap.from(cards, {
            opacity: 0,
            y: 40,
            scale: 0.92,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top 88%"
            }
        });
    });


    const contactTl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    contactTl.from(".js-contact-heading", {
        opacity: 0,
        x: -40,
        duration: 0.9
    })
        .from(".js-contact-text", {
            opacity: 0,
            x: -30,
            duration: 0.7,
            stagger: 0.15
        }, "-=0.5")
        .from(".js-form-field", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.12
        }, "-=0.4");


    const orderTl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    orderTl.from(".js-order-heading", {
        opacity: 0,
        y: 30,
        duration: 0.9
    })
        .from(".js-order-text", {
            opacity: 0,
            y: 20,
            duration: 0.7
        }, "-=0.5")
        .from(".js-order-field", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1
        }, "-=0.3");

});