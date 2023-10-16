import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { User } from "../User/component";
import { Button } from "../Button/component";
import { createPortal } from "react-dom";
import { UserForm } from "../UserForm/component";

const DEFAULT_USERS = [
  {
    name: "Иван Иваныч",
    color: "#B74803",
  },
  {
    name: "Алиса",
    color: "#B74803",
  },
  {
    name: "Денис",
    color: "#B74803",
  },
];

export const Users = () => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("pfl_users")) || DEFAULT_USERS
  );
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    localStorage.setItem("pfl_users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      {users.map((item) => (
        <User
          key={item.name}
          user={item}
          onDelete={() =>
            setUsers(users.filter((user) => item.name != user.name))
          }
          onEdit={(updatedUser) =>
            setUsers(
              users.map((user) => (item.name == user.name ? updatedUser : user))
            )
          }
        ></User>
      ))}
      <div className={styles.actions}>
        <Button onClick={() => setShowModal(true)} title="Добавить ученика">
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>

      {showModal &&
        createPortal(
          <UserForm
            title="Новый пользователь"
            onCancel={() => setShowModal(false)}
            onOk={(user) => {
              if (!users.find((item) => user.name == item.name)) {
                setUsers([...users, user]);
              }
              setShowModal(false);
            }}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
