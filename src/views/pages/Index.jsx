import React, { Component } from "react";
import "../../assets/css/home.css";
import SearchIcon from "../../assets/svg/search-icon.svg";
import ShoeWithChart from "../../assets/img/shoe-with-chart.png";
import BigTriangle from "../../assets/img/home-triangle-bg.png";
import $ from "jquery";

import KayanData from "../components/KayanData";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      mostSearchedItems: null,
      airJordan:null,
     
    };
    this.slide = this.slide.bind(this);
    this.handleArama = this.handleArama.bind(this);
  }

  componentDidMount() {

    

  }

  slide(w, to) {
    if (to == "right") {
      var now = $(w).scrollLeft()
      $(w).scrollLeft((now + window.innerWidth) - 70)
    } else {
    
      var now = $(w).scrollLeft() - window.innerWidth;
      $(w).scrollLeft(now);
    }
  }

  handleArama() {}
  render() {
    return (
      <div className="container-fluid index overflow-hidden">


<div className="marquee-wrapper ">
	<div className="container31">
		<div className="marquee-block" style={{width:`calc(120px * 15)`}}>
			<div className="marquee-inner to-left">
				<span>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
				</span>
				<span>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
            <KayanData arrow="down" price="1.234" title="Weekly"/>
            <KayanData arrow="up"  price="3.434" title="Monthly"/>
            <KayanData arrow="down"  price="2.422" title="Daily"/>
            <KayanData arrow="up"  price="7.242" title="Monthly"/>
            <KayanData arrow="down"  price="1.234" title="Daily"/>
				</span>
			</div>
		</div>            
		</div>
</div>

    
        <div className="home-hero">
          <img src={BigTriangle} alt="" />

          <div className="left">
            <h1>
              HYPE <span>AND</span>
              <br />
              LIMITED
            </h1>
            <p>Turkey's first sneaker stock market</p>
            <form onSubmit={this.handleArama}>
              <div className="search-input-wrapper">
                <input type="text" placeholder="Enter your email" />
                <div className="exclu">BECOME EXCLUSIVE MEMBER</div>
              </div>
              <div className="button-wrapper">
                <a to="/store"><button>Buy</button></a>
                <p>{"&"}</p>
                <a to="/be-seller"><button>Sell</button></a>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={ShoeWithChart} alt="" />
          </div>
        </div>

       
        <div className="coming-soon">
            <div className="coming-soon__title">Official Launch:</div>


        <div className="yuvarlak-container">
            <div className="yuvarlak">
            <svg  viewBox="0 0 112 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="54.7214" cy="55.2517" r="53.2214" stroke="#ADADAD" stroke-opacity="0.25" stroke-width="3"/>
<mask id="path-2-inside-1" fill="white">
<path d="M103.467 33.3542C104.733 32.7385 106.265 33.264 106.821 34.5577C110.143 42.2873 111.642 50.6903 111.187 59.1141C110.687 68.3877 107.834 77.3813 102.898 85.2481C97.9618 93.1148 91.1048 99.5959 82.9725 104.081C75.5854 108.155 67.3668 110.46 58.9619 110.832C57.5551 110.894 56.4157 109.744 56.4191 108.335C56.4225 106.927 57.5676 105.795 58.9741 105.726C66.5131 105.357 73.8807 103.272 80.5098 99.6157C87.8843 95.5486 94.1024 89.6715 98.5785 82.5378C103.055 75.4041 105.641 67.2486 106.096 58.8391C106.504 51.2797 105.176 43.7386 102.229 36.7897C101.679 35.4933 102.201 33.9698 103.467 33.3542Z"/>
</mask>
<path d="M103.467 33.3542C104.733 32.7385 106.265 33.264 106.821 34.5577C110.143 42.2873 111.642 50.6903 111.187 59.1141C110.687 68.3877 107.834 77.3813 102.898 85.2481C97.9618 93.1148 91.1048 99.5959 82.9725 104.081C75.5854 108.155 67.3668 110.46 58.9619 110.832C57.5551 110.894 56.4157 109.744 56.4191 108.335C56.4225 106.927 57.5676 105.795 58.9741 105.726C66.5131 105.357 73.8807 103.272 80.5098 99.6157C87.8843 95.5486 94.1024 89.6715 98.5785 82.5378C103.055 75.4041 105.641 67.2486 106.096 58.8391C106.504 51.2797 105.176 43.7386 102.229 36.7897C101.679 35.4933 102.201 33.9698 103.467 33.3542Z" fill="#7AF0D1" stroke="#7AF0D1" stroke-width="4" mask="url(#path-2-inside-1)"/>
<circle cx="104.883" cy="37.0112" r="5.47214" fill="#48A594"/>
</svg>


<div className="yuvarlak__time">24</div>
<div className="yuvarlak__day">Days</div>

            </div>
            <div className="yuvarlak">
            <svg  viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="54.9328" cy="55.9876" r="53.2214" transform="rotate(-90 54.9328 55.9876)" stroke="#ADADAD" stroke-opacity="0.25" stroke-width="3"/>
<mask id="path-3-inside-1" fill="white">
<path d="M33.0353 8.15415C32.4197 6.88772 32.9451 5.35613 34.2388 4.80013C41.9684 1.47826 50.3714 -0.0211737 58.7952 0.433652C68.0688 0.934361 77.0625 3.78707 84.9292 8.72316C92.796 13.6592 99.277 20.5163 103.762 28.6486C107.836 36.0357 110.142 44.2542 110.513 52.6592C110.575 54.066 109.425 55.2054 108.017 55.202C106.608 55.1985 105.476 54.0535 105.408 52.647C105.038 45.108 102.953 37.7404 99.2968 31.1113C95.2297 23.7368 89.3526 17.5187 82.2189 13.0426C75.0852 8.5665 66.9297 5.97963 58.5203 5.52559C50.9608 5.11743 43.4198 6.4448 36.4708 9.39186C35.1744 9.94166 33.6509 9.42058 33.0353 8.15415Z"/>
</mask>
<path d="M33.0353 8.15415C32.4197 6.88772 32.9451 5.35613 34.2388 4.80013C41.9684 1.47826 50.3714 -0.0211737 58.7952 0.433652C68.0688 0.934361 77.0625 3.78707 84.9292 8.72316C92.796 13.6592 99.277 20.5163 103.762 28.6486C107.836 36.0357 110.142 44.2542 110.513 52.6592C110.575 54.066 109.425 55.2054 108.017 55.202C106.608 55.1985 105.476 54.0535 105.408 52.647C105.038 45.108 102.953 37.7404 99.2968 31.1113C95.2297 23.7368 89.3526 17.5187 82.2189 13.0426C75.0852 8.5665 66.9297 5.97963 58.5203 5.52559C50.9608 5.11743 43.4198 6.4448 36.4708 9.39186C35.1744 9.94166 33.6509 9.42058 33.0353 8.15415Z" fill="#7AF0D1" stroke="#7AF0D1" stroke-width="4" mask="url(#path-3-inside-1)"/>
<circle cx="33.9563" cy="7.64993" r="5.47214" transform="rotate(-90 33.9563 7.64993)" fill="#48A594"/>
</svg>


<div className="yuvarlak__time">24</div>
<div className="yuvarlak__day">Days</div>

            </div>
            <div className="yuvarlak">
            <svg  viewBox="0 0 110 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="54.8363" cy="54.7508" r="53.2214" transform="rotate(60 54.8363 54.7508)" stroke="#ADADAD" stroke-opacity="0.25" stroke-width="3"/>
<mask id="path-4-inside-1" fill="white">
<path d="M97.9616 85.8941C99.128 86.6831 99.4387 88.2722 98.5963 89.4006C93.5632 96.1422 87.0357 101.642 79.5131 105.46C71.2315 109.663 62.0165 111.69 52.7356 111.348C43.4548 111.007 34.4135 108.309 26.4631 103.509C19.2414 99.1484 13.1356 93.1837 8.6114 86.0905C7.85418 84.9033 8.28084 83.3413 9.50203 82.6402C10.7232 81.939 12.276 82.3648 13.0389 83.5483C17.1284 89.8927 22.6181 95.2305 29.0988 99.1434C36.3083 103.496 44.5071 105.943 52.9231 106.252C61.3391 106.562 69.6954 104.725 77.2052 100.913C83.956 97.4868 89.823 92.5667 94.3675 86.54C95.2153 85.4157 96.7952 85.1052 97.9616 85.8941Z"/>
</mask>
<path d="M97.9616 85.8941C99.128 86.6831 99.4387 88.2722 98.5963 89.4006C93.5632 96.1422 87.0357 101.642 79.5131 105.46C71.2315 109.663 62.0165 111.69 52.7356 111.348C43.4548 111.007 34.4135 108.309 26.4631 103.509C19.2414 99.1484 13.1356 93.1837 8.6114 86.0905C7.85418 84.9033 8.28084 83.3413 9.50203 82.6402C10.7232 81.939 12.276 82.3648 13.0389 83.5483C17.1284 89.8927 22.6181 95.2305 29.0988 99.1434C36.3083 103.496 44.5071 105.943 52.9231 106.252C61.3391 106.562 69.6954 104.725 77.2052 100.913C83.956 97.4868 89.823 92.5667 94.3675 86.54C95.2153 85.4157 96.7952 85.1052 97.9616 85.8941Z" fill="#7AF0D1" stroke="#7AF0D1" stroke-width="4" mask="url(#path-4-inside-1)"/>
<circle cx="95.2578" cy="89.8608" r="5.47214" transform="rotate(60 95.2578 89.8608)" fill="#48A594"/>
</svg>


<div className="yuvarlak__time">24</div>
<div className="yuvarlak__day">Days</div>

            </div>

            <div className="yuvarlak">
            <svg width="111" height="112" viewBox="0 0 111 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55.8363" cy="54.7508" r="53.2214" transform="rotate(60 55.8363 54.7508)" stroke="#ADADAD" stroke-opacity="0.25" stroke-width="3"/>
<mask id="path-5-inside-1" fill="white">
<path d="M77.928 103.886C78.5266 105.16 77.9808 106.685 76.6797 107.224C68.9064 110.442 60.4841 111.829 52.0672 111.262C42.8011 110.637 33.8464 107.664 26.0463 102.624C18.2462 97.5828 11.8573 90.6398 7.48134 82.4482C3.50636 75.0074 1.31101 66.7588 1.0519 58.3496C1.00854 56.9421 2.17415 55.8182 3.58212 55.8404C4.99009 55.8626 6.10661 57.0228 6.15672 58.43C6.42532 65.9733 8.41199 73.3681 11.9791 80.0455C15.9473 87.4737 21.7408 93.7697 28.8141 98.3407C35.8873 102.912 44.0075 105.607 52.4102 106.174C59.9635 106.683 67.5216 105.456 74.5093 102.602C75.8129 102.07 77.3293 102.611 77.928 103.886Z"/>
</mask>
<path d="M77.928 103.886C78.5266 105.16 77.9808 106.685 76.6797 107.224C68.9064 110.442 60.4841 111.829 52.0672 111.262C42.8011 110.637 33.8464 107.664 26.0463 102.624C18.2462 97.5828 11.8573 90.6398 7.48134 82.4482C3.50636 75.0074 1.31101 66.7588 1.0519 58.3496C1.00854 56.9421 2.17415 55.8182 3.58212 55.8404C4.99009 55.8626 6.10661 57.0228 6.15672 58.43C6.42532 65.9733 8.41199 73.3681 11.9791 80.0455C15.9473 87.4737 21.7408 93.7697 28.8141 98.3407C35.8873 102.912 44.0075 105.607 52.4102 106.174C59.9635 106.683 67.5216 105.456 74.5093 102.602C75.8129 102.07 77.3293 102.611 77.928 103.886Z" fill="#7AF0D1" stroke="#7AF0D1" stroke-width="4" mask="url(#path-5-inside-1)"/>
<circle cx="73.5758" cy="105.911" r="5.47214" transform="rotate(90.7656 73.5758 105.911)" fill="#48A594"/>
</svg>





<div className="yuvarlak__time">24</div>
<div className="yuvarlak__day">Days</div>

            </div>
            
            </div>

        </div>


      

      </div>
    );
  }
}
