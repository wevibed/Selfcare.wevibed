
import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const phone="263774567890";
const wa=`https://wa.me/${phone}?text=${encodeURIComponent("Hello Self-Care + Baby Store, I would like to enquire about your products.")}`;

const images={
 hero:"https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1600&q=88",
 baby:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=88",
 skincare:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=88",
 clothing:"https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=88",
 feeding:"https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&w=900&q=88",
 bath:"https://images.unsplash.com/photo-1584155828260-5c1c1c6a0f0c?auto=format&fit=crop&w=900&q=88",
 toys:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=88",
 body:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=88",
 wellness:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=88",
 gifts:"https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=88"
};

function WA(){return <a className="wa" href={wa} aria-label="WhatsApp">⌕</a>}
function Header(){return <><div className="top"><span>Baby Care • Self-Care • Everyday Essentials</span><a href={wa}>WhatsApp Us</a></div><header><a className="brand" href="#"><i>♡</i><strong>SELF-CARE +<small>BABY STORE</small></strong></a><nav><a href="#categories">Categories</a><a href="#baby">Baby Care</a><a href="#selfcare">Self-Care</a><a href="#products">Products</a><a href="#contact">Contact</a></nav><div className="icons"><button>⌕</button><button>☰</button></div></header></>}
function Cat({image,title,text}){return <a className="cat" href="#products"><img src={image} alt={title}/><div><strong>{title}</strong><small>{text}</small></div><b>→</b></a>}
function Product({image,title}){return <article className="product"><img src={image} alt={title}/><div><h3>{title}</h3><a href="#contact">Enquire →</a></div></article>}

function App(){return <div>
<Header/>
<main>
<section className="hero"><img src={images.hero} alt="Baby and self-care store"/><div className="heroCopy"><p className="eyebrow">BABY CARE • SELF-CARE • EVERYDAY ESSENTIALS</p><h1>Happy Babies.<br/>Confident <em>Mums.</em></h1><p>Quality products for your little ones and for you. Because every moment matters.</p><a className="btn" href="#categories">SHOP NOW →</a></div></section>

<section className="trust"><span>◉<b>Quality Products</b><small>You can trust</small></span><span>♧<b>Affordable Prices</b><small>For every family</small></span><span>⌂<b>Local Shopping</b><small>Zimbabwe</small></span><span>♡<b>For Baby & You</b><small>Everyday essentials</small></span></section>

<section id="categories" className="section"><div className="heading"><div><p className="eyebrow pink">SHOP BY CATEGORY</p><h2>Everything you need.</h2><p>Explore baby and self-care essentials.</p></div><a href="#products">View All →</a></div><div className="cats">
<Cat image={images.baby} title="Baby Care" text="Daily baby essentials"/><Cat image={images.skincare} title="Self-Care" text="Skin, hair & personal care"/><Cat image={images.clothing} title="Baby Clothing" text="Comfortable little outfits"/><Cat image={images.feeding} title="Feeding Essentials" text="Everyday feeding needs"/><Cat image={images.bath} title="Bath & Hygiene" text="Care for little ones"/><Cat image={images.toys} title="Baby Toys" text="Play & learning"/><Cat image={images.body} title="Body Care" text="Personal care essentials"/><Cat image={images.wellness} title="Health & Wellness" text="Everyday wellness"/>
</div></section>

<section id="selfcare" className="feature dark"><div><p className="eyebrow pink">SELF-CARE</p><h2>Self-care for a happier you.</h2><p>Explore personal-care, skincare and everyday beauty essentials.</p><a className="btn pinkBtn" href="#products">SHOP SELF-CARE →</a></div><img src={images.skincare} alt="Self-care products"/></section>

<section id="baby" className="feature light"><img src={images.baby} alt="Baby care"/><div><p className="eyebrow pink">BABY CARE</p><h2>Everything your baby needs.</h2><p>Explore baby-care essentials and contact the store to confirm available products and stock.</p><a className="btn pinkBtn" href="#products">SHOP BABY CARE →</a></div></section>

<section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow pink">FEATURED PRODUCTS</p><h2>Explore the range.</h2></div><a href="#contact">Ask about availability →</a></div><div className="products">
<Product image={images.baby} title="Baby Care Essentials"/><Product image={images.skincare} title="Skincare & Self-Care"/><Product image={images.feeding} title="Feeding Essentials"/><Product image={images.clothing} title="Baby Clothing"/><Product image={images.bath} title="Bath & Hygiene"/><Product image={images.toys} title="Baby Toys"/>
</div></section>

<section className="promo"><img src={images.gifts} alt="Baby and self-care gift ideas"/><div><p className="eyebrow pink">LITTLE MOMENTS</p><h2>Thoughtful essentials for everyday life.</h2><p>Browse products for babies, families and personal care.</p><a className="btn pinkBtn" href="#products">SHOP THE RANGE →</a></div></section>

<section id="contact" className="contact"><div><p className="eyebrow pink">VISIT OUR STORE</p><h2>Find your local baby & self-care essentials.</h2><p>Store location and contact details can be updated once confirmed.</p><a className="btn pinkBtn" href={wa}>CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>Self-Care + Baby Store</strong><span>Location to be confirmed</span><button>MAP LOCATION →</button></div></section>
</main>
<footer><div className="brand footerBrand"><i>♡</i><strong>SELF-CARE +<small>BABY STORE</small></strong></div><p>Baby Care • Self-Care • Everyday Essentials</p><p>© 2026 Self-Care + Baby Store</p></footer><WA/>
</div>}
createRoot(document.getElementById("root")).render(<App/>);
