import Link from "next/link";
import React from "react";
import { HighlightTwo } from "../../../svg";

const hero_contents = {
  shapes: [{ img: "hero-shape-4" }, { num: "-two", img: "hero-shape-4.1" }],
  title: (
    <>
      Cresça a sua{" "}
      <span className="tp-highlight">
        {" "}
        <HighlightTwo /> <i>Presença</i>
      </span>{" "}
      Digital
    </>
  ),
  text: (
    <>
      Aprimoramos a visibilidade com maestria em SEO, gerenciamos suas redes
      sociais
      <br /> com propósito e direcionamos tráfego pago com resultados tangíveis
      e duradouros.
    </>
  ),
  btn_text: "Nossos Serviços",
  btn_text_2: "Saiba Mais",
  social_links: [
    {
      id: 1,
      icon: "fab fa-facebook-f social-icon-1",
      title: "Facebook",
      link: "http://facebook.com",
    },
    {
      id: 4,
      icon: "fab fa-instagram social-icon-4",
      title: "Instagram",
      link: "http://instagram.com",
    },
    {
      id: 5,
      icon: "fab fa-whatsapp social-icon-5",
      title: "Whatsapp",
      link: "https://www.whatsapp.com/",
    },
  ],
  hero_img: "/assets/img/hero/hero-test.png",
};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 cs-bg-body fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        <div className="shape-circle-blue d-none"></div>
        <div className="shape-one">
          <img src="/assets/img/hero/shape-0.png" alt="" />
        </div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    {title}
                  </h2>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {text}
                  </p>
                  <div
                    className="tp-hero-button mb-100 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="/portfolio">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link href="/about-me">
                      <a className="tp-btn-grey">
                        {btn_text_2}
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="tp-hero-social pb-10 wow tpfadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay="1.2s"
                  >
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a
                          key={i}
                          className={`social-icon-${l.id}`}
                          href={l.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={l.icon}></i>
                          <span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
