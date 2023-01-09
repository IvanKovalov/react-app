import React from "react";

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick (element) {
        element.target.style.backgroundColor = "#" + this.getRandomColor();
        element.target.style.color = "#" + this.getRandomColor();
    }

    getRandomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }

    render() {
        return (
            <div>
                 <p>День народження: 29.10.2003. Місце народження: м. Кропивницький</p>
<p>Освіта: <br/> Середня освіта: НВК №26 м. Кропивницький <br/> 
Незакінчена вища: Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського" Спеціальність: Інженерія програмного забезпечення </p>

<h4>Мої хоббі</h4>
<ul>
  <li onClick={this.onClick} >Футбол</li>
  <li onClick={this.onClick}>software engineering</li>
  <li>Тренування в тренажерному залі</li>
</ul>   

<h4>Улюбленні фільми</h4>
<ol>
  <li>Месники:Фінал</li>
  <li>Код да Вінчі</li>
  <li>Місія нездійсненна</li>
  <li>Топ Ган</li>
</ol>

<p>Ло́ндон — столиця Англії та Великої Британії, розташована на річці Темза. Одне з найбільших міст Європи. Площа 1572 км²; у 2017 році населення становило 8,8 млн осіб, а з передмістями близько 10 млн.

    Середмістя Лондона є фінансовим і комерційним центром Сполученого Королівства Великої Британії та Північної Ірландії. Великий Лондон із 1965 року складається з 32-х округів. Важливе джерело доходу — туризм. Найбільш відвідуваними місцями є: Лондонський Тауер, Собор Святого Павла, Букінгемський палац, Вестмінстерське абатство. Лондонський університет є найбільшим у країні. Фахові корпорації юристів Судові інни існують із XIII століття. Лондон — центр англійської театральної діяльності від часу побудови першого театру Джеймсом Бербеджем 1576 року.
    
    Місто є найбільшим чи одним із двох найбільших (нарівні з Нью-Йорком) фінансових центрів і бізнес-хабів у світі. Також, за версією консалтингової компанії A.T.Kearney, Лондон є найвпливовішим містом у світі.
</p>
            </div>
        );
    }
}