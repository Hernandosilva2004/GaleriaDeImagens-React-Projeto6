import { useState } from "react";


function GaleriaDeImagens() {
    const [imagens, setImagens] = useState([
        'https://giffiles.alphacoders.com/610/61072.gif',
        'https://giffiles.alphacoders.com/610/61072.gif',
        'https://giffiles.alphacoders.com/610/61072.gif'
    ]);

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://giffiles.alphacoders.com/610/61072.gif'])
    }

    return(
        <>
        <h2>Galeria de Imagens</h2>
        <div style={{display: 'flex',  flexWrap: 'wrap',  justifyContent: 'center'}}>

        {imagens.map((imagem, index) => (
            <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{margin: '5px', maxWidth:'20em'}}/>
        ))}
        </div>
        <button onClick={adicionarImagem} style={{marginTop: '10px´'}}>Adicionar Imagem</button>
        </>
    )
}

export default GaleriaDeImagens