import React from "react";
import { RadioGroup } from "@headlessui/react";

interface RatingFormProps {
  stars: number;
  onChangeHandler: any;
  onSubmitHandler: any;
}

const RatingForm = ({
  stars,
  onChangeHandler,
  onSubmitHandler,
}: RatingFormProps) => {
  return (
    <React.Fragment>
      <RadioGroup
        as="div"
        className="flex items-center justify-between"
        value={stars}
        onChange={onChangeHandler}
      >
        <RadioGroup.Label className="sr-only">1</RadioGroup.Label>
        <RadioGroup.Option value={1}>
          {({ checked, active }) => (
            <span
              className={`rounded-full px-4 py-3 leading-3 bg-blue-light hover:bg-primary hover:cursor-pointer hover:text-white foucs:bg-primary focus:text-white ${
                active ? "bg-grey-medium text-white" : ""
              } ${checked ? "bg-grey-medium text-white" : ""}`}
            >
              1
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Label className="sr-only">1</RadioGroup.Label>
        <RadioGroup.Option value={2}>
          {({ checked, active }) => (
            <span
              className={`rounded-full px-4 py-3 leading-3 bg-blue-light hover:bg-primary hover:cursor-pointer hover:text-white foucs:bg-primary focus:text-white ${
                active ? "bg-grey-medium text-white" : ""
              } ${checked ? "bg-grey-medium text-white" : ""}`}
            >
              2
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Label className="sr-only">1</RadioGroup.Label>
        <RadioGroup.Option value={3}>
          {({ checked, active }) => (
            <span
              className={`rounded-full px-4 py-3 leading-3 bg-blue-light hover:bg-primary hover:cursor-pointer hover:text-white foucs:bg-primary focus:text-white ${
                active ? "bg-grey-medium text-white" : ""
              } ${checked ? "bg-grey-medium text-white" : ""}`}
            >
              3
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Label className="sr-only">1</RadioGroup.Label>
        <RadioGroup.Option value={4}>
          {({ checked, active }) => (
            <span
              className={`rounded-full px-4 py-3 leading-3 bg-blue-light hover:bg-primary hover:cursor-pointer hover:text-white foucs:bg-primary focus:text-white ${
                active ? "bg-grey-medium text-white" : ""
              } ${checked ? "bg-grey-medium text-white" : ""}`}
            >
              4
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Label className="sr-only">1</RadioGroup.Label>
        <RadioGroup.Option value={5}>
          {({ checked, active }) => (
            <span
              className={`rounded-full px-4 py-3 leading-3 bg-blue-light hover:bg-primary hover:cursor-pointer hover:text-white foucs:bg-primary focus:text-white ${
                active ? "bg-grey-medium text-white" : ""
              } ${checked ? "bg-grey-medium text-white" : ""}`}
            >
              5
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>

      <button
        onClick={onSubmitHandler}
        className="bg-primary rounded-full w-full uppercase tracking-widest py-4 mt-8 hover:bg-white hover:text-primary focus:bg-white focus:text-primary active:bg-white active:text-primary font-bold"
      >
        submit
      </button>
    </React.Fragment>
  );
};

export default RatingForm;
