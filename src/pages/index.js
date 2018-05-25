import React from 'react'
import Link from 'gatsby-link'
import Home from '../components/Home'
import About from '../components/About'
import Icons from '../components/Icons'

const IndexPage = () => (
  <div>
    <Home
      image="https://raw.githubusercontent.com/akai-org/onepage/master/src/img/background.png"
      subtitle="Akademickie Koło Aplikacji Internetowych"
      title="AKAI"
      description="Koło naukowe działające na Politechnice Poznańskiej"
    />
    <About
      subtitle="O nas"
      title="Koło naukowe AKAI"
      image="https://github.com/akai-org/onepage/blob/master/src/img/macbook.png?raw=true"
    >
      <p>
        <strong>Akademickie Koło Aplikacji Internetowych</strong> rozpoczęło
        swoją działalność na Wydziale Informatyki Politechniki Poznańskiej w
        2010 roku. Działamy jednakże na terenie wszystkich uczelni w Poznaniu i
        naszym członkiem może być każdy student, niezależnie na jakiej uczelni
        studiuje. Skupiamy młodych i ambitnych ludzi, którzy jako cel stawiają
        sobie rozwój i osiągnięcie sukcesu w dziedzinie aplikacji internetowych.
        Zależy nam na promowaniu idei sieci budowanej przez profesjonalistów,
        którzy znają wartość swojej wiedzy i są zawsze głodni nowych
        umiejętności i doświadczenia.
      </p>
      <p>
        Aby mieć szansę na realizację własnych celów dołączamy
        do&nbsp;projektów, które skupiają studentów nie tylko z Polski, ale i z
        całego świata. Liczymy, że realizacje w sektorze prywatnym oraz
        publicznym, dadzą członkom <strong>AKAI</strong> szansę na budowanie
        profesjonalizmu i zdobycie tak ważnego&nbsp;doświadczenia&nbsp;dla
        obecnej i przyszłej działalności. Staramy się nawiązywać współpracę z
        placówkami naukowymi, przedstawicielami firm oraz znanymi specjalistami
        ze świata IT. Jesteśmy gotowi podejmować kolejne wyzwania i pokazywać,
        że wiedza i doświadczenie przekazywane przez naszą organizacja
        stanowi&nbsp;przyszłość&nbsp;projektowania aplikacji internetowych.
      </p>
      <p>
        Nie koncentrujemy się na tylko jednej konkretnej technologii, metodyce
        prowadzenia projektu czy środowisku programistycznym. Przystępując do
        nas możecie robić dalej&nbsp;to co was kręci – to czego będziecie się
        uczyć, zależy wyłącznie od was. Nie narzucamy klapek na oczy i nie
        mówimy o jedynych słusznych rozwiązaniach. Rozmawiamy o czymkolwiek
        powiązanym z:
      </p>
      <ul>
        <li>webdevelopment po stronie klienta/serwera</li>
        <li>platformy mobilne</li>
        <li>user experience, usability</li>
        <li>projektowanie baz danych</li>
        <li>tworzenie statycznej/dynamicznej identyfikacji graficznej</li>
        <li>prowadzenie projektów</li>
        <li>pozycjonowanie</li>
      </ul>
      <p>
        Niezależnie od &nbsp;Twojego obecnego poziomu w dziedzinie aplikacji
        internetowych liczy się dla nas Twoja pasja. Znajdziemy szkolenia,
        warsztaty i projekty, dzięki którym będziesz miał szansę na nabranie
        nowej perspektywy, oraz:
      </p>
      <ul>
        <li>zdobędziesz doświadczenie przy pracy z najnowszymi narzędziami</li>
        <li>będziesz pracować na bleeding edge’u technologii webowych</li>
        <li>zaliczysz praktyki i zdobędziesz staż</li>
        <li>zrealizujesz prace dyplomowe</li>
        <li>
          wyjedziesz na konferencje oraz warsztaty krajowe i międzynarodowe
        </li>
      </ul>
      <p>
        Zapraszamy do przyłączenia się do naszej społeczności i wspólnego
        budowania idei jaką jest <strong>AKAI</strong>. Informacje jak do nas
        dołączyć znajdziesz{' '}
        <a href="http://akai.tnas.pl/dolacz-do-nas/">tutaj</a>.
      </p>
    </About>
    <Icons icons={[{ big: 'Dołącz do nas' }]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
