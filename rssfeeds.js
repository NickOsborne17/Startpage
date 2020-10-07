// Declare feed locations and icons (feed URL, icon)
var feeds = [];
feeds[0] = ['https://feeds.feedburner.com/CssTricks','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M199.28,300.74,111,365.49c-10.6,7.07-18.84,11.78-29.43,11.78-21.2,0-38.86-18.84-38.86-40,0-17.67,14.13-30.62,27.08-36.5L173.38,256,69.77,210.09c-14.12-5.89-27.08-18.84-27.08-36.5,0-21.19,18.84-38.85,40-38.85,10.6,0,17.66,3.53,28.26,11.77l88.3,64.75L187.5,106.48c-3.53-24.72,13-44.74,36.5-44.74s40,18.84,36.5,43.56l-11.78,106L337,146.51c10.6-8.24,18.84-11.77,29.44-11.77a39.2,39.2,0,0,1,38.85,38.85c0,18.83-12.95,30.61-27.08,36.5L274.62,256l103.61,44.74c14.13,5.88,27.08,18.83,27.08,37.68,0,21.19-18.84,38.85-40,38.85-9.42,0-17.66-4.71-28.26-11.78l-88.3-64.75L260.5,405.52c3.53,24.72-12.95,44.74-36.5,44.74s-40-18.84-36.5-43.56Z"/></svg>'];
feeds[1] = ['https://uimovement.com/feed/','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,61.74c-107.29,0-194.26,87-194.26,194.26s87,194.26,194.26,194.26,194.26-87,194.26-194.26S331.29,61.74,224,61.74Zm0,39,69.75,57H154.25Zm25.71,221.13q0,15.26-6.55,26.69a43.55,43.55,0,0,1-18.93,17.61q-12.37,6.17-29.61,6.17-25.62,0-39.83-13.56t-14.22-37.29v-88.7h22.6v87.1q0,17,7.91,25.14t24.29,8.1q31.83,0,31.83-33.43V232.75h22.51Zm57.72,48.59h-22.5V232.75h22.5Z"/></svg>'];
feeds[2] = ['https://www.awwwards.com/blog/feed/','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M334.32,153.47,269.43,355.94H225.3l-35-131.09-35,131.73H111.09L46.19,154.12H96.81L133.15,293l34.39-138.87h46.08L248,293l36.34-138.87,50-.65Z"/><path fill="currentColor" d="M368.06,291c19.47,0,33.75,14.28,33.75,33.75s-14.28,33.74-33.75,33.74-33.74-14.28-33.74-33.74S349.24,291,368.06,291Z"/></svg>'];
feeds[3] = ['https://dribbble.hittter.com/feeds/dribbble/popular.rss','<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>'];

jQuery(function($) {
  // Create feeds
  for (i = 0; i < feeds.length; i++) {
    // Create icons
    $(".icon_tabs").append("<li class='icon_tab' onclick='changeFeed(event, \"rss_feed"+i+"\")'>"+feeds[i][1]+"</li>");
    // Create feed containers
    $(".rss_feeds").append("<div id='rss_feed"+i+"' class='rss_feed'></div>");

    // Add rss feed
    $("#rss_feed"+i).rss(feeds[i][0],
    {
      limit: 20,
      entryTemplate:'<li class="rss_entry"><p class="entry_date">{date}</p><a href="{url}"><h4 class="entry_title">{title}</h4></a><p>{shortBodyPlain}</p></li>'
    })
  }

})

// Switch between visible feeds
function changeFeed(evt, feedNumber) {
  var i, rss_feed, icon_tab;
  // Hide all feeds
  rss_feed = document.getElementsByClassName("rss_feed");
  for (i = 0; i < rss_feed.length; i++) {
    rss_feed[i].style.display = "none";
  }
  // Remove "active" class
  icon_tab = document.getElementsByClassName("icon_tab");
  for (i = 0; i < icon_tab.length; i++) {
    icon_tab[i].className = icon_tab[i].className.replace(" active", "");
  }
  // Display feed and set tab as "active"
  document.getElementById(feedNumber).style.display = "block";
  evt.currentTarget.className += " active";
}
