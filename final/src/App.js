import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      index:0,
      carname:"",
      LicensePlates:0,
      action:"ADD CAR",//default ADD CAR
      cars:[
          {
            carname:"Honda SH 2021",
            LicensePlates:7060
          },
          {
            carname:"Honda Vision 2021",
            LicensePlates:1321
          },
          {
            carname:"Yamaha MT-15 2022",
            LicensePlates:4953
          }
      ]
    }
  }

  //function changeCarName 
  changeCarName = (e)=>{
    this.setState({
      carname:e.target.value
    })
  }

  //function changeLicensePlates
  changeLicensePlates=(e)=>{
    this.setState({
      LicensePlates:e.target.value
    })
  }

  //ADD CAR
  addCar=()=>{
    if(!this.state.cars.find(car=>car.carname===this.state.carname)){
      this.setState({
        cars:[
          ...this.state.cars,
          {carname:this.state.carname,LicensePlates:this.state.LicensePlates}
        ],
        carname:"",
        LicensePlates:""
      });

    }
  }

  //EDIT CAR
  editCar=(car,index)=>{
    console.log(car);
    this.setState({
      index:index,
      carname:car.carname,
      LicensePlates:car.LicensePlates,
      action:'UPDATE CAR'
    })
  }

  //UPDATE Car
  updateCar = ()=>{
    let cars = this.state.cars;
    cars.map((car,index)=>{

        if(this.state.index===index){
          car.carname = this.state.carname;
          car.LicensePlates = parseInt(this.state.LicensePlates)
        }

    })

     //set update Cars
    this.setState({
        cars:cars,
        carname:"",
        LicensePlates:0,
        action:'ADD CAR'
    })
  }

  //DELETE CAR
  deleteCar = (carname)=>this.setState({
    cars: this.state.cars.filter(car=>car.carname!=carname)
  })

  
  render() {
    return (
      <div>
        <div className="container">
            <div className = "row">
                <div className="col-md-4">
                  <h1>{this.state.action}</h1>
                  <div className="form-group">
                      <label>Car Name</label>
                      <input type="text" className="form-control" value={this.state.carname} onChange={this.changeCarName}/>
                  </div>
                  <div className="form-group">
                      <label>License Plates</label>
                      <input type="text"  className="form-control"  value={this.state.LicensePlates} onChange={this.changeLicensePlates}/>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" onClick={this.state.action==='ADD CAR'?this.addCar:this.updateCar}>

                      {this.state.action==='ADD CAR'?'Add':'Update'}

                      </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <h1>List Cars</h1>
                  <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Car Name</th>
                          <th>License plates</th>
                          <th>Remove</th>
                          <th>Modify</th>
                        </tr>
                      </thead>
                      <tbody>
                            {
                              this.state.cars.map((car,index)=>(
                                <tr key={index}>
                                  <td>{index}</td>
                                  <td>{car.carname}</td>
                                  <td>{car.LicensePlates}</td>
                                  <td><span className="badge badge-danger" onClick={()=>this.deleteCar(car.carname)}>remove</span></td>
                                  <td><span className="badge badge-warning" onClick={()=>this.editCar(car,index)}>modify</span></td>
                                </tr>
                              ))
                            }
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App