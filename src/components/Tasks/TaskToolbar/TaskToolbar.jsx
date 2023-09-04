import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/tasks/selectors/selectDate';
import icons from 'img/icons.svg';
import css from './TaskToolbar.module.css';

const TASK_MODAL_TYPES = {
  add: 'Add',
  edit: 'Edit',
};

export const TaskToolbar = ({ task, otherCategories }) => {
    const [isModalOpened, setModalOpening] = useState(false);

    const [isMenuOpened, setMenuOpening] = useState(false);

    const modalRef = useRef(null);
    useEffect(() => {
        const onKeyDown = e => {
            if (e.code === 'Escape') {
                setMenuOpening(false);
            }
        };
        if (isMenuOpened) {
            window.addEventListener('keydown', onKeyDown);
            document.addEventListener('click', handleClickOutside, true);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isMenuOpened]);
    
    const handleClickOutside = event => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setMenuOpening(false);
        }
    };
    
    const date = useSelector(selectDate);

    const handleMoveClick = async category => {
        setMenuOpening(!isMenuOpened);
    };
    
    const handleToggleModal = () => setModalOpening(!isModalOpened);

    return (
        <>
            <div className={css.buttonsWrapper}>
                <svg className={css.taskAction} {isMenuOpened ? 'active' : null}>
                    <use
                        href={`${icons}#arrow-circle-broken-right`}
                        onClick={() => handleMoveClick('done')}
                    />
                </svg>
                <svg className={css.taskAction} {isModalOpened ? 'active' : null}>
                    <use href={`${icons}#pencil-01`} onClick={handleToggleModal} />
                </svg>
                <svg className={css.taskAction}>
                    <use href={`${icons}#trash-04`} />
                </svg>
            </div>
            {isMenuOpened && (
                <ul className={css.popUp} ref={modalRef}>
                    {otherCategories.map(category => {
                        return (
                            <li className={css.moveWrapper}>
                                <button className={css.moveButton} type="button" name={category}>
                                    {category.slice(0, 1).toUpperCase() +
                                        category.slice(1).replace('-', ' ')}
                                    <svg className={css.moveAction}>
                                        <use href={`${icons}#arrow-circle-broken-right`} />
                                    </svg>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};