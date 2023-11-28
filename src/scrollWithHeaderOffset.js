function scrollToElement(element, headerHeight) {
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    console.log(offsetPosition);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export { scrollToElement };
