import React, { Component } from 'react';
import 'css/AboutUs.css';

import MototehnaMap from 'components/MototehnaMap';

import Title from 'components/Title';

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUsContainer">
        <Title title="O Nama" />
        <div className="itemsContainer">
          <div className="aboutUsText">
            MOTOTEHNA je maloprodaja koja se bavi nabavkom i distribucijom
            rezervnih delova za mopede, kosilice, vanbrodske motore ,vodene
            pumpe i motorne testere. Akcenat na distribuciji delova za mopede je
            stavljen na nabavku i prodaju delova za tomos mopede. U nasem
            asortimanu se mogu pronaci pored zamenskih i orginalni rezevni
            delovi brenda tomos.
            <br />
            <br />
            Maticna firma u cijem je sklopu proizvodnja delova za mopede tomos
            osnovana je davne 1998 god.u pocetku se firma bavila servisiranjem
            mopeda. Konstantnim razvijanjem i prosirenjem delatnosti nasa firma
            je u mogucnosti da svojim delovanjem pruzi mnogo vise.
            <br />
            <br />
            Samim tim zadovoljstvo nam je sto smo u mogucnosti da nasim kupcima
            pruzimo konstantan lager delova kroz nasu maloprodaju. Veleprodaju
            delova kao i proizvodnju rezervnih delova iz asortimana tomos.
          </div>
          <div className="aboutUsMap">
            <MototehnaMap />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
