function Animal(props) {
  return (
    <div className="animal">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>Рост: {props.height}</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Animal name='Жираф' icon='🦒' height='4 метра' />
    <Animal name='Ёж' icon='🦔' height='15 сантиметров' />
    <Animal name='Скунс' icon='🦨' height='никто не мерял' />
  </>
), document.querySelector('#root'));


