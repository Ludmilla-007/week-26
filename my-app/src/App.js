import React from 'react';
import './App.css';
import './Marvel';
import Marvel from './Marvel';

 const Heroes =[
  {
    title:"Капитан Америка",
    universe:"Вселенная: Marvel Comics",
    ego:"Альтер эго: Стивен Роджерс",
    type_of_activity:"Род деятельности:супер-солдат",
    superpower:"сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    url:"https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    more:"Подробнее:Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:) "
      },
 {
  title:"Тор",
  universe:"Вселенная: Marvel Comics",
  ego:"Альтер эго: нет; полное имя — Тор Одинсон",
  type_of_activity:"Род деятельности:борец за справедливость, скандинавский бог",
  superpower:"Суперсилы:все, что может бог, плюс молот Мьелнир ",
  url:"https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
  more:"Подробнее: персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии. "
    },
{
  title:"Халк",
  universe:"Вселенная: Marvel Comics",
  ego:"Альтер эго: Брюс Беннер",
  type_of_activity:"Род деятельности:супергерой, борец за справедливость, ученый-биохимик",
  superpower:"Суперсилы:сверхчеловеческая сила искорость, выносливость, полет",
  url:"https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
  more:"Подробнее:идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев.Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
}
 ]
function App() {
  return (
    <div className="App">
   {
    Heroes.map ((heroes)=>
    <Marvel title={heroes.title} universe={heroes.universe} ego={heroes.ego} type_of_activity={heroes.type_of_activity} superpower={heroes.superpower} url={heroes.url} more={heroes.more}></Marvel>
    )
   }
    </div>
  );
}

export default App;
