import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { monthStore } from "../../stores/month-store";
import { userStore } from "../../stores/user-store";
import { Fragment, useState } from "react";
import { EVENT_TYPES } from "../../constants/constants";

export const EventForm = ({ day, onCancel, onOk, events = [] }) => {
  const title = `Уроки ${day}.${monthStore.month}.${monthStore.year}`;
  const userIds = userStore.userIds;

  const [newEvents, setNewEvents] = useState(events);
  console.log(newEvents);
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          {userIds.map((userId) => {
            const user = userStore.getUserById(userId);
            return (
              <Fragment key={userId}>
                <p>{user.name}:</p>
                {[...Array(3)].map((_, typeIndex) => {
                  const isEvent = newEvents.some(
                    (event) =>
                      event.userId === userId && event.type === typeIndex
                  );
                  return (
                    <p key={typeIndex}>
                      <input
                        type="checkbox"
                        checked={isEvent}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setNewEvents([
                              ...newEvents,
                              { userId: userId, type: typeIndex },
                            ]);
                          } else {
                            setNewEvents(
                              newEvents.filter(
                                (item) =>
                                  item.userId != userId ||
                                  item.type != typeIndex
                              )
                            );
                          }
                        }}
                      />
                      <span style={{ color: user.color }}>
                        <i className={EVENT_TYPES[typeIndex].icon}></i>
                      </span>
                      {EVENT_TYPES[typeIndex].name}
                    </p>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
        <div className={styles.actions}>
          <Button onClick={() => onOk(newEvents)}>Ok</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};
