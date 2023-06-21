

fetch("https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/blog", {
  method: "POST",
  headers: { "content-type": "application/json" },
  // Send your data in the request body as JSON
  body: JSON.stringify(data),
});

const data = [
  {
    id: 1,
    brand: "Apple",
    name: "Iphone 14 pro max",
    price: "40000000$",
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Samsung s22",
    price: "3000000$",
  },
  {
    id: 3,
    brand: "Xiaomi",
    name: "Xiaomi 11",
    price: "200000$",
  },
  {
    id: 4,
    brand: "Realme",
    name: "Realme 2",
    price: "400$",
  },
  {
    id: 5,
    brand: "Apple",
    name: "Iphone 13 pro max",
    price: "40000000$",
  },
  {
    id: 6,
    brand: "Samsung",
    name: "Sámung note 20",
    price: "50000000$",
  },
];
