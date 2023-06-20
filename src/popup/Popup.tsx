import PopupLogo from '../assets/images/popup/popup-logo.svg'
import PopupMore from '../assets/images/popup/popup-more.svg'
import TabOnlyActive from '../assets/images/popup/tab-only-active.svg'
import Desktop from '../assets/images/popup/desktop.svg'
import CameraOnly from '../assets/images/popup/camera-only.svg'

function App() {
  return (
    <div>
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
          <a
            href="https://github.com/alyssaxuu/screenity"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <div id="tabs">
        <div id="recording-type">
          <div id="tab-only" className="type type-active">
            <img src={TabOnlyActive} alt="Tab Only" />
            <p>Tab only</p>
          </div>
          <div id="desktop" className="type">
            <img src={Desktop} alt="Desktop" />
            <p>Desktop</p>
          </div>
          <div id="camera-only" className="type">
            <img src={CameraOnly} alt="Camera Only" />
            <p>Camera only</p>
          </div>
        </div>
      </div>
      <div id="body">
        <label htmlFor="camera-select" id="camera-select-label">
          Camera
        </label>
        <select id="camera-select">
          <option value="disabled">Disabled</option>
        </select>
        <label className="check">
          <input id="flip" type="checkbox" />
          <span></span>
          <label htmlFor="flip" id="flip-label">
            Flip camera
          </label>
        </label>
        <label htmlFor="mic-select" id="mic-label">
          Microphone
        </label>
        <select id="mic-select">
          <option value="disabled">Disabled</option>
        </select>
        <label className="check">
          <input id="push" type="checkbox" />
          <span></span>
          <label htmlFor="push" id="push-label">
            Push to talk
          </label>
          (Ctrl+M)
        </label>
        <br />
        <label className="check">
          <input type="checkbox" id="countdown" />
          <span></span>
          <p id="count-select">
            <text id="countdown-time">3 </text>
            <label htmlFor="countdown" id="second-label">
              second
            </label>
          </p>
          <label htmlFor="countdown" id="countdown-label">
            countdown
          </label>
        </label>
        <br />
        <label className="check">
          <input id="persistent" type="checkbox" />
          <span></span>
          <label htmlFor="persistent" id="hover-label">
            Only show toolbar on hover
          </label>
        </label>
        <button id="record" style={{ marginTop: '10px' }} className="record-disabled">
          Loading...
        </button>
        <div id="countdown-select">
          <div id="3-seconds" className="countdown">
            3{' '}
            <label htmlFor="3-seconds" className="seconds-label">
              seconds
            </label>
          </div>
          <div id="5-seconds" className="countdown">
            5{' '}
            <label htmlFor="5-seconds" className="seconds-label">
              seconds
            </label>
          </div>
          <div id="10-seconds" className="countdown">
            10{' '}
            <label htmlFor="10-seconds" className="seconds-label">
              seconds
            </label>
          </div>
        </div>
      </div>
      {/* <script src='../js/libraries/jquery-3.5.1.min.js'></script>
      <script src='../js/libraries/jquery.nice-select.min.js'></script>
      <script src='../js/popup.js'></script> */}
    </div>
  )
}

export default App
