import { useAuth } from 'hooks/useAuth'; 
import TaskToolbar from '../TaskToolbar/TaskToolbar'; 
import css from './TaskColumnCard.module.css'; 
 
export const TaskColumnCard = ({task, otherCategories}) => { 
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
 
    const { user } = useAuth();
    const {name, userImgUrl} = user;
 
  const displayName = userImgUrl ? ( 
    <img src={userImgUrl} alt="UserPicture" /> 
  ) : ( 
    <p className="initials">{getInitials(name)}</p> 
    ); 



  return ( 
    <div className={css.taskCard}> 
      <h3 className={css.cardTitle}>{task.title}</h3> 
      <div className={css.cardInfo}> 
        <div className={css.styledInfo}> 
          <div className={css.userLogo}> 
            {displayName} 
          </div> 
                  <p className={css.priorityTitle}>{task.priority}</p> 
        </div> 
        <TaskToolbar task={task} otherCategories={otherCategories}/> 
      </div> 
    </div> 
  ); 
};

export default TaskColumnCard;
