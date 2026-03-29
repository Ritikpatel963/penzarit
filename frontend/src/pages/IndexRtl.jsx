import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexRtl() {
  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Banner Section  */}
        <section className="tj-banner-section fix">
          <div className="hero-bg" data-bg-image="/assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.5">[ تحويل الأفكار ]</span>
                  <h1 className="banner-title tj-split-text-4">حلول تقنية مبتكرة للأعمال.</h1>
                  <div className="btn-area tj-fade-anim" data-delay=".6">
                    <Link className="tj-primary-btn" to="/service">
                      <span className="btn-text"><span>استكشف الخدمات</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                    <a className="number" href="tel:18883338181"><i className="tji-phone-2"></i><span>+1 (888)
                        333-8181</span></a>
                  </div>
                  <div className="list-area tj-fade-anim" data-delay=".6" data-duration="1" data-direction="left">
                    <ul className="list-style-1">
                      <li>
                        <span><i className="tji-check"></i></span>ابتكر بذكاء
                      </li>
                      <li>
                        <span><i className="tji-check"></i></span>تبسيط التكنولوجيا
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="banner-img-area">
                  <div className="banner-img tj-fade-anim" data-delay="0.3" data-direction="right">
                    <img src="/assets/images/hero/hero-img.webp" alt="صورة" />
                  </div>
                  <div className="trusted tj-bounce tj-fade-anim" data-delay="1" data-direction="left">
                    <span className="icon"><i className="tji-shield"></i></span>
                    <span className="text">موثوق من قبل أكثر من 800 عملاق تقني.</span>
                  </div>
                  <div className="customers-box tj-fade-anim" data-delay="0.6" data-direction="right">
                    <div className="customers">
                      <ul>
                        <li><img src="/assets/images/testimonial/client-1.webp" alt="صورة" /></li>
                        <li><img src="/assets/images/testimonial/client-2.webp" alt="صورة" /></li>
                        <li><img src="/assets/images/testimonial/client-3.webp" alt="صورة" /></li>
                        <li><img src="/assets/images/testimonial/client-4.webp" alt="صورة" /></li>
                      </ul>
                    </div>
                    <div className="customers-bottom">
                      <div className="rating-area">
                        <div className="customers-number">4.9</div>
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{"width":"90%"}}>
                            <span>★★★★★</span>
                          </div>
                          <div className="empty-ratings">
                            <span>★★★★★</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="customers-text">استنادًا إلى أكثر من 600 تقييم على Google.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-scroll tj-fade-anim" data-delay="1.2" data-direction="top">
            <a href="#client" className="scroll-down">
              <span className="text">مرر للأسفل</span>
              <span className="icon"><i className="tji-arrow-down-2"></i></span>
            </a>
          </div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Client Section  */}
        <section id="client" className="tj-client-section section-gap-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="client-content tj-fade-anim" data-delay="0.1">
                  <h5 className="sec-title">انضم إلى أكثر من <span>1000+</span> شركة مع تيك مينو هنا</h5>
                </div>
                <div className="swiper client-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-1.webp" alt="صورة" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-2.webp" alt="صورة" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-3.webp" alt="صورة" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-4.webp" alt="صورة" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-5.webp" alt="صورة" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-6.webp" alt="صورة" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Client Section  */}

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ لماذا تختارنا ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">حلول IT موثوقة لأفضل النتائج.</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">خدماتنا مصممة لتلبية احتياجاتك الفريدة.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn d-none d-lg-inline-flex" to="/about">
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-thumbs-up"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">سجل حافل</h4>
                      <p className="desc">مع مجموعة من المشاريع الناجحة والعملاء الراضين، لدينا سمعة ممتازة.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-idea"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">حلول مخصصة</h4>
                      <p className="desc">خدماتنا مصممة لتلبية احتياجات عملك الخاصة، لضمان الحل الأمثل.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-rocket"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">تقنيات المستقبل</h4>
                      <p className="desc">ابقَ متقدّمًا على المنافسة مع الذكاء الاصطناعي والحوسبة السحابية وحلول الأتمتة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-hand-2"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">دعم 24/7</h4>
                      <p className="desc">متواجدون دائمًا لدعمك باستخدام أحدث حلول الذكاء الاصطناعي والسحابة والأتمتة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <Link className="tj-primary-btn" to="/about">
                <span className="btn-text"><span>تعرف أكثر</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Choose Section  */}

        {/*  start: About Section  */}
        <section className="tj-about-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="/assets/images/bg/common-bg.webp"></div>
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-left tj-fade-anim" data-delay=".1" data-direction="left">
                  <div className="about-img">
                    <img src="/assets/images/about/about-img-1.webp" alt="صورة" />
                  </div>
                  <div className="about-left-bottom">
                    <div className="experience-area tj-fade-anim" data-delay=".2">
                      <span className="exp-badge">الخبرة</span>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="counter">20</span>
                          <span className="count-plus"><sup>+</sup></span>
                        </div>
                        <span className="count-text">سنة من التميز في حلول تكنولوجيا المعلومات.</span>
                      </div>
                    </div>
                    <div className="author-area tj-fade-anim" data-delay=".3">
                      <div className="author-info">
                        <div className="author-img">
                          <img src="/assets/images/testimonial/client-1.webp" alt="صورة" />
                        </div>
                        <div className="author-text">
                          <h6 className="author-name">بيردي نيكولاس</h6>
                          <span>مؤسس مشارك</span>
                        </div>
                      </div>
                      <div className="signature">
                        <img src="/assets/images/about/signature.webp" alt="صورة" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="about-content-area tj-fade-anim" data-delay=".1" data-direction="right">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ عن تيك مينو ]</span>
                    <h2 className="sec-title tj-split-text-1">تقديم حلول تدفع ابتكارنا ونجاحنا السريع.</h2>
                  </div>
                  <p className="desc">
                    نحن فريق من خبراء التقنية المتحمسين نقدم حلول IT مبتكرة مصممة لمساعدة الشركات على النمو والتكيف
                    والازدهار في العالم الرقمي. ابقَ متقدّمًا على المنافسة.
                  </p>
                  <div className="about-funfact">
                    <div className="countup-item">
                      <div className="inline-content">
                        <span className="counter">3</span>
                        <span className="count-plus">K<sup>+</sup></span>
                      </div>
                      <span className="count-text">مشاريع ناجحة.</span>
                    </div>
                    <div className="countup-item">
                      <div className="inline-content">
                        <span className="counter">98</span>
                        <span className="count-plus"><sup>+</sup></span>
                      </div>
                      <span className="count-text">محترفين في IT.</span>
                    </div>
                  </div>
                  <Link className="tj-primary-btn style-2 mt-25" to="/about">
                    <span className="btn-text"><span>تعرف أكثر</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </Link>
                  <div className="circle-text-wrap award-circle" data-bg-image="/assets/images/about/award-circle-bg.webp">
                    <span className="circle-text" data-bg-image="/assets/images/about/award-circle-text.png"></span>
                    <span className="circle-icon"><span><i className="tji-award"></i></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: About Section  */}

        {/*  start: Service Section  */}
        <div className="tj-service-section section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="sec-heading mt-30 mb-0 tj-fade-anim" data-delay=".1" data-direction="bottom">
                  <span className="sub-title tj-fade-anim">[ استكشف خدماتنا ]</span>
                  <h2 className="sec-title tj-split-text-1">حلول IT موثوقة لمستقبل أذكى.</h2>
                  <Link className="tj-primary-btn mt-20 d-md-inline-flex d-none" to="/service">
                    <span className="btn-text"><span>تعرف أكثر</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.3" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-computer"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">خدمات IT مُدارة</Link></h4>
                      <p className="desc">إدارة شاملة لتكنولوجيا المعلومات، بما في ذلك المراقبة والصيانة.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>مراقبة النظام 24/7</li>
                        <li><i className="tji-check-2"></i>دعم وحل مشاكل IT</li>
                        <li><i className="tji-check-2"></i>مساعدة عن بُعد في IT</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">01.</span>
                  <div className="service-btn">
                    <Link className="tj-text-btn" to="/service-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.5" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cloud"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">الحوسبة السحابية</Link></h4>
                      <p className="desc">خدمات سحابية قابلة للتوسع، تشمل النقل والتخزين والأمان.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>تخزين سحابي قابل للتوسع</li>
                        <li><i className="tji-check-2"></i>تكامل SaaS وPaaS وIaaS</li>
                        <li><i className="tji-check-2"></i>سحابة هجينة ومتعددة</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">02.</span>
                  <div className="service-btn">
                    <Link className="tj-text-btn" to="/service-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.1" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cybersecurity"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">حلول الأمن السيبراني</Link></h4>
                      <p className="desc">تدابير أمان متقدمة، تشمل حماية الجدار الناري واكتشاف التهديدات.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>الجدار الناري وأمان الشبكة</li>
                        <li><i className="tji-check-2"></i>كشف ومنع التهديدات</li>
                        <li><i className="tji-check-2"></i>حماية نقاط النهاية</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">03.</span>
                  <div className="service-btn">
                    <Link className="tj-text-btn" to="/service-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.3" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-consulting"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">استشارات واستراتيجية IT</Link></h4>
                      <p className="desc">إرشادات خبراء لتحسين بنية IT، تبسيط العمليات، وتعزيز الأداء.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>تخطيط التحول الرقمي</li>
                        <li><i className="tji-check-2"></i>تحسين البنية التحتية لتكنولوجيا المعلومات</li>
                        <li><i className="tji-check-2"></i>تقييم المخاطر</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">04.</span>
                  <div className="service-btn">
                    <Link className="tj-text-btn" to="/service-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.5" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-network"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">البنية التحتية للشبكات</Link></h4>
                      <p className="desc">إرشادات خبراء لتحسين بنية IT، تبسيط العمليات، وتعزيز الأداء.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>تخطيط التحول الرقمي</li>
                        <li><i className="tji-check-2"></i>تحسين البنية التحتية لتكنولوجيا المعلومات</li>
                        <li><i className="tji-check-2"></i>تقييم المخاطر</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">05.</span>
                  <div className="service-btn">
                    <Link className="tj-text-btn" to="/service-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>تعرف أكثر</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-none text-center mt-40">
              <Link className="tj-primary-btn" to="/service">
                <span className="btn-text"><span>تعرف أكثر</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </div>
        {/*  end: Service Section  */}

        {/*  start: Video Section  */}
        <div className="tj-video-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-content-area">
                  <div className="video-bg img-parallax">
                    <img src="/assets/images/bg/video-bg.webp" alt="Image" />
                  </div>
                  <div className="video-wrap">
                    <div className="btn-hover-wrapper">
                      <div className="btn-hover-inner">
                        <a className="video-btn circle-ripple video-popup" data-autoplay="true" data-vbtype="video"
                          data-maxwidth="1200px"
                          href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span className="video-icon"><i className="tji-play"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Video Section  */}

        {/*  start: Testimonial Section  */}
        <div className="tj-testimonial-section section-gap-x">
          <div className="marquee-area">
            <div className="scroll-slider">
              <div className="scroll-wrapper">
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
              </div>
              <div className="scroll-wrapper">
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>آراء العملاء</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-area gap-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="testimonial-wrapper tj-fade-anim">
                    <div className="swiper client-thumb thumb-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-1.webp" alt="صورة" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">مايفون لين</h4>
                            <span className="designation">مؤسس مشارك</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-2.webp" alt="صورة" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">رالف إدواردز</h4>
                            <span className="designation">مؤسس مشارك</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-3.webp" alt="صورة" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">جاي هوكينز</h4>
                            <span className="designation">مؤسس مشارك</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-navigation d-none d-md-inline-flex">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                    <div className="swiper testimonial-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                العمل مع تكمينو كان نقطة تحول لأعمالنا. احترافية فريقهم، والانتباه للتفاصيل، والحلول
                                المبتكرة ساعدتنا في تحسين العمليات وتحقيق أهدافنا أسرع مما تصورنا. نشعر حقًا بأننا
                                شركاء ذوو قيمة. النتائج التي رأيناها بعد شراكتنا معهم كانت رائعة.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                العمل مع تكمينو كان نقطة تحول لأعمالنا. احترافية فريقهم، والانتباه للتفاصيل، والحلول
                                المبتكرة ساعدتنا في تحسين العمليات وتحقيق أهدافنا أسرع مما تصورنا. نشعر حقًا بأننا
                                شركاء ذوو قيمة. النتائج التي رأيناها بعد شراكتنا معهم كانت رائعة.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                العمل مع تكمينو كان نقطة تحول لأعمالنا. احترافية فريقهم، والانتباه للتفاصيل، والحلول
                                المبتكرة ساعدتنا في تحسين العمليات وتحقيق أهدافنا أسرع مما تصورنا. نشعر حقًا بأننا
                                شركاء ذوو قيمة. النتائج التي رأيناها بعد شراكتنا معهم كانت رائعة.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination-area"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Testimonial Section  */}

        {/*  start: Team Section  */}
        <section className="tj-team-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ تعرف على فريقنا ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">العقول المبدعة وراء فريقنا</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">فرقنا مصممة لتلبية أفكارك الفريدة.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn d-none d-lg-inline-flex" to="/team">
                        <span className="btn-text"><span>المزيد من الأعضاء</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-1.webp" alt="صورة" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">إيد مارين</Link></h4>
                    <span className="designation">الرئيس التنفيذي</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-2.webp" alt="صورة" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">سافانا نغوين</Link></h4>
                    <span className="designation">رئيس العمليات</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-3.webp" alt="صورة" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">كاميرون ويليام</Link></h4>
                    <span className="designation">رئيس التسويق</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-4.webp" alt="صورة" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">أوليفيا فوكس</Link></h4>
                    <span className="designation">مديرة الأعمال</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <Link className="tj-primary-btn" to="/team">
                <span className="btn-text"><span>المزيد من الأعضاء</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Team Section  */}

        {/*  start: Technologies Section  */}
        <div className="tj-technologies-section section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ تقنياتنا ]</span>
                  <h2 className="sec-title tj-split-text-1">تكامل تكنولوجيا المعلومات بسلاسة لأعمالك</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="technologies-item-wrap">
                  <div className="scroll-slider">
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/gitlab.svg" alt="Gitlab" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">يدعم أكثر من مستودع واحد لمجموعة أو أكثر من القنوات.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/ovhcloud.svg" alt="OVHcloud" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH أو OVH Groupe SAS هي شركة فرنسية للحوسبة السحابية.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/chatgpt.svg" alt="ChatGPT" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">تقديم المساعدة في الإجابة على الأسئلة المتكررة.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/notion.svg" alt="Notion" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">يمكنك إنشاء مستندات نصية غنية مع تنسيقات قابلة للتخصيص وإضافة صور.</p>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/gitlab.svg" alt="Gitlab" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">يدعم أكثر من مستودع واحد لمجموعة أو أكثر من القنوات.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/ovhcloud.svg" alt="OVHcloud" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH أو OVH Groupe SAS هي شركة فرنسية للحوسبة السحابية.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/chatgpt.svg" alt="ChatGPT" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">تقديم المساعدة في الإجابة على الأسئلة المتكررة.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/notion.svg" alt="Notion" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">يمكنك إنشاء مستندات نصية غنية مع تنسيقات قابلة للتخصيص وإضافة صور.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-slider" dir="rtl">
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/zoom.svg" alt="Zoom" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">منصة مؤتمرات فيديو تُستخدم للاجتماعات الافتراضية.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/slack.svg" alt="Slack" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">تُستخدم القنوات في Slack لتنظيم التواصل حول المواضيع.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/clickup.svg" alt="Clickup" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp هي منصة إنتاجية لإدارة المهام.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/dropbox.svg" alt="Dropbox" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Dropbox</h5>
                          <p className="desc">Dropbox يوفر تخزينًا سحابيًا آمنًا للمستخدمين.</p>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/zoom.svg" alt="Zoom" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">منصة مؤتمرات فيديو تُستخدم للاجتماعات الافتراضية.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/slack.svg" alt="Slack" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">تُستخدم القنوات في Slack لتنظيم التواصل حول المواضيع.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/clickup.svg" alt="Clickup" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp هي منصة إنتاجية لإدارة المهام.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/dropbox.svg" alt="Dropbox" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Dropbox</h5>
                          <p className="desc">Dropbox يوفر تخزينًا سحابيًا آمنًا للمستخدمين.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Technologies Section  */}

        {/*  start: Project Section  */}
        <section className="tj-project-section section-gap section-gap-x fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ مشاريعنا الأخيرة ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">كسر الحدود وبناء الأحلام.</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">مشاريعنا مُصممة لتلبية احتياجات عملك الفريدة.</p>
                    </div>
                    <div className="slider-navigation d-none d-md-inline-flex tj-fade-anim" data-delay="0.3">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                <div className="project-wrapper tj-fade-anim" data-delay="0.2">
                  <div className="swiper project-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-1.webp" alt="تحويل الأعمال" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><Link to="/project-details">حلول</Link></span>
                              <h4 className="title"><Link to="/project-details">تحويل الأعمال</Link></h4>
                            </div>
                            <Link className="tj-icon-btn" to="/project-details">
                              <i className="tji-arrow-right-3"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-2.webp" alt="نجاح الهجرة السحابية" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><Link to="/project-details">حلول</Link></span>
                              <h4 className="title"><Link to="/project-details">نجاح الهجرة السحابية</Link></h4>
                            </div>
                            <Link className="tj-icon-btn" to="/project-details">
                              <i className="tji-arrow-right-3"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-3.webp" alt="استراتيجية النمو الرقمي" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><Link to="/project-details">حلول</Link></span>
                              <h4 className="title"><Link to="/project-details">استراتيجية النمو الرقمي</Link></h4>
                            </div>
                            <Link className="tj-icon-btn" to="/project-details">
                              <i className="tji-arrow-right-3"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-4.webp" alt="تطوير تطبيقات الجوال" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><Link to="/project-details">حلول</Link></span>
                              <h4 className="title"><Link to="/project-details">تطوير تطبيقات الجوال</Link></h4>
                            </div>
                            <Link className="tj-icon-btn" to="/project-details">
                              <i className="tji-arrow-right-3"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination-area"></div>
                  </div>
                  <div className="d-md-none text-center mt-30">
                    <div className="slider-navigation d-inline-flex">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Project Section  */}

        {/*  start: Working Process Section  */}
        <section className="tj-working-process-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ عملية العمل لدينا ]</span>
                  <h2 className="sec-title tj-split-text-1">حوّل عملك في 3 خطوات بسيطة.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="process-area">
            <div className="process-border tj-fade-anim" data-delay="1" data-direction="left"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="process-wrap tj-slide-wrap">
                    <div className="process-item tj-slide-left">
                      <span className="process-step">01.</span>
                      <div className="process-content">
                        <h4 className="title">اكتشاف<br /> عميق وتخطيط</h4>
                        <p className="desc">كل حل ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك. كل حل
                          ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك.</p>
                      </div>
                    </div>
                    <div className="process-item tj-slide-left">
                      <span className="process-step">02.</span>
                      <div className="process-content">
                        <h4 className="title">التطوير <br />والتنفيذ</h4>
                        <p className="desc">كل حل ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك. كل حل
                          ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك.</p>
                      </div>
                    </div>
                    <div className="process-item tj-slide-left">
                      <span className="process-step">03.</span>
                      <div className="process-content">
                        <h4 className="title">التحسين <br />والدعم</h4>
                        <p className="desc">كل حل ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك. كل حل
                          ناجح يبدأ بالفهم. نحن نأخذ الوقت لنتعرف على عملك، تحدياتك، وأهدافك.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Working Process Section  */}

        {/*  start: Contact Section  */}
        <section className="tj-contact-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="/assets/images/bg/common-bg-2.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ تواصل معنا ]</span>
                    <h2 className="sec-title tj-split-text-1">هل لديك أي أسئلة؟ تواصل معنا للحصول على خبراء السوق.</h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn mt-25 d-none d-lg-inline-flex" to="/contact">
                        <span className="btn-text"><span>تواصل معنا الآن</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                  <div className="contact-info tj-fade-anim" data-delay="0.3" data-direction="bottom">
                    <div className="contact-item">
                      <h6 className="title">معلومات الاتصال:</h6>
                      <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                      <a className="contact-link" href="mailto:support@tekmino.com">support@tekmino.com</a>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">موقعنا:</h6>
                      <span className="contact-link">Renner Burg, West Rond, MT 9421-030, الولايات المتحدة الأمريكية.</span>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">ساعات العمل:</h6>
                      <span className="contact-link">الإثنين - الجمعة <span>(مفتوح)</span></span>
                      <span className="contact-link">09:00 صباحًا - 06:00 مساءً</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="contact-form style-2 tj-fade-anim" data-delay="0.3" data-direction="right">
                  <h3 className="title">أرسل لنا <span>رسالة.</span></h3>
                  <form id="contact-form-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">الاسم الكامل <span>*</span></label>
                          <input type="text" name="cfName2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">البريد الإلكتروني <span>*</span></label>
                          <input type="email" name="cfEmail2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">رقم الهاتف <span>*</span></label>
                          <input type="text" name="cfPhone2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">اختر الخدمة <span>*</span></label>
                          <div className="tj-nice-select-box">
                            <div className="tj-select">
                              <select name="cfSubject2">
                                <option value="1">خدمات تكنولوجيا المعلومات المدارة</option>
                                <option value="2">الحوسبة السحابية</option>
                                <option value="3">حلول الأمن السيبراني</option>
                                <option value="4">استشارات واستراتيجية تكنولوجيا المعلومات</option>
                                <option value="5">تطوير البرمجيات</option>
                                <option value="6">البنية التحتية للشبكات</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-input message-input">
                          <label className="cf-label">اكتب رسالتك</label>
                          <textarea name="cfMessage2" id="message"></textarea>
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>إرسال الرسالة</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-3"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Contact Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ رؤى وابتكارات ]</span>
                  <h2 className="sec-title tj-split-text-1">استكشف أحدث الرؤى والابتكارات.</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.1">
                  <div className="blog-thumb img-reveal-2">
                    <Link to="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="صورة المقال" /></Link>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">فبراير</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><Link to="/blog-details">حلول</Link></span>
                      <span>بواسطة <Link to="/blog-details">إلينين لوما</Link></span>
                    </div>
                    <h4 className="title"><Link to="/blog-details">كيفية نقل عملك بنجاح إلى السحابة</Link></h4>
                    <Link className="tj-text-btn" to="/blog-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>اقرأ المزيد</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.2">
                  <div className="blog-thumb img-reveal-2">
                    <Link to="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="صورة المقال" /></Link>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">فبراير</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><Link to="/blog-details">تركيز</Link></span>
                      <span>بواسطة <Link to="/blog-details">إلينين لوما</Link></span>
                    </div>
                    <h4 className="title"><Link to="/blog-details">بناء قوة عاملة أقوى من خلال التدريب على تكنولوجيا
                        المعلومات</Link></h4>
                    <Link className="tj-text-btn" to="/blog-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>اقرأ المزيد</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.3">
                  <div className="blog-thumb img-reveal-2">
                    <Link to="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="صورة المقال" /></Link>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">فبراير</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><Link to="/blog-details">البرمجيات</Link></span>
                      <span>بواسطة <Link to="/blog-details">إلينين لوما</Link></span>
                    </div>
                    <h4 className="title"><Link to="/blog-details">تحسين ميزانية تكنولوجيا المعلومات: نصائح
                        واستراتيجيات</Link></h4>
                    <Link className="tj-text-btn" to="/blog-details">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>اقرأ المزيد</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}

        {/*  start: Cta Section  */}
        <section className="tj-cta-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area tj-fade-anim">
                  <div className="cta-content">
                    <h2 className="title">لا تفوّت مستقبل التكنولوجيا!</h2>
                  </div>
                  <div className="cta-right">
                    <div className="subscribe-form cta-form">
                      <form action="#">
                        <input type="email" name="email" placeholder="أدخل بريدك الإلكتروني هنا..." />
                        <button className="tj-primary-btn style-2" type="submit">
                          <span className="btn-text"><span>اشترك الآن</span></span>
                          <span className="btn-icon"><i className="tji-bell"></i></span>
                        </button>
                      </form>
                    </div>
                    <div className="social-links cta-social">
                      <span className="title">تابعنا على:</span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Cta Section  */}
      
    </>
  );
}
