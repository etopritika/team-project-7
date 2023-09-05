import TaskToolbar from '../TaskToolbar/TaskToolbar';
import css from './TaskColumnCard.module.css';

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

  const { owner } = task; 
  const userImgUrl = owner.avatarURL; 

  const displayName = userImgUrl ? (
    <img src={userImgUrl} alt="UserPicture" />
  ) : (
    <p className="initials">{getInitials(owner.name)}</p>
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
