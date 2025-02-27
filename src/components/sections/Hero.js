import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { KEYS } from '../../i18n'
import { useIntl } from 'react-intl'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const intl = useIntl();
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              {intl.formatMessage({ id: KEYS.HOME_TITLE1 })}<span className="text-color-success">{intl.formatMessage({ id: KEYS.HOME_TITLE2 })}</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                {intl.formatMessage({ id: KEYS.HOME_SUBTITLE })}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <h2>{intl.formatMessage({ id: KEYS.PRESALES_STARTED })}</h2>
                <ButtonGroup>
                  <Button tag="a" color="success" wideMobile href="https://presale.instruaud.com/bsc" target="_blank">
                    {intl.formatMessage({ id: KEYS.COMPRAR_BSC })} <i style={{ fontSize: "10px" }}></i>
                  </Button>
                  <Button tag="a" color="success" wideMobile href="https://presale.instruaud.com/eth" target="_blank">
                    {intl.formatMessage({ id: KEYS.COMPRAR_ETH })} <i style={{ fontSize: "10px" }}></i>
                  </Button>

                </ButtonGroup>
              </div>
            </div>
          </div>

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">



            <a

              data-video="/instruaud_video.mp4"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/iaudplaceholder.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="/instruaud_video.mp4"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;