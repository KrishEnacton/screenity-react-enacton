import TabOnlyActive from '../../../assets/images/popup/tab-only-active.svg'
import Desktop from '../../../assets/images/popup/desktop.svg'
import CameraOnly from '../../../assets/images/popup/camera-only.svg'

const Tabs = () => {
  return (
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
  )
}

export default Tabs
