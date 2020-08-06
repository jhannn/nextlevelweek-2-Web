import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/6514834?s=460&v=4" alt="Foto do Proffy" />
                <div>
                    <strong>Nome do Proffy</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Lorem ipsum senectus proin eu aliquam morbi, tortor eget fringilla ut. curabitur vestibulum scelerisque donec dolor libero iaculis adipiscing rutrum, varius pharetra pellentesque vulputate varius libero in, viverra egestas aenean eleifend tincidunt accumsan quisque. netus conubia ornare amet adipiscing augue a nisl sed fringilla sodales varius tortor dui, donec convallis erat litora mollis enim morbi imperdiet fames massa libero primis. tristique posuere habitant morbi gravida in sed elit id, porta convallis curabitur nunc primis mattis morbi, primis torquent in pellentesque fermentum lacinia ipsum. platea etiam euismod aenean porttitor donec porttitor tellus suscipit class donec, nullam risus taciti integer etiam vehicula accumsan fermentum.
                        <br /><br />
                        Curabitur auctor tempor neque aliquam et quisque etiam tempus commodo, litora turpis eleifend scelerisque semper augue justo potenti habitasse iaculis, lorem dapibus sit justo aliquet curae curabitur lobortis. ipsum molestie nostra vestibulum mi facilisis dui integer dictumst gravida, diam aliquam class ullamcorper tellus habitant gravida magna, primis ligula curae mi hac cras suscipit integer. ultricies cubilia augue nisl urna habitant diam ipsum primis eu, himenaeos neque sagittis imperdiet volutpat auctor eros ipsum, fringilla vulputate rhoncus tellus cubilia lacinia odio lorem. suscipit dolor porta purus lectus convallis est dui nullam sociosqu, integer est nisl sociosqu massa adipiscing porttitor semper.
                    </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;