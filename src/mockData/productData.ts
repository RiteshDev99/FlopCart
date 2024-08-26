export interface product {
  id: string;
  title: string;
  price: string;
  img: string;
  name: string;
  ratings: string;
  offer: string;
  fiexdPrice: string;
  discount: string;
  discountOffer: string;
  img1: string;
  img2: string;
  img3: string;
}

const productData: product[] = [
  {
    title: "Vivo T2 Pro 5g",
    price: "From ₹20,999*",
    img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1695352069499/0b19ef2156bbe072eb912066d6c944ab.png",
    id: "Vivo T2 Pro 5g",
    name: "vivo T2 Pro 5g (New Moon Black, 256 GB)  (8 GB RAM)",
    ratings: "1,13,234 Ratings & 8,627 Reviews",
    offer: "Extra ₹4000 off",
    fiexdPrice: "₹23,999",
    discount: "₹27,999",
    discountOffer: "14% off",
    img2: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Vivo-t2-pro-5g-new-moon-black-8gb-128gb-ram-Back-View.png",
    img1: "https://gadgets.beebom.com/wp-content/uploads/2024/01/Vivo-T2-Pro-Frame.png",
    img3: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1695290093625/4a714eac71af0716e2f05d5b065b8ee7.jpg.webp",
  },
  {
    title: "Iphone 15 Plus",
    price: "From ₹74,999*",
    id: "Iphone 15 Plus",
    img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673832/Croma%20Assets/Communication/Mobiles/Images/300782_0_hibstr.png",
    name: "Apple iPhone 15 Plus (Blue, 128 GB)",
    ratings: "8,467 Ratings & 672 Reviews",
    offer: "Extra ₹16601 off",
    fiexdPrice: "₹72,999",
    discount: "₹89,600",
    discountOffer: "18% off",
    img1: "https://media.croma.com/image/upload/v1708673159/Croma%20Assets/Communication/Mobiles/Images/300773_5_ypetbf.png",
    img2: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-15-plus-yellow-128gb-cam.png",
    img3: "https://iplanet.one/cdn/shop/files/iPhone_15_Plus_Yellow_PDP_Image_Position-7__en-IN.jpg?v=1695429588&width=823",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: "From ₹1,21,999",
    id: "Samsung Galaxy S24 Ultra",
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348",
    name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    ratings: "1,953 Ratings & 248 Reviews",
    offer: "Extra ₹9000 off",
    fiexdPrice: "₹1,39,999",
    discount: "₹1,44,999",
    discountOffer: "3% off",
    img1: "https://m.media-amazon.com/images/I/515MKc4loTL._AC_SL1500_.jpg",
    img2: "https://images.samsung.com/al/smartphones/galaxy-s24-ultra/buy/03_Color-Selection/03-1_Basic-Color/Titanium-Gray-MO.png",
    img3: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/106/MTA-159298700/samsung_samsung_galaxy_s24_ultra_12-512gb_garansi_resmi_full01_fcb9af08.jpg",
  },
  {
    title: "Google Pixel 8 Pro",
    price: "From ₹1,05,999",
    id: "Google Pixel 8 Pro",
    img: "https://lh3.googleusercontent.com/74fxfXJwXDmPa22KpNuny0eYPVozG_DEFxDIC0Ntt0aPJCDGmARZFC-uBTfd1wQVjpXhPVVz7Eey1GePKJpjbUhu5YXiHifvyA",
    name: "Google Pixel 8 Pro (Obsidian, 256 GB)  (12 GB RAM)",
    ratings: "925 Ratings & 111 Reviews",
    offer: "Extra ₹8000 off",
    fiexdPrice: "₹1,05,999",
    discount: "₹1,13,999",
    discountOffer: "14% off",
    img1: "https://lh3.googleusercontent.com/CV6I8rzg-0lwKcsy__JkAxiTmo1UqQtw8-wuWmlZhQ2ctguYm4Qt6cXlDo1u-v64X9yuK5hxp6CE7N-ycGBtTVxUtQiAfJS3y9tZ",
    img2: "https://stratanetworks.com/wp-content/uploads/2023/12/Google-8-Hazel-Front.png",
    img3: "https://imageio.forbes.com/specials-images/imageserve/651d75c14026b969928c7e9a/Pixel-Portfolio-Bay-1/960x0.jpg?format=jpg&width=960",
  },
  {
    title: "Redmi Note 13 Pro",
    price: "From ₹21,538",
    id: "Redmi Note 13 Pro",
    img: "https://i.gadgets360cdn.com/products/large/redminote13pro-800x800-1695378563.png",
    name: "REDMI Note 13 Pro 5G (Coral Purple, 256 GB)  (12 GB RAM)",
    ratings: "3,071 Ratings & 259 Reviews",
    offer: "Extra ₹8414 off",
    fiexdPrice: "₹24,584",
    discount: "₹32,999",
    discountOffer: "25% off",
    img1: "https://img-prd-pim.poorvika.com/product/redmi-note-13-pro-5g-arctic-white-256gb-8gb-ram-back-view.png",
    img2: "https://media.croma.com/image/upload/v1704301955/Croma%20Assets/Communication/Mobiles/Images/303568_7_evfwpd.png",
    img3: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-162541398/xiaomi_xiaomi_redmi_note_13_pro_5g_12-512_gb_-_garansi_resmi_full02_h7oxfec2.jpg",
  },
  {
    title: "One Plus Nord CE4",
    price: "From ₹19,353",
    id: "One Plus Nord CE4",
    img: "https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80",
    name: "OnePlus Nord CE4 lite 5G (MEGA BLUE, 128 GB)  (8 GB RAM)",
    ratings: "1,952 Ratings & 63 Reviews",
    offer: "Extra ₹1000 off",
    fiexdPrice: "₹19,795",
    discount: "₹20,999",
    discountOffer: "5% off",
    img1: "https://image01-in.oneplus.net/media/202406/20/e71656380dcc8123d3045ce6876700ab.png",
    img2: "https://oasis.opstatics.com/content/dam/oasis/page/2024/camry/specs/1080-1080black.png",
    img3: "https://www.jiomart.com/images/product/original/rvsmjcxy1l/oneplus-nord-ce4-lite-5g-super-silver-8gb-ram-128gb-storage-product-images-orvsmjcxy1l-p609490974-1-202407111212.jpg?im=Resize=(420,420)",
  },
];

export default productData;
