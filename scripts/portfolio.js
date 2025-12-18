$(() => {
  $(".portfolio-item").on("click", () => {
    $("#portfolioPopup").fadeIn(150);
  });

  $("#popupCloseBtn").on("click", () => {
    $("#portfolioPopup").fadeOut(150);
  });

  $(".popup-order").on("click", () => {
    $("#portfolioPopup").fadeOut(0);
    $("#orderPopup").fadeIn(200);
  });

  $(".order-popup-cancel").on("click", () => {
    $("#orderPopup").fadeOut(150);
  });
  $(".order-popup-submit").on("click", (e) => {
    e.preventDefault();
    $("#orderPopup").fadeOut(0);
    $("#thankPopup").fadeIn(220);
  });
  $("#thankCloseBtn").on("click", () => {
    $("#thankPopup").fadeOut(150);
  });

  $(".filter-btn-wrapper").each((index, wrapper) => {
    $(wrapper)
      .find(".filter-btn")
      .on("click", () => {
        $(wrapper).find(".filter-btn__dropdown-wrapper").slideToggle();
      });
  });
});
