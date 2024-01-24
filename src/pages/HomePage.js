import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "O mnie",
        author: "Mateusz Barc",
        text: `Witaj! Jestem pasjonatem programowania z różnorodnym doświadczeniem i wszechstronnymi zainteresowaniami. Z przyjemnością chciałbym Cię przywitać na mojej stronie portfolio.

        Z wykształcenia jestem absolwentem studiów pierwszego stopnia na Wyższej Szkole Informatyki i Zarządzania w Rzeszowie, gdzie zdobyłem solidne podstawy informatyki i programowania. Moja przygoda z technologią rozpoczęła się już w technikum elektronicznym w Rzeszowie, gdzie zdobyłem tytuł technika informatyka.
        
        W trakcie studiów zdecydowałem się na realizację pracy dyplomowej zatytułowanej "Projekt i implementacja aplikacji Twój Dietetyk", co dało mi cenną okazję do zgłębienia zagadnień związanych z tworzeniem oprogramowania. Ten projekt pozwolił mi połączyć moją pasję do programowania z zainteresowaniami związanymi z zdrowym stylem życia.
        
        Moje doświadczenie zawodowe zawiera pracę w agencji marketingowej, gdzie zajmowałem się prowadzeniem marketplace. Ta praktyka pozwoliła mi rozwijać umiejętności z zakresu e-commerce i digital marketingu, co okazało się niezwykle wartościowe w dzisiejszym świecie online.
        
        Obecnie skoncentrowałem swoje wysiłki na rozwoju jako Web Developer, specjalizując się w technologiach takich jak JavaScript, React, HTML i CSS. Moje wcześniejsze doświadczenie programowania w C++ i C# przyczyniło się do rozwoju myślenia programistycznego i skomplikowanego problem-solving, co jest niezwykle przydatne przy tworzeniu aplikacji webowych.`
    },
    {
        id: 2,
        title: "Moje Hobby",
        author: "Mateusz Barc",
        text: `Poza światem technologii, jestem także aktywnym sportowcem. Uwielbiam trenować kickboxing, bieganie i grać w koszykówkę. To nie tylko pomaga mi utrzymać dobrą kondycję, ale także kształtuje umiejętności takie jak dyscyplina, wytrwałość i zdeterminowanie – wartości, które wnoszę także do mojej pracy programisty.

        Dzięki mojemu różnorodnemu doświadczeniu oraz determinacji do ciągłego rozwoju, jestem gotów na wyzwania w dziedzinie programowania i web developmentu. Zapraszam do zapoznania się z moimi projektami i osiągnięciami na tej stronie. Jeśli jesteś zainteresowany współpracą lub masz pytania, nie krępuj się skontaktować ze mną.
        
        Dziękuję za odwiedzenie mojej strony i zapraszam do zapoznania się z moją pracą!`
    }
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id}  {...article} />
    ))
    return (<div className="home">
        {artList}
    </div>);
}

export default HomePage;
