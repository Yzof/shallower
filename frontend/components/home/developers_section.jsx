import React from 'react';

class DeveloperSection extends React.Component {
  render() {
    return (
      <section className="grid-items-2 max-width p-t-200 p-b-40">

              <div className="t-center" >
                  <div className="inline m-b-70 t-left">
                      <div className="line1 bg3 m-l-20- cu-tweenmax"
                          data-a-init="x:300, alpha:0, scaleX:1"
                          data-a-to="x:300, alpha:0.5, scaleX:50, ease:Expo.easeIn, duration:0.6"
                          data-a-to-2="x:0, alpha:1, scaleX:1, ease:Expo.easeOut, duration:1"
                      ></div>
                      <h2 className="color2 f-medium cu-tweenmax l-s-3"
                          data-a-init="alpha:0"
                          data-a-to="alpha:1, duration:0.9, delay:0.6, ease:Cubic.easeOut"
                      >Testimonials</h2>
                  </div>
              </div>

          <div className="list inline-wrap now nowrap m-t-70-"
              data-flickity='{ "initialIndex": 0, "contain": true, "autoPlay":false, "prevNextButtons":false, "control":false, "pageDots":true, "wrapAround": false }'
          >
              <div className="item inline-element p-t-125 p-x-40" >
                  <div className="content box-shadow7">
                      <div className="image bg-cover" style={{backgroundImage:"url(../../app/assets/images/testimonio1.jpg)"}}></div>
                      <p className="t-18 f-bold wrap">David Morgan | <span className="f-light italic">Designer at Adobe</span></p>
                      <p className="text wrap">Beautiful, complaint, fluid, usable and versatile theme, couldn't be happier and relax using Byond theme.</p>
                  </div>
              </div>
              <div className="item inline-element p-t-125 p-x-40" >
                  <div className="content box-shadow7">
                      <div className="image bg-cover" style={{backgroundImage:"url(../../app/assets/images/testimonio2.jpg)"}}></div>
                      <p className="t-18 f-bold wrap">Robert Marlow | <span className="f-light italic">Developer at Google</span></p>
                      <p className="text wrap">WOW this is crazy, is insane have this high-quality Website on my hands at an affordable price, completely worth it, now my business looks like a huge company with this sleek User interface.</p>
                  </div>
              </div>
              <div className="item inline-element p-t-125 p-x-40" >
                  <div className="content box-shadow7">
                      <div className="image bg-cover" style={{backgroundImage:"url(../../app/assets/images/testimonio1.jpg)"}}></div>
                      <p className="t-18 f-bold wrap">David Morgan | <span className="f-light italic">Designer at Adobe</span></p>
                      <p className="text wrap">Beautiful, complaint, fluid, usable and versatile theme, couldn't be happier and relax using Byond theme.</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default DeveloperSection;
