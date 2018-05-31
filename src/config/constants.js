import React from "react";
import { Icons, Images } from "assets";
import { Link } from "react-router-dom";

const ListProducts = [
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din"
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din"
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din"
  }
];

const Services = [
  {
    title: "PROIZVODNJA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci."
  },
  {
    title: "PLASTIFIKACIJA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci."
  },
  {
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci."
  }
];

const MototehnaGoogleMapRoutes = { lat: 45.2784481, lng: 19.7784862 };

const FooterList = [
  {
    header: "Korisni Linkovi",
    items: [
      {
        text: <Link to="/contact-form">Reklamacije</Link>
      },
      {
        text: <Link to="/privacy-policy">Politika privatnosti</Link>
      },
      {
        text: <Link to="/terms-and-conditions">Uslovi kupovine</Link>
      },
      {
        text: <Link to="/terms-and-conditions">Uslovi koriscenja</Link>
      }
    ]
  },
  {
    header: "Adresa",
    items: [
      {
        text: "Sajlovo XIII 4"
      },
      {
        text: "21000 Novi Sad"
      },
      {
        text: "Republika Srbija"
      }
    ]
  },
  {
    header: "Kontakt Telefoni",
    items: [
      {
        image: Icons.phoneHeader,
        text: "+381 61 4217 994"
      },
      {
        image: Icons.phoneHeader,
        text: "+381 21 6315 252"
      },
      {
        image: Icons.footerWorkingHours,
        text: (
          <span>
            Radnim danima od 09 - 17h
            <br />Subotom od 09 - 14h
            <br />Nedelja neradna
          </span>
        )
      }
    ]
  }
];

const SidebarPhones = {
  header: "Kontakt Telefoni",
  items: [
    {
      image: Icons.phoneSidebar,
      text: "+381 61 4217 994"
    },
    {
      image: Icons.phoneSidebar,
      text: "+381 21 6315 252"
    },
    {
      image: Icons.workingHours,
      text: (
        <span>
          Radnim danima od 09 - 17h
          <br />Subotom od 09 - 14h
          <br />Nedelja neradna
        </span>
      )
    }
  ]
};

const PrivacyPolicyContent = [
  {
    title: "Informacije koje dobijamo od Vas",
    description:
      "U načelu možete posetiti ovaj internet sajt bez otkrivanja bilo kakve informacije o sebi. Naš server registruje imena domena, a ne e-mail adrese posetilaca internet sajta. Na pojedinim delovima ovog internet sajta tražimo lične informacije o Vama kako bismo vam omogućili ostvarivanje određenih prava, kao što je pružanje izvesnih informacija koje zatražite. Ovo činimo putem upotrebe online formulara i svaki put kada nam pošaljete svoje detalje e-mailom. Informacije koje dobijemo od Vas mogu uključivati Vaše ime i prezime, adresu, brojeve telefona, faksa ili e-mail adresu. Od vas nikada nećemo tražiti dodatne informacije koje nisu neophodne da biste dobili uslugu koju ste zatražili."
  },
  {
    title: "Upotreba sakupljenih informacija",
    description:
      "Informacije o imenima domena do kojih dođemo ne koristimo kako bismo Vas lično identifikovali, već da bi na osnovu tih i drugih informacija izmerili broj poseta internet sajtu, prosečno vreme provedeno na internet sajtu, pregledane stranice itd. Ove informacije ćemo koristiti isključivo da bismo izmerili frekvenciju posećivanja našeg internet sajta i unapredili njegov sadržaj. U slučaju kada od Vas zatražimo druge lične informacije, kao što su Vaše ime i e-mail adresa, tražićemo Vaš pristanak (npr. upotrebom online formulara ili putem e-maila), obavestiti Vas o procesu prikupljanja informacija i o tome kako ćemo ih upotrebiti. Informacije koje nam Vi date ili do kojih dođemo putem ovog internet sajta, koristićemo isključivo za odgovaranje na Vaša pitanja i/ili za pružanje i poboljšanje naših usluga. U slučaju da se predomislite i ne želite da Vas kontaktiramo u budućnosti, molimo Vas da nas o tome obavestite."
  },
  {
    title: "Otkrivanje informacija",
    description:
      "Informacije koje nam date čuvaju se na našem serveru, a mogu im pristupiti naši saradnici, državni organi, naši pravni sledbenici i lica koja angažujemo da obrađuju podatke u naše ime u svrhe navedene u ovoj politici ili druge svrhe za koje ste Vi dali odobrenje. Takođe, možemo preneti informacije o upotrebi našeg internet sajta trećim licima ali to neće uključivati informacije na osnovu kojih Vi možete biti identifikovani. Osim ako to zakon ne nalaže, nećemo ni na koji način učiniti dostupnim niti distribuirati informacije o Vama koje nam pružite, bez vašeg prethodnog odobrenja."
  },
  {
    title: "Maloletni korisnici",
    description:
      "Ukoliko ste maloletni, neophodno je da dobijete dozvolu svojih roditelja ili staratelja pre nego što nam date informacije o sebi. Maloletnim korisnicima koji nemaju ovakvo odobrenje nije dozvoljeno da nam daju lične informacije."
  },
  {
    title: "Drugi internet sajtovi",
    description:
      "Naš internet sajt može sadržati linkove za druge internet sajtove koji nisu pod našom kontrolom i koji ne podležu ovoj Politici privatnosti. Ukoliko pristupite drugim internet sajtovima koristeći date linkove, operateri ovih internet sajtova mogu tražiti informacije od vas koje će koristiti u skladu sa svojim politikama zaštite privatnosti, koje se mogu razlikovati od naše."
  },
  {
    title: "Upotreba kolačića (Cookies)",
    description:
      "Kao i većina sajtova na internetu, naši sajtovi koriste tzv. “kolačiće” (u nastavku Cookie). Cookie-ji su mali tekstualni fajlovi koje Vaš Internet pregledač (u nastavku browser) čuva na Vašem računaru i koji pomažu da se identifikujete na web sajtovima prilikom kasnijih poseta. Cookie-ji su jedinstveno dodeljeni Vama i može ih čitati samo web server u domenu koji je izdao taj Cookie. Korišćenje Cookie-ja je standardna praksa na Internetu i većina browser-a je podešena tako da automatski prihvata sve Cookie-je. Međutim, Vi uvek možete odlučiti da želite da prestanete da ih koristite. Možete ih jednostavno ručno obrisati ili svoj browser posebno podesiti za rad sa Cookie-jima. Za ove procedure pogledajte dokumentaciju ili Help/Pomoć sekciju Vašeg browser-a. Na našem sajtu koristimo Cookie-je isključivo kako bismo Vam omogućili bolji kvalitet interakcije sa našim sajtovima, za potrebe statističke analize posećenosti i optimizaciju našeg oglašavanja na internetu preko servisa Google Analytics i Google Ads. Datalji o ovim servisima kao i o mogućnostima Vašeg podešavanja se mogu pogledati na sledećim linkovima: www.google.com/analytics/learn/privacy.html, www.google.com/intl/en/policies/technologies/ads/, www.google.com/ads/preferences."
  }
];

const CategoriesList = [
  {
    title: "MOPEDI",
    collapsed: false,
    checked: true,
    subCategories: [
      {
        title: "A3",
        checked: true
      },
      {
        title: "A35",
        checked: true
      },
      {
        title: "APN4",
        checked: true
      },
      {
        title: "APN6",
        checked: true
      },
      {
        title: "BT50",
        checked: true
      },
      {
        title: "ATX",
        checked: true
      },
      {
        title: "CTX",

        checked: true
      }
    ]
  },
  {
    title: "BASTA",
    collapsed: false,
    checked: true,
    subCategories: [
      {
        title: "Kosilice",
        checked: true
      },
      {
        title: "Trimeri",
        checked: true
      }
    ]
  },
  {
    title: "SUMA",
    collapsed: false,
    checked: true,
    subCategories: [
      {
        title: "Motorne testere",
        checked: true
      }
    ]
  },
  {
    title: "VANBRODSKI",
    collapsed: false,
    checked: true,
    subCategories: [
      {
        title: "T4",
        checked: true
      },
      {
        title: "T4.5",
        checked: true
      },
      {
        title: "T4.8",
        checked: true
      },
      {
        title: "T10",
        checked: true
      },
      {
        title: "T18",
        checked: true
      }
    ]
  }
];
const ListProducts1 = [
  {
    name: "Sediste malo A3",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture1"]
  },
  {
    name: "Sediste malo A35",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture2"]
  },
  {
    name: "Sediste malo APN4",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sediste malo APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sediste malo BT50",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sediste malo ATX",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sediste malo CTX",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture2"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture2"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture2"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture2"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture1"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture1"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture1"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture1"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  },
  {
    name: "Sedište malo A3/APN6",
    category: "MOPEDI",
    price: "1600 din",
    src: Images["picture3"]
  }
];

export { ListProducts };
export { ListProducts1 };
export { Services };
export { MototehnaGoogleMapRoutes };
export { FooterList };
export { SidebarPhones };
export { PrivacyPolicyContent };
export { CategoriesList };
