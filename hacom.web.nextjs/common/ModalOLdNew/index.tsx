import { TradeInItem, tblTradeInHeaderModels } from "@/model/TblTradeIn";
import { createTradeInOrder } from "@/api/apiTradeIn";
import { Modal } from "@mantine/core";
import React, { useState, useEffect } from "react";
import SpecialStep from "./Exchange/specialstep";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty } from "@mantine/form";
import Step1 from "./Exchange/step1";
import Step2 from "./Exchange/step2";
import Step3 from "./Exchange/step3";
import Step4 from "./Exchange/step4";
import StepFinal from "./Exchange/finalstep";
interface ExchangeCardProduct {
  data: TradeInItem;
  tblTradeInHeaderModels: tblTradeInHeaderModels[];
  step: number;
  isModalOpen: boolean;
  price: number;
  closeModal: () => void;
  nextStep: () => void;
  nextStep2: () => void;
  prevStep: () => void;
  finalStep2: () => void;
}
// closeModal={closeModal} nextStep={nextStep} nextStep2={nextStep2} prevStep2={prevStep2} prevStep={prevStep}
const ModalOldNew: React.FC<ExchangeCardProduct> = ({
  data,
  tblTradeInHeaderModels,
  step,
  isModalOpen,
  closeModal,
  nextStep,
  nextStep2,
  prevStep,
  finalStep2,
  price,
}) => {
  const [visible, { toggle, close, open }] = useDisclosure(false);

  //form value
  const [newPrice, setNewPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCondition, setProductCondition] = useState("");
  const [itemUpgradeId, setItemUpgradeId] = useState(0);
  const [itemUpgradeCode, setItemUpgradeCode] = useState("");
  const [type, setType] = useState("");
  const [cusName, setCusName] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [orgId, setOrgId] = useState("");
  //form value

  let modalSize = "869px";
  if (step === 3) {
    modalSize = "1110px";
  }
  const handleStepClose = () => {
    setTotalPrice(price);
    closeModal();
  };

  const form = useForm({
    initialValues: {
      id: 0,
      type: "",
      code: 0,
      codeUpgrade: 0,
      cusName: "",
      cusEmail: "",
      mobileNumber: "",
      ipAddress: "",
      productName: data.itemName,
      productCondition: "",
      accessory: "",
      estimate: 0,
      description: "",
      itemCode: data.itemCode,
      itemId: data.id,
      itemUpgradeId: 0,
      itemUpgradeCode: "",
      orgId: "",
      status: "",
      note: "",
      createdBy: "",
      creationDate: "",
      lastUpdateBy: "",
      lastUpdateDate: "",
    },

    validate: {},
  });

  const onFormSubmit = () => {
    open();
    createTradeInOrder(form.values);
    close();
  };
  useEffect(() => {
    form.setFieldValue("estimate", totalPrice);
    form.setFieldValue("productCondition", productCondition);
    form.setFieldValue("itemUpgradeId", itemUpgradeId);
    form.setFieldValue("itemUpgradeCode", itemUpgradeCode);
    form.setFieldValue("type", type);
    form.setFieldValue("cusName", cusName);
    form.setFieldValue("cusEmail", cusEmail);
    form.setFieldValue("mobileNumber", mobileNumber);
    form.setFieldValue("orgId", orgId);
  }, [
    totalPrice,
    productCondition,
    itemUpgradeId,
    itemUpgradeCode,
    type,
    cusName,
    cusEmail,
    mobileNumber,
    orgId,
  ]);

  useEffect(() => {
    setTotalPrice(price);
  }, [price]);
  return (
    <Modal
      opened={isModalOpen}
      onClose={handleStepClose}
      size={modalSize}
      centered
      radius={12}
    >
      {step === 1 && (
        <Step1
          data={data}
          tblTradeInHeaderModels={tblTradeInHeaderModels}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          setProductCondition={setProductCondition}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2 nextStep={nextStep} nextStep2={nextStep2} setType={setType} />
      )}
      {step === 3 && (
        <Step3
          nextStep={nextStep}
          totalPrice={totalPrice}
          setNewPrice={setNewPrice}
          newPrice={newPrice}
          setItemUpgradeId={setItemUpgradeId}
          setItemUpgradeCode={setItemUpgradeCode}
        />
      )}
      {step === 4 && (
        <Step4
          data={data}
          totalPrice={totalPrice}
          prevStep={prevStep}
          newPrice={newPrice}
          setOrgId={setOrgId}
          setMobileNumber={setMobileNumber}
          setCusEmail={setCusEmail}
          setCusName={setCusName}
          nextStep={nextStep}
        />
      )}
      {step === 5 && (
        <StepFinal onFormSubmit={onFormSubmit} closeModal={closeModal} />
      )}
      {step === 6 && (
        <SpecialStep
          data={data}
          totalPrice={totalPrice}
          prevStep={prevStep}
          closeModal={closeModal}
          setOrgId={setOrgId}
          setMobileNumber={setMobileNumber}
          setCusEmail={setCusEmail}
          setCusName={setCusName}
          finalStep2={finalStep2}
        />
      )}
    </Modal>
  );
};

export default ModalOldNew;
