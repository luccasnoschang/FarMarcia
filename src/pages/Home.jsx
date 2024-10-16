import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './Home.css'

function Home() {


  return (
    <div>
      <Navbar />

      <div className="conteudo-container">

        <div className="conteudo-imagem">

          <img className="img-logo" src="./public/images/farmarcia-placa.webp" alt="Placa da FarMárcia" />

          <p className="p1">Estamos entusiasmados em anunciar uma nova fase para a nossa farmácia! Com a chegada de uma nova direção</p>
        </div>

        <div className='conteudo-texto'>

          <div className='div-conteudo'>
            <p className="p2">Atendimento Personalizado!</p>
            <img className='img-conteudo' src="./public/images/farmarcia-camisas.png" alt="" />
          </div>


          <div className='div-conteudo'>
            <p className="p2">Ampla Variedade de Produtos!</p>
            <img className='img-conteudo' src="./public/images/farmarcia-camiseta.webp" alt="" />
          </div>

          <div className='div-conteudo'>
            <p className="p2">Serviços Inovadores e muito mais!</p>
            <img className='img-conteudo' src="./public/images/farmarcia-cartoes.webp" alt="" />
          </div>


        </div>


        <div className='conteudo-footer'>

          <div className='conteudo-footer-imagem'>
            <p className="p3">Concorra a camisas exclusivas!</p>
            <p className="p3">Clique na imagem</p>
            <img className="img-seta" src="./public/images/seta.png" alt="" />


          </div>


          <div className='conteudo-footer-button'>

            <img onClick={() => { alert("Concorrendo!!!") }} className="img-camisas" src="./public/images/farmarcia-camisas.png" alt="" />

          </div>




        </div>

      </div>
    </div>
  )
}

export default Home
