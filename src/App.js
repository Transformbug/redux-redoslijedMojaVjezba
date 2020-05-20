import React,{Component} from 'react';
import Prva from './Komponente/Prva';
import GranaB from './Komponente/granaB';
import {BrowserRouter,Route} from 'react-router-dom';
import moduleName from './Komponente/DupliTest';
import DupliTest from './Komponente/DupliTest';

//VAŽNO: ako promjenimo Redux state Prva.js, ako u mapStateToProps nismo naveli taj neki state redux property kojeg smo promjenili onda se Druga.js neće re-rendati iako je to
//nested komponeta. To je zato jer je i Druga.js spojena na connect i zna se ne nema potrebe re-rendati. ComponetDidUpdate BezConnect.js koje je nested također unutar Prva.js će
//se re-rendati. 
//VAŽNO: Također ako promjenimo neki state property koji je naveden samo u mapStateToProps unutar Druga.js onda se neće re-rendati Prva.js 
//VAŽNO: ako promjenimo stanje i staro stanje bude potpuno isto kao novo stanje neće se dogoditi re-render.To možemo vidjeti u Redux dev toolsu.
//VAŽNO: ako neka kompneta sa svojim dispatch() pokrene promjenu state-a koje samo neka druga komponeta prati u mapStateToProps ta komponeta će se ta neka druga koponeta normalno re-rendati
//ukoliko je dostupna reduxu.
//VAŽNO: što mislim pod 'dostupna reduxu'. Da ta kompneta nije poput primjera doli unutar recimo <Route/> čiji path nije aktivan.Ili recimo da neka komponeta je unutar teranary expressiona
//gdje je trenutni rezultat te logike da taj izraz rezultira sa null, a ne sa tom kopnentom čija promjena redux state će izazvati re-render te komponente.
//VAŽNO: Treba razilikovati React ruter dostupnost i redux dostupnost. Neaktivni <Route/> sam ili unutar <Switch/> je dostpan React router tj. može ga aktivrati NavLink ili this.history.push
//React Routersu su nedostupni elementi poput onog gornje primjer sa teranary expression taj ne može React router uzrokvati re-render nekog elementa ako teranary expression rezultira sa null.
//Dok su Reduxu nedostupni te koponete koje su nedostpune i React Roteru uz to da se Reduxu nedostpne i komponte koje ovise o <Route> react routera.
//VAŽNO: vidi komentare unutar Druga.js i actions.js
//VAŽNO: Vidi unutar Druga.js onaj zadnji botun kad je riječ o tome koliko će se puta re-rendat komponeta kojoj se promjeni mapStateToPorps i koja se mora aktivrati radi withRoutera.

 class App extends Component {

  state={
    counter: 0
  }

  componentDidUpdate(){
    console.log('App.js, componentDidUpdate');
}

//Note: ovo sam dodao radi situacije u axios.interceptrsu callback fn. jel me zbunjivalo što se događa, ovo nema veze sa reduxom...
//VAŽNO: Primjeti razliku kad je ovaj this.setState i return 'bezveze unutar' async code i kad se makne asynce code. Kad je unutar async code prvo se dogodi re-render radi setState
//i tek kasnije se onda dogodi return 'bezveze'. Kad je obični code prvo se dogodti return 'bezveze' pa onda se dogodi re-redner.

  render() {

    return (
      <BrowserRouter>
      <div className="App">
       <Prva/>
       <GranaB/>
       <DupliTest/>
       {/* <Route path='nijeAktivanINePostoji' component={GranaB}/> */}
       
       
       {/* <button onClick={()=>{
         Promise.resolve().then(()=>{
          this.setState({counter: 'više nije counter'})
          return 'bezveze'
         })
    
       }}>botun</button> */}
      </div>
      </BrowserRouter>
    );

  }

}

export default App;
