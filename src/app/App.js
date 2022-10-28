
import main from  '../assets/img/mainvisual.jpg';
import tyari1 from  '../assets/img/bicycle1.jpg';
import tyari2 from  '../assets/img/bicycle2.jpg';
import tyari3 from  '../assets/img/bicycle3.jpg';
import profile  from  '../assets/img/logo.svg';
import aikon  from  '../assets/img/favicon.ico';
import about  from  '../assets/img/about.jpg';


import './App.css';

function App() {
  return (
    
<body>
  <header className='header' >
      <img src={profile} className='profile'/>

          <ul className='abye'>
            <li>
               about         
            </li>
            <li>
              bicycle         
            </li>
          </ul>
      
    
  </header>
  <main>
      <div className='main'>
        <img src={main}/>
      </div>
      <section  >
        <h2 > あばうと</h2>
          <div className='marutxt'>
           <img src={about} className="about"/>
           <div >
            <h3 >MARU</h3>
            <p >textてきすとてくすと</p>
           </div>
          </div>
      </section>
      <h2>Bycycle</h2>

      <ul className='gazou'>
        <li>
        <img src={tyari1}/>
        <h3>バイク１</h3>
        <p>テキスト</p>
        </li>

        <li>
          <img src={tyari2}/>
          <h3>バイク2</h3>
          <p>テキスト</p>
        </li>

        <li>
        <img src={tyari3}/>
        <h3>バイク３</h3>
        <p>テキスト</p>
        </li>

      </ul>

      <section>
      </section>
   </main>
   <footer>
    <p>footer</p>
   </footer>
      
     </body>
  
  );
}

export default App;
