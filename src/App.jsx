import { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import DisplaySelector from './components/displaySelector/displaySelector';
import { groupTickets, sortTickets } from './utils/groupAndSort';
import Card from './components/card/card';
import UserIcon from './components/userAvailabilityComponent/userIcon';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage?.getItem('grouping') || 'status');
  const [sortOption, setSortOption] = useState(localStorage?.getItem('sortOption') || 'priority');
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setTickets(data.tickets || []);
      setUsers(data.users || []);
    }

    getData();
  }, []);

  // Local storage to save the states
  
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sortOption', sortOption);
  }, [grouping, sortOption]);

  const handleGroupingChange = (group) => {
    setGrouping(group);
  }

  const handleSortChange = (sort) => {
    setSortOption(sort);
  }

  const groupedTickets = groupTickets( tickets, grouping, users );
  const sortedTickets = sortTickets( groupedTickets, sortOption )

  return (
    <>
      <div className="header">
        <DisplaySelector grouping={grouping} sortOption={sortOption}
          onGroupingChange={handleGroupingChange}
          onSortChange={handleSortChange}/>
      </div>
      <div className="board">
      {Object.keys(sortedTickets).map((groupKey) => (
          <div key={groupKey} className="column">
            <div className="column_title">
              <div className="main_title">
                {(grouping !== 'user') ? 
                  <img src={`${groupKey.toLowerCase().replace(' ','-')}.svg`} alt="img" />
                  :
                  <UserIcon user={users.find(u => u.name === groupKey) || { name: 'Unknown', available: false }} />
                }
                <span>{groupKey}</span>
                <span>{sortedTickets[groupKey].length}</span>
              </div>
              <div className="column_utils">
                <img src="/add.svg" alt="add_icon" />
                <img src="/menu.svg" alt="menu_icon" />
              </div>
            </div>
            {sortedTickets[groupKey].map((ticket) => (
              <Card key={ticket.id} ticket={ticket} users={users} grouping={grouping}/>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App