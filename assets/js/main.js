function extractUrlValue(key) {
  const url = decodeURIComponent(window.location.href);
  if (!url) {
    return;
  }
  const match = url.match("[?&]" + key + "=([^&#]+)");
  return match ? decodeURIComponent(escape(atob(match[1]))) : null;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 4,
      },
    },
  });
  const btn_val = extractUrlValue("btn");
  const link_val = extractUrlValue("link");
  // console.log(btn_val, link_val);
  const btn_uudai = $("#btn-uudai");
  const btn_dangkyuudai_banner = $("#btn-dangkyuudai-banner");
  if (btn_val && link_val) {
    btn_uudai.attr("href", link_val);
    btn_uudai.text(btn_val);

    btn_dangkyuudai_banner.attr("href", link_val);
    btn_dangkyuudai_banner.text(btn_val);
  }
});
