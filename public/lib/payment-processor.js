// var server = require('stripe');

var stripe = Stripe('pk_test_pvmlq2LM897tcRGgK5nNuSM4'); // update with real API key
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

var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card)
    .then(function(result) {
      console.log(result);
      stripeTokenHandler(result.token);
    })
    .catch(function(error) {
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    });
});

function stripeTokenHandler(token) {
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  form.submit();
}
