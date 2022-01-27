import "./app-filter.css"

const AppFilter = ({switchFilterStatus, filterStatus}) => {
    
    const onFilterChange = (e) => {
        const currentFilterStatus = e.currentTarget.getAttribute("data-filter-status")
        switchFilterStatus(currentFilterStatus)
    }

    const btns = [
        {status: 'off', label: 'Все сотрудники'},
        {status: 'rise', label: 'На повышение'},
        {status: 'over1000', label: 'З/П больше 1000'}
    ]

    const btnsJSX = btns.map(({status, label}) => {
        return (
            <button 
            className={`btn ${(status === filterStatus) ? 'btn-light' : 'btn-outline-light'}`}
           type="button" 
           data-filter-status={status} 
           onClick={onFilterChange}
           key={status}
           >
              {label}
           </button>           
        )
    })

    return (
       <div className="btn-group">
            {btnsJSX}
       </div> 
    )
}

export default AppFilter;

// "btn btn-light"  "btn btn-outline-light"

// onSearch = (items, term, filterStatus) => {    my first solution in app
//     switch(filterStatus){
//         case 'off':
//             if (term.length === 0) {
//                 return items;
//             }
//             return items.filter(item => {
//                 return item.name.indexOf(term) > -1
//             });
//         case 'rise':
//             if (term.length === 0) {
//                 return items.filter(item => {
//                     return item.isRise
//                 });
//             }
//             return items.filter(item => {
//                 return item.name.indexOf(term) > -1
//             }).filter(item => {
//                 return item.isRise
//             });
//         case 'over1000':
//             if (term.length === 0) {
//                 return items.filter(item => {
//                     return item.salary > 1000
//                 });
//             }
//             return items.filter(item => {
//                 return item.name.indexOf(term) > -1
//             }).filter(item => {
//                 return item.salary > 1000
//             });
//         default:
//             return items
//     }
// }