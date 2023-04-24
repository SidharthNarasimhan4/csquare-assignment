import { ChangeStepType } from "../../App";
import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./styles.module.scss";

export const CreateLot = ({
  changeStep,
}: {
  changeStep: (type: ChangeStepType) => void;
}) => {
  return (
    <Modal>
      <div className={styles.top}>
        <p className={styles.title}>Most played</p>
        <img src="/assets/svg/heartCircle.svg" alt="heart circle" />
      </div>
      <div className={styles.center}>
        <img className={styles.persons} src="/assets/svg/persons.svg" alt="" />
        <img src="/assets/svg/arrows.svg" alt="" />
        <img className={styles.persons} src="/assets/svg/persons.svg" alt="" />
      </div>
      <div className={styles.texts}>
        <p>Multi-user Lot</p>
        <span>
          In this lot multiple people will bet against you. The condition for
          the lot to start is both sides should have equal funds.
        </span>
      </div>

      <Button title="Create Lot" onClick={() => changeStep("next")} />
    </Modal>
  );
};
