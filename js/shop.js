// Data produk dalam bentuk array objek
const products = [
  {
      imgSrc: 'img/kamera.jpg',
      category: 'Camera',
      title: 'LUMIX',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/kamera1.jpg',
      category: 'Camera',
      title: 'SONY A7II',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/mic10.jpg',
      category: 'Microphone',
      title: 'Saramonic BLink 500',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/speaker jbl.jpg',
      category: 'Speaker',
      title: 'JBL',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/paket1.jpg',
      category: 'Packet',
      title: 'PACKET RentCam1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/mic11.jpg',
      category: 'Microphone',
      title: 'Shure SVX24E',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$49.99'
  },
  {
      imgSrc: 'img/tripod.jpg',
      category: 'Tripod',
      title: 'Tripod',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/speaker2.jpg',
      category: 'Speaker',
      title: 'SA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/speaker3.jpg',
      category: 'Speaker',
      title: 'Malone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99'
  },
  {
      imgSrc: 'img/kamera13.jpg',
      category: 'Headphone',
      title: 'Sony WH-1000XM4',
      description: 'Wireless Noise Cancelling Headphones',
      price: '$349.99'
  },
  {
      imgSrc: 'img/canon.jpg',
      category: 'Action Camera',
      title: 'GoPro HERO9 Black',
      description: '4K Waterproof Action Camera',
      price: '$449.99'
  },
  {
      imgSrc: 'img/setup.jpg',
      category: 'Drone',
      title: 'DJI Mavic Air 2',
      description: 'Foldable Drone Quadcopter',
      price: '$799.99'
  }
];

// Ambil elemen dengan id product
const productContainer = document.getElementById('productlist');

// Buat variabel untuk menyimpan HTML yang akan di-generate
let html = '';

// Loop melalui array produk dan buat HTML untuk setiap produk
products.forEach(product => {
  html += `
      <div class="col-md-6 col-lg-6 col-xl-4">
          <div class="rounded position-relative fruite-item">
              <div class="fruite-img">
                  <img src="${product.imgSrc}" class="img-fluid w-100 rounded-top" alt="">
              </div>
              <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${product.category}</div>
              <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                  <h4>${product.title}</h4>
                  <p>${product.description}</p>
                  <div class="d-flex justify-content-between flex-lg-wrap">
                      <p class="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                      <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                  </div>
              </div>
          </div>
      </div>
  `;
});

// Set innerHTML dari elemen product dengan HTML yang sudah dibuat
productContainer.innerHTML = html;
