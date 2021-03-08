// import logo from './logo.svg';
import './App.css';
import Emp from './components/employee.js';

function App() {

  // var employee=
  //        {
  //            name: "Owino",
  //            age: 23,
  //            profession: "Developer",
  //            salary: "KES 230000"
  //        }

  var name= 'Owino';
  var age= 23;
  var profession= 'Developer';
  var salary= 'KES 230000';
         
  return (
    <div className="App">
      <Emp nam= {name} age= {age} profession= {profession} salary= {salary} />
    </div>
  );
}

export default App;
