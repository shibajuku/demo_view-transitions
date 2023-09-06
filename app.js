const buttons = document.querySelectorAll(".js-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
    const controlId = e.currentTarget.getAttribute("aria-controls");

    const controlElems = document.querySelectorAll(`[aria-controls="${controlId}"]`);

    controlElems.forEach((elem) => {
      elem.setAttribute("aria-expanded", !isExpanded);
    });

    document.startViewTransition(() => {
      // 遷移後のDOM構造を指定
      document.querySelector("#index").hidden = !isExpanded;

      document.querySelectorAll("[aria-label*='detail']").forEach((elem) => {
        elem.hidden = isExpanded ? true : elem.getAttribute("aria-controls") !== controlId;
      });

      document.querySelector(`#${controlId}`).hidden = isExpanded;
    });
  });
});
