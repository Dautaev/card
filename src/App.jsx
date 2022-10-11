import { useState } from "react";

function App() {
  const [details, setDetails] = useState(false)
  const [inBasket, setInBasket] = useState(false)
  

  return (
    <div className="card">
      <img
        src="https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/12/12/15/5093804/ecaf89e2a7f820d92118e228d29aa7c924a5da5c.jpg"
        alt=""
      />
      <div className="infoContainer">
        <div className="mainContainer">
          <h3>Nike Sneaker</h3>
          <h2>$120</h2>
        </div>
        <div className="getDetalis">
          <button onClick={() => setDetails(!details)} className="butDetalis">Детали</button>
        </div>
      </div>
      {details && <div className="sectionContainer">
        <button onClick={() => setDetails(false)}>x</button> 
        <p className="fff">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          nesciunt similique provident
        </p>
      </div>}
      <hr />
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, at
          sunt. Quae, cum necessitatibus quod maxime doloremque molestias
        </p>
        {!inBasket ? <button onClick={() => setInBasket(true)} className="butDetalistwo">Добавить в корзину</button> :
          <button style={{ opacity: '0.7', cursor: 'no-drop' }} className="butDetalistwo">Уже в корзине</button>  } 
        {inBasket && <div onClick={() => setInBasket(false)} className='notInBasket'>Удалить из корзины</div>}
      </div>
    </div>
  );
}

export default App;
