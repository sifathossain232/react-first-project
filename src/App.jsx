
import './App.css'

const singers =[
  {name: 'Mahfuz', job: 'singer1'},
  {name: 'Ashik', job: 'singer2'},
  {name: 'Arshed', job: 'singer3'},
  {name: 'Monir', job: 'singer4'},
]

function App() {
  const nayoks = ['Robule', 'Josim', 'BappaRaz', 'Shakib', 'Salman', 'Manna'];
  return (
      <div className="App">
        {/* {
          nayoks.map(nayok => <Person name={nayok}></Person>)
        } */}
        {
          singers.map(singer => <Person name={singer.name} jobTitel={singer.job}></Person>)
        }
        {/* <Person name={nayoks[0]} nayika="Porimoni"></Person>
        <Person name={nayoks[1]} nayika="Pornima"></Person>
        <Person name="Ashik" nayika="Apu bissaws" jobTitel="Acctor"></Person> */}
        <p className='toto'>ToTo Company</p>
        <Friend movie="Name: Singam" contuct="Phone: 017555"></Friend>
        <Friend movie="Name: Captin Khan" contuct="Phone: 017265"></Friend>
      </div>
  );
}

function Person(props){
  console.log(props);
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <h2>{props.nayika}</h2>
      <p>{props.jobTitel}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className='friend'>
      <h1>{props.movie}</h1>
      <p>{props.contuct}</p>
    </div>
  )
}

export default App
