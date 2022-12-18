import React from 'react';
import './App.css';
import './Marvel';
import Marvel from './Marvel';

 const Marvels =[
  {title:"Капитан Америка",universe:"Вселенная: Marvel Comics", ego:"Альтер эго: Стивен Роджерс", type_of_activity:"Род деятельности:супер-солдат", superpower:"сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя", url:"https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"},
 {title:"Тор", url:"https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"},
{title:"Халк", url:"https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"}
 ]
function App() {
  return (
    <div className="App">
   {
    Marvels.map((Marvel)=>
    <Marvel title={Marvels.title} url={Marvels.url}></Marvel>
    )
   }
    </div>
  );
}

export default App;
