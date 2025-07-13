export default products = [
  {
    id: 1,
    name: 'Shoes',
    price: '$50',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('../assets/images/prod1.jpg'),
  },
  {
    id: 2,
    name: 'Watch',
    price: '$80',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   image: require('../assets/images/prod2.jpg'),
  },
  {
    id: 3,
    name: 'Bag',
    price: '$60',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('../assets/images/prod3.jpg'),
  },
];

export const dummyMessages = [
  {
    text: "Hey, is this product still available?",
    sender: "You",
    time: "10:01 AM"
  },
  {
    text: "Yes, it's in stock. Would you like to place an order?",
    sender: "Other",
    time: "10:02 AM"
  },
  {
    text: "What colors are available?",
    sender: "You",
    time: "10:03 AM"
  },
  {
    text: "We have red, blue, and black in stock.",
    sender: "Other",
    time: "10:04 AM"
  },
  {
    text: "Perfect! I’ll take one in black.",
    sender: "You",
    time: "10:05 AM"
  },
  {
    text: "Got it. I’ll process your order right away.",
    sender: "Other",
    time: "10:06 AM"
  }
];
