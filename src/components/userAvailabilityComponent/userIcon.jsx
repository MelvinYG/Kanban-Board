import './userIcon.css';

const UserIcon = ({ user }) => {
  return (
    <div className="user_img_container">
        <img src="/user.svg" alt="user_img" />
        <div className={'user-availability ' + (user.available ? 'available' : '')}></div>
    </div>
  )
}

export default UserIcon