import './intro.css';
import me from '../../img/gymnast.jpg'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Brandon Bailey</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Pilot</div>
              <div className="i-title-item">Aviation Enthusiast</div>
            </div>
          </div>
          <p className="i-desc">
            I am a new web developer with a passion for creating beautiful, stylish websites and applications.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className='i-img'/>
      </div>
    </div>
  );
}

export default Intro