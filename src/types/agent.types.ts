//create agent request
export interface IAgentCreate {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  officeAddress: string;
}

export interface IAgentData extends IAgentCreate {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}
