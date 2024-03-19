export default function scrollSpy() {
  const $sections = document.querySelectorAll('section[data-scroll-spy]');

  const cb = entries => {
    // console.log("entries", entries);

    entries.forEach(entry => {
      // console.log("entry", entry);
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add('active');
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove('active');
      }
    });
  };

  //margenes negativos reduce el area interior
  //util si yo quiero reducir la capacidad de vista
  const observer = new IntersectionObserver(cb, {
    // root
    // rootMargin: "-250px"
    //entre el 50% y el 75%
    threshold: [0.25, 1]
  });

  $sections.forEach(el => observer.observe(el));
}
