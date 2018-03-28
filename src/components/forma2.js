import React, { Component } from 'react';

import 'css/forma2.css';
import { Icons } from 'assets';

export default class ContactForm extends Component {

  constructor(props){
       super(props);

       this.state = {
           fields: {
             email: "text",
           },
           errors: {}
       }
    }
  handleChange(field, e) {
    console.log(field);

    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="contactFormTitle">Kontakt</div>
            <div className="contactFormLine" />
            <form
              id="contact-form"
              method="post"
              action="contact.php"
              role="form"
            >
              <div className="messages" />

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="contactFormLabel" for="form_name">
                        Ime
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control textarea"
                        placeholder="Vaše ime"
                        required="required"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="contactFormLabel" for="form_email">
                        Email
                      </label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control textarea"
                        placeholder="vas@email.com"
                        required="required"
                        data-error="Valid email is required."
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields.email}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="contactFormLabel" for="form_phone">
                        Broj telefona
                      </label>
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className="form-control textarea"
                        placeholder="061 1234 567"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="contactFormLabel" for="form_message">
                        Poruka
                      </label>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control textarea"
                        placeholder="Vaša poruka..."
                        rows="4"
                        required="required"
                        data-error="Please,leave us a message."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="contactFormButton">
                      <img
                        className="send"
                        src={Icons.sendIcon}
                        alt="Icon send"
                      />
                      <span>POŠALJI</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
