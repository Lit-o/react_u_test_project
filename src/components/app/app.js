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
                { name: 'John Mn', salary: 800, isIncrease: false, isRise: true, id: 1 },
                { name: 'Aohny N', salary: 1800, isIncrease: true, isRise: false, id: 2 },
                { name: 'Bohbsy L', salary: 3800, isIncrease: false, isRise: false, id: 3 },
            ],  
            term: '',
            maxId: 4,
            filterStatus: 'off'      
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
                isIncrease: false,
                isRise: false,
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

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(el => el.id === id);
        //     const old = data[index];
        //     const newItem = {...old, isIncrease: !old.isIncrease};
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArray
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, isIncrease: !item.isIncrease}
                }
                return item;
            })
        }))
    }
    
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, isRise: !item.isRise}
                }
                return item;
            })
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onSearch = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onFilter = (items, filterStatus) => {
        switch(filterStatus) {
            case 'off':
                return items;
            case 'rise':
                return items.filter(item => item.isRise)
            case 'over1000':
                return items.filter(item => item.salary > 1000)
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    switchFilterStatus = (filterStatus) => {
        this.setState({filterStatus});
    }

    render() {        
        const {data, term, filterStatus} = this.state;
        const emloyees = this.state.data.length;
        const increased = this.state.data.filter(el => el.isIncrease).length;
        // const visibleData = this.onSearch(data, term);
        const visibleData = this.onFilter(this.onSearch(data, term), filterStatus)
        console.log(filterStatus)

        return (
            <div className="app">
                <AppInfo emloyees={emloyees} increased={increased}/>
                <div className="search-pannel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter switchFilterStatus={this.switchFilterStatus} filterStatus={filterStatus}/>
                </div>
    
    
                <EmployeesList
                    data={visibleData}
                    onDelete={this.onDeleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAddItem={this.onAddItem}/>
            </div>
        );
    }

}

export default App