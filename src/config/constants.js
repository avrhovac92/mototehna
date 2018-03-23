import React from 'react';
import { Icons } from 'assets';

const ListProducts = [
  {
    name: 'Sedište malo A3/APN6',
    category: 'MOPEDI',
    price: '1600 din'
  },
  {
    name: 'Sedište malo A3/APN6',
    category: 'MOPEDI',
    price: '1600 din'
  },
  {
    name: 'Sedište malo A3/APN6',
    category: 'MOPEDI',
    price: '1600 din'
  }
];

const Services = [
  {
    title: 'PROIZVODNJA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci.'
  },
  {
    title: 'PLASTIFIKACIJA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci.'
  },
  {
    title: 'LOREM IPSUM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ex eu enim aliquet dictum eu ac quam. Mauris pretium, diam a efficiut hendrerit, magna matus feugiat libero, eu finibus turpis dolor sed orci.'
  }
];

const MototehnaGoogleMapRoutes = { lat: 45.2784481, lng: 19.7784862 };

const FooterList = [
  {
    header: 'Korisni Linkovi',
    items: [
      {
        text: 'Reklamacije'
      },
      {
        text: 'Politika privatnosti'
      },
      {
        text: 'Uslovi kupovine'
      },
      {
        text: 'Uslovi koriscenja'
      }
    ]
  },
  {
    header: 'Adresa',
    items: [
      {
        text: 'Sajlovo XIII 4'
      },
      {
        text: '21000 Novi Sad'
      },
      {
        text: 'Republika Srbija'
      }
    ]
  },
  {
    header: 'Kontakt Telefoni',
    items: [
      {
        image: Icons.phoneHeader,
        text: '+381 61 4217 994'
      },
      {
        image: Icons.phoneHeader,
        text: '+381 21 6315 252'
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
const FooterList1 = [
  {
    header: 'Kontakt Telefoni',
    items: [
      {
        image: Icons.phoneSidebar,
        text: '+381 61 4217 994'
      },
      {
        image: Icons.phoneSidebar,
        text: '+381 21 6315 252'
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
  }
];
export { ListProducts };
export { Services };
export { MototehnaGoogleMapRoutes };
export { FooterList };
export { FooterList1 };
