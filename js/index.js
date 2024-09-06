import { siteData } from "../assets/site-data.js";

$(document).ready(function () {
  function addDevTitle() {
    var devTitle = `<span class="dev-title">${siteData.devTitle}</span>`;
    $(".personal-presentation").append(devTitle);
  }

  function addSocialMediaIcons() {
    for (var i = 0; i < siteData.icons.length; i++) {
      var icon = `<a href=${siteData.icons[i].link}><i class="${siteData.icons[i].icon}" style="color: ${siteData.icons[i].color}"></i></a>`;
      $(".personal-presentation").append(icon);
    }
  }

  addDevTitle();
  addSocialMediaIcons();
});
