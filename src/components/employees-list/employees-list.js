import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    // const elements = data.map(el => <EmployeesListItem name={el.name} salary={el.salary}/>)
    // далее идет еще более сокращенный синтаксис со спреад оператором который раскрывает объект el
    // const {id, ...elProps} = el;
    const elements = data.map(el => <EmployeesListItem 
        key={el.id} 
        {...el} 
        onDelete={() => onDelete(el.id)}
        // onToggleIncrease={() => {onToggleIncrease(el.id)}}
        // onToggleRise={() => {onToggleRise(el.id)}}
        onToggleProp={(e) => onToggleProp(el.id, e.currentTarget.getAttribute("data-toggle"))}
        />)

    // console.log(elements)

    return (
        <ul className="app-list list-group">
            {elements}

            {/* {data.map(el => <EmployeesListItem name={el.name} salary={el.salary}/>)}
                можно сразу вписать, а можно через создание elements
            */}
            
            {/* <EmployeesListItem name={data[0].name} salary={data[0].salary}/>
            <EmployeesListItem name="Johny N" salary={1800}/>
            <EmployeesListItem name="Johnsy L" salary={2800}/> */}
        </ul>
    )
}

export default EmployeesList;