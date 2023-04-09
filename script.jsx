// Компонент User
function User(props) {
  return (
    <p>
      <img src={`https://code.s3.yandex.net/web-code/react/${props.id}.png`} width="75" />
      <br /><b>{props.name}</b>
    </p>
  );
}

// Основной код приложения
ReactDOM.render((
  <>
    <h2>Мои воображаемые друзья:</h2>
    <User id="1" name="Gregory" />
    <User id="2" name="James" />
    <User id="3" name="Allison" />
  </>
), document.querySelector('#root'));