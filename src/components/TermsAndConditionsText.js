import React, { Component } from "react";
import "css/Page1.css";
import "css/Footer.css";
import "css/PrivacyPolicyText.css";

import Title from "components/Title";

class TermsAndConditionsText extends Component {
  render() {
    return (
      <div className="glavni">
        <Title className="title2" title="Pravila i uslovi korišćenja sajta" />
        <div className="glavnitext">
          <div className="page1-about-us-text">
            Hvala što ste posetili naš internet sajt „MOTOTEHNA“. Vaš pristup,
            kao i korišćenje ovog našeg internet sajta (u daljem tekstu:
            internet sajt) podleže ovim uslovima korišćenja i važećim zakonskim
            propisima koji uređuju ovu oblast. Pristupom i korišćenjem internet
            sajta, prihvatate bez ograničenja, ove uslove korišćenja. Ukoliko ne
            prihvatate ove uslove korišćenja bez ograničenja, molimo Vas da
            napustite internet sajt.
          </div>
          <div className="title-container">
            <p className="subtitle">Vlasništvo sadržaja</p>
            <div className="underline" />
          </div>
          <div className="page1-about-us-text">
            Internet sajt i svi tekstovi, logotipi, grafika, slike, audio
            materijal i ostali materijal na ovom internet sajtu (u daljem
            tekstu: Sadržaj), jesu autorsko pravo ili vlasništvo Maje Curic, ili
            su na internet sajt postavljeni uz dozvolu vlasnika ili ovlašćenog
            nosioca prava. Korišćenje Sadržaja, osim na način opisan u ovim
            uslovima korišćenja, bez pisane dozvole vlasnika Sadržaja je strogo
            zabranjeno. Autor će zaštiti svoja autorska prava, svoja prava
            intelektualne svojine i ostala srodna prava, kao i druga prava, u
            najvećoj meri dozvoljenoj zakonom, uključujući i krivično gonjenje.
          </div>
          <div className="title-container">
            <p className="subtitle">Vaša upotreba internet sajta</p>
            <div className="underline" />
          </div>
          <div className="page1-about-us-text">
            Sadržaj internet sajta može sadržati netačne podatke ili štamparske
            greške. Promene na internet sajtu se mogu napraviti periodično u
            bilo kom trenutku i bez obaveštenja. Međutim, Autor se ne obavezuje
            da redovno ažurira informacije sadržane na ovom internet sajtu.
            Takođe, Autor ne garantuje da će internet sajt funkcionisati bez
            prekida ili grešaka, da će nedostaci biti blagovremeno ispravljani
            ili da je internet sajt kompatibilan sa vašim hardverom ili
            softverom.
          </div>
          <div className="title-container">
            <p className="subtitle">Izuzeće od odgovornosti</p>
            <div className="underline" />
          </div>
          <div className="page1-about-us-text">
            Internet sajt koristite na sopstveni rizik. Autor nije odgovoran za
            materijalnu ili nematerijalnu štetu, direktnu ili indirektnu koja
            nastane iz korišćenja ili je u nekoj vezi sa korišćenjem internet
            sajta ili njegovog Sadržaja.
          </div>
          <div className="title-container">
            <p className="subtitle">
              Linkovi sa internet sajtovima trećih lica
            </p>
            <div className="underline" />
          </div>
          <div className="page1-about-us-text">
            Internet sajt može sadržati linkove drugih internet sajtova čiji
            vlasnik ili korisnik nije Autor. Takvi linkovi su obezbeđeni
            isključivo da bi Vama pružili što više informacija. Autor ne
            kontroliše i nije odgovoran za rad, sadržaj, politiku privatnosti
            ili bezbednost ovih sajtova. Autor ne kontroliše sadržaj ili
            proizvode ili usluge dostupne na ovim internet sajtovima. Ako
            uspostavite vezu sa takvim internet sajtovima preko linka na našem
            internet sajtu, to činite na sopstveni rizik i bez saglasnosti
            Autora.
          </div>
          <div className="title-container">
            <p className="subtitle">Sadržaj dostupan na ovom internet sajtu</p>
            <div className="underline" />
          </div>
          <div className="page1-about-us-text">
            Prava intelektualne svojine i ostala prava na bilo koji Sadržaj koji
            je dostupan za preuzimanje sa internet sajta (u daljem tekstu
            Sadržaj), pripadaju Autoru, osim ako drugačije nije izričito
            određeno. Vaša upotreba Sadržaja podleže uslovima Zakona o zaštiti
            autorskih prava Republike Srbije. Nemojte preuimati niti koristiti
            Sadržaj ako se ne slažete sa ovim odredbama. Kada preuzimate ili
            koristite Sadržaj sa internet sajta, to činite na sopstveni rizik.
          </div>
        </div>
      </div>
    );
  }
}

export default TermsAndConditionsText;
