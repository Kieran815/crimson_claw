import React from "react";
import Signature from "./Signature";
import "../Design/About.css";

const About = () => {
  return(
    <React.Fragment>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>I Live to Make Bad-Ass Jewelry for You.</h2>
        <p>Hello friends! I’m Bethany, but most of the world calls me Rockit. I’m the owner & artist here at Crimson Claw. I live in the gorgeous state of Colorado with my love & adorable puppers. My friends are my world & my Harley is my freedom.</p>
        <p>I started silversmithing about 6 months ago, but my dreams of being a jeweler started years earlier. When I was 13 I was diagnosed with Lupus & severe kidney disease. I was granted a <b><a href="https://wish.org/" target="_blank" rel="noopener noreferrer">Make-A-Wish</a></b> trip & told I would likely not live to see high school graduation. Tapping into my creative side truly kept me going. I spent my days surrounded by gemstones & seed beads. I never stopped fighting. You can check out my blog, <b><a target="_blank" href="https://thewolfsleepsinme.wordpress.com/" rel="noopener noreferrer">The Wolf Sleeps In Me</a></b>, for more about my fight against Lupus.</p>
        <p>Today, sitting in my studio creating beautiful jewelry for you is more than a blessing. I am living my dream. Thank you all for the support. It’s a pleasure having you on this journey with me.
        </p>
      </div>
        <hr />
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Check out some of our Reviews on <a target="_blank" href="https://www.etsy.com/shop/CrimsonClawJewelry?ref=seller-platform-mcnav" rel="noopener noreferrer">Etsy</a>!!!</h3>

{ /* Beginning of Reviews */ }
        <div className="card">
          <div className="card-header">
            5 out of 5 stars
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"Bethany does beautiful work. I've purchased a few pieces from her and am happy with each one."</p>
              <footer className="blockquote-footer">Sandra Moore on Dec 1, 2019 on the <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/listing/754713907/reserved-for-sandra?ref=shop_home">Custom Earring Set</a></footer>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            5 out of 5 stars
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"Ah! It is like this dress was made for me. Love all your stuff!!!"</p>
              <footer className="blockquote-footer">Robin Norman on Oct 25, 2019 on the <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/listing/742352475/reserved-vintage-60s-mod-mini-dress-size?ref=shop_home">Vintage 60's Mod Mini Dress Size XS</a></footer>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            5 out of 5 stars
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"This was literally made for me, without even knowing it. It's beautiful... Powerful... I love this piece so much. Thank you Beth."</p>
              <footer className="blockquote-footer">Lindsay on Sep 7, 2019 on the <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/listing/732162345/labradorite-goddess-pendant?ref=shop_review">Labradorite Goddess Pendant</a></footer>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            5 out of 5 stars
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"LOVE IT!!!!"</p>
              <footer className="blockquote-footer">  Katie and Jon on Aug 1, 2019 on the <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/listing/722881837/sodalite-wrap-necklace?ref=shop_review">Sodalite Wrap Necklace</a></footer>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            5 out of 5 stars
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"It’s so pretty, it’s exactly what I wanted! Shipped quickly and well packaged- thank you!"</p>
              <footer className="blockquote-footer">cKa27 on Jul 27, 2019 on the <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/listing/709005652/simple-sterling-cuff?ref=shop_review">Simple Sterling Cuff</a></footer>
            </blockquote>
          </div>
        </div>
{ /* End of Reviews */ }
        <Signature />
      </div>
    </React.Fragment>
  );
}

export default About;
