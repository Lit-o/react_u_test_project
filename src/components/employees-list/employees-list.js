import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    // const elements = data.map(el => <EmployeesListItem name={el.name} salary={el.salary}/>)
    // далее идет еще более сокращенный синтаксис со спреад оператором который раскрывает объект el
    // const {id, ...elProps} = el;
    const elements = data.map(el => <EmployeesListItem key={el.id} {...el}/>)
    console.log(elements)

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