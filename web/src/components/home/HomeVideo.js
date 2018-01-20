import React from 'react';

export default class HomeVideo extends React.Component {
  render() {
    return (
      <div>
        <div id="rs-video-mobile-container" className="embed-responsive embed-responsive-16by9" style={{display: 'none'}}>
        {/* Place for Video */}
        </div>
        <section className="video" id="video-message-container">
        {/*<div class="container text-center visible-xs">
                <h3>Why buy rental property on Roofstock?</h3>
                <a href="javascript:void()" onclick="playVideo();">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/play-icon.svg" alt="">
                </a>
            </div>*/}
        {/*<div class="container text-center hidden-xs">
                <h3>Why buy rental property on Roofstock?</h3>*/}
        {/*<a href="#" class="launch-modal" data-modal-id="modalVideo">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/play-icon.svg" alt="">
                </a>*/}
        {/* </div> */}
        </section>
      </div>
    )
  }
}
