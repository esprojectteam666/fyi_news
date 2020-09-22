import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle text-center">
        <div className="container ">
          <div className="row">
            {/*Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4> Contributer</h4>
              <ul className="list-unstyled">
                <li> Ethan Xin</li>
                <li> Sean Zhang</li>
              </ul>
            </div>

            {/*Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4> Github</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/"> link1</a>
                </li>
                <li>
                  <a href="/"> link2</a>
                </li>
              </ul>
            </div>

            {/*Column 3 */}
            <div className="col-md-3 col-sm-6 ">
              <h4> Email</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/"> link1</a>
                </li>
                <li>
                  <a href="/"> link3</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottem */}
          <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} FYI News App - All Rights Reserved
          </p>
          </div>

        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 2rem;
    color: var(--mainWhite);
    align-items: center
  }
  .footer-bottom {
    background: var(--mainDark);
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
