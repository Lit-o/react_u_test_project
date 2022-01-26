import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Mn', salary: 800, increase: true, id: 1 },
                { name: 'Johny N', salary: 1800, increase: true, id: 2 },
                { name: 'Johnsy L', salary: 3800, increase: false, id: 3 },
            ],  
            maxId: 4      
        }
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(el => el.id === id)
            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArray = [...before, ...after] конструкция по удалению если не применяем фильтр
            const newArray = data.filter(el => el.id !== id)
            return {
                data: newArray
            }

        })
    }

    onAddItem = (name, salary) => {
        this.setState(({data, maxId}) => {
            const newItem = { 
                name: name,
                salary: salary,
                increase: false,
                id: maxId
            }
            console.log(newItem)
            const newArray = [...data, newItem]
            return {
                data: newArray,
                maxId: maxId + 1
            }
        })
        console.log('onAddItemWork')
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-pannel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.onDeleteItem}
                />
                <EmployeesAddForm onAddItem={this.onAddItem}/>
            </div>
        );
    }

}

export default App