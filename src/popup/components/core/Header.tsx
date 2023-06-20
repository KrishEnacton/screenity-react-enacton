import PopupLogo from '../../../assets/images/popup/popup-logo.svg'
import PopupMore from '../../../assets/images/popup/popup-more.svg'
// import PopupMore from '../../../assets/images/popup/popup-more.svg'

const Header = () => {
  return (
    <div id="navigation">
      <div id="logo">
        <img src={PopupLogo} alt="Logo" />
        Screenity
      </div>
      <div id="more">
        <img src={PopupMore} alt="More" />
      </div>
      <div id="more-select">
        <a id="shortcuts">Keyboard shortcuts</a>
        <a id="quality">Smaller file size</a>
        <a id="fps">60FPS video</a>
        <a href="https://github.com/alyssaxuu/screenity" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          id="rateextension"
          href="https://chrome.google.com/webstore/detail/screenity-screen-recorder/kbbdabhdfibnancpjfhlkhafgdilcnji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate extension
        </a>
        <a
          id="madeby"
          href="https://twitter.com/alyssaxuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Alyssa X
        </a>
      </div>
    </div>
  )
}

export default Header
