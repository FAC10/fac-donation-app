// var server = require('stripe');

var stripe = Stripe('pk_test_zzdvAwrOg37SAhRt6yik1LTu'); // update with real API key
var elements = stripe.elements(); // create a new instance of elements


// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    lineHeight: '24px',
  },
};

var card = elements.create('card', { style: style });
card.mount('#card-element');

card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});
