let tl = gsap.timeline();

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((elem) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}
revealToSpan();

tl.from(".child span", {
  x: 100,
  duration: 2,
  stagger: 0.2,
  ease: Power3.easeInOut,
})
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    delay: -0.8,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "0%",
    top: 0,
    delay: -0.5,
    duration: 1,
    ease: Circ.easeInOut,
  });
