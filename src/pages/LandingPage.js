import React, { useState, useEffect } from "react";
import "../css/container.scss";
import "../css/landing-page.scss";
import drawbar_btn from "../images/draw-btn.png";
import arrow_img_wh from "../images/down-arrow-img-wh.png";
import arrow_img from "../images/down-arrow-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import main_img from "../images/main-bg-img.png";
import text_logo from "../images/text-logo.png";
import dic_img from "../images/main-dic-img.png";

const LandingPage = () => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeListener);
  });
  console.log("innerHeight : " + innerHeight);
  console.log("innerHeight-30 : " + innerHeight - 30);
  console.log("innerHeight : " + innerHeight * 4);

  return (
    <div className="background">
      <div className="container">
        <div className="top-bar-container">
          <div className="title-container">
            <img src={text_logo} alt="logo" className="text-logo" />
          </div>
          <div className="draw-btn-container">
            <img src={drawbar_btn} alt="drawer btn" className="drawbar-btn" />
          </div>
        </div>
        <div className="landing-content-container">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            navigation={true}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Mousewheel, Pagination, Navigation]}
            className="mySwiper"
            height={innerHeight}
          >
            <SwiperSlide>
              <div className="slide1">
                <img src={main_img} alt="메인이미지" className="main-img" />
                <div className="subtitle-container">
                  <h1 id="subtitle">디지털 격차{"\n"}해소 프로젝트, 다가감</h1>
                </div>

                <h3>
                  청년층과 고령층 모두가 {"\n"}이해할 수 있는 용어를 사용해{" "}
                  {"\n"}
                  서로 다가가요
                </h3>
                <div className="arrow-container">
                  <img src={arrow_img_wh} alt="아래로" className="arrow-img" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide2">
                <h1>디지털 격차란?</h1>
                <div className="text-box">
                  <p>
                    디지털이 보편화되면서 이를 제대로 활용하는 {"\n"}계층은
                    지식이 늘어나고 소득도 증가하는 반면,{"\n"}디지털을 이용하지
                    못하는 사람들은 발전하지{"\n"}못해 양 계층 간 격차가 커지는
                    것을 말합니다.{"\n"}
                    {"\n"}
                    이러한 디지털 격차는 단순히 격차에서 끝나지 {"\n"}
                    않고,인식과 생각, 문화 등 사회적 격차로 {"\n"}확대되어 소외
                    현상을 일으킬 수 있습니다.
                  </p>
                </div>
                <div className="arrow-container">
                  <img src={arrow_img} alt="아래로" className="arrow-img" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide3">
                <p className="third-text">
                  기술이 발전함에 따라 새로운 기술 용어와 줄임말, 신조어가 매일
                  넘쳐나는데 고령층은 이런 용어들을 빠르게 흡수하기 어렵습니다.
                </p>
                <div className="arrow-container">
                  <img src={arrow_img_wh} alt="아래로" className="arrow-img" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide4">
                <p className="forth-text1">
                  이들을 위해 디지털 용어와 신조어, 줄임말의 뜻을{"\n"}풀이하는
                  오픈 사전을 만들고 있습니다.
                  {"\n"}
                  {"\n"}
                  고령층의 사회적 소외감에 공감하고{"\n"}
                  디지털 격차를 해소하는 데{"\n"}
                  동참해주시겠어요?
                </p>
                <div className="landing-info-container">
                  <p className="forth-text2">
                    참여해주신 사전은 팝업 사전 어플을 다운받아 사용할 수
                    있습니다.
                  </p>

                  <img src={dic_img} alt="사전참여이미지" className="dic-img" />
                </div>
                <button className="go-btn" title="사전 참여하기">
                  사전 참여하기
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
