intlTelInput(document.querySelector("#phone2"),{
    geoIpLookup: function(success, failure) {
      var countryCode = "de";
      success(countryCode);
    },
    initialCountry: "auto",
    autoPlaceholder: "aggressive",
    separateDialCode:true,
    utilsScript: "./js/utils.js"
});

intlTelInput(document.querySelector("#phone1"),{
  geoIpLookup: function(success, failure) {
    var countryCode = "de";
    success(countryCode);
  },
  initialCountry: "auto",
  autoPlaceholder: "aggressive",
  separateDialCode:true,
  utilsScript: "./js/utils.js"
});

// intlTelInput(document.querySelector("#phone1"),{
//     geoIpLookup: function(success, failure) {
//         $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//           var countryCode = (resp && resp.country) ? resp.country : "us";
//           success(countryCode);
//         });
//       },
//     initialCountry: "auto",
//     autoPlaceholder: "aggressive",
//     separateDialCode:true,
//     utilsScript: "./js/utils.js"
// });

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log( document.querySelector('.iti__selected-dial-code').innerHTML + e.target[7].value);
})