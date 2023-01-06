
import Group from './assets/Group77.png'

import './Herosection.css'
function HeroSection() {


  return (
    <div className="HeroSection">
        <img src={Group}/>
        <div className='description'>
            <h1>Experiências online</h1>
            <p>Junte-se a atividades únicas liderada por hosts sem sair de casa</p>
        </div>
    </div>
  )
}

export default HeroSection
