export type UserModel = {
  _id?: string;
  givenName: string;
  familyName: string;
  email: string;
  studentCardNumber: string;
  dateOfBirth: string;
  bio: string;
  photo: string;
  role: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type EnrollModel = {
  _id: string;
  class: ClassModel;
  user: UserModel;
  role: "number" | "teacher";
};

export type ClassModel = {
  className: string;
  _id?: string;
  description: string;
  createBy?: string;
  slug?: string;
  cover: string;
  teachers?: Array<EnrollModel>;
  createdAt?: string;
  updatedAt?: string;
};
