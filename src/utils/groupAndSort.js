export const groupTickets = ( tickets, grouping, users ) => {
    let grouped = {};
    if ( grouping === 'status' ){
        grouped['Backlog'] = [];
        grouped['Todo'] = [];
        grouped['In progress'] = [];
        grouped['Done'] = [];
        grouped['Cancelled'] = [];
        tickets.forEach((ticket) => {
            if(grouped[ticket.status]) grouped[ticket.status].push(ticket);
        });
    }else if( grouping === 'user' ){
        tickets.forEach((ticket) => {
            const user = users.find(u => u.id === ticket.userId);
            const userName = user ? user.name : "Unknown User";
            if (!grouped[userName]) grouped[userName] = [];
            grouped[userName].push(ticket);
        });
    }else if( grouping === 'priority' ){
        grouped['No priority'] = [];
        grouped['Urgent'] = [];
        grouped['High'] = [];
        grouped['Medium'] = [];
        grouped['Low'] = [];
        tickets.forEach((ticket) => {
            const priorityLabel = getPriorityLabel(ticket.priority);
            if (grouped[priorityLabel]) grouped[priorityLabel].push(ticket);
          });
    }

    return grouped;
}

export const sortTickets = ( groupedTickets, sortOption ) => {
    const sorted = {};
    Object.keys(groupedTickets).forEach((group) => {
        sorted[group] = [...groupedTickets[group]].sort((a, b) => {
          if (sortOption === 'priority') {
            return b.priority - a.priority;
          } else if (sortOption === 'title') {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
    });
    return sorted;
}

export const getPriorityLabel = ( priority ) => {
    switch (priority) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      case 0: return 'No Priority';
      default: return 'Unknown Priority';
    }
};