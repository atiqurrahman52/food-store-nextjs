const productData = [
  {
    id: '0',
    img: "/assets/images/shop/banana.webp",
    gallery: [
      "/assets/images/shop/banana.webp",
      "/assets/images/shop/banana.webp",
      "/assets/images/shop/banana.webp",
      "/assets/images/shop/banana.webp",
      "/assets/images/shop/banana.webp",
    ],
    productName: "Vegan Thai Banana",
    dateCreated: "May 23, 2023",
    numberOfSell: 12,
    isFeatured: true,
    rating: 3,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '1',
    img: "/assets/images/shop/cucumber.webp",
    gallery: [
      "/assets/images/shop/cucumber.webp",
      "/assets/images/shop/cucumber.webp",
      "/assets/images/shop/cucumber.webp",
      "/assets/images/shop/cucumber.webp",
      "/assets/images/shop/cucumber.webp",
    ],
    productName: "Fresh Cucumber",
    dateCreated: "May 1, 2022",
    numberOfSell: 20,
    isFeatured: false,
    rating: 5,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 24,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 2,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '2',
    img: "/assets/images/shop/pepper.webp",
    gallery: [
      "/assets/images/shop/pepper.webp",
      "/assets/images/shop/pepper.webp",
      "/assets/images/shop/pepper.webp",
      "/assets/images/shop/pepper.webp",
      "/assets/images/shop/pepper.webp",
    ],
    productName: "Red Capsicum",
    dateCreated: "May 23, 2023",
    numberOfSell: 12,
    isFeatured: true,
    rating: 3.5,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 14,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '3',
    img: "/assets/images/shop/grape.webp",
    gallery: [
      "/assets/images/shop/grape.webp",
      "/assets/images/shop/grape.webp",
      "/assets/images/shop/grape.webp",
      "/assets/images/shop/grape.webp",
      "/assets/images/shop/grape.webp",
    ],
    productName: "Juicy Grapes",
    dateCreated: "May 19, 2023",
    numberOfSell: 22,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 20,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '4',
    img: "/assets/images/shop/pine-apple.webp",
    gallery: [
      "/assets/images/shop/pine-apple.webp",
      "/assets/images/shop/pine-apple.webp",
      "/assets/images/shop/pine-apple.webp",
      "/assets/images/shop/pine-apple.webp",
      "/assets/images/shop/pine-apple.webp",
    ],
    productName: "Pine Apple",
    dateCreated: "March 23, 2023",
    numberOfSell: 27,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 24,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '5',
    img: "/assets/images/shop/coconut.webp",
    gallery: [
      "/assets/images/shop/coconut.webp",
      "/assets/images/shop/coconut.webp",
      "/assets/images/shop/coconut.webp",
      "/assets/images/shop/coconut.webp",
      "/assets/images/shop/coconut.webp",
    ],
    productName: "Fresh Coconut",
    dateCreated: "March 17, 2023",
    numberOfSell: 20,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '6',
    img: "/assets/images/shop/broccoli.webp",
    gallery: [
      "/assets/images/shop/broccoli.webp",
      "/assets/images/shop/broccoli.webp",
      "/assets/images/shop/broccoli.webp",
      "/assets/images/shop/broccoli.webp",
      "/assets/images/shop/broccoli.webp",
    ],
    productName: "Organic Broccoli Sliced",
    dateCreated: "March 15, 2023",
    numberOfSell: 8,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '7',
    img: "/assets/images/shop/carrot.webp",
    gallery: [
      "/assets/images/shop/carrot.webp",
      "/assets/images/shop/carrot.webp",
      "/assets/images/shop/carrot.webp",
      "/assets/images/shop/carrot.webp",
      "/assets/images/shop/carrot.webp",
    ],
    productName: "Vegan Red Carrot",
    dateCreated: "May 13, 2023",
    numberOfSell: 10,
    isFeatured: true,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
  {
    id: '8',
    img: "/assets/images/shop/bean.webp",
    gallery: [
      "/assets/images/shop/bean.webp",
      "/assets/images/shop/bean.webp",
      "/assets/images/shop/bean.webp",
      "/assets/images/shop/bean.webp",
      "/assets/images/shop/bean.webp",
    ],
    productName: "Vegan Green Bean",
    dateCreated: "May 23, 2023",
    numberOfSell: 2,
    isFeatured: false,
    rating: 4,
    originalPrice: 56.99,
    discountPrice: 76.99,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    tags: ["Organic", "Fruits"],
    category: "Fruits",
    productDescription:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.",
    price: 34,
    reviews: [
      {
        id: 0,
        userName: "Jacob Jones",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
      {
        id: 1,
        userName: "Ralph Edwards",
        dateOfComment: "March 23, 2023",
        userComment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.",
      },
    ],
  },
];

export default productData;
