import { Dispatch, SetStateAction } from "react";

export interface IProps {
  loading: boolean;
  setLoading?: (value: boolean | (prevVar: boolean) => boolean) => void;
}
