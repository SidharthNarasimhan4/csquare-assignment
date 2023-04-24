import {
  CreateLot,
  FirstStep,
  Modal,
  SecondStep,
  Steps,
  ThirdStep,
} from "./components";
import { DummyProps } from "./utils/data";
import { useState } from "react";

import styles from "./App.module.scss";

export type ChangeStepType = "next" | "back" | "first";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [yourAsset, setYourAsset] = useState<DummyProps | null>(null);
  const [opposingAsset, setOpposingAsset] = useState<DummyProps | null>(null);

  console.log({ yourAsset, opposingAsset });

  const changeStep = (type: ChangeStepType) => {
    switch (type) {
      case "back":
        setCurrentStep(currentStep - 1);
        break;
      case "next":
        setCurrentStep(currentStep + 1);
        break;
      case "first":
        setCurrentStep(0);
        break;
    }
  };

  let content;

  switch (currentStep) {
    case 1:
      content = (
        <FirstStep
          yourAsset={yourAsset}
          setYourAsset={setYourAsset}
          changeStep={changeStep}
        />
      );
      break;

    case 2:
      content = (
        <SecondStep
          opposingAsset={opposingAsset}
          setOpposingAsset={setOpposingAsset}
          changeStep={changeStep}
        />
      );
      break;

    case 3:
      content = (
        <ThirdStep
          changeStep={changeStep}
          opposingAsset={opposingAsset}
          yourAsset={yourAsset}
        />
      );
      break;

    default:
      content = (
        <FirstStep
          yourAsset={yourAsset}
          setYourAsset={setYourAsset}
          changeStep={changeStep}
        />
      );
  }

  return currentStep === 0 ? (
    <CreateLot changeStep={changeStep} />
  ) : (
    <Modal>
      <div className={styles.top}>
        <p>Multi-user Lot</p>
        <img
          src="/assets/svg/closeCircle.svg"
          alt="close circle"
          onClick={() => changeStep("first")}
        />
      </div>

      <Steps currentStep={currentStep} steps={3} />

      {content}
    </Modal>
  );
}

export default App;
