import type { AlertBoxProps } from '../../types';
import './AlertBox.css';

const AlertBox = ({ type, message, onClose, children }: AlertBoxProps) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        <span className="alert-message">{message}</span>
        {onClose && (
          <button type="button" className="alert-close" onClick={onClose}>
            ×
          </button>
        )}
      </div>
      {children && <div className="alert-children">{children}</div>}
    </div>
  );
};

export default AlertBox;
