import { getPriorityLabel } from '../../utils/groupAndSort';
import UserIcon from '../userAvailabilityComponent/userIcon';
import './card.css';

const Card = ({ ticket, users, grouping }) => {
    const user = users.find(user => user.id === ticket.userId);
    const priorityLabel = getPriorityLabel(ticket.priority).toLocaleLowerCase().replace(' ','-');
  return (
    <div className='card'>
        <div className="ticket_id">
            <p className='id'>{ticket.id}</p>
            {(grouping !== "user") ? 
                <UserIcon user={user} /> : 
                <></>
            }
        </div>
        <div className="ticket_title">
            {/* {(grouping !== 'status' && ticket.status.toLocaleLowerCase() === 'done') ? 
                <img src="done.svg" alt="done_icon" /> :
                <div className='circle'></div>
            } */}
            <span>{ticket.title}</span>
        </div>

        <div className="tags">
            {grouping !== 'priority' ? 
            <img src={`${priorityLabel}${priorityLabel === 'urgent' ? '-grey' : ''}.svg`} alt="priority_icon" />
            :
            <></>}  
            {ticket.tag.map((tag,index) => {
                return (
                    <div className="tag" key={index}>
                        <div className="tag-circle"></div>
                        <span>{tag}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Card