import React from 'react'
import Navbar from '../components/Navbar'
import './Senha.css'

import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Senha() {


  const {senhas, setSenhas} = useContext(GlobalContext)

  function senhaNormal(){
    let novaSenha = {
      id: senhas.length + 1,
      tipo: "Normal",
    }
    setSenhas([...senhas, novaSenha])
  }

  function senhaPreferencial(){
    let novaSenha = {
      id: senhas.length + 1,
      tipo: "Preferencial",
    }
    setSenhas([...senhas, novaSenha])
  }

  function chamarSenha() {
    if (senhas.length === 0) {
      alert("Nenhuma senha disponível!");
      return;
    }

    const senhaPreferencialIndex = senhas.findIndex(senha => senha.tipo === "Preferencial");

    if (senhaPreferencialIndex !== -1) {

      const novasSenhas = senhas.filter((_, index) => index !== senhaPreferencialIndex);
      setSenhas(novasSenhas);
      alert("Senha Preferencial chamada!");
    } else {
  
      const novasSenhas = senhas.filter(senha => senha.tipo === "Normal");
      if (novasSenhas.length > 0) {
        setSenhas(novasSenhas.slice(1));
        alert("Senha Normal chamada!");
      } else {
        alert("Nenhuma senha disponível!");
      }
    }
  }


  return (
    <div>
        <Navbar />

        <div className="conteudo-container-senha">

          <div className='div-esquerda'>

            <button className="botao" onClick={senhaNormal}>Normal</button>
            <button className="botao" onClick={senhaPreferencial}>Preferencial</button>

          </div>

          <div className='div-meio'>

                    <div className='div-senha-super'>
                    {
                      senhas.map((senha) => (
                          <div key={senha.id} className='div-senha'>
                            <p className='p-senha'>ID: {senha.id}</p>
                            <p className='p-senha'>tipo: {senha.tipo}</p>
                          </div>
                      ))
                    }
                  </div>
            
          </div>

          <div className='div-direita'>
            
          <button className="botao" onClick={chamarSenha}>Chamar</button>

          </div>

        </div>


    </div>
  )
}

export default Senha
