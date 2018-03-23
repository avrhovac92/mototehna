import React, { Component } from 'react';
import 'css/Page1.css';
import { Video } from 'assets';
import 'css/Footer.css';
import Title from 'components/Title';
import Page2 from 'components/Page2';

class AboutUs extends Component {
  render() {
    return (
      <div className="glavni">
        <div className="Prvi">
          <Title className="title2" title="O Nama" />
          <div className="drugi">
            <video
              src={Video.video}
              className="videoTag"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            <div>
              <p className="glavnitext">
                MOTOTEHNA je maloprodaja koja se bavi nabavkom <br /> i
                distribucijom rezervnih delova za mopede, kosilice, vanbrodske
                motore , vodene pumpe i motorne testere.
              </p>
              <p className="glavnitext">
                Akcenat na distribuciji delova za mopede je stavljen na nabavku
                i prodaju delova za tomos mopede. U nasem asortimanu se mogu
                pronaci pored zamenskih i orginalni rezevni delovi brenda tomos.
              </p>
            </div>
          </div>
          <div className="drugitext">
            Maticna firma u cijem je sklopu proizvodnja delova za mopede tomos
            osnovana je davne 1998 god. U pocetku se firma bavila servisiranjem
            mopeda. Konstantnim razvijanjem i prosirenjem delatnosti nasa firma
            je u mogucnosti da svojim delovanjem pruzi mnogo vise.
            <br />
            <br />
            Samim tim zadovoljstvo nam je sto smo u mogucnosti da nasim kupcima
            pruzimo konstantan lager delova kroz nasu maloprodaju. Veleprodaju
            delova kao i proizvodnju rezervnih delova iz asortimana tomos.
          </div>
        </div>
        <Page2 />
      </div>
    );
  }
}

export default AboutUs;
