import { ISpField } from "../../../interfaces/ISpField";
import { ISpItem } from "../../../interfaces/ISpItem";

export interface ISpListState {
  fields: ISpField[];
  items: ISpItem[];
  selectionDetails: {};
  hideDeleteDialog: boolean;
  showEditPanel: boolean;
  formItem: ISpItem;
  editFormErrors: {}; // error message of each components in the form
}
