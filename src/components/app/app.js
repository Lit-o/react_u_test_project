import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

const App = () => {

    const data = [
        {name: 'John M', salary: 800, increase: true, id: 1},
        {name: 'Johny N', salary: 1800, increase: true, id: 2},
        {name: 'Johnsy L', salary: 3800, increase: false, id: 3},
    ]

 return (
        <div className="app">
            <AppInfo/>
            <div className="search-pannel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App