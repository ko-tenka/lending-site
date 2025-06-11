import './Content.css'


import Girl from '../../../public/girl.png'
import Idea from '../../../public/IDEA.png'
import Grow from '../../../public/GROWTH!.png'
import Team from '../../../public/TEAM.png'
import Strelka from '../../../public/strelka.png'
import Seti from '../../../public/seti.png'

export default function Content() {
  return (
    <div className="content_conteiner">
      <div>
        <h1 className="content_h1">посадочная страница за 5 дней</h1>
        <p className="content_p1" >с <strong>анализом целевой</strong> аудитории <strong>отстройкой</strong> от конкурентов и <strong>гарантией</strong> высокой конверсии</p>
        <p className="content_p2" >реализовали более 100 проектов, привлекли более 10000 клиентов в разные ниши</p>
        <div className="float-wrapper idea">
            <img className="content_idea" src={Idea} alt="" />
        </div>
        <div className="float-wrapper grow">
            <img className="content_grow" src={Grow} alt="" />
        </div>
        <div className="float-wrapper team">
            <img className="content_team" src={Team} alt="" />
        </div>
        <div className="float-wrapper strelka">
            <img src={Strelka} alt="" />
        </div>
        <div className='float-wrapper seti'>
         <img className="content_seti" src={Seti} alt="" />
         </div>

      </div>

      <div className='content_gtrlConteiner'>
        <img className='content_gtrl' src={Girl} alt="" />
        <div className='content_gtrlBG1'></div>
        <div className='content_gtrlBG2'></div>
      </div>
    </div>
  )
}
