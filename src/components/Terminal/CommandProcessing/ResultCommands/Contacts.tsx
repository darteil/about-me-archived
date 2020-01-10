import React from 'react';
import styles from '../../styles.css';

const Contacts = (): JSX.Element => (
  <div className={styles.contacts}>
    <p>
      Skype: <a href="skype:darteil.work?chat">live:darteil.work</a>
    </p>
    <p>
      Email: <a href="mailto:darteil.work@gmail.com">darteil.work@gmail.com</a>
    </p>
    <p>
      <a target="_blank" rel="noopener noreferrer" href="https://moikrug.ru/crazyraccoon">
        Профиль &quot;Мой круг&quot;
      </a>
    </p>
    <p>Вы так же можете ввести в терминал команду &quot;feedback&quot; и оставить сообщение там</p>
  </div>
);

export default Contacts;
