// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";

// class HomeFooter extends Component {
//   render() {
//     return (
//       <div className="home-footer">
//         <p>
//           &copy; <FormattedMessage id="Mọi thắc mắc xin liên hệ Trí Nguyễn" />
//           <a
//             target="blank"
//             href="https://www.facebook.com/MinhTringuyenkma"
//           >
//             &#8594;<FormattedMessage id="click-here" /> &#8592;
//           </a>
//         </p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.user.isLoggedIn,
//     language: state.app.language,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);


import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Row, Col, Button } from "reactstrap";
import './HomeFooter.scss';


class HomeFooter extends Component {
  render() {
    const { isLoggedIn, language } = this.props;

    return (
      <div className="home-footer">
        {/* <div className="footer-container">
          <div  className="footer-item">
            <div>Công ty Cổ phần Công nghệ BookingCare</div>
            <div>
            Chúng tôi là đơn vị BookingCare hàng đầu, chuyên cung cấp dịch vụ đặt lịch khám bệnh tại
             các bệnh viện uy tín, giúp bạn dễ dàng lựa chọn bác sĩ, phòng khám và thời gian phù hợp. 
             Với hệ thống quản lý lịch khám thông minh và tiện lợi, chúng tôi cam kết mang đến trải 
             nghiệm y tế nhanh chóng, hiệu quả và an toàn.
            </div>
            <div className="social-media">
            <img className="iconLogo" src={require("../../assets/facebook-icon.svg").default} alt="Facebook Icon" />
            <img className="iconLogo" src={require("../../assets/twitter-icon.svg").default} alt="Twitter Icon" />
            <img className="iconLogo" src={require("../../assets/instagram-icon.svg").default} alt="Instagram Icon" />
            <img className="iconLogo" src={require("../../assets/linkedin-icon.svg").default} alt="LinkedIn Icon" />
            <img className="iconLogo" src={require("../../assets/pinterest-icon.svg").default} alt="Pinterest Icon" />

            </div>
          </div>

          <div className="footer-item">
            <div>VỀ BOOKING CARE</div>
            <ul className="footer-links">
              <li>Giới thiệu</li>
              <li>Dịch vụ</li>
              <li>Dự án</li>
              <li>Kinh nghiệm khám bệnh</li>
            </ul>
            <img src={require("../../assets/bo-cong-thuong.png").default} alt="congthuong Icon" />  
          </div>

          <div  className="footer-item">
            <div className="contact-info">
            <img src={require("../../assets/logo.svg").default} alt="logo Icon" />
              <div>
              VP Hà Nội: 110 Trần Duy Hưng, Cầu Giấy, Hà Nội
              </div>
              <div>
                 VP Hồ Chí Minh: 30 Lê Trung Nghĩa, Phường 12, Tân Bình
              </div>
              <div>
                Hotline: 0836 999 088 - 0836 888 099
              </div>
              <div>
               Email: tritb30@gmail.com
              </div>
            </div>
          </div>
        </div> */}

        <p>
          &copy; <FormattedMessage id="Mọi thắc mắc xin liên hệ Trí Nguyễn" />
          <a target="blank" href="https://www.facebook.com/MinhTringuyenkma">
            &#8594;<FormattedMessage id="click-here" /> &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(HomeFooter);
