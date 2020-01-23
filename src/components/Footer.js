import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='inner'>
        <div className='content'>
          <section>
            <h3>Accumsan montes viverra</h3>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
              dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
              faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
              gravida.
            </p>
          </section>
          <section>
            <h4>Sem turpis amet semper</h4>
            <ul className='alt'>
              <li>
                <a href='#'>Dolor pulvinar sed etiam.</a>
              </li>
              <li>
                <a href='#'>Etiam vel lorem sed amet.</a>
              </li>
              <li>
                <a href='#'>Felis enim feugiat viverra.</a>
              </li>
              <li>
                <a href='#'>Dolor pulvinar magna etiam.</a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Magna sed ipsum</h4>
            <ul className='plain'>
              <li>
                <a href='#'>
                  <i className='icon fa-twitter'>&nbsp;</i>Twitter
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='icon fa-facebook'>&nbsp;</i>Facebook
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='icon fa-instagram'>&nbsp;</i>Instagram
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='icon fa-github'>&nbsp;</i>Github
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='copyright'>&copy;{year} Autorejestr</div>
        <div className='copyright'>
          <a
            href='https://sarpisik.com'
            className='smooth-bottom'
            title='Web Developer'>
            Made By SARP IŞIK
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
