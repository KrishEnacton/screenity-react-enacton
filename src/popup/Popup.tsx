import Layout from './components/core/Layout'

function App() {
  return (
    <Layout>
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
            <span id="countdown-time">3 </span>
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
    </Layout>
  )
}

export default App
