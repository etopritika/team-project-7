import TaskToolbar from '../TaskToolbar/TaskToolbar';
import css from './TaskColumnCard.module.css';
import { selectUser } from '../../../redux/auth/selectors';
import { useSelector} from 'react-redux';

export const TaskColumnCard = ({ task, otherCategories }) => {
  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const userInfo = useSelector(selectUser);
  
  const userImgUrl = userInfo.avatarURL; 
  const name = userInfo.name;

  const displayName = userImgUrl ? (
    <img src={userImgUrl} alt="UserPicture" />
  ) : (
    <p className="initials">{getInitials(name)}</p>
  );

  const getPriorityClass = priority => {
    switch (priority) {
      case 'low':
        return css.todobgitemlow;
      case 'medium':
        return css.todobgitemmedium;
      case 'high':
        return css.todobgitemhigh;
      default:
        return '';
    }
  };

  return (
    <div className={css.taskCard}>
      <h3 className={css.cardTitle}>{task.title}</h3>
      <div className={css.cardInfo}>
        <div className={css.styledInfo}>
          <div className={css.userLogo}>{displayName}</div>
          <p
            className={`${css.priorityTitle} ${getPriorityClass(
              task.priority
            )}`}
          >
            {task.priority}
          </p>
        </div>
        <TaskToolbar task={task} otherCategories={otherCategories} />
      </div>
    </div>
  );
};

export default TaskColumnCard;
