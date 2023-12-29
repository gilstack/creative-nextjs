import Link from "next/link";
import React from "react";
import SocialLinks from "../social-links";
import CopyrightArea from "./component/copyright-area";

const footer_contents = {
  logo: "/assets/img/logo/logo-white.png",
  widget_desc:
    "Conecte-se conosco para elevar sua presença digital e alcance novos horizontes online com nossos serviços especializados.",
  footer_widgets: [
    {
      w_class: "d-flex justify-content-lg-center",
      title: "Links",
      widget_lists: ["Home", "Sobre Nós", "Portfólio", "Contato", "F.A.Q"],
    },
    {
      padd: "pl-20",
      title: "Especialidades",
      widget_lists: [
        "Criação de Sites",
        "Lojas Online",
        "Identidade Visual",
        "Gestão de Tráfego",
        "Gestão de Mídias Sociais",
      ],
    },
  ],
  subscribe_title: "Inscreva-se na Newslatter",
  subscribe_text:
    "Faça parte da nossa comunidade e receba as novidades em primeira mão",
  copy_right_text: (
    <>©{new Date().getFullYear()} Trendor - Todos os direitos reservados.</>
  ),
  conditions: [
    "Termos e Condições",
    "Política de Privacidade",
    "Login / Cadastro",
  ],
};

const {
  conditions,
  copy_right_text,
  footer_widgets,
  logo,
  widget_desc,
  subscribe_text,
  subscribe_title,
} = footer_contents;

const FooterThree = ({ home_four = false }) => {
  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-130 pb-30">
          <div className="container">
            <div
              className="row wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget">
                  {!home_four && (
                    <div className="tp-footer-widget__logo mb-30">
                      <Link href="/">
                        <a>
                          <img src={logo} alt="" />
                        </a>
                      </Link>
                    </div>
                  )}
                  {home_four && (
                    <div className="tp-footer-widget__title mb-30">
                      <h3 className="footer-title">About Collax</h3>
                    </div>
                  )}
                  <div className="tp-footer-widget__text mb-30">
                    <p>{widget_desc}</p>
                  </div>
                  <div className="tp-footer-widget__social-link">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_widgets.map((w, i) => {
                const { title, widget_lists, w_class, padd } = w;
                return (
                  <div
                    key={i}
                    className={`col-xl-3 col-lg-2 col-md-6 ${
                      w_class ? w_class : ""
                    }`}
                  >
                    <div className={`tp-footer-widget ${padd ? padd : ""}`}>
                      <div className="tp-footer-widget__title pb-15">
                        <h3 className="footer-title">{title}</h3>
                      </div>
                      <div className="tp-footer-widget__list">
                        <ul>
                          {widget_lists.map((l, i) => (
                            <li key={i}>
                              <a href="#">{l}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {!home_four && (
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tp-footer-widget">
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{subscribe_title}</h3>
                    </div>
                    <div className="tp-footer-widget__text mb-55">
                      <p>{subscribe_text}</p>
                    </div>
                    <div className="tp-footer-widget__input">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Enter Mail" />
                        <button type="submit">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {home_four && (
                <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                  <div className="tp-footer-widget">
                    <div className="tp-footer-widget__title mb-40">
                      <h3 className="footer-title">Instagram post</h3>
                    </div>
                    <div className="row gx-3">
                      <InstagramItem img={"1"} />
                      <InstagramItem img={"2"} />
                      <InstagramItem img={"3"} />
                      <InstagramItem img={"4"} />
                      <InstagramItem img={"5"} />
                      <InstagramItem img={"6"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CopyrightArea start */}
          <CopyrightArea
            copy_right_text={copy_right_text}
            conditions={conditions}
          />
          {/* CopyrightArea end */}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterThree;

const InstagramItem = ({ img }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
      <div className="tp-footer-widget__tp-insta-img mb-15">
        <img
          className="w-100"
          src={`/assets/img/footer/footer-${img}.jpg`}
          alt=""
        />
        <div className="tp-footer-widget__tp-insta-img-icon">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
