import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" title="About" href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              role="img"
              aria-hidden="true"
              focusable="false"
              className="icon"
              alt="rocket"
            >
              <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
            </svg>
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" title="Skills" href="#skills">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              role="img"
              aria-hidden="true"
              focusable="false"
              className="icon"
              alt="Star Wars"
            >
              <path d="M535.95308,352c-42.64069,94.17188-137.64086,160-247.9848,160q-6.39844,0-12.84377-.29688C171.15558,506.9375,81.26481,442.23438,40.01474,352H79.93668L21.3272,293.40625a264.82522,264.82522,0,0,1-5.10938-39.42187,273.6653,273.6653,0,0,1,.5-29.98438H63.93665L22.546,182.625A269.79782,269.79782,0,0,1,130.51489,20.54688a16.06393,16.06393,0,0,1,9.28127-3,16.36332,16.36332,0,0,1,13.5,7.25,16.02739,16.02739,0,0,1,1.625,15.09374,138.387,138.387,0,0,0-9.84376,51.26563c0,45.10937,21.04691,86.57813,57.71884,113.73437a16.29989,16.29989,0,0,1,1.20313,25.39063c-26.54692,23.98437-41.17194,56.5-41.17194,91.57813,0,60.03124,42.95319,110.28124,99.89079,121.92187l2.5-65.26563L238.062,397a8.33911,8.33911,0,0,1-10-.75,8.025,8.025,0,0,1-1.39063-9.9375l20.125-33.76562-42.06257-8.73438a7.9898,7.9898,0,0,1,0-15.65625l42.06257-8.71875-20.10941-33.73438a7.99122,7.99122,0,0,1,11.35939-10.71874L268.437,295.64062,279.95265,7.67188a7.97138,7.97138,0,0,1,8-7.67188h.04687a8.02064,8.02064,0,0,1,7.95314,7.70312L307.48394,295.625l30.39068-20.67188a8.08327,8.08327,0,0,1,10,.8125,7.99866,7.99866,0,0,1,1.39062,9.90626L329.12461,319.4375l42.07819,8.73438a7.99373,7.99373,0,0,1,0,15.65624l-42.07819,8.71876,20.1094,33.73437a7.97791,7.97791,0,0,1-1.32812,9.92187A8.25739,8.25739,0,0,1,337.87462,397L310.7027,378.53125l2.5,65.34375c48.48446-9.40625,87.57828-48.15625,97.31267-96.5A123.52652,123.52652,0,0,0,371.9528,230.29688a16.30634,16.30634,0,0,1,1.20313-25.42188c36.65631-27.17188,57.6876-68.60938,57.6876-113.73438a138.01689,138.01689,0,0,0-9.85939-51.3125,15.98132,15.98132,0,0,1,1.60937-15.09374,16.36914,16.36914,0,0,1,13.5-7.23438,16.02453,16.02453,0,0,1,9.25,2.98438A271.26947,271.26947,0,0,1,553.25,182.76562L511.99992,224h46.9532C559.3125,229.76562,560,235.45312,560,241.26562a270.092,270.092,0,0,1-5.125,51.85938L495.98427,352Z" />
            </svg>
            <span className="link-text">Skills</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" title="Portfolio" href="#portfolio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              role="img"
              aria-hidden="true"
              focusable="false"
              className="icon"
              alt="Robot"
            >
              <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
            </svg>
            <span className="link-text">Portfolio</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" title="Contact" href="#contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              role="img"
              aria-hidden="true"
              focusable="false"
              className="icon"
              alt="Astronaut"
            >
              <path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z" />
            </svg>
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
