
import main from  '../img/mainvisual.jpg';
import tyari1 from  '../img/bicycle1.jpg';
import tyari2 from  '../img/bicycle2.jpg';
import tyari3 from  '../img/bicycle3.jpg';
import profile  from  '../img/logo.svg';
import aikon  from  '../img/favicon.ico';

import './App.css';

function App() {
  return (
    
     <body>
   <header >
    <nav >
      <ul>
        <li>
        
        </li>
      </ul>
    </nav>
    <img src={profile}/>
   </header>
   <main>
     <div>
     <img src={main}/>
     </div>
     <section>
      <h2>
     あばうと
      </h2>
      <div>

      <img src={aikon}/>
        <h3>
          MARU
        </h3>
        <p>
          textてきすとてくすと
        </p>

 </div>
     </section>
      <h2>
      Bycycle
      </h2>
      <ul>
        <li>
         <h3>
バイク１
         </h3>
        </li>
        
  <img src={tyari1}/>
          <h3>
          バイク2 
           </h3>
        <li>
<img src={tyari2}/>
        </li>
         <h3>
バイク３
         </h3>
        <li>
        <img src={tyari3}/>

         </li>
      </ul>
    _<section>

    </section>
   </main>
   <footer></footer>
      
     </body>
  
  );
}

export default App;
