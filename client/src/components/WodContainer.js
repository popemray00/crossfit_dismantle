  import React from 'react';
  import Wod from './Wod';
  import './WodContainer.css';
  import axios from 'axios';
  import update from 'immutability-helper';
  import WodForm from './WodsList.js'

  class WodContainer extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          wods: [],
          editingWodId: null
        }
      }

      componentDidMount() {
        axios.get('http://localhost:3001/api/v1/wods.json')
          .then(response => {
            console.log(response)
            this.setState({
              wods: response.data
            })
          })
          .catch(error => console.log(error))
      }

      addNewWod = () => {
        axios.post('http://localhost:3001/api/v1/wods.json', {
            wods: {
              title: 'WOD',
              date: Date(),
              workout: '1'
            }
          })
          .then(response => {
            console.log(response)
            const wods = update(this.state.wods, {
              $splice: [
                [0, 0, response.data]
              ]
            })
            this.setState({
              wods: wods,
              editingWodId: response.data.id
            })
            console.log(this.state)
          })
          .catch(error => console.log(error))
      }

      updateWod = (wod) => {
        const wodIndex = this.state.wods.findIndex(x => x.id === wod.id)
        const wods = update(this.state.wods, {
          [wodIndex]: {
            $set: wod
          }
        })
        console.log(wod)
        this.setState({
          wods: wods
        })
      }

      deleteWod = (id) => {
        axios.delete(`http://localhost:3000/api/v1/wods/${id}`)
          .then(response => {
            const wodIndex = this.state.wods.findIndex(x => x.id === id)
            const wods = update(this.state.wods, {
              $splice: [
                [wodIndex, 1]
              ]
            })
            this.setState({
              wods: wods
            })
          })
          .catch(error => console.log(error))
      }

      enableEditing = (id) => {
        this.setState({
          editingWodId: id
        }, () => {
          this.title.focus()
        })
      }


      render() {
          return ( <
            div className = 'Header' >
            <
            h1 > W.O.D. < /h1> <
            h2 > (Work Out of the Day < button className = "newWodButton"
              onClick = {
                this.addNewWod
              } > < h2 > ) < /h2></button >
            <
            /h2> <
            div className = "WodBox" > {
              this.state.wods.map((wod) => {
                  if (this.state.editingWodId === wod.id) {
                    return ( <
                      WodForm wod = {
                        wod
                      }
                      key = {
                        wod.id
                      }
                      updateWod = {
                        this.updateWod
                      }
                      titleRef = {
                        input => this.title = input
                      }
                      />)
                    }
                    else {
                      return ( <
                        Wod wod = {
                          wod
                        }
                        key = {
                          wod.id
                        }
                        onClick = {
                          this.enableEditing
                        }
                        onDelete = {
                          this.deleteWod
                        }
                        />)
                      }
                    })
                } <
                /div> < /
                div >
              )
            }
          }

          export default WodContainer;