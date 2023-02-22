import React from 'react';

const Form = () => {
  return (
    <section className="section section-form">
      <div className="contaienr-container-form">
        <form className="form-contact">
          <h3 className="heading-form-contact">
            Get 30% discount on your first purchase!
          </h3>
          <p className="form-contact-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
            corporis labore beatae aspernatur vel quae error exercitationem.
          </p>
          <div className="form-contact-control">
            <label className="form-contact-control-label">Full name</label>
            <input type="text" placeholder="Don Joe" />
          </div>
          <div className="form-contact-control">
            <label className="form-contact-control-label">Full name</label>
            <input type="email" placeholder="me@DonJoe.com" />
          </div>
          <div className="form-contact-control">
            <select className="form-contact-control-label">
              Where did you hear from us?
              <option>Please choose one option</option>
              <option>Friends and family</option>
              <option>YoutuTube</option>
              <option>Instagram</option>
              <option>Podcast</option>
              <option>Others</option>
            </select>
          </div>
          <button className="btn btn-sign-up-now">Sign up now</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
