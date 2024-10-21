
import Navbar from '../components/Navbar'

import './Home.css'

function Home() {


  return (
    <div>
      <Navbar />

      <div className="conteudo-container">

        <div className="conteudo-imagem">

          <img className="img-logo" src="./public/images/farmarcia-placa.webp" alt="Placa da FarMárcia" />

          <div className='titulo-incial'>
            <p className="p1">Uma nova fase para a nossa farmácia!</p>
            <p className='p4'>Estamos sob nova administração e prontos para atender você com ainda mais dedicação. Modernizamos nosso espaço e aprimoramos os serviços para garantir uma experiência mais prática e acolhedora. Venha conhecer o novo ambiente e descubra como continuamos focados em cuidar da sua saúde com qualidade e compromisso.</p>
          </div>
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

          <div className='conteudo-footer-cima'>

            <div className='descricao-footer-esquerda'>
              <h1 className='titulo-footer'>SITE DA FARMÁRCIA</h1>
              <p className='texto-descricao-footer'>Esse site é um site meramente ilustrativo, e foi feito para uma atividade de desenvolvimento de sistemas! Mas nem por isso perde a graça.
              </p>

              <p className='texto-descricao-footer'>Puts! Quebrei a quarta parede né?</p>

            </div>

            <div className='descricao-footer-meio'>
              <h1 className='titulo-footer'>DEMOROU MAIS VEIO!</h1>
              <p className='texto-descricao-footer'>Esse site demorou um bocado pra ficar pronto... É, atrasei demais. Mas ta entregue!!</p>

              <p className='desculpa-do-atraso'>Java ta osso...</p>
            </div>


            <div className='descricao-footer-direita'>
              <h1 className='titulo-footer'>TEXTO REPRESENTATIVO</h1>
              <p className='texto-descricao-footer'>É... Fiquei sem criatividade do que escrever aqui. É pra parecer aqueles footer separadinho de empresa, sabe? Acho que deu pra entender.</p>

            </div>



            <div className='conteudo-footer-redes-sociais'>


              <p className='titulo-footer'>SIGA NOSSAS REDES SOCIAIS</p>


              <div className='redes-sociais'>
                <img onClick={() => { alert("É só pra ilustrar zé") }} className="img-redesSociais" src="./public/images/X.png" alt="" />
                <img onClick={() => { alert("É só pra ilustrar zé") }} className="img-redesSociais" src="./public/images/Instagram.png" alt="" />
                <img onClick={() => { alert("É só pra ilustrar zé") }} className="img-redesSociais" src="./public/images/Facebook.png" alt="" />
                <img onClick={() => { alert("É só pra ilustrar zé") }} className="img-redesSociais" src="./public/images/Youtube.png" alt="" />
              </div>

            </div>

          </div>

          <div className='conteudo-footer-baixo'>

            <img className='logo-footer' src="./public/images/farmarcia-logo.png" alt="" />
            <p className='far-marcia'>FarMárcia</p>


          </div>

        </div>
        <div className='copyright'>
          <p className='texto-copyright'> <b>Grupo FarMárcias</b> | Copyright © 2024. Todos os direitos reservados</p>
        </div>

      </div>
    </div>
  )
}

export default Home
