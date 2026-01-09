import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export interface FooterProps {}

function Footer({}: FooterProps) {
  const navigations = [
    { name: "Rechercher un GP", path: "search" },
    { name: "Destinations", path: "destinations" },
    { name: "Devenir GP", path: "register" },
  ];

  const legal = [
    { name: "Mentions légales", path: "legal" },
    { name: "Responsabilité", path: "legal" },
    { name: "CGV", path: "legal" },
  ];

  const contact = [
    { mail: "contact@easycollis.com", tel: "+221 77 346 18 82" },
  ];
  return (
    <>
      <footer className="font-inter bg-white border-t border-gray-300">
        <div className="p-8  w-7/10 mx-auto">
          <div className="grid grid-cols-4 gap-5">
            <div className="">
              <Logo></Logo>
              <p className="mt-8 text-sm text-gray-600">
                Plateforme de mise en relation entre clients et agences GP pour
                le transport international de colis.
              </p>
            </div>
            <div>
              <h2 className="font-medium">Navigation</h2>
              <ul className="mt-5 space-y-2">
                {navigations.map((link, index) => (
                  <li>
                    <Link
                      key={index}
                      to={{ pathname: link.path }}
                      className="mt-2 text-sm text-gray-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-medium">Légal</h2>
              <ul className="mt-5 space-y-2">
                {legal.map((link, index) => (
                  <li>
                    <Link
                      key={index}
                      to={{ pathname: link.path }}
                      className="mt-2 text-sm text-gray-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-medium">Contact</h2>
              <ul className="mt-5 space-y-2">
                {contact.map((info, index) => (
                  <li key={index} className="text-sm text-gray-600 space-y-2">
                    <p>Email: {info.mail}</p>
                    <p>Téléphone: {info.tel}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-7/10 mx-auto text-gray-300 mb-5" />
        <div className="text-center pb-4 text-sm text-gray-500">
          © 2024 <span className="uppercase mt-8">shipeasy</span>. Tous droits
          réservés.
        </div>
      </footer>
    </>
  );
}

export default Footer;
