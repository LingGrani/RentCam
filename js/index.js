// Data produk dalam bentuk array of objects
const products = [
  {
      img: 'img/speaker jbl.jpg',
      category: 'Speaker',
      name: 'JBL Speaker',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/mic8.jpg',
      category: 'Mic',
      name: 'Microphone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.100.000 / Hari'
  },
  {
      img: 'img/setup.jpg',
      category: 'Paket',
      name: 'Paket Lengkap Mic',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/tripod.jpg',
      category: 'Tripod',
      name: 'Tripod',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.20.000 / Hari'
  },
  {
      img: 'img/kamera.jpg',
      category: 'Kamera',
      name: 'Kamera Panasonic',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.250.000 / 4 Jam'
  },
  {
      img: 'img/speaker2.jpg',
      category: 'Speaker',
      name: 'Speaker',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/mic11.jpg',
      category: 'Mic',
      name: 'Microphone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.100.000 / Hari'
  },
  {
      img: 'img/speaker3.jpg',
      category: 'Speaker',
      name: 'Speaker',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: 'Rp.150.000 / Hari'
  }
];

// Ambil elemen div tempat menampilkan produk
const productList = document.getElementById('product-list');

// Loop melalui array produk dan buatkan markup HTML
products.forEach(product => {
  const productHTML = `
      <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="rounded position-relative fruite-item">
              <div class="fruite-img">
                  <img src="${product.img}" class="img-fluid w-100 rounded-top" alt="">
              </div>
              <div class="text-white bg-secondary px-3 py-1 rounded position-absolute">${product.category}</div>
              <div class="p-4 border border-secondary border-top-0 rounded-bottom fruite-content">
                  <h4>${product.name}</h4>
                  <p>${product.description}</p>
                  <div class="d-flex justify-content-between flex-lg-wrap">
                      <p class="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                      <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                  </div>
              </div>
          </div>
      </div>
  `;
  // Tambahkan markup produk ke dalam div produk-list
  productList.innerHTML += productHTML;
});

//
const bestseller = [
  {
      img: 'img/kamera13.jpg',
      name: 'Kamera Canon',
      rating: 4,
      price: 'Rp.200.000 / 4 Jam'
  },
  {
      img: 'img/speaker2.jpg',
      name: 'Speaker',
      rating: 4,
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/mic12.jpg',
      name: 'Microphone',
      rating: 4,
      price: 'Rp.100.000 / Hari'
  },
  {
      img: 'img/paket1.jpg',
      name: 'Paket Lengkap Kamera',
      rating: 4,
      price: 'Rp.500.000 / Hari'
  },
  {
      img: 'img/paket2.jpg',
      name: 'Paket Lengkap Kamera',
      rating: 4,
      price: 'Rp.500.000 / Hari'
  },
  {
      img: 'img/kamera3.jpg',
      name: 'Kamera',
      rating: 4,
      price: 'Rp.250.000 / 4 Jam'
  },
  {
      img: 'img/setup.jpg',
      name: 'Paket Lengkap Microphone',
      rating: 4,
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/setup2.jpg',
      name: 'Paket Lengkap Microphone',
      rating: 4,
      price: 'Rp.200.000 / Hari'
  },
  {
      img: 'img/kamera1.jpg',
      name: 'Kamera',
      rating: 4,
      price: 'Rp.200.000 / 4 Jam'
  },
  {
      img: 'img/speaker4.jpg',
      name: 'Speaker',
      rating: 4,
      price: 'Rp.200.000 / Hari'
  }
];

const Bestseller = document.getElementById('bestseller');

products.forEach(product => {
  const productHTML = `
      <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
              <div class="row align-items-center">
                  <div class="col-6">
                      <img src="${product.img}" class="img-fluid rounded-circle w-100" alt="">
                  </div>
                  <div class="col-6">
                      <a href="#" class="h5">${product.name}</a>
                      <div class="d-flex my-3">
                          ${generateStars(product.rating)}
                      </div>
                      <h4 class="mb-3">${product.price}</h4>
                      <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                  </div>
              </div>
          </div>
      </div>
  `;
  Bestseller.innerHTML += productHTML;
});

function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
      if (i < rating) {
          stars += '<i class="fas fa-star text-primary"></i>';
      } else {
          stars += '<i class="fas fa-star"></i>';
      }
  }
  return stars;
}