import type { UserProfileCardProps } from '../../types';
import './UserProfileCard.css';

const UserProfileCard = ({ user, showEmail = true, showRole = true, onEdit, children }: UserProfileCardProps) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
        )}
      </div>
      <h3>{user.name}</h3>
      {showEmail && <p className="user-email">{user.email}</p>}
      {showRole && <span className="user-role">{user.role}</span>}
      {children && <div className="user-extra">{children}</div>}
      {onEdit && (
        <button className="edit-btn" onClick={() => onEdit(user.id)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default UserProfileCard;
