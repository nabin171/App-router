// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       this one is product
//     </div>
//   )
// }

// export default page
<div>  {content.whyDaTitle ? (
          <div className="container pt-110">
            <div className="dlytica_video row">
              <div className="col-md-12">
                <div
                  className="section_title text_left mb-30 mt-3 wow fadeInDown"
                  data-wow-delay=".3"
                >
                  <div className="section_main_title upper">
                    <h1>{content.whyDaTitle}</h1>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: content.whyDaDescription }}
                ></div>
              </div>

              {/* <div className="col-md-6">
                <div
                  className="video_class"
                  dangerouslySetInnerHTML={{ __html: content.whyDaVideo }}
                ></div>
              </div> */}
            </div>
          </div>
        ) : (
          ""
        )}</div>