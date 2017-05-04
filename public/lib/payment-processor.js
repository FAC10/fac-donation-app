// const server = require('stripe');

const stripe = Stripe('pk_test_zzdvAwrOg37SAhRt6yik1LTu'); // update with real API key
const elements = stripe.elements(); // create a new instance of elements


// Custom styling can be passed to options when creating an Element.
const style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    lineHeight: '24px',
  },
};

const card = elements.create('card', { style: style });
card.mount('#card-element');
