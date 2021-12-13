import style from './style.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.homeImage}>
        <div>
          <h1>Clinica Virtual</h1>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <img src='nurse-g40797251e_1920.jpg' alt='enfermeira'/>
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque tortor purus, fermentum vitae porta porttitor, sagittis quis eros.
              Cras eu sapien et ex ornare accumsan. Suspendisse vel suscipit ex, non blandit elit.
              Vestibulum a tincidunt enim, vitae accumsan massa. Nulla porttitor luctus lacus nec
              pulvinar. Quisque sed scelerisque ex. Phasellus vitae viverra nibh. Etiam suscipit,
              ligula varius rhoncus gravida, enim magna rhoncus odio, a mollis nisl odio sit amet
              urna. Cras eget justo elit. Nullam in varius libero, ut finibus augue. Curabitur
              eros justo, egestas vitae facilisis et, lacinia sit amet justo.

              Nam nunc dolor, accumsan laoreet neque eget, dictum vehicula nisi.
              Phasellus pulvinar, lorem sit amet lobortis tempor, sapien erat eleifend felis,
              et aliquet ipsum massa quis nunc. Integer venenatis enim viverra malesuada semper.
              Pellentesque auctor pharetra elit a cursus. Nullam pretium tincidunt nulla, id
              luctus augue laoreet id. Nam quis cursus massa. Cras finibus efficitur nibh, id
              tristique purus gravida eu. Praesent tempus velit at auctor pretium. Nulla finibus
              congue turpis a bibendum. Praesent molestie mauris tellus, sit amet pulvinar lacus
              iaculis ut. Aliquam laoreet nisl id neque efficitur, a hendrerit sapien aliquet.

              In rutrum felis at mauris luctus dapibus. Sed fermentum commodo diam. Phasellus
              pharetra auctor massa, vel dictum lorem rhoncus vel. Integer molestie tellus
              condimentum, accumsan urna id, accumsan dui. Mauris ipsum ex, bibendum eu bibendum
              eu, venenatis consectetur leo. Mauris vestibulum non purus et aliquet. Proin
              fringilla erat nibh, at convallis ante convallis vel. Nunc interdum ante lectus,
              id euismod felis vestibulum luctus. Ut posuere magna in nibh pulvinar, id interdum
              ante tempus. Nunc pretium pharetra facilisis. Aliquam ut lorem quam. Duis fringilla
              ante ante, a varius nibh mattis eu. Mauris maximus lacus fermentum metus consectetur
              ullamcorper. Pellentesque et urna vehicula, faucibus elit in, fringilla erat.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export { Home };
