const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " The designer delivered impressive animations! Creative and detailed work. Perfectly fitting for my project. Communication went smoothly, quick professional adjustments. Thanks! "
              </span>
              <span className="person">Saif Ghazi</span>
              <span className="job">Founder & Co-Founder Pop It Netherlands</span>
            </p>
            <img src="https://media.licdn.com/dms/image/D4E03AQGaBOd6MMUUVw/profile-displayphoto-shrink_100_100/0/1690352856626?e=1696464000&v=beta&t=MqFf2IG06VL1ePZuifDWkLMVzQY4SL1NwaB-odXe1Qo" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Will work with this seller again! Great Experience! Thank you! "
              </span>
              <span className="person">Mariah Emery</span>
              <span className="job">Owner Emery Cosmetic U.S.</span>
            </p>
            <img src="assets/logos/EC.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
